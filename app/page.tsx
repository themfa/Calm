import { readFile } from 'node:fs/promises';
import path from 'node:path';
import Script from 'next/script';

export default async function Home() {
  // Transitional adapter: trusted, repository-authored HTML only. Never accept user input here.
  // Migrate sections to React components incrementally while preserving the existing design.
  const source = await readFile(path.join(process.cwd(), 'index.html'), 'utf8');
  const body = source.match(/<body>([\s\S]*?)<\/body>/)?.[1];
  if (!body) throw new Error('The authored page is missing its body.');
  const markup = body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
  return <>
    <div dangerouslySetInnerHTML={{ __html: markup }} />
    <Script src="/hero-video.js" strategy="afterInteractive" />
    <Script src="/cover-director.js" strategy="afterInteractive" />
    <Script src="/my-calm.js" strategy="afterInteractive" />
    <Script src="/page-interactions.js" strategy="afterInteractive" />
  </>;
}
