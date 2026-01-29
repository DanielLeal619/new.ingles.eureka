import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    onClick,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all focus:outline-none focus:ring-4 focus:ring-primary/30 active:scale-95 disabled:opacity-70 disabled:pointer-events-none";

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-xl border-2 border-transparent',
        secondary: 'bg-white dark:bg-slate-800 text-primary dark:text-blue-300 border-2 border-primary hover:bg-surface dark:hover:bg-slate-700 shadow-md',
        cta: 'bg-accent text-emerald-950 hover:bg-accent-hover shadow-xl hover:shadow-2xl border-2 border-transparent font-extrabold tracking-wide',
        ghost: 'bg-transparent text-primary hover:bg-primary/10',
        link: 'bg-transparent text-primary underline-offset-4 hover:underline p-0 h-auto shadow-none',
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-lg space-x-2",
        lg: "px-8 py-4 text-xl space-x-3",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
