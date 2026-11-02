'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Users,
  Network,
  Bot,
  Database,
  Code,
  BarChart3,
  Factory,
  Fuel,
  ShoppingCart,
  Pill,
  ArrowRight,
  CheckCircle,
  X,
  LucideIcon,
} from 'lucide-react';

type ServiceType = {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  keyPoints: string[];
  fullDescription: string;
  detailedContent?: string;
  highlight?: string;
  featuresLabel?: string;
  features?: string[];
  techStack?: string[];
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  // Content per Zennero website change file v2.1 (sections 4.5 and 7, O1 option B icons)
  const services: ServiceType[] = [
    {
      icon: BarChart3,
      title: 'Process Simplification',
      shortDescription: 'Remove extra steps, handoffs, and workarounds that add cost.',
      keyPoints: ['Process discovery', 'Fewer steps and handoffs', 'Clear owners and KPIs'],
      fullDescription: 'Years of process and engineering experience show us where work slows down and costs grow. For a large grocery and convenience retailer, our redesign cut process steps by 40%.',
      features: ['Current process map', 'Simplified future process', 'KPIs and business case', 'Adoption and change plan'],
      featuresLabel: 'What You Get',
    },
    {
      icon: Database,
      title: 'SAP S/4HANA Process Readiness',
      shortDescription: 'We review every process, fit it to SAP standard, and cut custom code before your move to S/4HANA.',
      keyPoints: ['Fit to standard review', 'Clean core design', 'Less custom code'],
      fullDescription: 'Moving a complex process to SAP S/4HANA only moves the complexity. We review each business process with your process owners, compare it to SAP standard and best practice, and decide what to keep, simplify, or retire. Our proprietary MCP server and LLM, together with SAP Signavio, speed up the review of your current system, custom code, interfaces, data, and reports.',
      detailedContent: 'You get a clear fit to standard plan: which processes run on SAP standard, which need extensions built the clean core way, and which custom objects can go. You also get a data cleanup list, a list of open decisions, a high level roadmap, and a business case your leadership can approve. This work lowers the cost and risk of any path you choose: Greenfield, Brownfield, or Lift and Shift. It also keeps future upgrades simpler and lets your teams adopt new SAP and AI features sooner.',
      highlight: 'Fix the process before you move it',
    },
    {
      icon: Network,
      title: 'SAP S/4HANA Transformation',
      shortDescription: 'Greenfield, Brownfield, or Lift and Shift, chosen by business value and risk.',
      keyPoints: ['Greenfield', 'Brownfield', 'Lift and Shift'],
      fullDescription: 'Greenfield builds a new SAP S/4HANA system around simplified processes and SAP standard. Brownfield converts your current SAP system and keeps your history and data. Lift and Shift moves your current system to the cloud first, so you can simplify later in planned, lower risk steps.',
      detailedContent: 'We help you choose the path by business value, risk, cost, and timeline, then deliver it with SAP Activate, RISE with SAP, and a clean core. SAP ERP 6.0 mainstream maintenance ends at the end of 2027, so an early decision keeps more of your options, budget, and partner choices open.',
      highlight: 'The right path for you',
    },
    {
      icon: Bot,
      title: 'AI Agents for Everyday Process Work',
      shortDescription: 'AI agents and automation speed up discovery, testing, and daily tasks.',
      keyPoints: ['Faster discovery', 'Automated testing', 'Fewer manual tasks'],
      fullDescription: 'We put AI tools and agents to work on the slow parts of process change and daily work: discovery, documentation, test scripts, data checks, and routine tasks. People stay in control, and every agent has a clear owner and measure.',
      features: ['Process discovery', 'Documentation and test scripts', 'Data quality checks', 'Routine task automation'],
      featuresLabel: 'Where AI Helps',
      techStack: ['Claude', 'MCP Servers', 'Custom LLMs', 'RPA', 'SAP BTP', 'SAP Joule'],
    },
    {
      icon: Code,
      title: 'Ongoing Improvement',
      shortDescription: 'Support after go live that keeps processes simple and stable.',
      keyPoints: ['SAP application support', 'Continuous improvement', 'Process health checks'],
      fullDescription: 'After go live, we keep processes stable, fix issues fast, and keep removing steps that add cost.',
      features: ['SAP application support', 'Integration and APIs', 'Cloud operations', 'Continuous improvement'],
      featuresLabel: 'Support Areas',
    },
    {
      icon: Users,
      title: 'Resources on Demand',
      shortDescription: 'Skilled process, SAP, and project experts ready to join your team quickly.',
      keyPoints: ['Skilled professionals', 'Flexible engagement', 'Careers at Zennero'],
      fullDescription: 'Staff augmentation and talent acquisition for large and midsize businesses. Skilled professionals join your team and help deliver your projects with precision and efficiency. Experts looking for their next role can reach us too.',
      features: ['Process and SAP experts', 'Project managers', 'Technical specialists', 'Flexible engagement'],
      featuresLabel: 'For Your Projects',
      techStack: ['SAP S/4HANA', 'SAP BTP', 'Process Automation'],
    },
  ];

  // CPG removed; Oil & Gas → Oil and Gas
  const industries = [
    { icon: ShoppingCart, name: 'Retail', color: 'bg-green-100 text-green-600' },
    { icon: Factory, name: 'Manufacturing', color: 'bg-gray-100 text-gray-600' },
    { icon: Fuel, name: 'Oil and Gas', color: 'bg-orange-100 text-orange-600' },
    { icon: Pill, name: 'Pharma', color: 'bg-purple-100 text-purple-600' },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* "Our Services" — black heading → navy */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A237E] mb-6"
          >
            What We Deliver
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-zennero-primary mx-auto mb-8"
          />
          {/* Subtitle — gray text unchanged */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto font-source-sans"
          >
            Every engagement starts with a business outcome you can measure, then uses
            process design, AI agents, and SAP S/4HANA to reach it.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                // cursor-pointer removed from card — card is not a clickable link
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-zennero-primary/20 h-full flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-zennero-primary/10 rounded-xl flex items-center justify-center group-hover:bg-zennero-primary/20 transition-colors duration-300">
                    <Icon size={24} className="text-zennero-primary" />
                  </div>
                  {/* Card title — black heading → navy */}
                  <h3
                    className="text-lg font-bold text-[#1A237E] group-hover:text-zennero-primary transition-colors duration-300 ml-8"
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Short description — gray text unchanged */}
                <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">
                  {service.shortDescription}
                </p>

                {/* Key points — gray text unchanged */}
                <ul className="space-y-2 mb-6">
                  {service.keyPoints.map((point) => (
                    <li key={point} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-zennero-primary rounded-full mr-3 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Learn More — cursor-pointer HERE (not on whole card) */}
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => setSelectedService(service)}
                  aria-label={`Learn more about ${service.title}`}
                  className="flex items-center text-zennero-primary font-semibold mt-auto cursor-pointer"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Industries Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          {/* "Industry Expertise" — black heading → navy */}
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1A237E] mb-8">
            Industry Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  style={{ width: '256px', height: '128px', minWidth: '256px', flexShrink: 0 }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${industry.color}`}>
                    <Icon size={24} />
                  </div>
                  {/* Industry name — black heading → navy */}
                  <span className="text-sm font-medium text-[#1A237E] text-center">
                    {industry.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Modals: all six stay in the page HTML so search engines can read them.
          Only the open one is visible; closed ones are hidden, inert, and take no clicks. */}
      {services.map((service) => {
        const isOpen = selectedService?.title === service.title;
        const ModalIcon = service.icon;
        return (
          <motion.div
            key={`modal-${service.title}`}
            initial={{ opacity: 0, visibility: 'hidden' }}
            animate={
              isOpen
                ? { opacity: 1, visibility: 'visible' }
                : { opacity: 0, transitionEnd: { visibility: 'hidden' } }
            }
            aria-hidden={!isOpen}
            inert={!isOpen}
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${isOpen ? '' : 'pointer-events-none'}`}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isOpen ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-zennero-primary/10 rounded-2xl flex items-center justify-center">
                      <ModalIcon size={32} className="text-zennero-primary" />
                    </div>
                    <div className="ml-8">
                      {/* Modal title — black heading → navy */}
                      <h3 className="text-2xl font-bold text-[#1A237E] mb-2">
                        {service.title}
                      </h3>
                      {service.highlight && (
                        <div className="inline-flex items-center bg-zennero-primary/10 text-zennero-primary px-3 py-1 rounded-full text-sm font-medium">
                          {service.highlight}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Close button — cursor-pointer added */}
                  <motion.button
                    whileHover={{ backgroundColor: '#f3f4f6', scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedService(null)}
                    aria-label="Close"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex-shrink-0 cursor-pointer"
                  >
                    <X size={20} className="text-gray-500" />
                  </motion.button>
                </div>

                {/* Modal Content */}
                <div className="space-y-6">
                  {/* Body paragraphs — gray text unchanged */}
                  <p className="text-gray-700 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {service.detailedContent && (
                    <p className="text-gray-700 leading-relaxed">
                      {service.detailedContent}
                    </p>
                  )}

                  {service.features && (
                    <div>
                      {/* Section subheading — black heading → navy */}
                      <h4 className="text-lg font-semibold text-[#1A237E] mb-3">
                        {service.featuresLabel || 'Key Features'}
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-700">
                            <CheckCircle size={18} className="text-zennero-primary mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.techStack && (
                    <div>
                      {/* "Technologies" subheading — black heading → navy */}
                      <h4 className="text-lg font-semibold text-[#1A237E] mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech) => (
                          <span key={tech} className="bg-zennero-primary/10 text-zennero-primary px-3 py-1 rounded-lg text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-200">
                    {/* "Get Started" button — hover dark orange (not pink), cursor-pointer */}
                    <motion.button
                      whileHover={{ backgroundColor: '#e6821a' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-zennero-primary text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 cursor-pointer"
                      onClick={() => {
                        setSelectedService(null);
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Get Started with This Service
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Services;
