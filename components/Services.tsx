'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiSmartphone, FiLayout, FiDatabase, FiShield, FiCpu, FiZap } from 'react-icons/fi';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: <FiCode className="w-10 h-10" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      color: 'from-neon-blue to-neon-purple',
    },
    {
      icon: <FiSmartphone className="w-10 h-10" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions for iOS and Android.',
      color: 'from-neon-purple to-neon-pink',
    },
    {
      icon: <FiCpu className="w-10 h-10" />,
      title: 'AI/ML Solutions',
      description: 'Intelligent machine learning models and AI-powered applications.',
      color: 'from-neon-pink to-neon-blue',
    },
    {
      icon: <FiLayout className="w-10 h-10" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love to interact with.',
      color: 'from-neon-blue to-neon-pink',
    },
    {
      icon: <FiZap className="w-10 h-10" />,
      title: 'AI Automation',
      description: 'Streamline workflows with intelligent automation and AI agents.',
      color: 'from-neon-purple to-neon-blue',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className="text-neon-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
