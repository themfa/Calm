import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Paul Banks - A thoughtful next chapter with Calm',
  description: 'Paul Banks — Principal Product Designer. An introduction for Calm.',
};
export const viewport: Viewport = { themeColor: '#0D0C0B' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="stylesheet" href="/styles.css" /></head><body>{children}</body></html>;
}
