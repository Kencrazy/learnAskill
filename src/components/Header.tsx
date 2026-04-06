import { MessageCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30 border-b border-slate-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
            Social Media Money Mastery
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Learn how to monetize your content across all platforms
          </p>
        </div>

        <a
          href="https://discord.gg/your-server"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
        >
          <MessageCircle size={20} />
          Discord
        </a>
      </div>
    </header>
  );
}
