
import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '../../../components/base/Button';

export default function PricingSection() {
    const [billingPeriod, setBillingPeriod] = useState('monthly');

    const plans = [
        {
            name: 'Starter',
            description: 'Kichik loyihalar uchun',
            dailyPrice: 1500,
            monthlyPrice: 29000,
            yearlyPrice: 290000,
            features: [
                { name: 'SSD Storage', value: '1 GB' },
                { name: 'Bandwidth', value: '10 GB' },
                { name: 'Email Accounts', value: '1 ta' },
                { name: 'SSL Certificate', value: 'Bepul' },
                { name: 'Support', value: 'Asosiy' },
                { name: 'Backup', value: 'Haftalik' },
                { name: 'Uptime', value: '99.5%' }
            ],
            popular: false,
            color: 'from-gray-600 to-gray-700'
        },
        {
            name: 'Professional',
            description: 'Biznes loyihalar uchun',
            dailyPrice: 3500,
            monthlyPrice: 79000,
            yearlyPrice: 790000,
            features: [
                { name: 'SSD Storage', value: '10 GB' },
                { name: 'Bandwidth', value: '100 GB' },
                { name: 'Email Accounts', value: '10 ta' },
                { name: 'SSL Certificate', value: 'Bepul' },
                { name: 'Support', value: 'Ustuvor' },
                { name: 'Backup', value: 'Kunlik' },
                { name: 'Uptime', value: '99.9%' }
            ],
            popular: true,
            color: 'from-[rgb(239,48,94)] to-[rgb(220,40,85)]'
        },
        {
            name: 'Enterprise',
            description: 'Katta loyihalar uchun',
            dailyPrice: 6500,
            monthlyPrice: 149000,
            yearlyPrice: 1490000,
            features: [
                { name: 'SSD Storage', value: '50 GB' },
                { name: 'Bandwidth', value: 'Cheksiz' },
                { name: 'Email Accounts', value: 'Cheksiz' },
                { name: 'SSL Certificate', value: 'Bepul' },
                { name: 'Support', value: '24/7' },
                { name: 'Backup', value: 'Soatlik' },
                { name: 'Uptime', value: '99.99%' }
            ],
            popular: false,
            color: 'from-gray-800 to-gray-900'
        }
    ];

    const formatPrice = (price) => {
        return new Intl.NumberFormat('uz-UZ').format(price);
    };

    const getPrice = (plan) => {
        switch (billingPeriod) {
            case 'daily':
                return plan.dailyPrice;
            case 'monthly':
                return plan.monthlyPrice;
            case 'yearly':
                return Math.floor(plan.yearlyPrice / 12);
            default:
                return plan.monthlyPrice;
        }
    };

    const getPeriodText = () => {
        switch (billingPeriod) {
            case 'daily':
                return 'kun';
            case 'monthly':
                return 'oy';
            case 'yearly':
                return 'oy';
            default:
                return 'oy';
        }
    };

    return (
        <section id="pricing" className="py-16 lg:py-24 bg-white dark:bg-gray-900">
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
                        Sizga mos{' '}
                        <span className="bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] bg-clip-text text-transparent">
              tarifni
            </span>
                        {' '}tanlang
                    </motion.h2>

                    <motion.p
                        className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Har xil ehtiyojlar uchun moslashtirilgan hosting tariflari. Barcha tariflar 30 kunlik bepul sinov davri bilan
                    </motion.p>

                    {/* Billing toggle */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center space-x-2 mb-8 bg-gray-100 dark:bg-gray-800 rounded-2xl p-2 max-w-md mx-auto"
                    >
                        {[
                            { key: 'daily', label: 'Kunlik' },
                            { key: 'monthly', label: 'Oylik' },
                            { key: 'yearly', label: 'Yillik' }
                        ].map((period) => (
                            <motion.button
                                key={period.key}
                                onClick={() => setBillingPeriod(period.key)}
                                className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                    billingPeriod === period.key
                                        ? 'text-white'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {billingPeriod === period.key && (
                                    <motion.div
                                        layoutId="activePeriod"
                                        className="absolute inset-0 bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] rounded-xl"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">
                  {period.label}
                                    {period.key === 'yearly' && (
                                        <span className="ml-1 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                      -20%
                    </span>
                                    )}
                </span>
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: plan.popular ? 1.02 : 1.01,
                                y: plan.popular ? -10 : -5,
                                boxShadow: plan.popular
                                    ? "0 25px 50px -12px rgba(239, 48, 94, 0.25)"
                                    : "0 20px 40px -12px rgba(0, 0, 0, 0.1)"
                            }}
                            className={`relative bg-white dark:bg-gray-800 rounded-3xl p-6 lg:p-8 shadow-xl border transition-all duration-500 overflow-hidden ${
                                plan.popular
                                    ? 'border-[rgb(239,48,94)] ring-2 ring-[rgb(239,48,94)]/20 scale-105'
                                    : 'border-gray-100 dark:border-gray-700 hover:border-[rgb(239,48,94)]/30'
                            }`}
                        >
                            {/* Popular badge */}
                            {plan.popular && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                                    viewport={{ once: true }}
                                    className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                                >
                                    <div className="bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        Eng mashhur
                                    </div>
                                </motion.div>
                            )}

                            {/* Background decoration */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${plan.color} opacity-5 rounded-full transform translate-x-16 -translate-y-16`}></div>

                            <div className="relative z-10">
                                {/* Plan header */}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {plan.description}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="text-center mb-8">
                                    <motion.div
                                        className="flex items-baseline justify-center"
                                        whileHover={{ scale: 1.05 }}
                                        key={billingPeriod}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                    <span className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                      {formatPrice(getPrice(plan))}
                    </span>
                                        <span className="text-lg text-gray-600 dark:text-gray-400 ml-2">
                      so'm/{getPeriodText()}
                    </span>
                                    </motion.div>

                                    {billingPeriod === 'yearly' && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-sm text-[rgb(239,48,94)] mt-1"
                                        >
                                            Yillik: {formatPrice(plan.yearlyPrice)} so'm
                                        </motion.div>
                                    )}
                                </div>

                                {/* Features */}
                                <div className="space-y-3 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <motion.div
                                            key={featureIndex}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                                            viewport={{ once: true }}
                                            className="flex items-center justify-between space-x-3"
                                        >
                                            <div className="flex items-center space-x-3">
                                                <motion.div
                                                    whileHover={{ scale: 1.2 }}
                                                    className="w-5 h-5 bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] rounded-full flex items-center justify-center flex-shrink-0"
                                                >
                                                    <i className="ri-check-line text-white text-sm"></i>
                                                </motion.div>
                                                <span className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
                          {feature.name}
                        </span>
                                            </div>
                                            <span className="text-[rgb(239,48,94)] font-semibold text-sm lg:text-base">
                        {feature.value}
                      </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        size="lg"
                                        className={`w-full h-12 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                                            plan.popular
                                                ? 'bg-gradient-to-r from-[rgb(239,48,94)] to-[rgb(220,40,85)] hover:from-[rgb(220,40,85)] hover:to-[rgb(200,35,75)] text-white'
                                                : 'border-2 border-[rgb(239,48,94)] text-[rgb(239,48,94)] hover:bg-[rgb(239,48,94)] hover:text-white'
                                        }`}
                                        variant={plan.popular ? 'default' : 'outline'}
                                    >
                                        {plan.popular ? 'Hoziroq boshlash' : 'Tanlash'}
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 lg:mt-16"
                >
                    <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 text-gray-600 dark:text-gray-400">
                        <motion.div
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.05, color: 'rgb(239, 48, 94)' }}
                        >
                            <i className="ri-shield-check-line text-[rgb(239,48,94)]"></i>
                            <span>30 kunlik kafolat</span>
                        </motion.div>

                        <motion.div
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.05, color: 'rgb(239, 48, 94)' }}
                        >
                            <i className="ri-credit-card-line text-[rgb(239,48,94)]"></i>
                            <span>Xavfsiz to'lov</span>
                        </motion.div>

                        <motion.div
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.05, color: 'rgb(239, 48, 94)' }}
                        >
                            <i className="ri-customer-service-line text-[rgb(239,48,94)]"></i>
                            <span>24/7 yordam</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
