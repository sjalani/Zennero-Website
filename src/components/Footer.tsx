'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  // Updated services list — static text, no links
  const services = [
    'Process Advisory',
    'Talent Acquisition for Customers',
    'Connecting People to Customers',
    'SAP Implementation and Support',
    'Technology Services',
    'Process Automation',
  ];

  // Updated industries list — static text, no links, & → and, CPG/Healthcare/Financial removed
  const industries = [
    'Retail',
    'Manufacturing',
    'Oil and Gas',
    'Pharma',
  ];

  return (
    // Background changed from bg-gray-900 → navy #1A237E
    <footer className="bg-[#1A237E] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                {/* Logo row: ZLogo_Orange.png icon + ZLogo_White_Text.png wordmark */}
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="/logos/ZLogo_Orange.png"
                    alt="Zennero icon"
                    width={56}
                    height={56}
                    className="h-14 w-auto"
                  />
                  <Image
                    src="/logos/ZLogo_White_Text.png"
                    alt="Zennero"
                    width={160}
                    height={56}
                    className="h-5 w-auto"
                  />
                </div>
                {/* Updated description text — no period at end */}
                <p className="text-white/80 leading-relaxed font-source-sans">
                  Empowering your success with actionable strategy, data-driven optimization, and cutting-edge solutions that transform your business
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-zennero-primary" />
                  <a
                    href="mailto:info@zennero.com"
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    info@zennero.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-zennero-primary" />
                  <a
                    href="tel:+19728005552"
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    +1 (972) 800-5552
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-zennero-primary" />
                  <span className="text-white/80">605 Saint James Pl, Coppell, TX 75019</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links — still navigational */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        {link.name}
                      </motion.span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services — static list, no links, no cursor-pointer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-white/80 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Industries — static list, no links, no cursor-pointer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Industries</h4>
              <ul className="space-y-3">
                {industries.map((industry) => (
                  <li key={industry}>
                    <span className="text-white/80 text-sm">{industry}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-white/60 text-sm"
              >
                © {new Date().getFullYear()} Zennero. All rights reserved.
              </motion.div>

              <div className="flex items-center space-x-6">
                {/* Privacy Policy — static text, no link */}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-white/60 text-sm"
                >
                  Privacy Policy
                </motion.span>
                {/* Terms of Service — static text, no link */}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-white/60 text-sm"
                >
                  Terms of Service
                </motion.span>

                {/* Scroll to top */}
                <motion.button
                  onClick={scrollToTop}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-zennero-primary/30 hover:bg-zennero-primary/50 p-2 rounded-full transition-all duration-300 cursor-pointer"
                  aria-label="Scroll to top"
                >
                  <ArrowUp size={16} className="text-zennero-primary" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
