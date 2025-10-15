
import { motion } from 'framer-motion';

export default function WhyChooseSection() {
    const features = [
        {
            icon: 'ri-rocket-line',
            title: 'Yuqori tezlik',
            description: 'SSD disklar va CDN texnologiyasi orqali maksimal tezlik',
            stats: '3x tezroq'
        },
        {
            icon: 'ri-shield-check-line',
            title: 'Ishonchlilik',
            description: '99.99% uptime kafolati va professional monitoring',
            stats: '99.99% uptime'
        },
        {
            icon: 'ri-customer-service-line',
            title: 'Yordam 24/7',
            description: 'Har doim tayyor professional texnik yordam jamoasi',
            stats: '< 5 daqiqa'
        },
        {
            icon: 'ri-price-tag-line',
            title: 'Arzon narxlar',
            description: 'Eng yaxshi narx-sifat nisbati va moslashuvchan tariflar',
            stats: '50% tejash'
        },
        {
            icon: 'ri-global-line',
            title: 'Global tarmoq',
            description: 'Butun dunyo bo\'ylab serverlar va tezkor ulanish',
            stats: '15+ mamlakat'
        },
        {
            icon: 'ri-lock-line',
            title: 'Xavfsizlik',
            description: 'Eng so\'nggi xavfsizlik protokollari va himoya tizimlari',
            stats: 'SSL/TLS'
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
                        Nima uchun{' '}
                        <span className="bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] bg-clip-text text-transparent">
              bizni tanlash
            </span>
                        {' '}kerak?
                    </motion.h2>

                    <motion.p
                        className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Bizning afzalliklarimiz va nima uchun minglab mijozlar bizga ishonishini bilib oling
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.02,
                                y: -5,
                                boxShadow: "0 20px 40px -12px rgba(239, 48, 94, 0.15)"
                            }}
                            className="group relative bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-[rgb(239,48,94)]/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Background pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[rgb(239,48,94)]/5 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="relative z-10">
                                {/* Icon and stats */}
                                <div className="flex items-start justify-between mb-4">
                                    <motion.div
                                        className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[rgb(239,48,94)] to-[rgb(220,40,85)] rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <i className={`${feature.icon} text-white text-xl lg:text-2xl`}></i>
                                    </motion.div>

                                    <motion.div
                                        className="text-right"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="text-lg lg:text-xl font-bold text-[rgb(239,48,94)]">
                                            {feature.stats}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Title */}
                                <motion.h3
                                    className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[rgb(239,48,94)] transition-colors duration-300"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {feature.title}
                                </motion.h3>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                                    {feature.description}
                                </p>

                                {/* Hover indicator */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileHover={{ width: '100%' }}
                                    className="mt-4 h-1 bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] rounded-full transition-all duration-300"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 lg:mt-16"
                >
                    <div className="bg-gradient-to-r from-[rgb(239,48,94)]/10 to-[rgb(220,40,85)]/10 rounded-3xl p-8 lg:p-12 border border-[rgb(239,48,94)]/20">
                        <motion.h3
                            className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4"
                            whileHover={{ scale: 1.02 }}
                        >
                            Hoziroq boshlab ko'ring!
                        </motion.h3>

                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                            Bizning xizmatlarimizni sinab ko'ring va farqni his eting. 30 kunlik bepul sinov davri.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] hover:from-[rgb(220,40,85)] hover:to-[rgb(200,35,75)] text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <i className="ri-play-circle-line mr-2 text-lg"></i>
                            Bepul sinab ko'rish
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
