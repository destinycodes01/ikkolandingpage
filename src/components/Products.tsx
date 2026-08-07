import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/companyInfo';

interface ProductsProps {
  onOpenOrderModal: (productName?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onOpenOrderModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'cylinders' | 'appliances' | 'accessories'>('all');

  const filteredProducts = PRODUCTS_DATA.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#18A84E]/10 text-[#18A84E] text-xs font-bold uppercase tracking-widest mb-3">
              Certified Gas Equipment &amp; Hardware
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
              Our Premium Gas Products
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              All cylinders, burners, regulators, hoses, and valves are SON-certified and safety tested for home and industrial use.
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#18A84E] to-[#DD3F39] mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Products' },
            { id: 'cylinders', label: 'LPG Cylinders' },
            { id: 'appliances', label: 'Gas Cookers & Burners' },
            { id: 'accessories', label: 'Regulators, Hoses & Accessories' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-[#18689B] text-white shadow-md'
                  : 'bg-[#F8FAFC] text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 hover:border-[#18A84E]/50 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Product Image */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#18A84E] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-[#18A84E] transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>

                  {/* Specs Bullets */}
                  {product.specs && (
                    <div className="space-y-1 mb-4">
                      {product.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#18A84E] flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenOrderModal(product.name)}
                  className="w-full py-3 rounded-xl bg-[#DD3F39] hover:bg-[#b91c1c] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Request Quote</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safety Seal Guarantee Box */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-[#18689B]/10 via-[#1FA1EC]/10 to-[#18A84E]/10 border border-[#1FA1EC]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-white shadow-sm text-[#18A84E] flex-shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">
                100% Quality &amp; Safety Guaranteed
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Every cylinder purchased or refilled at IK.KO Energy comes with factory seals, leak test clearance, and verified weight tickets.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenOrderModal()}
            className="px-6 py-3 rounded-xl bg-[#18A84E] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider flex-shrink-0 shadow-md transition-all flex items-center gap-2"
          >
            <span>Order Product / Cylinder</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
