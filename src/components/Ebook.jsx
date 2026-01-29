import React from 'react';
import SectionWrapper from './SectionWrapper';
import Button from './ui/Button';
import { Check, Book, Download, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Ebook = () => {
    return (
        <SectionWrapper
            id="ebook"
            className="bg-primary/5 border-y border-primary/10"
        >
            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* Book Cover / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative order-2 md:order-1"
                >
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl border-2 border-gray-100 dark:border-white/5 max-w-sm mx-auto transform rotate-[-2deg] hover:rotate-0 transition-all duration-300">
                        <div className="aspect-[3/4] bg-primary rounded-xl flex flex-col items-center justify-center text-white p-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary-dark"></div>
                            <div className="relative z-10 text-center space-y-4">
                                <div className="bg-white/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                    <Book size={40} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold leading-tight">Guía de Inglés Básico</h3>
                                <p className="text-white/80 font-medium">Para Empezar Desde Cero</p>
                                <div className="mt-8 pt-8 border-t border-white/20 w-full">
                                    <p className="text-sm opacity-80 uppercase tracking-widest">Digital Edition</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-500/10 rounded-full blur-3xl"></div>
                </motion.div>

                {/* Sales Content */}
                <div className="order-1 md:order-2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 text-green-800 dark:text-lime-300 rounded-lg font-bold text-sm border-l-4 border-accent">
                        <Star size={16} fill="currentColor" className="text-accent" />
                        <span>Oferta Especial</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-text">
                        ¿Quiere repasar en casa? <br />
                        <span className="text-primary">Descargue Nuestra Guía Práctica</span>
                    </h2>

                    <p className="text-xl text-text-muted leading-relaxed">
                        Hemos creado este libro digital especialmente para personas que inician. Letra grande, sin palabras complicadas y listo para imprimir si lo desea.
                    </p>

                    <ul className="space-y-4 my-8">
                        {[
                            "Vocabulario esencial para el día a día",
                            "Guía de pronunciación escrita fácil",
                            "Ejercicios para hacer en casa",
                            "Formato digital PDF (se lee en el celular)"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-lg font-medium text-text">
                                <div className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 p-1 rounded-full shrink-0">
                                    <Check size={20} />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <Button variant="cta" className="w-full sm:w-auto shadow-xl">
                            <Download className="mr-2" size={24} />
                            Comprar - $250 MXN
                        </Button>
                        <p className="text-text-muted text-sm px-4">
                            Descarga inmediata y segura.
                        </p>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Ebook;
