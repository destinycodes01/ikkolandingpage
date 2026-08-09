import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, Tag, Award, Sparkles, Check } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/companyInfo';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string, color: string) => {
    const iconClass = "w-8 h-8";
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} style={{ color }} />;
      case 'Truck':
        return <Truck className={iconClass} style={{ color }} />;
      case 'Tag':
        return <Tag className={iconClass} style={{ color }} />;
      case 'Award':
      default:
        return <Award className={iconClass} style={{ color }} />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-[#CADABF] relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#DD3F39]/10 text-[#DD3F39] text-xs font-bold uppercase tracking-widest mb-3">
              The IK.KO Energy Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
              Why Choose IK.KO Energy Ltd?
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              We set the gold standard in cooking gas distribution across Owerri with safety, precision, speed, and integrity.
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#DD3F39] via-[#18A84E] to-[#1FA1EC] mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-[#1FA1EC] shadow-sm hover:shadow-2xl transition-all relative group overflow-hidden flex flex-col justify-between"
            >
              {/* Corner Glow Accent */}
              <div
                className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                style={{ backgroundColor: item.color }}
              />

              <div>
                {/* Icon Box */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  {getIcon(item.iconName, item.color)}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 font-heading mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Verified Checklist Item */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px]"
                  style={{ backgroundColor: item.color }}
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Certified Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local Owerri Coverage Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18A84E]/10 text-[#18A84E] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Active Coverage Areas</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-heading">
                Rapid Delivery Across All Owerri Neighborhoods
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                MCC Road, Golden Gate, Umuoba Uratta, Ikenegbu, World Bank, Aladinma, Akwakuma, Orji, Nekede, Umuguma, Egbu &amp; New Owerri.
              </p>
            </div>

            <a
              href="tel:07073333969"
              className="px-6 py-3.5 rounded-xl bg-[#DD3F39] hover:bg-[#b91c1c] text-white font-bold text-xs uppercase tracking-wider flex-shrink-0 shadow-md transition-all flex items-center gap-2"
            >
              <span>Call Dispatch (07073333969)</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
