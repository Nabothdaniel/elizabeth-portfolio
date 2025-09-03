import { HiMenuAlt3 } from "react-icons/hi";
import MobileMenu from "./MobileMenu";

const HeaderSection = () => {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
        <nav className="flex justify-between items-center px-4 md:px-8 py-4 md:py-6">
          <div className="text-white font-bold text-lg md:text-xl">
            Elizabeth®
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <span className="text-white text-xs md:text-sm hidden sm:block">say hi — elizabeth@gmail.com</span>
            <div className="hidden lg:block">``
              <button className="text-white">
                <HiMenuAlt3 size={24} />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <MobileMenu />
    </>
  );
};

export default HeaderSection;