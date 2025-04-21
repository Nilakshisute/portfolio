import { useState, useEffect, useContext, useRef } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import {
  Menu,
  X,
  Sun,
  Moon,
  GitHub,
  Linkedin,
  Twitter,
  ChevronDown,
  ArrowUpRight,
  ExternalLink,
  Zap,
  Code,
  User,
  Briefcase,
  Mail,
  Home
} from 'react-feather';

const EnhancedNavbar = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isScrollingToSection, setIsScrollingToSection] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const mobileNavRef = useRef(null);
  const navbarRef = useRef(null);
  const { scrollY } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress for progress indicator
  useMotionValueEvent(scrollY, "change", (latest) => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(latest / maxScroll, 0), 1);
    setScrollProgress(progress);
  });

  // Enhanced scroll detection with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          setScrolled(!entry.isIntersecting);
        },
        { threshold: 0, rootMargin: '-20px 0px 0px 0px' }
    );

    const topSentinel = document.createElement('div');
    topSentinel.style.height = '1px';
    topSentinel.style.width = '100%';
    topSentinel.style.position = 'absolute';
    topSentinel.style.top = '0';
    topSentinel.style.left = '0';
    topSentinel.style.pointerEvents = 'none';
    document.body.prepend(topSentinel);

    observer.observe(topSentinel);

    return () => {
      observer.disconnect();
      topSentinel.remove();
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target) &&
          navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Navigation links with icons
  const navLinks = [
    { name: 'Home', id: 'home', icon: <Home size={16} /> },
    { name: 'About Me', id: 'about', icon: <User size={16} /> },
    { name: 'Expertise', id: 'skills', icon: <Code size={16} /> },
    { name: 'Portfolio', id: 'projects', icon: <Briefcase size={16} /> },
    { name: 'Get in Touch', id: 'contact', icon: <Mail size={16} /> },
  ];

  // Social links with enhanced branding colors
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHub size={18} />,
      url: 'https://github.com/nilakshisute',
      ariaLabel: 'Visit GitHub profile',
      bgColor: theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200',
      textColor: theme === 'dark' ? 'text-white' : 'text-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={18} />,
      url: 'https://linkedin.com/in/nilakshisute',
      ariaLabel: 'Visit LinkedIn profile',
      bgColor: theme === 'dark' ? 'bg-blue-900/30 hover:bg-blue-800/40' : 'bg-blue-50 hover:bg-blue-100',
      textColor: theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={18} />,
      url: 'https://twitter.com/nilakshisute',
      ariaLabel: 'Visit Twitter profile',
      bgColor: theme === 'dark' ? 'bg-blue-900/20 hover:bg-blue-800/30' : 'bg-blue-50 hover:bg-blue-100',
      textColor: theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
    },
  ];

  const handleNavClick = (sectionId) => {
    setIsScrollingToSection(true);
    scrollToSection(sectionId);
    setIsOpen(false);

    // Reset the flag after animation completes
    setTimeout(() => {
      setIsScrollingToSection(false);
    }, 1000);
  };

  // Enhanced animation variants
  const navbarVariants = {
    transparent: {
      backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0)' : 'rgba(255, 255, 255, 0)',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
      paddingTop: '1.25rem',
      paddingBottom: '1.25rem',
    },
    solid: {
      backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.85)' : 'rgba(255, 255, 255, 0.85)',
      boxShadow: theme === 'dark'
          ? '0 4px 20px rgba(0, 0, 0, 0.3)'
          : '0 4px 12px rgba(0, 0, 0, 0.05)',
      backdropFilter: 'blur(16px)',
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
    }
  };

  // Animated logo text variants with staggered animation
  const letterVariants = {
    initial: { y: 0 },
    hover: {
      y: -3,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  const logoTextAnimation = {
    initial: { opacity: 1 },
    hover: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  // Mobile menu animation with improved transitions
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1], // Improved easing
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1], // Improved easing
        when: "beforeChildren",
        staggerChildren: 0.08
      }
    }
  };

  // Enhanced mobile item animation with spring physics
  const mobileItemVariants = {
    closed: { opacity: 0, x: -20, transition: { type: "tween" } },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  // New glass effect variant
  const glassEffect = theme === 'dark'
      ? 'bg-gray-900/75 backdrop-blur-xl'
      : 'bg-white/75 backdrop-blur-xl';

  return (
      <>
        <motion.header
            ref={navbarRef}
            className="fixed top-0 left-0 w-full z-50"
            initial="transparent"
            animate={scrolled ? "solid" : "transparent"}
            variants={navbarVariants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Improved progress bar with smoother animation */}
          <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-600 via-blue-500 to-indigo-400"
              style={{
                width: `${scrollProgress * 100}%`,
                transition: "width 0.1s ease-out"
              }}
              animate={{
                boxShadow: scrollProgress > 0.05 ? "0 1px 5px rgba(124, 58, 237, 0.4)" : "none"
              }}
          />

          <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
            {/* Logo with enhanced animated text effect and 3D hover */}
            <motion.button
                onClick={() => handleNavClick('home')}
                className="text-2xl font-bold relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md"
                aria-label="Go to home section"
                whileHover="hover"
                initial="initial"
            >
              <motion.div
                  className="overflow-hidden relative flex items-center"
                  variants={logoTextAnimation}
              >
                {/* Logo "N" with special effects */}
                <motion.div
                    className="flex items-center relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 500 }}
                >
                  <motion.div
                      className="relative z-10 flex items-center"
                      initial={{ rotateY: 0 }}
                      whileHover={{ rotateY: 15 }}
                      transition={{ type: "spring", stiffness: 500, damping: 10 }}
                      style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.span
                        className="relative inline-block"
                        variants={letterVariants}
                    >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 dark:from-violet-400 dark:via-fuchsia-300 dark:to-blue-400 font-extrabold text-3xl">
                      N
                    </span>
                      {/* Enhanced glow effect */}
                      <motion.span
                          className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-blue-500/20 rounded-full blur-lg"
                          initial={{ opacity: 0 }}
                          whileHover={{
                            opacity: 1,
                            scale: 1.2,
                            transition: { duration: 0.3 }
                          }}
                      />
                      {/* Animated underline with spring physics */}
                      <motion.span
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-600 to-blue-500 dark:from-violet-400 dark:to-blue-400"
                          initial={{ width: 0 }}
                          animate={{
                            width: '100%',
                            transition: { type: "spring", stiffness: 400, damping: 25 }
                          }}
                      />
                    </motion.span>
                  </motion.div>

                  {/* Animated lightning bolt icon with improved animation */}
                  <motion.span
                      className="absolute -right-1 -top-2"
                      initial={{ opacity: 0, scale: 0, rotate: -20 }}
                      whileHover={{
                        opacity: 1,
                        scale: 1.2,
                        rotate: 0,
                        transition: { type: "spring", stiffness: 500, damping: 10 }
                      }}
                  >
                    <Zap size={14} className="text-yellow-400 filter drop-shadow-lg" />
                  </motion.span>
                </motion.div>

                {/* Animating each letter individually with enhanced effects */}
                {"ilakshi".split("").map((letter, index) => (
                    <motion.span
                        key={`ilakshi-${index}`}
                        className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500 dark:from-violet-400 dark:to-blue-400"
                        variants={letterVariants}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 25,
                          delay: 0.05 * index
                        }}
                    >
                      {letter}
                    </motion.span>
                ))}

                {" "}

                <motion.span
                    className="relative inline-block"
                    variants={letterVariants}
                >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500 dark:from-violet-400 dark:to-blue-400">
                  S
                </span>
                  {/* Improved underline animation */}
                  <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-600 to-blue-500 dark:from-violet-400 dark:to-blue-400"
                      initial={{ width: 0 }}
                      animate={{
                        width: '100%',
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                          delay: 0.4
                        }
                      }}
                  />
                </motion.span>

                {"ute".split("").map((letter, index) => (
                    <motion.span
                        key={`ute-${index}`}
                        className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500 dark:from-violet-400 dark:to-blue-400"
                        variants={letterVariants}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 25,
                          delay: 0.05 * (index + 8)
                        }}
                    >
                      {letter}
                    </motion.span>
                ))}

                {/* Improved animated arrow on hover */}
                <motion.div
                    className="ml-2 opacity-0 transform translate-x-2"
                    variants={{
                      hover: {
                        opacity: 1,
                        x: 0,
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400, damping: 25 }
                      },
                      tap: { scale: 0.9 }
                    }}
                >
                  <ArrowUpRight size={16} className="text-blue-500 dark:text-blue-400" />
                </motion.div>
              </motion.div>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Nav Links with improved hover animations */}
              <div className="flex space-x-6">
                {navLinks.map((link, idx) => (
                    <motion.button
                        key={link.id}
                        onClick={() => handleNavClick(link.id)}
                        className={`text-sm font-medium transition-all duration-300 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md px-3 py-2 rounded-xl ${
                            activeSection === link.id
                                ? `${theme === 'dark' ? 'bg-violet-900/20' : 'bg-violet-50'} text-violet-600 dark:text-violet-400`
                                : 'text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400'
                        }`}
                        whileHover={{ y: -2, scale: 1.05 }}
                        whileTap={{ y: 0, scale: 0.95 }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.1 * idx,
                          duration: 0.4,
                          type: "spring",
                          stiffness: 400,
                          damping: 15
                        }}
                    >
                  <span className="flex items-center space-x-2">
                    {/* Icon with improved pulse effect for active section */}
                    <span className="relative">
                      {link.icon}
                      {activeSection === link.id && (
                          <motion.span
                              className="absolute -inset-1 rounded-full bg-violet-500/20 dark:bg-violet-400/20"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.7, 0.2, 0.7]
                              }}
                              transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                              }}
                          />
                      )}
                    </span>
                    <span>{link.name}</span>
                  </span>

                      {/* Improved underline animation - removed border and enhanced animation */}
                      <motion.span
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600 to-blue-500 dark:from-violet-400 dark:to-blue-400 rounded-full mx-3"
                          initial={{ scaleX: activeSection === link.id ? 0.8 : 0, originX: "center" }}
                          animate={{ scaleX: activeSection === link.id ? 0.8 : 0, originX: "center" }}
                          whileHover={{ scaleX: 0.8, originX: "center" }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25
                          }}
                      />
                    </motion.button>
                ))}
              </div>

              {/* Theme Toggle & Social Links Container */}
              <motion.div
                  className="flex items-center space-x-5 pl-5 border-l border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
              >
                {/* Theme Toggle Button with enhanced animation */}
                <motion.button
                    onClick={toggleTheme}
                    className={`p-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 ${
                        theme === 'dark'
                            ? 'bg-violet-900/20 text-yellow-400 hover:bg-violet-900/30'
                            : 'bg-violet-100/50 text-violet-800 hover:bg-violet-100'
                    }`}
                    whileHover={{
                      scale: 1.15,
                      rotate: theme === 'dark' ? 15 : -15,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                        key={theme}
                        initial={{ rotate: -30, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 30, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                          duration: 0.3
                        }}
                    >
                      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>

                {/* Social Links with enhanced hover effects */}
                <div className="flex items-center space-x-3">
                  {socialLinks.map((link, idx) => (
                      <motion.a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center w-8 h-8 ${link.bgColor} ${link.textColor} rounded-full relative group shadow-sm`}
                          whileHover={{
                            y: -4,
                            scale: 1.15,
                            boxShadow: theme === 'dark'
                                ? '0 8px 16px rgba(0, 0, 0, 0.4)'
                                : '0 8px 16px rgba(124, 58, 237, 0.15)'
                          }}
                          whileTap={{ scale: 0.9, y: -1 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: 0.7 + (idx * 0.1),
                            type: "spring",
                            stiffness: 400,
                            damping: 15
                          }}
                          aria-label={link.ariaLabel}
                      >
                        {link.icon}
                        <motion.span
                            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 dark:bg-gray-700 text-white px-2 py-1 rounded-md opacity-0 whitespace-nowrap"
                            initial={{ opacity: 0, y: -5 }}
                            whileHover={{
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.2,
                                delay: 0.1
                              }
                            }}
                        >
                          {link.name}
                        </motion.span>
                      </motion.a>
                  ))}
                </div>
              </motion.div>
            </nav>

            {/* Mobile Menu Controls with improved animation */}
            <div className="flex items-center space-x-4 md:hidden">
              <motion.button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 ${
                      theme === 'dark'
                          ? 'bg-violet-900/20 text-yellow-400 hover:bg-violet-900/30'
                          : 'bg-violet-100/50 text-violet-800 hover:bg-violet-100'
                  }`}
                  whileHover={{
                    scale: 1.15,
                    rotate: theme === 'dark' ? 15 : -15,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                      key={theme}
                      initial={{ rotate: -30, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 30, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }}
                  >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 ${
                      isOpen
                          ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                          : 'bg-violet-100/50 dark:bg-violet-900/20 text-violet-800 dark:text-violet-400'
                  }`}
                  whileHover={{
                    scale: 1.15,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-expanded={isOpen}
                  aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                      key={isOpen ? 'close' : 'menu'}
                      initial={{ rotate: isOpen ? -45 : 45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: isOpen ? 45 : -45, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }}
                  >
                    {isOpen ? <X size={18} /> : <Menu size={18} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu with improved animations */}
          <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={mobileNavRef}
                    variants={mobileMenuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="md:hidden overflow-hidden"
                >
                  <motion.div
                      className={`shadow-2xl ${glassEffect}`}
                      initial={{ y: -20 }}
                      animate={{ y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        delay: 0.1
                      }}
                  >
                    <div className="container mx-auto px-6 py-6">
                      <nav className="flex flex-col space-y-3">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.id}
                                variants={mobileItemVariants}
                                transition={{ delay: index * 0.1 }}
                            >
                              <button
                                  onClick={() => handleNavClick(link.id)}
                                  className={`text-base font-medium py-3 px-4 rounded-xl flex items-center justify-between transition-all duration-300 w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                                      activeSection === link.id
                                          ? `${theme === 'dark'
                                              ? 'bg-gradient-to-r from-violet-900/30 to-blue-900/30'
                                              : 'bg-gradient-to-r from-violet-50 to-blue-50'
                                          } text-violet-600 dark:text-violet-400`
                                          : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800/50'
                                  }`}
                              >
                                <div className="flex items-center space-x-3">
                                  {activeSection === link.id && (
                                      <motion.span
                                          layoutId="mobileActiveIndicator"
                                          className="w-1.5 h-5 rounded-full bg-gradient-to-b from-violet-500 to-blue-500 dark:from-violet-400 dark:to-blue-400"
                                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                      />
                                  )}
                                  <span className={`flex items-center justify-center p-2 rounded-lg ${
                                      activeSection === link.id
                                          ? 'bg-violet-100 dark:bg-violet-800/30 text-violet-600 dark:text-violet-400'
                                          : 'bg-gray-100 dark:bg-gray-800/20 text-gray-600 dark:text-gray-400'
                                  }`}>
                              {link.icon}
                            </span>
                                  <span>{link.name}</span>
                                </div>
                                <motion.div
                                    animate={{
                                      rotate: activeSection === link.id ? 180 : 0,
                                      transition: { type: "spring", stiffness: 200, damping: 20 }
                                    }}
                                >
                                  <ChevronDown size={16} className={activeSection === link.id ? "text-violet-500 dark:text-violet-400" : "text-gray-400"} />
                                </motion.div>
                              </button>
                            </motion.div>
                        ))}
                      </nav>

                      {/* Social Links for Mobile with improved animations */}
                      <motion.div
                          className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                          variants={mobileItemVariants}
                      >
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">Connect with me</p>
                        <div className="flex items-center space-x-4">
                          {socialLinks.map((link, idx) => (
                              <motion.a
                                  key={link.name}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`flex items-center justify-center w-10 h-10 ${link.bgColor} ${link.textColor} rounded-full relative`}
                                  whileHover={{
                                    scale: 1.15,
                                    boxShadow: theme === 'dark'
                                        ? '0 8px 16px rgba(0, 0, 0, 0.4)'
                                        : '0 8px 16px rgba(124, 58, 237, 0.15)'
                                  }}
                                  whileTap={{ scale: 0.9 }}
                                  aria-label={link.ariaLabel}
                              >
                                {link.icon}
                                <motion.span
                                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 dark:bg-gray-700 text-white px-2 py-1 rounded-md opacity-0"
                                    initial={{ opacity: 0, y: -5 }}
                                    whileHover={{
                                      opacity: 1,
                                      y: 0,
                                      transition: { duration: 0.2, delay: 0.1 }
                                    }}
                                >
                                  {link.name}
                                </motion.span>
                              </motion.a>
                          ))}
                        </div>
                      </motion.div>

                      {/* Extra info section for mobile menu */}
                      <motion.div
                          className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                          variants={mobileItemVariants}
                      >
                        <a
                            href="mailto:contact@nilakshisute.com"
                            className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                        >
                          <Mail size={16} />
                          <span>contact@nilakshisute.com</span>
                          <ExternalLink size={14} />
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        {/* Accessibility improvement: Skip to content link */}
        <a
            href="#main-content"
            className="bg-violet-600 dark:bg-violet-500 text-white px-4 py-3 focus:outline-none absolute left-4 z-[100] transform -translate-y-16 focus:translate-y-4 transition-transform duration-200 rounded-b-lg font-medium text-sm"
            aria-label="Skip to main content"
        >
          Skip to main content
        </a>
      </>
  );
};

export default EnhancedNavbar;