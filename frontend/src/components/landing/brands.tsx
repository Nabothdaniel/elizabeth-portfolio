import { motion } from "framer-motion";

import brand1 from "../../assets/img/landing/brand1.jpg";
import brand2 from "../../assets/img/landing/brand2.jpg";
import brand3 from "../../assets/img/landing/brand3.jpg";
import brand4 from "../../assets/img/landing/brand4.jpg";

const images = [
    { src: brand1 },
    { src: brand2 },
    { src: brand3 },
    { src: brand4 },
];

const Brands = () => {
    return (
        <section className="bg-white py-12">
            <div className="overflow-hidden">
                <motion.div
                    className="flex gap-10"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                >
                    {/* Duplicate for seamless scroll */}
                    {[...images, ...images].map((item, index) => (
                        <div key={index} className="min-w-[350px] h-[200px]">
                            <img
                                src={item.src}
                                alt={`Brand ${index + 1}`}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Brands;
// This code defines a Brands component that displays a horizontally scrolling carousel of brand images using Framer Motion for animation. The images are duplicated to create a seamless scrolling effect, and each image is styled with Tailwind CSS for a modern look. The animation runs infinitely, creating a continuous flow of brand visuals.
// The component is designed to enhance the visual appeal of a landing page, showcasing various brands in a dynamic and engaging manner. The use of motion and responsive design ensures that the carousel looks good on different screen sizes, making it suitable for modern web applications.