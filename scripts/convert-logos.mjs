import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const logos = [
  { input: "harmony-logo.jpeg", output: "public/brand/harmony-logo.png" },
  { input: "harmony-iso-logo.jpeg", output: "public/brand/harmony-iso-logo.png" },
];

async function convertLogo(inputPath, outputPath) {
  const fullInput = path.resolve(root, inputPath);
  const fullOutput = path.resolve(root, outputPath);

  if (!fs.existsSync(fullInput)) {
    console.error(`❌ Input not found: ${fullInput}`);
    return;
  }

  try {
    // Read the image, get its raw pixel data
    const image = sharp(fullInput);
    const metadata = await image.metadata();

    // Remove white background by thresholding
    const buffer = await image
      .ensureAlpha()
      .raw()
      .toBuffer();

    const { width, height } = metadata;

    // Process pixels: make white pixels transparent
    for (let i = 0; i < buffer.length; i += 4) {
      const r = buffer[i];
      const g = buffer[i + 1];
      const b = buffer[i + 2];
      
      // If pixel is close to white, make it transparent
      if (r > 240 && g > 240 && b > 240) {
        buffer[i + 3] = 0; // Set alpha to 0 (transparent)
      }
    }

    // Create PNG with processed pixels
    await sharp(buffer, {
      raw: {
        width,
        height,
        channels: 4,
      },
    })
      .png()
      .toFile(fullOutput);

    console.log(`✅ Converted: ${inputPath} → ${outputPath}`);
  } catch (err) {
    console.error(`❌ Error converting ${inputPath}:`, err.message);
  }
}

async function main() {
  for (const logo of logos) {
    await convertLogo(logo.input, logo.output);
  }
  console.log("✨ Done! All logos converted to PNG with transparent background.");
  console.log("⚠️  Note: If the result isn't perfect, the original JPEG files are still available.");
}

main();