
import { motion } from 'framer-motion';

export default function Card({
                                 children,
                                 className = '',
                                 hover = true,
                                 glow = false,
                                 variant = 'default'
                             }) {
    const variants = {
        default: 'bg-white rounded-2xl p-6 shadow-lg border border-gray-100',
        minimal: 'bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-50',
        modern: 'bg-gradient-to-br from-white to-gray-50/30 rounded-2xl p-6 shadow-lg border border-gray-100/50'
    };

    return (
        <motion.div
            whileHover={hover ? {
                y: -8,
                scale: 1.02,
                boxShadow: glow
                    ? '0 25px 50px -12px rgba(239, 48, 94, 0.15), 0 0 0 1px rgba(239, 48, 94, 0.1)'
                    : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            } : {}}
            transition={{
                duration: 0.3,
                ease: "easeOut"
            }}
            className={`
        ${variants[variant]}
        ${hover ? 'cursor-pointer' : ''}
        ${glow ? 'hover:border-[rgb(239,48,94)]/20' : 'hover:border-gray-200'}
        transition-all duration-300 group
        ${className}
      `}
        >
            {children}
        </motion.div>
    );
}
