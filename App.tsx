
import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const baseTransition = 'transition-all duration-1000 ease-in-out';

  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans overflow-hidden">
      <ParticleBackground />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center space-y-8 max-w-4xl w-full">
          <div
            className={`${baseTransition} ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                Jasper Labs
              </span>
            </h1>
          </div>

          <div
            className={`${baseTransition} ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-300">
              We are an AI-forward company building the next generation of intelligent products.
            </p>
          </div>
          
          <div
            className={`${baseTransition} ${
              isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 p-1 rounded-full shadow-lg shadow-purple-500/20">
              <div className="bg-slate-900 rounded-full px-8 py-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase">
                  Launching Soon
                </h2>
              </div>
            </div>
          </div>
        </div>
        <footer
          className={`absolute bottom-4 text-slate-500 text-sm ${baseTransition} ${
            isMounted ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          &copy; {new Date().getFullYear()} Jasper Labs. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default App;
