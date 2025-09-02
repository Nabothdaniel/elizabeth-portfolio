import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = ["“Design is thinking made visual.” – Saul Bass"];

export default function CraftingSection() {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    // Typewriter effect
    useEffect(() => {
        if (index >= phrases.length) return;

        if (subIndex === phrases[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 1000);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % phrases.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
            setDisplayedText(phrases[index].substring(0, subIndex));
        }, reverse ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <section className="relative w-full min-h-[80vh] md:min-h-screen flex flex-col py-10 md:py-5 items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-white overflow-hidden">
            {/* Decorative skewed gradient background */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-[90%] md:w-[70%] h-[50vh] md:h-[70vh] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 transform -skew-y-6 rounded-3xl opacity-30 blur-2xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                {/* Big Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg"
                >
                    Elizabeth
                </motion.h1>

                {/* Animated Design Quote */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="italic text-lg md:text-2xl text-gray-200 mt-4 min-h-[50px]"
                >
                    {displayedText}
                    <span className="border-r-2 border-gray-300 animate-pulse ml-1"></span>
                </motion.p>

                {/* Layered Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
                    {[
                        {
                            title: "Creative Direction",
                            desc: "Guiding visual storytelling with a strategic eye, ensuring every design aligns with the brand’s voice.",
                        },
                        {
                            title: "UI/UX Design",
                            desc: "Crafting seamless digital experiences that balance beauty with usability for modern platforms.",
                        },
                        {
                            title: "Brand Identity",
                            desc: "Building identities that resonate, from logos to full design systems with a timeless impact.",
                        },
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative p-6 rounded-b-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
                        >
                            {/* Accent bar */}
                            <div className="absolute inset-x-0 top-0 h-1 rounded-t-md bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-70"></div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-gray-300">{card.desc}</p>
                        </motion.div>

                    ))}
                </div>
            </div>
        </section>
    );
}
