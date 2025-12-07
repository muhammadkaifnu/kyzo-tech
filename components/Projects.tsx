'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiX, FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { projects } from '@/data/projects';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) =>
        (prev + 1) % projects[selectedProject].images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? projects[selectedProject].images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Showcasing our latest work and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => {
                setSelectedProject(index);
                setCurrentImageIndex(0);
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-sm">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs glass px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold gradient-text">{projects[selectedProject].title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="glass p-2 rounded-full hover:scale-110 transition-transform"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Image Gallery */}
            <div className="relative h-96 mb-6 rounded-2xl overflow-hidden bg-black/20">
              <img
                src={projects[selectedProject].images[currentImageIndex]}
                alt={`${projects[selectedProject].title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {projects[selectedProject].images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 glass p-3 rounded-full hover:scale-110 transition-all"
                  >
                    <FiChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 glass p-3 rounded-full hover:scale-110 transition-all"
                  >
                    <FiChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {projects[selectedProject].images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-neon-blue w-6' : 'bg-white/50'
                          }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <p className="text-foreground/80 mb-6">{projects[selectedProject].fullDescription}</p>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {projects[selectedProject].tech.map((tech) => (
                  <span key={tech} className="glass px-4 py-2 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {projects[selectedProject].link && (
                <a
                  href={projects[selectedProject].link}
                  className="glass px-6 py-3 rounded-full hover:scale-105 transition-all flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink /> View Live
                </a>
              )}
              {projects[selectedProject].github && (
                <a
                  href={projects[selectedProject].github}
                  className="glass px-6 py-3 rounded-full hover:scale-105 transition-all flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub /> Source Code
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
