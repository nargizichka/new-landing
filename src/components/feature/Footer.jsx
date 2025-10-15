
import { motion } from 'framer-motion';

export default function Footer() {
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const quickLinks = [
        { label: 'Bosh sahifa', href: '#hero' },
        { label: 'Xizmatlar', href: '#services' },
        { label: 'Narxlar', href: '#pricing' },
        { label: 'FAQ', href: '#faq' }
    ];

    const services = [
        { label: 'Web Hosting', href: '#services' },
        { label: 'VDS/VPS', href: '#services' },
        { label: 'Domen', href: '#services' },
        { label: 'SMS Paket', href: '#services' }
    ];

    const socialLinks = [
        { icon: 'ri-telegram-line', href: '#', label: 'Telegram' },
        { icon: 'ri-instagram-line', href: '#', label: 'Instagram' },
        { icon: 'ri-facebook-line', href: '#', label: 'Facebook' },
        { icon: 'ri-twitter-line', href: '#', label: 'Twitter' }
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] rounded-xl flex items-center justify-center">
                                <i className="ri-server-line text-white text-2xl"></i>
                            </div>
                            <span className="text-3xl font-bold">SYSDC</span>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                            Zamonaviy texnologiyalar bilan quvvatlanadigan ishonchli hosting xizmatlari.
                            Sizning muvaffaqiyatingiz bizning maqsadimiz.
                        </p>
                        <div className="flex items-center space-x-4 text-gray-300">
                            <div className="flex items-center">
                                <i className="ri-phone-line mr-2 text-[rgb(239,48,94)]"></i>
                                <span>+998 90 123 45 67</span>
                            </div>
                            <div className="flex items-center">
                                <i className="ri-mail-line mr-2 text-[rgb(239,48,94)]"></i>
                                <span>info@sysdc.uz</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-bold mb-6 text-white">Tezkor havolalar</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-gray-300 hover:text-[rgb(239,48,94)] transition-colors duration-200 flex items-center group"
                                    >
                                        <i className="ri-arrow-right-s-line mr-2 text-[rgb(239,48,94)] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold mb-6 text-white">Xizmatlar</h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(service.href)}
                                        className="text-gray-300 hover:text-[rgb(239,48,94)] transition-colors duration-200 flex items-center group"
                                    >
                                        <i className="ri-arrow-right-s-line mr-2 text-[rgb(239,48,94)] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                        {service.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700"
                >
                    <div className="flex items-center space-x-6 mb-4 md:mb-0">
                        <span className="text-gray-300 font-medium">Bizni kuzatib boring:</span>
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 bg-gray-700 hover:bg-[rgb(239,48,94)] rounded-full flex items-center justify-center transition-all duration-300 group"
                                aria-label={social.label}
                            >
                                <i className={`${social.icon} text-gray-300 group-hover:text-white text-lg`}></i>
                            </motion.a>
                        ))}
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-gray-400 mb-2">
                            © 2019 SYSDC Barcha huquqlar himoyalangan.
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
