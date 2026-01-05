import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zennero - Innovative IT Solutions for Your Business",
  description: "Empowering your success with reliable tech support. Zennero specializes in data-driven IT solutions, operational optimization, and staff augmentation.",
  keywords: "IT solutions, data optimization, cloud infrastructure, staff augmentation, business technology, automation",
  authors: [{ name: "Zennero" }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Zennero - Innovative IT Solutions for Your Business",
    description: "Empowering your success with reliable tech support",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Zennero - Innovative IT Solutions for Your Business",
    description: "Innovative IT Solutions for Your Business",
  },
};

export function generateViewport() {
  return {
    themeColor: "#FF9B29",
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
