import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, className, id, title, subtitle }) => {
    return (
        <section id={id} className={cn("py-16 md:py-24 px-4 overflow-hidden", className)}>
            <div className="container mx-auto max-w-6xl">
                {(title || subtitle) && (
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        {title && (
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                                className="text-primary font-bold mb-4"
                            >
                                {title}
                            </motion.h2>
                        )}
                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-xl md:text-2xl text-text-muted leading-relaxed"
                            >
                                {subtitle}
                            </motion.p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
