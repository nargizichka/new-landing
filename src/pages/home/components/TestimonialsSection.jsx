
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Aziz Karimov',
            position: 'IT Direktor',
            company: 'TechCorp',
            content: 'Bu hosting xizmati bizning kompaniyamiz uchun mukammal yechim bo\'ldi. Tezlik va ishonchlilik ajoyib!',
            rating: 5,
            avatar: 'https://readdy.ai/api/search-image?query=professional%20uzbek%20businessman%20in%20modern%20office%2C%20confident%20smile%2C%20business%20suit%2C%20clean%20background%2C%20corporate%20headshot%20style%2C%20high%20quality%20portrait&width=80&height=80&seq=testimonial1&orientation=squarish'
        },
        {
            id: 2,
            name: 'Malika Tosheva',
            position: 'Loyiha Menejeri',
            company: 'WebStudio',
            content: 'Texnik yordam jamoasi juda professional. Har qanday muammoni tezda hal qilishadi. Tavsiya qilaman!',
            rating: 5,
            avatar: 'https://readdy.ai/api/search-image?query=professional%20uzbek%20businesswoman%20in%20modern%20office%2C%20confident%20smile%2C%20business%20attire%2C%20clean%20background%2C%20corporate%20headshot%20style%2C%20high%20quality%20portrait&width=80&height=80&seq=testimonial2&orientation=squarish'
        },
        {
            id: 3,
            name: 'Bobur Rahimov',
            position: 'Dasturchi',
            company: 'StartupUZ',
            content: 'Narxlar juda mos va xizmat sifati yuqori. Bizning startup loyihamiz uchun ideal tanlov bo\'ldi.',
            rating: 5,
            avatar: 'https://readdy.ai/api/search-image?query=young%20uzbek%20software%20developer%20in%20modern%20workspace%2C%20friendly%20smile%2C%20casual%20professional%20attire%2C%20clean%20background%2C%20tech%20professional%20portrait&width=80&height=80&seq=testimonial3&orientation=squarish'
        },
        {
            id: 4,
            name: 'Nigora Abdullayeva',
            position: 'Marketing Menejeri',
            company: 'DigitalAgency',
            content: 'Server tezligi va barqarorligi bizning mijozlarimizni juda mamnun qildi. Ajoyib xizmat!',
            rating: 5,
            avatar: 'https://readdy.ai/api/search-image?query=professional%20uzbek%20marketing%20manager%20in%20modern%20office%2C%20confident%20expression%2C%20business%20casual%20attire%2C%20clean%20background%2C%20corporate%20portrait%20style&width=80&height=80&seq=testimonial4&orientation=squarish'
        },
        {
            id: 5,
            name: 'Sardor Umarov',
            position: 'CEO',
            company: 'E-commerce Pro',
            content: 'Hosting xizmati bizning onlayn do\'konimiz uchun mukammal. Yuqori trafik paytida ham barqaror ishlaydi.',
            rating: 5,
            avatar: 'https://readdy.ai/api/search-image?query=successful%20uzbek%20CEO%20in%20executive%20office%2C%20professional%20smile%2C%20premium%20business%20suit%2C%20clean%20background%2C%20executive%20portrait%20style&width=80&height=80&seq=testimonial5&orientation=squarish'
        }
    ];

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-advance testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            nextTestimonial();
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? 45 : -45
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction < 0 ? 45 : -45
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <section className="py-16 lg:py-24 bg-white dark:bg-gray-900 overflow-hidden">
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
                        Mijozlarimiz{' '}
                        <span className="bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] bg-clip-text text-transparent">
              fikrlari
            </span>
                    </motion.h2>

                    <motion.p
                        className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Bizning xizmatlarimizdan foydalanayotgan mijozlarimizning fikr-mulohazalari
                    </motion.p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Main testimonial card */}
                    <div className="relative h-80 lg:h-96 perspective-1000">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.4 },
                                    scale: { duration: 0.4 },
                                    rotateY: { duration: 0.6 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);

                                    if (swipe < -swipeConfidenceThreshold) {
                                        nextTestimonial();
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        prevTestimonial();
                                    }
                                }}
                                className="absolute inset-0 cursor-grab active:cursor-grabbing"
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 25px 50px -12px rgba(239, 48, 94, 0.25)"
                                    }}
                                    className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 h-full flex flex-col justify-center relative overflow-hidden"
                                >
                                    {/* Background decoration */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[rgb(239,48,94)]/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

                                    {/* Quote icon */}
                                    <motion.div
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-[rgb(239,48,94)] to-[rgb(220,40,85)] rounded-full flex items-center justify-center"
                                    >
                                        <i className="ri-double-quotes-l text-white text-xl"></i>
                                    </motion.div>

                                    <div className="relative z-10 text-center">
                                        {/* Rating */}
                                        <motion.div
                                            className="flex justify-center mb-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                        >
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <motion.i
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                                                    className="ri-star-fill text-yellow-400 text-xl mx-1"
                                                />
                                            ))}
                                        </motion.div>

                                        {/* Content */}
                                        <motion.p
                                            className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.5 }}
                                        >
                                            "{testimonials[currentIndex].content}"
                                        </motion.p>

                                        {/* Author */}
                                        <motion.div
                                            className="flex items-center justify-center space-x-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.6 }}
                                        >
                                            <motion.img
                                                src={testimonials[currentIndex].avatar}
                                                alt={testimonials[currentIndex].name}
                                                className="w-16 h-16 rounded-full object-cover border-4 border-[rgb(239,48,94)]/20"
                                                whileHover={{ scale: 1.1 }}
                                            />
                                            <div className="text-left">
                                                <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                                                    {testimonials[currentIndex].name}
                                                </h4>
                                                <p className="text-[rgb(239,48,94)] font-medium">
                                                    {testimonials[currentIndex].position}
                                                </p>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                    {testimonials[currentIndex].company}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex justify-center items-center space-x-4 mt-8">
                        <motion.button
                            onClick={prevTestimonial}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 bg-white dark:bg-gray-800 border-2 border-[rgb(239,48,94)] text-[rgb(239,48,94)] rounded-full flex items-center justify-center shadow-lg hover:bg-[rgb(239,48,94)] hover:text-white transition-all duration-300"
                        >
                            <i className="ri-arrow-left-line text-xl"></i>
                        </motion.button>

                        {/* Dots indicator */}
                        <div className="flex space-x-2">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    whileHover={{ scale: 1.2 }}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentIndex
                                            ? 'bg-[rgb(239,48,94)] scale-125'
                                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-[rgb(239,48,94)]/50'
                                    }`}
                                />
                            ))}
                        </div>

                        <motion.button
                            onClick={nextTestimonial}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 bg-white dark:bg-gray-800 border-2 border-[rgb(239,48,94)] text-[rgb(239,48,94)] rounded-full flex items-center justify-center shadow-lg hover:bg-[rgb(239,48,94)] hover:text-white transition-all duration-300"
                        >
                            <i className="ri-arrow-right-line text-xl"></i>
                        </motion.button>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-6 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)]"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 5, ease: "linear" }}
                            key={currentIndex}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}