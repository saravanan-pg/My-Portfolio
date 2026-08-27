import React from 'react';
import { motion } from 'framer-motion';

const About = ({ theme }) => {
  return (
    <section id="about" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-[#070B1A]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

          {/* Left: 40% */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[40%] flex justify-center lg:justify-end"
          >
            <div className={`w-full max-w-[460px] rounded-[32px] p-5 border transition-transform duration-500 hover:scale-[1.02] ${theme === 'dark' ? 'bg-[#111827] border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]' : 'bg-white border-slate-200 shadow-xl'}`}>

              {/* Top Badges */}
              <div className="flex justify-between items-center mb-5 px-1">
                <div className={`px-4 py-2 rounded-full text-xs font-semibold border flex items-center space-x-2 ${theme === 'dark' ? 'bg-white/5 border-white/10 text-gray-200' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                  <span>Available for freelance</span>
                </div>
                <div className={`px-4 py-2 rounded-full text-xs font-semibold border ${theme === 'dark' ? 'bg-white/5 border-white/10 text-gray-200' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                  2026 Edition
                </div>
              </div>

              {/* Profile Image */}
              <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-slate-800 relative">
                <img
                  src="/profile.jpeg"
                  alt="Saravanan - Frontend Developer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

            </div>
          </motion.div>

          {/* Right: 60% */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[60%] flex flex-col items-start text-left"
          >
            {/* Heading */}
            <div className="mb-8">
              <h2 className={`text-5xl md:text-[56px] font-serif font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                About me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#7C3AED] to-[#6366F1] rounded-full"></div>
            </div>

            <p className={`text-[18px] leading-[1.8] mb-10 max-w-2xl ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-slate-600'}`}>
              Passionate Frontend Developer focused on creating scalable, responsive, and visually appealing web applications. I strive to combine aesthetics with seamless user experiences. I have had the privilege of collaborating on multiple projects, continuously learning and adopting modern technologies to deliver high-quality solutions.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 w-full max-w-2xl">

              {/* Card 1 */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`p-6 rounded-[20px] border relative group overflow-hidden ${theme === 'dark' ? 'bg-[#111827] border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]' : 'bg-white border-slate-200 shadow-sm'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center space-x-4 mb-4 relative z-10">
                  <div className="text-[#7C3AED] text-3xl">🎓</div>
                  <h4 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Education</h4>
                </div>
                <p className={`text-[15px] leading-relaxed relative z-10 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-slate-600'}`}>
                  B.E Electronics and Communication Engineering
                </p>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
