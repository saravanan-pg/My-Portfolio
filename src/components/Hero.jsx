import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPython } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Hero = ({ theme }) => {
  const orbitTech = [
    { icon: <FaReact size={26} color="#61DAFB" />, name: 'React' },
    { icon: <FaHtml5 size={26} color="#E34F26" />, name: 'HTML5' },
    { icon: <FaCss3Alt size={26} color="#1572B6" />, name: 'CSS3' },
    { icon: <FaJsSquare size={26} color="#F7DF1E" />, name: 'JavaScript' },
    { icon: <FaPython size={26} color="#3776AB" />, name: 'Python' },
    { icon: <SiTailwindcss size={26} color="#06B6D4" />, name: 'Tailwind' },
  ];

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12 ${theme === 'dark' ? 'bg-[#070B1A]' : 'bg-slate-50'}`}
    >
      {/* Background radial glow */}
      {theme === 'dark' && (
        <>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#6366f1]/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#3b82f6]/10 rounded-full blur-[150px] pointer-events-none"></div>
        </>
      )}

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10 w-full mt-8">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6 text-left order-2 lg:order-1"
        >
          <div className="flex items-center space-x-2 text-xs font-bold tracking-[0.2em] text-[#3b82f6] uppercase">
            <span>Hello! I'm Saravanan </span>
          </div>

          <h1 className={`text-[56px] md:text-[72px] lg:text-[80px] font-sans font-bold leading-[1.05] tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            frontend web <br />
            developer.
          </h1>

          <p className={`text-[17px] leading-[1.8] max-w-lg mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            I am a Frontend Developer specializing in creating responsive, modern, and user-friendly web applications using HTML, CSS, JavaScript, React, Tailwind CSS, and Python.
          </p>

          <div className="flex flex-wrap items-center space-x-4 pt-2">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6366f1] to-[#3b82f6] text-white font-medium text-[15px] transition-transform hover:scale-105 cursor-pointer shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)]"
            >
              contact me
            </Link>

            <a
              href="/Saravanan_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3.5 rounded-full border text-[15px] font-medium transition-colors ${theme === 'dark'
                  ? 'border-white/20 text-white hover:bg-white/5'
                  : 'border-slate-300 text-slate-800 hover:bg-slate-100'
                }`}
            >
              my resume
            </a>
          </div>
        </motion.div>

        {/* Right Content - Professional Tech Floating Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end items-center order-1 lg:order-2 w-full h-[450px] relative"
        >
          <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
            
            {/* Glowing Orb Center */}
            <div className={`absolute w-[250px] h-[250px] rounded-full blur-[60px] ${theme === 'dark' ? 'bg-[#3b82f6]/30' : 'bg-[#3b82f6]/20'}`}></div>
            
            {/* Main Floating Code Editor Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={`relative z-10 w-[280px] h-[190px] sm:w-[320px] sm:h-[220px] rounded-2xl border backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden ${theme === 'dark' ? 'bg-[#0f172a]/90 border-white/10' : 'bg-white/90 border-slate-200'}`}
            >
              {/* Editor Header */}
              <div className={`h-10 w-full border-b flex items-center px-4 space-x-2 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50'}`}>
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              
              {/* Editor Body */}
              <div className="flex-1 p-5 sm:p-6 font-mono text-[12px] sm:text-[14px] leading-loose flex flex-col justify-center">
                <p className={`${theme === 'dark' ? 'text-pink-400' : 'text-pink-600'}`}>const <span className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>developer</span> = {'{'}</p>
                <p className={`pl-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>name: <span className={`${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>'Saravanan'</span>,</p>
                <p className={`pl-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>role: <span className={`${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>'Frontend Dev'</span>,</p>
                <p className={`pl-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>skills: <span className={`${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>['React', 'UI/UX']</span></p>
                <p className={`${theme === 'dark' ? 'text-pink-400' : 'text-pink-600'}`}>{'}'};</p>
              </div>
            </motion.div>

            {/* Orbiting Icons */}
            {orbitTech.map((tech, index) => {
              const angle = (index / orbitTech.length) * Math.PI * 2 - Math.PI / 2;
              const radius = window.innerWidth < 640 ? 140 : 180; // responsive radius
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 3 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                  className="absolute z-20"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl backdrop-blur-md shadow-xl border ${
                    theme === 'dark' ? 'bg-[#1e293b]/90 border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)]' : 'bg-white/90 border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.1)]'
                  }`}>
                    {tech.icon}
                  </div>
                </motion.div>
              );
            })}

            {/* Connecting dashed circle */}
            <div className={`absolute inset-0 m-auto rounded-full border-[1.5px] border-dashed w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] pointer-events-none ${theme === 'dark' ? 'border-white/10' : 'border-slate-300/50'}`}></div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
