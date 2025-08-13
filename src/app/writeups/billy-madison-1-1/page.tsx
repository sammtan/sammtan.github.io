/* eslint-disable react/no-unescaped-entities */
"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Shield, Terminal, Network, Key, Flag, Eye, Search, Share2, Globe, Film, Wifi, Mail, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { WriteupNavigator } from "@/components/writeup-navigator";

export default function BillyMadisonWriteupPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Billy Madison 1.1 - When 90s Movies Meet Cybersecurity - samm.tan";
  }, []);

  // Attack chain for this specific writeup
  const attackChain = [
    {
      phase: "Network Discovery",
      description: "Discover target IP using netdiscover in Host-only network",
      icon: Network
    },
    {
      phase: "Port Scanning",
      description: "Comprehensive nmap scan reveals telnet with ROT13-encoded clues",
      icon: Search
    },
    {
      phase: "ROT13 Decoding",
      description: "Decode telnet banner to discover <code>exschmenuating</code> directory",
      icon: Key
    },
    {
      phase: "Directory Enumeration",
      description: "Use dirbuster with Veronica-filtered wordlist to find capture files",
      icon: Globe
    },
    {
      phase: "Packet Analysis",
      description: "Analyze .cap file in Wireshark, discover FTP credentials and YouTube clues",
      icon: Eye
    },
    {
      phase: "Port Knocking",
      description: "Extract Spanish Armada port sequence from YouTube video for FTP access",
      icon: Flag
    },
    {
      phase: "FTP Exploration",
      description: "Access anonymous and Eric's FTP, discover SSH backdoor trigger",
      icon: Share2
    },
    {
      phase: "Email Trigger",
      description: "Send SMTP email with specific phrase to activate SSH backdoor",
      icon: Mail
    },
    {
      phase: "SSH Access",
      description: "Connect via backdoor port, crack WiFi password from Billy's revenge",
      icon: Wifi
    },
    {
      phase: "Privilege Escalation",
      description: "Exploit SUID binary and cron job manipulation for root access",
      icon: Lock
    }
  ];

  // Interactive Image Component
  const InteractiveImage = ({ src, alt, caption, phase }: {
    src: string;
    alt: string;
    caption: string;
    phase: string;
  }) => {
    return (
      <div className="my-6">
        <div className="relative group">
          <Image
            src={src}
            alt={alt}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg border border-slate-600 cursor-pointer hover:border-blue-400 transition-colors duration-300"
            onClick={() => setSelectedImage(src)}
          />
          <div className="absolute top-3 right-3 bg-blue-500/80 text-white px-2 py-1 rounded text-xs font-medium">
            {phase}
          </div>
        </div>
        <p className="text-slate-400 text-sm mt-2 text-center italic">{caption}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-2 sm:p-4 md:p-8" suppressHydrationWarning>
      <div className="max-w-6xl mx-auto px-2 sm:px-0">
        
        {/* Back Button */}
        <Link href="/writeups" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 group mb-8">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Writeups
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 break-words">
                Billy Madison 1.1: When 90s Movies Meet Cybersecurity
              </h1>
              <p className="text-slate-300 text-base sm:text-lg break-words">
                A nostalgic journey through a VulnHub machine themed after the classic Adam Sandler comedy, featuring port knocking, packet analysis, and the quest to recover Billy's 12th-grade final project.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 w-fit">
                VulnHub Machine
              </Badge>
              <Badge variant="outline" className="border-slate-600 text-slate-400 w-fit">
                Beginner-Intermediate
              </Badge>
            </div>
          </div>
          
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>February 3, 2022</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>25 min read</span>
            </div>
            <div className="flex items-center gap-1">
              <Film className="w-4 h-4" />
              <span>90s Movie Theme</span>
            </div>
          </div>
        </div>

        {/* Attack Chain Overview */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8 mx-1 sm:mx-0">
          <div className="p-4 sm:p-6">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-blue-400" />
              Attack Chain Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {attackChain.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-500/20 p-2 rounded-lg">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-slate-300 text-sm font-medium">Phase {index + 1}</span>
                    </div>
                    <h3 className="text-white font-medium text-sm mb-1">{step.phase}</h3>
                    <p className="text-slate-400 text-xs" dangerouslySetInnerHTML={{ __html: step.description }}></p>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Dynamic Navigation */}
        <WriteupNavigator 
          accentColor="text-blue-400"
          title="Movie Night Attack Path"
          icon={<Film className="w-5 h-5 text-blue-400" />}
        />

        {/* Writeup Content */}
        <Card className="bg-slate-800/50 border-slate-700 mx-1 sm:mx-0">
          <div className="p-4 sm:p-6 md:p-8">
            <div className="prose prose-invert prose-slate max-w-none">
              <div className="space-y-8">

            {/* Overview */}
            <section id="overview" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Overview - Back to School, Digitally</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Welcome to Billy Madison 1.1, a VulnHub machine that perfectly captures the chaotic energy of the 1995 Adam Sandler comedy. Our mission? Help Billy recover his 12th-grade final project that&apos;s been hidden away by some seriously questionable security practices. This VM is a delightful throwback that combines 90s nostalgia with modern penetration testing techniques.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                What makes this challenge special is its creative use of movie references, YouTube video clues, and multi-stage port knocking. It&apos;s like watching a comedy while solving a digital puzzle - sometimes frustrating, occasionally ridiculous, but ultimately satisfying when everything clicks into place.
              </p>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-blue-400 font-semibold mb-2">🎬 The Billy Madison Experience</h4>
                <p className="text-slate-300">This isn&apos;t your typical CTF - it&apos;s a narrative-driven adventure where every clue ties back to the movie&apos;s absurd charm. Expect ROT13 encoding, Spanish Armada references, and a healthy dose of 90s internet culture.</p>
              </div>
            </section>

            {/* Phase 1: Network Discovery */}
            <section id="phase-1-network-discovery" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Network className="w-6 h-6 text-blue-400" />
                Phase 1: Network Discovery - Finding Our Star Student
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Time to locate our target in the digital classroom! Both the target VM and my Kali machine are happily coexisting on a Host-only adapter network. My Kali sits at <code className="text-blue-400 bg-slate-900 px-2 py-1 rounded">192.168.234.128</code>, but Billy's hiding somewhere in the subnet.
              </p>

              <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                <p className="text-slate-400 text-sm mb-2">Scanning the network neighborhood:</p>
                <code className="text-blue-400 font-mono text-xs sm:text-sm whitespace-nowrap">sudo netdiscover -i eth0 -r 192.168.234.128</code>
              </div>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 134355.png"
                alt="Netdiscover scan results showing discovered hosts"
                caption="Network discovery reveals our target ending in .129 - Billy's digital homeroom!"
                phase="Network Scan"
              />

              <p className="text-slate-300 leading-relaxed mb-4">
                Perfect! The scan reveals our target at <code className="text-blue-400 bg-slate-900 px-2 py-1 rounded">192.168.234.129</code>. A quick Firefox visit confirms we've found Billy's machine - complete with what I can only assume is the most 90s website design ever conceived.
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 134549.png"
                alt="Billy Madison website homepage"
                caption="Target confirmed! This retro web design screams 90s louder than a Tamagotchi"
                phase="Target Confirmation"
              />
            </section>

            {/* Phase 2: Port Scanning */}
            <section id="phase-2-port-scanning" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Search className="w-6 h-6 text-blue-400" />
                Phase 2: Port Scanning - The Digital School Inspection
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Time for the full reconnaissance treatment! I'm deploying my trusty nmap arsenal with all the bells and whistles to see what services Billy's machine is offering.
              </p>

              <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                <p className="text-slate-400 text-sm mb-2">Comprehensive port scan with service detection:</p>
                <code className="text-blue-400 font-mono text-xs sm:text-sm whitespace-nowrap">sudo nmap -sSCV -O -A -n -Pn 192.168.234.129</code>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-3 mb-4">
                <h5 className="text-blue-400 font-semibold mb-2">Nmap Arguments Breakdown:</h5>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li><strong>-sS</strong>: SYN Stealth Scan - Half-open connections for minimal footprint</li>
                  <li><strong>-sC</strong>: Default NSE Scripts - Service enumeration and vulnerability detection</li>
                  <li><strong>-sV</strong>: Version Detection - Identify service versions and details</li>
                  <li><strong>-O</strong>: OS Fingerprinting - Determine the operating system</li>
                  <li><strong>-A</strong>: Aggressive Scan - Combines multiple detection techniques</li>
                  <li><strong>-n</strong>: No DNS Resolution - Faster scanning by skipping reverse lookups</li>
                  <li><strong>-Pn</strong>: Skip Host Discovery - Assume target is online</li>
                </ul>
              </div>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 135016.png"
                alt="Nmap scan results showing open ports and services"
                caption="Jackpot! Multiple interesting ports including a telnet banner with encoded secrets"
                phase="Port Discovery"
              />

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-yellow-400 font-semibold mb-2">🔍 Interesting Findings</h4>
                <ul className="text-slate-300 space-y-1">
                  <li>• <strong>Port 22</strong>: SSH (tcpwrapped - likely filtered)</li>
                  <li>• <strong>Port 23</strong>: Telnet with cryptic hacker message</li>
                  <li>• <strong>Port 80</strong>: HTTP web server (our entry point)</li>
                  <li>• <strong>Ports 139 & 445</strong>: SMB shares (always interesting)</li>
                  <li>• <strong>Port 2525</strong>: SMTP server (non-standard port)</li>
                </ul>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                The telnet banner is particularly intriguing - it mentions Billy's laptop being hacked and contains an encoded string: <code className="text-blue-400 bg-slate-900 px-2 py-1 rounded">rkfpuzrahngvat</code>. The message also drops a huge hint with the word "ROTten" - clearly pointing toward ROT13 encoding!
              </p>
            </section>

            {/* Phase 3: ROT13 Decoding */}
            <section id="phase-3-rot13-decoding" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Key className="w-6 h-6 text-blue-400" />
                Phase 3: ROT13 Decoding - Cracking the Caesar's Code
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Time to channel our inner cryptographer! The telnet banner's emphasis on "ROTten" is about as subtle as Billy's academic performance. Let's decode that mysterious string using ROT13 - the Caesar cipher that shifts each letter 13 positions in the alphabet.
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 135637.png"
                alt="ROT13 decoding results"
                caption="The encoded string reveals 'exschmenuating' - our secret directory name!"
                phase="Decryption Success"
              />

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-green-400 font-semibold mb-2">🔓 Decoding Success!</h4>
                <p className="text-slate-300">The ROT13 decoding reveals <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">exschmenuating</code> - clearly a directory or path we need to explore.</p>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                Let's test this theory by visiting the decoded path on the web server. Sometimes the most obvious approach is the right one!
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 135952.png"
                alt="Visiting the exschmenuating directory"
                caption="Bingo! We've unlocked a secret message from the laptop hacker"
                phase="Directory Discovery"
              />

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-blue-400 font-semibold mb-2">🕵️ Psychological Analysis Time</h4>
                <p className="text-slate-300 mb-2">Let's decode this message like we're profiling a digital criminal:</p>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>• <strong>"veronica"</strong> is embedded somewhere in a filename</li>
                  <li>• <strong>"I .captured the whole thing"</strong> - note the period before "captured" suggesting a <code>.cap</code> file</li>
                  <li>• <strong>"in this folder for later"</strong> - it's hidden in the current <code>exschmenuating</code> directory</li>
                </ul>
                <p className="text-slate-300 mt-2">Conclusion: We're looking for something like <code>*veronica*.cap</code> in this directory!</p>
              </div>
            </section>

            {/* Phase 4: Directory Enumeration */}
            <section id="phase-4-directory-enumeration" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-blue-400" />
                Phase 4: Directory Enumeration - The Veronica Hunt
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Time to put our detective skills to work! We need to find files containing "veronica" in the current directory. Rather than using the massive rockyou.txt wordlist, let's be smart and create a targeted wordlist filtered for "veronica" variations.
              </p>

              <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                <p className="text-slate-400 text-sm mb-2">Creating a focused wordlist:</p>
                <code className="text-blue-400 font-mono text-xs sm:text-sm whitespace-nowrap">grep -i "veronica" '/usr/share/wordlists/rockyou.txt' &gt; /home/kali/veronicas.txt</code>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                Now let's unleash DirBuster on the <code>exschmenuating</code> directory using our custom Veronica-focused wordlist. This approach is much more efficient than brute-forcing with millions of generic passwords.
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 141509.png"
                alt="DirBuster configuration"
                caption="DirBuster setup with our custom Veronica wordlist targeting the secret directory"
                phase="Directory Scanning"
              />

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 141549.png"
                alt="DirBuster scan results"
                caption="SUCCESS! Found our treasure: a .cap file with 'veronica' in the name"
                phase="File Discovery"
              />

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-green-400 font-semibold mb-2">🎯 Target Acquired!</h4>
                <p className="text-slate-300">We've found our network capture file! Time to download it and see what digital secrets the laptop hacker has been collecting.</p>
              </div>
            </section>

            {/* Phase 5: Packet Analysis */}
            <section id="phase-5-packet-analysis" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-blue-400" />
                Phase 5: Packet Analysis - Digital Wiretapping Investigation
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Time to channel our inner network forensics expert! Let's open this capture file in Wireshark and see what juicy communications the hacker managed to intercept. Network captures often contain the most valuable intelligence in penetration testing.
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 141917.png"
                alt="Wireshark analysis of the capture file"
                caption="Wireshark reveals active TCP streams - time to follow the digital breadcrumbs"
                phase="Packet Analysis"
              />

              <p className="text-slate-300 leading-relaxed mb-4">
                The capture file is alive with TCP traffic! Let's systematically follow each TCP stream to reconstruct the conversations. I'll start with <code className="text-blue-400 bg-slate-900 px-2 py-1 rounded">tcp.stream eq 0</code> and work my way through each stream.
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 150740.png"
                alt="First TCP stream showing email from Eric"
                caption="TCP Stream 0: Eric emails Veronica about downloading antivirus software"
                phase="Email Analysis"
              />

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-blue-400 font-semibold mb-2">📧 Email Intelligence</h4>
                <p className="text-slate-300">Eric is asking Veronica to download antivirus software - a common social engineering tactic or potentially legitimate IT support.</p>
              </div>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 150854.png"
                alt="Second TCP stream showing Veronica's reply"
                caption="TCP Stream 1: Veronica suggests using FTP and shares a YouTube link for additional context"
                phase="Response Analysis"
              />

              <p className="text-slate-300 leading-relaxed mb-4">
                Interesting! Veronica mentions setting up an FTP server and provides a YouTube link: <code className="text-blue-400 bg-slate-900 px-2 py-1 rounded">https://www.youtube.com/watch?v=z5YU7JwVy7s</code>. YouTube links in security challenges usually contain crucial clues!
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 150940.png"
                alt="Third TCP stream showing Eric's FTP credentials"
                caption="TCP Stream 2: Eric shares his FTP credentials - the keys to the kingdom!"
                phase="Credential Discovery"
              />

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-red-400 font-semibold mb-2">🔑 Critical Intelligence Gathered</h4>
                <p className="text-slate-300 mb-2">From the packet analysis, we've extracted:</p>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>• <strong>Username</strong>: <code>eric</code></li>
                  <li>• <strong>Password</strong>: <code>ericdoesntdrinkhisownpee</code></li>
                  <li>• <strong>YouTube link</strong>: Contains additional clues for accessing FTP</li>
                  <li>• <strong>Context</strong>: FTP server requires specific connection method</li>
                </ul>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                Now let's analyze that YouTube video to understand the full access mechanism. The email mentions a "Spanish Armada combo" - this sounds like a port knocking sequence disguised as historical references!
              </p>
            </section>

            {/* Phase 6: Port Knocking */}
            <section id="phase-6-port-knocking" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Flag className="w-6 h-6 text-blue-400" />
                Phase 6: Port Knocking - The Spanish Armada Sequence
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Time to crack the historical code! After watching the YouTube video, I discovered a series of dates mentioned: 1066, 1215, 1466, 1467 (or just 67), 1469, 1514, 1981, 1986. But here's the key - the email mentioned the "Spanish Armada combo," which means we only use the numbers mentioned AFTER the Spanish Armada reference in the video.
              </p>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-yellow-400 font-semibold mb-2">🏰 Historical Port Knocking</h4>
                <p className="text-slate-300">The Spanish Armada reference eliminates early dates (1066, 1215, 1467), leaving us with the sequence: <strong>1466, 67, 1469, 1514, 1981, 1986</strong></p>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                Let's knock on these ports in sequence to see if we can activate the hidden FTP service:
              </p>

              <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                <p className="text-slate-400 text-sm mb-2">Port knocking sequence automation:</p>
                <code className="text-blue-400 font-mono text-xs sm:text-sm whitespace-nowrap">for x in 1466 67 1469 1514 1981 1986; do nmap -Pn --host-timeout 201 --max-retries 0 -p $x 192.168.234.129; done</code>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-3 mb-4">
                <h5 className="text-blue-400 font-semibold mb-2">Port Knocking Parameters:</h5>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li><strong>-Pn</strong>: Skip host discovery (target is behind firewall)</li>
                  <li><strong>--host-timeout 201</strong>: Wait 201ms per port attempt</li>
                  <li><strong>--max-retries 0</strong>: Single attempt per port (fast knocking)</li>
                  <li><strong>-p $x</strong>: Target each port in the sequence</li>
                </ul>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                After executing the port knocking sequence, let's check if any new services have appeared:
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 182412.png"
                alt="Nmap scan showing newly opened FTP port"
                caption="Port knocking success! FTP service is now online and ready for access"
                phase="Service Activation"
              />

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-green-400 font-semibold mb-2">🚪 Port Knocking Success!</h4>
                <p className="text-slate-300">The Spanish Armada sequence worked perfectly! FTP port 21 is now active and accepting connections.</p>
              </div>
            </section>

            {/* Phase 7: FTP Exploration */}
            <section id="phase-7-ftp-exploration" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Share2 className="w-6 h-6 text-blue-400" />
                Phase 7: FTP Exploration - The Digital File Cabinet
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Now for the moment of truth! Let's connect to the newly activated FTP service. I'll start with anonymous access (always worth trying), and based on the email conversation, the anonymous password might be Eric's email address.
              </p>

              <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                <p className="text-slate-400 text-sm mb-2">Connecting to FTP service:</p>
                <code className="text-blue-400 font-mono text-xs sm:text-sm whitespace-nowrap">ftp 192.168.234.129</code>
              </div>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 184432.png"
                alt="Anonymous FTP login success"
                caption="Anonymous FTP access granted! Using Eric's email as the password worked perfectly"
                phase="Anonymous Access"
              />

              <p className="text-slate-300 leading-relaxed mb-4">
                Excellent! Anonymous access is working. After disabling passive mode for better file listing, I discover Billy's 12th-grade final project file. But when I examine it...
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 184614.png"
                alt="Billy's fake final project file"
                caption="Plot twist! Billy's project is just a joke - we've been bamboozled by the class clown"
                phase="False Discovery"
              />

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-orange-400 font-semibold mb-2">🎭 Classic Billy Madison Move!</h4>
                <p className="text-slate-300">Of course Billy would leave a decoy file with academic jokes! Time to dig deeper with Eric's actual FTP credentials.</p>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                Let's authenticate with Eric's credentials and see what the real file structure contains:
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 183301.png"
                alt="Eric's FTP login successful"
                caption="Eric's FTP access reveals the real treasure trove of files and secrets"
                phase="Authenticated Access"
              />

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 183515.png"
                alt="Contents of Eric's .notes file"
                caption="Eric's notes reveal an SSH backdoor and another YouTube clue for activation"
                phase="Backdoor Discovery"
              />

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-red-400 font-semibold mb-2">🚨 SSH Backdoor Intel</h4>
                <p className="text-slate-300 mb-2">Eric's notes reveal crucial information:</p>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>• An SSH backdoor exists on the system</li>
                  <li>• Activation requires sending a specific email</li>
                  <li>• The email must contain: "My kid will be a ________ _________"</li>
                  <li>• Another YouTube video provides the missing words</li>
                </ul>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                Time to watch that YouTube video (<code className="text-blue-400 bg-slate-900 px-2 py-1 rounded">https://www.youtube.com/watch?v=6u7RsW5SAgs</code>) and complete the phrase to trigger the backdoor!
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 185615.png"
                alt="YouTube video revealing the missing phrase"
                caption="The video reveals the complete phrase: 'My kid will be a soccer player'"
                phase="Phrase Discovery"
              />
            </section>

            {/* Phase 8: Email Trigger */}
            <section id="phase-8-email-trigger" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6 text-blue-400" />
                Phase 8: Email Trigger - Activating the SSH Backdoor
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Now for some social engineering magic! Remember that SMTP service running on port 2525? It's time to send the trigger email containing our YouTube-discovered phrase. Eric mentioned sending TO his own address, so we'll use Veronica's email as the sender.
              </p>

              <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                <p className="text-slate-400 text-sm mb-2">Crafting the trigger email with swaks:</p>
                <code className="text-blue-400 font-mono text-xs sm:text-sm break-all">swaks --to eric@madisonhotels.com --from vvaughn@polyfector.edu --server 192.168.234.129:2525 --body "My kid will be a soccer player" --header "Subject: My kid will be a soccer player"</code>
              </div>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 190219.png"
                alt="Email sent successfully"
                caption="Email delivery confirmed! The backdoor trigger phrase has been sent successfully"
                phase="Email Delivery"
              />

              <p className="text-slate-300 leading-relaxed mb-4">
                Perfect! The email has been delivered. Now let's check if this triggered the SSH backdoor by scanning for new services:
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 190521.png"
                alt="New SSH port discovered"
                caption="Backdoor activation successful! Port 1974 is now open and running SSH service"
                phase="Backdoor Activated"
              />

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-green-400 font-semibold mb-2">🔓 Backdoor Successfully Activated!</h4>
                <p className="text-slate-300">Port 1974 has appeared and is running SSH service - exactly as Eric promised in his notes!</p>
              </div>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 191103.png"
                alt="Nmap confirmation of SSH on port 1974"
                caption="Comprehensive scan confirms port 1974 is indeed running OpenSSH service"
                phase="Service Confirmation"
              />
            </section>

            {/* Phase 9: SSH Access & WiFi Cracking */}
            <section id="phase-9-ssh-wifi-cracking" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Wifi className="w-6 h-6 text-blue-400" />
                Phase 9: SSH Access & WiFi Cracking - Billy's Revenge
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Before we dive into SSH access, I need to crack Veronica's FTP password to access additional files. Let's use hydra with our custom Veronica wordlist for a targeted brute force attack:
              </p>

              <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                <p className="text-slate-400 text-sm mb-2">Brute forcing Veronica's FTP password:</p>
                <code className="text-blue-400 font-mono text-xs sm:text-sm whitespace-nowrap">hydra -t 10 -l veronica -P "/home/kali/veronicas.txt" 192.168.234.129 ftp</code>
              </div>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 191743.png"
                alt="Veronica's FTP access"
                caption="Veronica's FTP reveals Billy's revenge files - a WiFi capture and explanatory email"
                phase="Additional Discovery"
              />

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 192226.png"
                alt="Billy's email explaining the WiFi capture"
                caption="Billy's email: Classic revenge move - he captured Eric's WiFi credentials!"
                phase="Revenge Story"
              />

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-orange-400 font-semibold mb-2">😂 Billy's Signature Move</h4>
                <p className="text-slate-300">Billy left a "flaming bag of dog poo" at Eric's doorstep AND captured his WiFi traffic! This kid's got style AND technical skills.</p>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                Let's crack that WiFi password using aircrack-ng. Since this is Eric's personal network, his password might be in a common wordlist:
              </p>

              <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                <p className="text-slate-400 text-sm mb-2">Cracking the WiFi WPA handshake:</p>
                <code className="text-blue-400 font-mono text-xs sm:text-sm whitespace-nowrap">aircrack-ng eg-01.cap -w /usr/share/wordlists/rockyou-tiny.txt</code>
              </div>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 194949.png"
                alt="Aircrack-ng successfully cracks WiFi password"
                caption="Success! Eric's WiFi password is 'triscuit*' - Billy's revenge is complete!"
                phase="WiFi Cracked"
              />

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-green-400 font-semibold mb-2">🔑 WiFi Password Cracked!</h4>
                <p className="text-slate-300">Eric's WiFi password is <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">triscuit*</code> - perfect for our SSH access attempt!</p>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                Now let's use Eric's credentials to access the SSH backdoor. Since we found the WiFi password through FTP, it's likely Eric reuses passwords:
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 201100.png"
                alt="SSH login successful"
                caption="SSH access achieved! We're inside Eric's system with the backdoor access"
                phase="SSH Success"
              />
            </section>

            {/* Phase 10: Privilege Escalation */}
            <section id="phase-10-privilege-escalation" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-blue-400" />
                Phase 10: Privilege Escalation - The SUID Goldmine
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Time for the privilege escalation phase! Eric's notes mentioned that his usual kernel exploits aren't working anymore due to system updates. Let's take a different approach and hunt for SUID binaries that might give us root access.
              </p>

              <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                <p className="text-slate-400 text-sm mb-2">Hunting for SUID binaries:</p>
                <code className="text-blue-400 font-mono text-xs sm:text-sm whitespace-nowrap">find / -user root -perm -4000 -ls 2&gt;/dev/null</code>
              </div>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 201906.png"
                alt="SUID binaries discovered"
                caption="Jackpot! Found an interesting SUID binary at /usr/local/share/sgml/donpcgd"
                phase="SUID Discovery"
              />

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-red-400 font-semibold mb-2">🎯 SUID Binary Analysis</h4>
                <p className="text-slate-300">The <code>/usr/local/share/sgml/donpcgd</code> binary runs with root privileges and appears to take two path arguments. This could be our ticket to privilege escalation!</p>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                Let's create a cron job that will add Eric to the sudoers file. This is a classic privilege escalation technique when you have access to a SUID binary that can manipulate files:
              </p>

              <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                <p className="text-slate-400 text-sm mb-2">Creating our privilege escalation cron job:</p>
                <code className="text-blue-400 font-mono text-xs sm:text-sm break-all">
                  touch hehe<br/>
                  echo -e '#!/bin/bash\necho "eric ALL=(ALL) NOPASSWD:ALL" &gt;&gt; /etc/sudoers' &gt; /etc/cron.hourly/hehe
                </code>
              </div>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 203759.png"
                alt="Cron job created successfully"
                caption="Privilege escalation cron job planted - now we wait for the hourly execution"
                phase="Cron Planted"
              />

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-blue-400 font-semibold mb-2">⏰ The Waiting Game</h4>
                <p className="text-slate-300">Since this is <code>cron.hourly</code>, we need to wait up to an hour for the job to execute. This is realistic timing for many automated privilege escalation scenarios.</p>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                After the hourly cron execution, let's check if Eric has been successfully added to the sudoers:
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 222421.png"
                alt="Eric now has sudo privileges"
                caption="Success! Eric is now a sudoer with full system privileges"
                phase="Escalation Success"
              />

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-green-400 font-semibold mb-2">👑 Root Access Achieved!</h4>
                <p className="text-slate-300">The cron job worked perfectly! Eric now has unrestricted sudo access to the entire system.</p>
              </div>
            </section>

            {/* Phase 11: Finding Billy's Project */}
            <section id="phase-11-billys-project" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Key className="w-6 h-6 text-blue-400" />
                Phase 11: The Hunt for Billy's Real Project - A Encrypted Mystery
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Now for the main objective - finding Billy's actual 12th-grade final project! As root, let's explore the system thoroughly to see where Eric might have hidden it.
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 224009.png"
                alt="Exploring root directories"
                caption="Systematic exploration reveals a suspicious 'PRIVATE' directory in the root filesystem"
                phase="File Discovery"
              />

              <p className="text-slate-300 leading-relaxed mb-4">
                The <code>/PRIVATE</code> directory looks promising! Let's see what secrets Eric has been hiding in there.
              </p>

              <div className="bg-slate-800/50 rounded-lg p-3 mb-4">
                <p className="text-slate-300 mb-2">Found two files in /PRIVATE:</p>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>• <strong>hint.txt</strong> - Contains instructions for the BowelMovement file</li>
                  <li>• <strong>BowelMovement</strong> - The encrypted container with Billy's project</li>
                </ul>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                The hint file reveals that Eric forgot the password, but mentions it's somewhere on Billy Madison's Wikipedia page. Time for some OSINT work with <code>cewl</code>!
              </p>

              <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                <p className="text-slate-400 text-sm mb-2">Generating wordlist from Wikipedia:</p>
                <code className="text-blue-400 font-mono text-xs sm:text-sm break-all">cewl --depth 0 -w /home/kali/BowelMovement.list https://en.wikipedia.org/wiki/Billy_Madison</code>
              </div>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 224843.png"
                alt="Cewl wordlist generation"
                caption="Custom wordlist generated from Billy Madison Wikipedia page - movie trivia becomes password cracking"
                phase="Wordlist Creation"
              />

              <p className="text-slate-300 leading-relaxed mb-4">
                Now let's use <code>truecrack</code> to attack the encrypted container with our movie-themed wordlist:
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 231039.png"
                alt="HTTP server setup for file transfer"
                caption="Setting up HTTP server to transfer the encrypted file for local analysis"
                phase="File Transfer"
              />

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 231102.png"
                alt="File downloaded and ready for cracking"
                caption="BowelMovement file downloaded and ready for password cracking with our Wikipedia wordlist"
                phase="Ready to Crack"
              />

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-green-400 font-semibold mb-2">🔓 Password Cracked!</h4>
                <p className="text-slate-300">The Wikipedia wordlist worked! The password is <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">execrable</code> - perfectly fitting for this movie-themed challenge.</p>
              </div>
            </section>

            {/* Phase 12: The Final Twist */}
            <section id="phase-12-final-twist" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Film className="w-6 h-6 text-blue-400" />
                Phase 12: The Final Twist - When Modern Tools Meet Legacy Formats
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Time for the grand finale! Let's decrypt Billy's project using VeraCrypt with our freshly cracked password.
              </p>

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 231656.png"
                alt="VeraCrypt application launching"
                caption="VeraCrypt is ready to decrypt Billy's educational masterpiece"
                phase="Decryption Attempt"
              />

              <InteractiveImage
                src="/images/writeups/billy-madison-1-1/Screenshot 2025-08-13 232021.png"
                alt="VeraCrypt unable to decrypt the file"
                caption="Plot twist! VeraCrypt can't handle the legacy TrueCrypt format"
                phase="Format Incompatibility"
              />

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-orange-400 font-semibold mb-2">😅 Classic Billy Madison Ending!</h4>
                <p className="text-slate-300">
                  Well, this is awkwardly perfect! Just like in the movie where things don't always go according to plan, we've hit a compatibility roadblock. VeraCrypt has dropped support for the legacy TrueCrypt format, leaving Billy's project locked away like his academic ambitions.
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                But you know what? This is actually the most authentic Billy Madison experience possible! We've successfully:
              </p>

              <ul className="text-slate-300 space-y-2 mb-4 list-disc list-inside">
                <li>Navigated through multiple layers of security</li>
                <li>Decoded ROT13 ciphers and YouTube clues</li>
                <li>Performed sophisticated port knocking sequences</li>
                <li>Analyzed network packet captures</li>
                <li>Executed social engineering via email</li>
                <li>Cracked WiFi passwords and escalated privileges</li>
                <li>Found the encrypted project file</li>
                <li>Even cracked the encryption password!</li>
              </ul>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-blue-400 font-semibold mb-2">🎓 Mission Accomplished (Sort Of)</h4>
                <p className="text-slate-300">
                  Sometimes in penetration testing, you find the treasure but can't open the chest due to legacy system incompatibilities. That's exactly what happened here - we achieved every technical objective except the final file decryption due to format evolution.
                </p>
                <p className="text-slate-300 mt-2">
                  Billy would probably find this hilarious - his project remains "academically protected" by technological obsolescence! 😂
                </p>
              </div>
            </section>

            {/* Summary */}
            <section id="summary" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Summary - A 90s Adventure in Digital Form</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                What a journey! This Billy Madison 1.1 machine delivered exactly what it promised - a nostalgic, entertaining, and technically challenging experience that perfectly captures the spirit of the 1995 comedy.
              </p>

              <div className="bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500 mb-4">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  🎬 The Complete Attack Chain
                </h4>
                <ul className="text-slate-300 space-y-1">
                  <li>• <strong>Network Discovery</strong>: netdiscover revealed our target VM</li>
                  <li>• <strong>ROT13 Decoding</strong>: Telnet banner provided the first cryptographic puzzle</li>
                  <li>• <strong>Directory Enumeration</strong>: Custom wordlists led to network capture discovery</li>
                  <li>• <strong>Packet Analysis</strong>: Wireshark revealed FTP credentials and YouTube clues</li>
                  <li>• <strong>Port Knocking</strong>: Spanish Armada sequence activated hidden services</li>
                  <li>• <strong>Multi-stage FTP Access</strong>: Anonymous and authenticated access revealed backdoor info</li>
                  <li>• <strong>Email-triggered SSH Backdoor</strong>: Social engineering activated remote access</li>
                  <li>• <strong>WiFi Password Cracking</strong>: Billy's revenge provided system credentials</li>
                  <li>• <strong>SUID Privilege Escalation</strong>: Cron job manipulation achieved root access</li>
                  <li>• <strong>File Recovery</strong>: Found and cracked Billy's encrypted project container</li>
                </ul>
              </div>

              <div className="bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500 mb-4">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  💡 Technical Lessons Learned
                </h4>
                <p className="text-slate-300 mb-3">
                  This machine showcased several advanced penetration testing concepts:
                </p>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>• <strong>Multi-stage Port Knocking</strong>: Historical references disguised access sequences</li>
                  <li>• <strong>OSINT Integration</strong>: YouTube videos and Wikipedia pages as clue sources</li>
                  <li>• <strong>Packet Forensics</strong>: TCP stream analysis for credential extraction</li>
                  <li>• <strong>Email-triggered Backdoors</strong>: SMTP-based service activation</li>
                  <li>• <strong>Legacy Format Challenges</strong>: Real-world compatibility limitations</li>
                  <li>• <strong>Creative Social Engineering</strong>: Movie quotes as authentication phrases</li>
                </ul>
              </div>

              <div className="bg-orange-900/20 rounded-lg p-4 border-l-4 border-orange-500">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  🎭 The Billy Madison Experience
                </h4>
                <p className="text-slate-300">
                  This VM perfectly captured the essence of Billy Madison - chaotic, unpredictable, occasionally frustrating, but ultimately entertaining and educational. The fact that we couldn't decrypt the final file due to legacy format incompatibility is ironically perfect - just like Billy's academic journey, sometimes the destination is less important than the adventure itself.
                </p>
                <p className="text-slate-300 mt-2">
                  Thanks for joining me on this nostalgic ride through digital chaos! Remember: sometimes the best penetration testing experiences are the ones that don't go exactly according to plan. 🎓
                </p>
              </div>
            </section>
              </div>
            </div>
          </div>
        </Card>

        {/* Educational Purpose Disclaimer */}
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}