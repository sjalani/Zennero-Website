'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Cog, Cloud, Code } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Lightbulb,
      title: 'Advisory',
      description: 'Drive enterprise growth through strategic, business, and technology advisory across process redesign and digital transformation.',
    },
    {
      icon: Cog,
      title: 'RPA',
      description: 'Streamline operations with robotic process automation templates that reduce costs and eliminate manual errors.',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions that grow with your business and ensure maximum uptime.',
    },
    {
      icon: Code,
      title: 'API Microservices',
      description: 'Build robust microservices architecture and seamless integrations for modern applications.',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Who We Are
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-zennero-primary mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Empowering Business Success Through Innovation
            </h3>
            <p className="text-lg text-gray-600 font-source-sans leading-relaxed">
              In today&apos;s business landscape, utilizing data can be a powerful tool for gaining insights 
              and making informed decisions that can help take operations to the next level.
            </p>
            <p className="text-lg text-gray-600 font-source-sans leading-relaxed">
              At Zennero, we specialize in helping businesses optimize their operations, reduce costs, 
              and improve efficiency by leveraging the power of AI, ML, and data. With a 
              global team of professionals focused on business advisory, process innovation, and 
              technology services, we offer tailored solutions to meet the specific needs of businesses 
              looking to take their operations to higher ground.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center bg-zennero-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-zennero-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Let&apos;s Work Together
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <Image
              src="/assets/photo-1552664730-d307ca884978.avif"
              alt="Our team working together"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                                  <div className="w-12 h-12 bg-zennero-primary/10 rounded-lg flex items-center justify-center">
                  <Icon size={24} className="text-zennero-primary" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;