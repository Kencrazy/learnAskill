import { Zap, TrendingUp, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full">
            <span className="text-sm font-semibold text-blue-300 flex items-center gap-2">
              <Zap size={16} />
              Start Your Monetization Journey
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Turn Your Content Into
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-emerald-300 to-cyan-300">
              Real Money
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
            Master the strategies for every content niche. From memes to tech news, learn how creators
            are building sustainable income streams across multiple platforms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="inline-block p-3 bg-blue-500/20 rounded-lg mb-4">
                <TrendingUp className="text-blue-400" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">9 Proven Niches</h3>
              <p className="text-slate-300 text-sm">Explore successful monetization strategies for every content type</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="inline-block p-3 bg-emerald-500/20 rounded-lg mb-4">
                <Target className="text-emerald-400" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Multi-Platform Growth</h3>
              <p className="text-slate-300 text-sm">YouTube, TikTok, Instagram, Facebook - all in one place</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="inline-block p-3 bg-cyan-500/20 rounded-lg mb-4">
                <Zap className="text-cyan-400" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Exclusive Products</h3>
              <p className="text-slate-300 text-sm">Monetize beyond ads with our curated Etsy marketplace</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
