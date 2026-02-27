'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

// Defined outside component to avoid recreation on every render
const quotes = [
  "Your Partner for Strategy, Automation, and Innovation",
  "Transforming Vision Into Intelligent Enterprise Solutions",
  "Where Business Strategy Becomes Digital Reality",
  "Guiding Strategy, Accelerating Growth",
  "Engineering the Future of Enterprise Transformation",
];

const Hero = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => 
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-28"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg')" }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-zennero-primary/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1, rotate: 0 }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-zennero-primary/3 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 1.1, rotate: 0 }}
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [180, 90, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            delay: 3
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-zennero-primary/3 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8 w-full"
        >
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentQuoteIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gradient-to-r from-zennero-primary to-zennero-accent bg-clip-text text-transparent text-center"
              >
                {quotes[currentQuoteIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-source-sans"
          >
            Empowering your success with actionable strategy, data-driven optimization, 
            and cutting-edge solutions that transform your business
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(255, 64, 130, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-zennero-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-zennero-primary-dark transition-all duration-300 shadow-lg"
            >
              Get Started Today
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-zennero-primary text-zennero-primary px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-zennero-primary hover:text-white transition-all duration-300"
            >
              <Play size={20} />
              Learn More
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 w-full max-w-4xl mx-auto"
          >
            {[
              { number: '30+', label: 'Projects Delivered' },
              { number: '15+', label: 'Happy Clients' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg w-full"
              >
                <div className="text-3xl font-bold text-zennero-primary">{stat.number}</div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-zennero-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-zennero-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
