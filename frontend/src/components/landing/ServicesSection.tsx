import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

// Import project images
import brandingProject from "../../assets/img/adam-keys-1.png";
import uiuxProject from "../../assets/img/bamzy-dash.png";
import packagingProject from "../../assets/img/logisitcs-company-2.png";
import editorialProject from "../../assets/img/waste-collector-3.png";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    id: 1,
    image: brandingProject,
    category: "Branding",
    title: "VISUAL IDENTITY SYSTEM",
    description:
      "A complete rebrand for a tech startup — from logo design to color palettes and typography guidelines.",
  },
  {
    id: 2,
    image: uiuxProject,
    category: "Digital Product",
    title: "MOBILE APP EXPERIENCE",
    description:
      "A minimalist, intuitive app interface built for seamless user journeys and strong brand alignment.",
  },
  {
    id: 3,
    image: packagingProject,
    category: "Packaging",
    title: "MODERN PRODUCT PACKAGING",
    description:
      "Bold, eye-catching packaging design that enhances shelf appeal while staying true to brand identity.",
  },
  {
    id: 4,
    image: editorialProject,
    category: "Print & Editorial",
    title: "CREATIVE MAGAZINE LAYOUT",
    description:
      "Designing editorial spreads with bold typography, modern grids, and dynamic compositions.",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [scrambleText, setScrambleText] = useState("CONTACT ME");

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
          stagger: 0.3,
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
          .map((char, i) =>
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

        {/* Projects */}
        <div className="mt-20" ref={projectsRef}>
          <div className="text-center lg:text-left mb-8 md:mb-12">
            <h3 className="text-sm text-primary mb-4 font-bold uppercase">
              || Featured Work
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
              SELECTED PROJECTS <br />
              THAT REFLECT MY <br />
              <span className="text-primary">DESIGN VISION</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectData.map((proj) => (
              <div
                key={proj.id}
                className="project-card relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                onClick={() =>
                  setActiveProject(activeProject === proj.id ? null : proj.id)
                }
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60"></div>

                {activeProject === proj.id && (
                  <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 bg-black/70">
                    <p className="text-primary text-xs md:text-sm font-bold mb-1">
                      {proj.category}
                    </p>
                    <h4 className="text-lg md:text-2xl font-bold text-white mb-2">
                      {proj.title}
                    </h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3">
                      {proj.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary/90 text-sm">
                        View Project
                      </button>
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 text-sm"
                      >
                        <FaWhatsapp /> Hire Me
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact / Hire Me Section */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl md:text-4xl font-black text-primary mb-6">
            {scrambleText}
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:designer@email.com"
              className="flex items-center gap-2 px-5 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/80 transition"
            >
              <FaEnvelope /> Email Me
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
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
