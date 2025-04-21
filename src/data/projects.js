const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing.",
    longDescription: `This e-commerce platform provides a complete online shopping experience. Users can browse products, add items to their cart, create accounts, and complete purchases using various payment methods.

Key features include:
- Responsive product catalog with filtering and search
- User authentication and profile management
- Shopping cart with persistent storage
- Secure checkout process with multiple payment options
- Order history and tracking
- Admin dashboard for product and order management`,
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe API", "TailwindCSS"],
    image: "/projects/ecommerce.jpg",
    demoUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
    longDescription: `This task management application helps individuals and teams organize their work efficiently. It provides a clean, intuitive interface for creating, assigning, and tracking tasks across projects.

Key features include:
- Drag-and-drop task organization
- Project and task categorization
- Due date tracking with reminders
- Team collaboration with comments and mentions
- File attachments and sharing
- Progress tracking and reporting
- Dark mode support`,
    technologies: ["React", "TypeScript", "Firebase", "React DnD", "TailwindCSS", "React Query"],
    image: "/projects/task-manager.jpg",
    demoUrl: "https://taskmanager-demo.example.com",
    githubUrl: "https://github.com/johndoe/task-management-app",
    featured: true,
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that provides current conditions and forecasts for locations worldwide using weather API data.",
    longDescription: `This weather dashboard delivers accurate weather information with a beautiful, easy-to-understand interface. Users can search for locations and view current conditions as well as hourly and 7-day forecasts.

Key features include:
- Location search with autocomplete
- Current weather conditions display
- Hourly and 7-day forecasts
- Weather maps with radar and satellite imagery
- Weather alerts and notifications
- Saved locations for quick access
- Responsive design for all devices`,
    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API", "TailwindCSS", "Axios"],
    image: "/projects/weather-app.jpg",
    demoUrl: "https://weather-demo.example.com",
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    featured: false,
    category: "Frontend"
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description: "A financial management application for tracking income, expenses, and budgets with data visualization.",
    longDescription: `This personal finance tracker helps users manage their money effectively by tracking income, expenses, and savings goals. It provides insightful visualizations and reports to help users understand their spending habits.

Key features include:
- Income and expense tracking with categories
- Budget creation and monitoring
- Financial goal setting and tracking
- Interactive charts and reports
- Recurring transaction management
- Export functionality for tax purposes
- Bank account integration`,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "Plaid API", "TailwindCSS"],
    image: "/projects/finance-tracker.jpg",
    demoUrl: "https://finance-demo.example.com",
    githubUrl: "https://github.com/johndoe/finance-tracker",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 5,
    title: "Recipe Sharing Platform",
    description: "A community-driven recipe sharing website where users can discover, share, and save cooking recipes.",
    longDescription: `This recipe sharing platform connects food enthusiasts who want to discover new recipes and share their own creations. The application focuses on beautiful food photography and easy-to-follow instructions.

Key features include:
- Recipe creation with step-by-step instructions
- Ingredient lists with measurement conversion
- Recipe search with filtering by cuisine, diet, etc.
- User profiles and recipe collections
- Rating and review system
- Social sharing functionality
- Responsive design for cooking on any device`,
    technologies: ["React", "Firebase", "Cloud Firestore", "Storage", "Authentication", "TailwindCSS"],
    image: "/projects/recipe-app.jpg",
    demoUrl: "https://recipe-demo.example.com",
    githubUrl: "https://github.com/johndoe/recipe-platform",
    featured: false,
    category: "Frontend"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects, skills, and professional experience.",
    longDescription: `This portfolio website serves as a digital resume and project showcase. It's designed to highlight my skills, experience, and the projects I've worked on in an engaging and interactive way.

Key features include:
- Modern, responsive design
- Project showcase with detailed descriptions
- Skills and experience sections
- Contact form for potential clients or employers
- Light and dark mode
- Smooth animations and transitions
- Fast performance and SEO optimization`,
    technologies: ["React", "Vite", "TailwindCSS", "Framer Motion", "React Router", "EmailJS"],
    image: "/projects/portfolio.jpg",
    demoUrl: "https://johndoe-portfolio.example.com",
    githubUrl: "https://github.com/johndoe/portfolio",
    featured: false,
    category: "Frontend"
  }
];

export default projects;