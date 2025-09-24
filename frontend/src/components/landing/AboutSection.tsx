import { motion } from "framer-motion";
import elizabethImg from "../../assets/img/bamzy-dash.png"; 

const AboutSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-black via-slate-900 to-black text-white px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
      {/* Background floating image */}
      <motion.img
        src={elizabethImg}
        alt="Elizabeth"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute -right-10 top-10 w-96 h-96 object-cover rounded-full blur-md opacity-20"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-black mb-6"
        >
          About <span className="text-primary">Elizabeth</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-300 text-base md:text-lg leading-relaxed mb-6"
        >
          Elizabeth is a passionate designer who blends creativity with precision. 
          With years of hands-on experience, she has transformed countless ideas 
          into stunning visuals, helping brands stand out in a competitive market.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm md:text-base leading-relaxed"
        >
          Driven by innovation and fueled by detail, she believes design is not 
          just about aesthetics — it’s about telling stories, building connections, 
          and leaving lasting impressions.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
