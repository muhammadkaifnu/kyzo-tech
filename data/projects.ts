export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  images: string[];
  tech: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 'safescan',
    title: 'SafeScan',
    category: 'Security & AI/ML',
    description: 'Advanced security scanning mobile app with AI-powered threat detection using machine learning.',
    fullDescription: 'SafeScan is a comprehensive security mobile application built with Flutter for cross-platform compatibility. It features real-time threat detection powered by Python-based machine learning models, automated scanning, detailed reporting, and multi-level security protocols for comprehensive safety management.',
    images: [
      '/projects/SafeScan/safescan1.png',
      '/projects/SafeScan/safescaan2.png',
      '/projects/SafeScan/safescan3.png',
      '/projects/SafeScan/safescan4.png',
      '/projects/SafeScan/safescan5.png',
    ],
    tech: ['Flutter', 'Python', 'Machine Learning', 'TensorFlow', 'Firebase'],
    link: '#',
    github: '#',
  },
  {
    id: 'baller',
    title: 'Baller.ai',
    category: 'Sports Analytics & AI',
    description: 'AI-powered football match prediction platform with real-time analytics and intelligent forecasting.',
    fullDescription: 'Baller.ai is an advanced football match prediction platform built with the MERN stack (MongoDB, Express, React, Node.js) and Python for data scraping and AI predictions. The platform aggregates match data from multiple sources, analyzes team statistics, player performance, and historical data to provide accurate match predictions using machine learning algorithms.',
    images: [
      '/projects/baller/baller1.png',
      '/projects/baller/baller1.1.png',
      '/projects/baller/baller2.png',
      '/projects/baller/baller3.png',
      '/projects/baller/baller4.png',
      '/projects/baller/baller5.png',
      '/projects/baller/baller6.png',
      '/projects/baller/baller7.png',
      '/projects/baller/baller8.png',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Python', 'Machine Learning', 'Web Scraping'],
    link: '#',
    github: '#',
  },
  {
    id: 'bloodbank',
    title: 'Blood Bank Management',
    category: 'Healthcare',
    description: 'Complete blood bank management system with donor tracking and inventory management.',
    fullDescription: 'A comprehensive blood bank management system built with Django and SQLite that streamlines donor registration, blood inventory tracking, request management, and emergency notifications. Features include real-time availability, donor history, automated matching, and comprehensive reporting for efficient blood bank operations.',
    images: [
      '/projects/bloodBank/bloodbank1.png',
      '/projects/bloodBank/bloodbank2.png',
      '/projects/bloodBank/bloodbank3.png',
      '/projects/bloodBank/bloodbank4.png',
      '/projects/bloodBank/bloodbank5.png',
      '/projects/bloodBank/bloodbank6.png',
      '/projects/bloodBank/bloodbank7.png',
      '/projects/bloodBank/bloodbank8.png',
    ],
    tech: ['Django', 'Python', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    link: '#',
    github: '#',
  },
  {
    id: 'evibe',
    title: 'eVibe',
    category: 'E-Commerce',
    description: 'Modern e-commerce platform with seamless shopping experience and responsive design.',
    fullDescription: 'eVibe is a feature-rich e-commerce platform built with HTML, CSS, JavaScript, PHP, and Bootstrap. It features intuitive product browsing, secure checkout, real-time inventory management, user authentication, shopping cart functionality, and a responsive design that works perfectly across all devices.',
    images: [
      '/projects/evibe/evibe1.png',
      '/projects/evibe/evibe2.png',
      '/projects/evibe/evibe3.png',
      '/projects/evibe/evibe4.png',
      '/projects/evibe/evibe5.png',
      '/projects/evibe/evibe6.png',
      '/projects/evibe/evibe7.png',
      '/projects/evibe/evibe8.png',
      '/projects/evibe/evibe9.png',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
    github: '#',
  },
  {
    id: 'helpix',
    title: 'Helpix',
    category: 'AI/ML & Support Platform',
    description: 'Intelligent customer support platform with AI-powered accident detection and analytics.',
    fullDescription: 'Helpix is an advanced customer support platform built with the MERN stack and FastAPI. It features AI-powered accident detection using YOLOv8 computer vision model, real-time ticket management, live chat, knowledge base, analytics dashboard, and team collaboration tools. The ML models provide intelligent insights and automated incident detection for enhanced support operations.',
    images: [
      '/projects/helpix/dashboard1.png',
      '/projects/helpix/dashboard2.png',
      '/projects/helpix/dashboard3.png',
      '/projects/helpix/dashboard4.png',
      '/projects/helpix/adminpanel.png',
      '/projects/helpix/adminpanel2.png',
      '/projects/helpix/adminpanel3.png',
      '/projects/helpix/adminpanel4.png',
      '/projects/helpix/login.png',
      '/projects/helpix/signup.png',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'FastAPI', 'YOLOv8', 'Python', 'Machine Learning'],
    link: '#',
    github: '#',
  },
  {
    id: 'foodui',
    title: 'Food Delivery UI',
    category: 'Mobile App',
    description: 'Beautiful and intuitive food delivery app interface with modern design.',
    fullDescription: 'A stunning food delivery application UI featuring smooth animations, restaurant browsing, menu exploration, cart management, order tracking, and seamless checkout experience with modern design principles.',
    images: [
      '/projects/foodui/food1.jpeg',
      '/projects/foodui/food2.jpeg',
    ],
    tech: ['React Native', 'Expo', 'TypeScript', 'Styled Components'],
    link: '#',
    github: '#',
  },
  {
    id: 'n8n',
    title: 'N8N Automation',
    category: 'Workflow Automation',
    description: 'Advanced workflow automation and integration platform for business processes.',
    fullDescription: 'Custom n8n workflow automation solution featuring email automation, API integrations, data processing pipelines, and business process automation. Streamlines operations with visual workflow builder and extensive integrations.',
    images: [
      '/projects/n8n/n8nnn2.png',
      '/projects/n8n/n8nnnn3.png',
      '/projects/n8n/emai-n8n.jpeg',
    ],
    tech: ['n8n', 'Node.js', 'Docker', 'PostgreSQL', 'API Integration'],
    link: '#',
    github: '#',
  },
];
