import React from 'react';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-br from-background to-surface">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary-dark rounded-full font-bold text-sm md:text-base border border-primary/20">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            ¡Aprendizaje simple y sin estrés!
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-text leading-[1.1] tracking-tight">
                            Aprende Inglés <br />
                            <span className="text-primary relative inline-block">
                                A Tu Propio Ritmo
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-text-muted leading-relaxed max-w-lg">
                            Clases diseñadas desde cero. Sin términos complicados, con paciencia y explicaciones claras paso a paso.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button variant="cta" size="lg" className="w-full sm:w-auto justify-center">
                                ¡Empieza Hoy!
                            </Button>
                            <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
                                Ver Cursos
                            </Button>
                        </div>

                        <div className="pt-8 flex items-center gap-6 text-sm md:text-base font-semibold text-text-muted">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-green-600 w-6 h-6" />
                                <span>Sin prisa</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-green-600 w-6 h-6" />
                                <span>Desde cero</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Setup for Image/Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Abstract Decorative Elements behind */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="relative z-10"
                        >
                            <img
                                src="/src/assets/robot-1.png"
                                alt="Robot Mascota Eureka"
                                className="w-full max-w-md mx-auto drop-shadow-[0_0_15px_rgba(59,110,172,0.4)] hover:drop-shadow-[0_0_25px_rgba(59,110,172,0.6)] hover:scale-105 transition-all duration-300"
                            />

                            {/* Floating Welcome Bubble */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-6 -right-4 md:right-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border-2 border-primary/20 max-w-[200px]"
                            >
                                <p className="text-sm font-bold text-primary dark:text-blue-300 mb-1">¡Hola!</p>
                                <p className="text-xs text-text-muted leading-relaxed">
                                    Soy Eureka Bot. Estoy aquí para ayudarte a aprender paso a paso.
                                </p>
                                <div className="absolute -top-2 left-6 w-4 h-4 bg-white dark:bg-slate-800 border-t-2 border-l-2 border-primary/20 transform rotate-45"></div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
