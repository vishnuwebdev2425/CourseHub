import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Tailwind setup note:
 * Add these to your tailwind.config.js theme.extend if you want named
 * tokens instead of arbitrary values (the classes below already work
 * standalone via Tailwind's arbitrary-value syntax, no config required):
 *
 * colors: {
 *   ink: '#1B2A22',
 *   paper: '#FAF7F2',
 *   'paper-alt': '#F3EEE3',
 *   brass: '#A9782F',
 *   'brass-dark': '#8C6526',
 *   sage: '#5C7A66',
 *   line: '#E4DCCB',
 * },
 * fontFamily: {
 *   display: ['Fraunces', 'serif'],
 *   sans: ['Inter', 'sans-serif'],
 * }
 *
 * Fonts (add to index.html <head>):
 * <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 */

const navItems = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="group relative py-1.5 text-[0.95rem] font-medium text-[#1B2A22]"
  >
    {children}
    <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#A9782F] transition-all duration-300 ease-out group-hover:w-full" />
  </Link>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b bg-[#FAF7F2]/95 backdrop-blur transition-shadow duration-300 ${
        scrolled
          ? "border-transparent shadow-[0_6px_20px_-14px_rgba(27,42,34,0.35)]"
          : "border-[#E4DCCB]"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-5 py-4 sm:px-8">
        {/* Brand */}
        <motion.div
          className="flex flex-shrink-0 items-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link to="/" className="flex items-center gap-2.5">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="18" width="6" height="10" rx="1" fill="#A9782F" />
              <rect x="12" y="11" width="6" height="17" rx="1" fill="#A9782F" />
              <rect x="22" y="4" width="6" height="24" rx="1" fill="#1B2A22" />
            </svg>
            <span className="font-['Fraunces',serif] text-[1.4rem] font-semibold tracking-tight text-[#1B2A22]">
              CourseHub
            </span>
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-9 md:flex">
          {navItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
            >
              <NavLink to={item.to}>{item.label}</NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex flex-shrink-0 items-center gap-4">
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ backgroundColor: "#1B2A22", color: "#FAF7F2" }}
            whileTap={{ scale: 0.97 }}
            className="rounded-[3px] cursor-pointer border-[1.5px] border-[#1B2A22] px-5 py-2 text-[0.9rem] font-semibold text-[#1B2A22]"
          >
            Log in
          </motion.button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center gap-[5px] p-1.5 md:hidden"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              className="h-[1.5px] w-[22px] bg-[#1B2A22]"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-[1.5px] w-[22px] bg-[#1B2A22]"
            />
            <motion.span
              animate={
                menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }
              }
              className="h-[1.5px] w-[22px] bg-[#1B2A22]"
            />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col overflow-hidden border-t border-[#E4DCCB] px-5 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#E4DCCB] py-3.5 text-[1rem] font-medium text-[#1B2A22]"
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
