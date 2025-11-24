import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

interface HeroProps {
    onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 border-b-4 border-black bg-black text-white">
            {/* Logo positioned top-left */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
                <Logo className="text-white w-12 h-12 md:w-16 md:h-16" variant="icon" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="space-y-8"
                >
                    <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold font-display tracking-tighter leading-[0.9]">
                        JASPER
                        <br />
                        <span className="text-transparent bg-clip-text bg-white/20 stroke-white stroke-2">LABS</span>
                    </h1>

                    <p className="text-xl sm:text-2xl text-gray-400 font-mono max-w-2xl mx-auto border-l-2 border-blue-600 pl-6 text-left md:text-center md:border-l-0 md:border-t-2 md:pt-6">
                        INCUBATING IDEAS. GROWING TALENT. DRIVING IMPACT.
                    </p>

                    <div className="pt-8 flex justify-center">
                        <button
                            onClick={onExplore}
                            className="group relative px-8 py-4 bg-white text-black font-bold text-lg uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-colors duration-0"
                        >
                            <span className="flex items-center gap-4">
                                Explore The Lab
                                <ArrowRight className="w-6 h-6" />
                            </span>
                            <div className="absolute top-2 left-2 w-full h-full border-2 border-white -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-200" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
