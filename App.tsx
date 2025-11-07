import React, { useState, useEffect, useRef } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Section from './components/Section';
import ImageSection from './components/ImageSection';
import Logo from './components/Logo';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    // Set initial visibility for hero section
    setIsVisible({ home: true });

    const observerOptions = {
      root: null,
      rootMargin: '-5% 0px -20% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setCurrentSection(id);
          setIsVisible((prev) => ({ ...prev, [id]: true }));
        }
      });
    }, observerOptions);

    // Observe all top-level sections by id
    const sectionElements = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    sectionElements.forEach((el) => observer.observe(el));

    // Fallback: Make sections visible after a short delay if observer hasn't triggered
    const fallbackTimer = setTimeout(() => {
      sectionElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport) {
          setIsVisible((prev) => ({ ...prev, [el.id]: true }));
        }
      });
    }, 500);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
      // Ensure section becomes visible when navigated to
      setTimeout(() => {
        setIsVisible((prev) => ({ ...prev, [sectionId]: true }));
      }, 300);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const inquiryType = formData.get('inquiryType') as string;
    const message = formData.get('message') as string;
    
    const mailtoLink = `mailto:contact@jasperlabs.ai?subject=${encodeURIComponent(`${inquiryType} Inquiry from ${name}`)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  const labInitiatives = [
    {
      title: 'AI Experimentation Lab',
      description: 'Where we prototype next-generation AI applications. Currently exploring multimodal AI, agentic systems, and responsible AI deployment.',
      status: 'Active',
      focus: 'Rapid Prototyping',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
    },
    {
      title: 'Product Validation Studio',
      description: 'Turning hypotheses into testable products. We build MVPs, run user experiments, and validate market fit before scaling.',
      status: 'Active',
      focus: 'User Validation',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop'
    },
    {
      title: 'Talent Incubator',
      description: 'Growing the next generation of builders. We provide hands-on experience with real projects, mentorship, and pathways to impact.',
      status: 'Active',
      focus: 'Skill Development',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop'
    },
    {
      title: 'Academic Bridge Lab',
      description: 'Connecting cutting-edge research with practical applications. We partner with universities to translate academic insights into real-world solutions.',
      status: 'Active',
      focus: 'Research Translation',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop'
    },
    {
      title: 'Sustainability Lab',
      description: 'Building products that fund themselves. We focus on creating sustainable business models that validate ideas while generating revenue for future innovation.',
      status: 'Active',
      focus: 'Sustainable Models',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
    {
      title: 'Innovation Pipeline',
      description: 'From idea to impact. Our systematic approach to identifying opportunities, validating assumptions, and launching experiments that matter.',
      status: 'Active',
      focus: 'Systematic Innovation',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
    }
  ];

  const fadeInUp = (isVisible: boolean, delay: number = 0) => 
    `transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`;

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans antialiased">
      <ParticleBackground />
      <Navigation currentSection={currentSection} onNavigate={scrollToSection} />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <Section
          id="home"
          fullHeight={true}
          className="flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        >
          <div
            ref={(el) => (sectionsRef.current['home'] = el)}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <div className={`${fadeInUp(isVisible['home'] || true)} space-y-8`}>
              <div className="flex justify-center mb-8">
                <Logo className="w-24 h-24 md:w-32 md:h-32" variant="icon" />
              </div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
                  JasperLabs
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-slate-600 font-light tracking-wide">
                AI Lab + Product Studio
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-800 font-light leading-relaxed max-w-4xl mx-auto mt-12">
                Incubating ideas, growing talent, driving impact
              </p>
              <div className="pt-8">
                <button
                  onClick={() => scrollToSection('about')}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* About Section */}
        <Section
          id="about"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50/50"
        >
          <div
            ref={(el) => (sectionsRef.current['about'] = el)}
            className="space-y-16"
          >
            <div className={`${fadeInUp(isVisible['about'])} text-center space-y-6`}>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
                Where Research Meets Innovation
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                JasperLabs is where global research meets Indian talent — and where experiments become products.
              </p>
            </div>

            <div className={`${fadeInUp(isVisible['about'])} grid md:grid-cols-2 gap-12 items-center`}>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Our Mission
                </h3>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                  We partner with academia and industry to explore next-generation ideas, then use our Product Studio to bring those ideas to life for real users.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  We're not a product company. We're a launchpad for ideas — building what we believe the world needs next.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            <div className={`${fadeInUp(isVisible['about'])} grid md:grid-cols-2 gap-8 mt-16`}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Lean by design</h3>
                <p className="text-slate-700 text-lg leading-relaxed">
                  We build small, validate fast, and scale responsibly. Every project starts with a hypothesis and ends with real-world validation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-md">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Sustainability over hype</h3>
                <p className="text-slate-700 text-lg leading-relaxed">
                  We fund our research through what we build, not the other way around. Our products validate our ideas and fuel our next innovations.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Labs Section */}
        <Section
          id="research"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div
            ref={(el) => (sectionsRef.current['research'] = el)}
            className="space-y-16"
          >
            <div className={`${fadeInUp(isVisible['research'])} text-center space-y-6`}>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
                What's in the Lab
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Active experiments, ongoing initiatives, and the work happening right now at JasperLabs.
              </p>
            </div>

            <div className="space-y-24">
              {labInitiatives.map((lab, index) => (
                <div
                  key={index}
                  className={`${fadeInUp(isVisible['research'])} ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex flex-col md:flex gap-12 items-center`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
                    <img
                      src={lab.image}
                      alt={lab.title}
                      className="w-full h-auto transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full border border-green-200">
                        {lab.status}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full border border-blue-200">
                        {lab.focus}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                      {lab.title}
                    </h3>
                    <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                      {lab.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Products / Focus Section */}
        <Section
          id="products"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50"
        >
          <div
            ref={(el) => (sectionsRef.current['products'] = el)}
            className="space-y-16"
          >
            <div className={`${fadeInUp(isVisible['products'])} text-center space-y-6`}>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
                Product Management Focus
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Product thinking is at our core — from how we structure experiments to how we design user experiences.
              </p>
            </div>

            <div className={`${fadeInUp(isVisible['products'])} grid md:grid-cols-3 gap-8`}>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-indigo-200 hover:border-indigo-400 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Research-Driven</h3>
                <p className="text-slate-600 leading-relaxed">
                  Every product starts with deep research and validated hypotheses.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-200 hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">User-Centered</h3>
                <p className="text-slate-600 leading-relaxed">
                  We build products that solve real problems for real people.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-200 hover:border-cyan-400 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Sustainable</h3>
                <p className="text-slate-600 leading-relaxed">
                  Long-term viability and impact guide every decision we make.
                </p>
              </div>
            </div>

            <div className={`${fadeInUp(isVisible['products'])} text-center pt-8`}>
              <p className="text-lg md:text-xl text-slate-600 italic max-w-3xl mx-auto leading-relaxed">
                Our goal: to validate our ideas in the market, generate sustainable revenue, and fund the next wave of innovation.
              </p>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section
          id="contact"
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
        >
          <div
            ref={(el) => (sectionsRef.current['contact'] = el)}
            className="space-y-12"
          >
            <div className={`${fadeInUp(isVisible['contact'])} text-center space-y-6`}>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
                Get in Touch
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Interested in partnerships, collaboration, or joining our team? We'd love to hear from you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className={`${fadeInUp(isVisible['contact'])} space-y-6 bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-amber-200 shadow-lg`}
            >
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-slate-700 text-sm font-medium mb-2">
                    Name <span className="text-slate-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-700 text-sm font-medium mb-2">
                    Email <span className="text-slate-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="inquiryType" className="block text-slate-700 text-sm font-medium mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  aria-label="Select inquiry type"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="partnership">Partnership</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="careers">Careers</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-700 text-sm font-medium mb-2">
                  Message <span className="text-slate-500" aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  aria-required="true"
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                  aria-label="Submit contact form"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Section>

        {/* Footer */}
        <footer className="border-t border-slate-200 py-12 mt-20 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <Logo />
              <div className="text-center md:text-right space-y-2">
                <p className="text-slate-600 text-sm">
                  &copy; {new Date().getFullYear()} JasperLabs. All rights reserved.
                </p>
                <p className="text-slate-500 text-xs">
                  Building the future, one experiment at a time.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
