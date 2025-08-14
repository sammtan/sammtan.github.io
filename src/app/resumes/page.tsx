'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, FileText, Download, Calendar, Target, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ResumesPage() {
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  useEffect(() => {
    document.title = "CV & Resume Collection - Samuel Tan";
  }, []);

  const resumeData = [
    {
      id: 'cybersecurity-intern',
      title: 'Cybersecurity Intern',
      description: 'Comprehensive security analyst role focusing on network security, threat detection, and enterprise security architecture. Perfect for SOC positions.',
      tags: ['Network Security', 'Threat Detection', 'SIEM', 'Incident Response'],
      primaryColor: 'from-red-600/80 to-red-700/80',
      borderColor: 'border-red-500/50',
      lastUpdated: '2025-01-14',
      filename: 'cybersecurity-intern.pdf',
      icon: '🛡️',
      targetCompanies: ['Banks', 'Financial Institutions', 'Enterprise Security']
    },
    {
      id: 'master-complete',
      title: 'Master Complete',
      description: 'Comprehensive resume containing all skills, projects, and certifications. Perfect for showcasing complete technical expertise across all domains and career paths.',
      tags: ['Complete Portfolio', 'All Skills', '15+ Certifications', 'Comprehensive'],
      primaryColor: 'from-amber-600/80 to-amber-700/80',
      borderColor: 'border-amber-500/50',
      lastUpdated: '2025-01-14',
      filename: 'master-complete.pdf',
      icon: '📜',
      targetCompanies: ['Any Position', 'Complete Overview', 'Portfolio Showcase']
    },
    {
      id: 'ai-ml-security-intern',
      title: 'AI/ML Security Intern',
      description: 'Advanced resume showcasing machine learning applications in cybersecurity, fraud detection systems, and intelligent threat analysis. Perfect for AI-driven security roles.',
      tags: ['Machine Learning', 'AI Security', 'Fraud Detection', 'Behavioral Analytics'],
      primaryColor: 'from-purple-600/80 to-purple-700/80',
      borderColor: 'border-purple-500/50',
      lastUpdated: '2025-01-14',
      filename: 'ai-ml-security-intern.pdf',
      icon: '🤖',
      targetCompanies: ['Tech Companies', 'AI Startups', 'Banking Technology']
    },
    {
      id: 'network-security-intern',
      title: 'Network Security Intern',
      description: 'CCNA-certified network security specialist resume emphasizing enterprise networking, VLAN segmentation, and network infrastructure security.',
      tags: ['Network Architecture', 'CCNA Certified', 'VLAN Segmentation', 'Infrastructure'],
      primaryColor: 'from-blue-600/80 to-blue-700/80',
      borderColor: 'border-blue-500/50',
      lastUpdated: '2025-01-14',
      filename: 'network-security-intern.pdf',
      icon: '🌐',
      targetCompanies: ['ISPs', 'Network Infrastructure', 'Telecom Companies']
    },
    {
      id: 'penetration-testing-intern',
      title: 'Penetration Testing Intern',
      description: 'Ethical hacking resume highlighting CVE research, vulnerability assessment, and practical penetration testing experience.',
      tags: ['Ethical Hacking', 'CVE Research', 'Vulnerability Assessment', 'Red Team'],
      primaryColor: 'from-orange-600/80 to-orange-700/80',
      borderColor: 'border-orange-500/50',
      lastUpdated: '2025-01-14',
      filename: 'penetration-testing-intern.pdf',
      icon: '🔍',
      targetCompanies: ['Security Companies', 'Consulting Firms', 'Cyber Ranges']
    },
    {
      id: 'software-development-intern',
      title: 'Software Development Intern',
      description: 'Full-stack development resume featuring modern web technologies, system architecture, and production-ready applications.',
      tags: ['Full-Stack', 'React/Next.js', 'Python', 'System Architecture'],
      primaryColor: 'from-emerald-600/80 to-emerald-700/80',
      borderColor: 'border-emerald-500/50',
      lastUpdated: '2025-01-14',
      filename: 'software-development-intern.pdf',
      icon: '💻',
      targetCompanies: ['Software Companies', 'Startups', 'Tech Enterprises']
    }
  ];

  const handlePDFView = (filename: string) => {
    // Open PDF in new tab with 175% zoom
    const pdfUrl = `/resumes/${filename}#zoom=175`;
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = (filename: string, title: string) => {
    const link = document.createElement('a');
    link.href = `/resumes/${filename}`;
    link.download = `Samuel_Tan_${title.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="resume-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
              <path d="M10 0v20M0 10h20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-white" />
              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#resume-pattern)" />
        </svg>
      </div>

      {/* Header */}
      <div className="relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="relative px-6 py-12">
          <button
            onClick={() => router.back()}
            className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Portfolio
          </button>

          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
              CV & Resume Collection
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
              Specialized resumes tailored for different internship positions and career paths. Each version highlights relevant skills and experiences for specific roles and industries.
            </p>
          </div>
        </div>
      </div>

      {/* Resume Cards Grid */}
      <div className="relative z-10 px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {resumeData.map((resume) => (
              <Card
                key={resume.id}
                className={`group relative bg-slate-800/50 backdrop-blur-sm border ${resume.borderColor} rounded-xl p-6 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden cursor-pointer ${selectedCard === resume.id ? 'ring-2 ring-white/20 scale-105' : ''
                  }`}
                onClick={() => setSelectedCard(selectedCard === resume.id ? null : resume.id)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${resume.primaryColor} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-xl">
                        {resume.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white leading-tight">{resume.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                          <Calendar className="w-3 h-3" />
                          <span>Updated {resume.lastUpdated}</span>
                        </div>
                      </div>
                    </div>

                    <Badge className="text-xs bg-slate-700/50 text-slate-300 border-slate-600/30">
                      PDF
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4 min-h-[4rem]">
                    {resume.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resume.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-slate-700/50 text-slate-300 text-xs px-2 py-1 rounded-full border border-slate-600/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Target Companies */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-3 h-3 text-slate-400" />
                      <span className="text-xs text-slate-400 font-medium">Target Companies:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {resume.targetCompanies.map((company, index) => (
                        <span
                          key={index}
                          className="text-xs bg-slate-800/50 text-slate-400 px-2 py-0.5 rounded-full"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePDFView(resume.filename);
                      }}
                      className="flex items-center justify-center gap-2 bg-slate-700/50 hover:bg-slate-700 text-white text-sm py-2 px-3 rounded-lg transition-colors duration-300 group/btn"
                    >
                      <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      View
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(resume.filename, resume.title);
                      }}
                      className={`flex items-center justify-center gap-2 bg-gradient-to-r ${resume.primaryColor} hover:opacity-90 text-white text-sm py-2 px-3 rounded-lg transition-all duration-300 group/btn`}
                    >
                      <Download className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      Download
                    </button>
                  </div>

                </div>

                {/* Card Border Glow Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${resume.primaryColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
              </Card>
            ))}
          </div>

          {/* About These Resumes */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                Tailored for Excellence
              </h2>
              <div className="space-y-3 text-sm text-slate-300">
                <p>
                  Each resume has been carefully crafted to highlight the most relevant skills and experiences for specific roles and industries. This targeted approach ensures that hiring managers immediately see the value I can bring to their organization.
                </p>
                <p>
                  <strong>🏆 15+ Professional Certifications</strong> including Cisco Ethical Hacker, CCNA Enterprise, and MongoDB specializations are strategically emphasized based on role requirements.
                </p>
                <p>
                  <strong>🚀 Production-Ready Projects</strong> like NetLab V2 cyber range and banking security platforms demonstrate real-world impact and technical expertise.
                </p>
                <p>
                  <strong>📱 Optimized Format:</strong> All resumes are ATS-compatible and open with enhanced readability for both digital review and printing.
                </p>
              </div>
            </Card>
          </div>

          {/* Statistics */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">6</div>
              <div className="text-slate-400 text-sm">Specialized Versions</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl">
              <div className="text-2xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-slate-400 text-sm">Professional Certifications</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl">
              <div className="text-2xl font-bold text-emerald-400 mb-2">100%</div>
              <div className="text-slate-400 text-sm">ATS Compatible</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}