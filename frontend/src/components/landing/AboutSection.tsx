import { motion } from "framer-motion";
import elizabethImg from "../../assets/img/bamzy-dash.png"; 

const AboutSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-black via-slate-900 to-black text-white px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img
              src={elizabethImg}
              alt="Elizabeth"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            About <span className="text-primary">Elizabeth</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            Elizabeth is a passionate designer who blends creativity with
            precision. With years of hands-on experience, she has transformed
            countless ideas into stunning visuals, helping brands stand out in a
            competitive market.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Driven by innovation and fueled by detail, she believes design is
            not just about aesthetics — it’s about telling stories, building
            connections, and leaving lasting impressions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
