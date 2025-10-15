
import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: 'ri-phone-line',
            title: 'Telefon',
            info: '+998 71 123 45 67',
            description: '24/7 qo\'llab-quvvatlash'
        },
        {
            icon: 'ri-mail-line',
            title: 'Email',
            info: 'info@sys.dc',
            description: 'Tez javob kafolati'
        },
        {
            icon: 'ri-map-pin-line',
            title: 'Manzil',
            info: 'Toshkent, Chilonzor tumani',
            description: 'Ofisimizga tashrif buyuring'
        }
    ];

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Biz bilan <span className="text-[rgb(239,48,94)]">bog'laning</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Savollaringiz bormi? Biz sizga yordam berishga tayyormiz. Bog'laning va professional maslahat oling
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Aloqa ma'lumotlari</h3>

                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start"
                                >
                                    <div className="w-12 h-12 bg-[rgb(239,48,94)]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className={`${item.icon} text-xl text-[rgb(239,48,94)]`}></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-[rgb(239,48,94)] font-medium mb-1">{item.info}</p>
                                        <p className="text-gray-600 text-sm">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                            <h4 className="font-semibold text-gray-900 mb-4">Ish vaqti</h4>
                            <div className="space-y-2 text-gray-600">
                                <div className="flex justify-between">
                                    <span>Dushanba - Juma:</span>
                                    <span>9:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shanba:</span>
                                    <span>10:00 - 16:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Yakshanba:</span>
                                    <span>Dam olish</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Xabar yuborish</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Ism *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(239,48,94)] focus:border-transparent outline-none transition-all duration-200"
                                            placeholder="Ismingizni kiriting"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(239,48,94)] focus:border-transparent outline-none transition-all duration-200"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Telefon
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(239,48,94)] focus:border-transparent outline-none transition-all duration-200"
                                            placeholder="+998 90 123 45 67"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Xizmat turi
                                        </label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(239,48,94)] focus:border-transparent outline-none transition-all duration-200 appearance-none bg-white"
                                        >
                                            <option value="">Tanlang</option>
                                            <option value="hosting">Web Hosting</option>
                                            <option value="domain">Domen</option>
                                            <option value="vps">VDS/VPS</option>
                                            <option value="server">Dedicated Server</option>
                                            <option value="sms">SMS Paket</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Xabar *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        maxLength={500}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(239,48,94)] focus:border-transparent outline-none transition-all duration-200 resize-none"
                                        placeholder="Xabaringizni yozing..."
                                    />
                                    <div className="text-right text-sm text-gray-500 mt-1">
                                        {formData.message.length}/500
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-[rgb(239,48,94)] hover:bg-[rgb(220,40,85)] text-white"
                                >
                                    <i className="ri-send-plane-line mr-2"></i>
                                    Xabar yuborish
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
