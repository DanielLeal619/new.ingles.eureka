import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, LogIn, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [focusedField, setFocusedField] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { login, loading } = useAuth();
    const navigate = useNavigate();

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!isValidEmail(email)) {
            setError('Por favor ingresa un correo electrónico válido');
            return;
        }

        if (!password) {
            setError('Por favor ingresa tu contraseña');
            return;
        }

        console.log('Datos enviados:', { email, password });

        try {
            await login(email, password);
            navigate('/'); // Redirigir al inicio tras login exitoso
        } catch (err) {
            setError('Error al iniciar sesión. Intenta nuevamente.');
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-slate-950 p-2 sm:p-4 md:p-8">
            <div className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 min-h-[600px]">

                {/* Left Side - Visual & Branding */}
                <div className="relative bg-gradient-to-tr from-accent to-green-600 p-8 md:p-12 flex flex-col justify-between text-white overflow-hidden order-last md:order-first">
                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute  bottom-10 left-10 w-40 h-40 rounded-full border-4 border-white"></div>
                        <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-white"></div>
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
                            initial={{ scale: 0.8, opacity: 0, y: 0 }}
                            animate={{ scale: 1, opacity: 1, y: [0, -15, 0] }}
                            transition={{
                                scale: { duration: 0.6 },
                                opacity: { duration: 0.6 },
                                y: {
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                    delay: 0.2 // subtle offset from register bot
                                }
                            }}
                            src="/src/assets/robot-3.png"
                            alt="Robot Login"
                            className="w-56 md:w-72 object-contain drop-shadow-2xl mb-8 hover:rotate-3 transition-transform duration-300"
                        />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Qué bueno verte!</h2>
                        <p className="text-green-50 text-lg max-w-sm">
                            Continúa tu camino hacia el dominio del inglés. Tus lecciones te esperan.
                        </p>
                    </div>

                    <div className="relative z-10 text-sm text-green-100/60 mt-8 md:mt-0 text-center md:text-left">
                        © 2024 Inglés Eureka
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-4 sm:p-8 md:p-16 flex flex-col justify-center">
                    <div className="mb-10 text-center md:text-left">
                        <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-4 text-primary">
                            <LogIn size={32} />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-text mb-2">Iniciar Sesión</h3>
                        <p className="text-text-muted">
                            ¿Nuevo aquí? <Link to="/registro" className="text-primary font-bold hover:underline">Crear una cuenta gratis</Link>
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <InputField
                            type="email"
                            icon={<Mail size={18} />}
                            label="Correo electrónico"
                            placeholder="tucorreo@ejemplo.com"
                            isFocused={focusedField === 'email'}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <div className="space-y-1">
                            <InputField
                                type="password"
                                icon={<Lock size={18} />}
                                label="Contraseña"
                                placeholder="••••••••"
                                isFocused={focusedField === 'password'}
                                onFocus={() => setFocusedField('password')}
                                onBlur={() => setFocusedField(null)}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="flex justify-end">
                                <a href="#" className="text-sm font-medium text-primary hover:underline">¿Olvidaste tu contraseña?</a>
                            </div>
                        </div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-200"
                            >
                                {error}
                            </motion.div>
                        )}

                        <div className="pt-4">
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full justify-center text-lg py-4 shadow-lg shadow-accent/20 hover:shadow-accent/40 bg-accent hover:bg-accent/90 text-primary-dark border-transparent disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin mr-2 h-5 w-5" />
                                        Cargando...
                                    </>
                                ) : (
                                    <>
                                        Entrar a mi cuenta
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const InputField = ({ label, type = "text", placeholder, icon, isFocused, onFocus, onBlur, value, onChange }) => (
    <div className="space-y-1.5 group">
        <label className={`text-sm font-semibold transition-colors duration-200 ${isFocused ? 'text-primary' : 'text-text-muted'}`}>
            {label}
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

export default Login;
