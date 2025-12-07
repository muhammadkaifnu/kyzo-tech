'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      image: 'https://i.pravatar.cc/150?img=1',
      content: 'Kyzo Tech transformed our digital presence completely. Their expertise and dedication are unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateCorp',
      image: 'https://i.pravatar.cc/150?img=2',
      content: 'Working with Kyzo Tech was a game-changer. They delivered beyond our expectations.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, DesignHub',
      image: 'https://i.pravatar.cc/150?img=3',
      content: 'The team at Kyzo Tech is incredibly talented. They brought our vision to life perfectly.',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'Director, CloudSystems',
      image: 'https://i.pravatar.cc/150?img=4',
      content: 'Professional, efficient, and innovative. Kyzo Tech exceeded all our project goals.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Hear what our clients have to say about working with us
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="glass p-12 rounded-3xl"
          >
            <div className="flex items-center mb-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mr-6 border-4 border-neon-blue/30"
              />
              <div>
                <h3 className="text-2xl font-bold">{testimonials[currentIndex].name}</h3>
                <p className="text-foreground/70">{testimonials[currentIndex].role}</p>
                <div className="flex gap-1 mt-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xl text-foreground/80 italic">
              "{testimonials[currentIndex].content}"
            </p>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="glass p-4 rounded-full hover:scale-110 transition-all neon-glow"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="glass p-4 rounded-full hover:scale-110 transition-all neon-glow"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-neon-blue w-8' : 'bg-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
