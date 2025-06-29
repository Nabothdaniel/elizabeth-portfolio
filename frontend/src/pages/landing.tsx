
import Header from "../components/landing/header";
import Hero from "../components/landing/hero";
import Info from "../components/landing/info";
import Brands from "../components/landing/brands";
import Features from "../components/landing/features";
import HowItWorks from "../components/landing/how-it-works";
import PricingSection from "../components/landing/pricing";
import Teams from "../components/landing/our-team";
const LandingPage = () => {
    return (
        <section className="min-h-screen max-w-7xl mx-auto">
            <Header />
            <Hero />
            <Info />
            <Brands />
            <Features />
            <HowItWorks />
            <PricingSection />
            <Teams/>
        </section>
    )
}


export default LandingPage