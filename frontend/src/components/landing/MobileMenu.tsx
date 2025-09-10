import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "#hero" },
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "Stats", href: "#stats" },
    { title: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
  setIsOpen(false);

  // Run smooth scroll only on client
  if (typeof window !== "undefined") {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};


  return (
    <div className="lg:hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-8 z-50 text-white bg-black/30 backdrop-blur-sm p-3 rounded-full shadow-lg transition hover:scale-110"
      >
        {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-b from-black via-slate-900 to-black z-40 overflow-y-auto"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="p-8 pt-20 space-y-12"
            >
              {/* Navigation Links */}
              <div className="space-y-6">
                {navLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left text-white text-xl font-bold tracking-wide block hover:text-primary transition"
                  >
                    {link.title}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
