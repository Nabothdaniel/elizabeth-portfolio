
import Header from "../components/landing/header";
import Hero from "../components/landing/hero";
import Info from "../components/landing/info";
import Brands from "../components/landing/brands";
import Features from "../components/landing/features";
import HowItWorks from "../components/landing/how-it-works";
import PricingSection from "../components/landing/pricing";
import Teams from "../components/landing/our-team";
import Testimonials from "../components/landing/testimonials";
import ContactForm from "../components/landing/contact-us";
import Footer from "../components/landing/footer";
const LandingPage = () => {
    return (
        <section className="min-h-screen max-w-[85rem] mx-auto">
            <Header />
            <Hero />
            <Info />
            <Brands />
            <Features />
            <HowItWorks />
            <PricingSection />
            <Teams />
            <Testimonials />
            <ContactForm/>
            <Footer />
        </section>
    )
}


export default LandingPage