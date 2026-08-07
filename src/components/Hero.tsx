import React from 'react';
import { motion } from 'motion/react';
import { Phone, Flame, ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

interface HeroProps {
  onOpenOrderModal: (item?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center pt-6 pb-12 lg:py-16 overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-slate-100 scroll-mt-20">
      {/* Background Animated Abstract Brand Color Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blue Orb */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-[#1FA1EC]/15 rounded-full blur-3xl"
        />

        {/* Green Orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 -right-24 w-[30rem] h-[30rem] bg-[#18A84E]/15 rounded-full blur-3xl"
        />

        {/* Red Accent Glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#DD3F39]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Call To Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1FA1EC]/10 border border-[#1FA1EC]/20 text-[#18689B] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#18A84E] animate-ping" />
              <span>Owerri, Imo State • Premier Cooking Gas Supplier</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] font-heading tracking-tight">
              Reliable <span className="text-[#18A84E] underline decoration-[#1FA1EC]/40 decoration-4">LPG Supply</span> &amp; Cooking Gas Delivery in <span className="text-[#1FA1EC]">Owerri</span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              We provide safe, reliable, and affordable cooking gas, cylinders, burners, regulators, hoses, accessories, maintenance, and home delivery for homes and businesses.
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-2">
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#18A84E] flex-shrink-0" />
                <span>Same-day doorstep delivery in Owerri</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#18A84E] flex-shrink-0" />
                <span>100% Calibrated weight guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#18A84E] flex-shrink-0" />
                <span>SON-Certified cylinders &amp; valves</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#18A84E] flex-shrink-0" />
                <span>Petrol-to-Gas conversion experts</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              {/* Primary Button */}
              <button
                onClick={() => onOpenOrderModal()}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#18A84E] via-[#16A34A] to-[#15803D] hover:from-[#15803D] hover:to-[#166534] text-white text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                <Flame className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
                <span>Get Gas Delivered</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Call Now Button */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-8 py-4 rounded-xl bg-[#DD3F39] hover:bg-[#b91c1c] text-white text-base font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now (07073333969)</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-slate-600 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#18A84E] flex-shrink-0" />
                <span>Safety Inspected</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#1FA1EC] flex-shrink-0" />
                <span>30-Min Owerri Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#DD3F39] flex-shrink-0" />
                <span>Pure Blue Flame</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Card Frame with Glow Effect */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src={COMPANY_INFO.images.heroStation}
                alt="IK.KO Energy Ltd LPG Filling Station in Owerri"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

              {/* Floating Badge 1: Location Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-white/50 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#18A84E] animate-pulse" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Plant Location</p>
                  <p className="text-xs font-bold text-slate-900">Golden Gate, MCC Rd, Owerri</p>
                </div>
              </div>

              {/* Floating Badge 2: Delivery Speed */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#18A84E]/10 flex items-center justify-center text-[#18A84E]">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-heading">Doorstep Gas Delivery</h4>
                    <p className="text-xs text-slate-600">Fresh Refill &bull; Pure LPG &bull; Full Weight</p>
                  </div>
                </div>

                <button
                  onClick={() => onOpenOrderModal('12.5kg')}
                  className="px-3.5 py-2 rounded-lg bg-[#1FA1EC] hover:bg-[#18689B] text-white text-xs font-bold transition-colors flex-shrink-0"
                >
                  Order Gas
                </button>
              </div>
            </div>

            {/* Decorative Floating Color Accents */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#DD3F39]/20 rounded-2xl -z-10 blur-xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#18A84E]/20 rounded-2xl -z-10 blur-xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
