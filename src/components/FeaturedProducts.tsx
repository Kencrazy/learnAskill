import { ShoppingBag, ExternalLink } from 'lucide-react';
import { EtsyProduct } from '../types';

const etsyProducts: EtsyProduct[] = [
  {
    name: 'Custom Cups',
    imageUrl: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: 'https://etsy.com/shop/yourshop/cups'
  },
  {
    name: 'Wall Calendar',
    imageUrl: 'https://images.pexels.com/photos/5706901/pexels-photo-5706901.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: 'https://etsy.com/shop/yourshop/calendar'
  },
  {
    name: 'Premium Mattress',
    imageUrl: 'https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: 'https://etsy.com/shop/yourshop/mattress'
  },
  {
    name: 'Custom Portrait',
    imageUrl: 'https://images.pexels.com/photos/1053924/pexels-photo-1053924.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: 'https://etsy.com/shop/yourshop/portrait'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingBag className="text-emerald-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-800">Featured Products</h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Expand your monetization strategy with our curated selection of quality products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {etsyProducts.map((product) => (
            <a
              key={product.name}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col h-full"
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-blue-100 relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-lg text-slate-800 group-hover:text-emerald-600 transition-colors mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-600 flex-1 mb-4">
                  High-quality product for your audience
                </p>
                <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                  View on Etsy
                  <ExternalLink size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://etsy.com/shop/yourshop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
          >
            <ShoppingBag size={24} />
            Visit Full Shop
          </a>
        </div>
      </div>
    </section>
  );
}
