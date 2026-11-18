import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  User,
  Lock,
  Eye,
  EyeOff,
  LogIn as LogInIcon,
  ArrowRight,
  Loader2,
  Sparkles,
  HeartPulse,
  Flame,
  Moon,
  Droplet,
  Activity,
  BatteryCharging,
  Lock as EncryptIcon,
} from "lucide-react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { useAuth } from "../context/AuthContext";
import ForgetPasswordModal from "../components/publicModals/ForgetPasswordModal";
import logo from "../assets/fitvia.png";

/**
 * Login — premium split-screen AI-healthcare authentication page for FitNova.
 * Palette matches the rest of the site: #7C3AED / #A78BFA / #C4B5FD / #5B21B6
 * on dark neutrals. All auth state, API calls, session storage, context, and
 * modal logic are unchanged — only the UI/UX layer has been redesigned.
 */

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isForgetPasswordModal, setIsForgetPasswordModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();

  const handleClear = () => {
    setFormData({
      identifier: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await api.post("/auth/login", formData);
      toast.success(res?.data?.message);
      setUser(res?.data?.data);
      console.log(res.data.data);

      sessionStorage.setItem("HealthUP", JSON.stringify(res?.data?.data));
      navigate("/user-dashboard");
      handleClear();
    } catch (error) {
      console.log({ error });
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className="relative min-h-screen overflow-hidden text-white"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(198,123,82,.16), transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(140,74,47,.14), transparent 40%),
            #0F172A
          `,
          fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
          .font-display { font-family: 'Space Grotesk', 'Inter', ui-sans-serif, sans-serif; }

          @keyframes floatSlow { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
          @keyframes floatSlower { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-9px); } }
          @keyframes glow { 0%,100% { opacity: .35; } 50% { opacity: .7; } }
          @keyframes auroraDrift1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(6%,8%) scale(1.15); } }
          @keyframes auroraDrift2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-8%,-6%) scale(1.1); } }
          @keyframes particleRise { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: .6; } 90% { opacity: .25; } 100% { transform: translateY(-560px); opacity: 0; } }
          @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(500%); } }

          .animate-float-slow { animation: floatSlow 6s ease-in-out infinite; }
          .animate-float-slower { animation: floatSlower 8s ease-in-out infinite; }
          .animate-aurora-1 { animation: auroraDrift1 20s ease-in-out infinite; }
          .animate-aurora-2 { animation: auroraDrift2 24s ease-in-out infinite; }
          .animate-particle { animation: particleRise linear infinite; }
          .animate-scan { animation: scan 5s linear infinite; }

          @media (prefers-reduced-motion: reduce) {
            .animate-float-slow, .animate-float-slower, .animate-aurora-1, .animate-aurora-2, .animate-particle, .animate-scan { animation: none !important; }
          }
        `}</style>

        <AmbientBackground />

        <div className="relative z-10 grid min-h-screen w-full lg:grid-cols-2">
          {/* LEFT — Branding */}
          <div className="relative hidden min-w-0 flex-col justify-center overflow-hidden px-8 py-12 lg:flex lg:px-10 lg:py-16 xl:px-14 2xl:px-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Link to="/" className="mb-10 inline-flex items-center gap-3">
                <img src={logo} alt="FitNova" className="h-11 w-11 object-contain" />
                <div className="leading-none">
                  <div className="bg-linear-to-r from-[#C4B5FD] via-[#7C3AED] to-[#5B21B6] bg-clip-text text-2xl font-black text-transparent">
                    FitNova
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#7C3AED]/70">
                    AI Health &amp; Fitness
                  </div>
                </div>
              </Link>

              <h1 className="mb-5 max-w-lg text-3xl font-bold font-display leading-tight lg:text-4xl xl:text-5xl">
                Your health, guided by{" "}
                <span className="bg-linear-to-r from-[#C4B5FD] via-[#7C3AED] to-[#5B21B6] bg-clip-text text-transparent">
                  intelligent AI.
                </span>
              </h1>
              <p className="max-w-md leading-relaxed text-gray-400">
                Sign in to pick up right where you left off — your plans,
                progress, and recovery insights are all waiting for you.
              </p>
            </motion.div>

            {/* Dashboard preview with floating metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="relative mt-14 w-full max-w-lg"
            >
              <DashboardPreview />
            </motion.div>
          </div>

          {/* RIGHT — Login card */}
          <div className="flex min-w-0 items-center justify-center px-4 py-12 sm:px-6 sm:py-16 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-md"
            >
              {/* Mobile-only compact logo */}
              <Link to="/" className="mb-8 flex items-center justify-center gap-2.5 lg:hidden">
                <img src={logo} alt="FitNova" className="h-9 w-9 object-contain" />
                <span className="bg-linear-to-r from-[#C4B5FD] via-[#7C3AED] to-[#5B21B6] bg-clip-text text-xl font-black text-transparent">
                  FitNova
                </span>
              </Link>

              {/* Card */}
              <div className="rounded-4xl bg-linear-to-br from-[#7C3AED]/35 via-[#A78BFA]/15 to-[#5B21B6]/25 p-px shadow-[0_25px_70px_rgba(0,0,0,.4)]">
                <div className="relative overflow-hidden rounded-[31px] bg-[#111111]/90 p-6 backdrop-blur-3xl sm:p-8 lg:p-9">
                  <div className="pointer-events-none absolute inset-0">
                    <div className="h-24 w-full bg-linear-to-b from-transparent via-[#7C3AED]/10 to-transparent animate-scan" />
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-7 flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <span className="absolute inset-0 -z-10 rounded-full bg-[#7C3AED]/30 blur-xl" />
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#7C3AED]/30 bg-white/5 text-[#C4B5FD] backdrop-blur-md">
                          <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>

                      <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#C4B5FD]">
                        <Sparkles className="h-3 w-3" aria-hidden="true" />
                        Secure Sign In
                      </span>

                      <h2 className="font-display text-3xl font-bold text-white">
                        Welcome Back
                      </h2>
                      <p className="mt-1 text-sm text-gray-400">
                        Sign in to continue your journey
                      </p>
                    </div>

                    <div className="mb-7 h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />

                    <form onSubmit={handleSubmit} onReset={handleClear} className="space-y-5">
                      {/* Identifier */}
                      <FloatingIconInput
                        id="identifier"
                        name="identifier"
                        type="text"
                        label="Email Address / Mobile Number"
                        icon={User}
                        value={formData.identifier}
                        onChange={handleChange}
                        disabled={isLoading}
                        required
                      />

                      {/* Password */}
                      <div className="relative">
                        <FloatingIconInput
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          label="Password"
                          icon={Lock}
                          value={formData.password}
                          onChange={handleChange}
                          disabled={isLoading}
                          required
                          trailingSlot={
                            <button
                              type="button"
                              onClick={() => setShowPassword((v) => !v)}
                              aria-label={showPassword ? "Hide password" : "Show password"}
                              className="pointer-events-auto absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200 hover:text-[#C4B5FD] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                            >
                              <AnimatePresence mode="wait" initial={false}>
                                {showPassword ? (
                                  <motion.span
                                    key="hide"
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.7 }}
                                    transition={{ duration: 0.15 }}
                                    className="flex"
                                  >
                                    <EyeOff className="h-4 w-4" aria-hidden="true" />
                                  </motion.span>
                                ) : (
                                  <motion.span
                                    key="show"
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.7 }}
                                    transition={{ duration: 0.15 }}
                                    className="flex"
                                  >
                                    <Eye className="h-4 w-4" aria-hidden="true" />
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </button>
                          }
                        />
                      </div>

                      {/* Sign In button */}
                      <SubmitButton isLoading={isLoading} />

                      {/* Forgot password */}
                      <div className="border-b border-white/10 pb-5 text-right">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsForgetPasswordModal(true);
                          }}
                          className="group relative text-sm text-gray-400 transition-colors duration-200 hover:text-[#C4B5FD] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                        >
                          Forgot Password?
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#C4B5FD] transition-all duration-300 group-hover:w-full" />
                        </button>
                      </div>

                      {/* Signup */}
                      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/3 px-4 py-3.5 text-sm">
                        <span className="text-gray-400">Don't have an account?</span>
                        <Link
                          to="/signup"
                          className="group inline-flex items-center gap-1 font-semibold text-[#C4B5FD] transition-colors duration-200 hover:text-[#A78BFA]"
                        >
                          Sign Up
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Trust row */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-gray-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#7C3AED]" aria-hidden="true" />
                  Secure Login
                </span>
                <span className="flex items-center gap-1.5">
                  <EncryptIcon className="h-3.5 w-3.5 text-[#7C3AED]" aria-hidden="true" />
                  256-bit Encryption
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-[#7C3AED]" aria-hidden="true" />
                  AI Protected
                </span>
              </div>

              <p className="mt-5 text-center text-xs text-gray-500">
                By signing in you agree to our terms &amp; privacy policy.
              </p>
            </motion.div>
          </div>
        </div>

        {isForgetPasswordModal && (
          <ForgetPasswordModal onClose={() => setIsForgetPasswordModal(false)} />
        )}
      </div>

      <footer className="border-t border-[#7C3AED]/20 bg-[#0F172A] text-white">
        <div className="py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FitNova • All Rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Login;

/* ================= AMBIENT BACKGROUND ================= */

function AmbientBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(198,123,82,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(198,123,82,.4) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none absolute -top-24 left-0 h-80 w-80 rounded-full bg-[#7C3AED]/20 blur-[120px] animate-aurora-1" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#5B21B6]/20 blur-[140px] animate-aurora-2" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#A78BFA]/10 blur-[130px] animate-[glow_6s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
        {Array.from({ length: 12 }).map((_, i) => {
          const left = (i * 8.3 + 4) % 100;
          const duration = 14 + (i % 5) * 3;
          const delay = (i % 6) * 1.4;
          return (
            <span
              key={i}
              className="animate-particle absolute rounded-full bg-[#C4B5FD]/40"
              style={{
                left: `${left}%`,
                bottom: "-10px",
                width: i % 3 === 0 ? 3 : 2,
                height: i % 3 === 0 ? 3 : 2,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>
    </>
  );
}

/* ================= DASHBOARD PREVIEW (LEFT SIDE) ================= */

function DashboardPreview() {
  return (
    <div className="relative w-full max-w-full">
      {/* floating metric badges — only shown once there's genuinely room (2xl+) so they never clip or overlap the form column */}
      <FloatingMetric icon={HeartPulse} label="Heart Rate" value="68 bpm" className="-left-4 -top-4 animate-float-slow" />
      <FloatingMetric icon={Flame} label="Calories" value="1,842" className="-right-3 -top-8 animate-float-slower" style={{ animationDelay: "0.4s" }} />
      <FloatingMetric icon={Moon} label="Sleep Score" value="86/100" className="-left-6 bottom-8 animate-float-slower" style={{ animationDelay: "0.8s" }} />
      <FloatingMetric icon={BatteryCharging} label="Recovery" value="74%" className="-right-5 bottom-1 animate-float-slow" style={{ animationDelay: "1.2s" }} />

      <div className="w-full max-w-full rounded-[28px] border border-[#7C3AED]/20 bg-white/4 p-5 backdrop-blur-3xl shadow-[0_25px_60px_rgba(0,0,0,.35)] lg:p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold font-display text-white">AI Health Scan</div>
            <div className="text-[11px] text-gray-500">Updated just now</div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-2.5 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C4B5FD] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#C4B5FD]" />
            </span>
            <span className="text-[10px] font-medium text-[#C4B5FD]">Live</span>
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <MiniStat icon={Activity} label="BMI" value="22.4" />
          <MiniStat icon={Droplet} label="Hydration" value="2.1L" />
          <MiniStat icon={HeartPulse} label="Recovery" value="74%" />
        </div>

        <div className="mt-4 rounded-xl border border-white/10 bg-[#1E293B]/60 p-3.5">
          <MiniLineChart />
        </div>
      </div>
    </div>
  );
}

function FloatingMetric({ icon: Icon, label, value, className = "", style }) {
  return (
    <div
      style={style}
      className={`absolute z-10 hidden max-w-38 items-center gap-2.5 rounded-2xl border border-[#7C3AED]/20 bg-[#1E293B]/90 px-3.5 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,.35)] backdrop-blur-xl 2xl:flex ${className}`}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/15">
        <Icon className="h-4 w-4 text-[#C4B5FD]" aria-hidden="true" />
      </div>
      <div>
        <div className="text-[10px] text-gray-500">{label}</div>
        <div className="text-xs font-semibold text-white">{value}</div>
      </div>
    </div>
  );
}

function MiniStat({ icon: Icon, label, value }) {
  return (
    <div className="min-w-0 rounded-xl border border-white/10 bg-white/3 p-2 text-center sm:p-2.5">
      <Icon className="mx-auto mb-1 h-3.5 w-3.5 text-[#7C3AED]" aria-hidden="true" />
      <div className="truncate text-xs font-semibold text-white">{value}</div>
      <div className="truncate text-[9px] text-gray-500">{label}</div>
    </div>
  );
}

function MiniLineChart() {
  const points = [12, 20, 16, 28, 24, 34, 30];
  const width = 220;
  const height = 44;
  const step = width / (points.length - 1);
  const max = Math.max(...points);
  const coords = points.map((p, i) => [i * step, height - (p / max) * height]);
  const path = coords.reduce((acc, [x, y], i) => acc + (i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`), "");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="loginChartStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <motion.path
        d={path}
        fill="none"
        stroke="url(#loginChartStroke)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.5 }}
      />
    </svg>
  );
}

/* ================= FORM CONTROLS ================= */

function FloatingIconInput({
  id,
  name,
  type = "text",
  label,
  icon: Icon,
  value,
  onChange,
  disabled,
  required,
  trailingSlot,
}) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 peer-focus:text-[#C4B5FD]" aria-hidden="true" />
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        placeholder=" "
        className="peer w-full rounded-xl border border-white/10 bg-white/3 py-3.5 pl-10 pr-10 pt-5 text-white outline-none transition-all duration-300 placeholder-transparent focus:border-[#7C3AED]/60 focus:bg-white/5 focus:shadow-[0_0_0_3px_rgba(198,123,82,0.15)] disabled:opacity-50"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all duration-300 peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:text-[#A78BFA] peer-not-placeholder-shown:top-3 peer-not-placeholder-shown:translate-y-0 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-gray-400"
      >
        {label}
      </label>
      {trailingSlot}
    </div>
  );
}

function SubmitButton({ isLoading }) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#A78BFA] via-[#7C3AED] to-[#5B21B6] py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(198,123,82,.35)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_15px_40px_rgba(198,123,82,.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD] disabled:cursor-not-allowed disabled:opacity-70"
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative flex items-center gap-2">
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Signing in...
          </>
        ) : (
          <>
            <LogInIcon className="h-4 w-4" aria-hidden="true" />
            Sign In
          </>
        )}
      </span>
    </button>
  );
}