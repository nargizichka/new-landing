
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'Hosting xizmati qanday ishlaydi?',
            answer: 'Hosting xizmati sizning veb-saytingizni internetda ko\'rinadigan qilish uchun server joyini taqdim etadi. Bizning serverlarimiz 24/7 ishlab, sizning saytingiz doimo foydalanuvchilar uchun ochiq bo\'ladi.'
        },
        {
            question: 'Qanday to\'lov usullari mavjud?',
            answer: 'Biz Click, Payme, Oson, Uzum, Paynet va UPay to\'lov tizimlarini qo\'llab-quvvatlaymiz. Shuningdek, bank kartasi orqali ham to\'lov qilishingiz mumkin.'
        },
        {
            question: 'Texnik yordam qachon ishlaydi?',
            answer: 'Bizning texnik yordam jamoasi 24/7 ishlaydi. Har qanday muammo yoki savol bo\'lsa, chat, telefon yoki email orqali biz bilan bog\'lanishingiz mumkin.'
        },
        {
            question: 'Ma\'lumotlarim xavfsizligi kafolatlanganmi?',
            answer: 'Ha, biz eng yuqori xavfsizlik standartlarini qo\'llaymiz. SSL sertifikatlar, DDoS himoyasi va kunlik backup xizmatlari mavjud.'
        },
        {
            question: 'Tarifni o\'zgartirish mumkinmi?',
            answer: 'Albatta! Siz istalgan vaqtda tarifingizni yuqori yoki pastroq tarifga o\'zgartirishingiz mumkin. O\'zgarishlar darhol kuchga kiradi.'
        },
        {
            question: 'Bepul sinov davri bormi?',
            answer: 'Ha, barcha tariflar uchun 30 kunlik bepul sinov davri mavjud. Bu davr ichida barcha xizmatlardan to\'liq foydalanishingiz mumkin.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
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
                        Tez-tez{' '}
                        <span className="bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] bg-clip-text text-transparent">
              so'raladigan
            </span>
                        {' '}savollar
                    </motion.h2>

                    <motion.p
                        className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Bizning xizmatlarimiz haqida eng ko'p so'raladigan savollar va javoblar
                    </motion.p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.01,
                                        boxShadow: "0 10px 30px -10px rgba(239, 48, 94, 0.15)"
                                    }}
                                    className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg border transition-all duration-500 overflow-hidden ${
                                        openIndex === index
                                            ? 'border-[rgb(239,48,94)]/30 shadow-xl'
                                            : 'border-gray-100 dark:border-gray-700 hover:border-[rgb(239,48,94)]/20'
                                    }`}
                                >
                                    <motion.button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full p-6 lg:p-8 text-left flex items-center justify-between group-hover:bg-gray-50 dark:group-hover:bg-gray-800/50 transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white pr-4">
                                            {faq.question}
                                        </h3>

                                        <motion.div
                                            animate={{
                                                rotate: openIndex === index ? 180 : 0,
                                                scale: openIndex === index ? 1.1 : 1
                                            }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                                                openIndex === index
                                                    ? 'bg-[rgb(239,48,94)] text-white'
                                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-[rgb(239,48,94)]/10 group-hover:text-[rgb(239,48,94)]'
                                            }`}
                                        >
                                            <motion.i
                                                className="ri-add-line text-lg"
                                                animate={{
                                                    rotate: openIndex === index ? 45 : 0
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.div>
                                    </motion.button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    height: { duration: 0.4, ease: "easeInOut" },
                                                    opacity: { duration: 0.3, delay: 0.1 }
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <motion.div
                                                    initial={{ y: -10 }}
                                                    animate={{ y: 0 }}
                                                    exit={{ y: -10 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="px-6 lg:px-8 pb-6 lg:pb-8"
                                                >
                                                    <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
                                                        <motion.p
                                                            className="text-gray-600 dark:text-gray-300 leading-relaxed"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ duration: 0.4, delay: 0.2 }}
                                                        >
                                                            {faq.answer}
                                                        </motion.p>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mt-12 lg:mt-16"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-r from-[rgb(239,48,94)]/10 to-[rgb(220,40,85)]/10 rounded-3xl p-8 lg:p-12 border border-[rgb(239,48,94)]/20"
                        >
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Boshqa savollaringiz bormi?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 lg:text-lg">
                                Bizning mutaxassislar jamoasi sizga yordam berishga tayyor
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] hover:from-[rgb(220,40,85)] hover:to-[rgb(200,35,75)] text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                <i className="ri-customer-service-line mr-2 text-lg"></i>
                                Bog'lanish
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}