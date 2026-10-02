const fs = require("fs");
const zlib = require("zlib");

function decodePNG(file) {
  const buf = fs.readFileSync(file);
  let pos = 8, w, h, colorType, idat = [], palette = null;
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString("ascii", pos + 4, pos + 8);
    const data = buf.slice(pos + 8, pos + 8 + len);
    if (type === "IHDR") { w = data.readUInt32BE(0); h = data.readUInt32BE(4); colorType = data[9]; }
    else if (type === "PLTE") palette = data;
    else if (type === "IDAT") idat.push(data);
    else if (type === "IEND") break;
    pos += 12 + len;
  }
  const channelsMap = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 };
  const bpp = channelsMap[colorType];
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const stride = w * bpp;
  const out = new Float32Array(w * h);
  let prev = Buffer.alloc(stride), rp = 0;
  for (let y = 0; y < h; y++) {
    const filter = raw[rp++];
    const cur = Buffer.from(raw.slice(rp, rp + stride)); rp += stride;
    for (let x = 0; x < stride; x++) {
      const a = x >= bpp ? cur[x - bpp] : 0, b = prev[x], c = x >= bpp ? prev[x - bpp] : 0;
      let v = cur[x];
      switch (filter) {
        case 1: v = (v + a) & 0xff; break;
        case 2: v = (v + b) & 0xff; break;
        case 3: v = (v + ((a + b) >> 1)) & 0xff; break;
        case 4: { const p = a + b - c; const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
          v = (v + (pa <= pb && pa <= pc ? a : pb <= pc ? b : c)) & 0xff; break; }
      }
      cur[x] = v;
    }
    prev = cur;
    for (let x = 0; x < w; x++) {
      let r, g, bl;
      if (colorType === 3) { const idx = cur[x]; r = palette[idx * 3]; g = palette[idx * 3 + 1]; bl = palette[idx * 3 + 2]; }
      else if (colorType === 0) { r = g = bl = cur[x]; }
      else if (colorType === 2) { r = cur[x * 3]; g = cur[x * 3 + 1]; bl = cur[x * 3 + 2]; }
      else if (colorType === 6) { r = cur[x * 4]; g = cur[x * 4 + 1]; bl = cur[x * 4 + 2]; }
      else { r = g = bl = cur[x * 2]; }
      out[y * w + x] = 0.299 * r + 0.587 * g + 0.114 * bl;
    }
  }
  return { w, h, data: out };
}

function resizeBilinear(src, sw, sh, tw, th) {
  const out = new Float32Array(tw * th);
  for (let y = 0; y < th; y++) for (let x = 0; x < tw; x++) {
    const fx = (x / (tw - 1)) * (sw - 1), fy = (y / (th - 1)) * (sh - 1);
    const x0 = Math.floor(fx), y0 = Math.floor(fy);
    const x1 = Math.min(sw - 1, x0 + 1), y1 = Math.min(sh - 1, y0 + 1);
    const ax = fx - x0, ay = fy - y0;
    out[y * tw + x] = src[y0 * sw + x0] * (1 - ax) * (1 - ay) + src[y0 * sw + x1] * ax * (1 - ay)
      + src[y1 * sw + x0] * (1 - ax) * ay + src[y1 * sw + x1] * ax * ay;
  }
  return out;
}

// NCC of template T (tw x th) at each position of Haystack H
function bestNCC(H, hW, hH, T, tW, tH) {
  // integral sums for normalization
  let best = -2, bestPos = null;
  const S1 = new Float64Array(hW * hH), S2 = new Float64Array(hW * hH);
  for (let y = 0; y < hH; y++) for (let x = 0; x < hW; x++) {
    const v = H[y * hW + x];
    S1[y * hW + x] = v;
    S2[y * hW + x] = v * v;
    if (y) { S1[y * hW + x] += S1[(y - 1) * hW + x]; S2[y * hW + x] += S2[(y - 1) * hW + x]; }
    if (x) { S1[y * hW + x] += S1[y * hW + x - 1]; S2[y * hW + x] += S2[y * hW + x - 1]; }
    if (x && y) { S1[y * hW + x] -= S1[(y - 1) * hW + x - 1]; S2[y * hW + x] -= S2[(y - 1) * hW + x - 1]; }
  }
  const rect = (I, x0, y0, x1, y1) => {
    let s = I[y1 * hW + x1];
    if (y0) s -= I[(y0 - 1) * hW + x1];
    if (x0) s -= I[y1 * hW + x0 - 1];
    if (x0 && y0) s += I[(y0 - 1) * hW + x0 - 1];
    return s;
  };
  // template stats
  let tSum = 0, tSum2 = 0;
  for (let i = 0; i < T.length; i++) { tSum += T[i]; tSum2 += T[i] * T[i]; }
  const tMean = tSum / T.length;
  let tVar = 0;
  for (let i = 0; i < T.length; i++) { const d = T[i] - tMean; tVar += d * d; }
  tVar = Math.sqrt(tVar);
  const step = 3;
  for (let y = 0; y + tH <= hH; y += step) for (let x = 0; x + tW <= hW; x += step) {
    const s1 = rect(S1, x, y, x + tW - 1, y + tH - 1);
    const s2 = rect(S2, x, y, x + tW - 1, y + tH - 1);
    const n = tW * tH;
    const mean = s1 / n;
    const std = Math.sqrt(Math.max(1e-9, s2 / n - mean * mean)) * Math.sqrt(n);
    if (std < 1e-6) continue;
    // correlation sum: sum((H-T_mean_h)*(T - t_mean)) = sum(H*T) - n*mean_h*mean_t  (approx, using t stats)
    let dot = 0;
    for (let ty = 0; ty < tH; ty++) for (let tx = 0; tx < tW; tx++) {
      dot += H[(y + ty) * hW + x + tx] * T[ty * tW + tx];
    }
    const ncc = (dot / n - mean * tMean) / ((std / Math.sqrt(n)) * (tVar / Math.sqrt(n)));
    if (ncc > best) { best = ncc; bestPos = { x: x * 4, y: y * 4 }; }
  }
  return { best, bestPos };
}

const wide = {
  sec05: decodePNG("public/bulk-batch/Validation processing and result lifecycle.png"),
  sec10: decodePNG("public/bulk-batch/Illustrative example.png"),
  cta: decodePNG("public/bulk-batch/Documentation continuation.png"),
};
const squares = {
  "1e414f90": decodePNG("public/bulk-batch/1e414f90c5479ca17ef8af952bfb7c3980cf0f44.png"),
  "69cd8e0a": decodePNG("public/bulk-batch/69cd8e0a73e27518c30d7bc317bd0286e7f9e111.png"),
  "e84eca6d": decodePNG("public/bulk-batch/e84eca6d450c6974c5383104c4856f74307facef.png"),
  "0c256dea": decodePNG("public/bulk-batch/0c256dea3091b04d7c7fc369fd1094ae543f06dc.png"),
};

for (const [sname, sq] of Object.entries(squares)) {
  for (const [wname, wv] of Object.entries(wide)) {
    // template displayed at ~40% of haystack width
    for (const frac of [0.35, 0.55, 0.8]) {
      const tw = Math.round(wv.w * frac), th = Math.round(wv.w * frac); // square
      const T = resizeBilinear(sq.data, sq.w, sq.h, tw, th);
      const { best, bestPos } = bestNCC(wv.data, wv.w, wv.h, T, tw, th);
      if (best > 0.5) console.log(sname + " in " + wname + " frac=" + frac + " NCC=" + best.toFixed(2) + " at " + JSON.stringify(bestPos));
    }
  }
}
console.log("done (only NCC>0.5 shown)");
