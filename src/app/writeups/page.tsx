import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Eye, Shield, Flag, AlertTriangle } from "lucide-react";

export default function WriteupsPage() {
  const writeups = [
    {
      type: "CVE",
      id: "CVE-2024-XXXX",
      title: "Buffer Overflow in Authentication Module",
      description: "Critical buffer overflow vulnerability discovered in enterprise authentication system allowing remote code execution.",
      severity: "Critical",
      score: "9.8",
      date: "2024-01-15",
      readTime: "12 min",
      views: 2847,
      tags: ["Buffer Overflow", "RCE", "Authentication", "C++"]
    },
    {
      type: "CTF",
      id: "HackTheBox",
      title: "Penetration Testing Lab - 'Epsilon'",
      description: "Complete walkthrough of advanced penetration testing challenge involving web exploitation and privilege escalation.",
      severity: "Hard",
      score: null,
      date: "2024-01-08",
      readTime: "25 min",
      views: 1523,
      tags: ["Web Exploitation", "Privilege Escalation", "SQL Injection", "Linux"]
    },
    {
      type: "CVE",
      id: "CVE-2023-YYYY",
      title: "SQL Injection in Web Application Framework",
      description: "Time-based blind SQL injection vulnerability in popular web framework affecting user authentication.",
      severity: "High",
      score: "8.1",
      date: "2023-12-22",
      readTime: "8 min",
      views: 3921,
      tags: ["SQL Injection", "Web Security", "Authentication", "PHP"]
    },
    {
      type: "CTF",
      id: "TryHackMe",
      title: "Advanced Forensics Challenge - 'Digital Detective'",
      description: "Step-by-step digital forensics investigation involving network traffic analysis and memory dump examination.",
      severity: "Medium",
      score: null,
      date: "2023-12-15",
      readTime: "18 min",
      views: 1876,
      tags: ["Digital Forensics", "Network Analysis", "Memory Dump", "Wireshark"]
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "bg-red-500/20 text-red-300 border-red-500/30";
      case "High": return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      case "Medium": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Hard": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      default: return "bg-slate-500/20 text-slate-300 border-slate-500/30";
    }
  };

  const getTypeIcon = (type: string) => {
    return type === "CVE" ? Shield : Flag;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">CVE & CTF Writeups</h1>
          <p className="text-slate-300 text-lg">Detailed security research findings, vulnerability disclosures, and capture-the-flag challenge solutions.</p>
        </div>

        {/* Writeups List */}
        <div className="space-y-6">
          {writeups.map((writeup, index) => {
            const TypeIcon = getTypeIcon(writeup.type);
            return (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.01] cursor-pointer">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <TypeIcon className="w-6 h-6 text-slate-400" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs font-mono">
                            {writeup.id}
                          </Badge>
                          <Badge className={`text-xs ${getSeverityColor(writeup.severity)}`}>
                            {writeup.severity}
                            {writeup.score && ` (${writeup.score})`}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-white">{writeup.title}</h3>
                      </div>
                    </div>
                    <AlertTriangle className="w-5 h-5 text-slate-400" />
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-4 leading-relaxed">{writeup.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {writeup.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-slate-600 text-slate-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(writeup.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{writeup.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{writeup.views.toLocaleString()}</span>
                      </div>
                    </div>
                    <span className="text-blue-400 hover:text-blue-300 transition-colors">Read More →</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-12">
          <Card className="bg-slate-800/30 border-slate-700 border-dashed">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Responsible Disclosure
              </h3>
              <p className="text-slate-400 text-sm">All vulnerabilities have been responsibly disclosed to the respective vendors and patches have been made available. CTF writeups are published only after contest completion.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}