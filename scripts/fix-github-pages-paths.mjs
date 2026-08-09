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
    let updated = original.replace(
      /(["'])\/(?!\/|mkg-website(?:\/|["']))/g,
      `$1/${basePath}/`,
    );

    if (
      extname(entry.name) === '.html' &&
      updated.includes('<nav class="nav"') &&
      !updated.includes(`/${basePath}/generator/`)
    ) {
      updated = updated.replace(
        /(<nav class="nav"[^>]*>)/,
        `$1<a href="/${basePath}/generator/">Prompt Generator</a>`,
      );
    }

    if (extname(entry.name) === '.html') {
      if (!updated.includes(`/${basePath}/viewport-flow.css`)) {
        updated = updated.replace(
          '</head>',
          `  <link rel="stylesheet" href="/${basePath}/viewport-flow.css" />\n</head>`,
        );
      }

      if (!updated.includes(`/${basePath}/viewport-flow.js`)) {
        updated = updated.replace(
          '</body>',
          `  <script src="/${basePath}/viewport-flow.js" defer></script>\n</body>`,
        );
      }
    }

    if (updated !== original) {
      await writeFile(filePath, updated, 'utf8');
    }
  }
}

await walk(outputDir.pathname);
