import React, { useState } from 'react';
import { Menu, X, Phone, Moon, Sun, User, LogOut } from 'lucide-react';
import Button from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
        setIsOpen(false);
    };

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Nosotros', href: '/#features' },
        { name: 'Método', href: '/metodo' },
        { name: 'Cursos', href: '/#courses' },
        { name: 'Guía', href: '/#ebook' },
        { name: 'FAQ', href: '/#faq' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b-2 border-primary/10 dark:border-primary/20 shadow-sm transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                        <img
                            src="/src/assets/logo-icon.png"
                            alt="Inglés Eureka Logo"
                            className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-110 duration-300"
                        />
                        <div className="flex flex-col">
                            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white leading-none uppercase" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.1)' }}>
                                Inglés Eureka
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex items-center space-x-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-lg font-medium text-text hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-surface text-text hover:text-primary transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                        </button>

                        {user ? (
                            <div className="flex items-center gap-4 ml-2">
                                <div className="flex items-center gap-2 text-primary font-bold">
                                    <User size={20} />
                                    <span>Hola, {user.name.split(' ')[0]}</span>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleLogout}
                                    className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
                                >
                                    <LogOut size={18} className="mr-2" />
                                    Salir
                                </Button>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className="text-lg font-medium text-text hover:text-primary transition-colors hidden lg:block">
                                    Iniciar Sesión
                                </Link>

                                <Link to="/registro">
                                    <Button variant="outline" size="sm" className="ml-2 font-bold text-base hidden lg:flex">
                                        Registrarse
                                    </Button>
                                </Link>
                            </>
                        )}

                        {!user && (
                            <Link to="/contacto">
                                <Button variant="cta" size="sm" className="ml-4 font-bold text-base shadow-md">
                                    <Phone className="w-5 h-5" />
                                    <span>Contáctanos</span>
                                </Button>
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="xl:hidden flex items-center gap-4">
                        {user && (
                            <span className="text-sm font-bold text-primary max-w-[100px] truncate">
                                {user.name.split(' ')[0]}
                            </span>
                        )}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-surface text-text hover:text-primary transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-white dark:bg-slate-900 border-b-2 border-primary/20 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 rounded-xl text-xl font-medium text-text hover:bg-surface hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col gap-3">
                                {user ? (
                                    <Button
                                        variant="outline"
                                        onClick={handleLogout}
                                        className="w-full justify-center text-lg py-4 border-red-200 text-red-600 hover:bg-red-50"
                                    >
                                        <LogOut size={20} className="mr-2" />
                                        Cerrar Sesión
                                    </Button>
                                ) : (
                                    <>
                                        <Link to="/login" onClick={() => setIsOpen(false)}>
                                            <Button variant="secondary" className="w-full justify-center text-lg py-4">
                                                Iniciar Sesión
                                            </Button>
                                        </Link>
                                        <Link to="/registro" onClick={() => setIsOpen(false)}>
                                            <Button variant="outline" className="w-full justify-center text-lg py-4">
                                                Registrarse
                                            </Button>
                                        </Link>
                                    </>
                                )}

                                <Link to="/contacto" onClick={() => setIsOpen(false)}>
                                    <Button variant="cta" className="w-full justify-center text-lg py-4">
                                        <Phone className="w-6 h-6 mr-2" />
                                        Contáctanos
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
