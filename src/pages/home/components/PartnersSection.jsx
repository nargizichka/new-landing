import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { Suspense, useRef } from 'react';

// 3D Logo Component
function Logo3D({ text, position, color }) {
    const meshRef = useRef(null);

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
            <group position={position}>
                <Center>
                    <Text3D
                        ref={meshRef}
                        font="/fonts/helvetiker_regular.typeface.json"
                        size={0.5}
                        height={0.1}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.02}
                        bevelSize={0.02}
                        bevelOffset={0}
                        bevelSegments={5}
                    >
                        {text}
                        <meshStandardMaterial color={color} />
                    </Text3D>
                </Center>
            </group>
        </Float>
    );
}

// Fallback 2D version for mobile
function Partners2D() {
    const partners = [
        { name: 'Click', color: '#0066CC', icon: 'ri-smartphone-line' },
        { name: 'Payme', color: '#00AAFF', icon: 'ri-wallet-line' },
        { name: 'Oson', color: '#FF6B35', icon: 'ri-bank-card-line' },
        { name: 'Uzum', color: '#7B68EE', icon: 'ri-shopping-bag-line' },
        { name: 'Paynet', color: '#32CD32', icon: 'ri-money-dollar-circle-line' },
        { name: 'UPay', color: '#FF1493', icon: 'ri-secure-payment-line' }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                        scale: 1.1,
                        y: -10,
                        boxShadow: `0 20px 40px -12px ${partner.color}40`
                    }}
                    className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300"
                >
                    <div className="text-center">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${partner.color}20` }}
                        >
                            <i className={`${partner.icon} text-2xl`} style={{ color: partner.color }}></i>
                        </motion.div>
                        <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                            {partner.name}
                        </h3>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default function PartnersSection3D() {
    const partners = [
        { name: 'Click', color: '#0066CC' },
        { name: 'Payme', color: '#00AAFF' },
        { name: 'Oson', color: '#FF6B35' },
        { name: 'Uzum', color: '#7B68EE' },
        { name: 'Paynet', color: '#32CD32' },
        { name: 'UPay', color: '#FF1493' }
    ];

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
                        Bizning{' '}
                        <span className="bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] bg-clip-text text-transparent">
              hamkorlarimiz
            </span>
                    </motion.h2>

                    <motion.p
                        className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Ishonchli to'lov tizimlari bilan hamkorlik qilamiz
                    </motion.p>
                </motion.div>

                {/* Desktop 3D Version */}
                <div className="hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl"
                    >
                        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                            <Suspense fallback={null}>
                                <ambientLight intensity={0.6} />
                                <directionalLight position={[10, 10, 5]} intensity={1} />
                                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ef305e" />

                                {partners.map((partner, index) => {
                                    // Sahifa bo'ylab turli joylar
                                    const positions = [
                                        [ -6, 3, -3 ],
                                        [5, 2, 2],
                                        [ -4, -2, 1 ],
                                        [6, -3, 2],
                                        [0, 4, 3],
                                        [-5, 0, -4]
                                    ];

                                    const pos = positions[index]; // har bir logoga alohida joy

                                    return (
                                        <Logo3D
                                            key={index}
                                            text={partner.name}
                                            position={pos}
                                            color={partner.color}
                                        />
                                    );
                                })}

                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                    autoRotate
                                    autoRotateSpeed={1}
                                />
                            </Suspense>
                        </Canvas>
                    </motion.div>
                </div>

                {/* Mobile 2D Version */}
                <div className="lg:hidden">
                    <Partners2D />
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
                        <i className="ri-handshake-line mr-2 text-lg"></i>
                        Hamkorlik haqida
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}