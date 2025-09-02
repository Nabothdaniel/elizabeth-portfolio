import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portfolioGrid from "../../assets/img/eduprogen-landing.webp";

gsap.registerPlugin(ScrollTrigger);

const PortfolioSidebar = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".service-item",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: "top 70%",
          }
        }
      );

      gsap.fromTo(".portfolio-image",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".portfolio-image",
            start: "top 80%",
          }
        }
      );
    }, sidebarRef);

    return () => ctx.revert();
  }, []);

  const services = [
    { number: "01", title: "PRODUCT DESIGN", description: "Creating products that seamlessly blend functionality with aesthetic appeal, ensuring they deliver optimal user experience and performance in both physical and digital forms." },
    { number: "02", title: "UI/UX DESIGN", description: "Designing intuitive user experiences and interfaces that prioritize usability, accessibility, and emotional connection while maintaining visual consistency and brand alignment." },
    { number: "03", title: "BRAND IDENTITY", description: "Developing comprehensive brand systems that communicate core values, create memorable impressions, and establish consistent visual language across all touchpoints and platforms." },
    { number: "04", title: "PROTOTYPING & TESTING", description: "Building interactive prototypes and conducting user testing to validate design concepts, gather feedback, and iterate solutions before final implementation and launch." }
  ];

  return (
    <div ref={sidebarRef} className="hidden lg:block fixed right-0 top-0 w-[420px] h-screen bg-white overflow-y-auto z-30 shadow-2xl">
      {/* Industry Sectors Header */}
      <div className="p-8 bg-black text-white">
        <div className="flex justify-between items-center text-xs mb-6">
          <span>Industry Sectors Served</span>
          <span className="text-primary font-bold text-2xl">40</span>
          <span className="text-xs">00</span>
        </div>
        
        {/* Portfolio Grid Images */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {Array.from({length: 9}).map((_, index) => (
            <div key={index} className="portfolio-image relative aspect-square bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src={portfolioGrid} 
                alt={`Portfolio item ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <p className="text-xs">View Project</p>
                </div>
              </div>
              {/* Project Labels */}
              <div className="absolute bottom-2 left-2 right-2">
                <div className="bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-xs">
                  {index < 3 ? 'Branding & Identity' : index < 6 ? 'UI/UX Design' : 'Product Design'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="p-8 bg-black text-white">
        <h3 className="text-sm font-bold mb-2 text-primary">|| Core Skills & Creative Services</h3>
        <h2 className="text-3xl font-black mb-12 leading-tight">
          DESIGN <span className="text-primary">EXPERTISE</span> TO<br />
          TRANSFORM IDEAS INTO<br />
          IMPACTFUL PRODUCTS
        </h2>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className="service-item group cursor-pointer">
              <div className="flex items-start gap-6 pb-8 border-b border-gray-800">
                <span className="text-6xl font-black text-gray-700 group-hover:text-primary transition-colors duration-300">
                  {service.number}
                </span>
                <div className="flex-1 pt-2">
                  <h4 className="font-bold text-white text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <button className="text-gray-500 group-hover:text-primary transition-colors duration-300 mt-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Work Section */}
        <div className="mt-12">
          <h3 className="text-sm text-primary mb-4 font-bold">|| Featured Work</h3>
          <h2 className="text-2xl font-black mb-8 leading-tight">
            SHOWCASING PROJECTS<br />
            THAT DEFINE MY<br />
            <span className="text-primary">DESIGN APPROACH</span>
          </h2>
          
          {/* Featured Project Images */}
          <div className="space-y-4 mb-8">
            <div className="portfolio-image relative aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src={portfolioGrid} 
                alt="Smart Living App"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <p className="text-primary text-xs font-bold mb-1">Real Estate & Property</p>
                  <h4 className="font-bold text-lg text-white mb-2">SMART LIVING APP</h4>
                  <p className="text-gray-300 text-xs">Revolutionizing property management through intuitive design and seamless user experience.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="portfolio-image relative aspect-square bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
                <img 
                  src={portfolioGrid} 
                  alt="E-commerce Platform"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs font-bold">E-COMMERCE</p>
                </div>
              </div>
              <div className="portfolio-image relative aspect-square bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
                <img 
                  src={portfolioGrid} 
                  alt="Healthcare Dashboard"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs font-bold">HEALTHCARE</p>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full bg-primary text-black py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors duration-300 text-lg">
            View Complete Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSidebar;