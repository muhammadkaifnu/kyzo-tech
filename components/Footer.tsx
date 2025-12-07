'use client';

import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    Services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <FiGithub className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <FiTwitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <FiLinkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <FiInstagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <FiMail className="w-5 h-5" />, href: '#', label: 'Email' },
  ];

  return (
    <footer className="glass mt-20 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-bold gradient-text inline-block mb-4">
              Kyzo Tech
            </Link>
            <p className="text-foreground/70 mb-6 max-w-sm">
              Building innovative digital solutions that transform businesses and create exceptional user experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="glass p-3 rounded-full hover:scale-110 transition-all neon-glow"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-neon-blue transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/70 text-sm">
            © {currentYear} Kyzo Tech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-foreground/70 hover:text-neon-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-neon-blue transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-neon-blue transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
