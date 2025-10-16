
import { motion } from 'framer-motion';

export default function ServicesSection() {
    const services = [
        {
            icon: 'ri-server-line',
            title: 'Hosting',
            description: 'Yuqori tezlikda ishlaydigan web hosting xizmatlari. SSD disklar va CDN texnologiyasi bilan.',
            features: ['SSD Storage', 'CDN Network', 'SSL Certificate', '99.9% Uptime'],
            gradient: 'from-[rgb(239,48,94)] to-[rgb(220,40,85)]'
        },
        {
            icon: 'ri-cloud-line',
            title: 'VDS/VPS',
            description: 'Virtual serverlar va moslashuvchan cloud hosting yechimlari. Avtomatik masshtablash va yuqori ishonchlilik.',
            features: ['Auto Scaling', 'Root Access', 'Custom OS', 'Full Control'],
            gradient: 'from-[rgb(220,40,85)] to-[rgb(200,35,75)]'
        },
        {
            icon: 'ri-database-line',
            title: 'Server',
            description: 'Maxsus serverlar va professional hosting yechimlari. Yuqori samaradorlik va ishonchlilik.',
            features: ['Dedicated Resources', 'High Performance', 'Custom Config', '24/7 Monitoring'],
            gradient: 'from-[rgb(200,35,75)] to-[rgb(180,30,65)]'
        },
        {
            icon: 'ri-global-line',
            title: 'Domen',
            description: 'Domen nomi ro\'yxatdan o\'tkazish va boshqarish xizmatlari. Barcha mashhur zonalar.',
            features: ['Domain Registration', 'DNS Management', 'WHOIS Privacy', 'Auto Renewal'],
            gradient: 'from-[rgb(180,30,65)] to-[rgb(160,25,55)]'
        },
        {
            icon: 'ri-message-line',
            title: 'SMS Paket',
            description: 'SMS xabarlar yuborish xizmati. Biznes va marketing uchun SMS paketlari.',
            features: ['Bulk SMS', 'API Integration', 'Delivery Reports', 'Global Coverage'],
            gradient: 'from-[rgb(160,25,55)] to-[rgb(140,20,45)]'
        }
    ];

    return (
        <section id="services" className="py-16 lg:py-24 dark:bg-gray-900 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Bizning{' '}
                        <span className="bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] bg-clip-text text-transparent">
              xizmatlarimiz
            </span>
                    </motion.h2>

                    <motion.p
                        className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Professional hosting yechimlari va qo'shimcha xizmatlar sizning loyihangizni muvaffaqiyatga olib boradi
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.02,
                                y: -8,
                                boxShadow: "0 25px 50px -12px rgba(239, 48, 94, 0.25)"
                            }}
                            className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:border-[rgb(239,48,94)]/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Background gradient on hover */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.05 }}
                                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-opacity duration-500`}
                            />

                            <div className="relative z-10">
                                {/* Icon */}
                                <motion.div
                                    className="mb-6"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                                        <i className={`${service.icon} text-white text-2xl lg:text-3xl`}></i>
                                    </div>
                                </motion.div>

                                {/* Title */}
                                <motion.h3
                                    className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[rgb(239,48,94)] transition-colors duration-300"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {service.title}
                                </motion.h3>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <motion.div
                                            key={featureIndex}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                                            viewport={{ once: true }}
                                            className="flex items-center space-x-3"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.2 }}
                                                className="w-2 h-2 bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] rounded-full"
                                            />
                                            <span className="text-sm lg:text-base text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                        {feature}
                      </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Action button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-6 w-full py-3 px-6 bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] hover:from-[rgb(220,40,85)] hover:to-[rgb(200,35,75)] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                                >
                                    Batafsil ma'lumot
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 lg:mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] hover:from-[rgb(220,40,85)] hover:to-[rgb(200,35,75)] text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                        <i className="ri-arrow-right-line mr-2 text-lg"></i>
                        Barcha xizmatlarni ko'rish
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
