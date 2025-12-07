'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: 'Our Mission',
      description: 'To empower businesses with cutting-edge technology solutions that drive growth and innovation.',
    },
    {
      icon: <FiEye className="w-8 h-8" />,
      title: 'Our Vision',
      description: 'To be the leading tech agency recognized for transforming ideas into exceptional digital experiences.',
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: 'Our Values',
      description: 'Innovation, excellence, integrity, and client success are at the core of everything we do.',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Kyzo Tech</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            We are a team of passionate developers, designers, and strategists dedicated to creating
            innovative solutions that make a difference in the digital world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 rounded-3xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-neon-blue mb-4 group-hover:scale-105 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
