import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Globe,
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  Instagram,
  Twitter,
  Linkedin,
  HelpCircle,
  Users,
  Loader2,
} from "lucide-react";
import api from "../config/Api";

/**
 * Contact — premium AI-healthcare contact page for Fitvia.
 * Palette matches the rest of the site: #C67B52 / #E6B18A / #F3D0B2 / #8C4A2F
 * on dark neutrals (#0F1115 / #141414 / #181818 / #0B0B0B).
 * All original state, handlers, API call, and toast behavior are unchanged —
 * only the UI/UX layer has been redesigned.
 */

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleClear = () => {
    setContactData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const submitContact = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await api.post("/public/contactMessage", contactData);
      console.log("Contact Data", contactData);
      toast.success(res.data.message);
      handleClear();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error sending message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className="relative min-h-screen w-full overflow-hidden px-4 py-20 text-white sm:px-6 sm:py-24 md:py-28"
        style={{
          background: `
            radial-gradient(circle at top, rgba(198,123,82,.16), transparent 35%),
            radial-gradient(circle at bottom right, rgba(140,74,47,.14), transparent 40%),
            #0F1115
          `,
          fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
          .font-display { font-family: 'Space Grotesk', 'Inter', ui-sans-serif, sans-serif; }

          @keyframes floatSlow { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
          @keyframes glow { 0%,100% { opacity: .35; } 50% { opacity: .7; } }
          @keyframes auroraDrift1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(6%,8%) scale(1.15); } }
          @keyframes auroraDrift2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-8%,-6%) scale(1.1); } }
          @keyframes particleRise { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: .6; } 90% { opacity: .25; } 100% { transform: translateY(-560px); opacity: 0; } }

          .animate-float-slow { animation: floatSlow 7s ease-in-out infinite; }
          .animate-aurora-1 { animation: auroraDrift1 20s ease-in-out infinite; }
          .animate-aurora-2 { animation: auroraDrift2 24s ease-in-out infinite; }
          .animate-particle { animation: particleRise linear infinite; }

          @media (prefers-reduced-motion: reduce) {
            .animate-float-slow, .animate-aurora-1, .animate-aurora-2, .animate-particle { animation: none !important; }
          }
        `}</style>

        <AmbientBackground />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16 text-center"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C67B52]/30 bg-[#C67B52]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#F3D0B2] backdrop-blur-xl sm:text-sm">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              We're Here to Help
            </span>

            <h1 className="mb-4 text-4xl font-extrabold font-display sm:text-5xl md:text-6xl">
              <span className="bg-linear-to-r from-[#F3D0B2] via-[#C67B52] to-[#8C4A2F] bg-clip-text text-transparent">
                Let's Improve Health Together
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Questions, feedback, or collaboration ideas — Fitvia is always
              open to meaningful conversations that help build better health
              experiences for everyone.
            </p>

            {/* floating health icon accents */}
            <div className="pointer-events-none relative mx-auto mt-4 hidden h-0 max-w-md sm:block" aria-hidden="true">
              <FloatingIcon icon={ShieldCheck} className="left-2 top-6" delay={0} />
              <FloatingIcon icon={Sparkles} className="right-4 top-2" delay={0.6} />
              <FloatingIcon icon={MessageCircle} className="left-1/2 top-10" delay={1.1} />
            </div>
          </motion.div>

          {/* Main Grid */}
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            {/* LEFT — Info column */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="min-w-0 space-y-6 lg:col-span-2"
            >
              {/* Contact info card */}
              <GlassPanel>
                <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-xl font-semibold font-display text-[#F3D0B2]">
                    Connect With Fitvia
                  </h2>
                  <LiveStatusBadge />
                </div>

                <p className="mb-6 leading-relaxed text-gray-300">
                  Whether you're exploring new features, facing a technical
                  issue, or just curious about what we offer, our team is
                  always ready to assist. We strive to provide prompt,
                  friendly, and meaningful responses so you always feel
                  supported throughout your journey with Fitvia.
                </p>

                <div className="space-y-4">
                  <InfoRow icon={Mail} label="Support Email" value="support@fitvia.com" />
                  <InfoRow icon={Globe} label="Website" value="fitvia.netlify.com" />
                  <InfoRow icon={MapPin} label="Office" value="XY, Ground Floor, Bhopal, MP" />
                  <InfoRow icon={Phone} label="Phone" value="+91 98765 43210" />
                  <InfoRow icon={Clock} label="Working Hours" value="Mon–Sat, 9 AM – 7 PM IST" />
                  <InfoRow icon={ShieldCheck} label="Avg. Response Time" value="Under 24 hours" />
                </div>

                {/* Social icons */}
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
                  {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label="Social media link"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-[#C67B52]/40 hover:bg-[#C67B52]/10 hover:text-[#F3D0B2]"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </GlassPanel>

              {/* Map preview */}
              <GlassPanel className="p-0! overflow-hidden">
                <div className="relative h-40 w-full bg-[#141414]">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(198,123,82,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(198,123,82,.35) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="relative flex h-4 w-4">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C67B52] opacity-60" />
                      <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#C67B52] text-[#0F1115]">
                        <MapPin className="h-2.5 w-2.5" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-lg bg-[#0B0B0B]/70 px-3 py-1.5 text-xs text-gray-300 backdrop-blur-md">
                    Bhopal, Madhya Pradesh
                  </div>
                </div>
              </GlassPanel>

              {/* AI Assistant card */}
              <GlassPanel className="relative overflow-hidden">
                <div className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-[#C67B52]/20 blur-2xl" />
                <div className="relative flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#C67B52]/30 bg-[#C67B52]/10">
                    <Sparkles className="h-5 w-5 text-[#F3D0B2]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="mb-1 text-sm font-semibold text-[#F3D0B2]">
                      Need a faster answer?
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Our AI assistant can answer most account, billing, and
                      plan questions instantly — no wait time.
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="min-w-0 lg:col-span-3"
            >
              <div className="rounded-[28px] bg-linear-to-br from-[#C67B52]/30 via-[#E6B18A]/15 to-[#8C4A2F]/20 p-px shadow-[0_25px_60px_rgba(0,0,0,.35)]">
                <div className="rounded-[27px] bg-[#111111]/90 p-6 backdrop-blur-3xl sm:p-8 lg:p-9">
                  <h2 className="mb-1 text-xl font-semibold font-display text-[#F3D0B2]">
                    Get in Touch
                  </h2>
                  <p className="mb-7 text-sm text-gray-500">
                    Fill out the form and our team will get back to you soon.
                  </p>

                  <form
                    onSubmit={submitContact}
                    onReset={handleClear}
                    className="flex flex-col gap-6"
                    noValidate={false}
                  >
                    <FloatingInput
                      id="fullName"
                      name="fullName"
                      label="Full Name"
                      value={contactData.fullName}
                      onChange={handleChange}
                      disabled={isLoading}
                      required
                    />

                    <FloatingInput
                      id="email"
                      name="email"
                      type="email"
                      label="Email Address"
                      value={contactData.email}
                      onChange={handleChange}
                      disabled={isLoading}
                      required
                    />

                    <FloatingTextarea
                      id="message"
                      name="message"
                      label="Your Message"
                      value={contactData.message}
                      onChange={handleChange}
                      disabled={isLoading}
                      maxLength={500}
                    />

                    <SubmitButton isLoading={isLoading} />
                  </form>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <TrustCard icon={ShieldCheck} title="Data Encrypted" body="Every message is transmitted securely end-to-end." />
            <TrustCard icon={Users} title="40K+ Users Trust Us" body="A growing community relies on Fitvia daily." />
            <TrustCard icon={Clock} title="24h Avg. Response" body="Our team replies to nearly every message within a day." />
          </motion.div>

          {/* Support process timeline */}
          <section className="mt-24">
            <SectionHeading eyebrow="How It Works" title="Our Support Process" />
            <div className="relative mx-auto mt-14 max-w-5xl">
              <div className="absolute left-0 right-0 top-6 hidden h-px bg-linear-to-r from-transparent via-[#C67B52]/40 to-transparent md:block" />
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {[
                  { step: "01", title: "Message Received", body: "Your note lands securely in our support queue." },
                  { step: "02", title: "AI Triage", body: "We route it to the right specialist instantly." },
                  { step: "03", title: "Team Review", body: "A real person reviews and prepares a reply." },
                  { step: "04", title: "Response Sent", body: "You hear back — usually within a day." },
                ].map((s, i) => (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#C67B52]/40 bg-[#141414] text-sm font-semibold text-[#F3D0B2]">
                      {s.step}
                    </div>
                    <div className="text-sm font-semibold text-white">{s.title}</div>
                    <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{s.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-24">
            <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" />
            <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
              {[
                { q: "How does the AI build my plan?", a: "Fitvia analyzes your goals, activity, and recovery data to generate and continuously adjust a personalized plan." },
                { q: "Is my health data secure?", a: "Yes — all data is encrypted in transit and at rest, and never sold to third parties." },
                { q: "Can I cancel anytime?", a: "Absolutely. You can cancel your subscription anytime from your account settings, no questions asked." },
                { q: "Do you offer a free trial?", a: "Yes, new accounts get full access to core features free for 14 days." },
              ].map((item, i) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-[#141414]/70 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#C67B52]/30"
                >
                  <div className="mb-2 flex items-start gap-3">
                    <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#C67B52]" aria-hidden="true" />
                    <h3 className="font-semibold text-white">{item.q}</h3>
                  </div>
                  <p className="pl-8 text-sm leading-relaxed text-gray-400">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#C67B52]/20 bg-[#0F1115] text-white">
        <div className="py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Fitvia • All Rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Contact;

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
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 10%, black, transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none absolute -top-24 left-0 h-80 w-80 rounded-full bg-[#C67B52]/20 blur-[120px] animate-aurora-1" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#8C4A2F]/20 blur-[140px] animate-aurora-2" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E6B18A]/10 blur-[130px] animate-[glow_6s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
        {Array.from({ length: 12 }).map((_, i) => {
          const left = (i * 8.3 + 4) % 100;
          const duration = 14 + (i % 5) * 3;
          const delay = (i % 6) * 1.4;
          return (
            <span
              key={i}
              className="animate-particle absolute rounded-full bg-[#F3D0B2]/40"
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

function FloatingIcon({ icon: Icon, className, delay }) {
  return (
    <span
      className={`absolute flex h-9 w-9 items-center justify-center rounded-xl border border-[#C67B52]/25 bg-white/5 text-[#F3D0B2] backdrop-blur-xl animate-float-slow ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </span>
  );
}

