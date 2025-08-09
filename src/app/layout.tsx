import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const jbMono = JetBrains_Mono({
  variable: "--font-jb-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Samuel Tan - Cybersecurity Professional & Software Developer",
    template: "%s | samm.tan",
  },
  description: "Samuel Tan's portfolio showcasing expertise in cybersecurity, penetration testing, machine learning, and software development. Computer Engineering student at University of Indonesia.",
  keywords: [
    "Samuel Tan",
    "sammtan", 
    "cybersecurity",
    "penetration testing",
    "ethical hacker",
    "software developer",
    "machine learning",
    "portfolio",
    "Computer Engineering",
    "University of Indonesia",
    "CTF writeups",
    "vulnerability research",
    "network security",
    "Python",
    "TypeScript",
    "React",
    "Next.js"
  ],
  authors: [{ name: "Samuel Tan", url: "https://sammtan.github.io" }],
  creator: "Samuel Tan",
  publisher: "Samuel Tan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sammtan.github.io",
    title: "Samuel Tan - Cybersecurity Professional & Software Developer",
    description: "Samuel Tan's portfolio showcasing expertise in cybersecurity, penetration testing, machine learning, and software development.",
    siteName: "samm.tan",
    images: [
      {
        url: "https://sammtan.github.io/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Samuel Tan - Cybersecurity Professional & Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Tan - Cybersecurity Professional & Software Developer", 
    description: "Samuel Tan's portfolio showcasing expertise in cybersecurity, penetration testing, machine learning, and software development.",
    creator: "@sxmmtan",
    images: ["https://sammtan.github.io/images/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="samm.tan" />
        <link rel="canonical" href="https://sammtan.github.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Samuel Tan",
              "alternateName": "sammtan",
              "description": "Cybersecurity professional and software developer specializing in penetration testing, machine learning, and vulnerability research.",
              "url": "https://sammtan.github.io",
              "image": "https://sammtan.github.io/images/profile.jpg",
              "sameAs": [
                "https://github.com/sammtan",
                "https://linkedin.com/in/sammtan",
                "https://instagram.com/samm.tan",
                "https://x.com/sxmmtan",
                "https://www.youtube.com/@sammtanX"
              ],
              "jobTitle": "Cybersecurity Professional & Software Developer",
              "worksFor": {
                "@type": "EducationalOrganization",
                "name": "University of Indonesia",
                "url": "https://ui.ac.id"
              },
              "alumniOf": {
                "@type": "EducationalOrganization", 
                "name": "University of Indonesia"
              },
              "knowsAbout": [
                "Cybersecurity",
                "Penetration Testing", 
                "Ethical Hacking",
                "Machine Learning",
                "Software Development",
                "Network Security",
                "Vulnerability Research",
                "CTF",
                "Digital Forensics",
                "Python",
                "TypeScript",
                "React",
                "Next.js"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Ethical Hacker Certification",
                  "credentialCategory": "Cisco"
                },
                {
                  "@type": "EducationalOccupationalCredential", 
                  "name": "CCNA Enterprise",
                  "credentialCategory": "Cisco"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "MongoDB Certifications",
                  "credentialCategory": "MongoDB"
                }
              ],
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://sammtan.github.io"
              }
            })
          }}
        />
      </head>
      <body className={`${jbMono.className} antialiased select-none`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem enableColorScheme>
          {children}
          <Toaster
            theme="dark"
            position="bottom-right"
            richColors
            closeButton
            toastOptions={{
              style: {
                background: 'rgba(15, 23, 42, 0.95)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(71, 85, 105, 0.4)',
                borderRadius: '12px',
                color: 'white',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(71, 85, 105, 0.1)',
              },
              className: `toast-custom ${jbMono.className}`,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}