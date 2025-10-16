
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../base/Button';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentLang, setCurrentLang] = useState('uz');

    const languages = [
        { code: 'uz', name: 'O\'zbek', flag: '🇺🇿' },
        { code: 'uz-cyrl', name: 'Ўзбек', flag: '🇺🇿' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const navItems = [
        { label: 'Bosh sahifa', href: '#hero' },
        { label: 'Xizmatlar', href: '#services' },
        { label: 'Narxlar', href: '#pricing' },
        { label: 'Hamkorlar', href: '#partners' },
        { label: 'Aloqa', href: '#contact' }
    ];
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl border-b border-gray-100/20 dark:border-gray-800/20'
                    : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center cursor-pointer group"
                        onClick={() => scrollToSection('#hero')}
                    >
                        <motion.div
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[rgb(239,48,94)] via-[rgb(220,40,85)] to-[rgb(200,35,75)] rounded-2xl flex items-center justify-center mr-3 shadow-xl group-hover:shadow-2xl transition-all duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <i className="ri-server-line text-white text-xl sm:text-2xl"></i>
                        </motion.div>
                        <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] bg-clip-text text-transparent" style={{ fontFamily: '"Pacifico", serif' }}>
              SYSDC
            </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ y: -3, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(item.href)}
                                className={`relative font-medium transition-all duration-300 group ${
                                    isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-gray-800 dark:text-gray-200'
                                }`}
                            >
                                {item.label}
                                <motion.div
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] group-hover:w-full transition-all duration-300"
                                />
                            </motion.button>
                        ))}
                    </nav>

                    {/* Desktop Controls */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* Language Selector */}
                        <div className="relative group">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-300"
                            >
                                <span className="text-lg">{languages.find(l => l.code === currentLang)?.flag}</span>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{languages.find(l => l.code === currentLang)?.name}</span>
                                <i className="ri-arrow-down-s-line text-gray-500"></i>
                            </motion.button>

                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                whileHover={{ opacity: 1, y: 0, scale: 1 }}
                                className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden"
                            >
                                {languages.map((lang) => (
                                    <motion.button
                                        key={lang.code}
                                        whileHover={{ backgroundColor: 'rgba(239, 48, 94, 0.1)' }}
                                        onClick={() => setCurrentLang(lang.code)}
                                        className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                                    >
                                        <span className="text-lg">{lang.flag}</span>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{lang.name}</span>
                                    </motion.button>
                                ))}
                            </motion.div>
                        </div>

                        {/* Dark Mode Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleDarkMode}
                            className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
                        >
                            <motion.div
                                animate={{ x: isDarkMode ? 24 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className="w-4 h-4 bg-white dark:bg-gray-300 rounded-full shadow-lg flex items-center justify-center"
                            >
                                <motion.i
                                    animate={{ rotate: isDarkMode ? 180 : 0 }}
                                    className={`${isDarkMode ? 'ri-moon-line' : 'ri-sun-line'} text-xs text-[rgb(239,48,94)]`}
                                />
                            </motion.div>
                        </motion.button>

                        {/* Login Button */}
                        <Button
                            size="sm"
                            className="bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] hover:from-[rgb(220,40,85)] hover:to-[rgb(200,35,75)] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-6"
                        >
                            <i className="ri-user-line mr-2"></i>
                            Kirish
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-300"
                    >
                        <motion.i
                            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                            className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl text-gray-700 dark:text-gray-300`}
                        />
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-100/20 dark:border-gray-800/20 rounded-b-3xl"
                        >
                            <div className="py-6 space-y-4">
                                {/* Mobile Navigation */}
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        onClick={() => scrollToSection(item.href)}
                                        className="block w-full text-left px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-[rgb(239,48,94)] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl mx-4 transition-all duration-300"
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}

                                {/* Mobile Controls */}
                                <div className="px-6 pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
                                    {/* Mobile Language & Theme */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Til:</span>
                                            <motion.button
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-sm"
                                            >
                                                <span>{languages.find(l => l.code === currentLang)?.flag}</span>
                                                <span className="text-gray-700 dark:text-gray-300">{languages.find(l => l.code === currentLang)?.name}</span>
                                            </motion.button>
                                        </div>

                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            onClick={toggleDarkMode}
                                            className="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
                                        >
                                            <motion.div
                                                animate={{ x: isDarkMode ? 24 : 0 }}
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                className="w-4 h-4 bg-white dark:bg-gray-300 rounded-full shadow-lg flex items-center justify-center"
                                            >
                                                <motion.i
                                                    animate={{ rotate: isDarkMode ? 180 : 0 }}
                                                    className={`${isDarkMode ? 'ri-moon-line' : 'ri-sun-line'} text-xs text-[rgb(239,48,94)]`}
                                                />
                                            </motion.div>
                                        </motion.button>
                                    </div>

                                    {/* Mobile Login */}
                                    <Button
                                        size="sm"
                                        className="w-full bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] hover:from-[rgb(220,40,85)] hover:to-[rgb(200,35,75)] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <i className="ri-user-line mr-2"></i>
                                        Kirish
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
