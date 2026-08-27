import React from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Portfolio = ({ theme }) => {

  return (
    <section id="work" className={`py-20 ${theme === 'dark' ? 'bg-[#050816]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-xl font-medium text-purple-500 mb-2"
          >
            <span>My portfolio.</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-serif font-bold mb-4"
          >
            My latest work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative w-[350px] h-[330px] mx-auto flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 ${theme === 'dark' ? 'bg-[#fdf8e1]' : 'bg-white shadow-lg'}`}
            >
              <Link to={`/projects/${project.id}`} className="block w-full h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-[230px] shrink-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Card Content styled like reference image (light background with black text) */}
                <div className="px-6 py-4 bg-[#fdf8e1] text-black flex-1 flex items-center">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-gray-600 text-sm">{project.tech}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-rotate-45">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