/* ================= SHARED UI ================= */

function GlassPanel({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-[#C67B52]/20 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_0_35px_rgba(198,123,82,0.12)] sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#C67B52]/25 bg-[#C67B52]/10">
        <Icon className="h-4 w-4 text-[#F3D0B2]" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wide text-gray-500">{label}</div>
        <div className="wrap-break-word text-sm text-gray-200">{value}</div>
      </div>
    </div>
  );
}

function LiveStatusBadge() {
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-[#C67B52]/20 bg-[#C67B52]/10 px-2.5 py-1">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F3D0B2] opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#F3D0B2]" />
      </span>
      <span className="text-[10px] font-medium text-[#F3D0B2]">Support Online</span>
    </span>
  );
}

function TrustCard({ icon: Icon, title, body }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#141414]/60 p-5 backdrop-blur-xl transition-colors duration-300 hover:border-[#C67B52]/30">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#C67B52]/25 bg-[#C67B52]/10">
        <Icon className="h-5 w-5 text-[#F3D0B2]" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold text-white">{title}</div>
        <p className="mt-1 text-xs leading-relaxed text-gray-500">{body}</p>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#F3D0B2] sm:text-sm">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

/* ================= FORM CONTROLS ================= */

function FloatingInput({ id, name, type = "text", label, value, onChange, disabled, required }) {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        placeholder=" "
        className="peer w-full rounded-xl border border-white/10 bg-white/3 px-4 pb-2.5 pt-6 text-white outline-none transition-all duration-300 placeholder-transparent focus:border-[#C67B52]/60 focus:bg-white/5 focus:shadow-[0_0_0_3px_rgba(198,123,82,0.15)] disabled:opacity-50"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-4 text-base text-gray-500 transition-all duration-300 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#E6B18A] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400"
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ id, name, label, value, onChange, disabled, maxLength = 500 }) {
  return (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        rows={4}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder=" "
        className="peer w-full resize-none rounded-xl border border-white/10 bg-white/3 px-4 pb-7 pt-6 text-white outline-none transition-all duration-300 placeholder-transparent focus:border-[#C67B52]/60 focus:bg-white/5 focus:shadow-[0_0_0_3px_rgba(198,123,82,0.15)] disabled:opacity-50"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-4 text-base text-gray-500 transition-all duration-300 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#E6B18A] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400"
      >
        {label}
      </label>
      <span className="absolute bottom-2.5 right-4 text-[11px] text-gray-500">
        {value.length}/{maxLength}
      </span>
    </div>
  );
}

function SubmitButton({ isLoading }) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="group relative mt-1 flex items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#E6B18A] via-[#C67B52] to-[#8C4A2F] py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(198,123,82,.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(198,123,82,.5)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#F3D0B2] disabled:cursor-not-allowed disabled:opacity-70"
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative flex items-center gap-2">
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </>
        )}
      </span>
    </button>
  );
}