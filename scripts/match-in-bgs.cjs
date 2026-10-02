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

function downsample(img, F) {
  const w = Math.floor(img.w / F), h = Math.floor(img.h / F);
  const out = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    let r = 0, g = 0, b = 0, n = 0;
    for (let dy = 0; dy < F; dy++) for (let dx = 0; dx < F; dx++) {
      const i = ((y * F + dy) * img.w + (x * F + dx)) * 4;
      r += img.data[i]; g += img.data[i + 1]; b += img.data[i + 2]; n++;
    }
    const o = (y * w + x) * 4;
    out[o] = r / n; out[o + 1] = g / n; out[o + 2] = b / n;
  }
  return { w, h, data: out };
}

const squares = {
  "1e414f90": "public/bulk-batch/1e414f90c5479ca17ef8af952bfb7c3980cf0f44.png",
  "69cd8e0a": "public/bulk-batch/69cd8e0a73e27518c30d7bc317bd0286e7f9e111.png",
  "e84eca6d": "public/bulk-batch/e84eca6d450c6974c5383104c4856f74307facef.png",
  "0c256dea": "public/bulk-batch/0c256dea3091b04d7c7fc369fd1094ae543f06dc.png",
};

// Haystacks: 3 wide images (as decoded) + hero region of screenshot
const shot = decodePNG("C:/Users/sanda/Downloads/ZoikoTax -Developers drop-down - Bulk & Batch.png");
// extract hero region into an image-like object
const heroW = 1440, heroY0 = 80, heroH = 770;
const hero = { w: heroW, h: heroH, data: Buffer.alloc(heroW * heroH * 4) };
for (let y = 0; y < heroH; y++) for (let x = 0; x < heroW; x++) {
  const si = ((heroY0 + y) * shot.w + x) * 4, di = (y * heroW + x) * 4;
  for (let k = 0; k < 4; k++) hero.data[di + k] = shot.data[si + k];
}

const haystacks = {
  "hero(80-850)": downsample(hero, 4),
  "sec05-bg": downsample(decodePNG("public/bulk-batch/Validation processing and result lifecycle.png"), 4),
  "sec10-bg": downsample(decodePNG("public/bulk-batch/Illustrative example.png"), 4),
  "cta-bg": downsample(decodePNG("public/bulk-batch/Documentation continuation.png"), 4),
};

for (const [sname, spath] of Object.entries(squares)) {
  const tmplFull = decodePNG(spath);
  let best = { score: 1e18 };
  for (const [hname, hay] of Object.entries(haystacks)) {
    for (let dispW = 150; dispW <= 1100; dispW += 50) {
      const tw = Math.round(dispW / 4);
      if (tw > hay.w || tw > hay.h) continue;
      const G = 8;
      const sigs = [];
      for (let gyi = 0; gyi < G; gyi++) for (let gxi = 0; gxi < G; gxi++) {
        const ix = Math.min(tmplFull.w - 1, Math.floor(((gxi + 0.5) / G) * tmplFull.w));
        const iy = Math.min(tmplFull.h - 1, Math.floor(((gyi + 0.5) / G) * tmplFull.h));
        const i = (iy * tmplFull.w + ix) * 4;
        sigs.push(tmplFull.data[i], tmplFull.data[i + 1], tmplFull.data[i + 2]);
      }
      for (let y = 0; y + tw <= hay.h; y += 2) for (let x = 0; x + tw <= hay.w; x += 2) {
        let score = 0;
        for (let gyi = 0; gyi < G; gyi++) for (let gxi = 0; gxi < G; gxi++) {
          const sx = Math.min(hay.w - 1, x + Math.floor(((gxi + 0.5) / G) * tw));
          const sy = Math.min(hay.h - 1, y + Math.floor(((gyi + 0.5) / G) * tw));
          const i = (sy * hay.w + sx) * 4;
          const k = (gyi * G + gxi) * 3;
          score += Math.abs(hay.data[i] - sigs[k]) + Math.abs(hay.data[i + 1] - sigs[k + 1]) + Math.abs(hay.data[i + 2] - sigs[k + 2]);
        }
        if (score < best.score) best = { score, haystack: hname, dispW, x: x * 4, y: y * 4 };
      }
    }
  }
  console.log(sname + " => score/px=" + Math.round(best.score / 192) + " in " + best.haystack + " dispW=" + best.dispW + " at " + best.x + "," + best.y);
}
