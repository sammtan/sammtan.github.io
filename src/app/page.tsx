"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedMesh from "@/components/AnimatedMesh";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import {
  GraduationCap,
  FolderOpen,
  Shield,
  FileText,
  MapPin,
  Clock,
  Linkedin,
  Instagram,
  Github,
  Mail,
  Twitter,
  Youtube,
  Code2,
  Cpu,
  Brain,
  Bug,
  Key,
  Zap,
  Terminal,
  Database
} from "lucide-react";

const SocialTile = ({ icon: Icon, platform, url }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>, platform: string, url: string }) => {
  const getBrandColors = (platform: string) => {
    switch (platform) {
      case "GitHub":
        return {
          bg: "bg-gradient-to-br from-gray-800/80 to-gray-900/80",
          border: "border-gray-700/50",
          icon: "text-white"
        };
      case "LinkedIn":
        return {
          bg: "bg-gradient-to-br from-blue-600/80 to-blue-700/80",
          border: "border-blue-600/50",
          icon: "text-white"
        };
      case "Instagram":
        return {
          bg: "bg-gradient-to-br from-pink-600/80 to-purple-600/80",
          border: "border-pink-500/50",
          icon: "text-white"
        };
      case "X (Twitter)":
        return {
          bg: "bg-gradient-to-br from-gray-900/80 to-black/80",
          border: "border-gray-700/50",
          icon: "text-white"
        };
      case "Email":
        return {
          bg: "bg-gradient-to-br from-red-600/80 to-red-700/80",
          border: "border-red-600/50",
          icon: "text-white"
        };
      case "YouTube":
        return {
          bg: "bg-gradient-to-br from-red-600/80 to-red-700/80",
          border: "border-red-600/50",
          icon: "text-white"
        };
      default:
        return {
          bg: "bg-gradient-to-br from-slate-800/50 to-slate-900/50",
          border: "border-slate-700/50",
          icon: "text-slate-300"
        };
    }
  };

  const colors = getBrandColors(platform);

  return (
    <Card
      className={`col-span-2 md:col-span-1 row-span-1 p-3 cursor-pointer flex items-center justify-center ${colors.bg} ${colors.border} tile-hover transition-all duration-300 hover:scale-105`}
      onClick={() => window.open(url, '_blank')}
    >
      <Icon className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon}`} />
    </Card>
  );
};

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Show development toast after a short delay
    const timer = setTimeout(() => {
      toast.info("🚧 Under Development", {
        description: "This portfolio website is still in active development. Some features may not be available yet. Best experience in desktop platform.",
        duration: 6000,
        action: {
          label: "Got it",
          onClick: () => { },
        },
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 grid grid-cols-12 grid-rows-12 md:grid-rows-10 gap-3 md:gap-4 lg:gap-6 tile-container">
      {/* Main Profile Tile - Full Vertical */}
      <Card className="col-span-12 md:col-span-7 lg:col-span-8 row-span-6 p-6 relative overflow-hidden bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-slate-700/50 cursor-pointer tile-hover">
        {/* Animated Triangular Mesh - Behind everything */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <AnimatedMesh
            width={800}
            height={600}
            pointCount={60}
            maxDistance={160}
            speed={1}
            densityGradient={true}
            className="w-full h-full"
          />
        </div>

        {/* Clean blur layer */}
        <div className="absolute inset-0 pointer-events-none z-5 backdrop-blur-md bg-gradient-to-br from-slate-900/10 via-slate-800/5 to-slate-700/8"></div>

        <div className="flex flex-col h-full gap-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Profile Photo */}
            <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-muted shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.jpg"
                alt="Samuel Tan Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to gradient background if image not found
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.style.background = 'linear-gradient(135deg, #1e293b, #475569)';
                }}
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              {/* Name */}
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-100 mb-2">Samuel Tan</h1>
              <p className="text-sm text-slate-400 mb-4">Currently studying Computer Engineering at University of Indonesia</p>

              {/* Employment Status */}
              <Badge variant="secondary" className="w-fit mb-4 bg-blue-900/50 text-blue-200 border-blue-800/50 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Open to Work
              </Badge>
              <p className="text-sm md:text-base font-medium mb-4 text-slate-100 leading-relaxed">Passionate cybersecurity enthusiast with <span className="text-red-400">Advanced</span> knowledge in <span className="text-blue-400">Network</span> security, <span className="text-red-400">Digital</span> forensics, and <span className="text-blue-400">Reverse</span> engineering. <span className="text-red-400">Experienced</span> in <span className="text-blue-400">Advanced</span> persistent threat analysis and <span className="text-red-400">Security</span> operations. <span className="text-blue-400">Seeking</span> opportunities to <span className="text-red-400">Apply</span> my <span className="text-blue-400">Machine</span> learning expertise in <span className="text-red-400">Unified</span> threat detection and <span className="text-blue-400">Enhanced</span> cybersecurity <span className="text-red-400">Learning</span> systems.</p>
            </div>
          </div>

          <div className="mt-auto pt-4">
            <div className="flex items-center gap-2 text-sm text-slate-400 justify-center md:justify-start mb-2">
              <MapPin className="w-4 h-4" />
              <span>Based in Jakarta, IDN</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-400 justify-center md:justify-start">
              <Clock className="w-4 h-4" />
              <span>GMT+7 (WIB)</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Certifications & Education Tile */}
      <Card
        className="col-span-6 md:col-span-5 lg:col-span-4 row-span-2 p-4 cursor-pointer bg-gradient-to-br from-blue-950/60 to-blue-900/60 border-blue-800/50 tile-hover relative overflow-hidden"
        onClick={() => router.push('/certs')}
      >
        {/* Animated Background Pattern - Similar to Projects/Security Arsenal */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 200 120" className="w-full h-full">
            <defs>
              <pattern id="cert-circuit" patternUnits="userSpaceOnUse" width="40" height="40">
                <path d="M0 20h40M20 0v40M10 10h20M10 30h20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-blue-400" />
                <circle cx="20" cy="20" r="2" fill="currentColor" className="text-blue-400" />
                <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-400" />
                <circle cx="30" cy="30" r="1" fill="currentColor" className="text-blue-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cert-circuit)" />
          </svg>
        </div>
        
        <div className="flex flex-col h-full relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="relative">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            <h3 className="font-semibold text-sm md:text-base text-blue-100">Certifications</h3>
          </div>
          
          {/* Swipable Certification Cards */}
          <div className="flex-1 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="cert-cards-container flex gap-3 animate-slide-certs">
                {/* Card 1 - Ethical Hacker */}
                <div className="cert-card flex-shrink-0 bg-blue-900/20 backdrop-blur-sm rounded-lg p-3 border border-blue-700/30 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs">🔒</span>
                    <span className="text-xs font-medium text-blue-200">Ethical Hacker - Cisco</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-blue-800/30 text-blue-300 px-2 py-0.5 rounded-full">Pentesting</span>
                    <span className="text-xs bg-blue-800/30 text-blue-300 px-2 py-0.5 rounded-full">Security</span>
                  </div>
                </div>
                
                {/* Card 2 - CCNA */}
                <div className="cert-card flex-shrink-0 bg-blue-900/20 backdrop-blur-sm rounded-lg p-3 border border-blue-700/30 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs">🌐</span>
                    <span className="text-xs font-medium text-blue-200">CCNA Enterprise</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-blue-800/30 text-blue-300 px-2 py-0.5 rounded-full">Networking</span>
                    <span className="text-xs bg-blue-800/30 text-blue-300 px-2 py-0.5 rounded-full">Cisco</span>
                  </div>
                </div>
                
                {/* Card 3 - MongoDB */}
                <div className="cert-card flex-shrink-0 bg-blue-900/20 backdrop-blur-sm rounded-lg p-3 border border-blue-700/30 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs">🍃</span>
                    <span className="text-xs font-medium text-blue-200">MongoDB (7 Certs)</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-blue-800/30 text-blue-300 px-2 py-0.5 rounded-full">Database</span>
                    <span className="text-xs bg-blue-800/30 text-blue-300 px-2 py-0.5 rounded-full">NoSQL</span>
                  </div>
                </div>
                
                {/* Card 4 - IBM */}
                <div className="cert-card flex-shrink-0 bg-blue-900/20 backdrop-blur-sm rounded-lg p-3 border border-blue-700/30 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs">💎</span>
                    <span className="text-xs font-medium text-blue-200">IBM Design Thinking</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-blue-800/30 text-blue-300 px-2 py-0.5 rounded-full">Design</span>
                    <span className="text-xs bg-blue-800/30 text-blue-300 px-2 py-0.5 rounded-full">UX</span>
                  </div>
                </div>
                
                {/* Card 5 - Workshops */}
                <div className="cert-card flex-shrink-0 bg-blue-900/20 backdrop-blur-sm rounded-lg p-3 border border-blue-700/30 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs">🛡️</span>
                    <span className="text-xs font-medium text-blue-200">CSW Workshops (4)</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-blue-800/30 text-blue-300 px-2 py-0.5 rounded-full">Ghidra</span>
                    <span className="text-xs bg-blue-800/30 text-blue-300 px-2 py-0.5 rounded-full">WiFi</span>
                  </div>
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="cert-card flex-shrink-0 bg-blue-900/20 backdrop-blur-sm rounded-lg p-3 border border-blue-700/30 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs">🔒</span>
                    <span className="text-xs font-medium text-blue-200">Ethical Hacker - Cisco</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-blue-800/30 text-blue-300 px-2 py-0.5 rounded-full">Pentesting</span>
                    <span className="text-xs bg-blue-800/30 text-blue-300 px-2 py-0.5 rounded-full">Security</span>
                  </div>
                </div>
                
                <div className="cert-card flex-shrink-0 bg-blue-900/20 backdrop-blur-sm rounded-lg p-3 border border-blue-700/30 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs">🌐</span>
                    <span className="text-xs font-medium text-blue-200">CCNA Enterprise</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-blue-800/30 text-blue-300 px-2 py-0.5 rounded-full">Networking</span>
                    <span className="text-xs bg-blue-800/30 text-blue-300 px-2 py-0.5 rounded-full">Cisco</span>
                  </div>
                </div>
                
                <div className="cert-card flex-shrink-0 bg-blue-900/20 backdrop-blur-sm rounded-lg p-3 border border-blue-700/30 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs">🍃</span>
                    <span className="text-xs font-medium text-blue-200">MongoDB (7 Certs)</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-blue-800/30 text-blue-300 px-2 py-0.5 rounded-full">Database</span>
                    <span className="text-xs bg-blue-800/30 text-blue-300 px-2 py-0.5 rounded-full">NoSQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-blue-400 whitespace-nowrap">15 Professional</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              </div>
            </div>
            <svg className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </Card>

      {/* Projects Tile */}
      <Card
        className="col-span-6 md:col-span-5 lg:col-span-4 row-span-2 p-4 cursor-pointer bg-gradient-to-br from-red-950/60 to-red-900/60 border-red-800/50 tile-hover relative overflow-hidden group"
        onClick={() => router.push('/projects')}
      >
        {/* Animated Background Pattern - Similar to Security Arsenal */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 200 120" className="w-full h-full">
            <defs>
              <pattern id="project-circuit" patternUnits="userSpaceOnUse" width="40" height="40">
                <path d="M0 20h40M20 0v40M10 10h20M10 30h20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-red-400" />
                <circle cx="20" cy="20" r="2" fill="currentColor" className="text-red-400" />
                <circle cx="10" cy="10" r="1" fill="currentColor" className="text-red-400" />
                <circle cx="30" cy="30" r="1" fill="currentColor" className="text-red-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#project-circuit)" />
          </svg>
        </div>
        
        <div className="flex flex-col h-full relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="relative">
              <FolderOpen className="w-5 h-5 text-red-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <h3 className="font-semibold text-sm md:text-base text-red-100">Projects Portfolio</h3>
          </div>
          
          {/* Swipable Cards Container */}
          <div className="flex-1 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="project-cards-container flex gap-3 animate-slide-loop">
                {/* Card 1 - NetGuard ML */}
                <div className="project-card flex-shrink-0 bg-red-900/20 backdrop-blur-sm rounded-lg p-3 border border-red-700/30 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-xs font-medium text-red-200">NetGuard ML</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-red-800/30 text-red-300 px-2 py-0.5 rounded-full">AI/ML</span>
                    <span className="text-xs bg-red-800/30 text-red-300 px-2 py-0.5 rounded-full">Security</span>
                  </div>
                </div>
                
                {/* Card 2 - Banking Security */}
                <div className="project-card flex-shrink-0 bg-red-900/20 backdrop-blur-sm rounded-lg p-3 border border-red-700/30 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-xs font-medium text-red-200">Banking Security</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-red-800/30 text-red-300 px-2 py-0.5 rounded-full">Python</span>
                    <span className="text-xs bg-red-800/30 text-red-300 px-2 py-0.5 rounded-full">SQLite</span>
                  </div>
                </div>
                
                {/* Card 3 - Portfolio Site */}
                <div className="project-card flex-shrink-0 bg-red-900/20 backdrop-blur-sm rounded-lg p-3 border border-red-700/30 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-xs font-medium text-red-200">Portfolio Website</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-red-800/30 text-red-300 px-2 py-0.5 rounded-full">Next.js</span>
                    <span className="text-xs bg-red-800/30 text-red-300 px-2 py-0.5 rounded-full">React</span>
                  </div>
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="project-card flex-shrink-0 bg-red-900/20 backdrop-blur-sm rounded-lg p-3 border border-red-700/30 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-xs font-medium text-red-200">NetGuard ML</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-red-800/30 text-red-300 px-2 py-0.5 rounded-full">AI/ML</span>
                    <span className="text-xs bg-red-800/30 text-red-300 px-2 py-0.5 rounded-full">Security</span>
                  </div>
                </div>
                
                <div className="project-card flex-shrink-0 bg-red-900/20 backdrop-blur-sm rounded-lg p-3 border border-red-700/30 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-xs font-medium text-red-200">Banking Security</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-red-800/30 text-red-300 px-2 py-0.5 rounded-full">Python</span>
                    <span className="text-xs bg-red-800/30 text-red-300 px-2 py-0.5 rounded-full">SQLite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-red-400 whitespace-nowrap">3 Completed</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
              </div>
            </div>
            <svg className="w-4 h-4 text-red-400 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </Card>

      {/* Tools Tile */}
      <Card
        className="col-span-6 md:col-span-5 lg:col-span-4 row-span-2 p-4 cursor-pointer bg-gradient-to-br from-emerald-950/70 to-teal-900/70 border-emerald-800/60 tile-hover relative overflow-hidden"
        onClick={() => router.push('/tools')}
      >
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 200 120" className="w-full h-full">
            <defs>
              <pattern id="circuit" patternUnits="userSpaceOnUse" width="40" height="40">
                <path d="M0 20h40M20 0v40M10 10h20M10 30h20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-emerald-400" />
                <circle cx="20" cy="20" r="2" fill="currentColor" className="text-emerald-400" />
                <circle cx="10" cy="10" r="1" fill="currentColor" className="text-emerald-400" />
                <circle cx="30" cy="30" r="1" fill="currentColor" className="text-emerald-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        <div className="flex flex-col h-full relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="relative">
              <Shield className="w-5 h-5 text-emerald-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <h3 className="font-semibold text-sm md:text-base text-emerald-100">Security Arsenal</h3>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs md:text-sm text-emerald-300 font-medium whitespace-nowrap">7/7 Tools Active</span>
              <div className="flex gap-1 flex-shrink-0">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-300"></div>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-400"></div>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-500"></div>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-600"></div>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-emerald-400">SSL • Port • DNS • Packet • Hash • Forensics • Logs</p>
              <p className="text-xs text-slate-400">Complete Security Toolkit</p>
            </div>

            <div className="flex items-center gap-1 mt-1">
              <Code2 className="w-3 h-3 text-emerald-500" />
              <span className="text-xs text-emerald-500 font-mono">Multi-Lang Platform</span>
            </div>
          </div>
        </div>
      </Card>

      {/* CVE/CTF Writeups Tile */}
      <Card
        className="col-span-6 md:col-span-4 lg:col-span-4 row-span-2 md:row-span-2 p-4 cursor-pointer bg-gradient-to-br from-red-900/60 to-red-950/60 border-red-700/50 tile-hover relative overflow-hidden group"
        onClick={() => router.push('/writeups')}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 200 120" className="w-full h-full">
            <defs>
              <pattern id="security-pattern" patternUnits="userSpaceOnUse" width="30" height="30">
                <path d="M15 5v20M5 15h20M10 10l10 10M20 10l-10 10" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-red-400" />
                <circle cx="15" cy="15" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-red-400" />
                <rect x="12" y="12" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-red-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#security-pattern)" />
          </svg>
        </div>

        <div className="flex flex-col h-full relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="relative">
              <Shield className="w-5 h-5 text-red-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <h3 className="font-semibold text-sm md:text-base text-red-100">CVE & CTF Writeups</h3>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-3">
              <p className="text-xs md:text-sm text-red-300 mb-1">🆕 Latest: DarkHole 2</p>
              <p className="text-xs text-red-400 mb-2">VulnHub machine walkthrough with multi-stage exploitation</p>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-3">
              <Badge className="text-xs bg-red-800/30 text-red-300 px-2 py-0.5">SQL Injection</Badge>
              <Badge className="text-xs bg-red-800/30 text-red-300 px-2 py-0.5">Git Exposure</Badge>
              <Badge className="text-xs bg-red-800/30 text-red-300 px-2 py-0.5">Privilege Escalation</Badge>
            </div>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2">
              <span className="text-xs text-red-400">1 Writeup</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-red-400 rounded-full"></div>
              </div>
            </div>
            <svg className="w-4 h-4 text-red-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </Card>

      {/* Personal Documentation/Blog Tile */}
      <Card
        className="col-span-12 md:col-span-5 lg:col-span-5 row-span-2 md:row-span-2 p-4 cursor-pointer bg-gradient-to-br from-blue-900/60 to-blue-950/60 border-blue-700/50 tile-hover"
        onClick={() => router.push('/thoughts')}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-blue-400" />
            <h3 className="font-semibold text-sm md:text-base text-blue-100">Letters & Thoughts</h3>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-xs md:text-sm text-blue-300 mb-2">Latest: &ldquo;Journey into Quantum Computing&rdquo;</p>
            <p className="text-xs text-blue-400">Exploring the intersection of quantum mechanics and computational possibilities...</p>
          </div>
        </div>
      </Card>

      {/* Social Media Tiles */}
      <SocialTile icon={Github} platform="GitHub" url="https://github.com/sammtan" />
      <SocialTile icon={Linkedin} platform="LinkedIn" url="https://linkedin.com/in/sammtan" />
      <SocialTile icon={Instagram} platform="Instagram" url="https://instagram.com/samm.tan" />
      <SocialTile icon={Twitter} platform="X (Twitter)" url="https://x.com/sxmmtan" />
      <SocialTile icon={Mail} platform="Email" url="mailto:sammtan.rt@gmail.com" />
      <SocialTile icon={Youtube} platform="YouTube" url="https://www.youtube.com/@sammtanX?sub_confirmation=1" />

      {/* Tech Stack Tile */}
      <Card className="col-start-3 col-end-11 md:col-start-3 md:col-end-11 lg:col-start-3 lg:col-end-11 row-span-2 p-4 bg-gradient-to-br from-purple-950/60 to-purple-900/60 border-purple-800/50 tile-hover overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="w-5 h-5 text-purple-400" />
            <h3 className="font-semibold text-sm md:text-base text-purple-100">Tech Stack & Tools</h3>
          </div>

          {/* Horizontal scrollable container */}
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-3 overflow-x-auto pb-2 tech-stack-scroll smooth-scroll">

              {/* Programming Languages */}
              <div className="flex-shrink-0 bg-purple-900/30 rounded-lg p-3 min-w-[140px] tech-stack-item">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-4 h-4 text-purple-400" />
                  <div className="text-xs font-semibold text-purple-300">Languages</div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">Python</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">C++</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">Go</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">TypeScript</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">JavaScript</span>
                </div>
              </div>

              {/* Embedded Systems */}
              <div className="flex-shrink-0 bg-purple-900/30 rounded-lg p-3 min-w-[140px] tech-stack-item">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <div className="text-xs font-semibold text-purple-300">Embedded</div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">ESP32</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">Arduino</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">STM32</span>
                </div>
              </div>

              {/* Security Tools */}
              <div className="flex-shrink-0 bg-purple-900/30 rounded-lg p-3 min-w-[160px] tech-stack-item">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <div className="text-xs font-semibold text-purple-300">Security</div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">Metasploit</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">Wireshark</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">Burp Suite</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">Nmap</span>
                </div>
              </div>

              {/* Penetration Testing */}
              <div className="flex-shrink-0 bg-purple-900/30 rounded-lg p-3 min-w-[160px] tech-stack-item">
                <div className="flex items-center gap-2 mb-2">
                  <Bug className="w-4 h-4 text-purple-400" />
                  <div className="text-xs font-semibold text-purple-300">Pen Testing</div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">Kali Linux</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">Ghidra</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">John</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">Hashcat</span>
                </div>
              </div>

              {/* Cryptography */}
              <div className="flex-shrink-0 bg-purple-900/30 rounded-lg p-3 min-w-[140px] tech-stack-item">
                <div className="flex items-center gap-2 mb-2">
                  <Key className="w-4 h-4 text-purple-400" />
                  <div className="text-xs font-semibold text-purple-300">Crypto</div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">OpenSSL</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">GnuPG</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">CrypTool</span>
                </div>
              </div>

              {/* AI/ML */}
              <div className="flex-shrink-0 bg-purple-900/30 rounded-lg p-3 min-w-[180px] tech-stack-item">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  <div className="text-xs font-semibold text-purple-300">AI/ML</div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">scikit-learn</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">TensorFlow</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">PyTorch</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">pandas</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">Matplotlib</span>
                </div>
              </div>

              {/* GPGPU */}
              <div className="flex-shrink-0 bg-purple-900/30 rounded-lg p-3 min-w-[120px] tech-stack-item">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <div className="text-xs font-semibold text-purple-300">GPGPU</div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">CUDA</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">OpenCL</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">cuDNN</span>
                </div>
              </div>

              {/* Frameworks & Tools */}
              <div className="flex-shrink-0 bg-purple-900/30 rounded-lg p-3 min-w-[160px] tech-stack-item">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <div className="text-xs font-semibold text-purple-300">Frameworks</div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">Next.js</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">React</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">PySide6</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">Tailwind</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">SQLite</span>
                </div>
              </div>

              {/* Databases & Cloud */}
              <div className="flex-shrink-0 bg-purple-900/30 rounded-lg p-3 min-w-[150px] tech-stack-item">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-4 h-4 text-purple-400" />
                  <div className="text-xs font-semibold text-purple-300">Data & Cloud</div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">MongoDB</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">SQLite</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">Docker</span>
                  <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">Linux</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
