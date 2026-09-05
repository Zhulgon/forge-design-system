import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const packagesDir = fileURLToPath(new URL('../packages/', import.meta.url));
const entries = await readdir(packagesDir, { withFileTypes: true });
let failures = 0;

async function walk(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, item.name);
    if (item.isDirectory()) await walk(path);
    else if (/\.(ts|tsx|js|mjs|json)$/.test(item.name)) {
      const text = await readFile(path, 'utf8');
      if (text.includes('@forge/extensions-')) {
        console.error(`Forbidden Core -> extension dependency: ${path}`);
        failures++;
      }
    }
  }
}

for (const pkg of entries) {
  if (pkg.isDirectory() && !pkg.name.startsWith('extensions-')) {
    await walk(join(packagesDir, pkg.name));
  }
}

if (failures) process.exit(1);
console.log('FORGE contract check passed.');
