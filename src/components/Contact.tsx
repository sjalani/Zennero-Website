'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@zennero.com',
      href: 'mailto:info@zennero.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 972-800-5552',
      href: 'tel:+19728005552'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '@zennero',
      href: 'https://www.linkedin.com/company/zennero/'
    }
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-zennero-primary mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-600 max-w-4xl mx-auto font-source-sans"
          >
            We are here to help your business grow by providing innovative technology solutions tailored to your specific needs. 
            Our team of experts is passionate about leveraging emerging technologies to drive digital transformation and organic growth in enterprise.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-lg text-gray-600 font-source-sans leading-relaxed mb-6">
                  We would love to hear from you about your business and technology needs. Whether you are looking to streamline your processes, improve customer engagement, need professional talent, or optimize your operations, we are here to help.
                </p>
                <p className="text-lg text-gray-600 font-source-sans leading-relaxed mb-8">
                  Our solutions are designed to help businesses of all sizes and industries, and we are committed to providing personalized service to each of our customers. Think smartly about your technology investments.
                </p>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/assets/pexels-canvastudio-3153201.jpg"
                  alt="Friendly team member"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-xl object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-zennero-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={28} className="text-zennero-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium mb-2">{info.label}</div>
                      <a
                        href={info.href}
                        target={info.label === 'LinkedIn' ? '_blank' : '_self'}
                        rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : ''}
                        className="text-gray-900 font-semibold hover:text-zennero-primary transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-to-r from-zennero-primary to-zennero-accent rounded-2xl p-8 text-white"
            >
              <h4 className="text-xl font-bold mb-4">So Why Wait?</h4>
              <p className="text-white/90 mb-6 leading-relaxed">
                Reach out to us today to schedule a consultation and learn more about how we can help your business succeed. 
                Join hundreds of businesses that have transformed their operations with our innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="mailto:info@zennero.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-zennero-primary px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300"
                >
                  Schedule a Consultation
                </motion.a>
                <motion.a
                  href="tel:+19728005552"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-zennero-primary transition-all duration-300"
                >
                  Call Us Now
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;