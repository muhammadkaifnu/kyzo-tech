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
    category: 'Security & Safety',
    description: 'Advanced security scanning and monitoring platform for comprehensive safety management.',
    fullDescription: 'SafeScan is a comprehensive security platform that provides real-time monitoring, threat detection, and safety management tools. Features include automated scanning, detailed reporting, and multi-level security protocols.',
    images: [
      '/projects/SafeScan/Screenshot 2025-12-04 at 12.38.09 AM.png',
      '/projects/SafeScan/Screenshot 2025-12-04 at 12.38.25 AM.png',
      '/projects/SafeScan/Screenshot 2025-12-04 at 12.38.56 AM.png',
      '/projects/SafeScan/Screenshot 2025-12-04 at 12.39.05 AM.png',
      '/projects/SafeScan/Screenshot 2025-12-04 at 12.49.46 AM.png',
      '/projects/SafeScan/Screenshot 2025-12-04 at 1.02.05 AM.png',
      '/projects/SafeScan/Screenshot 2025-12-04 at 1.02.53 AM.png',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'AI/ML'],
    link: '#',
    github: '#',
  },
  {
    id: 'bloodbank',
    title: 'Blood Bank Management',
    category: 'Healthcare',
    description: 'Complete blood bank management system with donor tracking and inventory management.',
    fullDescription: 'A comprehensive blood bank management system that streamlines donor registration, blood inventory tracking, request management, and emergency notifications. Features include real-time availability, donor history, and automated matching.',
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
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
    link: '#',
    github: '#',
  },
  {
    id: 'evibe',
    title: 'eVibe',
    category: 'E-Commerce',
    description: 'Modern e-commerce platform with seamless shopping experience and payment integration.',
    fullDescription: 'eVibe is a next-generation e-commerce platform featuring intuitive product browsing, secure checkout, real-time inventory, personalized recommendations, and integrated payment solutions for a complete shopping experience.',
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
    tech: ['React', 'Redux', 'Stripe', 'Firebase', 'Material-UI'],
    link: '#',
    github: '#',
  },
  {
    id: 'helpix',
    title: 'Helpix',
    category: 'Support Platform',
    description: 'Customer support and helpdesk management system with admin dashboard.',
    fullDescription: 'Helpix is a powerful customer support platform with ticket management, live chat, knowledge base, analytics dashboard, and team collaboration tools. Includes comprehensive admin panel for managing support operations.',
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
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'WebSocket'],
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
