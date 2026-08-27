import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolioTheme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.className = theme;

    // Loading screen timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolioTheme', newTheme);
    document.documentElement.className = newTheme;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-purple-500 border-r-transparent border-b-pink-500 border-l-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#050816] text-white' : 'bg-slate-50 text-slate-900'}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero theme={theme} />
              <About theme={theme} />
              <Skills theme={theme} />
              <Portfolio theme={theme} />
              <Contact theme={theme} />
            </main>
          } />
          <Route path="/projects/:id" element={<ProjectDetails theme={theme} />} />
          <Route path="/insightx" element={<Navigate to="/projects/insightx" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer theme={theme} />
      </div>
    </Router>
  );
}

export default App;
