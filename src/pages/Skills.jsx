import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { Code, Server, Database, Cloud, Zap, Search, Filter, CheckCircle, X } from 'react-feather';
import SEO from '../components/SEO';
import skills from '../data/skills';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
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

// Category icons mapping
const categoryIcons = {
  frontend: <Code size={24} />,
  backend: <Server size={24} />,
  tools: <Zap size={24} />,
  design: <Zap size={24} />
};

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter skills based on active category and search term
  const filteredCategories = skills.categories.filter(category => {
    if (activeCategory !== 'all' && category.id !== activeCategory) {
      return false;
    }

    if (searchTerm) {
      return category.skills.some(skill => 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return true;
  });

  // Get all skills for search filtering
  const allSkills = skills.categories.flatMap(category => 
    category.skills.map(skill => ({
      ...skill,
      categoryId: category.id,
      categoryName: category.name,
      iconColor: category.iconColor
    }))
  );

  // Filter skills based on search term
  const filteredSkills = searchTerm 
    ? allSkills.filter(skill => 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="pt-24 pb-16">
      <SEO 
        title="Skills & Expertise"
        description="Discover my technical skills and expertise in web development. From frontend frameworks to backend technologies and design tools."
        keywords="skills, expertise, web development, frontend, backend, react, javascript, programming, nilakshi sute"
      />
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Skills & Expertise
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I've spent years honing my skills in web development. Here's an overview of my technical expertise and proficiency levels.
            </motion.p>

            {/* Search and Filter */}
            <motion.div 
              className="flex flex-col md:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative flex-grow max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search skills..."
                  className="input pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    onClick={() => setSearchTerm('')}
                    aria-label="Clear search"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                  <Filter size={16} /> Filter:
                </span>
                <button
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => setActiveCategory('all')}
                >
                  All
                </button>
                {skills.categories.map(category => (
                  <button
                    key={category.id}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Results Section */}
      {searchTerm && (
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                <Search size={20} />
                Search Results for "{searchTerm}"
                <span className="text-sm font-medium px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full ml-2">
                  {filteredSkills.length} results
                </span>
              </h2>

              {filteredSkills.length > 0 ? (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={`${skill.categoryId}-${skill.name}`}
                      className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                      variants={itemVariants}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${skill.iconColor} bg-opacity-10`}>
                          {skill.categoryName}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.experience}</span>
                        <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">No skills found matching your search.</p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setSearchTerm('')}
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Skills Categories Section */}
      {(!searchTerm || filteredCategories.length > 0) && (
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {filteredCategories.map((category) => (
                <motion.div
                  key={category.id}
                  className="mb-16 last:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`p-2 rounded-lg ${category.iconColor} bg-opacity-10`}>
                      {categoryIcons[category.id] || <Code size={24} />}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.name}</h2>
                      <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
                    </div>
                  </div>

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    {category.skills
                      .filter(skill => !searchTerm || 
                        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        skill.description.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((skill, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                          variants={itemVariants}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                            <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600 dark:text-gray-400">{skill.experience}</span>
                            <div className="flex items-center">
                              {skill.level >= 90 && (
                                <span className="text-xs font-medium flex items-center text-green-600 dark:text-green-400">
                                  <CheckCircle size={14} className="mr-1" /> Expert
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                        </motion.div>
                      ))
                    }
                  </motion.div>
                </motion.div>
              ))}

              {filteredCategories.length === 0 && !searchTerm && (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">No skill categories found.</p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setActiveCategory('all')}
                  >
                    Show All Categories
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Learning Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Always Learning</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Technology is constantly evolving, and I'm committed to growing with it. Here are some technologies I'm currently exploring:
            </p>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {['Next.js', 'GraphQL', 'TypeScript', 'Svelte'].map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
                  variants={itemVariants}
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase().replace('.', '')}/
                      ${tech.toLowerCase().replace('.', '')}-original.svg`}
                      alt={tech}
                      className="w-12 h-12"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${tech.charAt(0)}&background=0D8ABC&color=fff`;
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{tech}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
