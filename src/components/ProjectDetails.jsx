import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import { projects } from '../data/projects';

const ProjectDetails = ({ theme }) => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen pt-24 pb-20 ${theme === 'dark' ? 'bg-[#050816] text-white' : 'bg-slate-50 text-slate-900'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link to="/" className={`inline-flex items-center space-x-2 font-medium hover:text-purple-500 transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <FiArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 text-xl font-medium text-purple-500 mb-4">
            <span>{project.category}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">{project.title}</h1>
          <p className={`text-lg max-w-4xl mx-auto mb-10 leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {project.description}
          </p>
          
          {(project.liveDemo || project.github) && (
            <div className="flex justify-center space-x-6 mb-16">
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/30 hover:-translate-y-1 transform duration-300"
                >
                  <FiExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium border-2 transition-colors hover:-translate-y-1 transform duration-300 ${theme === 'dark' ? 'border-white text-white hover:bg-white hover:text-black' : 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'}`}
                >
                  <FiGithub size={20} />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          )}

          <div className={`relative rounded-3xl overflow-hidden shadow-2xl group ${theme === 'dark' ? 'shadow-purple-900/20' : 'shadow-slate-300'}`}>
            <img 
              src={project.image} 
              alt={`${project.title} Preview`} 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.description}
              </p>
            </motion.section>

            {project.modules && (
              <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={itemVariants}
              >
                <h2 className="text-3xl font-bold mb-6">Key Modules & Capabilities</h2>
                <div className="space-y-8">
                  {project.modules.map((mod, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-bold mb-2">{mod.title}</h3>
                      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{mod.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {project.challenges && (
              <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={itemVariants}
              >
                <h2 className="text-3xl font-bold mb-6">Challenges & Solutions</h2>
                <div className="space-y-6">
                  <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-[#151030]' : 'bg-white shadow-lg'}`}>
                    <h4 className="font-bold text-lg mb-2 text-purple-500">Challenge</h4>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{project.challenges}</p>
                    <div className="mt-4 border-t border-gray-700 pt-4">
                      <h4 className="font-bold text-lg mb-2 text-green-500">Solution</h4>
                      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{project.solutions}</p>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className={`p-8 rounded-3xl ${theme === 'dark' ? 'bg-[#151030]' : 'bg-white shadow-xl'}`}
            >
              <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-3"
                  >
                    <FiCheckCircle className="text-purple-500 mt-1 flex-shrink-0" size={18} />
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectDetails;
