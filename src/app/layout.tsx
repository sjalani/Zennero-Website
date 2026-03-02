import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zennero',
  description: 'Empowering enterprise success through strategic advisory, agentic AI, generative AI, and intelligent process automation. Zennero transforms your business with data-driven solutions.',
  keywords: 'business advisory, process automation, agentic AI, generative AI, SAP implementation, digital transformation, talent acquisition, technology services, enterprise solutions',
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
    title: 'Zennero',
    description: 'Empowering enterprise success through strategic advisory, agentic AI, and intelligent process automation.',
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
    title: 'Zennero',
    description: 'Empowering enterprise success through strategic advisory, agentic AI, and intelligent process automation.',
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
