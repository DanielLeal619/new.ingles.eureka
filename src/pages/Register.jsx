import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Mail, Lock, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const [focusedField, setFocusedField] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        birthdate: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [validationError, setValidationError] = useState('');

    const { register, loading, error: authError } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidationError('');

        // Validaciones
        if (!formData.firstName || !formData.lastName || !formData.birthdate || !formData.email || !formData.password || !formData.confirmPassword) {
            setValidationError('Por favor completa todos los campos.');
            return;
        }

        if (!isValidEmail(formData.email)) {
            setValidationError('El formato del correo electrónico no es válido.');
            return;
        }

        if (formData.password.length < 6) {
            setValidationError('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setValidationError('Las contraseñas no coinciden.');
            return;
        }

        try {
            await register(formData);
            navigate('/'); // Redirigir al inicio tras registro exitoso
        } catch (err) {
            // El error se maneja en el contexto, pero podemos hacer logs adicionales aquí
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-slate-950 p-2 sm:p-4 md:p-8">
            <div className="w-full max-w-6xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 min-h-[700px]">

                {/* Left Side - Visual & Branding (Sticky/Fixed feel) */}
                <div className="relative bg-gradient-to-br from-primary to-blue-600 p-8 md:p-12 flex flex-col justify-between text-white overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white"></div>
                        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full border-8 border-white"></div>
                    </div>

                    <div className="relative z-10">
                        <Link to="/" className="inline-flex items-center gap-3 group">
                            <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl group-hover:bg-white/30 transition-colors">
                                <img src="/src/assets/logo-icon.png" alt="Logo" className="w-8 h-8 object-contain brightness-0 invert" />
                            </div>
                            <span className="text-2xl font-black tracking-tight uppercase">Inglés Eureka</span>
                        </Link>
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center mt-10 md:mt-0">
                        <motion.img
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: [0, -15, 0], opacity: 1 }}
                            transition={{
                                opacity: { duration: 0.6 },
                                y: {
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: "easeInOut",
                                    repeatType: "reverse"
                                }
                            }}
                            src="/src/assets/robot-2.png"
                            alt="Robot Register"
                            className="w-64 md:w-80 object-contain drop-shadow-2xl mb-8 hover:scale-105 transition-transform duration-300"
                        />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Únete a la aventura!</h2>
                        <p className="text-blue-100 text-lg max-w-sm">
                            Crea tu cuenta y comienza a aprender inglés de la forma más divertida y efectiva.
                        </p>
                    </div>

                    <div className="relative z-10 text-sm text-blue-100/60 mt-8 md:mt-0">
                        © 2024 Inglés Eureka. Todos los derechos reservados.
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-4 sm:p-8 md:p-16 lg:p-20 flex flex-col justify-center">
                    <div className="mb-10">
                        <h3 className="text-2xl sm:text-3xl font-bold text-text mb-2">Crear Cuenta</h3>
                        <p className="text-text-muted">
                            ¿Ya tienes cuenta? <Link to="/login" className="text-primary font-bold hover:underline">Inicia Sesión</Link>
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid xl:grid-cols-2 gap-6">
                            <InputField
                                name="firstName"
                                icon={<User size={18} />}
                                label="Nombre(s)"
                                placeholder="Ej. Juan Manuel"
                                isFocused={focusedField === 'firstName'}
                                onFocus={() => setFocusedField('firstName')}
                                onBlur={() => setFocusedField(null)}
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            <InputField
                                name="lastName"
                                icon={<User size={18} />}
                                label="Apellidos"
                                placeholder="Ej. Pérez López"
                                isFocused={focusedField === 'lastName'}
                                onFocus={() => setFocusedField('lastName')}
                                onBlur={() => setFocusedField(null)}
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>

                        <InputField
                            name="birthdate"
                            type="date"
                            icon={<Calendar size={18} />}
                            label="Fecha de nacimiento"
                            isFocused={focusedField === 'birthdate'}
                            onFocus={() => setFocusedField('birthdate')}
                            onBlur={() => setFocusedField(null)}
                            value={formData.birthdate}
                            onChange={handleChange}
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
                        />

                        <div className="grid xl:grid-cols-2 gap-6">
                            <InputField
                                name="password"
                                type="password"
                                icon={<Lock size={18} />}
                                label="Contraseña"
                                placeholder="••••••••"
                                isFocused={focusedField === 'password'}
                                onFocus={() => setFocusedField('password')}
                                onBlur={() => setFocusedField(null)}
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <InputField
                                name="confirmPassword"
                                type="password"
                                icon={<Lock size={18} />}
                                label="Confirmar"
                                placeholder="••••••••"
                                isFocused={focusedField === 'confirmPassword'}
                                onFocus={() => setFocusedField('confirmPassword')}
                                onBlur={() => setFocusedField(null)}
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>

                        {(validationError || authError) && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-red-50 text-red-700 text-base font-medium rounded-xl border border-red-200 flex items-start gap-3"
                            >
                                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                                <span>{validationError || authError}</span>
                            </motion.div>
                        )}

                        <div className="pt-4">
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full justify-center text-lg py-4 shadow-xl shadow-primary/20 hover:shadow-primary/40 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin mr-2 h-5 w-5" />
                                        Registrando...
                                    </>
                                ) : (
                                    <>
                                        Registrarse Ahora
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-xs text-text-muted">
                            Al registrarte, aceptas nuestros <a href="#" className="underline hover:text-primary">Términos de Servicio</a> y <a href="#" className="underline hover:text-primary">Política de Privacidad</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InputField = ({ label, name, type = "text", placeholder, icon, isFocused, onFocus, onBlur, value, onChange }) => (
    <div className="space-y-1.5 group">
        <label className={`text-sm font-semibold transition-colors duration-200 ${isFocused ? 'text-primary' : 'text-text-muted'}`}>
            {label} <span className="text-red-500">*</span>
        </label>
        <div className={`
            flex items-center space-x-3 px-4 py-3.5 rounded-xl border-2 transition-all duration-200 bg-surface dark:bg-slate-800
            ${isFocused
                ? 'border-primary shadow-[0_0_0_4px_rgba(59,110,172,0.1)]'
                : 'border-transparent hover:border-slate-300 dark:hover:border-slate-600'}
        `}>
            <span className={`transition-colors duration-200 ${isFocused ? 'text-primary' : 'text-text-muted/50'}`}>
                {icon}
            </span>
            <input
                name={name}
                type={type}
                className="flex-1 bg-transparent border-none outline-none text-text placeholder:text-text-muted/40 font-medium min-w-0"
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
                value={value}
                onChange={onChange}
            />
        </div>
    </div>
);

export default Register;
