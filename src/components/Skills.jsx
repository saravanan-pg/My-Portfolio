import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython } from 'react-icons/fa';
import { SiGit, SiGithub, SiGitlab, SiPostman, SiVercel, SiNetlify, SiMysql } from 'react-icons/si';
import { TbBrandVscode, TbBrowser } from 'react-icons/tb';

const Skills = ({ theme }) => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <TbBrowser size={28} />,
      color: 'purple',
      skills: [
        { name: 'HTML', icon: <FaHtml5 color="#E34F26" size={24} /> },
        { name: 'CSS', icon: <FaCss3Alt color="#1572B6" size={24} /> },
        { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" size={24} /> },
        { name: 'React', icon: <FaReact color="#61DAFB" size={24} /> }
      ]
    },
    {
      title: 'Backend',
      icon: <FaServer size={28} />,
      color: 'blue',
      skills: [
        { name: 'Python', icon: <FaPython color="#3776AB" size={24} /> }
      ]
    },
    {
      title: 'Database',
      icon: <FaDatabase size={28} />,
      color: 'teal',
      skills: [
        { name: 'MySQL', icon: <SiMysql color="#4479A1" size={24} /> }
      ]
    }
  ];

  const tools = [
    { name: 'Git', icon: <SiGit color="#F05032" size={24} /> },
    { name: 'GitHub', icon: <SiGithub color={theme === 'dark' ? '#ffffff' : '#181717'} size={24} /> },
    { name: 'GitLab', icon: <SiGitlab color="#FC6D26" size={24} /> },
    { name: 'Postman', icon: <SiPostman color="#FF6C37" size={24} /> },
    { name: 'VS Code', icon: <TbBrandVscode color="#007ACC" size={24} /> },
    { name: 'Vercel', icon: <SiVercel color={theme === 'dark' ? '#ffffff' : '#000000'} size={24} /> },
    { name: 'Netlify', icon: <SiNetlify color="#00C7B7" size={24} /> },
  ];

  const getColors = (color) => {
    switch (color) {
      case 'purple':
        return {
          glow: 'group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]',
          border: 'border-purple-500/30',
          text: 'text-purple-400',
          bg: 'bg-purple-500/10',
          dot: 'bg-purple-400',
          line: 'bg-purple-500',
        };
      case 'blue':
        return {
          glow: 'group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]',
          border: 'border-blue-500/30',
          text: 'text-blue-400',
          bg: 'bg-blue-500/10',
          dot: 'bg-blue-400',
          line: 'bg-blue-500',
        };
      case 'teal':
        return {
          glow: 'group-hover:shadow-[0_0_25px_rgba(20,184,166,0.3)]',
          border: 'border-teal-500/30',
          text: 'text-teal-400',
          bg: 'bg-teal-500/10',
          dot: 'bg-teal-400',
          line: 'bg-teal-500',
        };
      default:
        return {};
    }
  };

  return (
    <section id="skills" className={`py-24 relative overflow-hidden ${theme === 'dark' ? 'bg-[#050816]' : 'bg-slate-50'}`}>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            My Skills
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}
          >
            Technologies I work with to build modern and scalable applications
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const colors = getColors(category.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${colors.glow} ${theme === 'dark' ? `bg-[#0A0F1E] ${colors.border}` : 'bg-white border-slate-200 hover:shadow-xl'}`}
              >
                {/* Icon */}
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center border-2 mb-6 transition-transform duration-300 group-hover:scale-110 ${colors.border} ${colors.bg} ${colors.text}`}>
                  {category.icon}
                </div>
                
                {/* Title */}
                <h3 className={`text-2xl font-bold text-center mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {category.title}
                </h3>
                
                {/* Decorative Line */}
                <div className={`w-8 h-1 mx-auto rounded-full mb-8 ${colors.line}`}></div>
                
                {/* Skills List */}
                <div className="flex flex-col gap-3 flex-grow">
                  {category.skills.map((skill, i) => (
                    <div 
                      key={i}
                      className={`flex items-center px-4 py-3 rounded-xl border ${theme === 'dark' ? 'bg-[#12192B] border-white/5' : 'bg-slate-50 border-slate-100'}`}
                    >
                      <div className="mr-3 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-slate-700'}`}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools Section */}
        <div className="text-center mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Tools & Environments
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Tools Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`flex items-center px-6 py-4 rounded-2xl border group cursor-pointer transition-all duration-300 ${theme === 'dark' ? 'bg-[#0A0F1E] border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]' : 'bg-white border-slate-200 hover:border-purple-400 hover:shadow-lg'}`}
            >
              <div className="mr-3 transition-transform duration-300 group-hover:scale-110">
                {tool.icon}
              </div>
              <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-slate-800'}`}>
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
