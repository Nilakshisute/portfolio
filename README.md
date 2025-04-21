# Frontend Developer Portfolio

A modern, responsive portfolio website built with React, Vite, and TailwindCSS to showcase frontend development skills and projects.

## Features

- 🌓 Light/Dark mode toggle
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎨 Modern UI with TailwindCSS
- 🔄 Smooth page transitions with Framer Motion
- 📊 Skills visualization
- 📁 Project showcase
- 📝 Contact form

## Tech Stack

- **Frontend**: React, TailwindCSS, Framer Motion
- **Build Tool**: Vite
- **Routing**: React Router
- **State Management**: React Context API
- **Backend Integration**: Ready for MERN stack with API endpoints

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/dev-portfolio.git
cd dev-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
dev-portfolio/
├── public/              # Static files
├── src/                 # Source files
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   ├── context/         # React Context
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main App component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── .gitignore           # Git ignore file
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # TailwindCSS configuration
└── vite.config.js       # Vite configuration
```

## Customization

- Edit `src/data/projects.js` to add your projects
- Edit `src/data/skills.js` to update your skills
- Modify theme colors in `tailwind.config.js`
- Update personal information in `src/data/profile.js`

## Deployment

Build the project for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory, ready to be deployed to any static hosting service like Netlify, Vercel, GitHub Pages, etc.

## License

This project is licensed under the MIT License - see the LICENSE file for details.