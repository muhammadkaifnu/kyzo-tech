import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kyzo Tech - Building the Future of Technology",
  description: "Innovative digital solutions that transform businesses. Web development, mobile apps, AI/ML solutions, and more.",
  keywords: ["web development", "mobile apps", "AI/ML", "UI/UX design", "software agency", "AI automation"],
  authors: [{ name: "Kyzo Tech" }],
  openGraph: {
    title: "Kyzo Tech - Building the Future of Technology",
    description: "Innovative digital solutions that transform businesses",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {}
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
