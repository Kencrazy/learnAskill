import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Sidebar, { categories } from './components/Sidebar';
import BlogList from './components/BlogList';
import SocialLinks from './components/SocialLinks';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('meme');

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <div className="lg:ml-0">
        <Header />
        <Hero />
        <FeaturedProducts />

        <main className="bg-white">
          <div className="container mx-auto px-4 py-16">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-slate-800 mb-2">
                {currentCategory?.name}
              </h2>
              <p className="text-lg text-slate-600">
                Discover how to make money creating {currentCategory?.name.toLowerCase()} content
              </p>
            </div>

            {currentCategory && (
              <SocialLinks
                links={currentCategory.socialLinks}
                categoryName={currentCategory.name}
              />
            )}

            <BlogList category={selectedCategory} />
          </div>
        </main>

        <footer className="bg-slate-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-400">
              © 2024 Social Media Money Mastery. Start your journey to monetization today!
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
