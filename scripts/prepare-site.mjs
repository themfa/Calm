import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
// Preserve the authored static site as the migration source. Public copies are generated.
await mkdir('public', { recursive: true });
for (const entry of ['assets', 'covers', 'work', 'styles.css', 'hero-video.js', 'cover-director.js', 'my-calm.js']) {
  await cp(entry, `public/${entry}`, { recursive: true });
}
const html = await readFile('index.html', 'utf8');
const inline = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(match => match[1]).join('\n');
await writeFile('public/page-interactions.js', inline);
