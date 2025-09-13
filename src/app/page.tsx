import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <ChatBot />
    </main>
  );
}
