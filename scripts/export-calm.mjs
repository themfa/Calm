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
html = html.replace(/<figure class="jane-live">[\s\S]*?<\/figure>/, '<figure class="jane-live"><video controls playsinline preload="metadata" poster="assets/jane-walkthrough-poster.jpg" aria-label="Jane onboarding walkthrough" style="display:block;width:100%;max-height:780px;background:#000"><source src="assets/jane-walkthrough.mp4" type="video/mp4"></video><figcaption>Recorded onboarding · Simulated shopping flow</figcaption></figure>');
await writeFile(path.join(destination, 'index.html'), html);
const bundlePath = path.join(destination, 'covers/bundle.js');
const bundle = await readFile(bundlePath, 'utf8');
await writeFile(bundlePath, bundle.replaceAll('"/work/', '"/calm/work/'));
console.log(`Exported Calm to ${destination}`);
