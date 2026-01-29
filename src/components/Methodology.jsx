import React from 'react';
import SectionWrapper from './SectionWrapper';
import Card from './ui/Card';
import { Map, CheckSquare, Box, BookOpen, FileEdit, Mic } from 'lucide-react';

const methodologySteps = [
    {
        icon: <Map size={48} className="text-primary" />,
        title: "Guiar",
        description: "El propósito del método 'Eureka', es guiar paso a paso al alumno, en la creación de frases en Inglés, comenzando desde la más simple hasta la más compleja, utilizando palabras que se agrupan en base al uso que tienen."
    },
    {
        icon: <CheckSquare size={48} className="text-accent" />,
        title: "Simple y Efectivo",
        description: "El material creado, muestra en forma simple y efectiva, las estructuras esenciales del idioma Inglés. NO busca en este momento enseñar vocabulario extenso, ni temas de Inglés avanzado, sino las bases sólidas."
    },
    {
        icon: <Box size={48} className="text-primary" />,
        title: "Estructuración",
        description: "Se trabaja en la estructuración del idioma, el alumno dedicará su tiempo en comprender y hacer las estructuras esenciales, las cuales a su vez son complementadas por vocabulario práctico."
    },
    {
        icon: <BookOpen size={48} className="text-accent" />,
        title: "Vocabulario",
        description: "La propuesta es mostrar cómo usar las 361 palabras del núcleo esencial, crear con estas todas las estructuras verbales del idioma Inglés necesarias para comunicarse."
    },
    {
        icon: <FileEdit size={48} className="text-primary" />,
        title: "Ejercicios",
        description: "Se solicita al alumno que los haga en su totalidad y por escrito. Esto ayuda a retener la información y reafirmar el conocimiento mediante la práctica activa."
    },
    {
        icon: <Mic size={48} className="text-accent" />,
        title: "Pronunciación",
        description: "En este material, se muestra la forma de pronunciar todas las palabras del Inglés, partiendo desde la forma escrita que tenga cada una de las mismas y cómo se aglutinan los sonidos."
    }
];

const Methodology = () => {
    return (
        <SectionWrapper
            id="methodology"
            title="¿Cómo funciona Inglés Eureka?"
            subtitle="Nuestro método único diseñado para adultos"
            className="bg-surface dark:bg-slate-900"
        >
            {/* Intro Text */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
                <p className="text-lg md:text-xl text-text-muted leading-relaxed">
                    El propósito del método "Eureka" es guiar paso a paso al alumno en la creación de frases en Inglés, comenzando desde la más simple hasta la más compleja. Utilizamos palabras agrupadas por su uso práctico, enfocándonos en las estructuras esenciales del idioma sin tecnicismos innecesarios.
                </p>
            </div>

            {/* Grid of Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {methodologySteps.map((step, index) => (
                    <Card
                        key={index}
                        hoverEffect
                        className="flex flex-col items-center text-center p-8 border-2 border-transparent hover:border-primary/20 dark:bg-slate-800"
                    >
                        <div className="mb-6 p-4 bg-white dark:bg-slate-900 rounded-full shadow-md">
                            {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-text mb-4">{step.title}</h3>
                        <p className="text-text-muted leading-relaxed">
                            {step.description}
                        </p>
                    </Card>
                ))}
            </div>

            {/* Usage Mode Section */}
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                <h3 className="text-3xl font-bold mb-6 relative z-10">Modo de Uso Recomendado</h3>

                <div className="space-y-6 relative z-10 text-blue-50 text-lg leading-relaxed">
                    <p>
                        Se recomienda dedicar <strong>1 hora al día</strong>. El alumno debe leer el tema correspondiente y efectuar por escrito los ejercicios solicitados.
                    </p>
                    <ul className="list-disc list-inside space-y-2 marker:text-accent">
                        <li>Aprenderá a crear estructuras esenciales iniciando con las más simples.</li>
                        <li>El aprendizaje solamente requiere disciplina y constancia.</li>
                        <li>Los conocimientos adquiridos reafirman lo aprendido en cualquier otro curso previo.</li>
                    </ul>
                    <p className="font-medium pt-4 border-t border-white/20">
                        Una vez concluido el curso, el alumno dominará más del 95% de la estructuración del idioma Inglés.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Methodology;
