import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Flame,
  Gauge,
  Package,
  Zap,
  Sliders,
  Activity,
  Wrench,
  ShieldAlert,
  Truck,
  Building2,
  Store,
  Cpu,
  ArrowRight,
  Check,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/companyInfo';
import { Service } from '../types';

interface ServicesProps {
  onOpenOrderModal: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'supply' | 'equipment' | 'specialized'>('all');

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (selectedCategory === 'all') return true;
    return service.category === selectedCategory;
  });

  const getServiceIcon = (iconName: string) => {
    const iconClass = "w-6 h-6";
    switch (iconName) {
      case 'Flame':
        return <Flame className={`${iconClass} text-[#18A84E]`} />;
      case 'Gauge':
        return <Gauge className={`${iconClass} text-[#1FA1EC]`} />;
      case 'Package':
        return <Package className={`${iconClass} text-[#18689B]`} />;
      case 'Zap':
        return <Zap className={`${iconClass} text-amber-500`} />;
      case 'Sliders':
        return <Sliders className={`${iconClass} text-[#DD3F39]`} />;
      case 'Activity':
        return <Activity className={`${iconClass} text-[#18A84E]`} />;
      case 'Wrench':
        return <Wrench className={`${iconClass} text-[#1FA1EC]`} />;
      case 'ShieldAlert':
        return <ShieldAlert className={`${iconClass} text-[#DD3F39]`} />;
      case 'Truck':
        return <Truck className={`${iconClass} text-[#18A84E]`} />;
      case 'Building2':
        return <Building2 className={`${iconClass} text-[#18689B]`} />;
      case 'Store':
        return <Store className={`${iconClass} text-[#1FA1EC]`} />;
      case 'Cpu':
        return <Cpu className={`${iconClass} text-purple-600`} />;
      default:
        return <Flame className={`${iconClass} text-[#18A84E]`} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#1FA1EC]/10 text-[#18689B] text-xs font-bold uppercase tracking-widest mb-3">
              Comprehensive Energy Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
              Our Professional Services
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              From pure LPG cooking gas refills to petrol-to-gas conversion and home delivery in Owerri, we cover all your cooking and energy requirements.
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#1FA1EC] to-[#18A84E] mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Services (12)' },
            { id: 'supply', label: 'LPG Refill & Delivery' },
            { id: 'equipment', label: 'Cylinders & Accessories' },
            { id: 'specialized', label: 'Maintenance & Engine Conversion' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === tab.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#1FA1EC]/60 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#18A84E] via-[#1FA1EC] to-[#DD3F39] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Icon & Category Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-[#1FA1EC]/10 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 font-heading mb-2 group-hover:text-[#18689B] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div>
                {/* Highlight Tag */}
                <div className="py-2 px-3 rounded-xl bg-[#F8FAFC] border border-slate-100 text-xs font-medium text-slate-700 flex items-center gap-2 mb-4">
                  <Check className="w-3.5 h-3.5 text-[#18A84E] flex-shrink-0" />
                  <span className="truncate">{service.highlight}</span>
                </div>

                {/* Inquire CTA Button */}
                <button
                  onClick={() => onOpenOrderModal(service.title)}
                  className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-[#1FA1EC] text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider transition-all border border-slate-200 hover:border-[#1FA1EC] flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>Inquire / Request Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
