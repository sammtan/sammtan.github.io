"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Shield, Flag, AlertTriangle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function WriteupsPage() {
  const router = useRouter();

  useEffect(() => {
    document.title = "CVE & CTF Writeups - samm.tan";
  }, []);
  const writeups = [
    {
      type: "CTF", 
      id: "VulnHub",
      title: "Tiki-1 - When CMS Security Goes Tiki-Toki Wrong",
      description: "Complete exploitation of Tiki CMS 21 featuring CVE-2020-15906 authentication bypass, SMB enumeration, credential harvesting, and sudo privilege escalation.",
      severity: "Beginner-Intermediate",
      score: null,
      date: "2025-08-06",
      readTime: "18 min",
      tags: ["VulnHub", "Tiki CMS", "CVE-2020-15906", "Authentication Bypass", "SMB Enumeration", "SSH"],
      slug: "tiki-1"
    },
    {
      type: "CTF",
      id: "VulnHub",
      title: "DarkHole 2 - Complete Walkthrough",
      description: "Multi-stage penetration testing of VulnHub machine involving Git repository exposure, SQL injection, port forwarding, and privilege escalation techniques.",
      severity: "Intermediate",
      score: null,
      date: "2025-08-05",
      readTime: "20 min",
      tags: ["VulnHub", "Web Exploitation", "SQL Injection", "SSH", "Port Forwarding", "Privilege Escalation"],
      slug: "darkhole-2"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-2 sm:p-4 md:p-8">
      <div className="max-w-4xl mx-auto px-2 sm:px-0">
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 break-words">CVE & CTF Writeups</h1>
          <p className="text-slate-300 text-base sm:text-lg break-words">Detailed security research findings, vulnerability disclosures, and capture-the-flag challenge solutions.</p>
        </div>

        {/* Writeups List */}
        <div className="space-y-16">
          {writeups.map((writeup, index) => {
            const TypeIcon = getTypeIcon(writeup.type);
            // Get theme colors based on writeup type/content
            const getWriteupTheme = (writeup: typeof writeups[0]) => {
              if (writeup.slug === "tiki-1") {
                return {
                  bg: "bg-gradient-to-br from-green-900/60 to-emerald-900/60",
                  border: "border-green-700/50",
                  accent: "text-green-400",
                  hover: "hover:from-green-900/80 hover:to-emerald-900/80"
                };
              }
              if (writeup.slug === "darkhole-2") {
                return {
                  bg: "bg-gradient-to-br from-red-900/60 to-orange-900/60",
                  border: "border-red-700/50",
                  accent: "text-red-400",
                  hover: "hover:from-red-900/80 hover:to-orange-900/80"
                };
              }
              // Default theme for other writeups
              return {
                bg: "bg-gradient-to-br from-slate-800/50 to-slate-900/50", 
                border: "border-slate-700",
                accent: "text-blue-400",
                hover: "hover:from-slate-800/70 hover:to-slate-900/70"
              };
            };

            const theme = getWriteupTheme(writeup);
            const CardContent = (
              <Card key={index} className={`${theme.bg} ${theme.border} ${theme.hover} transition-all duration-300 hover:scale-[1.01] cursor-pointer relative overflow-hidden mb-16`}>
                {/* Background Pattern for Tiki-1 */}
                {writeup.slug === "tiki-1" && (
                  <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 200 120" className="w-full h-full">
                      <defs>
                        <pattern id="tiki-pattern" patternUnits="userSpaceOnUse" width="30" height="30">
                          <rect x="8" y="8" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-green-400" />
                          <path d="M15 3v24M3 15h24" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-green-400" />
                          <circle cx="15" cy="15" r="2" fill="currentColor" className="text-green-400" />
                          <path d="M10 10h10v10h-10z" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-green-400" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#tiki-pattern)" />
                    </svg>
                  </div>
                )}

                {/* Background Pattern for DarkHole 2 */}
                {writeup.slug === "darkhole-2" && (
                  <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 200 120" className="w-full h-full">
                      <defs>
                        <pattern id="hack-pattern" patternUnits="userSpaceOnUse" width="40" height="40">
                          <path d="M20 5v30M5 20h30M15 15l10 10M25 15l-10 10" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-red-400" />
                          <circle cx="20" cy="20" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-red-400" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#hack-pattern)" />
                    </svg>
                  </div>
                )}
                
                <div className="p-6 relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <TypeIcon className={`w-6 h-6 ${theme.accent}`} />
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
                        <h3 className="text-lg sm:text-xl font-semibold text-white break-words">{writeup.title}</h3>
                      </div>
                    </div>
                    <AlertTriangle className="w-5 h-5 text-slate-400" />
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-4 leading-relaxed text-sm sm:text-base break-words">{writeup.description}</p>

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
                    </div>
                    <span className={`${theme.accent} hover:opacity-75 transition-colors`}>Read More →</span>
                  </div>
                </div>
              </Card>
            );

            return writeup.slug ? (
              <Link key={index} href={`/writeups/${writeup.slug}`}>
                {CardContent}
              </Link>
            ) : (
              CardContent
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