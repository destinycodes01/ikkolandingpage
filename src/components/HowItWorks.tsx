import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  PhoneCall,
  Send,
  CheckCircle2,
  Truck,
  Flame,
  ShieldCheck,
  RotateCcw,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  Gauge,
  ThumbsUp,
  User,
  Building2,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import confetti from 'canvas-confetti';

interface HowItWorksProps {
  onOpenOrderModal: (item?: string) => void;
}

interface StepData {
  id: number;
  title: string;
  subtitle: string;
  shortLabel: string;
  badge: string;
  icon: React.ElementType;
}

const STEPS: StepData[] = [
  {
    id: 1,
    title: 'Request a Refill',
    subtitle: 'Simply call or message us with your location in Owerri to request a gas refill.',
    shortLabel: 'Request Refill',
    badge: 'Step 1 • Instant Order',
    icon: PhoneCall,
  },
  {
    id: 2,
    title: 'Dispatch Team Alert',
    subtitle: 'Our dispatch center instantly assigns your request to the nearest delivery vehicle.',
    shortLabel: 'Dispatch Alert',
    badge: 'Step 2 • Rapid Dispatch',
    icon: MessageSquare,
  },
  {
    id: 3,
    title: 'Doorstep Pickup',
    subtitle: 'We come directly to your home or business and safely collect your empty cylinder.',
    shortLabel: 'Cylinder Pickup',
    badge: 'Step 3 • Safe Collection',
    icon: Truck,
  },
  {
    id: 4,
    title: 'Station Gas Refill',
    subtitle: 'Your cylinder is taken to our plant, weight-calibrated, and refilled with pure LPG.',
    shortLabel: 'Precision Refill',
    badge: 'Step 4 • Pure LPG Refill',
    icon: Gauge,
  },
  {
    id: 5,
    title: 'Return Doorstep Delivery',
    subtitle: 'We transport your safety-sealed, filled cylinder straight back to your door.',
    shortLabel: 'Express Delivery',
    badge: 'Step 5 • Fast Return',
    icon: MapPin,
  },
  {
    id: 6,
    title: 'Happy Customer',
    subtitle: 'Receive your full cylinder hassle-free and enjoy reliable cooking gas!',
    shortLabel: 'Delivered ✓',
    badge: 'Step 6 • Enjoy Cooking',
    icon: ThumbsUp,
  },
];

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenOrderModal }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto advance scenes when playing
  useEffect(() => {
    if (isPlaying && !shouldReduceMotion) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          const next = (prev + 1) % STEPS.length;
          if (next === 5) {
            // Trigger confetti on step 6
            try {
              confetti({
                particleCount: 40,
                spread: 60,
                origin: { y: 0.7 },
                colors: ['#18A84E', '#1FA1EC', '#F59E0B'],
              });
            } catch (e) {
              // Ignore if confetti blocked
            }
          }
          return next;
        });
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, shouldReduceMotion]);

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentStep((prev) => (prev + 1) % STEPS.length);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentStep((prev) => (prev - 1 + STEPS.length) % STEPS.length);
  };

  const handleSelectStep = (index: number) => {
    setIsPlaying(false);
    setCurrentStep(index);
    if (index === 5) {
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#18A84E', '#1FA1EC', '#F59E0B'],
        });
      } catch (e) {
        // Ignore
      }
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const activeStepObj = STEPS[currentStep];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-20 border-y border-slate-800"
    >
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#18A84E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1FA1EC]/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/0 via-slate-900/80 to-slate-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#18A84E]/20 border border-[#18A84E]/40 text-[#22C55E] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Doorstep Delivery Process</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-white">
              How It <span className="text-[#22C55E]">Works</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              Watch how our seamless 6-step customer journey brings full, safe cooking gas directly to your doorstep in Owerri.
            </p>
          </motion.div>
        </div>

        {/* Reduced Motion Static View */}
        {shouldReduceMotion ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.id}
                  className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 hover:border-[#18A84E] transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#18A84E]/20 text-[#22C55E] flex items-center justify-center font-bold">
                      <StepIcon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full">
                      Step {step.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{step.subtitle}</p>
                </div>
              );
            })}
          </div>
        ) : (
          /* Interactive Animated Storytelling Component */
          <div className="space-y-8">
            {/* Step Navigation Bar / Stepper Tabs */}
            <div className="bg-slate-800/80 backdrop-blur-md p-2 rounded-2xl border border-slate-700/80 shadow-xl">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                {STEPS.map((step, idx) => {
                  const isActive = idx === currentStep;
                  const isCompleted = idx < currentStep;
                  const IconComp = step.icon;

                  return (
                    <button
                      key={step.id}
                      onClick={() => handleSelectStep(idx)}
                      className={`relative flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#18A84E] to-[#16A34A] text-white shadow-lg shadow-[#18A84E]/25 scale-[1.02]'
                          : isCompleted
                          ? 'bg-slate-700/50 text-emerald-400 hover:bg-slate-700'
                          : 'bg-slate-800/40 text-slate-400 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold ${
                            isActive
                              ? 'bg-white text-[#18A84E]'
                              : isCompleted
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-slate-700 text-slate-400'
                          }`}
                        >
                          {isCompleted ? <Check className="w-3 h-3" /> : step.id}
                        </span>
                        <IconComp className="w-4 h-4 hidden sm:inline-block" />
                      </div>
                      <span className="truncate max-w-[90px] text-[11px] font-semibold">{step.shortLabel}</span>

                      {/* Active Indicator Pulse line */}
                      {isActive && (
                        <motion.div
                          layoutId="activeStepGlow"
                          className="absolute -bottom-1 left-3 right-3 h-1 bg-amber-400 rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Stage: Left Graphic Illustration Screen + Right Step Info Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-800/40 border border-slate-700/60 rounded-3xl p-4 sm:p-8 backdrop-blur-md shadow-2xl relative">
              {/* Left Column: Interactive Vector Animation Canvas (7 cols) */}
              <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-2xl min-h-[360px] sm:min-h-[420px] p-4 sm:p-6 relative overflow-hidden flex items-center justify-center">
                {/* Scene Background Grid & Subtle Lighting */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

                <AnimatePresence mode="wait">
                  {/* SCENE 1: CUSTOMER REQUESTS GAS */}
                  {currentStep === 0 && (
                    <motion.div
                      key="scene-1"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full max-w-lg space-y-6 relative z-10"
                    >
                      {/* Customer Room Scene */}
                      <div className="flex items-center justify-between gap-4 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shadow-lg">
                        {/* Customer Icon Avatar */}
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-inner">
                            <User className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">Customer in Owerri</div>
                            <div className="text-xs text-slate-400 flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                              <span>Empty Gas Cylinder</span>
                            </div>
                          </div>
                        </div>

                        {/* Cylinder Graphic with EMPTY Meter */}
                        <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
                          <div className="relative">
                            <Flame className="w-7 h-7 text-emerald-500" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 border border-slate-900" />
                          </div>
                          <div className="text-right">
                            <div className="text-[10px] uppercase font-bold text-slate-400">Status</div>
                            <div className="text-xs font-extrabold text-red-400">0% EMPTY</div>
                          </div>
                        </div>
                      </div>

                      {/* Animated Smartphone Phone Request Chat Interface */}
                      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 space-y-3 shadow-2xl relative overflow-hidden">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            <span className="text-xs font-bold text-slate-200">IK.KO Energy Refill Chat</span>
                          </div>
                          <span className="text-[10px] text-slate-400">{COMPANY_INFO.phone}</span>
                        </div>

                        {/* Customer Message Bubble */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="bg-[#18A84E] text-white p-3 rounded-2xl rounded-tl-none text-xs font-medium max-w-[85%] shadow-md ml-0"
                        >
                          <p>Hello! I need a 12.5kg gas refill delivered at MCC Road, Owerri.</p>
                          <div className="text-[9px] text-emerald-200 text-right mt-1 font-mono">10:42 AM ✓✓</div>
                        </motion.div>

                        {/* System Auto Response Confirmation */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                          className="bg-slate-800 text-slate-200 p-3 rounded-2xl rounded-tr-none text-xs font-medium max-w-[85%] shadow-md ml-auto border border-slate-700/80"
                        >
                          <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Request Received ✓
                          </div>
                          <p className="text-slate-300">Thank you! A driver has been dispatched to collect your cylinder.</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 2: DISPATCH TEAM ALERT */}
                  {currentStep === 1 && (
                    <motion.div
                      key="scene-2"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full max-w-lg space-y-6 relative z-10"
                    >
                      {/* Dispatch Center Alert Card */}
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-xl" />

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-[#1FA1EC]" />
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                              IK.KO Dispatch Terminal
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> LIVE ORDER
                          </span>
                        </div>

                        {/* Incoming Order Card */}
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-mono">ORDER #IKKO-8492</span>
                            <span className="text-xs font-extrabold text-amber-400">Priority: High</span>
                          </div>
                          <div className="text-sm font-bold text-white flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#DD3F39]" /> MCC Road, Owerri
                          </div>
                          <div className="text-xs text-slate-300">Item: 12.5kg Cylinder Cooking Gas Refill</div>
                        </div>

                        {/* Dispatching Driver Animation */}
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#18689B] text-white flex items-center justify-center font-bold">
                              <Truck className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-bold text-white">Driver Assigned</div>
                              <div className="text-[10px] text-slate-400">Van #02 • Dispatched</div>
                            </div>
                          </div>
                          <div className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 font-extrabold text-[11px]">
                            En Route ➔
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 3: DOORSTEP CYLINDER PICKUP */}
                  {currentStep === 2 && (
                    <motion.div
                      key="scene-3"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full max-w-lg space-y-4 relative z-10 text-center"
                    >
                      {/* Animated Owerri Map Graphics */}
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 relative overflow-hidden shadow-2xl">
                        {/* Map Grid Lines */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

                        <div className="relative z-10 flex items-center justify-between px-2 mb-6">
                          <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs">
                            <Building2 className="w-4 h-4 text-[#18A84E]" />
                            <span className="font-bold text-white">IK.KO Station</span>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs">
                            <MapPin className="w-4 h-4 text-[#DD3F39]" />
                            <span className="font-bold text-white">Customer House</span>
                          </div>
                        </div>

                        {/* Delivery Truck Driving Animation along Route */}
                        <div className="relative h-20 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center px-4 overflow-hidden">
                          {/* Route Line */}
                          <div className="absolute left-10 right-10 h-1.5 bg-slate-800 rounded-full">
                            <motion.div
                              className="h-full bg-gradient-to-r from-[#18A84E] via-[#1FA1EC] to-amber-400 rounded-full"
                              initial={{ width: '0%' }}
                              animate={{ width: '100%' }}
                              transition={{ duration: 2.5, repeat: Infinity }}
                            />
                          </div>

                          {/* Animated Moving Van Icon */}
                          <motion.div
                            initial={{ x: '0%' }}
                            animate={{ x: '300%' }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative z-10 bg-[#18A84E] text-white p-2.5 rounded-xl shadow-lg border border-emerald-400"
                          >
                            <Truck className="w-6 h-6 text-white" />
                          </motion.div>
                        </div>

                        <div className="mt-4 bg-emerald-950/40 border border-emerald-800/50 rounded-xl p-3 text-xs text-emerald-300 font-medium flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>Driver arrived at MCC Road • Collecting empty cylinder</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 4: STATION GAS REFILL */}
                  {currentStep === 3 && (
                    <motion.div
                      key="scene-4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full max-w-lg space-y-5 relative z-10"
                    >
                      {/* Refill Station Plant Animation */}
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                          <div className="flex items-center gap-2">
                            <Gauge className="w-5 h-5 text-[#18A84E]" />
                            <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                              Automated LPG Refilling Scale
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                            CALIBRATED 100%
                          </span>
                        </div>

                        {/* Animated Refill Progress Gauge */}
                        <div className="grid grid-cols-2 gap-4 items-center bg-slate-950 p-4 rounded-xl border border-slate-800">
                          {/* Cylinder Image / Graphic */}
                          <div className="flex flex-col items-center justify-center p-3 bg-slate-900 rounded-lg border border-slate-800">
                            <motion.div
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="w-12 h-16 bg-[#18A84E] rounded-lg relative flex items-center justify-center shadow-lg border-2 border-emerald-400"
                            >
                              <Flame className="w-7 h-7 text-amber-300 animate-bounce" />
                              {/* Seal Tag */}
                              <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-amber-400 text-slate-950 font-black text-[8px] rounded uppercase">
                                SON
                              </div>
                            </motion.div>
                            <span className="text-[10px] font-bold text-slate-300 mt-2">12.5kg Cylinder</span>
                          </div>

                          {/* Meter Readout */}
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-xs font-mono mb-1">
                                <span className="text-slate-400">LPG Pressure</span>
                                <span className="text-emerald-400 font-bold">100% FULL</span>
                              </div>
                              {/* Progress bar */}
                              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
                                <motion.div
                                  initial={{ width: '10%' }}
                                  animate={{ width: '100%' }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                  className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-[#18A84E] rounded-full"
                                />
                              </div>
                            </div>

                            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 text-center font-mono">
                              <span className="text-xs text-slate-400">Net Weight: </span>
                              <span className="text-sm font-extrabold text-white">12.50 KG</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between text-xs text-slate-300 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                            <ShieldCheck className="w-4 h-4" /> Safety Leak Test Passed
                          </span>
                          <span className="text-slate-400 text-[10px]">Pure Odorized LPG</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 5: RETURN DOORSTEP DELIVERY */}
                  {currentStep === 4 && (
                    <motion.div
                      key="scene-5"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full max-w-lg space-y-4 relative z-10"
                    >
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Truck className="w-5 h-5 text-[#1FA1EC]" />
                            <span className="text-xs font-bold text-white uppercase tracking-wider">
                              Express Return Dispatch
                            </span>
                          </div>
                          <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> Est: 10 mins
                          </span>
                        </div>

                        {/* Animated Delivery Van Returning */}
                        <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-3">
                          <div className="flex items-center justify-between text-xs text-slate-300">
                            <span>Status: Refilled &amp; Sealed</span>
                            <span className="text-emerald-400 font-bold">Driver Arriving Soon</span>
                          </div>

                          <div className="relative h-16 bg-slate-900 rounded-lg overflow-hidden flex items-center px-4">
                            <motion.div
                              initial={{ x: '-10%' }}
                              animate={{ x: '240%' }}
                              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                              className="flex items-center gap-2 bg-[#18A84E] text-white px-3 py-1.5 rounded-lg shadow-md font-bold text-xs"
                            >
                              <Truck className="w-4 h-4" />
                              <span>IK.KO Express</span>
                            </motion.div>
                          </div>
                        </div>

                        <div className="mt-4 bg-sky-950/40 border border-sky-800/50 p-3 rounded-xl text-xs text-sky-200 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0" />
                          <span>Delivery vehicle approaching customer doorstep at MCC Road.</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 6: HAPPY CUSTOMER */}
                  {currentStep === 5 && (
                    <motion.div
                      key="scene-6"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full max-w-lg space-y-5 relative z-10 text-center"
                    >
                      <div className="bg-gradient-to-br from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-500/50 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 mx-auto flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20">
                          <CheckCircle2 className="w-10 h-10 animate-bounce" />
                        </div>

                        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-extrabold uppercase tracking-wider">
                          Order Delivered ✓
                        </span>

                        <h3 className="text-2xl font-black text-white mt-3 mb-1">
                          Gas Delivered. Hassle Avoided.
                        </h3>
                        <p className="text-xs text-slate-300 max-w-md mx-auto">
                          No heavy lifting, no waiting in line, no unsafe gas refills. Just 100% pure cooking gas delivered right to your home in Owerri!
                        </p>

                        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center gap-3">
                          <button
                            onClick={() => onOpenOrderModal('Doorstep Gas Refill')}
                            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#18A84E] to-[#15803D] hover:from-[#15803D] hover:to-[#166534] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-[#18A84E]/30 transition-all flex items-center justify-center gap-2 group"
                          >
                            <Flame className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
                            <span>Order Gas Now</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>

                          <a
                            href={`tel:${COMPANY_INFO.phone}`}
                            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider border border-slate-700 transition-all flex items-center justify-center gap-2"
                          >
                            <PhoneCall className="w-4 h-4 text-[#1FA1EC]" />
                            <span>Call {COMPANY_INFO.phone}</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Column: Detailed Narrative Text & Scene Controls (5 cols) */}
              <div className="lg:col-span-5 space-y-6 text-left">
                {/* Active Badge */}
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18A84E]/20 text-[#22C55E] text-xs font-extrabold uppercase tracking-wider border border-[#18A84E]/30 mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{activeStepObj.badge}</span>
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight">
                    {activeStepObj.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
                    {activeStepObj.subtitle}
                  </p>
                </div>

                {/* Key Benefits Bullet Highlights */}
                <div className="space-y-2.5 pt-2 border-t border-slate-700/60">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#18A84E] flex-shrink-0" />
                    <span>Same-day doorstep delivery within Owerri metropolis</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#18A84E] flex-shrink-0" />
                    <span>SON-certified safety checks &amp; digital precision scale refill</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#18A84E] flex-shrink-0" />
                    <span>Professional trained drivers with safety gear</span>
                  </div>
                </div>

                {/* Animation Control Buttons: Prev, Play/Pause, Next */}
                <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
                      aria-label="Previous step"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={togglePlay}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-xs font-bold flex items-center gap-1.5"
                      aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-4 h-4 text-amber-400" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 text-emerald-400" />
                          <span>Auto Play</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleNext}
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
                      aria-label="Next step"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Primary Call to Action Button */}
                  <button
                    onClick={() => onOpenOrderModal('Doorstep Gas Refill')}
                    className="px-5 py-2.5 rounded-xl bg-[#18A84E] hover:bg-[#15803D] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
                  >
                    <Flame className="w-4 h-4 text-amber-300" />
                    <span>Order Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
