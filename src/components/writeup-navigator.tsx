"use client";

import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";

interface NavigationItem {
  id: string;
  title: string;
  level: 'main' | 'sub';
}

interface WriteupNavigatorProps {
  accentColor?: string;
  title?: string;
  icon?: React.ReactNode;
}

export function WriteupNavigator({
  accentColor = "text-blue-400",
  title = "Attack Path",
  icon
}: WriteupNavigatorProps) {
  const [sections, setSections] = useState<NavigationItem[]>([]);

  useEffect(() => {
    // Wait for DOM to be ready, then scan for sections
    const timer = setTimeout(() => {
      const sectionElements = document.querySelectorAll('section[id]');
      const navigationItems: NavigationItem[] = [];

      sectionElements.forEach((section) => {
        const id = section.id;
        const heading = section.querySelector('h2, h3');

        if (heading && id) {
          const title = heading.textContent || '';
          const level = heading.tagName === 'H2' ? 'main' : 'sub';

          // Skip if it's just "Overview" or similar generic titles
          if (title && !title.toLowerCase().includes('overview')) {
            navigationItems.push({ id, title, level });
          }
        }
      });

      setSections(navigationItems);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (sections.length === 0) return null;

  const defaultIcon = <MapPin className={`w-5 h-5 ${accentColor}`} />;

  return (
    <Card className="bg-slate-800/30 border-slate-700 mx-1 sm:mx-0 mb-8">
      <div className="p-4 sm:p-6">
        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          {icon || defaultIcon}
          {title}
        </h2>
        <nav className="space-y-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block text-slate-300 hover:${accentColor} transition-colors duration-200 text-sm ${section.level === 'sub' ? 'pl-4 text-xs' : ''
                }`}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>
    </Card>
  );
}