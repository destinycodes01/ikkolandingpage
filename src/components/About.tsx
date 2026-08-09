import React from 'react';
import { motion } from 'motion/react';
import { Users, ShieldCheck, Truck, Award, CheckCircle2, ArrowUpRight, Flame } from 'lucide-react';
import { COMPANY_INFO, STATS_DATA } from '../data/companyInfo';
import { BrandLogo } from './BrandLogo';

interface AboutProps {
  onOpenOrderModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenOrderModal }) => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6 text-[#1FA1EC]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#18A84E]" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-[#DD3F39]" />;
      case 'Award':
      default:
        return <Award className="w-6 h-6 text-[#18689B]" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-[#E8F5E9] relative overflow-hidden scroll-mt-20">
      {/* Decorative subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#18A84E]/10 text-[#18A84E] text-xs font-bold uppercase tracking-widest mb-3">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
              ABOUT
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#18A84E] to-[#1FA1EC] mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Company Description Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50">
              <img
                src={COMPANY_INFO.images.deliveryTruck}
                alt="IK.KO Energy Ltd Delivery Fleet and Personnel in Owerri"
                className="w-full h-[380px] sm:h-[440px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              {/* Floating Official Brand Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-white/60 flex items-center z-10">
                <BrandLogo size="sm" showText={true} />
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white shadow-xl">
                <p className="text-xs font-bold uppercase text-[#1FA1EC]">Local Energy Leader</p>
                <p className="text-sm font-extrabold text-slate-900 font-heading">
                  Serving Owerri Homes, Businesses &amp; Industries
                </p>
                <p className="text-xs text-slate-600 mt-1">MCC Road, Golden Gate, Umuoba Uratta</p>
              </div>
            </div>

            {/* Decorative Corner Box */}
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-[#1FA1EC]/10 rounded-3xl -z-10" />
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-[#18A84E]/10 rounded-3xl -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading leading-snug">
              Providing Safe, Premium LPG &amp; Energy Solutions Across Imo State
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              <strong>IK.KO Energy Ltd</strong> is a premier energy company headquartered in Owerri, Imo State, Nigeria. We specialize in the bulk and retail distribution of high-grade Liquefied Petroleum Gas (LPG), sales of certified gas cylinders, burners, regulators, hoses, and gas accessories.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Driven by an uncompromising commitment to safety, efficiency, and customer satisfaction, we offer reliable doorstep home delivery services, comprehensive gas equipment maintenance, and cutting-edge petrol-to-gas engine conversion services that significantly reduce fuel expenses for households and commercial operators.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#18A84E]/10 text-[#18A84E] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">Unadulterated Pure Gas</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Zero water contamination, clean burn, longer cylinder life.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#1FA1EC]/10 text-[#1FA1EC] flex-shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">Doorstep Home Delivery</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Prompt cylinder collection, refill, and return in Owerri.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#18689B] hover:bg-[#1FA1EC] text-white font-bold text-sm shadow-md transition-all group"
              >
                <span>Order Cooking Gas Now</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Animated Statistic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#1FA1EC]/50 hover:bg-white shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
            >
              {/* Subtle top color bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                idx === 0 ? 'bg-[#1FA1EC]' : idx === 1 ? 'bg-[#18A84E]' : idx === 2 ? 'bg-[#DD3F39]' : 'bg-[#18689B]'
              }`} />

              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-white shadow-sm border border-slate-100">
                  {getStatIcon(stat.iconName)}
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight group-hover:text-[#1FA1EC] transition-colors">
                  {stat.value}
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 font-heading mb-1">{stat.label}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
