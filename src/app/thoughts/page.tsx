import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Eye, BookOpen, Lightbulb, Users, ArrowRight } from "lucide-react";

export default function ThoughtsPage() {
  const articles = [
    {
      title: "Journey into Quantum Computing",
      excerpt: "Exploring the intersection of quantum mechanics and computational possibilities, and what it means for the future of cybersecurity.",
      content: "Deep dive into quantum computing principles, current limitations, and potential security implications...",
      category: "Research",
      date: "2024-01-20",
      readTime: "15 min",
      views: 4532,
      featured: true,
      tags: ["Quantum Computing", "Cryptography", "Future Tech", "Security"]
    },
    {
      title: "The Evolution of AI in Cybersecurity",
      excerpt: "How artificial intelligence is reshaping threat detection and response mechanisms in modern security operations.",
      content: "Analysis of machine learning applications in security, from anomaly detection to automated response systems...",
      category: "Technology",
      date: "2024-01-12",
      readTime: "12 min",
      views: 3821,
      featured: false,
      tags: ["Artificial Intelligence", "Machine Learning", "SOC", "Automation"]
    },
    {
      title: "Building Secure Embedded Systems",
      excerpt: "Lessons learned from designing security-first IoT devices and the challenges of resource-constrained environments.",
      content: "Practical guide to implementing security measures in embedded systems with limited computational resources...",
      category: "Tutorial",
      date: "2024-01-05",
      readTime: "18 min",
      views: 2947,
      featured: false,
      tags: ["IoT Security", "Embedded Systems", "Hardware", "Best Practices"]
    },
    {
      title: "The Psychology of Social Engineering",
      excerpt: "Understanding human factors in cybersecurity and why technical solutions alone aren't enough.",
      content: "Exploration of psychological principles used in social engineering attacks and defense strategies...",
      category: "Analysis",
      date: "2023-12-28",
      readTime: "10 min",
      views: 5643,
      featured: false,
      tags: ["Social Engineering", "Human Factors", "Security Awareness", "Psychology"]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Research": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "Technology": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Tutorial": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Analysis": return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      default: return "bg-slate-500/20 text-slate-300 border-slate-500/30";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Research": return Lightbulb;
      case "Tutorial": return BookOpen;
      default: return Users;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Letters & Thoughts</h1>
          <p className="text-slate-300 text-lg">Personal insights, technical documentation, and reflections on cybersecurity, technology, and innovation.</p>
        </div>

        {/* Featured Article */}
        {articles.find(article => article.featured) && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Featured Article
            </h2>
            {(() => {
              const featured = articles.find(article => article.featured)!;
              const CategoryIcon = getCategoryIcon(featured.category);
              return (
                <Card className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 border-slate-600 hover:from-slate-800/80 hover:to-slate-700/80 transition-all duration-300 hover:scale-[1.01] cursor-pointer">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <CategoryIcon className="w-5 h-5 text-slate-400" />
                      <Badge className={`text-xs ${getCategoryColor(featured.category)}`}>
                        {featured.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs border-yellow-500/30 text-yellow-300">
                        Featured
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{featured.title}</h3>
                    <p className="text-slate-300 mb-4 text-lg leading-relaxed">{featured.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featured.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs border-slate-600 text-slate-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(featured.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{featured.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{featured.views.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                        <span>Continue Reading</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })()}
          </div>
        )}

        {/* All Articles */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => {
              const CategoryIcon = getCategoryIcon(article.category);
              return (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CategoryIcon className="w-4 h-4 text-slate-400" />
                      <Badge className={`text-xs ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </Badge>
                      {article.featured && (
                        <Badge variant="outline" className="text-xs border-yellow-500/30 text-yellow-300">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs border-slate-600 text-slate-400">
                          {tag}
                        </Badge>
                      ))}
                      {article.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                          +{article.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12">
          <Card className="bg-slate-800/30 border-slate-700 border-dashed">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-slate-400 mb-4">Get notified when I publish new articles about cybersecurity, technology, and innovation.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors duration-200">
                Subscribe to Newsletter
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}