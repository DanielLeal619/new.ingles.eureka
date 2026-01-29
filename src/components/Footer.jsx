import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-3 gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/src/assets/logo-full.png" alt="Inglés Eureka" className="h-12 brightness-0 invert opacity-90" />
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            La academia de inglés pensada para usted. Aprendizaje a su ritmo, con paciencia y dedicación.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-primary-foreground mb-4">Contáctenos</h4>
                        <div className="flex items-center gap-3 text-lg text-gray-300">
                            <Phone className="text-primary-hover shrink-0" />
                            <span>(555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-3 text-lg text-gray-300">
                            <Mail className="text-primary-hover shrink-0" />
                            <span>hola@ingleseureka.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-lg text-gray-300">
                            <MapPin className="text-primary-hover shrink-0" />
                            <span>Calle Principal 123, Ciudad</span>
                        </div>
                    </div>

                    {/* Social / Links */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-primary-foreground mb-4">Síganos</h4>
                        <div className="flex gap-4">
                            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors" aria-label="Facebook">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors" aria-label="Instagram">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Inglés Eureka. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
