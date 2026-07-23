/**
 * Reorganizes product .md files into category-based subdirectories
 * under src/content/products/.
 *
 * Category directories:
 *   bases/ bouquets/ floreros/ porta-inciensos/ regalos/
 *   velas-aromaticas/ velas-decorativas/
 */

import { readFileSync, writeFileSync, mkdirSync, renameSync, existsSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const contentDir = join(root, 'src', 'content', 'products');

// Map each .md file → target category directory
const fileToCategory = {
  'base-decorativa-bruma.md':   'bases',
  'base-decorativa-refugio.md': 'bases',
  'base-decorativa-serena.md':  'bases',
  'bouquet-renacer.md':         'bouquets',
  'florero-senda.md':           'floreros',
  'portaincienso-amuleto.md':   'porta-inciensos',
  'portaincienso-aura.md':      'porta-inciensos',
  'cinco-minutos-mas.md':       'regalos',
  'vela-alegria.md':            'velas-aromaticas',
  'vela-armonia.md':            'velas-aromaticas',
  'vela-equilibrio.md':         'velas-aromaticas',
  'vela-gratitud.md':           'velas-aromaticas',
  'vela-inspiracion.md':        'velas-decorativas',
  'vela-roma.md':               'velas-decorativas',
};

// Create category directories
const categories = [...new Set(Object.values(fileToCategory))];
console.log('📁 Creating category directories…');
for (const cat of categories) {
  const dir = join(contentDir, cat);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
    console.log(`  ✅ Created: ${cat}/`);
  } else {
    console.log(`  ⏭️  Already exists: ${cat}/`);
  }
}

// Move .md files to their category subdirectory
console.log('\n📦 Moving .md files…');
for (const [file, category] of Object.entries(fileToCategory)) {
  const src = join(contentDir, file);
  const dest = join(contentDir, category, file);
  if (!existsSync(src)) {
    console.log(`  ⚠️  Source not found: ${file} – skipping`);
    continue;
  }
  renameSync(src, dest);
  console.log(`  ✅ Moved: ${file} → ${category}/${file}`);
}

console.log('\n🎉 Done! All .md files reorganised by category.');