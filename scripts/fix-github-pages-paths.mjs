import { readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const outputDir = new URL('../dist/', import.meta.url);
const basePath = 'mkg-website';
const textExtensions = new Set(['.html', '.css', '.js', '.mjs', '.json', '.xml', '.txt']);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const filePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      await walk(filePath);
      continue;
    }

    if (!textExtensions.has(extname(entry.name))) continue;

    const original = await readFile(filePath, 'utf8');
    const updated = original.replace(
      /(["'])\/(?!\/|mkg-website(?:\/|["']))/g,
      `$1/${basePath}/`,
    );

    if (updated !== original) {
      await writeFile(filePath, updated, 'utf8');
    }
  }
}

await walk(outputDir.pathname);
