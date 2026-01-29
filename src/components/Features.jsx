import React from 'react';
import SectionWrapper from './SectionWrapper';
import Card from './ui/Card';
import { UserCheck, Clock, Heart, Ear } from 'lucide-react';

const params = {
    title: "Por Qué Elegir Inglés Eureka",
    subtitle: "Entendemos sus necesidades y adaptamos nuestro método para garantizar su aprendizaje y comodidad."
};

const features = [
    {
        icon: <UserCheck size={48} className="text-primary" />,
        title: "Sin Prisa, Sin Tecnicismos",
        description: "Explicamos todo en español claro. No necesitas ser experto en tecnología para nuestras clases."
    },
    {
        icon: <Clock size={48} className="text-primary" />,
        title: "A Tu Propio Ritmo",
        description: "Repetimos las explicaciones las veces que sean necesarias. Avanzamos solo cuando te sientas seguro."
    },
    {
        icon: <Ear size={48} className="text-primary" />,
        title: "Enfoque Práctico",
        description: "Aprende el inglés que realmente necesitas para viajar, pedir comida o pedir ayuda."
    },
    {
        icon: <Heart size={48} className="text-primary" />,
        title: "Mucha Paciencia",
        description: "Sabemos que retomar el estudio puede dar nervios. Aquí encontrarás un ambiente 100% de apoyo."
    }
];

const Features = () => {
    return (
        <SectionWrapper id="features" {...params} className="bg-white dark:bg-slate-900">
            <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                    <Card key={index} hoverEffect className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 border-2 border-surface shadow-sm">
                        <div className="p-4 bg-primary/10 rounded-2xl shrink-0">
                            {feature.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-text mb-3">{feature.title}</h3>
                            <p className="text-lg text-text-muted leading-relaxed">{feature.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Features;
