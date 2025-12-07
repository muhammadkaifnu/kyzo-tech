# Quick Reference Guide

## 🚀 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Install new package
npm install package-name

# Update dependencies
npm update
```

## 📝 Quick Edits

### Change Company Name
**Files to edit:**
- `components/Navbar.tsx` - Line with "Kyzo Tech"
- `components/Footer.tsx` - Line with "Kyzo Tech"
- `app/layout.tsx` - Metadata title
- `README.md` - All references

### Update Colors
**File:** `app/globals.css`
```css
:root {
  --neon-blue: #YOUR_COLOR;
  --neon-purple: #YOUR_COLOR;
  --neon-pink: #YOUR_COLOR;
}
```

### Change Hero Text
**File:** `components/Hero.tsx`
```tsx
<h1>Your New Headline</h1>
<p>Your new description</p>
```

### Add/Remove Services
**File:** `components/Services.tsx`
```tsx
const services = [
  {
    icon: <YourIcon />,
    title: 'Service Name',
    description: 'Service description',
    color: 'from-neon-blue to-neon-purple',
  },
  // Add more...
];
```

### Update Projects
**File:** `components/Projects.tsx`
```tsx
const projects = [
  {
    title: 'Project Name',
    category: 'Category',
    description: 'Short description',
    fullDescription: 'Full description',
    image: 'https://your-image-url.com',
    tech: ['Tech1', 'Tech2'],
    link: 'https://demo-link.com',
    github: 'https://github.com/...',
  },
  // Add more...
];
```

### Modify Testimonials
**File:** `components/Testimonials.tsx`
```tsx
const testimonials = [
  {
    name: 'Client Name',
    role: 'Position, Company',
    image: 'https://avatar-url.com',
    content: 'Testimonial text',
    rating: 5,
  },
  // Add more...
];
```

### Update Contact Info
**File:** `components/Contact.tsx`
```tsx
const contactInfo = [
  {
    icon: <FiMail />,
    title: 'Email',
    content: 'your@email.com',
    link: 'mailto:your@email.com',
  },
  // Update phone, location...
];
```

## 🎨 Styling Quick Tips

### Add Glassmorphism
```tsx
<div className="glass p-8 rounded-3xl">
  Content
</div>
```

### Add Gradient Text
```tsx
<span className="gradient-text">
  Gradient Text
</span>
```

### Add Neon Glow
```tsx
<button className="neon-glow">
  Glowing Button
</button>
```

### Add Hover Scale
```tsx
<div className="hover:scale-105 transition-all duration-300">
  Scalable Element
</div>
```

## 🎭 Animation Patterns

### Fade In on Scroll
```tsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ref = useRef(null);
const isInView = useInView(ref, { once: true });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Hover Animation
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

### Stagger Children
```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map(item => (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

## 🔧 Configuration Files

### next.config.ts
```typescript
// Add image domains
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-domain.com',
    },
  ],
}
```

### package.json
```json
// Add new script
"scripts": {
  "your-script": "your-command"
}
```

## 🌐 Environment Variables

### .env.local
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

### Usage in code
```typescript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
```

## 📱 Responsive Design

### Breakpoints
```tsx
// Mobile first approach
<div className="
  text-sm          // Mobile
  md:text-base     // Tablet (768px+)
  lg:text-lg       // Desktop (1024px+)
  xl:text-xl       // Large (1280px+)
">
```

### Hide/Show by Screen Size
```tsx
<div className="hidden md:block">Desktop only</div>
<div className="block md:hidden">Mobile only</div>
```

## 🎯 Common Patterns

### Button with Icon
```tsx
<button className="glass px-6 py-3 rounded-full flex items-center gap-2">
  <FiIcon />
  Button Text
</button>
```

### Card with Hover
```tsx
<div className="glass p-6 rounded-3xl hover:scale-105 transition-all">
  Card Content
</div>
```

### Grid Layout
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map(item => <Card key={item.id} />)}
</div>
```

### Centered Container
```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  Content
</div>
```

## 🐛 Debugging Tips

### Check Console
```bash
# Open browser DevTools
# Check Console tab for errors
# Check Network tab for failed requests
```

### Clear Cache
```bash
# Delete .next folder
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install
```

### Check Build
```bash
# Test production build locally
npm run build
npm start
```

## 📊 Performance Tips

### Optimize Images
```tsx
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // For above-fold images
/>
```

### Lazy Load Components
```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});
```

### Reduce Bundle Size
```bash
# Analyze bundle
npm run build
# Check output for large packages
```

## 🔍 SEO Checklist

- [ ] Update metadata in `app/layout.tsx`
- [ ] Add alt text to all images
- [ ] Use semantic HTML (h1, h2, nav, etc.)
- [ ] Add meta description
- [ ] Configure robots.txt
- [ ] Add sitemap.xml
- [ ] Test with Lighthouse

## 🚀 Deployment Checklist

- [ ] Update environment variables
- [ ] Test production build locally
- [ ] Check all links work
- [ ] Test on multiple devices
- [ ] Run Lighthouse audit
- [ ] Configure domain
- [ ] Set up SSL certificate
- [ ] Configure analytics
- [ ] Test contact form
- [ ] Check SEO tags

## 📞 Need Help?

1. Check error in browser console
2. Review relevant component file
3. Check this guide for patterns
4. Review Next.js/TailwindCSS docs
5. Check package documentation

---

**Pro Tip**: Keep this file open while developing for quick reference!
