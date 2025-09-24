import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// Import project images
import project1 from "../../assets/img/project_1.jpeg";
import project4 from "../../assets/img/project_4.jpeg";
import project5 from "../../assets/img/project_5.jpeg";
import project6 from "../../assets/img/project_6.jpeg";
import project7 from "../../assets/img/project_7.jpeg";
import project8 from "../../assets/img/project_8.jpeg";
import project9 from "../../assets/img/project_9.jpeg";
import project10 from "../../assets/img/project_10.jpeg";
import project11 from "../../assets/img/project_11.jpeg";
import project12 from "../../assets/img/project_12.jpeg";
import project13 from "../../assets/img/project_13.jpeg";
import project14 from "../../assets/img/project_14.jpeg";
import project15 from "../../assets/img/project_15.jpeg";
import project16 from "../../assets/img/project_16.jpeg";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  project1,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const [scrambleText, setScrambleText] = useState("CONTACT ME");
  const [activeProject, setActiveProject] = useState<number | null>(null);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-item",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".project-card",
        { opacity: 0, scale: 0.9, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    // Scramble text animation
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambleText((prev) =>
        prev
          .split("")
          .map((_, i) =>
            i < iteration ? "CONTACT ME"[i] : letters[Math.floor(Math.random() * 26)]
          )
          .join("")
      );

      if (iteration >= "CONTACT ME".length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 50);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  // Split premium (first 4) and other projects
  const premiumProjects = projectData.slice(0, 4);
  const otherProjects = projectData.slice(4);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white px-4 md:px-8 lg:px-16 py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center lg:text-left">
          <h3 className="text-sm font-bold text-primary mb-4 tracking-wide uppercase">
            || Core Skills & Creative Services
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight">
            DESIGN <span className="text-primary">SOLUTIONS</span> TO <br />
            ELEVATE BRANDS WITH <br />
            IMPACT & CLARITY
          </h2>
          <p className="text-gray-400 max-w-2xl">
            From brand identities to immersive digital experiences, I help
            transform abstract ideas into stunning visuals that tell stories and
            connect with audiences.
          </p>
        </div>

        {/* Services */}
        <div
          ref={servicesRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
        >
          <div className="space-y-12">
            <div className="service-item flex gap-6">
              <span className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary via-purple-400 to-pink-500">
                01
              </span>
              <div>
                <h4 className="text-xl font-bold mb-3">Brand Identity</h4>
                <p className="text-gray-300">
                  Crafting distinctive logos, color palettes, and visual
                  languages that resonate with audiences and stand the test of
                  time.
                </p>
              </div>
            </div>
            <div className="service-item flex gap-6">
              <span className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-red-400 to-orange-400">
                02
              </span>
              <div>
                <h4 className="text-xl font-bold mb-3">Packaging Design</h4>
                <p className="text-gray-300">
                  Designing product packaging that communicates brand values and
                  captivates customers from the first glance.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="service-item flex gap-6">
              <span className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-blue-400 to-cyan-400">
                03
              </span>
              <div>
                <h4 className="text-xl font-bold mb-3">UI/UX Design</h4>
                <p className="text-gray-300">
                  Designing intuitive, beautiful digital interfaces that balance
                  functionality with aesthetics for seamless experiences.
                </p>
              </div>
            </div>
            <div className="service-item flex gap-6">
              <span className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-teal-400 to-cyan-500">
                04
              </span>
              <div>
                <h4 className="text-xl font-bold mb-3">Editorial & Print</h4>
                <p className="text-gray-300">
                  From brochures to magazines, creating layouts that are not
                  only visually appealing but also communicate ideas with
                  clarity and elegance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-20" ref={projectsRef}>
          <div className="text-center lg:text-left mb-8 md:mb-12">
            <h3 className="text-xl text-primary mb-4 font-bold uppercase">
              || Featured Work
            </h3>
          </div>

          {/* Premium Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {premiumProjects.map((proj, index) => (
              <div
                key={index}
                className="project-card relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setActiveProject(index)}
              >
                <img
                  src={proj}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity"></div>
                {activeProject === index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity duration-300">
                    <a
                      href="https://wa.me/+2347019216964"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 px-6 py-3 rounded-lg font-bold text-white hover:bg-green-600 transition"
                    >
                      <FaWhatsapp className="inline mr-2" /> Hire Me
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Other Projects Slider/Grid */}
          <div className="relative">
            <motion.div
              className="flex gap-6 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            >
              {otherProjects.map((proj, index) => (
                <motion.div
                  key={index}
                  className="project-card relative min-w-[250px] sm:min-w-[300px] md:min-w-0 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300 snap-center"
                  onClick={() => setActiveProject(index + premiumProjects.length)}
                >
                  <img
                    src={proj}
                    alt={`Project ${index + 5}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity"></div>
                  {activeProject === index + premiumProjects.length && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity duration-300">
                      <a
                        href="https://wa.me/+2347019216964"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 px-6 py-3 rounded-lg font-bold text-white hover:bg-green-600 transition"
                      >
                        <FaWhatsapp className="inline mr-2" /> Hire Me
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Contact / Hire Me Section */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl md:text-4xl font-black text-primary mb-6">
            {scrambleText}
          </h3>
          <div className="flex justify-center items-center gap-6">
            <a
              href="mailto:amodataye84@gmail.com"
              className="flex items-center gap-2 px-5 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-primary/80 transition"
            >
              <FaEnvelope /> Email Me
            </a>
            <a
              href="https://wa.me/+2347019216964"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
            >
              <FaWhatsapp /> WhatsApp Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
