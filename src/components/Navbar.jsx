import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About me', to: 'about' },
    { name: 'My Work', to: 'work' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 flex justify-center px-4 pt-6 transition-all duration-300 pointer-events-none">
      <div
        className={`w-full max-w-[1000px] rounded-full border px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300 pointer-events-auto backdrop-blur-md bg-white/90 dark:bg-[#111827]/90 border-gray-200 dark:border-white/10 ${scrolled ? 'shadow-md shadow-gray-200/50 dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)]' : 'shadow-sm'}`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <Link to="home" smooth={true} duration={500} className="flex items-center space-x-3">
            <span className="text-lg font-bold font-sans tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
              Saravanan.
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-[#3b82f6] dark:text-[#3b82f6] font-semibold"
              className="cursor-pointer text-[15px] font-medium text-gray-700 hover:text-[#3b82f6] dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 focus:outline-none transition-colors duration-300 flex items-center justify-center"
          >
            {mobileMenuOpen ? <FiX size={16} /> : <FiMenu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 rounded-2xl md:hidden pointer-events-auto bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 shadow-xl overflow-hidden transition-colors duration-300"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer block text-lg font-medium text-gray-700 hover:text-[#3b82f6] dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
