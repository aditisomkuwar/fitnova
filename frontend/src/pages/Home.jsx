import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  UserPlus,
  Sparkles,
  Activity,
  BarChart3,
  SlidersHorizontal,
  Bot,
  Dumbbell,
  Utensils,
  Brain,
  LineChart,
  BatteryCharging,
  Target,
  HeartPulse,
  Flame,
  Droplet,
  Moon,
  ShieldCheck,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

/**
 * FitNova — premium AI healthcare & fitness landing page.
 * Design language: dark glass, aurora gradients in brushed copper/bronze,
 * restrained motion, and a signature "live analytics" dashboard as the hero's centerpiece.
 */

const Home = () => {
  return (
    <div
      className="min-h-screen bg-[#0F172A] text-white relative overflow-hidden"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* Global fonts + custom keyframes (kept local to this file, Tailwind-only elsewhere) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        .font-display { font-family: 'Space Grotesk', 'Inter', ui-sans-serif, sans-serif; }

        @keyframes aurora-drift-1 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          50% { transform: translate(6%, 8%) scale(1.15); }
        }
        @keyframes aurora-drift-2 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          50% { transform: translate(-8%, -4%) scale(1.1); }
        }
        @keyframes aurora-drift-3 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          50% { transform: translate(4%, -10%) scale(1.08); }
        }
        .animate-aurora-1 { animation: aurora-drift-1 18s ease-in-out infinite; }
        .animate-aurora-2 { animation: aurora-drift-2 22s ease-in-out infinite; }
        .animate-aurora-3 { animation: aurora-drift-3 26s ease-in-out infinite; }

        @keyframes float-y {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .animate-float { animation: float-y 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-y 9s ease-in-out infinite; }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(600%); }
        }
        .animate-scan { animation: scan 5s linear infinite; }

        @keyframes particle-rise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-620px) translateX(20px); opacity: 0; }
        }
        .animate-particle { animation: particle-rise linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .animate-aurora-1, .animate-aurora-2, .animate-aurora-3,
          .animate-float, .animate-float-slow, .animate-scan, .animate-particle {
            animation: none !important;
          }
        }
      `}</style>

      <AuroraBackground />
      <GridOverlay />
      <Particles />

      <div className="relative z-10">
        <Hero />
        <HowItWorks />
        <Features />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

/* ================= AMBIENT BACKGROUND ================= */

function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-xl h-144 bg-[#5B21B6]/20 rounded-full blur-[120px] animate-aurora-1" />
      <div className="absolute top-1/3 -right-40 w-160 h-160 bg-[#5B21B6]/20 rounded-full blur-[130px] animate-aurora-2" />
      <div className="absolute bottom-0 left-1/4 w-lg h-128 bg-[#1E293B]/15 rounded-full blur-[120px] animate-aurora-3" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,123,82,0.08),transparent_50%)]" />
    </div>
  );
}

function GridOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(198,123,82,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(198,123,82,0.5) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black, transparent)",
      }}
    />
  );
}

function Particles() {
  const particles = Array.from({ length: 14 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden hidden md:block">
      {particles.map((_, i) => {
        const left = (i * 137.5) % 100; // deterministic pseudo-random spread
        const delay = (i % 7) * 1.3;
        const duration = 14 + (i % 5) * 3;
        const size = i % 3 === 0 ? 3 : 2;
        return (
          <span
            key={i}
            className="animate-particle absolute rounded-full bg-[#A78BFA]/40"
            style={{
              left: `${left}%`,
              bottom: "-20px",
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
}

/* ================= HERO ================= */

function Hero() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // disable tilt on mobile
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <section className="min-h-screen grid md:grid-cols-2 items-center px-6 sm:px-10 md:px-20 py-24 md:py-20 gap-16">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-8 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#C4B5FD] text-xs sm:text-sm font-medium backdrop-blur-xl">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#7C3AED]" />
          </span>
          Powered by real-time health AI
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
          <span className="text-white">Your body,</span>
          <br />
          <span className="bg-linear-to-r from-[#A78BFA] via-[#7C3AED] to-[#5B21B6] bg-clip-text text-transparent">
            decoded and optimized
          </span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          FitNova reads your training, recovery, and nutrition signals in real
          time — then rewrites your plan the moment your body asks for it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
          <PrimaryButton to="/signup">
            Start Free <ArrowRight className="w-4 h-4" />
          </PrimaryButton>
          <SecondaryButton to="/about">Learn More</SecondaryButton>
        </div>

        <div className="flex items-center gap-6 justify-center md:justify-start pt-4 text-gray-500 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#7C3AED]" />
            HIPAA-aware &amp; encrypted
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <div className="hidden sm:block">Trusted by 40k+ athletes</div>
        </div>
      </motion.div>

      {/* RIGHT SIDE – AI DASHBOARD */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className="relative flex justify-center items-center"
        style={{ perspective: "1000px" }}
      >
        <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-[#5B21B6]/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute w-56 sm:w-72 h-56 sm:h-72 bg-[#5B21B6]/15 rounded-full blur-3xl animate-float translate-x-16 translate-y-10" />

        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-sm sm:max-w-md bg-white/4 backdrop-blur-3xl border border-white/10 p-5 sm:p-7 rounded-3xl shadow-[0_0_60px_rgba(198,123,82,0.15)] overflow-hidden transition-transform duration-200 ease-out"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-20 bg-linear-to-b from-transparent via-[#7C3AED]/10 to-transparent animate-scan" />
          </div>

          <div className="relative z-10 space-y-5">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white font-display font-semibold text-sm sm:text-base">
                  AI Health Scan
                </div>
                <div className="text-gray-500 text-[11px] sm:text-xs">
                  Updated 2 min ago
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#7C3AED]" />
                </span>
                <span className="text-[#C4B5FD] text-[10px] sm:text-xs font-medium">
                  Live
                </span>
              </div>
            </div>

            {/* Rings row */}
            <div className="flex items-center justify-between px-1">
              <RingMetric value={82} label="Recovery" gradientId="ringRecovery" colorFrom="#C4B5FD" colorTo="#7C3AED" />
              <RingMetric value={68} label="Sleep" gradientId="ringSleep" colorFrom="#7C3AED" colorTo="#5B21B6" />
              <RingMetric value={91} label="Adherence" gradientId="ringAdherence" colorFrom="#A78BFA" colorTo="#C4B5FD" />
            </div>

            {/* Daily progress bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] sm:text-xs text-gray-400">
                <span>Daily Progress</span>
                <span className="text-[#C4B5FD] font-medium">78%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                  className="h-full bg-linear-to-r from-[#A78BFA] via-[#7C3AED] to-[#5B21B6] rounded-full"
                />
              </div>
            </div>

            {/* Metric grid */}
            <div className="grid grid-cols-2 gap-3">
              <MetricTile icon={HeartPulse} label="Heart Rate" value="68" unit="bpm" tint="text-rose-300" />
              <MetricTile icon={Flame} label="Calories" value="1,842" unit="kcal" tint="text-orange-300" />
              <MetricTile icon={Activity} label="BMI" value="22.4" unit="normal" tint="text-[#C4B5FD]" />
              <MetricTile icon={Droplet} label="Water" value="2.1" unit="L / 3L" tint="text-[#A78BFA]" />
            </div>

            {/* AI recommendation */}
            <div className="relative rounded-2xl p-px bg-linear-to-r from-[#A78BFA]/50 via-[#7C3AED]/50 to-[#5B21B6]/50">
              <div className="rounded-2xl bg-[#0F172A]/90 backdrop-blur-xl p-3.5 flex gap-3 items-start">
                <div className="shrink-0 w-7 h-7 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-[#C4B5FD]" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-semibold text-[#C4B5FD] mb-0.5">
                    AI Recommendation
                  </div>
                  <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
                    Recovery is trending low — swap tomorrow's leg day for
                    active mobility work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function RingMetric({ value, label, gradientId, colorFrom, colorTo }) {
  const size = 68;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorFrom} />
            <stop offset="100%" stopColor={colorTo} />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        />
      </svg>
      <div className="-mt-11 sm:-mt-12 text-xs sm:text-sm font-semibold text-white">
        {value}%
      </div>
      <div className="mt-6 text-[10px] sm:text-[11px] text-gray-500">{label}</div>
    </div>
  );
}

function MetricTile({ icon: Icon, label, value, unit, tint }) {
  return (
    <div className="bg-white/3 border border-white/10 rounded-xl p-3 hover:bg-white/6 hover:border-[#7C3AED]/20 transition-colors duration-300">
      <div className="flex items-center gap-1.5 mb-1.5">
        <Icon className={`w-3.5 h-3.5 ${tint}`} />
        <span className="text-[10px] sm:text-[11px] text-gray-500">{label}</span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-sm sm:text-base font-semibold text-white">{value}</span>
        <span className="text-[10px] text-gray-500">{unit}</span>
      </div>
    </div>
  );
}

function PrimaryButton({ to, children }) {
  return (
    <Link
      to={to}
      className="group relative inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base text-[#0F172A] bg-linear-to-r from-[#A78BFA] via-[#7C3AED] to-[#5B21B6] overflow-hidden transition-transform duration-300 hover:scale-[1.03] shadow-[0_0_30px_rgba(198,123,82,0.4)] hover:shadow-[0_0_45px_rgba(198,123,82,0.6)]"
    >
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-12" />
      <span className="relative flex items-center gap-2">{children}</span>
    </Link>
  );
}

function SecondaryButton({ to, children }) {
  return (
    <Link
      to={to}
      className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-white/15 text-gray-200 hover:text-white hover:bg-white/5 hover:border-[#7C3AED]/30 transition-all duration-300 text-sm sm:text-base backdrop-blur-xl"
    >
      {children}
    </Link>
  );
}

/* ================= HOW IT WORKS ================= */

function HowItWorks() {
  const steps = [
    { icon: UserPlus, title: "Profile Setup", desc: "Share your goals, history, and baseline metrics." },
    { icon: Sparkles, title: "Generate Plan", desc: "AI builds a training and nutrition plan around you." },
    { icon: Activity, title: "Track Progress", desc: "Log workouts, meals, and recovery automatically." },
    { icon: BarChart3, title: "Analyze", desc: "We surface trends across weeks, not just workouts." },
    { icon: SlidersHorizontal, title: "Adjust", desc: "Your plan adapts as your data changes." },
    { icon: Bot, title: "AI Coach", desc: "Get nudges and answers whenever you need them." },
  ];

  return (
    <section className="py-24 sm:py-32 px-6">
      <SectionHeading eyebrow="The Loop" title="How FitNova works" />

      <div className="relative max-w-7xl mx-auto mt-16 sm:mt-20">
        {/* connecting line, desktop only */}
        <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#7C3AED]/40 to-transparent" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="hidden relative z-10 w-16 h-16 rounded-2xl bg-white/4 border border-white/10 lg:flex items-center justify-center mb-5 backdrop-blur-xl group-hover:border-[#7C3AED]/40 group-hover:bg-[#7C3AED]/5 transition-all duration-300 group-hover:-translate-y-1 shadow-[0_0_0_rgba(0,0,0,0)] group-hover:shadow-[0_0_25px_rgba(198,123,82,0.25)]">
                <step.icon className="w-6 h-6 text-[#A78BFA]" />
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#0F172A] border border-[#7C3AED]/30 text-[#C4B5FD] text-[10px] font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <div className="bg-white/3 border border-white/10 rounded-2xl p-4 sm:p-5 w-full group-hover:border-white/20 transition-colors duration-300">
                <div className="text-gray-100 font-medium text-sm sm:text-base mb-1.5 font-display">
                  {step.title}
                </div>
                <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= FEATURES ================= */

function Features() {
  const features = [
    { icon: Dumbbell, title: "Adaptive Workouts", desc: "Plans auto-adjust using fatigue & adherence data.", accent: "from-[#A78BFA]/20 to-[#7C3AED]/20" },
    { icon: Utensils, title: "Smart Diet Generator", desc: "Macro-based personalized nutrition engine.", accent: "from-[#7C3AED]/20 to-[#5B21B6]/20" },
    { icon: Brain, title: "Habit Intelligence", desc: "Consistency scoring & drop-off detection.", accent: "from-[#5B21B6]/20 to-[#9CA3AF]/20" },
    { icon: LineChart, title: "Progress Analytics", desc: "Weight trends & measurement tracking.", accent: "from-[#9CA3AF]/20 to-[#7C3AED]/20" },
    { icon: BatteryCharging, title: "Energy Monitoring", desc: "Prevent overtraining with smart recovery.", accent: "from-[#7C3AED]/20 to-[#5B21B6]/20" },
    { icon: Target, title: "Goal Forecast", desc: "Predict timeline to reach your target.", accent: "from-[#7C3AED]/20 to-[#9CA3AF]/20" },
  ];

  return (
    <section className="py-24 sm:py-32 px-6">
      <SectionHeading eyebrow="Capabilities" title="Built for real progress" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mt-16 sm:mt-20">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
            className="group relative rounded-3xl p-px bg-linear-to-br from-white/10 to-white/0 hover:from-[#7C3AED]/40 hover:to-[#5B21B6]/20 transition-all duration-300"
          >
            <div className="relative h-full bg-white/3 backdrop-blur-2xl rounded-3xl p-8 sm:p-9 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:bg-white/5 overflow-hidden">
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-linear-to-br ${f.accent} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#7C3AED]/30 transition-colors duration-300">
                <f.icon className="w-6 h-6 text-[#C4B5FD]" />
              </div>

              <h3 className="relative text-lg sm:text-xl font-semibold mb-3 text-white font-display">
                {f.title}
              </h3>
              <p className="relative text-gray-400 leading-relaxed text-sm sm:text-base">
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ================= SHARED ================= */

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="text-[#C4B5FD] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
        {title}
      </h2>
    </div>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative mt-12">
      <div className="h-px w-full bg-linear-to-r from-transparent via-[#7C3AED]/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <img
            src="/assets/fitvia-logo.png"
            alt="FitNova"
            className="w-8 h-8 object-contain"
          />
          <span className="font-display font-semibold text-white text-sm sm:text-base">
            FitNova
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C4B5FD] hover:border-[#7C3AED]/30 hover:bg-[#7C3AED]/5 transition-all duration-300"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="text-gray-500 text-xs sm:text-sm tracking-wide text-center">
          © {new Date().getFullYear()} FitNova • All Rights reserved.
        </div>
      </div>
    </footer>
  );
}