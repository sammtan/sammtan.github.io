import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Terminal, Code, Shield, Network, Database, Github, ExternalLink, Clock } from "lucide-react";

export default function ToolsPage() {
  const toolCategories = [
    {
      title: "Security Tools",
      icon: Shield,
      tools: [
        {
          name: "Port Scanner Pro",
          description: "Advanced network port scanning with stealth capabilities",
          language: "Python",
          size: "2.3 MB",
          downloads: 0,
          status: "coming_soon"
        },
        {
          name: "Hash Cracker",
          description: "Multi-algorithm hash cracking utility with dictionary support",
          language: "C++",
          size: "5.1 MB", 
          downloads: 0,
          status: "coming_soon"
        },
        {
          name: "SSL Analyzer",
          description: "Comprehensive SSL/TLS certificate analysis with web interface and vulnerability detection",
          language: "Python",
          size: "2.1 MB",
          downloads: 0,
          status: "available",
          github: "https://github.com/sammtan/ssl-analyzer",
        }
      ]
    },
    {
      title: "Network Utilities",
      icon: Network,
      tools: [
        {
          name: "Packet Sniffer",
          description: "Real-time network traffic analysis and monitoring",
          language: "Python", 
          size: "3.2 MB",
          downloads: 0,
          status: "coming_soon"
        },
        {
          name: "DNS Resolver",
          description: "Advanced DNS lookup tool with recursive resolution",
          language: "Go",
          size: "4.5 MB",
          downloads: 0,
          status: "coming_soon"
        }
      ]
    },
    {
      title: "Data Analysis",
      icon: Database,
      tools: [
        {
          name: "Log Parser",
          description: "Intelligent log file analysis and pattern recognition",
          language: "Python",
          size: "2.7 MB",
          downloads: 0,
          status: "coming_soon"
        },
        {
          name: "Forensics Extractor",
          description: "Digital evidence extraction and metadata analysis",
          language: "Python",
          size: "6.3 MB",
          downloads: 0,
          status: "coming_soon"
        }
      ]
    }
  ];

  const getLanguageColor = (language: string) => {
    switch (language) {
      case "Python": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "C++": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "Go": return "bg-cyan-500/20 text-cyan-300 border-cyan-500/30";
      default: return "bg-slate-500/20 text-slate-300 border-slate-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Tools & Utilities</h1>
          <p className="text-slate-300 text-lg">Collection of custom-built security tools, network utilities, and automation scripts.</p>
        </div>

        {/* Tools by Category */}
        <div className="space-y-8">
          {toolCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-slate-400" />
                <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <Card key={toolIndex} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02]">
                    <div className="p-5">
                      {/* Tool Header */}
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                        <Terminal className="w-5 h-5 text-slate-400" />
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">{tool.description}</p>

                      {/* Language Badge and Status */}
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={`text-xs ${getLanguageColor(tool.language)}`}>
                          <Code className="w-3 h-3 mr-1" />
                          {tool.language}
                        </Badge>
                        {tool.status === "available" && (
                          <Badge className="text-xs bg-green-500/20 text-green-300 border-green-500/30">
                            Available
                          </Badge>
                        )}
                        {tool.status === "coming_soon" && (
                          <Badge className="text-xs bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                            <Clock className="w-3 h-3 mr-1" />
                            Coming Soon
                          </Badge>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                        <span>{tool.size}</span>
                        <span>{tool.downloads.toLocaleString()} downloads</span>
                      </div>

                      {/* Action Buttons */}
                      {tool.status === "available" ? (
                        <div className="space-y-2">
                          {tool.github && (
                            <a 
                              href={tool.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                              <Github className="w-4 h-4" />
                              View on GitHub
                            </a>
                          )}
                        </div>
                      ) : (
                        <button 
                          disabled 
                          className="w-full bg-slate-600/50 text-slate-400 py-2 px-4 rounded-md cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          <Clock className="w-4 h-4" />
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12">
          <Card className="bg-slate-800/30 border-slate-700 border-dashed">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">📋 Usage Note</h3>
              <p className="text-slate-400 text-sm">All tools are provided for educational and authorized security testing purposes only. Please ensure you have proper authorization before using these tools on any systems.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}