import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowUp, } from 'react-icons/fi';

const Footer = ({ theme }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 border-t ${theme === 'dark' ? 'bg-[#050816] border-white/10' : 'bg-slate-50 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-bold font-serif tracking-tight mb-4">
            Saravanan<span className="text-purple-500">.</span>
          </div>
          <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            © {currentYear} Saravanan. All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row md:justify-around">
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className={`space-y-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Projects' ? 'work' : item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="hover:text-purple-500 cursor-pointer transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Back to Top */}
        <div className="col-span-1 flex md:justify-end items-start">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all hover:-translate-y-2 ${theme === 'dark' ? 'bg-white/10 hover:bg-purple-500' : 'bg-slate-200 hover:bg-purple-500 hover:text-white'
              }`}
          >
            <FiArrowUp size={20} />
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
