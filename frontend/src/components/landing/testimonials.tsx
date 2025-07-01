import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Testimonial1 from '../../assets/img/landing/testimonial2.jpg'
import Testimonial2 from '../../assets/img/landing/testimonial3.jpg'
import Testimonial3 from '../../assets/img/landing/testimonial4.jpg'
import Testimonial5 from '../../assets/img/landing/testimonial5.jpg'
import Testimonial6 from '../../assets/img/landing/testimonial6.jpg'
import Testimonial8 from '../../assets/img/landing/testimonial8.jpg'

const testimonials = [
    {
        name: "Fatima Al-Hamad",
        username: "@fatima_h",
        quote:
            "Kuwait Investments transformed the way we approach long-term wealth. Their strategic insights helped secure my family’s future.",
        image: Testimonial1,
    },
    {
        name: "Mohammad Al-Farsi",
        username: "@moh_farsi",
        quote:
            "Professional, insightful, and dedicated — Kuwait Investments helped diversify my portfolio beyond expectations.",
        image: Testimonial2,
    },
    {
        name: "Layla Youssef",
        username: "@layla_y",
        quote:
            "As a first-time investor, Kuwait Investments gave me the tools and confidence to start building wealth with clarity.",
        image: Testimonial3,
    },
    {
        name: "Salem Nasser",
        username: "@salem_n",
        quote:
            "Their customer support and financial advisory services are unmatched. Highly recommend to serious investors.",
        image: Testimonial5,
    },
    {
        name: "Aisha Rahman",
        username: "@aisha_rahman",
        quote:
            "Kuwait Investments is more than just a firm — it’s a partner in your financial journey.",
        image: Testimonial6,
    },
    {
        name: "Omar Khalid",
        username: "@omar_k",
        quote:
            "Trustworthy, transparent, and result-driven. I’ve seen real growth thanks to their expert strategies.",
        image: Testimonial8,
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const isMobile = window.innerWidth < 768;

    // Auto slide on mobile every 5s
    useEffect(() => {
        if (!isMobile) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isMobile]);

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section className="py-20 px-4 bg-white">
            <div className="text-center mb-14">
                <p className="text-sm font-medium text-gray-500 uppercase">Testimonials</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mt-2">
                    What Our Investors Are Saying
                </h2>
                <p className="text-gray-600 mt-3 max-w-xl mx-auto">
                    Hear directly from our valued clients at Kuwait Investment Company.
                </p>
            </div>

            {/* Mobile: Slider */}
            <div className="block md:hidden relative max-w-md mx-auto">
                {/* Chevron controls */}
                <div className="absolute top-0 right-0 flex space-x-2 p-2 z-10">
                    <button
                        onClick={handlePrev}
                        className="bg-indigo-400 text-white p-2 rounded-full shadow hover:bg-indigo-500"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-indigo-400 text-white p-2 rounded-full shadow hover:bg-indigo-500"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Animated Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="bg-gray-50 rounded-xl shadow-md p-6 space-y-4"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={testimonials[current].image}
                                alt={testimonials[current].name}
                                className="rounded-full w-12 h-12 object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">{testimonials[current].name}</p>
                                <p className="text-sm text-gray-500">{testimonials[current].username}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            {testimonials[current].quote}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>


            {/* Desktop: Grid */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {testimonials.map((testimonial, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                        className="bg-gray-50 rounded-xl shadow-md p-6 space-y-4"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="rounded-full w-12 h-12 object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.username}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{testimonial.quote}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
