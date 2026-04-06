import { useState } from 'react';
import {
  Menu,
  X,
  Laugh,
  Music,
  Heart,
  Dog,
  Newspaper,
  BookOpen,
  Pen,
  Sparkles,
  Video,
  ChevronRight
} from 'lucide-react';
import { Category } from '../types';

interface SidebarProps {
  onCategorySelect: (categoryId: string) => void;
  selectedCategory: string;
}

const categories: Category[] = [
  {
    id: 'meme',
    name: 'Meme',
    icon: 'Laugh',
    socialLinks: {
      youtube: 'https://www.youtube.com/@ambatumeow/videos',
      facebook: 'https://www.facebook.com/profile.php?id=61560072484609',
      instagram: 'https://www.instagram.com/kenle5654/',
      tiktok: 'https://www.tiktok.com/@ambatumeow?lang=en'
    }
  },
  {
    id: 'playlist',
    name: 'Playlist',
    icon: 'Music',
    socialLinks: {
      youtube: 'https://youtube.com/@your-music-channel',
      facebook: 'https://facebook.com/your-music-page',
      instagram: 'https://instagram.com/your-music-account',
      tiktok: 'https://tiktok.com/@your-music-account'
    }
  },
  {
    id: 'selfhelp',
    name: 'Self Help',
    icon: 'Heart',
    socialLinks: {
      youtube: 'https://youtube.com/@your-selfhelp-channel',
      facebook: 'https://facebook.com/your-selfhelp-page',
      instagram: 'https://instagram.com/your-selfhelp-account',
      tiktok: 'https://tiktok.com/@your-selfhelp-account'
    }
  },
  {
    id: 'animals',
    name: 'Animals Video',
    icon: 'Dog',
    socialLinks: {
      youtube: 'https://youtube.com/@your-animals-channel',
      facebook: 'https://facebook.com/your-animals-page',
      instagram: 'https://instagram.com/your-animals-account',
      tiktok: 'https://tiktok.com/@your-animals-account'
    }
  },
  {
    id: 'technews',
    name: 'Technology News',
    icon: 'Newspaper',
    socialLinks: {
      youtube: 'https://youtube.com/@your-tech-channel',
      facebook: 'https://facebook.com/your-tech-page',
      instagram: 'https://instagram.com/your-tech-account',
      tiktok: 'https://tiktok.com/@your-tech-account'
    }
  },
  {
    id: 'bookaudio',
    name: 'Book Audio',
    icon: 'BookOpen',
    socialLinks: {
      youtube: 'https://youtube.com/@your-book-channel',
      facebook: 'https://facebook.com/your-book-page',
      instagram: 'https://instagram.com/your-book-account',
      tiktok: 'https://tiktok.com/@your-book-account'
    }
  },
  {
    id: 'storytelling',
    name: 'Storytelling',
    icon: 'Pen',
    socialLinks: {
      youtube: 'https://youtube.com/@your-story-channel',
      facebook: 'https://facebook.com/your-story-page',
      instagram: 'https://instagram.com/your-story-account',
      tiktok: 'https://tiktok.com/@your-story-account'
    }
  },
  {
    id: 'anime',
    name: 'Anime',
    icon: 'Sparkles',
    socialLinks: {
      youtube: 'https://youtube.com/@your-anime-channel',
      facebook: 'https://facebook.com/your-anime-page',
      instagram: 'https://instagram.com/your-anime-account',
      tiktok: 'https://tiktok.com/@your-anime-account'
    }
  },
  {
    id: 'streamer',
    name: 'Viral Streamer Clip',
    icon: 'Video',
    socialLinks: {
      youtube: 'https://youtube.com/@your-streamer-channel',
      facebook: 'https://facebook.com/your-streamer-page',
      instagram: 'https://instagram.com/your-streamer-account',
      tiktok: 'https://tiktok.com/@your-streamer-account'
    }
  }
];

const iconMap = {
  Laugh,
  Music,
  Heart,
  Dog,
  Newspaper,
  BookOpen,
  Pen,
  Sparkles,
  Video
};

export default function Sidebar({ onCategorySelect, selectedCategory }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 p-2.5 bg-gradient-to-br from-blue-600 to-emerald-600 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0 w-72' : '-translate-x-full w-72'
        } shadow-2xl border-r border-slate-800`}
      >
        <div className="pt-24 px-6 pb-8 h-full flex flex-col">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"></div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Content Niches
              </h2>
            </div>
            <p className="text-sm text-slate-500 mt-1">Select your niche to explore monetization strategies</p>
          </div>

          <nav className="space-y-1.5 flex-1 overflow-y-auto scrollbar-hide">
            {categories.map((category, index) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap];
              const isSelected = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => onCategorySelect(category.id)}
                  className={`w-full group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-600 to-emerald-600 shadow-lg'
                      : 'hover:bg-slate-800/50'
                  }`}
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isSelected ? 'bg-gradient-to-r from-blue-500/20 to-emerald-500/20' : 'bg-slate-700/20'
                    }`}
                  ></div>

                  <div
                    className={`relative flex-shrink-0 p-2 rounded-lg transition-all duration-300 ${
                      isSelected
                        ? 'bg-white/20'
                        : 'bg-slate-800 group-hover:bg-slate-700'
                    }`}
                  >
                    <IconComponent size={18} />
                  </div>

                  <div className="relative flex-1 text-left">
                    <span className={`font-medium block transition-all duration-300 ${
                      isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {category.name}
                    </span>
                    <span className="text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {category.name} content guides
                    </span>
                  </div>

                  <ChevronRight
                    size={16}
                    className={`relative transition-all duration-300 ${
                      isSelected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-6 border-t border-slate-800">
            <p className="text-xs text-slate-500 text-center">
              Start earning from your passion today
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export { categories };
