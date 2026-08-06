import React from 'react';
import { motion } from 'motion/react';
import { Truck, Phone, MessageSquare, Flame, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

interface HomeDeliveryBannerProps {
  onOpenOrderModal: () => void;
}

export const HomeDeliveryBanner: React.FC<HomeDeliveryBannerProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-[#18689B] to-[#18A84E] relative text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20 mixing-blend-overlay">
        <img
          src={COMPANY_INFO.images.kitchenFamily}
          alt="Kitchen Family Cooking Gas Delivery"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
              <Truck className="w-4 h-4 text-[#18A84E]" />
              <span>Doorstep Delivery Service</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading leading-tight">
              We Deliver Cooking Gas Right To Your Doorstep
            </h2>

            <p className="text-lg text-white/90 font-medium max-w-2xl">
              Fast, Safe and Reliable LPG Delivery Across Owerri.
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-medium text-white/90 pt-1">
              <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-[#18A84E]" />
                Full Weight Digital Scale Verification
              </span>
              <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-[#1FA1EC]" />
                Leak Tested &amp; Safety Sealed
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center"
          >
            <button
              onClick={onOpenOrderModal}
              className="w-full py-4 px-6 rounded-2xl bg-[#18A84E] hover:bg-[#15803D] text-white font-extrabold text-base uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
            >
              <Flame className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
              <span>Order Now</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full py-4 px-6 rounded-2xl bg-[#DD3F39] hover:bg-[#b91c1c] text-white font-extrabold text-base uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 text-center"
            >
              <Phone className="w-5 h-5" />
              <span>Call Dispatch (07073333969)</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
