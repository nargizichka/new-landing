
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import Button from '../../../components/base/Button.jsx';
import FloatingServer from '../../../components/3d/FloatingServer.jsx';

export default function HeroSection() {
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 pt-24 lg:pt-32">
            {/* Desktop 3D Background */}
            <div className="absolute inset-0 z-0 opacity-30 hidden lg:block">
                <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.4} />
                        <directionalLight position={[10, 10, 5]} intensity={1} />
                        <pointLight position={[0, 0, 0]} intensity={0.6} color="#ef305e" />
                        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
                            <FloatingServer />
                        </Float>
                        <Environment preset="city" />
                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            autoRotate
                            autoRotateSpeed={0.8}
                        />
                    </Suspense>
                </Canvas>
            </div>

            {/* Mobile Creative Background */}
            <div className="absolute inset-0 z-0 lg:hidden">
                {/* Animated gradient mesh */}
                <div className="absolute inset-0">
                    <motion.div
                        animate={{
                            background: [
                                'radial-gradient(circle at 20% 50%, rgba(239,48,94,0.1) 0%, transparent 50%)',
                                'radial-gradient(circle at 80% 50%, rgba(239,48,94,0.1) 0%, transparent 50%)',
                                'radial-gradient(circle at 50% 20%, rgba(239,48,94,0.1) 0%, transparent 50%)',
                                'radial-gradient(circle at 50% 80%, rgba(239,48,94,0.1) 0%, transparent 50%)',
                                'radial-gradient(circle at 20% 50%, rgba(239,48,94,0.1) 0%, transparent 50%)'
                            ]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0"
                    />
                </div>

                {/* Floating geometric elements */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 left-6 w-16 h-16 bg-gradient-to-br from-[rgb(239,48,94)]/20 to-transparent rounded-3xl"
                />

                <motion.div
                    animate={{
                        y: [0, 15, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-52 right-8 w-12 h-12 bg-[rgb(239,48,94)]/15 rounded-full"
                />

                <motion.div
                    animate={{
                        x: [0, 10, 0],
                        rotate: [0, -90, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-60 left-4 w-20 h-20 border-2 border-[rgb(239,48,94)]/20 rounded-2xl"
                />

                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        x: [0, 5, 0]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-32 right-6 w-14 h-14 bg-gradient-to-tl from-[rgb(239,48,94)]/25 to-transparent rounded-xl"
                />

                {/* Animated lines */}
                <motion.div
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgb(239,48,94)]/30 to-transparent"
                />

                <motion.div
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgb(239,48,94)]/20 to-transparent"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white mb-6 lg:mb-8 leading-tight"
                    >
                        Kelajak{' '}
                        <motion.span
                            className="bg-gradient-to-r from-[rgb(239,48,94)] via-[rgb(220,40,85)] to-[rgb(200,35,75)] bg-clip-text text-transparent"
                            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            hosting
                        </motion.span>
                        <br className="hidden sm:block" />
                        <span className="block sm:inline"> bu yerda</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 lg:mb-12 leading-relaxed max-w-4xl mx-auto"
                    >
                        Zamonaviy texnologiyalar bilan quvvatlanadigan ishonchli hosting.
                        <span className="block mt-2 text-[rgb(239,48,94)] font-semibold">
              Sizning loyihangiz uchun mukammal muhit.
            </span>
                    </motion.p>

                    {/* Action buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-12 lg:mb-16"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                size="lg"
                                onClick={() => scrollToSection('#services')}
                                className="w-full sm:w-auto min-w-[200px] lg:min-w-[240px] h-12 lg:h-16 bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] hover:from-[rgb(220,40,85)] hover:to-[rgb(200,35,75)] text-white shadow-2xl hover:shadow-3xl transform transition-all duration-300 text-base lg:text-lg font-semibold"
                            >
                                <i className="ri-rocket-line mr-3 text-lg lg:text-xl"></i>
                                Hoziroq boshlash
                            </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => scrollToSection('#pricing')}
                                className="w-full sm:w-auto min-w-[200px] lg:min-w-[240px] h-12 lg:h-16 border-2 border-[rgb(239,48,94)] text-[rgb(239,48,94)] hover:bg-[rgb(239,48,94)] hover:text-white transform transition-all duration-300 text-base lg:text-lg font-semibold"
                            >
                                <i className="ri-price-tag-3-line mr-3 text-lg lg:text-xl"></i>
                                Narxlarni ko'rish
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Stats cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto"
                    >
                        {[
                            { number: '50K+', label: 'Faol mijozlar', icon: 'ri-user-line' },
                            { number: '99.99%', label: 'Uptime kafolati', icon: 'ri-shield-check-line' },
                            { number: '24/7', label: 'Texnik yordam', icon: 'ri-customer-service-line' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    boxShadow: "0 25px 50px -12px rgba(239, 48, 94, 0.25)"
                                }}
                                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:border-[rgb(239,48,94)]/30 transition-all duration-500"
                            >
                                <motion.div
                                    className="flex items-center justify-center mb-4"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[rgb(239,48,94)] to-[rgb(220,40,85)] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                        <i className={`${stat.icon} text-white text-xl lg:text-2xl`}></i>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] bg-clip-text text-transparent mb-2"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {stat.number}
                                </motion.div>

                                <div className="text-gray-600 dark:text-gray-300 font-medium text-sm lg:text-base">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 lg:w-8 lg:h-12 border-2 border-[rgb(239,48,94)] rounded-full flex justify-center cursor-pointer hover:border-[rgb(220,40,85)] transition-colors duration-300 group"
                    onClick={() => scrollToSection('#services')}
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-3 lg:h-4 bg-[rgb(239,48,94)] rounded-full mt-2 group-hover:bg-[rgb(220,40,85)] transition-colors duration-300"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
