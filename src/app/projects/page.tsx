import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "AI/ML Security Scanner",
      description: "Advanced threat detection system using machine learning algorithms to identify security vulnerabilities in real-time.",
      tech: ["Python", "TensorFlow", "Docker", "PostgreSQL"],
      status: "Active",
      stars: 127,
      github: "#",
      demo: "#"
    },
    {
      title: "Embedded IoT Security",
      description: "Secure communication protocol implementation for IoT devices with end-to-end encryption.",
      tech: ["C++", "Arduino", "ESP32", "AES"],
      status: "Completed",
      stars: 89,
      github: "#",
      demo: "#"
    },
    {
      title: "Network Forensics Tool",
      description: "Comprehensive network packet analysis tool for digital forensics investigations.",
      tech: ["Python", "Wireshark", "Scapy", "Flask"],
      status: "In Progress",
      stars: 45,
      github: "#",
      demo: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
          <p className="text-slate-300 text-lg">A collection of AI/ML, embedded systems, and security projects I&apos;ve been working on.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02]">
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <Badge variant={project.status === "Active" ? "default" : project.status === "Completed" ? "secondary" : "outline"}>
                    {project.status}
                  </Badge>
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
                  <div className="flex items-center gap-2 text-slate-400">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                    {project.demo && (
                      <button className="p-2 text-slate-400 hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12 text-center">
          <Card className="bg-slate-800/30 border-slate-700 border-dashed">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">More Projects Coming Soon</h3>
              <p className="text-slate-400">Currently working on several exciting projects in cybersecurity and machine learning.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}