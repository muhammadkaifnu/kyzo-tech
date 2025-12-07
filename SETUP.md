# Kyzo Tech - Quick Setup Guide

## 🎯 Getting Started

Your modern tech agency website is ready! Follow these steps to customize and deploy.

## ✅ What's Included

- ✨ Modern glassmorphism design
- 🌓 Dark/Light mode toggle
- 🎨 Neon gradient color scheme
- 🎭 Framer Motion animations
- 🎮 Spline 3D interactive hero
- 📱 Fully responsive design
- 🔍 SEO optimized
- ⚡ Next.js 16 with App Router

## 🚀 Quick Start

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Checklist

### 1. Update Branding
- [ ] Change company name in `components/Navbar.tsx`
- [ ] Update logo/favicon in `public/` folder
- [ ] Modify hero tagline in `components/Hero.tsx`

### 2. Customize Content
- [ ] Edit About section in `components/About.tsx`
- [ ] Update services in `components/Services.tsx`
- [ ] Add your projects in `components/Projects.tsx`
- [ ] Replace testimonials in `components/Testimonials.tsx`
- [ ] Update contact info in `components/Contact.tsx`

### 3. Spline 3D Scene
- [ ] Create your 3D scene at [spline.design](https://spline.design)
- [ ] Export and get the scene URL
- [ ] Replace URL in `components/Hero.tsx` (line with `scene=`)

### 4. Colors & Theme
- [ ] Adjust neon colors in `app/globals.css` (`:root` section)
- [ ] Customize gradient combinations
- [ ] Modify glassmorphism opacity

### 5. Contact Form
- [ ] Set up form backend (optional)
- [ ] Configure email service
- [ ] Update contact information

### 6. SEO & Meta
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add your domain
- [ ] Configure Open Graph images

## 🎮 Spline 3D Setup

### Option 1: Use Default Scene
The project includes a default Spline scene. It works out of the box!

### Option 2: Create Custom Scene
1. Go to [spline.design](https://spline.design)
2. Create your 3D scene
3. Click "Export" → "Code Export"
4. Copy the scene URL
5. Replace in `components/Hero.tsx`:
   ```tsx
   <Spline scene="YOUR_SCENE_URL_HERE" />
   ```

### Option 3: Remove 3D Scene
If you don't want 3D:
1. Remove Spline component from `components/Hero.tsx`
2. Replace with an image or illustration
3. Uninstall: `npm uninstall @splinetool/react-spline`

## 🎨 Color Customization

Edit `app/globals.css`:

```css
:root {
  --neon-blue: #00d4ff;    /* Primary accent */
  --neon-purple: #b537f2;  /* Secondary accent */
  --neon-pink: #ff2e97;    /* Tertiary accent */
}
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components are fully responsive!

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Publish directory: `.next`
3. Deploy

### Other Platforms
1. Build: `npm run build`
2. Start: `npm start`
3. Requires Node.js server

## 🔧 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Your Company Name
```

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npm start
```

## 🐛 Troubleshooting

### Spline not loading?
- Check internet connection
- Verify scene URL is correct
- Try a different scene

### Animations not working?
- Clear browser cache
- Check console for errors
- Ensure Framer Motion is installed

### Dark mode not persisting?
- Check localStorage is enabled
- Clear browser data and retry

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Spline Docs](https://docs.spline.design/)

## 💡 Tips

1. **Performance**: Optimize images before adding
2. **SEO**: Add meta descriptions for each section
3. **Analytics**: Integrate Google Analytics or similar
4. **Forms**: Connect to email service (SendGrid, Mailgun, etc.)
5. **Testing**: Test on multiple devices and browsers

## 🎉 You're All Set!

Your modern tech agency website is ready to impress. Customize it, make it yours, and launch!

Need help? Check the main README.md or open an issue.

---

Happy coding! 🚀
