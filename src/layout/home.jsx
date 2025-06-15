import TestimonialsSection from "../component/testimonials/testimonials";
import Prize from "../component/PricingPlans/Plans";
import Services from "../component/services/Services";
import Header from "../component/header/header";
import Hero from "../component/hero/hero";
import CTA from "../component/CTA/CTA";
import Footer from "../component/Footer/Footer";
import About from "../component/About/about";

const Home = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-50">
                <Header />
                <Hero />
                <Services />
                <Prize />
                <About />
                <TestimonialsSection />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
