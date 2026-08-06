import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Facebook, Instagram, Twitter, MessageSquare, Flame } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyInfo';

interface FooterProps {
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1FA1EC]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#18A84E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Logo & Company Bio */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="dark" size="lg" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              IK.KO Energy Ltd is Owerri’s leading LPG cooking gas supplier. We deliver safe, pure, unadulterated cooking gas, cylinders, regulators, burners, accessories, maintenance, and petrol-to-gas engine conversions across Imo State.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenOrderModal}
                className="px-4 py-2.5 rounded-xl bg-[#18A84E] hover:bg-[#15803D] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
              >
                <Flame className="w-4 h-4" /> Order Gas
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-4 py-2.5 rounded-xl bg-[#DD3F39] hover:bg-[#b91c1c] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" /> Call Dispatch
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-bold text-white font-heading tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-[#1FA1EC] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#1FA1EC] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1FA1EC] transition-colors">Services</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#1FA1EC] transition-colors">Gas Products</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#1FA1EC] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#1FA1EC] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Offered */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white font-heading tracking-wide uppercase">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-[#18A84E] transition-colors">LPG Cooking Gas Supply</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#18A84E] transition-colors">Digital Scale LPG Refilling</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#18A84E] transition-colors">LPG Cylinder Sales (3kg-50kg)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#18A84E] transition-colors">Gas Burners &amp; Regulators</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#18A84E] transition-colors">Doorstep Home Delivery Owerri</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#18A84E] transition-colors">Petrol-to-Gas Engine Conversion</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info & Socials */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white font-heading tracking-wide uppercase">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1FA1EC] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DD3F39] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:underline font-bold text-white">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#18A84E] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="pt-2">
              <p className="text-xs uppercase font-bold text-slate-500 mb-2">Connect With Us</p>
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/2347073333969`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#25D366] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#E4405F] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#1DA1F2] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; 2026 IK.KO Energy Ltd. All rights reserved.</p>
          <p className="text-slate-500">
            MCC Road, Golden Gate, Umuoba Uratta, Owerri, Imo State, Nigeria.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-[#1FA1EC] text-white transition-colors flex items-center gap-1"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden sm:inline text-[11px] font-bold">Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
