
import { motion } from 'framer-motion';


export default function Button({
                                   children,
                                   variant = 'primary',
                                   size = 'md',
                                   onClick,
                                   className = '',
                                   disabled = false
                               }) {
    const baseClasses = 'whitespace-nowrap cursor-pointer font-medium transition-all duration-300 rounded-xl flex items-center justify-center';

    const variants = {
        primary: 'bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(255,80,120)] text-white hover:shadow-lg hover:shadow-[rgb(239,48,94)]/25 hover:scale-105',
        secondary: 'bg-gray-900 text-white hover:bg-gray-800 hover:scale-105',
        outline: 'border-2 border-[rgb(239,48,94)] text-[rgb(239,48,94)] hover:bg-[rgb(239,48,94)] hover:text-white hover:scale-105'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        >
            {children}
        </motion.button>
    );
}
