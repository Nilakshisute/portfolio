import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { ArrowRight, Code, Layout, Zap, Smartphone } from 'react-feather';
import SEO from '../components/SEO';
import profile from '../data/profile';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

// Service icons mapping
const serviceIcons = {
  code: <Code className="w-6 h-6 text-blue-600" />,
  design: <Layout className="w-6 h-6 text-blue-600" />,
  speed: <Zap className="w-6 h-6 text-blue-600" />,
  responsive: <Smartphone className="w-6 h-6 text-blue-600" />
};

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="pt-24 pb-16">
      <SEO 
        title="About Me"
        description="Learn more about Nilakshi Sute, a frontend developer with expertise in creating modern web applications. Discover my skills, experience, and education."
        keywords="about me, frontend developer, web developer, experience, education, skills, nilakshi sute"
      />
      {/* About Me Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="md:col-span-1">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/400x500?text=Profile+Image" 
                      alt={profile.name} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {profile.name}
                  </h2>
                  <h3 className="text-xl text-blue-600 mb-6">{profile.title}</h3>

                  <div className="prose prose-lg dark:prose-invert mb-6">
                    <p>{profile.longBio}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Location</h4>
                      <p className="text-gray-900 dark:text-white">{profile.location}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Email</h4>
                      <a 
                        href={`mailto:${profile.email}`} 
                        className="text-blue-600 hover:underline"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to="/contact" 
                      className="btn btn-primary flex items-center gap-2"
                    >
                      Contact Me <ArrowRight size={18} />
                    </Link>
                    <a 
                      href={profile.resume} 
                      className="btn btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Resume
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Work Experience</h2>

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {profile.experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-transparent last:pb-0"
                  variants={itemVariants}
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                      <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full mt-2 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">{exp.company}, {exp.location}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Education</h2>

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {profile.education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                  variants={itemVariants}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                      {edu.year}
                    </span>
                  </div>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">{edu.institution}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Services I Offer</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                I provide a range of services to help businesses and individuals create effective web solutions.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {profile.services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={itemVariants}
                >
                  <div className="mb-4">
                    {serviceIcons[service.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start a project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with clean, efficient, and user-friendly code.
          </p>
          <Link 
            to="/contact" 
            className="btn bg-white text-blue-600 hover:bg-gray-100 inline-flex items-center gap-2"
          >
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
