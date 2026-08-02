import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  HeartPulse,
  Flame,
  Activity,
  Moon,
  Droplet,
  BatteryCharging,
  Brain,
  LineChart as LineChartIcon,
  ShieldCheck,
  Users,
  Target,
  Globe2,
  Utensils,
  Dumbbell,
  BarChart3,
  ArrowRight,
} from "lucide-react";

/**
 * About — premium, futuristic AI-healthcare page for HealthUP.
 * Palette: dark neutrals (#030712 / #0F172A / #111827) + emerald / teal / cyan accents.
 * All original content, routes, and handlers are preserved; only the UI/UX layer changed.
 */

const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/signup");
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden pb-24 text-white"
      style={{
        background: `
          radial-gradient(circle at top, rgba(168,90,43,0.14), transparent 35%),
          radial-gradient(circle at bottom right, rgba(194,112,58,0.12), transparent 40%),
          #030712
        `,
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
        '--primary': '#eab892',
        '--mid': '#c2703a',
        '--dark': '#8b4a26',
        '--accent': '#a85a2b'
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Space Grotesk', 'Inter', ui-sans-serif, sans-serif; }

        @keyframes riseIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-18px); } }
        @keyframes floatSlow { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes glow { 0%,100% { opacity: .35; } 50% { opacity: .7; } }
        @keyframes auroraDrift1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(6%,8%) scale(1.15); } }
        @keyframes auroraDrift2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-8%,-6%) scale(1.1); } }
        @keyframes particleRise { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: .6; } 90% { opacity: .25; } 100% { transform: translateY(-560px); opacity: 0; } }
        @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(500%); } }

        .animate-aurora-1 { animation: auroraDrift1 20s ease-in-out infinite; }
        .animate-aurora-2 { animation: auroraDrift2 24s ease-in-out infinite; }
        .animate-particle { animation: particleRise linear infinite; }
        .animate-scan { animation: scan 5s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .animate-aurora-1, .animate-aurora-2, .animate-particle, .animate-scan { animation: none !important; }
        }
      `}</style>

      <AmbientBackground />

      {/* Hero */}
      <section className="relative z-10 px-6 pt-24 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] backdrop-blur-xl" style={{ border: '1px solid rgba(194,112,58,0.28)', background: 'rgba(194,112,58,0.06)', color: 'var(--primary)' }}>
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" style={{ color: 'var(--mid)' }} />
              Premium AI Health Platform
            </span>

            <h1 className="mb-8 mt-6 text-5xl md:text-6xl lg:text-7xl font-black font-display leading-[1.05] tracking-tight">
              <span style={{ background: 'linear-gradient(90deg, #FFFFFF, var(--primary), var(--mid))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                About
              </span>
              <br />
              <span style={{ background: 'linear-gradient(90deg, var(--primary), var(--mid), var(--dark))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                Fitvia
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-8 text-gray-400">
              HealthUP combines AI-powered health guidance, intelligent
              nutrition, adaptive workout planning and smart progress tracking
              into one premium platform designed for long-term wellness—not
              short-term motivation.
            </p>

            <div className="mt-10 flex flex-col gap-4  sm:flex-row">
              <RippleButton onClick={handleNavigate}>
                Get Started <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </RippleButton>
              <GhostButton onClick={() => navigate("/contact")}>
                Contact Us
              </GhostButton>
            </div>
          </motion.div>

          {/* Right — AI Health Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <HealthDashboardCard />
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="relative z-10 px-6 py-20 md:px-10" aria-label="Platform statistics">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {[
              { icon: Users, target: 15, suffix: "K+", label: "Happy Users" },
              { icon: Target, target: 98, suffix: "%", label: "AI Accuracy" },
              { icon: Brain, target: 24, suffix: "/7", label: "AI Coach" },
              { icon: Globe2, target: 100, suffix: "+", label: "Countries" },
            ].map((stat, i) => (
              <StatCard key={stat.label} {...stat} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why HealthUP */}
      <section className="relative z-10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid gap-12 rounded-4xl bg-white/3 p-8 backdrop-blur-3xl shadow-[0_25px_60px_rgba(0,0,0,.35)] md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
            style={{ border: '1px solid rgba(194,112,58,0.18)' }}
          >
            {/* Illustration */}
            <div className="relative flex items-center justify-center">
              <AiPulseIllustration />
            </div>

            {/* Copy + timeline */}
            <div>
              
              <span className="inline-block rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em]" style={{ border: '1px solid rgba(194,112,58,0.28)', background: 'rgba(234,184,146,0.06)', color: 'var(--primary)' }}>
                Why Fitvia
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold font-display leading-tight">
                <span style={{ background: 'linear-gradient(90deg, #FFFFFF, var(--primary), var(--mid))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                  Built for Real People,
                </span>
                <br />
                <span className="text-white">Not Perfect Schedules.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                Most fitness apps fail because they expect users to be perfect.
                HealthUP adapts to your lifestyle using AI. Whether you miss
                workouts, sleep less, or change your goals, your plan evolves
                with you instead of forcing you to restart.
              </p>

              <ol className="mt-10 space-y-5">
                {[
                  { title: "You miss a workout", body: "The plan quietly rebalances your week — no guilt, no restart." },
                  { title: "You sleep less", body: "Recovery-aware AI lowers intensity until your body is ready again." },
                  { title: "Your goals change", body: "Tell HealthUP once, and every future recommendation follows." },
                ].map((step, i) => (
                  <motion.li
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex gap-4 rounded-2xl bg-[#0F172A]/60 p-4 transition-colors duration-300"
                    style={{ border: '1px solid rgba(194,112,58,0.12)' }}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold" style={{ border: '1px solid rgba(194,112,58,0.28)', background: 'rgba(234,184,146,0.08)', color: 'var(--primary)' }}>
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-semibold text-white">{step.title}</div>
                      <p className="mt-1 text-sm text-gray-400">{step.body}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative z-10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
              <p className="text-sm uppercase tracking-[0.3em]" style={{ color: 'var(--primary)' }}>
              Our Core Values
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold font-display">
              <span style={{ background: 'linear-gradient(90deg, #FFFFFF, var(--primary), var(--mid))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                What Makes Fitvia Different
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { no: "01", icon: BarChart3, title: "Smart Analytics", body: "Track health trends with intelligent insights instead of overwhelming statistics." },
              { no: "02", icon: Brain, title: "Adaptive AI", body: "Plans automatically improve according to your consistency, progress and recovery." },
              { no: "03", icon: HeartPulse, title: "Long-Term Wellness", body: "Our goal isn't quick transformation—it's sustainable healthy living." },
            ].map((item, i) => (
              <ValueCard key={item.no} {...item} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="relative z-10 px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-4xl bg-white/3 p-10 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,.35)]"
            style={{ border: '1px solid rgba(194,112,58,0.18)' }}
          >
            <p className="text-sm uppercase tracking-[0.3em]" style={{ color: 'var(--primary)' }}>
              Our Vision
            </p>

              <h2 className="mt-5 text-4xl font-bold font-display leading-tight">
              <span style={{ background: 'linear-gradient(90deg, #FFFFFF, var(--primary), var(--mid))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                AI That Understands
              </span>
              <br />
              <span className="text-white">Your Health Journey.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              HealthUP is designed to become your intelligent health partner.
              Instead of showing random numbers, it analyzes your habits,
              nutrition, workouts and recovery to guide better daily decisions.
            </p>

            <div className="mt-10">
              <AiPulseIllustration compact />
            </div>
          </motion.div>

          {/* Right — checklist */}
          <div className="grid gap-6">
            {[
              { icon: Sparkles, text: "AI Powered Recommendations" },
              { icon: Utensils, text: "Personal Nutrition Tracking" },
              { icon: Dumbbell, text: "Workout Progress Analytics" },
              { icon: LineChartIcon, text: "Real-time Health Insights" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl p-px transition-all duration-300"
                style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(234,184,146,0.04))' }}
              >
                <div className="flex items-center gap-4 rounded-2xl bg-[#0F172A]/70 p-6 backdrop-blur-xl transition-transform duration-300 group-hover:translate-x-1.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#030712]" style={{ background: 'linear-gradient(135deg, var(--primary), var(--mid))' }}>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.text}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] p-10 text-center shadow-[0_30px_70px_rgba(0,0,0,.45)] md:p-16"
          style={{ border: '1px solid rgba(194,112,58,0.14)', background: 'linear-gradient(180deg, #0F172A, #030712)' }}
        >
          {/* animated glow border */}
          <div className="pointer-events-none absolute inset-0 rounded-[36px] opacity-60 animate-[spin_10s_linear_infinite]" style={{ background: 'conic-gradient(from 0deg, transparent, rgba(194,112,58,0.28), transparent 35%)' }} />
          <div className="pointer-events-none absolute inset-px rounded-[35px] bg-linear-to-br from-[#0F172A] to-[#030712]" />
          <CtaParticles />

          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.35em]" style={{ color: 'var(--primary)' }}>
              Start Today
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-black font-display leading-tight">
              <span style={{ background: 'linear-gradient(90deg, #FFFFFF, var(--primary), var(--mid))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                Your Health.
              </span>
              <br />
              <span className="text-white">Powered by AI.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              Create your free account and experience a premium AI-powered
              platform that helps you build healthier habits with personalized
              guidance.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <RippleButton onClick={handleNavigate}>
                Create Account <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </RippleButton>
              <GhostButton onClick={() => navigate("/contact")}>
                Contact Us
              </GhostButton>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;

/* ================= AMBIENT BACKGROUND ================= */

function AmbientBackground() {
  return (
    <>
      {/* grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,.4) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 15%, black, transparent)",
        }}
      />

      {/* noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* aurora blobs */}
      <div className="pointer-events-none absolute -top-24 left-0 h-80 w-80 rounded-full blur-[120px] animate-aurora-1" style={{ background: 'rgba(168,90,43,0.16)' }} />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full blur-[140px] animate-aurora-2" style={{ background: 'rgba(194,112,58,0.12)' }} />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-[130px] animate-[glow_6s_ease-in-out_infinite]" style={{ background: 'rgba(234,184,146,0.08)' }} />

      {/* particles */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
        {Array.from({ length: 12 }).map((_, i) => {
          const left = (i * 8.3 + 4) % 100;
          const duration = 14 + (i % 5) * 3;
          const delay = (i % 6) * 1.4;
          return (
            <span
              key={i}
              className="animate-particle absolute rounded-full"
              style={{
                left: `${left}%`,
                bottom: "-10px",
                width: i % 3 === 0 ? 3 : 2,
                height: i % 3 === 0 ? 3 : 2,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                background: 'rgba(234,184,146,0.18)'
              }}
            />
          );
        })}
      </div>
    </>
  );
}

function CtaParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="animate-particle absolute rounded-full"
          style={{
            left: `${8 + i * 11}%`,
            bottom: "0px",
            width: 2,
            height: 2,
            animationDuration: `${10 + (i % 4) * 2}s`,
            animationDelay: `${i * 0.9}s`,
            background: 'rgba(194,112,58,0.2)'
          }}
        />
      ))}
    </div>
  );
}

/* ================= HEALTH DASHBOARD (HERO RIGHT) ================= */

function HealthDashboardCard() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
      <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", border: '1px solid rgba(194,112,58,0.18)' }}
      className="relative overflow-hidden rounded-4xl bg-white/4 p-7 backdrop-blur-3xl shadow-[0_25px_60px_rgba(0,0,0,.35)] transition-transform duration-200 ease-out sm:p-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="h-24 w-full animate-scan" style={{ background: 'linear-gradient(180deg, transparent, rgba(234,184,146,0.08), transparent)' }} />
      </div>

      <div className="relative z-10 space-y-6">
        {/* Mission header */}
        <div>
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.25em]" style={{ color: 'var(--primary)' }}>
              Our Mission
            </p>
            <span className="flex items-center gap-1.5 rounded-full px-2.5 py-1" style={{ border: '1px solid rgba(194,112,58,0.18)', background: 'rgba(234,184,146,0.06)' }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full" style={{ background: 'var(--mid)', opacity: 0.75 }} />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: 'var(--mid)' }} />
              </span>
              <span className="text-[10px] font-medium" style={{ color: 'var(--primary)' }}>Live</span>
            </span>
          </div>
          <h2 className="mt-3 text-2xl font-bold font-display leading-snug text-white">
            Smarter health decisions through Artificial Intelligence.
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-400">
            Instead of generic plans, HealthUP learns from your progress and
            continuously improves your journey.
          </p>
        </div>

        {/* Rings */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-1">
          <div className="mx-auto sm:mx-0">
            <RingMetric value={84} label="Recovery" from="var(--primary)" to="var(--mid)" />
          </div>
          <div className="mx-auto sm:mx-0">
            <RingMetric value={74} label="Recovery" from="var(--mid)" to="var(--dark)" />
          </div>
          <div className="mx-auto sm:mx-0">
            <RingMetric value={91} label="Activity" from="var(--primary)" to="var(--mid)" />
          </div>
        </div>

        {/* Metric grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <MetricTile icon={HeartPulse} label="Heart Rate" value="68" unit="bpm" />
          <MetricTile icon={Flame} label="Calories" value="1,842" unit="kcal" />
          <MetricTile icon={Activity} label="BMI" value="22.4" unit="normal" />
          <MetricTile icon={Moon} label="Sleep Score" value="86" unit="/100" />
          <MetricTile icon={Droplet} label="Hydration" value="2.1" unit="L/3L" />
          <MetricTile icon={BatteryCharging} label="Daily Activity" value="78" unit="%" />
        </div>

        {/* Weekly progress chart */}
        <div className="rounded-2xl bg-[#0F172A]/60 p-4" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs text-gray-400">Weekly Progress</span>
            <span className="flex items-center gap-1 text-xs font-medium" style={{ color: 'var(--primary)' }}>
              <LineChartIcon className="h-3.5 w-3.5" aria-hidden="true" />
              +12%
            </span>
          </div>
          <WeeklyLineChart />
        </div>

        {/* AI recommendation */}
        <div className="relative rounded-2xl p-px" style={{ background: 'linear-gradient(90deg, rgba(234,184,146,0.25), rgba(194,112,58,0.25), rgba(139,74,38,0.25))' }}>
          <div className="flex items-start gap-3 rounded-2xl bg-[#030712]/90 p-3.5 backdrop-blur-xl">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ border: '1px solid rgba(194,112,58,0.18)', background: 'rgba(234,184,146,0.06)' }}>
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" style={{ color: 'var(--primary)' }} />
            </div>
            <div>
              <div className="mb-0.5 text-xs font-semibold" style={{ color: 'var(--primary)' }}>
                AI Recommendation
              </div>
              <p className="text-xs leading-relaxed text-gray-400">
                Recovery is trending low — swap tomorrow's leg day for active
                mobility work.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function RingMetric({ value, label, from, to }) {
  const size = 68;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const gradientId = `ring-${label.replace(/\s+/g, "-")}`;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(255,255,255,0.08)" strokeWidth={strokeWidth} fill="none" />
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
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
        />
      </svg>
      <div className="-mt-11 text-xs font-semibold text-white sm:-mt-12 sm:text-sm">{value}%</div>
      <div className="mt-6 text-center text-[10px] text-gray-500 sm:text-[11px]">{label}</div>
    </div>
  );
}

function MetricTile({ icon: Icon, label, value, unit }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/3 p-3 transition-colors duration-300 hover:bg-white/6" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="mb-1.5 flex items-center gap-1.5">
        <Icon className="h-3.5 w-3.5" aria-hidden="true" style={{ color: 'var(--primary)' }} />
        <span className="text-[10px] text-gray-500 sm:text-[11px]">{label}</span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-sm font-semibold text-white sm:text-base">{value}</span>
        <span className="text-[10px] text-gray-500">{unit}</span>
      </div>
    </div>
  );
}

function WeeklyLineChart() {
  // Simple deterministic weekly progress curve, drawn once on scroll into view.
  const points = [10, 22, 18, 30, 26, 38, 34];
  const width = 260;
  const height = 60;
  const step = width / (points.length - 1);
  const max = Math.max(...points);
  const coords = points.map((p, i) => [i * step, height - (p / max) * height]);
  const path = coords.reduce(
    (acc, [x, y], i) => acc + (i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`),
    ""
  );
  const areaPath = `${path} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" preserveAspectRatio="none">
      <defs>
     <linearGradient id="weeklyFill" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
  <stop offset="50%" stopColor="var(--mid)" stopOpacity="0.18" />
  <stop offset="100%" stopColor="var(--dark)" stopOpacity="0" />
</linearGradient>

<linearGradient id="weeklyStroke" x1="0" y1="0" x2="1" y2="0">
  <stop offset="0%" stopColor="var(--primary)" />
  <stop offset="50%" stopColor="var(--mid)" />
  <stop offset="100%" stopColor="var(--dark)" />
</linearGradient>
      </defs>
      <motion.path
        d={areaPath}
        fill="url(#weeklyFill)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke="url(#weeklyStroke)"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      {coords.map(([x, y], i) => (
  <motion.circle
    key={i}
    cx={x}
    cy={y}
    r="3.5"
    fill="var(--primary)"
    stroke="#030712"
    strokeWidth="2"
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.08 }}
  />
))}
    </svg>
  );
}

/* ================= STATISTICS ================= */

function StatCard({ icon: Icon, target, suffix, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-2xl p-px transition-all duration-300"
      style={{ background: 'linear-gradient(135deg, rgba(234,184,146,0.18), rgba(194,112,58,0.12))' }}
    >
      <div className="relative flex h-full flex-col items-center rounded-2xl bg-[#0F172A]/70 p-6 text-center backdrop-blur-2xl transition-transform duration-300 group-hover:-translate-y-2" style={{ boxShadow: '0 20px 45px rgba(194,112,58,0.08)' }}>
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl" style={{ border: '1px solid rgba(194,112,58,0.18)', background: 'rgba(234,184,146,0.08)' }}>
          <Icon className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--primary)' }} />
        </div>
        <h3 className="text-3xl font-bold font-display text-white">
          <Counter target={target} suffix={suffix} />
        </h3>
        <p className="mt-2 text-xs uppercase tracking-widest text-gray-500">{label}</p>
      </div>
    </motion.div>
  );
}

function Counter({ target, suffix = "", duration = 1400 }) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  return (
    <motion.span
      onViewportEnter={() => {
        if (startedRef.current) return;
        startedRef.current = true;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(tick);
          else setValue(target);
        };
        requestAnimationFrame(tick);
      }}
      viewport={{ once: true, margin: "-40px" }}
    >
      {value}
      {suffix}
    </motion.span>
  );
}

/* ================= ILLUSTRATION ================= */

function AiPulseIllustration({ compact = false }) {
  const size = compact ? 220 : 300;
  return (
    <div
      className="relative flex items-center justify-center mx-auto"
      style={{ width: '100%', maxWidth: size, aspectRatio: '1 / 1', height: 'auto' }}
      aria-hidden="true"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            inset: `${i * 15}%`,
            animation: `floatSlow ${5 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
            border: '1px solid rgba(194,112,58,0.18)'
          }}
        />
      ))}
      <div className="absolute h-24 w-24 rounded-full blur-2xl" style={{ background: 'rgba(234,184,146,0.12)' }} />
      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 backdrop-blur-xl" style={{ border: '1px solid rgba(194,112,58,0.2)' }}>
        <Brain className="h-8 w-8" style={{ color: 'var(--primary)' }} />
      </div>
      <svg className="absolute inset-0" viewBox="0 0 300 300">
        <circle
          cx="150"
          cy="150"
          r="120"
          fill="none"
          stroke="url(#pulseGrad)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <defs>
          <linearGradient id="pulseGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ================= CORE VALUE CARD (tilt + glow) ================= */

