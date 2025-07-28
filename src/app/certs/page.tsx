'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, X, Calendar, Hash } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CertsPage() {
  const router = useRouter();
  const [showPdfDialog, setShowPdfDialog] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);
  const [selectedPdf, setSelectedPdf] = useState<{name: string, path: string} | null>(null);

  useEffect(() => {
    // Load Credly embed script
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Re-initialize Credly script when dialog closes to fix disappearing badges
  useEffect(() => {
    if (!showPdfDialog && typeof window !== 'undefined') {
      // Force re-execution of Credly script
      setTimeout(() => {
        const script = document.createElement('script');
        script.src = '//cdn.credly.com/assets/utilities/embed.js';
        script.async = true;
        document.head.appendChild(script);
      }, 100);
    }
  }, [showPdfDialog]);


  // Helper function to get appropriate icon for certification type
  const getCertIcon = (category: string) => {
    if (category.toLowerCase().includes('cisco') || category.toLowerCase().includes('ccna')) return '🌐';
    if (category.toLowerCase().includes('mongodb')) return '🍃';
    if (category.toLowerCase().includes('ibm') || category.toLowerCase().includes('design')) return '💎';
    if (category.toLowerCase().includes('ethical') || category.toLowerCase().includes('hacker')) return '🔒';
    if (category.toLowerCase().includes('cybersecurity') || category.toLowerCase().includes('workshop')) return '🛡️';
    return '📜';
  };

  const certifications = [
    // Ethical Hacker Credly badge - moved to first
    {
      id: "2aae93c2-06b9-4786-9bf6-fa43c751c423",
      title: "Ethical Hacker - Cisco",
      category: "Ethical Hacker",
      tags: ["Penetration Testing", "Security Assessment", "Vulnerability Analysis"],
      credlyUrl: "https://www.credly.com/badges/2aae93c2-06b9-4786-9bf6-fa43c751c423",
      isCredly: true,
      pdfs: [
        { name: "Ethical Hacker Update", path: "/certs/pdfs/ethical-hacker-1.pdf" },
        { name: "Ethical Hacker Certificate", path: "/certs/pdfs/ethical-hacker-2.pdf" }
      ]
    },

    // CCNA: Introduction to Networks Credly badge
    {
      id: "c78d12e8-ac41-46f8-bf16-3cc3f04b20ac",
      title: "CCNA: Introduction to Networks",
      category: "CCNA ITN", 
      tags: ["Network Fundamentals", "OSI Model", "TCP/IP", "Routing", "Switching", "Network Protocols"],
      credlyUrl: "https://www.credly.com/badges/c78d12e8-ac41-46f8-bf16-3cc3f04b20ac",
      isCredly: true,
      pdfs: [
        { name: "CCNA ITN Certificate", path: "/certs/pdfs/ccna-itn.pdf" }
      ]
    },

    // CCNA: Enterprise Network, Security, and Automation Credly badge
    {
      id: "dcd6a085-484f-4da9-8fc8-e5b81163f264",
      title: "CCNA: Enterprise Network, Security, and Automation",
      category: "CCNA ENSA",
      tags: ["Enterprise Networking", "Network Security", "Automation", "VLAN Management", "Access Control", "Network Protocols"],
      credlyUrl: "https://www.credly.com/badges/dcd6a085-484f-4da9-8fc8-e5b81163f264",
      isCredly: true,
      pdfs: [
        { name: "CCNA ENSA Update", path: "/certs/pdfs/ccna-ensa-update.pdf" },
        { name: "CCNA Enterprise Certificate", path: "/certs/pdfs/ccna-ensa-certificate.pdf" },
        { name: "CCNA 3 ENSA Letter", path: "/certs/pdfs/ccna-ensa-letter.pdf" },
        { name: "CCNA 3 ENSA Certificate", path: "/certs/pdfs/ccna-ensa-dm-certificate.pdf" }
      ]
    },

    // MongoDB Cards
    {
      id: "fef8aa88-15a0-480d-8d53-ead90ff5af93",
      title: "MongoDB AI-Powered Search",
      category: "MongoDB AI Search",
      tags: ["Vector Search", "AI Integration", "Database Search", "Machine Learning"],
      credlyUrl: "https://www.credly.com/badges/fef8aa88-15a0-480d-8d53-ead90ff5af93",
      isCredly: true,
      pdfs: [
        { name: "MongoDB AI Search Certificate", path: "/certs/pdfs/mongodb-ai-search.pdf" }
      ]
    },
    {
      id: "30b1d476-7a2d-47c9-94a3-6d34f9f76d1f",
      title: "MongoDB RAG Applications",
      category: "MongoDB RAG",
      tags: ["RAG Architecture", "Retrieval Systems", "Document Processing", "AI Applications"],
      credlyUrl: "https://www.credly.com/badges/30b1d476-7a2d-47c9-94a3-6d34f9f76d1f",
      isCredly: true,
      pdfs: [
        { name: "MongoDB RAG Apps Certificate", path: "/certs/pdfs/mongodb-rag-apps.pdf" }
      ]
    },
    {
      id: "c6fffd42-2bc2-436e-94f4-790d21b39914",
      title: "MongoDB CRUD Operations",
      category: "MongoDB CRUD",
      tags: ["Database Operations", "Data Manipulation", "MongoDB Queries", "Document Management"],
      credlyUrl: "https://www.credly.com/badges/c6fffd42-2bc2-436e-94f4-790d21b39914",
      isCredly: true,
      pdfs: [
        { name: "MongoDB CRUD Certificate", path: "/certs/pdfs/mongodb-crud.pdf" }
      ]
    },
    {
      id: "d21619e9-c1a5-4a84-be7a-31500d315007",
      title: "MongoDB Relational to Document Model",
      category: "MongoDB Migration",
      tags: ["Data Migration", "Schema Conversion", "Relational to NoSQL", "Database Design"],
      credlyUrl: "https://www.credly.com/badges/d21619e9-c1a5-4a84-be7a-31500d315007",
      isCredly: true,
      pdfs: [
        { name: "MongoDB Relational Model Certificate", path: "/certs/pdfs/mongodb-relational.pdf" }
      ]
    },
    {
      id: "b77476c6-23e3-4ea2-883a-57f01a06ebd5",
      title: "MongoDB Advanced Schema Design",
      category: "MongoDB Schema",
      tags: ["Advanced Schema", "Design Patterns", "Performance Optimization", "Data Modeling"],
      credlyUrl: "https://www.credly.com/badges/b77476c6-23e3-4ea2-883a-57f01a06ebd5",
      isCredly: true,
      pdfs: [
        { name: "MongoDB Advanced Schema Certificate", path: "/certs/pdfs/mongodb-advanced-schema.pdf" }
      ]
    },
    {
      id: "977c7d95-676e-4ca1-832b-56761d5afe7d",
      title: "MongoDB Schema Design Optimization",
      category: "MongoDB Optimization",
      tags: ["Schema Optimization", "Performance Tuning", "Database Efficiency", "Query Optimization"],
      credlyUrl: "https://www.credly.com/badges/977c7d95-676e-4ca1-832b-56761d5afe7d",
      isCredly: true,
      pdfs: [
        { name: "MongoDB Schema Optimization Certificate", path: "/certs/pdfs/mongodb-schema-optimization.pdf" }
      ]
    },
    {
      id: "7c347caa-eb65-409e-b075-d7644a70553c",
      title: "MongoDB Schema Design Patterns",
      category: "MongoDB Patterns",
      tags: ["Design Patterns", "Anti-patterns", "Best Practices", "Schema Architecture"],
      credlyUrl: "https://www.credly.com/badges/7c347caa-eb65-409e-b075-d7644a70553c",
      isCredly: true,
      pdfs: [
        { name: "MongoDB Schema Patterns Certificate", path: "/certs/pdfs/mongodb-schema-patterns.pdf" }
      ]
    },

    // IBM Cards
    {
      id: "374de6ef-74b9-401d-99bf-90bdecd31e5a",
      title: "IBM Design Thinking Practitioner",
      category: "IBM Design",
      tags: ["Design Thinking", "User Experience", "Innovation Process", "Problem Solving"],
      credlyUrl: "https://www.credly.com/badges/374de6ef-74b9-401d-99bf-90bdecd31e5a",
      isCredly: true,
      pdfs: [
        { name: "IBM Design Certificate 1", path: "/certs/pdfs/ibm-design-1.pdf" }
      ]
    },
    {
      id: "850ca4d4-09c7-4674-b920-dcc8b77fcc2c",
      title: "IBM Design Thinking Co-Creator",
      category: "IBM Design",
      tags: ["Design Co-Creation", "Collaborative Design", "Team Innovation", "Design Leadership"],
      credlyUrl: "https://www.credly.com/badges/850ca4d4-09c7-4674-b920-dcc8b77fcc2c",
      isCredly: true,
      pdfs: [
        { name: "IBM Design Certificate 2", path: "/certs/pdfs/ibm-design-2.pdf" }
      ]
    },

    // Workshop certificates
    {
      id: "hacktrace-workshop-1",
      title: "Hacktrace Ranges x Spentera Cybersecurity Workshops #1: Cybersecurity Fundamentals",
      category: "Cybersecurity Fundamentals",
      tags: ["Security Basics", "Threat Analysis", "Defense Strategies"],
      certificateNumber: "2020/UN2.F4.D2.1.2/PDP.00.07.01/2024",
      date: "11 July 2024",
      credlyUrl: null,
      isCustom: true,
      pdfs: [
        { name: "Workshop #1 Certificate", path: "/certs/pdfs/Samuel Tanaka Sibarani - E-Sertifikat Cybersecurity Workshop Series #1 (11072024).pdf" }
      ]
    },
    {
      id: "hacktrace-workshop-2",
      title: "Hacktrace Ranges x Spentera Cybersecurity Workshops #2: Penetration Testing Basic: Practical Skills for Cyber Security Enthusiasts",
      category: "Penetration Testing",
      tags: ["Pentesting", "Vulnerability Assessment", "Ethical Hacking"],
      certificateNumber: "2472/UN2.F4.D2.1.2/PDP.00.07.01/2024",
      date: "17 October 2024",
      credlyUrl: null,
      isCustom: true,
      pdfs: [
        { name: "Workshop #2 Certificate", path: "/certs/pdfs/E-Certificate of Cyber Security Series #2 (17102024) - Samuel Tanaka Sibarani.pdf" }
      ]
    },
    {
      id: "hacktrace-workshop-6",
      title: "Hacktrace Ranges x Spentera Cybersecurity Workshops #6: Ghidra Reverse Engineering",
      category: "Reverse Engineering",
      tags: ["Ghidra", "Malware Analysis", "Binary Analysis"],
      certificateNumber: "1060/UN2.F4.D2.1.2/PDP.00.07.01/2025",
      date: "22 April 2025",
      credlyUrl: null,
      isCustom: true,
      pdfs: [
        { name: "Workshop #6 Certificate", path: "/certs/pdfs/E-Certificate of CSW#6 - Samuel Tanaka Sibarani.pdf" }
      ]
    },
    {
      id: "hacktrace-workshop-7",
      title: "Hacktrace Ranges x Spentera Cybersecurity Workshops #7: Wireless Hacking Lab - Exploring Security Risks in Wi-Fi Networks",
      category: "Wireless Security",
      tags: ["Wi-Fi Security", "Wireless Attacks", "Network Hacking"],
      certificateNumber: "1303/UN2.F4.D2.1.2/PDP.00.07.01/2025",
      date: "27 May 2025",
      credlyUrl: null,
      isCustom: true,
      pdfs: [
        { name: "Workshop #7 Certificate", path: "/certs/pdfs/E-Certificate of CSW #7 - Samuel Tanaka Sibarani.pdf" }
      ]
    }
  ];

  // Add placeholder card
  const allCertifications = [
    ...certifications,
    {
      id: "more-coming",
      category: "Coming Soon",
      credlyUrl: null,
      pdfs: [],
      isPlaceholder: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="relative px-6 py-12">
          <button
            onClick={() => router.back()}
            className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Portfolio
          </button>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
              Certifications
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Professional cybersecurity certifications and achievements that validate my expertise 
              in security analysis, penetration testing, and defense strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allCertifications.map((cert) => (
              <div
                key={cert.id}
                className={`cert-card group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 ${
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (cert as any).isPlaceholder ? 'border-dashed border-slate-600/30' : ''
                }`}
              >
                {/* Category Badge */}
                <div className={`absolute -top-2 -right-2 bg-gradient-to-r text-xs font-semibold px-3 py-1 rounded-full text-white shadow-lg ${
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (cert as any).isPlaceholder ? 'from-slate-600 to-slate-700' : 'from-blue-600 to-blue-700'
                }`}>
                  {cert.category}
                </div>

                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {(cert as any).isPlaceholder ? (
                  /* Placeholder Content */
                  <div className="flex flex-col items-center justify-center h-[270px] text-center">
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-500 flex items-center justify-center mb-4">
                      <div className="text-2xl text-slate-500">+</div>
                    </div>
                    <div className="text-slate-400 font-medium mb-2">More to come...</div>
                    <div className="text-slate-500 text-sm">Additional certifications will be added here</div>
                  </div>
                ) : 
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                (cert as any).isCustom ? (
                  /* Custom Certificate Content */
                  <>
                    <div className="flex flex-col min-h-[270px] p-2">
                      {/* Header with icon and title */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                          <div className="text-xl text-white">{getCertIcon(cert.category)}</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-semibold text-sm leading-tight mb-1">{cert.category}</div>
                          <div className="text-slate-400 text-xs">{cert.pdfs.length} document{cert.pdfs.length !== 1 ? 's' : ''}</div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {(cert as any).tags && (cert as any).tags.map((tag: string, index: number) => (
                          <span key={index} className="inline-block bg-slate-700/50 text-slate-300 text-xs px-2 py-1 rounded-full border border-slate-600/30">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Certificate info */}
                      <div className="space-y-2 mb-4 flex-1">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {(cert as any).date && (
                          <div className="flex items-center gap-2 text-slate-400 text-xs">
                            <Calendar className="w-3 h-3" />
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            <span>{(cert as any).date}</span>
                          </div>
                        )}
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {(cert as any).certificateNumber && (
                          <div className="flex items-center gap-2 text-slate-400 text-xs group/tooltip relative">
                            <Hash className="w-3 h-3" />
                            <span className="cursor-help">Certificate #</span>
                            <div className="absolute bottom-full left-0 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                              {(cert as any).certificateNumber}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Add button for all CSW cards */}
                      {cert.id.startsWith("hacktrace-workshop-") && (
                        <div className="mt-4">
                          <button 
                            onClick={() => {
                              setSelectedWorkshop(cert.id);
                              setShowPdfDialog(true);
                            }}
                            className="w-full flex items-center justify-center gap-2 bg-blue-600/80 hover:bg-blue-600 text-white text-sm py-2 px-3 rounded-lg transition-colors duration-300"
                          >
                            View Certificate
                          </button>
                        </div>
                      )}

                    </div>
                  </>
                ) : 
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                (cert as any).isCredly ? (
                  /* Credly Badge Content */
                  <>
                    <div className="flex flex-col min-h-[270px] p-2">
                      {/* Title */}
                      <div className="text-center mb-2">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        <div className="text-white font-semibold text-sm">{(cert as any).title}</div>
                      </div>

                      {/* Credly Badge Embed */}
                      <div className="flex justify-center mb-3 flex-1">
                        <div 
                          className="credly-embed-container"
                          dangerouslySetInnerHTML={{
                            __html: `<div data-iframe-width="150" data-iframe-height="200" data-share-badge-id="${cert.id}" data-share-badge-host="https://www.credly.com"></div>`
                          }}
                        />
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {(cert as any).tags && (cert as any).tags.map((tag: string, index: number) => (
                          <span key={index} className="inline-block bg-slate-700/50 text-slate-300 text-xs px-2 py-1 rounded-full border border-slate-600/30">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button 
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          onClick={() => window.open((cert as any).credlyUrl, '_blank')}
                          className="flex-1 flex items-center justify-center gap-2 bg-slate-700/50 hover:bg-slate-700 text-white text-sm py-2 px-3 rounded-lg transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Badge
                        </button>
                        <button 
                          onClick={() => {
                            setSelectedWorkshop(cert.id);
                            setShowPdfDialog(true);
                          }}
                          className="flex-1 flex items-center justify-center gap-2 bg-red-600/80 hover:bg-red-600 text-white text-sm py-2 px-3 rounded-lg transition-colors duration-300"
                        >
                          PDF
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Other Credly badges (if any) */}
                    <div className="flex justify-center mb-4">
                      <div 
                        className="credly-embed-container"
                        dangerouslySetInnerHTML={{
                          __html: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="${cert.id}" data-share-badge-host="https://www.credly.com"></div>`
                        }}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl">
              <div className="text-3xl font-bold text-white mb-2">{certifications.length}</div>
              <div className="text-slate-400">Active Certifications</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">12+</div>
              <div className="text-slate-400">Security Domains</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl">
              <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
              <div className="text-slate-400">Verified Credentials</div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Dialog */}
      {showPdfDialog && selectedWorkshop && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 w-full max-w-4xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">
                {selectedWorkshop === "hacktrace-workshop-1" && "CSW #1 Certificate"}
                {selectedWorkshop === "hacktrace-workshop-2" && "CSW #2 Certificate"}
                {selectedWorkshop === "hacktrace-workshop-6" && "CSW #6 Certificate"}
                {selectedWorkshop === "hacktrace-workshop-7" && "CSW #7 Certificate"}
                {selectedWorkshop === "2aae93c2-06b9-4786-9bf6-fa43c751c423" && "Ethical Hacker Certificates"}
                {selectedWorkshop === "c78d12e8-ac41-46f8-bf16-3cc3f04b20ac" && "CCNA ITN Certificate"}
                {selectedWorkshop === "dcd6a085-484f-4da9-8fc8-e5b81163f264" && "CCNA ENSA Certificates"}
                {selectedWorkshop === "fef8aa88-15a0-480d-8d53-ead90ff5af93" && "MongoDB AI Search Certificate"}
                {selectedWorkshop === "30b1d476-7a2d-47c9-94a3-6d34f9f76d1f" && "MongoDB RAG Apps Certificate"}
                {selectedWorkshop === "c6fffd42-2bc2-436e-94f4-790d21b39914" && "MongoDB CRUD Certificate"}
                {selectedWorkshop === "d21619e9-c1a5-4a84-be7a-31500d315007" && "MongoDB Relational Model Certificate"}
                {selectedWorkshop === "b77476c6-23e3-4ea2-883a-57f01a06ebd5" && "MongoDB Advanced Schema Certificate"}
                {selectedWorkshop === "977c7d95-676e-4ca1-832b-56761d5afe7d" && "MongoDB Schema Optimization Certificate"}
                {selectedWorkshop === "7c347caa-eb65-409e-b075-d7644a70553c" && "MongoDB Schema Patterns Certificate"}
                {selectedWorkshop === "374de6ef-74b9-401d-99bf-90bdecd31e5a" && "IBM Design Thinking Practitioner Certificate"}
                {selectedWorkshop === "850ca4d4-09c7-4674-b920-dcc8b77fcc2c" && "IBM Design Thinking Co-Creator Certificate"}
              </h3>
              <button
                onClick={() => {
                  setShowPdfDialog(false);
                  setSelectedWorkshop(null);
                  setSelectedPdf(null);
                }}
                className="text-slate-400 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {selectedWorkshop === "dcd6a085-484f-4da9-8fc8-e5b81163f264" ? (
              /* Multiple PDFs for CCNA ENSA - Choosable */
              <div>
                {/* PDF Selection Buttons */}
                <div className="space-y-3 mb-4">
                  <button
                    onClick={() => setSelectedPdf({ name: "CCNA ENSA Update", path: "/certs/pdfs/ccna-ensa-update.pdf" })}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-300 text-left ${
                      selectedPdf?.path === "/certs/pdfs/ccna-ensa-update.pdf" ? 'bg-blue-600' : 'bg-slate-700/50 hover:bg-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-white font-medium">CCNA ENSA Update</div>
                      <div className="text-slate-400 text-sm">Updated certification document</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </button>
                  <button
                    onClick={() => setSelectedPdf({ name: "CCNA Enterprise Certificate", path: "/certs/pdfs/ccna-ensa-certificate.pdf" })}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-300 text-left ${
                      selectedPdf?.path === "/certs/pdfs/ccna-ensa-certificate.pdf" ? 'bg-blue-600' : 'bg-slate-700/50 hover:bg-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-white font-medium">CCNA Enterprise Certificate</div>
                      <div className="text-slate-400 text-sm">Main enterprise networking certificate</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </button>
                  <button
                    onClick={() => setSelectedPdf({ name: "CCNA 3 ENSA Letter", path: "/certs/pdfs/ccna-ensa-letter.pdf" })}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-300 text-left ${
                      selectedPdf?.path === "/certs/pdfs/ccna-ensa-letter.pdf" ? 'bg-blue-600' : 'bg-slate-700/50 hover:bg-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-white font-medium">CCNA 3 ENSA Letter</div>
                      <div className="text-slate-400 text-sm">Course completion letter</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </button>
                  <button
                    onClick={() => setSelectedPdf({ name: "CCNA 3 ENSA Certificate", path: "/certs/pdfs/ccna-ensa-dm-certificate.pdf" })}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-300 text-left ${
                      selectedPdf?.path === "/certs/pdfs/ccna-ensa-dm-certificate.pdf" ? 'bg-blue-600' : 'bg-slate-700/50 hover:bg-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-white font-medium">CCNA 3 ENSA Certificate</div>
                      <div className="text-slate-400 text-sm">Course completion certificate</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </button>
                </div>

                {/* PDF Viewer */}
                {selectedPdf && (
                  <div className="bg-slate-900 rounded-lg overflow-hidden">
                    <iframe
                      src={selectedPdf.path}
                      className="w-full h-96 border-0"
                      title={selectedPdf.name}
                    />
                  </div>
                )}
              </div>
            ) : selectedWorkshop === "2aae93c2-06b9-4786-9bf6-fa43c751c423" ? (
              /* Multiple PDFs for Ethical Hacker - Choosable */
              <div>
                {/* PDF Selection Buttons */}
                <div className="space-y-3 mb-4">
                  <button
                    onClick={() => setSelectedPdf({ name: "Ethical Hacker Update", path: "/certs/pdfs/ethical-hacker-1.pdf" })}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-300 text-left ${
                      selectedPdf?.path === "/certs/pdfs/ethical-hacker-1.pdf" ? 'bg-blue-600' : 'bg-slate-700/50 hover:bg-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-white font-medium">Ethical Hacker Update</div>
                      <div className="text-slate-400 text-sm">Updated certification document</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </button>
                  <button
                    onClick={() => setSelectedPdf({ name: "Ethical Hacker Certificate", path: "/certs/pdfs/ethical-hacker-2.pdf" })}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-300 text-left ${
                      selectedPdf?.path === "/certs/pdfs/ethical-hacker-2.pdf" ? 'bg-blue-600' : 'bg-slate-700/50 hover:bg-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-white font-medium">Ethical Hacker Certificate</div>
                      <div className="text-slate-400 text-sm">Original certification document</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </button>
                </div>

                {/* PDF Viewer */}
                {selectedPdf && (
                  <div className="bg-slate-900 rounded-lg overflow-hidden">
                    <iframe
                      src={selectedPdf.path}
                      className="w-full h-96 border-0"
                      title={selectedPdf.name}
                    />
                  </div>
                )}
              </div>
            ) : selectedWorkshop === "c78d12e8-ac41-46f8-bf16-3cc3f04b20ac" || 
                 selectedWorkshop === "fef8aa88-15a0-480d-8d53-ead90ff5af93" ||
                 selectedWorkshop === "30b1d476-7a2d-47c9-94a3-6d34f9f76d1f" ||
                 selectedWorkshop === "c6fffd42-2bc2-436e-94f4-790d21b39914" ||
                 selectedWorkshop === "d21619e9-c1a5-4a84-be7a-31500d315007" ||
                 selectedWorkshop === "b77476c6-23e3-4ea2-883a-57f01a06ebd5" ||
                 selectedWorkshop === "977c7d95-676e-4ca1-832b-56761d5afe7d" ||
                 selectedWorkshop === "7c347caa-eb65-409e-b075-d7644a70553c" ||
                 selectedWorkshop === "374de6ef-74b9-401d-99bf-90bdecd31e5a" ||
                 selectedWorkshop === "850ca4d4-09c7-4674-b920-dcc8b77fcc2c" ? (
              /* Single PDF for CCNA ITN and all MongoDB/IBM badges */
              <div className="bg-slate-900 rounded-lg overflow-hidden">
                <iframe
                  src={
                    selectedWorkshop === "c78d12e8-ac41-46f8-bf16-3cc3f04b20ac" ? "/certs/pdfs/ccna-itn.pdf" :
                    selectedWorkshop === "fef8aa88-15a0-480d-8d53-ead90ff5af93" ? "/certs/pdfs/mongodb-ai-search.pdf" :
                    selectedWorkshop === "30b1d476-7a2d-47c9-94a3-6d34f9f76d1f" ? "/certs/pdfs/mongodb-rag-apps.pdf" :
                    selectedWorkshop === "c6fffd42-2bc2-436e-94f4-790d21b39914" ? "/certs/pdfs/mongodb-crud.pdf" :
                    selectedWorkshop === "d21619e9-c1a5-4a84-be7a-31500d315007" ? "/certs/pdfs/mongodb-relational.pdf" :
                    selectedWorkshop === "b77476c6-23e3-4ea2-883a-57f01a06ebd5" ? "/certs/pdfs/mongodb-advanced-schema.pdf" :
                    selectedWorkshop === "977c7d95-676e-4ca1-832b-56761d5afe7d" ? "/certs/pdfs/mongodb-schema-optimization.pdf" :
                    selectedWorkshop === "7c347caa-eb65-409e-b075-d7644a70553c" ? "/certs/pdfs/mongodb-schema-patterns.pdf" :
                    selectedWorkshop === "374de6ef-74b9-401d-99bf-90bdecd31e5a" ? "/certs/pdfs/ibm-design-1.pdf" :
                    selectedWorkshop === "850ca4d4-09c7-4674-b920-dcc8b77fcc2c" ? "/certs/pdfs/ibm-design-2.pdf" :
                    ""
                  }
                  className="w-full h-96 border-0"
                  title="Certificate"
                />
              </div>
            ) : (
              /* Single PDF for workshops */
              <div className="bg-slate-900 rounded-lg overflow-hidden">
                <iframe
                  src={
                    selectedWorkshop === "hacktrace-workshop-1" ? "/certs/pdfs/csw1-certificate.pdf" :
                    selectedWorkshop === "hacktrace-workshop-2" ? "/certs/pdfs/csw2-certificate.pdf" :
                    selectedWorkshop === "hacktrace-workshop-6" ? "/certs/pdfs/csw6-certificate.pdf" :
                    selectedWorkshop === "hacktrace-workshop-7" ? "/certs/pdfs/csw7-certificate.pdf" :
                    ""
                  }
                  className="w-full h-96 border-0"
                  title="Workshop Certificate"
                />
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}