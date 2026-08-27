import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiLock, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject) tempErrors.subject = "Subject is required";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.warn("EmailJS credentials are not set in the environment variables.");
        setSubmitStatus({ type: 'error', message: 'Email service is not configured properly.' });
        setIsSubmitting(false);
        return;
      }

      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          publicKey
        );
        
        setSubmitStatus({ type: 'success', message: "Message sent successfully! I'll get back to you soon." });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } catch (error) {
        console.error("Failed to send email:", error);
        setSubmitStatus({ type: 'error', message: "Unable to send your message. Please try again or contact me directly." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <section id="contact" className={`py-24 relative overflow-hidden ${theme === 'dark' ? 'bg-[#030614]' : 'bg-slate-50'}`}>

      {/* Background Dotted Map Placeholder (Using a radial gradient to simulate the glow) */}
      {theme === 'dark' && (
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      )}

      {/* Decorative Wave at bottom (gradient line) */}
      {theme === 'dark' && (
        <div className="absolute bottom-0 right-0 w-full h-[300px] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none opacity-50 blur-3xl"></div>
      )}

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-start relative z-10">

        {/* Left Side - Form Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className={`p-8 md:p-10 rounded-[2rem] border ${theme === 'dark' ? 'bg-[#0e1222] border-[#1e243a]' : 'bg-white border-slate-200 shadow-xl'}`}>
            {/* Header */}
            <div className="flex items-center gap-5 mb-10">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-indigo-500/10 text-indigo-500' : 'bg-indigo-100 text-indigo-600'}`}>
                <FiMail size={22} />
              </div>
              <div>
                <h3 className={`text-[1.35rem] font-medium mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Send a Message</h3>
                <p className={`text-[0.9rem] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Have a project in mind? Let's work together!</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Message Field */}
              <div>
                <label className={`block text-[0.95rem] font-medium mb-3 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="4"
                  className={`w-full p-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors resize-none ${theme === 'dark'
                    ? 'bg-[#13192b] border-transparent text-white placeholder-slate-500'
                    : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400'
                    } ${errors.message ? 'border-red-500' : ''}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label className={`block text-[0.95rem] font-medium mb-3 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full p-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors ${theme === 'dark'
                    ? 'bg-[#13192b] border-transparent text-white placeholder-slate-500'
                    : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400'
                    } ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Name and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-[0.95rem] font-medium mb-3 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full p-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors ${theme === 'dark'
                      ? 'bg-[#13192b] border-transparent text-white placeholder-slate-500'
                      : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400'
                      } ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className={`block text-[0.95rem] font-medium mb-3 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={`w-full p-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors ${theme === 'dark'
                      ? 'bg-[#13192b] border-transparent text-white placeholder-slate-500'
                      : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400'
                      } ${errors.subject ? 'border-red-500' : ''}`}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-medium text-[1.05rem] transition-opacity flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                >
                  <FiSend size={18} className={isSubmitting ? 'animate-pulse' : ''} /> 
                  {isSubmitting ? 'Sending...' : 'Send your message'}
                </button>
              </div>

              {submitStatus && (
                <div className={`p-4 rounded-xl text-[0.95rem] font-medium text-center ${submitStatus.type === 'success' ? (theme === 'dark' ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-600') : (theme === 'dark' ? 'bg-red-500/10 text-red-400' : 'bg-red-50 text-red-600')}`}>
                  {submitStatus.message}
                </div>
              )}

              <div className={`flex items-center justify-center gap-2 mt-4 text-[0.8rem] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                <FiLock size={12} />
                <span>Your information is secure and will never be shared.</span>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Right Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex flex-col justify-center h-full pt-4 lg:pt-10"
        >
          <div className="uppercase tracking-widest text-[0.8rem] font-semibold text-purple-600 mb-4">
            I'D LOVE TO HEAR FROM YOU!
          </div>

          <h2 className={`text-6xl md:text-[5.5rem] font-bold mb-6 leading-[1.1] tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Let's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Connect
            </span>
          </h2>

          <p className={`text-[1.05rem] mb-10 max-w-md leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            I'm always open to discussing new projects,
            opportunities, and collaborations. <br className="hidden md:block" />
            Feel free to reach out using the form or
            connect with me directly.
          </p>

          <div className={`w-full h-[1px] mb-8 ${theme === 'dark' ? 'bg-[#1e243a]' : 'bg-slate-200'}`}></div>

          <div className="space-y-6 mb-8">
            <div className="flex items-center space-x-5">
              <div className={`w-[3.25rem] h-[3.25rem] rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-[#13192b] text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                <FiMail size={20} />
              </div>
              <div>
                <p className={`text-[0.9rem] mb-0.5 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>Email</p>
                <p className={`font-medium ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>balusaravanabalu@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-5">
              <div className={`w-[3.25rem] h-[3.25rem] rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-[#13192b] text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                <FiPhone size={20} />
              </div>
              <div>
                <p className={`text-[0.9rem] mb-0.5 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>Phone</p>
                <p className={`font-medium ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>+91 9361619147</p>
              </div>
            </div>

            <div className="flex items-center space-x-5">
              <div className={`w-[3.25rem] h-[3.25rem] rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-[#13192b] text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                <FiMapPin size={20} />
              </div>
              <div>
                <p className={`text-[0.9rem] mb-0.5 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>Location</p>
                <p className={`font-medium ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>Tiruppur, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          <div className={`w-full h-[1px] mb-8 ${theme === 'dark' ? 'bg-[#1e243a]' : 'bg-slate-200'}`}></div>

          <p className={`text-[0.95rem] mb-5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Let's connect</p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/saravanan-pg"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 ${theme === 'dark' ? 'bg-[#13192b] text-slate-300 hover:text-white hover:bg-indigo-600' : 'bg-slate-100 text-slate-600 hover:text-white hover:bg-indigo-600'}`}
            >
              <FiGithub size={18} />
              <span className="text-[0.95rem] font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/saravanan-pg"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 ${theme === 'dark' ? 'bg-[#13192b] text-slate-300 hover:text-white hover:bg-indigo-600' : 'bg-slate-100 text-slate-600 hover:text-white hover:bg-indigo-600'}`}
            >
              <FiLinkedin size={18} />
              <span className="text-[0.95rem] font-medium">LinkedIn</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;

