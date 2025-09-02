import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = statsRef.current?.children || [];

      Array.from(elements).forEach((el: any) => {
        const numberEl = el.querySelector(".stat-number");
        const finalValue = parseInt(numberEl.dataset.value, 10);

        gsap.fromTo(
          numberEl,
          { innerText: 0 },
          {
            innerText: finalValue,
            duration: 2,
            ease: "power3.out",
            snap: { innerText: 1 }, // ensures whole numbers
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
            onUpdate: function () {
              numberEl.innerText = Math.floor(Number(numberEl.innerText)).toLocaleString();
            },
          }
        );
      });

      // Fade + slide in for the cards
      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const statsData = [
    { number: 500, label: "Projects Completed" },
    { number: 5, label: "Years of Experience" },
    { number: 50, label: "Global Clients" },
    { number: 5, label: "Design Awards" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-black via-slate-900 to-black text-white px-6 md:px-12 lg:px-20 py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-12">
          <span className="text-primary">By the Numbers</span>
        </h2>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16"
        >
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div
                className="stat-number text-4xl sm:text-5xl md:text-6xl font-black text-primary transition-transform duration-300 group-hover:scale-110"
                data-value={stat.number}
              >
                0
              </div>
              <div className="text-sm sm:text-base text-gray-400 mt-3">
                {stat.label}
              </div>
              <div className="text-xs text-gray-600/40 mt-1">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
