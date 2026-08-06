import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Flame, Clock, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { OWERRI_DELIVERY_AREAS } from '../data/companyInfo';

interface GasCalculatorProps {
  onOpenOrderModal: (item?: string) => void;
}

export const GasCalculator: React.FC<GasCalculatorProps> = ({ onOpenOrderModal }) => {
  const [size, setSize] = useState<'3kg' | '6kg' | '9kg' | '12.5kg' | '25kg' | '50kg'>('12.5kg');
  const [usage, setUsage] = useState<'light' | 'medium' | 'heavy'>('medium');
  const [area, setArea] = useState(OWERRI_DELIVERY_AREAS[0]);

  // Usage stats helper
  const sizeDetails = {
    '3kg': { avgDays: usage === 'light' ? '18-22' : usage === 'medium' ? '10-14' : '6-8', suitability: 'Students & Single Individuals' },
    '6kg': { avgDays: usage === 'light' ? '30-35' : usage === 'medium' ? '20-25' : '12-15', suitability: 'Small Household (1-2 persons)' },
    '9kg': { avgDays: usage === 'light' ? '45-50' : usage === 'medium' ? '30-35' : '18-22', suitability: 'Medium Family (3-4 persons)' },
    '12.5kg': { avgDays: usage === 'light' ? '60-70' : usage === 'medium' ? '40-45' : '25-30', suitability: 'Standard Family Choice (Nigeria Best Seller)' },
    '25kg': { avgDays: usage === 'light' ? '120+' : usage === 'medium' ? '70-80' : '40-50', suitability: 'Large Family / Frequent Catering' },
    '50kg': { avgDays: usage === 'light' ? '180+' : usage === 'medium' ? '120+' : '60-90', suitability: 'Restaurants, Hotels & Bakeries' },
  };

  const currentInfo = sizeDetails[size];

  return (
    <section className="py-16 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#18689B] rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#18A84E]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#1FA1EC] text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Cooking Gas Usage &amp; Delivery Calculator</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Estimate Your Household Gas Needs in Owerri
              </h3>

              {/* Size Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  1. Select Your Gas Cylinder Size
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {(['3kg', '6kg', '9kg', '12.5kg', '25kg', '50kg'] as const).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border ${
                        size === s
                          ? 'bg-[#18A84E] text-white border-[#18A84E] shadow-lg scale-105'
                          : 'bg-white/10 text-slate-300 border-white/10 hover:bg-white/20'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cooking Intensity */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  2. Cooking Frequency / Intensity
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'light', label: 'Light (1x daily)' },
                    { id: 'medium', label: 'Medium (2-3x daily)' },
                    { id: 'heavy', label: 'Heavy / Commercial' },
                  ].map((u) => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setUsage(u.id as any)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all border ${
                        usage === u.id
                          ? 'bg-[#1FA1EC] text-white border-[#1FA1EC] shadow-md'
                          : 'bg-white/10 text-slate-300 border-white/10 hover:bg-white/20'
                      }`}
                    >
                      {u.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Area */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  3. Select Delivery Location in Owerri
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#1FA1EC]"
                >
                  {OWERRI_DELIVERY_AREAS.map((a) => (
                    <option key={a} value={a} className="bg-slate-900 text-white">
                      {a}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right Output Panel */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-white space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Selected Cylinder
                </span>
                <span className="px-3 py-1 rounded-full bg-[#18A84E] text-white font-black text-sm">
                  {size} Cooking Gas
                </span>
              </div>

              {/* Estimate Duration */}
              <div className="space-y-1">
                <p className="text-xs text-slate-300 uppercase font-semibold">Estimated Cooking Days</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black font-heading text-amber-300">
                    {currentInfo.avgDays} Days
                  </span>
                  <span className="text-xs text-slate-300 font-medium">approx burn time</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/20 border border-white/10 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-white/90">
                  <Flame className="w-4 h-4 text-[#18A84E]" />
                  <span>Suitability: <strong>{currentInfo.suitability}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <Truck className="w-4 h-4 text-[#1FA1EC]" />
                  <span>Dispatching to: <strong>{area}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Includes digital scale weight verification ticket</span>
                </div>
              </div>

              <button
                onClick={() => onOpenOrderModal(`${size} Cooking Gas (${area})`)}
                className="w-full py-3.5 rounded-xl bg-[#18A84E] hover:bg-[#15803D] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Order {size} Gas Delivery Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
