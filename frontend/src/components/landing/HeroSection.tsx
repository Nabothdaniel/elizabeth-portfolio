import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImg from "../../assets/img/project_30.jpeg";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const mistRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero animations
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 80, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.6, ease: "power3.out" }
    )
      .fromTo(
        leftRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1.3, ease: "power3.out" },
        "-=0.9"
      )
      .fromTo(
        rightRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1.3, ease: "power3.out" },
        "-=1"
      );

    // Slow glow pulse for the title
    gsap.to(titleRef.current, {
      textShadow:
        "0px 0px 20px rgba(173,216,230,0.6), 0px 0px 50px rgba(173,216,230,0.4)",
      repeat: -1,
      yoyo: true,
      duration: 6,
      ease: "sine.inOut",
    });

    // Floating mist effect
    if (mistRef.current) {
      gsap.to(mistRef.current, {
        y: -50,
        opacity: 0.5,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with gradient + subtle image */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        <img
          src={heroImg}
          alt="Creative abstract background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Floating Mist */}
      <div
        ref={mistRef}
        className="absolute top-1/2 left-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] rounded-full blur-3xl bg-gradient-to-t from-white/20 to-transparent opacity-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      {/* Big Title */}
      <h1
        ref={titleRef}
        className="relative z-10 text-[5.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] font-extrabold leading-none tracking-tight text-white text-center px-4 drop-shadow-[0_8px_25px_rgba(255,255,255,0.2)]"
      >
        Elizabeth
      </h1>

      {/* Content Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full max-w-7xl px-6 lg:px-12 mt-16 sm:mt-24 lg:mt-32">
        {/* Left Column */}
        <div ref={leftRef} className="text-center lg:text-left space-y-6">
          <h2 className="text-lg sm:text-2xl md:text-3xl text-white font-semibold leading-snug">
            Graphic Designer & Visual Storyteller
          </h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
            I transform ideas into bold visuals that connect, inspire, and tell
            your story. From logos to brand identities, I bring design to life
            with creativity and purpose.
          </p>
        </div>

        {/* Right Column */}
        <div ref={rightRef} className="text-center lg:text-left space-y-6">
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
            Let’s craft designs that not only look beautiful but also resonate
            with your audience. Whether it’s digital, print, or brand
            storytelling—your vision deserves stunning visuals.
          </p>
          <a
            href="https://wa.me/+2347019216964"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            <span>Let's Get Started</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
