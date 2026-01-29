import React from 'react';
import { cn } from '../../lib/utils';

const Card = ({ children, className, hoverEffect = false, ...props }) => {
    return (
        <div
            className={cn(
                "bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border-2 border-gray-100 dark:border-white/5",
                hoverEffect && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
