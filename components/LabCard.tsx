import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface LabCardProps {
    title: string;
    description: string;
    status: string;
    focus: string;
    image: string;
    index: number;
}

const LabCard: React.FC<LabCardProps> = ({ title, description, status, focus, image, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-300"
        >
            <div className="aspect-video overflow-hidden border-b-2 border-black">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
            </div>

            <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <span className="px-2 py-1 text-xs font-bold uppercase border border-current">
                            {status}
                        </span>
                        <span className="px-2 py-1 text-xs font-bold uppercase bg-blue-600 text-white border border-blue-600">
                            {focus}
                        </span>
                    </div>
                    <ArrowUpRight className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold font-display uppercase tracking-tight">
                    {title}
                </h3>

                <p className="text-sm font-mono leading-relaxed opacity-80">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default LabCard;
