import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Flame, MapPin, Clock } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/companyInfo';

interface NavbarProps {
  onOpenOrderModal: (item?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const scrollToTarget = () => {
      const element = document.querySelector(href);
      if (element) {
        const header = document.querySelector('header');
        const headerOffset = header ? header.getBoundingClientRect().height : 70;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });
      }
    };

    // Execute scroll after small delay so drawer state change doesn't interrupt touch/scroll
    setTimeout(scrollToTarget, 60);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#18689B] via-[#1FA1EC] to-[#18A84E] text-white text-xs font-medium py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#18A84E] bg-white rounded-full p-0.5" />
              <span>MCC Road, Golden Gate, Owerri, Imo State</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-white/80" />
              <span>{COMPANY_INFO.businessHours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-white/95 font-semibold">
              <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>Fast Doorstep LPG Delivery in Owerri</span>
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
            : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
            aria-label="IK.KO Energy Ltd Homepage"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#1FA1EC] rounded-lg transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#18A84E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Order Gas CTA */}
            <button
              onClick={() => onOpenOrderModal()}
              className="px-4 py-2.5 rounded-xl bg-[#18A84E] hover:bg-[#15803D] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center gap-1.5"
            >
              <Flame className="w-4 h-4" />
              <span>Get Gas Delivered</span>
            </button>

            {/* Prominent Red Call Now Button */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-4 py-2.5 rounded-xl bg-[#DD3F39] hover:bg-[#b91c1c] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 animate-pulse hover:animate-none"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-3 py-2 rounded-lg bg-[#DD3F39] text-white text-xs font-bold flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-over Side Drawer & Backdrop (Outside header to avoid backdrop-filter stacking context bugs) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Overlay Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-[999] md:hidden"
            />

            {/* Slide-over Panel from Right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="fixed inset-y-0 right-0 h-full w-[300px] max-w-[85vw] bg-white z-[1000] text-slate-900 shadow-2xl flex flex-col justify-between p-6 md:hidden overflow-y-auto"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <BrandLogo size="sm" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="py-6 space-y-1.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-800 hover:bg-[#18A84E]/10 hover:text-[#18A84E] rounded-xl transition-all"
                    >
                      <span>{link.name}</span>
                      <Flame className="w-4 h-4 text-slate-400 opacity-60" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer with Actions & Contact Info */}
              <div className="pt-4 border-t border-slate-100 space-y-4">
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenOrderModal();
                    }}
                    className="w-full py-3.5 rounded-xl bg-[#18A84E] hover:bg-[#15803D] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Flame className="w-4 h-4 text-amber-300" />
                    <span>Get Gas Delivered</span>
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="w-full py-3.5 rounded-xl bg-[#DD3F39] hover:bg-[#b91c1c] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 text-center"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {COMPANY_INFO.phone}</span>
                  </a>
                </div>

                {/* Location & Hours note */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1 text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-[#18A84E]" />
                    <span>MCC Road, Owerri, Imo State</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{COMPANY_INFO.businessHours}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
