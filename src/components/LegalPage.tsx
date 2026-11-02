import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Shared metadata for the legal pages. Child openGraph replaces the layout's,
// so the image and locale are repeated here.
export function legalMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | Zennero`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
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
      title: fullTitle,
      description,
    },
  };
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl sm:text-2xl font-bold text-[#1A237E] mb-4 font-work-sans">{title}</h2>
      {children}
    </section>
  );
}

export default function LegalPage({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <article className="bg-gradient-to-b from-white to-gray-50">
        <div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 text-lg text-gray-600 font-source-sans leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_a]:text-[#1A237E] [&_a]:font-semibold [&_a:hover]:text-zennero-primary"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A237E] mb-4 font-work-sans">
            {title}
          </h1>
          <p className="text-base text-gray-500">Effective date: {effectiveDate}</p>
          {children}
        </div>
      </article>
      <Footer />
    </main>
  );
}
