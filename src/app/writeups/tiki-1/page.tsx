"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Shield, Terminal, Network, Database, Key, Flag, Image as ImageIcon, Eye, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { WriteupNavigator } from "@/components/writeup-navigator";

export default function Tiki1WriteupPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Tiki-1 Writeup - samm.tan";
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
              <div className="bg-green-500/20 p-2 rounded-lg">
                <ImageIcon className="w-4 h-4 text-green-400" />
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
    title: "Tiki-1 VulnHub Writeup: When CMS Security Goes Tiki-Toki Wrong",
    target: "Tiki-1 (VulnHub)",
    difficulty: "Beginner-Intermediate (but made easy by... interesting design choices)",
    date: "2022-04-29",
    readTime: "18 min",
    tags: ["VulnHub", "Tiki CMS", "CVE-2020-15906", "Authentication Bypass", "SMB Enumeration", "SSH", "Privilege Escalation"]
  };

  const attackChain = [
    { phase: "Network Discovery", icon: Network, description: "&quot;Marco!&quot; ... &quot;Polo!&quot;" },
    { phase: "Port Scanning", icon: Shield, description: "Technical reconnaissance symphony" },
    { phase: "Web App Discovery", icon: Terminal, description: "Following the breadcrumbs" },
    { phase: "SMB Enumeration", icon: Database, description: "The gift that keeps on giving" },
    { phase: "Version Research", icon: Key, description: "Vulnerability intelligence gathering" },
    { phase: "CVE-2020-15906", icon: Flag, description: "Admin password reset bypass" },
    { phase: "Post-Exploitation", icon: Eye, description: "Wiki credential hunting" },
    { phase: "SSH & Root", icon: Flag, description: "The final countdown" }
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
            <Flag className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 flex-shrink-0 mt-1" />
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight break-words">{writeupData.title}</h1>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg mt-2">Complete Tiki CMS 21 exploitation featuring CVE-2020-15906 authentication bypass</p>
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
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
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
              <Terminal className="w-6 h-6 text-green-400" />
              Attack Chain Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {attackChain.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-green-500/20 p-2 rounded-lg">
                        <Icon className="w-4 h-4 text-green-400" />
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
          accentColor="text-green-400"
          title="Attack Path"
          icon={<Target className="w-5 h-5 text-green-400" />}
        />

        {/* Writeup Content */}
        <Card className="bg-slate-800/50 border-slate-700 mx-1 sm:mx-0">
          <div className="p-4 sm:p-6 md:p-8">
            <div className="prose prose-invert prose-slate max-w-none">
              <div className="space-y-8">
                {/* Overview */}
                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Terminal className="w-6 h-6 text-green-400" />
                    Overview - Welcome to the Wiki Wild West! 🤠
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Well, well, well! Look what we have here - another day, another vulnerable machine begging to be pwned. Today&apos;s victim is &quot;Tiki-1,&quot; a VulnHub machine that&apos;s apparently running the Tiki Wiki CMS. If you&apos;ve never heard of Tiki, don&apos;t worry - after this writeup, you&apos;ll know exactly why it&apos;s probably better to stick with WordPress (and that&apos;s saying something).
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    So grab your favorite beverage, settle in, and let me tell you the tale of how I completely demolished a machine that thought storing passwords in SMB shares was a brilliant idea. Spoiler alert: it wasn&apos;t.
                  </p>
                </section>

                {/* Phase 1: Network Discovery */}
                <section id="phase-1-network-discovery" className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Network className="w-6 h-6 text-green-400" />
                    Phase 1: Network Discovery - &quot;Marco!&quot; ... &quot;Polo!&quot;
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    First things first - I need to find where this elusive target is hiding on my network. Time for some good old-fashioned network reconnaissance!
                  </p>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-06 185844.png"
                    alt="Tiki VM is online"
                    caption="Target machine is up and running - time to hunt!"
                    phase="Target Discovery"
                  />

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-06 185910.png"
                    alt="Kali Linux ready"
                    caption="Attack platform ready - let the games begin!"
                    phase="Attack Setup"
                  />

                  <p className="text-slate-300 leading-relaxed mb-4">
                    My trusty Kali machine is still running from the DarkHole 2 massacre (apparently it hasn&apos;t slept since that chaos), so at least I know my attack platform is ready to rock and roll.
                  </p>

                  <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                    <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">sudo netdiscover -i eth0 -r 192.168.253.129/24</code>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-4">
                    <em>Narrator voice</em>: &quot;And just like clockwork, there it was - 192.168.253.134, sitting there like a digital sitting duck, completely unaware of the storm that was about to hit.&quot;
                  </p>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-06 190349.png"
                    alt="Apache default page"
                    caption="Classic default page - nothing says security like leaving defaults!"
                    phase="Initial Web Recon"
                  />

                  <p className="text-slate-300 leading-relaxed mb-4">
                    Ah yes, the classic Apache default page. Nothing says &quot;I&apos;m totally secure&quot; like leaving the default web server page up. It&apos;s like leaving a sticky note on your front door that says &quot;House key under the mat.&quot; But hey, at least now I know there&apos;s definitely a web server running - progress!
                  </p>
                </section>

                {/* Phase 2: Port Scanning */}
                <section id="phase-2-port-scanning" className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-green-400" />
                    Phase 2: Port Scanning - The Technical Reconnaissance Symphony
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Time to unleash the full power of nmap and see what services this machine is graciously exposing to the internet:
                  </p>

                  <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                    <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">sudo nmap -sSCV -O -A -n --script vuln -Pn 192.168.253.134</code>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                    <h4 className="text-white font-semibold mb-3">🔍 Nmap Flags Explained</h4>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li><strong className="text-green-400">-sS:</strong> SYN Stealth Scan - Performs half-open connections, leaving minimal footprint in logs</li>
                      <li><strong className="text-green-400">-sC:</strong> Default NSE Scripts - Executes Nmap&apos;s curated script collection for service enumeration</li>
                      <li><strong className="text-green-400">-sV:</strong> Version Detection - Probes open ports to determine service/version information</li>
                      <li><strong className="text-green-400">-O:</strong> OS Fingerprinting - Analyzes TCP/IP stack behavior to identify operating system</li>
                      <li><strong className="text-green-400">-A:</strong> Aggressive Scan - Combines OS detection, version detection, script scanning, and traceroute</li>
                      <li><strong className="text-green-400">-n:</strong> No DNS Resolution - Skips reverse DNS lookups for faster scanning</li>
                      <li><strong className="text-green-400">--script vuln:</strong> Vulnerability Scripts - Runs NSE scripts specifically designed to detect known vulnerabilities</li>
                      <li><strong className="text-green-400">-Pn:</strong> Skip Host Discovery - Treats target as online, bypassing ping probes</li>
                    </ul>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-4">
                    And boy, did this scan deliver some juicy results! The <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">--script vuln</code> flag immediately started lighting up like a Christmas tree, revealing multiple CVEs across different services. The most interesting findings were on the SMB ports - 139 and 445 - which were practically screaming &quot;EXPLOIT ME!&quot;
                  </p>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-06 191815.png"
                    alt="Port 139 vulnerabilities"
                    caption="Port 139 SMB vulnerabilities - a hacker's Christmas wishlist!"
                    phase="SMB Enumeration"
                  />

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-06 191620.png"
                    alt="Port 445 vulnerabilities"
                    caption="Port 445 showing even more SMB vulnerabilities - jackpot!"
                    phase="SMB Analysis"
                  />

                  <p className="text-slate-300 leading-relaxed mb-4">
                    Look at all those beautiful vulnerabilities! It&apos;s like a hacker&apos;s buffet - so many choices, so little time. But before I dive into the SMB exploitation rabbit hole, let me check if there&apos;s more low-hanging fruit.
                  </p>
                </section>

                {/* Phase 3: Web Application Discovery */}
                <section id="phase-3-web-discovery" className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Terminal className="w-6 h-6 text-green-400" />
                    Phase 3: Web Application Discovery - Following the Breadcrumbs
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Back to Firefox for some good old-fashioned web reconnaissance. One of my favorite starting points is always the <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">robots.txt</code> file - it&apos;s amazing how often developers accidentally tell attackers exactly where the interesting stuff is hidden.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    And boom! There it is - a disallow entry for <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">/tiki/</code>. It&apos;s like the website is politely saying, &quot;Please don&apos;t look at this super important directory that definitely contains all our sensitive stuff.&quot;
                  </p>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-06 192359.png"
                    alt="Tiki CMS main page"
                    caption="Found the Tiki CMS - notice that convenient login button!"
                    phase="CMS Discovery"
                  />

                  <p className="text-slate-300 leading-relaxed mb-4">
                    When I navigate to <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">/tiki/</code>, it redirects me to <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">/tiki/tiki-index.php</code>, and suddenly everything makes sense. We&apos;re dealing with Tiki Wiki CMS! Notice that convenient &quot;Log in&quot; button in the top-right corner - we&apos;ll definitely be coming back to that later.
                  </p>

                  <h4 className="text-white font-semibold mb-2">Directory & File Enumeration</h4>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Now I&apos;m convinced there&apos;s more lurking beneath the surface than just <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">tiki-index.php</code>. Time to break out the big guns and do some serious directory enumeration. Let&apos;s fire up OWASP ZAP and see what treasures it can uncover!
                  </p>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 144247.png"
                    alt="ZAP scan results"
                    caption="ZAP reveals the full Tiki CMS structure - so many endpoints!"
                    phase="Directory Enum"
                  />

                  <p className="text-slate-300 leading-relaxed mb-4">
                    Excellent! ZAP is revealing all sorts of interesting Tiki CMS files and directories. This confirms we&apos;re definitely dealing with a full Tiki installation, not just some random PHP files. But I want to be thorough, so let&apos;s also run some targeted fuzzing with <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">wfuzz</code>.
                  </p>

                  <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                    <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">wfuzz -c -z file,/usr/share/seclists/Discovery/Web-Content/raft-medium-files.txt --hc 404,403 192.168.253.134/FUZZ</code>
                  </div>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 145210.png"
                    alt="Initial wfuzz scan"
                    caption="First wfuzz attempt - oddly sparse results, need to adjust strategy"
                    phase="Fuzzing Round 1"
                  />

                  <p className="text-slate-300 leading-relaxed mb-4">
                    Hmm, that&apos;s oddly sparse - only showing two files when we know there&apos;s definitely more content available. This is a classic case of needing to adjust your enumeration strategy. Since we know the Tiki installation is under <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">/tiki/</code>, let&apos;s target that specific directory with a more focused approach:
                  </p>

                  <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                    <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">wfuzz -c -z file,/usr/share/seclists/Discovery/Web-Content/raft-medium-files.txt --hc 404 192.168.253.134/tiki/tiki-FUZZ</code>
                  </div>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 145701.png"
                    alt="Focused wfuzz scan"
                    caption="Much better! Targeted scanning reveals all the Tiki CMS files"
                    phase="Fuzzing Round 2"
                  />

                  <p className="text-slate-300 leading-relaxed mb-4">
                    Perfect! Now we&apos;re getting the full picture. This targeted approach reveals all those juicy Tiki CMS files that were hiding from our initial broad scan. The lesson here? Sometimes you need to be more surgical with your enumeration approach.
                  </p>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 150152.png"
                    alt="Tiki login page"
                    caption="The login page - locked down tight, we need credentials!"
                    phase="Login Discovery"
                  />

                  <p className="text-slate-300 leading-relaxed mb-4">
                    Classic CMS login page - nothing too fancy, but it&apos;s definitely locked down tight. We need valid credentials to proceed. But remember those beautiful SMB vulnerabilities we discovered earlier? Let&apos;s circle back to that goldmine and see if we can extract some user information.
                  </p>
                </section>

                {/* Phase 4: SMB Enumeration */}
                <section id="phase-4-smb-enumeration" className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Database className="w-6 h-6 text-green-400" />
                    Phase 4: SMB Enumeration - The Gift That Keeps on Giving
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Time to put those SMB services to work! Let&apos;s enumerate users and shares using the trusty <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">enum4linux</code> tool:
                  </p>

                  <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                    <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">enum4linux -a 192.168.253.134</code>
                  </div>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 150356.png"
                    alt="enum4linux results part 1"
                    caption="enum4linux discovers users and shares - jackpot incoming!"
                    phase="SMB User Enum"
                  />

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 150608.png"
                    alt="enum4linux results part 2"
                    caption="More enum4linux output - found user 'silky' and 'Notes' share!"
                    phase="SMB Share Discovery"
                  />

                  <p className="text-slate-300 leading-relaxed mb-4">
                    Jackpot! Look at that beautiful output - we&apos;ve discovered a user named <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">silky</code> and, more importantly, an SMB share called <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">Notes</code>. In my experience, anything called &quot;Notes&quot; in a corporate environment is basically a treasure chest of secrets that someone definitely shouldn&apos;t have left lying around.
                  </p>

                  <p className="text-slate-300 leading-relaxed mb-4">
                    Let&apos;s see what goodies are waiting for us in this Notes share:
                  </p>

                  <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                    <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">smbclient //192.168.253.134/Notes -N</code>
                  </div>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 150757.png"
                    alt="SMB share credentials"
                    caption="HOLY SECURITY FAILURES! Plaintext password in SMB share!"
                    phase="Credential Discovery"
                  />

                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                    <h4 className="text-red-400 font-semibold mb-2">🚨 HOLY SECURITY FAILURES, BATMAN!</h4>
                    <p className="text-slate-300">
                      Are you seeing this? Someone literally stored the password <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">51lky571k1</code> for user <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">silky</code> in a plaintext file inside an unauthenticated SMB share called &quot;Mail.txt&quot;. This is like leaving your house key under the doormat, except the doormat is labeled &quot;HOUSE KEY HERE&quot; in neon lights.
                    </p>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-4">
                    This is exactly why security professionals have trust issues. Let&apos;s take these credentials and see what damage we can do:
                  </p>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                    <h4 className="text-green-400 font-semibold mb-2">🔑 Discovered Credentials</h4>
                    <p className="text-slate-300">
                      <strong>Username:</strong> <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">silky</code><br />
                      <strong>Password:</strong> <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">51lky571k1</code>
                    </p>
                  </div>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 151045.png"
                    alt="Successful Tiki login"
                    caption="Success! Logged into Tiki CMS as user silky"
                    phase="Initial Access"
                  />

                  <p className="text-slate-300 leading-relaxed mb-4">
                    Success! We&apos;re now logged into the Tiki CMS as user <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">silky</code>. But here&apos;s the thing about security testing - you don&apos;t stop at the first access. Always escalate, always dig deeper.
                  </p>
                </section>

                {/* Phase 5: Version Research */}
                <section id="phase-5-version-research" className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Key className="w-6 h-6 text-green-400" />
                    Phase 5: Version Fingerprinting &amp; Vulnerability Research
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Now that we&apos;re inside, let&apos;s gather some intelligence. First, I notice there are actually TWO different <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">robots.txt</code> files - one at the root and another under <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">/tiki/</code>. Let&apos;s check both:
                  </p>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 151736.png"
                    alt="Tiki robots.txt"
                    caption="Tiki-specific robots.txt reveals more hidden directories"
                    phase="Info Gathering"
                  />

                  <p className="text-slate-300 leading-relaxed mb-4">
                    Interesting findings in the Tiki-specific robots.txt! But more importantly, let&apos;s identify the exact version we&apos;re dealing with by checking the changelog:
                  </p>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 152117.png"
                    alt="Tiki changelog showing version 21"
                    caption="BINGO! Tiki CMS version 21 - time to hunt for exploits"
                    phase="Version Discovery"
                  />

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                    <h4 className="text-blue-400 font-semibold mb-2">🎯 Target Identified</h4>
                    <p className="text-slate-300">We&apos;re dealing with <strong>Tiki CMS version 21</strong>. This is crucial information because now we can search for version-specific vulnerabilities.</p>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-4">
                    Time to consult the exploit database:
                  </p>

                  <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                    <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">searchsploit tiki 21</code>
                  </div>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 152749.png"
                    alt="SearchSploit results for Tiki 21"
                    caption="Found it! CVE-2020-15906 authentication bypass for Tiki 21"
                    phase="Exploit Research"
                  />

                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                    <h4 className="text-red-400 font-semibold mb-2">💀 Critical Vulnerability Found</h4>
                    <p className="text-slate-300">
                      And there it is - <strong>CVE-2020-15906</strong>, a beautiful authentication bypass vulnerability specifically targeting Tiki CMS 21! This CVE allows us to completely bypass the admin authentication mechanism by exploiting a flaw in the password reset functionality.
                    </p>
                  </div>
                </section>

                {/* Phase 6: CVE Exploitation */}
                <section id="phase-6-cve-exploitation" className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Flag className="w-6 h-6 text-green-400" />
                    Phase 6: CVE-2020-15906 Exploitation - Admin Password Reset Bypass
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Let&apos;s grab this exploit and unleash some chaos:
                  </p>

                  <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                    <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">searchsploit -m php/webapps/48927.py</code>
                  </div>
                  <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                    <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">python3 48927.py 192.168.253.134</code>
                  </div>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 153050.png"
                    alt="CVE-2020-15906 exploit execution"
                    caption="BOOM! Exploit successful - admin password has been removed!"
                    phase="CVE Exploitation"
                  />

                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                    <h4 className="text-green-400 font-semibold mb-2">✅ Exploit Success!</h4>
                    <p className="text-slate-300">
                      <strong>BOOM!</strong> The exploit has successfully removed the admin password! This CVE-2020-15906 vulnerability works by manipulating the password reset mechanism in Tiki CMS 21, essentially clearing the admin password hash and allowing authentication without any password verification.
                    </p>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-4">
                    Now for the fun part - let&apos;s intercept the admin login process with Burp Suite to complete this authentication bypass:
                  </p>

                  <ol className="text-slate-300 space-y-2 mb-4">
                    <li>1. Log out of the current <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">silky</code> session</li>
                    <li>2. Attempt to log in as <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">admin</code> with any dummy password</li>
                    <li>3. Intercept the request in Burp Suite</li>
                    <li>4. Remove the password parameter from the POST request</li>
                    <li>5. Forward the modified request</li>
                  </ol>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 154130.png"
                    alt="Burp Suite request interception"
                    caption="Intercepting admin login - about to remove password field"
                    phase="Request Manipulation"
                  />

                  <p className="text-slate-300 leading-relaxed mb-4">
                    Here I&apos;m using the dummy password <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">justkidding</code>, but the magic happens when we remove the password field entirely from the POST request, thanks to our CVE-2020-15906 exploit preparation.
                  </p>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 154402.png"
                    alt="Browser resend request"
                    caption="Browser prompting to resend - normal behavior for this exploit"
                    phase="Auth Bypass"
                  />

                  <p className="text-slate-300 leading-relaxed mb-4">
                    The browser might prompt you to resend the request a few times - this is normal behavior for this particular exploit chain. After 2-3 attempts, the authentication bypass kicks in and we gain full administrative access!
                  </p>

                  <p className="text-slate-300 leading-relaxed mb-4">
                    And just like that, we&apos;ve escalated from regular user to admin using a critical authentication bypass vulnerability. Time to explore what administrative secrets this CMS is hiding.
                  </p>
                </section>

                {/* Phase 7: Post-Exploitation */}
                <section id="phase-7-post-exploitation" className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Eye className="w-6 h-6 text-green-400" />
                    Phase 7: Post-Exploitation Intelligence Gathering
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Now that we&apos;re admin, let&apos;s see what treasures await us in the administrative interface. I&apos;m particularly interested in any configuration pages or user-generated content that might contain additional credentials.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Clicking through the Wiki dropdown and selecting &quot;List Pages&quot; reveals something absolutely mind-boggling:
                  </p>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 155031.png"
                    alt="Wiki pages list showing Credentials page"
                    caption="WAIT WHAT?! There's a wiki page called 'Credentials'?!"
                    phase="Wiki Discovery"
                  />

                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                    <h4 className="text-red-400 font-semibold mb-2">🤯 WAIT, WHAT?!</h4>
                    <p className="text-slate-300">
                      There&apos;s a Wiki page literally called &quot;Credentials&quot;? Who in their right mind creates a publicly accessible wiki page with that name? This is like putting a giant billboard that says &quot;FREE PASSWORDS HERE!&quot;
                    </p>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-4">
                    Let&apos;s see what genius decided to document their SSH credentials in a wiki:
                  </p>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 155253.png"
                    alt="Credentials wiki page with SSH password"
                    caption="I'm speechless - SSH credentials documented in a public wiki!"
                    phase="SSH Creds Found"
                  />

                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-4">
                    <h4 className="text-orange-400 font-semibold mb-2">😶 I&apos;m Speechless</h4>
                    <p className="text-slate-300">
                      Absolutely speechless. They&apos;ve documented SSH credentials for user <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">silky</code> with password <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">Agy8Y7SPJNXQzqA</code> right there in a wiki page. This machine is the gift that keeps on giving when it comes to security anti-patterns.
                    </p>
                  </div>
                </section>

                {/* Phase 8: SSH & Root */}
                <section id="phase-8-ssh-privilege-escalation" className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Flag className="w-6 h-6 text-green-400" />
                    Phase 8: SSH Access &amp; Privilege Escalation - The Final Countdown
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    With these shiny new SSH credentials in hand, let&apos;s establish a proper shell connection:
                  </p>

                  <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                    <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">ssh silky@192.168.253.134</code>
                  </div>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 155331.png"
                    alt="Successful SSH login"
                    caption="Beautiful! SSH access confirmed - time to check permissions"
                    phase="SSH Access"
                  />

                  <p className="text-slate-300 leading-relaxed mb-4">
                    Beautiful! SSH access confirmed. Now let&apos;s see what kind of privileges our user <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">silky</code> has on this system:
                  </p>

                  <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                    <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">sudo -l</code>
                  </div>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 155545.png"
                    alt="Sudo privileges showing ALL permissions"
                    caption="ARE YOU KIDDING ME?! Full sudo permissions for silky!"
                    phase="Privilege Check"
                  />

                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                    <h4 className="text-red-400 font-semibold mb-2">🤦‍♂️ ARE YOU KIDDING ME?!</h4>
                    <p className="text-slate-300">
                      User <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">silky</code> has <code className="text-green-400 bg-slate-900 px-2 py-1 rounded">ALL=(ALL:ALL) ALL</code> sudo permissions? This means they can run ANY command as ANY user without restrictions. This is the equivalent of giving someone the master key to your entire digital kingdom and then also giving them the deed to the property.
                    </p>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-4">
                    At this point, privilege escalation is trivial:
                  </p>

                  <div className="bg-slate-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                    <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">sudo su -</code><br />
                    <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">cd /root</code><br />
                    <code className="text-green-400 font-mono text-xs sm:text-sm break-all sm:break-normal">ls -la</code>
                  </div>

                  <InteractiveImage
                    src="/images/writeups/tiki-1/Screenshot 2025-08-09 155651.png"
                    alt="Root flag captured"
                    caption="FLAG CAPTURED! The crown jewel has been claimed!"
                    phase="Flag Capture"
                  />

                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                    <h4 className="text-green-400 font-semibold mb-2">🏁 FLAG CAPTURED!</h4>
                    <p className="text-slate-300">
                      And there it is - the crown jewel we&apos;ve been hunting for! Complete system compromise achieved through a beautiful chain of security failures.
                    </p>
                  </div>
                </section>

                {/* Summary */}
                <section id="summary" className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Summary - A Masterclass in &quot;How NOT to Secure Anything&quot;</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Well folks, that was quite the journey! This Tiki-1 machine was like a perfect storm of security failures, each one more spectacular than the last. Let me recap this beautiful disaster:
                  </p>

                  <div className="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500 mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      🏆 The Security Hall of Shame
                    </h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• <strong>Unauthenticated SMB Share</strong> containing plaintext passwords in &quot;Mail.txt&quot;</li>
                      <li>• <strong>CVE-2020-15906 Vulnerability</strong> allowing complete admin authentication bypass</li>
                      <li>• <strong>Public Wiki Page</strong> documenting SSH credentials for all to see</li>
                      <li>• <strong>Unrestricted Sudo Access</strong> for regular user accounts</li>
                      <li>• <strong>Information Disclosure</strong> via multiple robots.txt files and changelog exposure</li>
                    </ul>
                  </div>

                  <div className="bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500 mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      🎯 Technical Lessons Learned
                    </h4>
                    <p className="text-slate-300 mb-3">
                      <strong>CVE-2020-15906</strong> is a particularly nasty vulnerability that affects Tiki CMS 21. The flaw lies in the password reset mechanism, where an attacker can manipulate the reset process to completely clear the admin password hash. This allows authentication as admin without any password verification whatsoever.
                    </p>
                    <div className="bg-slate-800/50 rounded-lg p-3 mt-3">
                      <h5 className="text-green-400 font-semibold mb-2">Attack Chain Summary:</h5>
                      <ol className="text-slate-300 space-y-1 text-sm">
                        <li>1. Network discovery reveals target with multiple exposed services</li>
                        <li>2. SMB enumeration exposes plaintext credentials</li>
                        <li>3. Initial CMS access via discovered credentials</li>
                        <li>4. Version fingerprinting identifies vulnerable Tiki CMS 21</li>
                        <li>5. CVE-2020-15906 exploitation grants admin access</li>
                        <li>6. Information disclosure reveals SSH credentials</li>
                        <li>7. SSH access combined with sudo misconfiguration leads to root compromise</li>
                      </ol>
                    </div>
                  </div>

                  <div className="bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      💡 The Real-World Implications
                    </h4>
                    <p className="text-slate-300">
                      This machine perfectly demonstrates why layered security is crucial. Even if one vulnerability had been patched, the multiple other security failures would have still led to complete system compromise. It&apos;s a reminder that security is only as strong as its weakest link - and this machine had more weak links than a dollar store chain.
                    </p>
                    <p className="text-slate-300 mt-2">
                      Thanks for joining me on this wild ride through digital chaos! Remember: if you&apos;re ever building a system, please do the exact opposite of everything we saw here. Your future self (and your security team) will thank you! 🎯
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
    </div>
  );
}