import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import {
  ArrowRight,
  Download,
  Code,
  Star,
  Zap
} from 'react-feather';
import SEO from '../components/SEO';
import profile from '../data/profile';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
      <>
        <SEO
            title="Home | Nilakshi Sute - Frontend Developer"
            description="Welcome to Nilakshi Sute's portfolio. Senior Frontend developer specializing in React, creating responsive, user-friendly web applications with modern tech stack."
            keywords="frontend developer, react developer, UI developer, javascript expert, typescript, portfolio, nilakshi sute, web development"
        />

        {/* Fully Responsive Hero Section */}
        <section className="min-h-screen flex items-center py-8 sm:py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 overflow-hidden">
          {/* Background Elements - Adjusted for better visibility on all devices */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4zMS42MiAyLjk1IDEuNTdsMy4yMiAzLjIyYTQgNCAwIDAgMSAxLjgxIDMuMzZ2MTYuMmMwIDIuMi0xLjggNC00IDRIMjBjLTIuMiAwLTQtMS44LTQtNFYyNmE0IDQgMCAwIDEgNC00aDEzLjh6IiBmaWxsPSIjMDAwIiBvcGFjaXR5PSIuMDIiLz48cGF0aCBkPSJNMjggMTRjMS4yMyAwIDIuMzEuNjIgMi45NSAxLjU3bDMuMjIgMy4yMmE0IDQgMCAwIDEgMS44MSAzLjM2djE2LjJjMCAyLjItMS44IDQtNCA0SDEyYy0yLjIgMC00LTEuOC00LTRWMjJhNCA0IDAgMCAxIDQtNGgxMy44eiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iLjA0Ii8+PHBhdGggZD0iTTIwIDEwYzEuMjMgMCAyLjMxLjYyIDIuOTUgMS41N2wzLjIyIDMuMjJhNCA0IDAgMCAxIDEuODEgMy4zNnYxNi4yYzAgMi4yLTEuOCA0LTQgNEg0Yy0yLjIgMC00LTEuOC00LTRWMThhNCA0IDAgMCAxIDQtNGgxMy44eiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')]"></div>
          </div>

          {/* Decorative Elements - Responsively positioned */}
          <div className="absolute top-0 right-0 w-64 h-64 md:w-72 md:h-72 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 left-0 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-yellow-400/5 to-pink-400/5 rounded-full filter blur-3xl animate-pulse hidden sm:block"></div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
              {/* Profile Image - On top for mobile, side by side for larger screens */}
              <motion.div
                  className="w-full sm:w-2/3 md:w-2/5 lg:w-2/5 relative order-1 md:order-2 mb-6 md:mb-0"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
              >
                <div className="relative">
                  {/* Floating Icons - Visibility adjusted for all devices */}
                  <motion.div
                      className="absolute -left-2 sm:-left-4 top-8 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 shadow-lg z-10 hidden sm:block"
                      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                      animate={{ opacity: 1, scale: 1, rotate: -5 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    <Code size={16} className="text-blue-500" />
                  </motion.div>

                  <motion.div
                      className="absolute -right-2 sm:-right-3 top-1/4 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 shadow-lg z-10 hidden sm:block"
                      initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
                      animate={{ opacity: 1, scale: 1, rotate: 8 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    <Zap size={16} className="text-purple-500" />
                  </motion.div>

                  <motion.div
                      className="absolute right-8 sm:right-10 -bottom-2 sm:-bottom-4 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 shadow-lg z-10 hidden sm:block"
                      initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                      animate={{ opacity: 1, scale: 1, rotate: -8 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                  >
                    <Star size={16} className="text-yellow-500" />
                  </motion.div>

                  {/* Profile image - Size adjustments for better fit on all devices */}
                  <div className="relative rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-white dark:border-gray-700 shadow-xl max-w-[180px] sm:max-w-[220px] md:max-w-xs mx-auto group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-md opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                    {/* Animated glow effect */}
                    <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-50"
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.5, 0.7, 0.5]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                    />

                    <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Nilakshi Sute"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Hero Content - Improved text sizing and spacing for all devices */}
              <motion.div
                  className="w-full md:w-3/5 text-center md:text-left order-2 md:order-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
              >
                {/* Availability badge - Sized appropriately for all screens */}
                <motion.div
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/40 dark:to-purple-900/40 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 md:mb-5"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                  <span className="inline-block w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></span>
                  <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">Available for new projects</span>
                </motion.div>

                {/* Name and title - Responsive text sizing */}
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4 leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Hi, I'm <span className="text-blue-600 dark:text-blue-400">{profile.name.split(' ')[0]}</span>
                  <div className="mt-1 sm:mt-2">
                  <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                    {profile.title}
                  </span>
                  </div>
                </motion.h1>

                {/* Bio text - Better visibility on all screens */}
                <motion.p
                    className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 md:mb-5 max-w-xl mx-auto md:mx-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {profile.bio.split('.')[0] + '.'}{' '}
                  <span className="relative text-blue-600 dark:text-blue-400 font-medium">
                  Building exceptional digital experiences
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"></span>
                </span>
                </motion.p>

                {/* Tech stack badges - Better wrapping and spacing on mobile */}
                <motion.div
                    className="flex flex-wrap gap-2 sm:gap-2.5 justify-center md:justify-start mb-4 sm:mb-5 md:mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js'].map((tech, index) => (
                      <motion.span
                          key={tech}
                          className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                  ))}
                </motion.div>

                {/* CTA buttons - Better sizing for touch targets on mobile */}
                <motion.div
                    className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link
                      to="/projects"
                      className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105"
                  >
                    <span>View My Work</span>
                    <ArrowRight size={16} className="hidden sm:inline" />
                    <ArrowRight size={14} className="inline sm:hidden" />
                  </Link>
                  <a
                      href={profile.resume}
                      className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-1.5 sm:gap-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <span>Resume</span>
                    <Download size={16} className="hidden sm:inline" />
                    <Download size={14} className="inline sm:hidden" />
                  </a>
                </motion.div>

                {/* Stats section - Responsive grid that looks good on all devices */}
                <motion.div
                    className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">5+</p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-0.5 sm:mt-1">Years Experience</p>
                  </div>
                  <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400">20+</p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-0.5 sm:mt-1">Projects Completed</p>
                  </div>
                  <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 col-span-1 xs:col-span-2 sm:col-span-1">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">15+</p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-0.5 sm:mt-1">Happy Clients</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Scroll indicator - Conditionally shown based on viewport */}
            <motion.div
                className="hidden sm:block absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div
                  className="flex flex-col items-center cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Scroll Down</span>
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L8 7L15 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Rest of the sections can remain the same */}
      </>
  );
};

export default Home;