import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const showPortfolioHero = location.pathname === '/' || location.pathname === '/portfolio' || location.pathname === '/about' || location.pathname === '/service' || location.pathname === '/resume' || location.pathname === '/testimonials' || location.pathname === '/contact';
  
  return (
    <div className={`${showPortfolioHero ? "bg-teal-400" : ""} overflow-x-hidden`}>
      <PortfolioNav />
      {showPortfolioHero && <HeroSection />}
    </div>
  );
};

const PortfolioNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isPortfolioPage = location.pathname === '/' || location.pathname === '/portfolio' || location.pathname === '/about' || location.pathname === '/service' || location.pathname === '/resume' || location.pathname === '/testimonials' || location.pathname === '/contact';

  return (
    <nav className={`${isPortfolioPage ? 'bg-teal-400' : 'bg-white border-b border-gray-200'} px-6 py-4 flex items-center justify-between relative w-full max-w-full overflow-x-hidden`}>
      {/* Logo */}
      
      <Link to="/" className={`${isPortfolioPage ? 'text-black hover:text-gray-700' : 'text-gray-800 hover:text-indigo-600'} font-bold text-xl tracking-wider transition-colors duration-200`}>
        Kevin攝影
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-8 flex-wrap">
        <NavLink to="/" text="首頁" isPortfolioPage={isPortfolioPage} />
        <NavLink to="/blog" text="Blog" isPortfolioPage={isPortfolioPage} />
        <NavLink to="/problem" text="問與答Q&A" isPortfolioPage={isPortfolioPage} />
        <NavLink to="/about" text="About" isPortfolioPage={isPortfolioPage} />
        <NavLink to="/service" text="Service" isPortfolioPage={isPortfolioPage} />
        <NavLink to="/resume" text="Resume" isPortfolioPage={isPortfolioPage} />
        <NavLink to="/portfolio" text="Portfolio" isPortfolioPage={isPortfolioPage} />
        <NavLink to="/testimonials" text="Testimonials" isPortfolioPage={isPortfolioPage} />
        <ContactLink text="Contact" isPortfolioPage={isPortfolioPage} />
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`md:hidden ${isPortfolioPage ? 'text-black' : 'text-gray-800'}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`absolute top-full left-0 right-0 ${isPortfolioPage ? 'bg-teal-400' : 'bg-white border-b border-gray-200'} md:hidden z-50`}>
          <div className="flex flex-col space-y-4 px-6 py-4">
            <MobileNavLink to="/" text="首頁" isPortfolioPage={isPortfolioPage} />
            <MobileNavLink to="/blog" text="Blog" isPortfolioPage={isPortfolioPage} />
            <MobileNavLink to="/problem" text="問與答Q&A" isPortfolioPage={isPortfolioPage} />
            <MobileNavLink to="/about" text="About" isPortfolioPage={isPortfolioPage} />
            <MobileNavLink to="/service" text="Service" isPortfolioPage={isPortfolioPage} />
            <MobileNavLink to="/resume" text="Resume" isPortfolioPage={isPortfolioPage} />
            <MobileNavLink to="/portfolio" text="Portfolio" isPortfolioPage={isPortfolioPage} />
            <MobileNavLink to="/testimonials" text="Testimonials" isPortfolioPage={isPortfolioPage} />
            <MobileContactLink text="Contact" isPortfolioPage={isPortfolioPage} />
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="flex items-center justify-between px-6 lg:px-20 py-20 min-h-[calc(100vh-80px)] w-full max-w-full overflow-x-hidden">
      {/* Left Content */}
      <div className="flex-1 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-black text-lg mb-4">嗨~</p>
          <h1 className="text-black text-5xl lg:text-6xl font-bold mb-4">
            我是Kevin
          </h1>
          <h2 className="text-black text-2xl lg:text-3xl font-semibold mb-6">
           分享攝影照片
          </h2>
          <p className="text-black text-lg mb-8 leading-relaxed max-w-xl">
             
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      {/* Right Content - Profile Image */}
      <div className="hidden lg:block flex-1 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-black shadow-2xl">
            <img
              src="https://res.cloudinary.com/dtbj43yha/image/upload/v1753798709/mountain_jdi9k6.jpg"
              alt="Lorenzo Fellon"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const NavLink = ({ to, text, isPortfolioPage }) => {
  return (
    <Link
      to={to}
      className={`${
        isPortfolioPage 
          ? 'text-black hover:text-gray-700' 
          : 'text-gray-600 hover:text-indigo-600'
      } font-medium transition-colors duration-200`}
    >
      {text}
    </Link>
  );
};

const MobileNavLink = ({ to, text, isPortfolioPage }) => {
  return (
    <Link
      to={to}
      className={`${
        isPortfolioPage 
          ? 'text-black hover:text-gray-700' 
          : 'text-gray-600 hover:text-indigo-600'
      } font-medium transition-colors duration-200`}
    >
      {text}
    </Link>
  );
};

const ContactLink = ({ text, isPortfolioPage }) => {
  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToFooter}
      className={`${
        isPortfolioPage 
          ? 'text-black hover:text-gray-700' 
          : 'text-gray-600 hover:text-indigo-600'
      } font-medium transition-colors duration-200`}
    >
      {text}
    </button>
  );
};

const MobileContactLink = ({ text, isPortfolioPage }) => {
  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToFooter}
      className={`${
        isPortfolioPage 
          ? 'text-black hover:text-gray-700' 
          : 'text-gray-600 hover:text-indigo-600'
      } font-medium transition-colors duration-200`}
    >
      {text}
    </button>
  );
};

export default Navbar;
