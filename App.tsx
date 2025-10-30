import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const baseTransition = 'transition-all duration-1000 ease-in-out';
  const fadeIn = (isMounted: boolean) => isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5';


  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans">
      <ParticleBackground />
      <main className="relative z-10 flex flex-col items-center min-h-screen p-4 sm:p-8 md:p-12">
        <div className="text-center space-y-16 max-w-4xl w-full py-20">
          
          <header className='space-y-8'>
            <div
              className={`${baseTransition} ${fadeIn(isMounted)}`}
              style={{ transitionDelay: '200ms' }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                  JasperLabs
                </span>
              </h1>
              <p className="mt-2 text-lg md:text-xl text-slate-400 tracking-wide">
                AI Lab + Product Studio
              </p>
            </div>

            <div
              className={`${baseTransition} ${fadeIn(isMounted)}`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-light">
                Incubating ideas, growing talent, driving impact
              </p>
            </div>
          </header>
          
          <section
            className={`text-left space-y-4 text-slate-300 md:text-lg ${baseTransition} ${fadeIn(isMounted)}`}
            style={{ transitionDelay: '600ms' }}
          >
             <p>JasperLabs is where global research meets Indian talent — and where experiments become products.</p>
             <p>We partner with academia and industry to explore next-generation ideas, then use our Product Studio to bring those ideas to life for real users.</p>
             <p>We’re not a product company. We’re a launchpad for ideas — building what we believe the world needs next.</p>
          </section>

          <section 
            className={`text-center space-y-6 bg-slate-800/50 p-8 rounded-2xl border border-slate-700 ${baseTransition} ${fadeIn(isMounted)}`}
            style={{ transitionDelay: '800ms' }}
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
              Our Dual Focus
            </h2>
            <p className="text-slate-300 md:text-lg max-w-2xl mx-auto">
              A lab that experiments, trains talent, and builds partnerships, but also a studio that channels those experiments into commercial, sustainable B2C products.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left pt-6">
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                <h3 className="font-bold text-xl text-cyan-400 mb-2">Lean by design</h3>
                <p className="text-slate-400">We build small, validate fast, and scale responsibly.</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                <h3 className="font-bold text-xl text-purple-500 mb-2">Sustainability over hype</h3>
                <p className="text-slate-400">We fund our research through what we build, not the other way around.</p>
              </div>
            </div>
            <p className="text-slate-400 italic pt-6 border-t border-slate-700 mt-6 max-w-3xl mx-auto">
              Our goal: to validate our ideas in the market, generate sustainable revenue, and fund the next wave of innovation.
            </p>
          </section>

          <section 
            className={`text-center space-y-4 bg-slate-800/50 p-8 rounded-2xl border border-slate-700 ${baseTransition} ${fadeIn(isMounted)}`}
            style={{ transitionDelay: '1000ms' }}
          >
             <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
              Product Management Focus
            </h2>
            <p className="text-slate-300 md:text-lg max-w-2xl mx-auto">
              Product thinking is at our core — from how we structure experiments to how we design user experiences.
            </p>
          </section>

        </div>
        <footer
          className={`relative text-slate-500 text-sm mt-auto pb-4 ${baseTransition} ${
            isMounted ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          &copy; {new Date().getFullYear()} Jasper Labs. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default App;