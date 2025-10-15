
import { motion } from 'framer-motion';
import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';

export default function BlogSection() {
    const blogPosts = [
        {
            title: 'Web hosting tanlashda e\'tibor berish kerak bo\'lgan asosiy omillar',
            excerpt: 'To\'g\'ri hosting provayderini tanlash sizning saytingizning muvaffaqiyati uchun juda muhim. Bu maqolada...',
            date: '15 Dekabr, 2024',
            readTime: '5 daqiqa',
            category: 'Hosting',
            image: 'https://readdy.ai/api/search-image?query=modern%20web%20hosting%20servers%20in%20a%20clean%20data%20center%20with%20blue%20lighting%20and%20professional%20setup%2C%20minimalist%20technology%20background&width=400&height=250&seq=blog1&orientation=landscape'
        },
        {
            title: 'VPS vs Shared Hosting: Qaysi birini tanlash kerak?',
            excerpt: 'Loyihangiz o\'sib borgan sari hosting ehtiyojlaringiz ham o\'zgaradi. VPS va Shared hosting o\'rtasidagi...',
            date: '12 Dekabr, 2024',
            readTime: '7 daqiqa',
            category: 'VPS',
            image: 'https://readdy.ai/api/search-image?query=comparison%20between%20shared%20hosting%20and%20VPS%20servers%2C%20clean%20modern%20technology%20illustration%20with%20server%20racks&width=400&height=250&seq=blog2&orientation=landscape'
        },
        {
            title: 'SSL sertifikat nima va nima uchun kerak?',
            excerpt: 'Zamonaviy internetda xavfsizlik eng muhim masalalardan biri. SSL sertifikatlar sizning saytingizni...',
            date: '10 Dekabr, 2024',
            readTime: '4 daqiqa',
            category: 'Xavfsizlik',
            image: 'https://readdy.ai/api/search-image?query=SSL%20security%20certificate%20concept%20with%20lock%20icon%20and%20secure%20connection%2C%20modern%20cybersecurity%20illustration&width=400&height=250&seq=blog3&orientation=landscape'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Foydali <span className="text-[rgb(239,48,94)]">maqolalar</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Hosting va web texnologiyalar haqida eng so\'nggi yangiliklar va maslahatlar
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                                <div className="relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover object-top"
                                    />
                                    <div className="absolute top-4 left-4">
                    <span className="bg-[rgb(239,48,94)] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <i className="ri-calendar-line mr-2"></i>
                                        {post.date}
                                        <span className="mx-2">•</span>
                                        <i className="ri-time-line mr-2"></i>
                                        {post.readTime}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <Button
                                        variant="outline"
                                        className="border-[rgb(239,48,94)] text-[rgb(239,48,94)] hover:bg-[rgb(239,48,94)] hover:text-white"
                                    >
                                        Batafsil o'qish
                                        <i className="ri-arrow-right-line ml-2"></i>
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Button
                        size="lg"
                        className="bg-[rgb(239,48,94)] hover:bg-[rgb(220,40,85)] text-white"
                    >
                        Barcha maqolalar
                        <i className="ri-arrow-right-line ml-2"></i>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
