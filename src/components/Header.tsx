'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

// FIX 1: Moved MobileNavigation OUTSIDE of Header component
// FIX 2: Now receives props instead of closing over Header's state
const MobileNavigation = ({ isMenuOpen, setIsMenuOpen }: {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}) => (
  <AnimatePresence>
    {isMenuOpen && (
      <>
        {/* Backdrop/Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Mobile Drawer - Solid and Readable */}
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ 
            type: 'spring', 
            stiffness: 300, 
            damping: 30,
            duration: 0.4 
          }}
          className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-[9999] md:hidden overflow-hidden bg-white shadow-2xl"
        >
          {/* Drawer Container */}
          <div className="flex flex-col h-full">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Image 
                  src="/logos/ZLogo.svg" 
                  alt="Zennero Logo" 
                  width={120}
                  height={42}
                  className="h-8 w-auto"
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 bg-gray-50"
              >
                <X size={24} className="text-gray-700" />
              </motion.button>
            </div>

            {/* Drawer Navigation */}
            <div className="flex-1 px-6 py-8">
              <nav className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1 + 0.2,
                      ease: 'easeOut'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center px-4 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-300"
                  >
                    <div className="flex-1">
                      <span className="text-lg font-semibold text-[#1A237E] group-hover:text-zennero-primary transition-colors duration-300">
                        {item.name}
                      </span>
                    </div>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="text-zennero-primary"
                    >
                      →
                    </motion.div>
                  </motion.a>
                ))}
              </nav>

              {/* Call-to-Action Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="mt-8 pt-6 border-t border-gray-200"
              >
                <motion.a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-full bg-zennero-primary text-white px-6 py-3 rounded-full font-medium hover:bg-zennero-primary-dark transition-all duration-300"
                >
                  Get Started
                </motion.a>
                
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  className="mt-6 text-center"
                >
                  <p className="text-sm text-gray-600 mb-2">Ready to transform your business?</p>
                  <p className="text-xs text-gray-500">Contact us for a free consultation</p>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-zennero-primary via-pink-400 to-zennero-primary opacity-60" />
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // FIX 4: Added mounted state to prevent hydration mismatch with createPortal
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[80%] max-w-6xl backdrop-blur-2xl rounded-3xl border border-white/20"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
          backdropFilter: 'blur(20px) saturate(180%) brightness(110%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%) brightness(110%)',
          boxShadow: `
            0 8px 32px rgba(255, 255, 255, 0.1),
            0 20px 60px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.4),
            inset 0 -1px 0 rgba(255, 255, 255, 0.2)
          `,
          borderImageSource: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 100%)',
          borderImageSlice: 1,
        }}
      >
        <nav className="px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <div className="flex items-center space-x-2">
                <Image 
                  src="/logos/ZLogo.svg" 
                  alt="Zennero Logo"
                  width={120}
                  height={42}
                  className="h-8 w-auto"
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-[#1A237E] hover:text-zennero-primary px-3 py-2 text-base font-semibold transition-colors duration-300"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Get Started Button - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="hidden md:block"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-zennero-primary text-white px-6 py-2 rounded-full font-medium hover:bg-zennero-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </motion.a>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 focus:outline-none transition-all duration-300"
                style={{
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                {isMenuOpen ? (
                  <X size={24} className="text-gray-700" />
                ) : (
                  <Menu size={24} className="text-gray-700" />
                )}
                
                {/* Active indicator */}
                {isMenuOpen && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-zennero-primary rounded-full border-2 border-white"
                  />
                )}
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* FIX 4: Use mounted state instead of typeof window check
          This prevents hydration mismatch between server and client render */}
      {mounted && createPortal(
        <MobileNavigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />,
        document.body
      )}
    </>
  );
};

export default Header;
