import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "¿Es necesario tener conocimientos previos de inglés?",
        answer: "No, en absoluto. Tenemos cursos diseñados específicamente para principiantes absolutos (Nivel Inicial) donde empezamos desde cero."
    },
    {
        question: "¿Para quién es este curso?",
        answer: "Para cualquier persona que quiera aprender con calma y sin presiones. Nos especializamos en enseñar a quienes no tienen experiencia previa con idiomas o tecnología."
    },
    {
        question: "¿Las clases son presenciales o virtuales?",
        answer: "Ofrecemos ambas modalidades. Puede venir a nuestras instalaciones o tomar las clases desde la comodidad de su casa a través de Zoom con soporte técnico incluido."
    },
    {
        question: "¿Cómo me inscribo?",
        answer: "Puede llamarnos por teléfono, enviarnos un mensaje de WhatsApp o llenar el formulario de contacto al final de esta página. Nosotros le guiaremos paso a paso."
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 dark:border-white/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
            >
                <span className="text-xl md:text-2xl font-bold text-text group-hover:text-primary transition-colors">
                    {question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-surface text-text group-hover:bg-primary/10'}`}>
                    {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-lg text-text-muted leading-relaxed pl-4 border-l-4 border-primary/20">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    return (
        <SectionWrapper
            id="faq"
            title="Preguntas Frecuentes"
            className="bg-surface dark:bg-slate-900 max-w-4xl mx-auto rounded-3xl my-12"
        >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 p-6 md:p-10">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} {...faq} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default FAQ;
