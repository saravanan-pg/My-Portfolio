import insightxImg from '../assets/insightx_preview.png';

export const projects = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'Personal Branding & Web Profile',
    tech: 'React + Tailwind',
    description: 'A modern, highly responsive personal portfolio website built with React and Tailwind CSS. It features smooth scroll animations, a dark/light theme toggle, and a clean interface designed to showcase professional experience and technical skills.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    features: [
      "Dark and Light Mode Support",
      "Smooth Scrolling & Page Transitions",
      "Responsive Layout across all devices",
      "Optimized Performance and SEO",
      "Reusable Component Architecture"
    ],
    challenges: "Building a scalable design system with Tailwind that flawlessly switches between dark and light themes without hydration mismatches or layout shifts.",
    solutions: "Leveraged CSS variables and a custom useTheme hook to sync user preferences seamlessly."
  },
  {
    id: 'insightx',
    title: 'InsightX',
    category: 'Global Economic Intelligence Dashboard',
    tech: 'React + Zustand + Plotly',
    description: 'InsightX is a production-ready Global Economic Intelligence Dashboard built with React, Vite, Material UI, TanStack React Query, Zustand, and Plotly.js. It delivers enterprise-grade analytics with secure client-side authentication, interactive data visualizations, responsive layouts, customizable themes, CSV/PNG export functionality, Progressive Web App (PWA) support, and a polished enterprise UI/UX.',
    image: insightxImg,
    liveDemo: 'https://insight-x-rosy.vercel.app/',
    github: 'https://github.com/saravanan-pg/InsightX',
    technologies: ["React", "Vite", "Material UI", "TanStack React Query", "Zustand", "Plotly.js", "JavaScript", "PWA"],
    features: [
      "Secure Client-side Authentication",
      "Interactive Economic Dashboard",
      "Plotly.js Visualizations",
      "TanStack React Query Data Fetching",
      "Zustand State Management",
      "CSV & PNG Export Capability",
      "Dark & Light Theme"
    ],
    modules: [
      {
        title: "Authentication & Security",
        description: "Implemented secure client-side authentication mechanisms. User settings and themes are intelligently persisted using Zustand, providing an isolated and personalized experience per session."
      },
      {
        title: "Data Visualization & Export",
        description: "Leveraged Plotly.js for rendering highly interactive financial indicators and maps. Added robust export features allowing users to download reports as CSVs or high-quality PNGs seamlessly."
      },
      {
        title: "Theme Customization",
        description: "Developed a dynamic theming system integrated with Material UI and Zustand, allowing flawless transitions between light and dark enterprise modes without layout shifts."
      }
    ],
    challenges: "Rendering complex Plotly charts alongside interactive KPI cards caused initial load delays and memory bloat.",
    solutions: "Implemented route-level code splitting and optimized TanStack React Query caching. Refactored state logic to reduce unnecessary re-renders."
  },
];
