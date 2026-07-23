/**
 * Reorganizes product images into category-based subdirectories
 * and updates all .md product files with the new paths.
 *
 * Category directories created under public/images/products/:
 *   bases/ bouquets/ floreros/ porta-inciensos/ regalos/
 *   velas-aromaticas/ velas-decorativas/
 */

import { readFileSync, writeFileSync, mkdirSync, renameSync, existsSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const imagesDir = join(root, 'public', 'images', 'products');
const contentDir = join(root, 'src', 'content', 'products');

// Image mapping: current filename → target category directory
const imageToCategory = {
  'base-bruma.png':            'bases',
  'base-refugio.png':          'bases',
  'base-serena.png':           'bases',
  'base-serena2.png':          'bases',
  'bouquet-renacer.png':       'bouquets',
  'bouquet-renacer2.png':      'bouquets',
  'florero-senda.png':         'floreros',
  'florero-senda2.png':        'floreros',
  'portaincienso-amuleto.png':  'porta-inciensos',
  'portaincienso-amuleto2.png': 'porta-inciensos',
  'portaincienso-aura.png':     'porta-inciensos',
  'portaincienso-aura2.png':    'porta-inciensos',
  'vela-cinco-minutos-mas.png':  'regalos',
  'vela-cinco-minutos-mas2.png': 'regalos',
  'vela-alegria.png':          'velas-aromaticas',
  'vela-alegria2.png':         'velas-aromaticas',
  'vela-armonia.png':          'velas-aromaticas',
  'vela-armonia2.png':         'velas-aromaticas',
  'vela-equilibrio.png':       'velas-aromaticas',
  'vela-equilibrio2.png':      'velas-aromaticas',
  'vela-gratitud.png':         'velas-aromaticas',
  'vela-inspiracion.png':      'velas-decorativas',
  'vela-roma.png':             'velas-decorativas',
};

// Collect unique categories and create directories
const categories = [...new Set(Object.values(imageToCategory))];
console.log('📁 Creating category directories…');
for (const cat of categories) {
  const dir = join(imagesDir, cat);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
    console.log(`  ✅ Created: ${cat}/`);
  } else {
    console.log(`  ⏭️  Already exists: ${cat}/`);
  }
}

// Move images to their category subdirectory
console.log('\n📦 Moving images…');
for (const [file, category] of Object.entries(imageToCategory)) {
  const src = join(imagesDir, file);
  const dest = join(imagesDir, category, file);
  if (!existsSync(src)) {
    console.log(`  ⚠️  Source not found: ${file} – skipping`);
    continue;
  }
  renameSync(src, dest);
  console.log(`  ✅ Moved: ${file} → ${category}/${file}`);
}

// Update product .md files: replace old gallery paths with new ones
console.log('\n📝 Updating product .md files…');
const productFiles = [
  'base-decorativa-bruma.md',
  'base-decorativa-refugio.md',
  'base-decorativa-serena.md',
  'bouquet-renacer.md',
  'cinco-minutos-mas.md',
  'florero-senda.md',
  'portaincienso-amuleto.md',
  'portaincienso-aura.md',
  'vela-alegria.md',
  'vela-armonia.md',
  'vela-equilibrio.md',
  'vela-gratitud.md',
  'vela-inspiracion.md',
  'vela-roma.md',
];

for (const filename of productFiles) {
  const filepath = join(contentDir, filename);
  if (!existsSync(filepath)) {
    console.log(`  ⚠️  File not found: ${filename} – skipping`);
    continue;
  }

  let content = readFileSync(filepath, 'utf-8');
  const original = content;

  // Replace ALL occurrences of /images/products/ with /images/products/{category}/
  // We read the category from the frontmatter
  const categoryMatch = content.match(/^category:\s*"([^"]+)"/m);
  if (!categoryMatch) {
    console.log(`  ⚠️  No category found in ${filename} – skipping`);
    continue;
  }
  const category = categoryMatch[1];

  // Replace paths like /images/products/filename.png → /images/products/{category}/filename.png
  content = content.replace(
    /\/images\/products\/([^"'\s]+)/g,
    (match, file) => `/images/products/${category}/${file}`
  );

  if (content !== original) {
    writeFileSync(filepath, content, 'utf-8');
    console.log(`  ✅ Updated: ${filename} (category: ${category})`);
  } else {
    console.log(`  ⏭️  No changes needed: ${filename}`);
  }
}

console.log('\n🎉 Done! All images reorganised and .md files updated.');