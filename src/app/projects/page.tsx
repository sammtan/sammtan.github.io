"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, Activity, ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Projects - samm.tan";
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern personal portfolio website built with Next.js and TypeScript, featuring responsive design, dynamic project showcase, certificate gallery, and professional presentation of skills and experience.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Shadcn/ui"],
      status: "Completed",
      stars: 0,
      github: "https://github.com/sammtan/sammtan.github.io",
      demo: "https://sammtan.github.io",
      phase: "Current",
      progress: 100
    },
    {
      title: "Banking Security Platform",
      description: "Comprehensive desktop application for real-time banking fraud detection with AI-powered risk assessment using Isolation Forest algorithm. Features transaction monitoring with pagination, customizable fraud detection rules, multi-format reporting (PDF/CSV/Excel), and real-time data visualization charts.",
      tech: ["Python", "PySide6", "SQLite", "scikit-learn", "ReportLab", "pandas"],
      status: "Completed",
      stars: 0,
      github: "https://github.com/sammtan/banking-security-platform",
      demo: null,
      phase: "Completed",
      progress: 100
    },
    {
      title: "NetGuard ML",
      description: "AI-powered network security simulator combining visual network building with machine learning-based threat detection. Features ensemble ML models (Isolation Forest, LSTM, Random Forest, DBSCAN), real-time anomaly detection, comprehensive PDF reporting, and pre-built attack scenarios. Successfully simulates corporate breaches, IoT botnets, and APT attacks with detailed analysis.",
      tech: ["Python", "PySide6", "scikit-learn", "Matplotlib", "ReportLab", "NetworkX"],
      status: "Completed",
      stars: 0,
      github: "https://github.com/sammtan/netguard-ml",
      demo: null,
      phase: "Completed",
      progress: 100
    },
    {
      title: "NetLab V2 - Universal Parametric Cyber Range",
      description: "Enterprise-grade network laboratory platform for cybersecurity training, research, and testing. Features dual-container architecture with complete isolation, 17-VM enterprise topology, web management dashboard with real-time monitoring, REST API, and multiple pre-built scenarios including SOC training, penetration testing, IoT security, and incident response.",
      tech: ["Docker", "Python", "QEMU/KVM", "Alpine Linux", "Bridge Networking", "REST API", "JavaScript"],
      status: "Completed",
      stars: 0,
      github: "https://github.com/sammtan/netlab-v2",
      demo: null,
      phase: "Completed",
      progress: 100
    },
    {
      title: "SpecialistAI System",
      description: "Modular multi-agent AI system with a Coordinator model that intelligently routes tasks to specialized Expert models. Features task analysis and routing, role-based specialists (Code Expert, Data Analyst, Content Creator, General Assistant), 4-bit quantization for efficient Colab execution, and minimal dependencies. Built with clean architecture perfect for learning and extending.",
      tech: ["Python", "Transformers", "Phi-2", "PyTorch", "Google Colab"],
      status: "In Progress",
      stars: 0,
      github: "https://github.com/sammtan/specialist-ai",
      demo: null,
      phase: "Current",
      progress: 40
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.push('/')}
          className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Portfolio
        </button>
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
          <p className="text-slate-300 text-lg">Strategic project development focused on banking security, enterprise vulnerability management, and AI-powered threat detection for cybersecurity and software engineering internship opportunities.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="border-green-500 text-green-400">Current</Badge>
            <Badge variant="outline" className="border-emerald-500 text-emerald-400 bg-emerald-400/10">Completed</Badge>
            <Badge variant="outline" className="border-blue-500 text-blue-400">Priority</Badge>
            <Badge variant="outline" className="border-yellow-500 text-yellow-400">Upcoming</Badge>
            <Badge variant="outline" className="border-purple-500 text-purple-400">Future</Badge>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          {projects.map((project, index) => {
            const getPhaseColor = (phase: string) => {
              switch (phase) {
                case "Current": return "border-green-500 bg-green-950/30";
                case "Completed": return "border-emerald-500 bg-gradient-to-br from-emerald-950/40 to-teal-950/40";
                case "Priority": return "border-blue-500 bg-blue-950/30";
                case "Upcoming": return "border-yellow-500 bg-yellow-950/30";
                case "Future": return "border-purple-500 bg-purple-950/30";
                default: return "border-slate-700 bg-slate-800/50";
              }
            };

            const getProgressColor = (phase: string) => {
              switch (phase) {
                case "Current": return "bg-green-500";
                case "Completed": return "bg-gradient-to-r from-emerald-500 to-teal-500";
                case "Priority": return "bg-blue-500";
                case "Upcoming": return "bg-yellow-500";
                case "Future": return "bg-purple-500";
                default: return "bg-slate-500";
              }
            };

            return (
              <Card key={index} className={`${getPhaseColor(project.phase)} border-2 hover:bg-opacity-70 transition-all duration-300 hover:scale-[1.01]`}>
                <div className="p-6">
                  {/* Project Header with Phase */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={`${project.phase === "Current" ? "border-green-400 text-green-400" : project.phase === "Completed" ? "border-emerald-400 text-emerald-400 bg-emerald-400/10" : project.phase === "Priority" ? "border-blue-400 text-blue-400" : project.phase === "Upcoming" ? "border-yellow-400 text-yellow-400" : "border-purple-400 text-purple-400"} font-mono text-xs`}>
                        {project.phase}
                      </Badge>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                    <Badge variant={project.status === "In Progress" ? "default" : project.status === "Completed" ? "secondary" : "outline"}>
                      {project.status}
                    </Badge>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-slate-300">Progress</span>
                      <span className="text-sm text-slate-300">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`${getProgressColor(project.phase)} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-slate-600 text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats and Links */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Activity className="w-4 h-4" />
                        <span className="text-sm capitalize">{project.status}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        className="p-2 text-slate-400 hover:text-white transition-colors"
                        onClick={() => window.open(project.github, '_blank')}
                        disabled={project.github === "#"}
                      >
                        <Github className="w-4 h-4" />
                      </button>
                      {project.demo && (
                        <button 
                          className="p-2 text-slate-400 hover:text-white transition-colors"
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Development Achievement Summary */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 border-slate-600 border-dashed">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">Development Achievements</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                  <h4 className="text-emerald-400 font-semibold">Banking Security Platform</h4>
                  <p className="text-slate-400 text-sm">AI-powered fraud detection system completed</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                  <h4 className="text-emerald-400 font-semibold">NetGuard ML</h4>
                  <p className="text-slate-400 text-sm">Network security simulator with ML threat detection</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                  <h4 className="text-emerald-400 font-semibold">NetLab V2</h4>
                  <p className="text-slate-400 text-sm">Enterprise cyber range platform for training and research</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 font-bold">⚡</span>
                  </div>
                  <h4 className="text-green-400 font-semibold">SpecialistAI System</h4>
                  <p className="text-slate-400 text-sm">Multi-agent AI system currently in development</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}