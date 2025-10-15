
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import PricingSection from './components/PricingSection';
import PartnersSection3D from './components/PartnersSection.jsx';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection.jsx';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <ServicesSection />
            <WhyChooseSection />
            <PricingSection />
            <PartnersSection3D />
            <TestimonialsSection />
            <FAQSection />
            <BlogSection />
            <ContactSection />
        </div>
    );
}