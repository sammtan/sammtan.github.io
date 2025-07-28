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
  title: "Samuel Tan's Portfolio",
  description: "Take a look!",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
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