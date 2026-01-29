import React from 'react';
import SectionWrapper from './SectionWrapper';
import Card from './ui/Card';
import Button from './ui/Button';
import { Check } from 'lucide-react';

const Courses = () => {
    return (
        <SectionWrapper
            id="courses"
            title="Suscripción Mensual"
            subtitle="Un único plan con acceso total a todos los beneficios"
            className="bg-surface"
        >
            <div className="max-w-4xl mx-auto">
                <Card
                    hoverEffect
                    className="flex flex-col md:flex-row items-center gap-8 border-4 border-primary shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 bg-orange-500 text-white px-8 py-2 rounded-bl-xl font-bold text-lg shadow-md z-10">
                        ¡Mejor Valor!
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-4">
                        <h3 className="text-3xl font-bold text-text">Membresía Eureka</h3>
                        <p className="text-xl text-text-muted">Acceso ilimitado a todas nuestras clases y material de apoyo.</p>

                        <div className="flex items-baseline justify-center md:justify-start gap-2">
                            <span className="text-5xl font-extrabold text-primary">$120</span>
                            <span className="text-2xl text-text-muted font-medium">MXN / mes</span>
                        </div>
                        <p className="text-sm text-text-muted">Sin plazos forzosos. Cancela cuando quieras.</p>
                    </div>

                    <div className="flex-1 bg-surface/50 p-6 rounded-2xl w-full">
                        <ul className="space-y-4">
                            {[
                                "Clases en vivo ilimitadas",
                                "Grupos pequeños y pacientes",
                                "Material digital incluido",
                                "Acceso a grabaciones",
                                "Soporte por WhatsApp"
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-lg text-text">
                                    <div className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 p-1 rounded-full shrink-0">
                                        <Check size={20} />
                                    </div>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <Button variant="cta" size="lg" className="w-full justify-center shadow-lg">
                                Inscribirme Ahora
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </SectionWrapper>
    );
};

export default Courses;
