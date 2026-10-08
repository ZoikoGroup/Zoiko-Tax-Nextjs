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
// texture map: tile 32px; fraction of pixels with gradient magnitude > 12
const T = 32;
const cols = Math.floor(shot.w / T), rows = Math.floor(shot.h / T);
const map = [];
for (let ry = 0; ry < rows; ry++) {
  let line = "";
  for (let rx = 0; rx < cols; rx++) {
    let textured = 0, n = 0;
    for (let y = ry * T; y < (ry + 1) * T; y += 2) {
      for (let x = rx * T; x < (rx + 1) * T; x += 2) {
        const i = (y * shot.w + x) * 4;
        const iR = (y * shot.w + Math.min(shot.w - 1, x + 2)) * 4;
        const iD = (Math.min(shot.h - 1, y + 2) * shot.w + x) * 4;
        const gx = Math.abs(shot.data[i] - shot.data[iR]) + Math.abs(shot.data[i + 1] - shot.data[iR + 1]);
        const gy = Math.abs(shot.data[i] - shot.data[iD]) + Math.abs(shot.data[i + 1] - shot.data[iD + 1]);
        if (gx + gy > 24) textured++;
        n++;
      }
    }
    const frac = textured / n;
    line += frac > 0.55 ? "@" : frac > 0.35 ? "#" : frac > 0.2 ? "+" : frac > 0.08 ? "-" : ".";
  }
  map.push(line);
}
// print with row numbers, compressed runs
let last = null, run = 0;
for (let i = 0; i < map.length; i++) {
  if (map[i] === last) { run++; continue; }
  if (last !== null) console.log(String(i - run).padStart(4) + "x" + String(run).padStart(2) + " " + last);
  last = map[i]; run = 1;
}
console.log(String(map.length - run).padStart(4) + "x" + String(run).padStart(2) + " " + last);
