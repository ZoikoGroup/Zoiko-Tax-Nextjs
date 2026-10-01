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
  const out = Buffer.alloc(w * h * 4);
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
      out[(y * w + x) * 4] = r; out[(y * w + x) * 4 + 1] = g; out[(y * w + x) * 4 + 2] = bl; out[(y * w + x) * 4 + 3] = 255;
    }
  }
  return { w, h, data: out };
}

const shot = decodePNG("C:/Users/sanda/Downloads/ZoikoTax -Developers drop-down - Bulk & Batch.png");
// Hero photo region: right side x 576-1440 (864 wide), y 80-850 (770 tall)
const RX0 = 576, RY0 = 80, RW = 864, RH = 770;

// For each square: simulate object-cover into 864x770: scale = max(864/1024, 770/1024) = 0.84375 -> 864x864, center-crop vertically to 770
// Also try a few crop offsets and also "contain" scaling.
const squares = [
  "0c256dea3091b04d7c7fc369fd1094ae543f06dc.png",
  "1e414f90c5479ca17ef8af952bfb7c3980cf0f44.png",
  "69cd8e0a73e27518c30d7bc317bd0286e7f9e111.png",
  "e84eca6d450c6974c5383104c4856f74307facef.png",
];

const GX = 12, GY = 12;
for (const f of squares) {
  const img = decodePNG("public/bulk-batch/" + f);
  let best = { score: 1e18 };
  // scale factor from image to displayed size
  for (const s of [0.84, 0.7, 1.0, 0.5, 0.6]) {
    const dw = img.w * s, dh = img.h * s;
    if (dw < RW || dh < RH) continue;
    // crop offsets: top, center, bottom
    for (const cropFrac of [0, 0.5, 1]) {
      const cropY = (dh - RH) * cropFrac;
      const cropX = (dw - RW) * 0.5;
      let score = 0;
      for (let gyi = 0; gyi < GY; gyi++) for (let gxi = 0; gxi < GX; gxi++) {
        const px = Math.floor(RX0 + ((gxi + 0.5) / GX) * RW);
        const py = Math.floor(RY0 + ((gyi + 0.5) / GY) * RH);
        const si = (py * shot.w + px) * 4;
        const ix = Math.min(img.w - 1, Math.round((cropX + ((gxi + 0.5) / GX) * RW) / s));
        const iy = Math.min(img.h - 1, Math.round((cropY + ((gyi + 0.5) / GY) * RH) / s));
        const ii = (iy * img.w + ix) * 4;
        score += Math.abs(shot.data[si] - img.data[ii]) + Math.abs(shot.data[si + 1] - img.data[ii + 1]) + Math.abs(shot.data[si + 2] - img.data[ii + 2]);
      }
      const avg = Math.round(score / (GX * GY * 3));
      if (avg < best.score) best = { score: avg, s, cropFrac };
    }
  }
  console.log(f.slice(0, 10) + " => best avg diff " + best.score + " (scale " + best.s + ", cropFrac " + best.cropFrac + ")");
}
