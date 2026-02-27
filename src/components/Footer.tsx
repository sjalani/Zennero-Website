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

  const services = [
    { name: 'Cloud Infrastructure', href: '#services' },
    { name: 'Data Analytics', href: '#services' },
    { name: 'Staff Augmentation', href: '#services' },
    { name: 'Process Automation', href: '#services' },
    { name: 'API Development', href: '#services' },
    { name: 'Technical Support', href: '#services' },
  ];

  const industries = [
    { name: 'Financial Services', href: '#services' },
    { name: 'Healthcare', href: '#services' },
    { name: 'Manufacturing', href: '#services' },
    { name: 'Oil & Gas', href: '#services' },
    { name: 'CPG & Retail', href: '#services' },
    { name: 'Pharma', href: '#services' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-zennero-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-zennero-primary/5 rounded-full blur-3xl" />
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
                <div className="flex items-center space-x-2 mb-4">
                  <Image 
                    src="/logos/yellow/Frame.svg" 
                    alt="Zennero Logo" 
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                  <h3 className="text-2xl font-bold text-white">Zennero</h3>
                </div>
                <p className="text-gray-300 leading-relaxed font-source-sans">
                  Empowering your success with reliable tech support and innovative IT solutions 
                  that transform business operations.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-zennero-primary" />
                  <a
                    href="mailto:info@zennero.com"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    info@zennero.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-zennero-primary" />
                  {/* FIX: Changed href from placeholder +15551234567 to correct number */}
                  <a
                    href="tel:+19728005552"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    +1 (972) 800-5552
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-zennero-primary" />
                  <span className="text-gray-300">605 Saint James Pl, Coppell, TX 75019</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.name}
                      </motion.span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Industries</h4>
              <ul className="space-y-3">
                {industries.map((industry) => (
                  <li key={industry.name}>
                    <a
                      href={industry.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {industry.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm"
              >
                © {new Date().getFullYear()} Zennero. All rights reserved.
              </motion.div>
              
              <div className="flex items-center space-x-6">
                <motion.a
                  href="#"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Terms of Service
                </motion.a>
                
                {/* Scroll to top button */}
                <motion.button
                  onClick={scrollToTop}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-zennero-primary/20 hover:bg-zennero-primary/30 p-2 rounded-full transition-all duration-300"
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
