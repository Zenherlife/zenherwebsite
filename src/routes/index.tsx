import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Heart, MessageCircle, Shield, Sparkles, Stethoscope, Users,
  ChevronDown, Instagram, Twitter, Facebook, ArrowRight,
} from "lucide-react";
import logo from "@/assets/zenher-logo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zenher — A Premium Women's Health Community" },
      { name: "description", content: "Join Zenher, a private community where women connect, share health questions and get answers from verified health experts." },
      { property: "og:title", content: "Zenher — Women's Health Community" },
      { property: "og:description", content: "Connect, share and learn with verified women's health experts." },
    ],
  }),
  component: Landing,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const } }),
};

function Nav() {
  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Zenher" className="h-9 w-9 rounded-lg object-cover" />
          <span className="text-xl font-semibold tracking-tight">Zen<span className="text-gradient">her</span></span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground">Community</a>
          <a href="#experts" className="hover:text-foreground">Experts</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
        <a href="#join" className="rounded-full bg-gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow transition hover:scale-[1.03]">
          Join community
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="join" className="relative overflow-hidden px-6 pt-20 pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" /> A safe space for women
          </span>
          <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">
            Real talk on
            <br />
            <span className="text-gradient italic">women's health.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Zenher is a private community where women ask the questions they've
            always wondered — and get thoughtful answers from verified health experts.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#features" className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition hover:scale-[1.03]">
              Join our community <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#experts" className="rounded-full border border-border bg-card px-6 py-3 font-medium text-foreground shadow-soft transition hover:bg-accent">
              Meet the experts
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {["#f9a8d4","#f472b6","#ec4899","#db2777"].map(c => (
                <div key={c} className="h-9 w-9 rounded-full border-2 border-background" style={{ background: c }} />
              ))}
            </div>
            <span><strong className="text-foreground">25,000+</strong> women already inside</span>
          </div>
        </motion.div>

        {/* 3D floating cluster */}
        <div className="relative h-[520px] [perspective:1500px]">
          <motion.div
            animate={{ rotateX: [8, -4, 8], rotateY: [-8, 8, -8] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 [transform-style:preserve-3d]"
          >
            {/* main card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-card p-6 shadow-glow"
              style={{ transform: "translateZ(80px) translate(-50%,-50%)" }}
            >
              <div className="flex items-center gap-3">
                <img src={logo} className="h-10 w-10 rounded-xl object-cover" alt="" />
                <div>
                  <p className="text-sm font-semibold">Dr. Aisha Khan</p>
                  <p className="text-xs text-muted-foreground">OB-GYN · Verified</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                "Tracking your cycle isn't just about periods — it's a window into your overall hormonal health."
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Heart className="h-3.5 w-3.5 text-primary" /> 1.2k</span>
                <span className="inline-flex items-center gap-1"><MessageCircle className="h-3.5 w-3.5" /> 318</span>
              </div>
            </motion.div>

            {/* floating chip 1 */}
            <motion.div
              animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-2 top-16 rounded-2xl bg-gradient-primary px-4 py-3 text-primary-foreground shadow-glow"
              style={{ transform: "translateZ(140px)" }}
            >
              <div className="flex items-center gap-2 text-sm font-medium"><Stethoscope className="h-4 w-4" /> Live AMA tonight</div>
            </motion.div>

            {/* floating chip 2 */}
            <motion.div
              animate={{ y: [0, 16, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 right-2 rounded-2xl bg-card px-4 py-3 shadow-soft"
              style={{ transform: "translateZ(120px)" }}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary"><Users className="h-4 w-4" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">New today</p>
                  <p className="text-sm font-semibold">+248 women</p>
                </div>
              </div>
            </motion.div>

            {/* blurred orbs */}
            <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -right-8 top-4 h-48 w-48 rounded-full bg-primary-glow/40 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: MessageCircle, title: "Judgement-free conversations", desc: "Ask anonymously or with your name. Either way, kindness comes first." },
  { icon: Shield, title: "Private & secure", desc: "End-to-end encrypted threads. Your questions stay yours." },
  { icon: Stethoscope, title: "Verified expert answers", desc: "Doctors, dietitians and therapists — all credential-checked." },
  { icon: Heart, title: "Personal health journal", desc: "Track cycles, moods and symptoms over time, beautifully." },
  { icon: Users, title: "Circles you belong to", desc: "Smaller groups for fertility, PCOS, menopause, mental health and more." },
  { icon: Sparkles, title: "Weekly expert AMAs", desc: "Live sessions with leading women's health specialists every week." },
];

function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">The community</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Everything she's ever wanted to ask, <span className="text-gradient">in one place.</span></h2>
        </motion.div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group rounded-3xl bg-card p-7 shadow-soft transition hover:shadow-glow"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const experts = [
  { name: "Dr. Aisha Khan", role: "OB-GYN, 12 yrs", tag: "Fertility & cycles", color: "from-pink-400 to-pink-600" },
  { name: "Dr. Maya Patel", role: "Endocrinologist", tag: "Hormonal health", color: "from-rose-400 to-pink-500" },
  { name: "Dr. Sara Lin", role: "Mental health therapist", tag: "Anxiety & burnout", color: "from-fuchsia-400 to-pink-500" },
  { name: "Dr. Noor Ahmed", role: "Nutritionist", tag: "PCOS & diet", color: "from-pink-300 to-rose-500" },
];

function Experts() {
  return (
    <section id="experts" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Health experts</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Real doctors. <span className="text-gradient">Real answers.</span></h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Every expert on Zenher is verified, vetted and reviewed by the community.</p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experts.map((e, i) => (
            <motion.div
              key={e.name} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-glow"
            >
              <div className={`h-40 bg-gradient-to-br ${e.color} relative`}>
                <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
                  background: "radial-gradient(circle at 30% 30%, white, transparent 60%)"
                }}/>
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground">
                  ✓ Verified
                </span>
              </div>
              <div className="p-5">
                <p className="text-base font-semibold">{e.name}</p>
                <p className="text-sm text-muted-foreground">{e.role}</p>
                <p className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{e.tag}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Is Zenher really free to join?", a: "Yes. The core community, expert posts and weekly AMAs are completely free. Premium 1:1 consultations are optional." },
  { q: "Can I ask questions anonymously?", a: "Absolutely. Every post and comment supports anonymous mode — only you see who you are." },
  { q: "Are the experts actually verified?", a: "We manually verify every expert's medical license, credentials and identity before they join." },
  { q: "Is my data private?", a: "Threads are encrypted, never sold and never used to train external models. Your health is your business." },
  { q: "Is Zenher only for women?", a: "Zenher is built for women, but anyone supporting a woman's health journey is welcome to learn." },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Questions, <span className="text-gradient">answered.</span></h2>
        </motion.div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={f.q} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl bg-card shadow-soft">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-primary transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="px-6 py-20">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-primary p-12 text-center text-primary-foreground shadow-glow md:p-16">
        <h2 className="text-4xl text-primary-foreground md:text-5xl">Your health, your community.</h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
          Join 25,000+ women learning, sharing and thriving together on Zenher.
        </p>
        <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-medium text-primary shadow-soft transition hover:scale-[1.03]">
          Join Zenher today <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Zenher" className="h-9 w-9 rounded-lg object-cover" />
            <span className="text-xl font-semibold">Zen<span className="text-gradient">her</span></span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            A premium women's health community. Made with care for every her.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground">Community</a>
          <a href="#experts" className="hover:text-foreground">Experts</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
          <a href="#" className="hover:text-foreground">Privacy</a>
        </div>
        <div className="flex gap-3">
          {[Instagram, Twitter, Facebook].map((Icon, i) => (
            <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-card text-muted-foreground shadow-soft transition hover:text-primary">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground">© {new Date().getFullYear()} Zenher. All rights reserved.</p>
    </footer>
  );
}

function Landing() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Features />
      <Experts />
      <Faq />
      <CtaBand />
      <Footer />
    </main>
  );
}
