import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LabCard from './components/LabCard';
import ProductGrid from './components/ProductGrid';
import Section from './components/Section';
import Logo from './components/Logo';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [formStatus, setFormStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message?: string }>({ type: 'idle' });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: 'loading' });

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const inquiryType = formData.get('inquiryType') as string;
    const message = formData.get('message') as string;

    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: 'projectjasper416@gmail.com',
          from_name: name,
          from_email: email,
          inquiry_type: inquiryType,
          message: message,
          reply_to: email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      form.reset();

      setTimeout(() => {
        setFormStatus({ type: 'idle' });
      }, 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly at projectjasper416@gmail.com'
      });
    }
  };

  const labInitiatives = [
    {
      title: 'AI Experimentation Lab',
      description: 'Where we prototype next-generation AI applications. Currently exploring multimodal AI, agentic systems, and responsible AI deployment.',
      status: 'Active',
      focus: 'Rapid Prototyping',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop' // Cyberpunk/Tech lab vibe
    },
    {
      title: 'Product Validation Studio',
      description: 'Turning hypotheses into testable products. We build MVPs, run user experiments, and validate market fit before scaling.',
      status: 'Active',
      focus: 'User Validation',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop' // Real people collaborating
    },
    {
      title: 'Talent Incubator',
      description: 'Growing the next generation of builders. We provide hands-on experience with real projects, mentorship, and pathways to impact.',
      status: 'Active',
      focus: 'Skill Development',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop' // Team meeting/Mentorship
    },
    {
      title: 'Academic Bridge Lab',
      description: 'Connecting cutting-edge research with practical applications. We partner with universities to translate academic insights into real-world solutions.',
      status: 'Active',
      focus: 'Research Translation',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop' // University/Research setting
    },
    {
      title: 'Sustainability Lab',
      description: 'Building products that fund themselves. We focus on creating sustainable business models that validate ideas while generating revenue for future innovation.',
      status: 'Active',
      focus: 'Sustainable Models',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop' // Earth/Tech connection
    },
    {
      title: 'Innovation Pipeline',
      description: 'From idea to impact. Our systematic approach to identifying opportunities, validating assumptions, and launching experiments that matter.',
      status: 'Active',
      focus: 'Systematic Innovation',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop' // Tech team working
    }
  ];

  return (
    <Layout>
      <Navigation currentSection={currentSection} onNavigate={scrollToSection} />

      <Hero onExplore={() => scrollToSection('research')} />

      <Section id="research" className="py-32 px-4 sm:px-6 lg:px-8 bg-white text-black border-b-4 border-black">
        <div className="max-w-7xl mx-auto space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tighter uppercase">
              What's in the Lab
            </h2>
            <p className="text-xl text-gray-600 font-mono max-w-2xl border-l-2 border-black pl-6">
              Active experiments, ongoing initiatives, and the work happening right now at Jasper Labs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {labInitiatives.map((lab, index) => (
              <LabCard key={index} {...lab} index={index} />
            ))}
          </div>
        </div>
      </Section>

      <Section id="products" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-100 text-black border-b-4 border-black">
        <div className="max-w-7xl mx-auto space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tighter uppercase">
              Product Focus
            </h2>
            <p className="text-xl text-gray-600 font-mono max-w-2xl border-l-2 border-black pl-6">
              Product thinking is at our core — from how we structure experiments to how we design user experiences.
            </p>
          </motion.div>

          <ProductGrid />
        </div>
      </Section>

      <Section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tighter uppercase">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-400 font-mono max-w-2xl border-l-2 border-white pl-6">
              Interested in partnerships, collaboration, or joining our team? We'd love to hear from you.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 p-8 md:p-12 border-2 border-white bg-black"
          >
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white font-bold uppercase mb-2">
                  Name <span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white text-black border-2 border-transparent focus:border-blue-500 focus:outline-none transition-all duration-200 rounded-none"
                  placeholder="YOUR NAME"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-bold uppercase mb-2">
                  Email <span className="text-blue-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white text-black border-2 border-transparent focus:border-blue-500 focus:outline-none transition-all duration-200 rounded-none"
                  placeholder="YOUR.EMAIL@EXAMPLE.COM"
                />
              </div>
            </div>
            <div>
              <label htmlFor="inquiryType" className="block text-white font-bold uppercase mb-2">
                Inquiry Type
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                className="w-full px-4 py-3 bg-white text-black border-2 border-transparent focus:border-blue-500 focus:outline-none transition-all duration-200 rounded-none"
              >
                <option value="partnership">PARTNERSHIP</option>
                <option value="collaboration">COLLABORATION</option>
                <option value="careers">CAREERS</option>
                <option value="general">GENERAL INQUIRY</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-white font-bold uppercase mb-2">
                Message <span className="text-blue-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-white text-black border-2 border-transparent focus:border-blue-500 focus:outline-none transition-all duration-200 resize-none rounded-none"
                placeholder="TELL US ABOUT YOUR INQUIRY..."
              />
            </div>

            {formStatus.type !== 'idle' && (
              <div
                className={`p-4 border-2 ${formStatus.type === 'success'
                  ? 'bg-green-600 text-white border-green-600'
                  : formStatus.type === 'error'
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-blue-600 text-white border-blue-600'
                  }`}
              >
                {formStatus.type === 'loading' && (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                    <span className="font-mono uppercase">Sending...</span>
                  </div>
                )}
                {(formStatus.type === 'success' || formStatus.type === 'error') && (
                  <p className="font-mono uppercase">{formStatus.message}</p>
                )}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={formStatus.type === 'loading'}
                className="w-full sm:w-auto px-12 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus.type === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </div>
          </motion.form>
        </div>
      </Section>

      <footer className="pt-12 pb-24 bg-black text-white border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Logo className="text-white" />
            <div className="text-center md:text-right space-y-2">
              <p className="text-gray-400 text-sm font-mono">
                &copy; {new Date().getFullYear()} JASPER LABS. ALL RIGHTS RESERVED.
              </p>
              <p className="text-gray-500 text-xs font-mono uppercase">
                Building the future, one experiment at a time.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default App;
