'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Bot, Sparkles, Workflow } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Lightbulb,
      title: 'Process Design',
      description: 'We map how work really flows today, then design a simpler process with fewer steps, clear owners, and KPIs your teams can track.',
    },
    {
      icon: Bot,
      title: 'AI Agents',
      description: 'AI agents take on discovery, documentation, test scripts, and routine process tasks, so your teams finish work sooner.',
    },
    {
      icon: Sparkles,
      title: 'SAP S/4HANA',
      description: 'Each process is redesigned to fit SAP standard and a clean core, so future upgrades take less effort and new SAP features reach your teams sooner.',
    },
    {
      icon: Workflow,
      title: 'Measured Results',
      description: 'We set baseline KPIs at the start, then track cost, cycle time, and error rates through go live and beyond.',
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
          {/* "Who We Are" — black heading → navy */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A237E] mb-6"
          >
            Why Zennero
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
            {/* "Empowering Business..." — black heading → navy */}
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1A237E]">
              Simpler Processes Create Better Business Results
            </h3>
            {/* Body paragraphs — gray text unchanged */}
            <p className="text-lg text-gray-600 font-source-sans leading-relaxed">
              Complex processes slow decisions, raise costs, and make every system change harder.
              Most of that complexity hides in extra steps, manual handoffs, and old workarounds.
            </p>
            <p className="text-lg text-gray-600 font-source-sans leading-relaxed">
              Zennero brings 30+ years of business process and engineering experience to remove that
              complexity. We map how work really flows, design a simpler version with clear owners and
              measures, and use AI tools and agents to speed up analysis, documentation, and testing.
              For a large grocery and convenience retailer, the result was 40% fewer process steps and a
              business ready for SAP S/4HANA.
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
                Book a Process Review
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
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
                {/* Card title — black heading → navy */}
                <h4 className="text-lg font-semibold text-[#1A237E] mb-2">
                  {feature.title}
                </h4>
                {/* Card description — gray text unchanged */}
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
