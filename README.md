# Kyzo Tech - Modern Tech Agency Website

A stunning, modern website built with Next.js, TailwindCSS, and Spline 3D animations.

## 🚀 Features

- **Modern Design**: Glassmorphism effects, neon gradients, and trendy tech aesthetics
- **3D Animations**: Interactive Spline 3D scene in hero section
- **Dark/Light Mode**: Smooth theme toggle with persistent preferences
- **Responsive**: Fully responsive design for all devices
- **Smooth Animations**: Framer Motion powered scroll animations and micro-interactions
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Spline** - 3D interactive animations
- **React Icons** - Icon library

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Colors
Edit the color scheme in `app/globals.css`:
```css
:root {
  --neon-blue: #00d4ff;
  --neon-purple: #b537f2;
  --neon-pink: #ff2e97;
}
```

### Spline 3D Scene
Replace the Spline scene URL in `components/Hero.tsx`:
1. Create your scene at [spline.design](https://spline.design)
2. Export and get the scene URL
3. Update the `scene` prop in the Spline component

### Content
- **Hero**: Edit `components/Hero.tsx`
- **About**: Edit `components/About.tsx`
- **Services**: Edit `components/Services.tsx`
- **Projects**: Edit `components/Projects.tsx`
- **Testimonials**: Edit `components/Testimonials.tsx`
- **Contact**: Edit `components/Contact.tsx`

## 📁 Project Structure

```
kyzo-tech/
├── app/
│   ├── globals.css       # Global styles and theme
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Navbar.tsx        # Navigation with theme toggle
│   ├── Hero.tsx          # Hero section with 3D
│   ├── About.tsx         # About section
│   ├── Services.tsx      # Services grid
│   ├── Projects.tsx      # Portfolio with modal
│   ├── Testimonials.tsx  # Testimonial carousel
│   ├── Contact.tsx       # Contact form
│   ├── Footer.tsx        # Footer
│   └── ThemeToggle.tsx   # Dark/Light mode toggle
└── public/               # Static assets
```

## 🎯 Key Features Explained

### Glassmorphism
The `.glass` class provides the frosted glass effect:
- Semi-transparent background
- Backdrop blur filter
- Subtle borders

### Animations
- **Scroll animations**: Sections animate on scroll using Framer Motion's `useInView`
- **Micro-interactions**: Hover effects on buttons, cards, and links
- **Page transitions**: Smooth transitions between states

### Theme Toggle
- Persists preference in localStorage
- Respects system preference on first visit
- Smooth transitions between themes

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
Build the project and deploy the `.next` folder with a Node.js server.

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📧 Contact

For questions or support, reach out to hello@kyzotech.com

---

Built with ❤️ by Kyzo Tech
