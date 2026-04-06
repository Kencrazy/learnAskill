import { ShoppingBag, ExternalLink } from 'lucide-react';
import { EtsyProduct } from '../types';

const etsyProducts: EtsyProduct[] = [
  {
    name: 'Woven Blanket',
    imageUrl: 'https://i.etsystatic.com/64850837/r/il/537ace/7765224158/il_1588xN.7765224158_83li.jpg',
    link: 'https://www.etsy.com/listing/4465841166/just-pay-the-bill-woven-blanket-minimal?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_1'
  },
  {
    name: 'Minimal 2026 Wall Calendar',
    imageUrl: 'https://i.etsystatic.com/64850837/r/il/517413/7813169305/il_1588xN.7813169305_awzz.jpg',
    link: 'https://www.etsy.com/listing/4465841040/minimal-2026-wall-calendar-vertical?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_2'
  },
  {
    name: 'Just Pay the Bill Canvas',
    imageUrl: 'https://i.etsystatic.com/64850837/r/il/8dceca/7765222096/il_1588xN.7765222096_4wxy.jpg',
    link: 'https://www.etsy.com/listing/4465836561/just-pay-the-bill-canvas-matte-stretched?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_3'
  },
  {
    name: 'Just Pay the Bill Mug',
    imageUrl: 'https://i.etsystatic.com/64850837/r/il/c4be76/7813151699/il_1588xN.7813151699_81uq.jpg',
    link: 'https://www.etsy.com/listing/4465838942/stay-groovy-coffee-mug-accent-black?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_4'
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
