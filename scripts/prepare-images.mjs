import { mkdir, readdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const source = fileURLToPath(new URL("../public/images/", import.meta.url));
const output = path.join(source, "optimized");
const widths = [480, 768, 1024, 1440, 1920];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
// Process sequentially to keep memory use bounded on small build machines.
for (const file of await readdir(source)) {
  if (!file.endsWith(".webp")) continue;
  for (const width of widths) {
    await sharp(path.join(source, file))
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 75, effort: 5 })
      .toFile(path.join(output, `${path.parse(file).name}-${width}.webp`));
  }
}
console.log("Responsive destination images generated.");
