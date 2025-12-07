'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiZap, FiCpu } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/15 to-neon-pink/20 dark:from-neon-blue/5 dark:via-neon-purple/5 dark:to-neon-pink/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 dark:bg-neon-blue/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 dark:bg-neon-purple/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              Building the
              <span className="gradient-text"> Future </span>
              of Tech
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-foreground/80 max-w-4xl mx-auto"
            >
              We craft innovative digital solutions that transform businesses and create exceptional user experiences.
            </motion.p>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
          >
            <div className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group hover:shadow-xl hover:shadow-neon-blue/20">
              <FiCode className="w-8 h-8 text-neon-blue mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold mb-2">Modern Development</h3>
              <p className="text-sm text-foreground/70">Cutting-edge web & mobile solutions</p>
            </div>

            <div className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group hover:shadow-xl hover:shadow-neon-purple/20">
              <FiCpu className="w-8 h-8 text-neon-purple mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold mb-2">AI/ML Solutions</h3>
              <p className="text-sm text-foreground/70">Intelligent automation & insights</p>
            </div>

            <div className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group hover:shadow-xl hover:shadow-neon-pink/20">
              <FiZap className="w-8 h-8 text-neon-pink mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-foreground/70">Rapid development & deployment</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mt-12"
          >
            <a
              href="#contact"
              className="glass px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 neon-glow flex items-center gap-2 group"
            >
              Get Started
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="glass px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
