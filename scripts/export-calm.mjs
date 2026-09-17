import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
const destination = process.argv[2];
if (!destination) throw new Error('Provide the destination public/calm directory.');
await mkdir(destination, { recursive: true });
for (const entry of ['assets', 'covers', 'work', 'styles.css', 'hero-video.js', 'cover-director.js', 'my-calm.js']) {
  await cp(entry, path.join(destination, entry), { recursive: true });
}
let html = await readFile('index.html', 'utf8');
html = html.replace('<head>', '<head>\n<base href="/calm/">');
await writeFile(path.join(destination, 'index.html'), html);
const bundlePath = path.join(destination, 'covers/bundle.js');
const bundle = await readFile(bundlePath, 'utf8');
await writeFile(bundlePath, bundle.replaceAll('"/work/', '"/calm/work/'));
console.log(`Exported Calm to ${destination}`);
