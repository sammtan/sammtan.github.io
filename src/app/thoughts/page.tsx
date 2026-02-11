"use client";

import { Card } from "@/components/ui/card";
import { FileText, ArrowLeft, PenLine } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ThoughtsPage() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Letters & Thoughts - samm.tan";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
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
          <h1 className="text-4xl font-bold text-white mb-4">Letters & Thoughts</h1>
          <p className="text-slate-300 text-lg">Personal insights, technical documentation, and reflections on cybersecurity, technology, and innovation.</p>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-20">
          <Card className="bg-slate-800/30 border-slate-700 border-dashed max-w-lg w-full">
            <div className="p-12 text-center flex flex-col items-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-blue-900/30 border border-blue-700/30 flex items-center justify-center">
                  <PenLine className="w-9 h-9 text-blue-400" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Coming Soon</h3>
              <p className="text-slate-400 leading-relaxed">
                I&apos;m currently crafting my thoughts and putting words together. Articles on cybersecurity, technology, and personal reflections will be published here soon.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-blue-400">
                <FileText className="w-4 h-4" />
                <span>Stay tuned for updates</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}