function ValueCard({ no, icon: Icon, title, body, delay }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };
  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group rounded-[28px] bg-[#0F172A]/70 p-8 backdrop-blur-2xl transition-[border-color,box-shadow] duration-500"
      style={{ transformStyle: "preserve-3d", transition: "transform 0.2s ease-out", border: '1px solid rgba(194,112,58,0.18)', boxShadow: '0 0 0 rgba(0,0,0,0)' }}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-[#030712]" style={{ background: 'linear-gradient(135deg, var(--primary), var(--mid))' }}>
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <span className="text-sm font-semibold" style={{ color: 'rgba(234,184,146,0.5)' }}>{no}</span>
      </div>

      <h3 className="mt-8 text-2xl font-bold font-display text-white transition-colors group-hover:text-[#eab892]">
        {title}
      </h3>
      <p className="mt-5 leading-8 text-gray-400">{body}</p>
    </motion.article>
  );
}

/* ================= BUTTONS ================= */

function RippleButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full px-10 py-4 text-lg font-semibold text-[#030712] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
      style={{ background: 'linear-gradient(90deg, var(--mid), #d68a52, var(--dark))', boxShadow: '0 15px 35px rgba(168,90,43,0.28)' }}
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative flex items-center gap-2">{children}</span>
    </button>
  );
}

function GhostButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full w-full sm:w-auto px-10 py-4 text-lg font-semibold backdrop-blur-xl transition-all duration-300"
      style={{ border: '1px solid rgba(194,112,58,0.22)', color: 'var(--primary)', background: 'transparent' }}
    >
      {children}
    </button>
  );
}