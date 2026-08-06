import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HomeDeliveryBanner } from './components/HomeDeliveryBanner';
import { GasCalculator } from './components/GasCalculator';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { Flame, Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/companyInfo';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedProductOrService, setSelectedProductOrService] = useState('');

  const handleOpenOrderModal = (item?: string) => {
    setSelectedProductOrService(item || '');
    setOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setOrderModalOpen(false);
    setSelectedProductOrService('');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#333333] font-sans selection:bg-[#1FA1EC] selection:text-white flex flex-col">
      {/* Sticky Top Header Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenOrderModal={handleOpenOrderModal} />

        {/* About Section */}
        <About onOpenOrderModal={() => handleOpenOrderModal('Gas Delivery')} />

        {/* Services Section */}
        <Services onOpenOrderModal={handleOpenOrderModal} />

        {/* Products Section */}
        <Products onOpenOrderModal={handleOpenOrderModal} />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Interactive Gas Usage Calculator */}
        <GasCalculator onOpenOrderModal={handleOpenOrderModal} />

        {/* Home Delivery High Impact Banner */}
        <HomeDeliveryBanner onOpenOrderModal={() => handleOpenOrderModal('Home Gas Delivery')} />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Two-Column Contact Section with EmailJS Form & Google Maps */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenOrderModal={() => handleOpenOrderModal('Gas Delivery')} />

      {/* Quick Order / Quote Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={handleCloseOrderModal}
        initialProductOrService={selectedProductOrService}
      />

      {/* Mobile Floating Action Bar */}
      <div className="fixed bottom-4 left-4 right-4 z-30 sm:hidden flex gap-2">
        <button
          onClick={() => handleOpenOrderModal()}
          className="flex-1 py-3 px-4 rounded-xl bg-[#18A84E] text-white font-extrabold text-xs uppercase tracking-wider shadow-2xl flex items-center justify-center gap-1.5 border border-white/20"
        >
          <Flame className="w-4 h-4 text-amber-300" />
          <span>Get Gas Delivered</span>
        </button>

        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="py-3 px-4 rounded-xl bg-[#DD3F39] text-white font-extrabold text-xs uppercase tracking-wider shadow-2xl flex items-center justify-center gap-1.5 border border-white/20"
        >
          <Phone className="w-4 h-4" />
          <span>Call Us</span>
        </a>
      </div>
    </div>
  );
}
