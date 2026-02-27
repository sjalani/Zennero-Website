'use client';

// Updated: 2025-07-11 - Fixed spacing, modal issues, and industry cards 2:1 ratio
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
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
  LucideIcon
} from 'lucide-react';

// Define the service type
type ServiceType = {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  keyPoints: string[];
  fullDescription: string;
  detailedContent?: string;
  highlight?: string;
  featuresLabel: string;
  features?: string[];
  techStack?: string[];
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  const services = [
    {
      icon: BarChart3,
      title: 'Process Advisory',
      shortDescription: 'Industry domain expertise and business process optimization.',
      keyPoints: ['Domain knowledge', 'Process optimization', 'Strategic decisions'],
      fullDescription: 'Deep knowledge of various industry domains and business process optimization to help you make informed strategic decisions and improve operational efficiency.',
      features: ['Business Process Analysis', 'Strategic Consulting', 'Operational Efficiency', 'Industry Best Practices'],
      featuresLabel: 'Advisory Services'
    },
    {
      icon: Users,
      title: 'Talent Acquisition for Customers',
      shortDescription: 'Staff augmentation and talent acquisition services tailored for large and medium-sized businesses.',
      keyPoints: ['Skilled professionals', 'Seamless integration', 'Precision & efficiency'],
      fullDescription: 'At Zennero, we excel in staff augmentation and talent acquisition services, tailored to meet the unique needs of large and medium-sized businesses. Our expertise lies in providing highly skilled professionals who seamlessly integrate into your team, ensuring that your projects are executed with precision and efficiency.',
      detailedContent: 'Whether you need specialized process expert, technical talent, project managers, or creative skills, we have the resources to fill your skill gaps quickly and effectively. Our rigorous vetting process ensures that every candidate not only possesses the required skills but also aligns with your company culture and values. With our flexible engagement models, you can scale your team, optimize your workforce, and drive your business forward. Trust us to provide the talent you need to succeed.',
      highlight: 'Seamlessly integrate into your team',
      featuresLabel: 'Our Approach'
    },
    {
      icon: Network,
      title: 'Connecting People to Customers',
      shortDescription: 'Connect top-tier professionals with exciting opportunities at businesses.',
      keyPoints: ['Career opportunities', 'Skill matching', 'Growth-focused'],
      fullDescription: 'At Zennero, we connect top-tier professionals with exciting opportunities at large and medium-sized businesses. Our staff augmentation and talent acquisition services are designed to offer you a fulfilling career path, where your skills and expertise are highly valued.',
      detailedContent: 'Whether you specialize in process re-engineering, technical roles or project management, we have the right opportunities to match your aspirations. With flexible engagement models, you can take on projects that challenge you, providing the growth opportunities you need to thrive.',
      highlight: 'Fulfilling career paths',
      featuresLabel: 'Career Benefits'
    },
    {
      icon: Database,
      title: 'SAP Implementation & Support',
      shortDescription: 'Expert implementation and support for SAP systems across industries.',
      keyPoints: ['SAP S/4 HANA', 'Industry expertise', 'Clean Core Concept'],
      fullDescription: 'Expertise in implementing and supporting SAP systems such as SAP S/4 HANA, BTP, SAP Business Cloud, Fiori, RISE and GROW, Clean Core Concept. We are industries experts such as Retail, CAR, Oil & Gas, CPG, and Pharma.',
      features: ['SAP Implementation', 'System Support & Maintenance', 'Industry-Specific Solutions', 'Clean Core Migration'],
      techStack: ['SAP S/4 HANA', 'BTP', 'SAP Business Cloud', 'Fiori', 'RISE & GROW'],
      featuresLabel: 'SAP Capabilities'
    },
    {
      icon: Code,
      title: 'Technology Services',
      shortDescription: 'Cutting-edge technology solutions for digital transformation.',
      keyPoints: ['AI & ML', 'API Development', 'Cloud & Blockchain'],
      fullDescription: 'Comprehensive technology services to drive your digital transformation with modern solutions.',
      features: ['AI, ML, LLMs, GenAI', 'API Development Microservices', 'Cloud', 'Blockchain'],
      featuresLabel: 'Technology Stack'
    },
    {
      icon: Bot,
      title: 'Process Automation',
      shortDescription: 'Automate repetitive processes using RPA tools and intelligent automation.',
      keyPoints: ['RPA Implementation', 'Workflow Optimization', 'Cost Reduction'],
      fullDescription: 'We automate repetitive and time-consuming processes using RPA tools such as UiPath, AA, and MS PowerApps. Streamline operations with RPA templates and intelligent automation solutions.',
      features: ['RPA Implementation', 'Workflow Optimization', 'Cost Reduction', 'Error Prevention'],
      techStack: ['UiPath', 'Automation Anywhere', 'MS PowerApps'],
      featuresLabel: 'Implementation Areas'
    },
  ];

  const industries = [
    { icon: ShoppingCart, name: 'Retail', color: 'bg-green-100 text-green-600' },
    { icon: Factory, name: 'Manufacturing', color: 'bg-gray-100 text-gray-600' },
    { icon: Fuel, name: 'Oil & Gas', color: 'bg-orange-100 text-orange-600' },
    { icon: ShoppingCart, name: 'CPG', color: 'bg-green-100 text-green-600' },
    { icon: Pill, name: 'Pharma', color: 'bg-purple-100 text-purple-600' }
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 bg-white"
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
            Our Services
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
            className="text-lg text-gray-600 max-w-3xl mx-auto font-source-sans"
          >
            From talent acquisition to strategic advisory, we provide 
            comprehensive services to optimize your operations and drive business success
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
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-zennero-primary/20 cursor-pointer h-full flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-zennero-primary/10 rounded-xl flex items-center justify-center group-hover:bg-zennero-primary/20 transition-colors duration-300">
                    <Icon size={24} className="text-zennero-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-zennero-primary transition-colors duration-300" style={{ marginLeft: '2rem' }}>
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">
                  {service.shortDescription}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-zennero-primary rounded-full mr-3 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => setSelectedService(service)}
                  className="flex items-center text-zennero-primary font-semibold mt-auto"
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
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
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
                  <span className="text-sm font-medium text-gray-900 text-center">
                    {industry.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Modal for Service Details */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-zennero-primary/10 rounded-2xl flex items-center justify-center">
                      <selectedService.icon size={32} className="text-zennero-primary" />
                    </div>
                    <div style={{ marginLeft: '2rem' }}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedService.title}
                      </h3>
                      {selectedService.highlight && (
                        <div className="inline-flex items-center bg-zennero-primary/10 text-zennero-primary px-3 py-1 rounded-full text-sm font-medium">
                          {selectedService.highlight}
                        </div>
                      )}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ backgroundColor: '#f3f4f6', scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedService(null)}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
                    style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                  >
                    <X size={20} className="text-gray-500" />
                  </motion.button>
                </div>

                {/* Modal Content */}
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    {selectedService.fullDescription}
                  </p>

                  {selectedService.detailedContent && (
                    <p className="text-gray-700 leading-relaxed">
                      {selectedService.detailedContent}
                    </p>
                  )}

                  {selectedService.features && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{selectedService.featuresLabel || 'Key Features'}</h4>
                      <ul className="space-y-2">
                        {selectedService.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <CheckCircle size={18} className="text-zennero-primary mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedService.techStack && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.techStack.map((tech, idx) => (
                          <span key={idx} className="bg-zennero-primary/10 text-zennero-primary px-3 py-1 rounded-lg text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-200">
                    <motion.button
                      whileHover={{ backgroundColor: '#e6396f' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-zennero-primary text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
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
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;