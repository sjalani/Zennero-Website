import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  // Absolute base for og:image and twitter:image. Without it, Next.js falls back to http://localhost:3000.
  metadataBase: new URL('https://zennero.com'),
  title: 'Zennero | Process Simplification, AI Agents, and SAP S/4HANA',
  description: 'Zennero simplifies business processes with proven expertise and AI agents, then moves them to SAP S/4HANA: Greenfield, Brownfield, or Lift and Shift.',
  keywords: 'business process simplification, SAP S/4HANA, Greenfield, Brownfield, Lift and Shift, RISE with SAP, clean core, AI agents, MCP server, SAP Joule, SAP Signavio, staff augmentation, retail',
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Zennero' }],
  icons: {
    icon: [
      { url: '/logos/ZLogo_Orange.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logos/ZLogo_Orange.png', type: 'image/png' },
    ],
    shortcut: '/logos/ZLogo_Orange.png',
  },
  openGraph: {
    title: 'Zennero | Process Simplification, AI Agents, and SAP S/4HANA',
    description: 'Simpler business processes, sped up by AI and ready for SAP S/4HANA.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/logos/ZLogo_Orange_Text_Side.png',
        width: 1200,
        height: 420,
        alt: 'Zennero',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Zennero | Process Simplification, AI Agents, and SAP S/4HANA',
    description: 'Simpler business processes, sped up by AI and ready for SAP S/4HANA.',
  },
};

export function generateViewport() {
  return {
    themeColor: '#FF9B29',
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className="font-work-sans antialiased">
        {children}
      </body>
    </html>
  );
}
