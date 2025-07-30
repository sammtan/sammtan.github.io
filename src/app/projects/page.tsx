"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, Activity } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "CyberTools - Security Analysis Suite",
      description: "📦 Published on GitHub - Comprehensive cybersecurity analysis platform integrating 7 professional security tools (SSL Analyzer, Port Scanner, DNS Resolver, Packet Sniffer, Hash Cracker, Forensics Extractor, Log Parser) with both CLI and GUI interfaces. Features cross-platform CMake build system, directory-agnostic tool detection, Qt6 professional interface, and real-time execution monitoring.",
      tech: ["C++17", "Qt6", "Python", "Go", "CMake", "Windows API"],
      status: "Completed",
      stars: 0,
      github: "https://github.com/sammtan/cybersuite-security-tools",
      demo: "/tools",
      phase: "Level 1",
      progress: 100
    },
    {
      title: "AI-Powered Security Scanner",
      description: "Next-generation security platform enhanced with custom AI/ML models for intelligent threat detection, automated vulnerability analysis, and real-time decision making across all security domains.",
      tech: ["Python", "TensorFlow", "PyTorch", "CUDA", "FastAPI", "PostgreSQL"],
      status: "Planning",
      stars: 0,
      github: "#",
      demo: null,
      phase: "Level 2",
      progress: 0
    },
    {
      title: "Embedded AI Security System",
      description: "Real-time AI-powered security system deployed on embedded devices (ESP32, STM32) for edge computing threat detection and autonomous response in IoT environments.",
      tech: ["C++", "TensorFlow Lite", "ESP32", "STM32", "CUDA", "Edge AI"],
      status: "Planned",
      stars: 0,
      github: "#",
      demo: null,
      phase: "Level 3",
      progress: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
          <p className="text-slate-300 text-lg">Progressive cybersecurity platform development: from unified tools to AI-powered analysis to embedded real-time systems.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="border-blue-500 text-blue-400">Level 1: Platform Unification</Badge>
            <Badge variant="outline" className="border-purple-500 text-purple-400">Level 2: AI Integration</Badge>
            <Badge variant="outline" className="border-green-500 text-green-400">Level 3: Embedded Deployment</Badge>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          {projects.map((project, index) => {
            const getPhaseColor = (phase: string) => {
              switch (phase) {
                case "Level 1": return "border-blue-500 bg-blue-950/30";
                case "Level 2": return "border-purple-500 bg-purple-950/30";
                case "Level 3": return "border-green-500 bg-green-950/30";
                default: return "border-slate-700 bg-slate-800/50";
              }
            };

            const getProgressColor = (phase: string) => {
              switch (phase) {
                case "Level 1": return "bg-blue-500";
                case "Level 2": return "bg-purple-500";
                case "Level 3": return "bg-green-500";
                default: return "bg-slate-500";
              }
            };

            return (
              <Card key={index} className={`${getPhaseColor(project.phase)} border-2 hover:bg-opacity-70 transition-all duration-300 hover:scale-[1.01]`}>
                <div className="p-6">
                  {/* Project Header with Phase */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={`${project.phase === "Level 1" ? "border-blue-400 text-blue-400" : project.phase === "Level 2" ? "border-purple-400 text-purple-400" : "border-green-400 text-green-400"} font-mono text-xs`}>
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

        {/* Roadmap Section */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 border-slate-600 border-dashed">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">Development Roadmap</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 font-bold">1</span>
                  </div>
                  <h4 className="text-blue-400 font-semibold">Platform Unification</h4>
                  <p className="text-slate-400 text-sm">Integrate all 7 security tools into unified platform</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-purple-400 font-bold">2</span>
                  </div>
                  <h4 className="text-purple-400 font-semibold">AI Integration</h4>
                  <p className="text-slate-400 text-sm">Add custom AI models for intelligent analysis</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 font-bold">3</span>
                  </div>
                  <h4 className="text-green-400 font-semibold">Embedded Deployment</h4>
                  <p className="text-slate-400 text-sm">Real-time edge AI security systems</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}