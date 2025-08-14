'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Home,
  ArrowLeft,
  FileQuestion,
  Zap,
  Terminal,
  GitBranch,
  Code2,
  AlertTriangle
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedMesh from '@/components/AnimatedMesh';

export default function NotFound() {
  const router = useRouter();
  const [glitchText, setGlitchText] = useState('404');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Glitch effect for 404 text
    const glitchChars = '404ERROR!@#$%^&*()[]{}';
    let glitchInterval: NodeJS.Timeout;

    const startGlitch = () => {
      glitchInterval = setInterval(() => {
        const randomChars = Array.from({ length: 3 }, () =>
          glitchChars[Math.floor(Math.random() * glitchChars.length)]
        ).join('');

        setGlitchText(randomChars);

        setTimeout(() => {
          setGlitchText('404');
        }, 100);
      }, 2000);
    };

    const timer = setTimeout(startGlitch, 1000);

    return () => {
      clearTimeout(timer);
      if (glitchInterval) clearInterval(glitchInterval);
    };
  }, []);

  const quickLinks = [
    {
      title: 'Home',
      description: 'Return to main portfolio',
      icon: Home,
      path: '/',
      color: 'from-blue-600/80 to-blue-700/80'
    },
    {
      title: 'Projects',
      description: 'View technical projects',
      icon: Code2,
      path: '/projects',
      color: 'from-red-600/80 to-red-700/80'
    },
    {
      title: 'Security Tools',
      description: 'Explore security arsenal',
      icon: Terminal,
      path: '/tools',
      color: 'from-emerald-600/80 to-emerald-700/80'
    },
    {
      title: 'Certifications',
      description: 'Professional credentials',
      icon: Badge,
      path: '/certs',
      color: 'from-purple-600/80 to-purple-700/80'
    }
  ];

  const errorMessages = [
    "// Page not found in current branch",
    "/* Resource deployment failed */",
    "# Network path unreachable",
    "=> Function returned undefined",
    "404: Segment not allocated"
  ];

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 opacity-30">
        <AnimatedMesh
          width={1920}
          height={1080}
          pointCount={80}
          maxDistance={200}
          speed={0.5}
          densityGradient={true}
          className="w-full h-full"
        />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="error-grid" patternUnits="userSpaceOnUse" width="20" height="20">
              <path d="M20 0L0 20M0 0l20 20" stroke="currentColor" strokeWidth="0.5" className="text-red-500" />
              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-red-500" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#error-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main Error Display */}
        <div className="mb-12">
          {/* Glitch 404 */}
          <div className="mb-6">
            <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 font-mono tracking-wider filter drop-shadow-2xl">
              {glitchText}
            </div>
            <div className="text-xl md:text-2xl text-slate-300 font-mono mt-4 opacity-80">
              {errorMessages[Math.floor(Math.random() * errorMessages.length)]}
            </div>
          </div>

          {/* Error Description */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Page Not Found
              </h1>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              The page you&#39;re looking for has been moved, deleted, or never existed.
              No worries though - let&#39;s get you back to exploring my technical portfolio.
            </p>
          </Card>

          {/* Quick Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {quickLinks.map((link, index) => (
              <Card
                key={index}
                className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:border-slate-600/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/10"
                onClick={() => router.push(link.path)}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{link.title}</h3>
                <p className="text-slate-400 text-sm">{link.description}</p>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg transition-colors duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Go Back
            </button>

            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600/80 to-red-700/80 hover:from-red-600 hover:to-red-700 text-white rounded-lg transition-all duration-300 group"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              Back to Home
            </button>
          </div>

          {/* Technical Details */}
          <div className="mt-12">
            <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-400 font-mono">
                  Error Details
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-slate-400 mb-1">Status Code</div>
                  <div className="text-red-400 font-mono font-bold">404</div>
                </div>
                <div className="text-center">
                  <div className="text-slate-400 mb-1">Error Type</div>
                  <div className="text-orange-400 font-mono">NOT_FOUND</div>
                </div>
                <div className="text-center">
                  <div className="text-slate-400 mb-1">Suggested Action</div>
                  <div className="text-emerald-400 font-mono">NAVIGATE_HOME</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 opacity-10">
        <GitBranch className="w-24 h-24 text-red-500 animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-10">
        <FileQuestion className="w-32 h-32 text-orange-500 animate-bounce" />
      </div>
      <div className="absolute top-1/2 left-10 opacity-10">
        <Zap className="w-16 h-16 text-yellow-500" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
}