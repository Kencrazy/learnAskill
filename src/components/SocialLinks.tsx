import { Youtube, Facebook, Instagram } from 'lucide-react';
import { SocialLinks as SocialLinksType } from '../types';

interface SocialLinksProps {
  links: SocialLinksType;
  categoryName: string;
}

export default function SocialLinks({ links, categoryName }: SocialLinksProps) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 mb-8 shadow-md">
      <h3 className="text-xl font-bold text-slate-800 mb-4">
        Follow Our {categoryName} Channels
      </h3>
      <div className="flex flex-wrap gap-4">
        {links.youtube && (
          <a
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md"
          >
            <Youtube size={20} />
            YouTube
          </a>
        )}
        {links.facebook && (
          <a
            href={links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md"
          >
            <Facebook size={20} />
            Facebook
          </a>
        )}
        {links.instagram && (
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md"
          >
            <Instagram size={20} />
            Instagram
          </a>
        )}
        {links.tiktok && (
          <a
            href={links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
            </svg>
            TikTok
          </a>
        )}
      </div>
    </div>
  );
}
