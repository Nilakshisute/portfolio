import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };

  // Check for hash in URL on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && sectionRefs[hash]) {
      // Set a small delay to ensure refs are available
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Setup intersection observer to detect active section
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);

          // Update URL hash without scrolling
          history.replaceState(null, null, `#${sectionId}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Once loading is complete, observe all section refs
    if (!isLoading) {
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          observer.observe(ref.current);
        }
      });
    }

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [isLoading]);

  const scrollToSection = (sectionId) => {
    if (sectionRefs[sectionId] && sectionRefs[sectionId].current) {
      sectionRefs[sectionId].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  if (isLoading) {
    return (
        <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900">
          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
          >
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-4 text-gray-600 dark:text-gray-300 font-medium"
            >
              Loading...
            </motion.p>
          </motion.div>
        </div>
    );
  }

  return (
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

        <main className="flex-grow pt-16">
          <section
              id="home"
              ref={sectionRefs.home}
              className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
          >
            <Home />
          </section>

          <section
              id="about"
              ref={sectionRefs.about}
              className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
          >
            <About />
          </section>

          <section
              id="skills"
              ref={sectionRefs.skills}
              className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
          >
            <Skills />
          </section>

          <section
              id="projects"
              ref={sectionRefs.projects}
              className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
          >
            <Projects />
          </section>

          <section
              id="contact"
              ref={sectionRefs.contact}
              className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
          >
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
  );
}

export default App;