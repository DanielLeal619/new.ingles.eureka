import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, Send, Phone, MessageSquare, Facebook, Instagram, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { sendMessage } from '../services/contact.service';

const Contact = () => {
    const [focusedField, setFocusedField] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await sendMessage(formData);
            setIsSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error("Error al enviar mensaje", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-slate-950 p-2 sm:p-4 md:p-8">
            <div className="w-full max-w-6xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 min-h-[700px]">

                {/* Left Side - Visual & Information */}
                <div className="relative bg-gradient-to-bl from-indigo-600 to-purple-700 p-8 md:p-12 flex flex-col justify-between text-white overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute top-20 left-10 w-40 h-40 rounded-full border-4 border-white/50"></div>
                        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white"></div>
                    </div>

                    <div className="relative z-10">
                        <Link to="/" className="inline-flex items-center gap-3 group">
                            <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl group-hover:bg-white/30 transition-colors">
                                <img src="/src/assets/logo-icon.png" alt="Logo" className="w-8 h-8 object-contain brightness-0 invert" />
                            </div>
                            <span className="text-2xl font-black tracking-tight uppercase">Inglés Eureka</span>
                        </Link>
                    </div>

                    <div className="relative z-10 mt-12 md:mt-0">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Estamos aquí para escucharte</h2>
                        <p className="text-indigo-100 text-lg max-w-md mb-8">
                            ¿Tienes dudas sobre los cursos? ¿Necesitas soporte técnico? Nuestro equipo está listo para ayudarte.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-indigo-50">
                                <div className="p-3 bg-white/10 rounded-xl">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm opacity-70">Llámanos</p>
                                    <p className="font-semibold text-lg">+52 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-indigo-50">
                                <div className="p-3 bg-white/10 rounded-xl">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm opacity-70">Escríbenos</p>
                                    <p className="font-semibold text-lg">soporte@ingleseureka.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex gap-4">
                            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="relative z-10 text-sm text-indigo-200 mt-8">
                        © 2024 Inglés Eureka
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-4 sm:p-8 md:p-16 lg:p-20 flex flex-col justify-center relative">
                    <AnimatePresence mode='wait'>
                        {isSuccess ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="flex flex-col items-center text-center h-full justify-center"
                            >
                                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle size={48} />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">¡Gracias!</h3>
                                <p className="text-slate-600 dark:text-slate-300 text-lg max-w-md mx-auto mb-8">
                                    Hemos recibido tu mensaje correctamente. Nuestro equipo te contactará muy pronto.
                                </p>
                                <Button onClick={() => setIsSuccess(false)} variant="outline" className="px-8">
                                    Enviar otro mensaje
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="mb-8">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-text mb-2">Contáctanos</h3>
                                    <p className="text-text-muted">
                                        Llena el formulario y te responderemos a la brevedad.
                                    </p>
                                </div>

                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <InputField
                                        name="name"
                                        icon={<User size={18} />}
                                        label="Nombre Completo"
                                        placeholder="Ej. María González"
                                        isFocused={focusedField === 'name'}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />

                                    <InputField
                                        name="email"
                                        type="email"
                                        icon={<Mail size={18} />}
                                        label="Correo electrónico"
                                        placeholder="tucorreo@ejemplo.com"
                                        isFocused={focusedField === 'email'}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />

                                    <InputField
                                        name="subject"
                                        icon={<MessageSquare size={18} />}
                                        label="Asunto"
                                        placeholder="¿Cómo podemos ayudarte?"
                                        isFocused={focusedField === 'subject'}
                                        onFocus={() => setFocusedField('subject')}
                                        onBlur={() => setFocusedField(null)}
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />

                                    <TextAreaField
                                        name="message"
                                        label="Mensaje"
                                        placeholder="Escribe aquí tu mensaje..."
                                        isFocused={focusedField === 'message'}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />

                                    <div className="pt-4">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full justify-center text-lg py-4 shadow-xl shadow-indigo-200 dark:shadow-none hover:shadow-indigo-300 dark:hover:shadow-indigo-900/20 bg-indigo-600 hover:bg-indigo-700 text-white border-transparent"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                                                    Enviando...
                                                </>
                                            ) : (
                                                <>
                                                    Enviar Mensaje
                                                    <Send className="ml-2 w-5 h-5" />
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

const InputField = ({ label, name, type = "text", placeholder, icon, isFocused, onFocus, onBlur, value, onChange, required }) => (
    <div className="space-y-1.5 group">
        <label className={`text-sm font-semibold transition-colors duration-200 ${isFocused ? 'text-indigo-600' : 'text-slate-500'}`}>
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className={`
            flex items-center space-x-3 px-4 py-3.5 rounded-xl border-2 transition-all duration-200 bg-slate-50 dark:bg-slate-800
            ${isFocused
                ? 'border-indigo-600 shadow-[0_0_0_4px_rgba(79,70,229,0.1)]'
                : 'border-transparent hover:border-slate-300 dark:hover:border-slate-600'}
        `}>
            <span className={`transition-colors duration-200 ${isFocused ? 'text-indigo-600' : 'text-slate-400'}`}>
                {icon}
            </span>
            <input
                name={name}
                type={type}
                className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder:text-slate-400 font-medium min-w-0"
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    </div>
);

const TextAreaField = ({ label, name, placeholder, isFocused, onFocus, onBlur, value, onChange, required }) => (
    <div className="space-y-1.5 group">
        <label className={`text-sm font-semibold transition-colors duration-200 ${isFocused ? 'text-indigo-600' : 'text-slate-500'}`}>
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className={`
            flex items-start space-x-3 px-4 py-3.5 rounded-xl border-2 transition-all duration-200 bg-slate-50 dark:bg-slate-800
            ${isFocused
                ? 'border-indigo-600 shadow-[0_0_0_4px_rgba(79,70,229,0.1)]'
                : 'border-transparent hover:border-slate-300 dark:hover:border-slate-600'}
        `}>
            <textarea
                name={name}
                rows={4}
                className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder:text-slate-400 font-medium resize-none min-h-[100px]"
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    </div>
);

export default Contact;
