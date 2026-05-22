import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Heart, MessageCircle, Shield, Sparkles, Flower2, Users,
  ChevronDown, Instagram, Twitter, Facebook, ArrowRight, Lock,
} from "lucide-react";
import logo from "@/assets/zenher-logo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zenher — A Women's Healthcare Community" },
      { name: "description", content: "Zenher is a private women's healthcare community — a safe space to share thoughts, ask questions and feel heard." },
      { property: "og:title", content: "Zenher — Women's Healthcare Community" },
      { property: "og:description", content: "A safe space for women to share, ask and connect." },
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
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pointer-events-auto flex w-full max-w-3xl items-center justify-between gap-4 rounded-full border border-white/60 bg-white/70 px-3 py-2 shadow-glow backdrop-blur-xl"
      >
        <a href="#" className="flex items-center gap-2 pl-2">
          <img src={logo} alt="Zenher" className="h-9 w-9 rounded-full object-cover ring-2 ring-primary/30" />
          <span className="text-lg font-semibold tracking-tight">
            Zen<span className="text-gradient">her</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground sm:flex">
          <a href="#community" className="hover:text-foreground transition">Community</a>
          <a href="#values" className="hover:text-foreground transition">Values</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a
          href="#join"
          className="rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition hover:scale-[1.03]"
        >
          Join
        </a>
      </motion.header>
    </div>
  );
}

function Hero() {
  return (
    <section id="join" className="relative overflow-hidden px-6 pt-36 pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Just launched · A safe space for women
          </span>
          <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">
            Your thoughts.
            <br />
            <span className="text-gradient italic">Your questions.</span>
            <br />
            Your space.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Zenher is a women's healthcare community — a private place to share
            what's on your mind, ask the questions you've always wondered, and
            feel heard without judgement.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#community" className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition hover:scale-[1.03]">
              Join our community <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#values" className="rounded-full border border-border bg-card px-6 py-3 font-medium text-foreground shadow-soft transition hover:bg-accent">
              What we stand for
            </a>
          </div>
        </motion.div>

        {/* 3D floating cluster */}
        <div className="relative h-[520px] [perspective:1500px]">
          <motion.div
            animate={{ rotateX: [8, -4, 8], rotateY: [-8, 8, -8] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 [transform-style:preserve-3d]"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-card p-6 shadow-glow"
              style={{ transform: "translateZ(80px) translate(-50%,-50%)" }}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Flower2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">A safe place</p>
                  <p className="text-xs text-muted-foreground">Just for her</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                "Sometimes you just need a space where you can speak freely —
                no judgement, no pressure, just understanding."
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="h-3.5 w-3.5 text-primary" /> Private & anonymous
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-2 top-16 rounded-2xl bg-gradient-primary px-4 py-3 text-primary-foreground shadow-glow"
              style={{ transform: "translateZ(140px)" }}
            >
              <div className="flex items-center gap-2 text-sm font-medium"><Sparkles className="h-4 w-4" /> Newly launched</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 16, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 right-2 rounded-2xl bg-card px-4 py-3 shadow-soft"
              style={{ transform: "translateZ(120px)" }}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary"><Heart className="h-4 w-4" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Built with</p>
                  <p className="text-sm font-semibold">care, for her</p>
                </div>
              </div>
            </motion.div>

            <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -right-8 top-4 h-48 w-48 rounded-full bg-primary-glow/40 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: MessageCircle, title: "Share your thoughts", desc: "Open up about what you're feeling, post-by-post, in a space that listens." },
  { icon: Sparkles, title: "Ask anything", desc: "From the everyday to the deeply personal — no question is too small here." },
  { icon: Shield, title: "Private & secure", desc: "Threads stay inside the community. Your words are yours alone." },
  { icon: Lock, title: "Stay anonymous", desc: "Post with your name or hide behind a soft pseudonym — your choice, always." },
  { icon: Users, title: "Find your circle", desc: "Smaller groups around the topics that matter most to you." },
  { icon: Heart, title: "Kindness first", desc: "A community guideline before a rule. We hold space, gently." },
];

function Features() {
  return (
    <section id="community" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">The community</p>
          <h2 className="mt-3 text-4xl md:text-5xl">A soft place to land, <span className="text-gradient">whenever you need it.</span></h2>
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

const values = [
  { title: "Privacy", desc: "What you share stays here. No selling data, no public timelines.", icon: Shield },
  { title: "Kindness", desc: "Every conversation begins with empathy. Always.", icon: Heart },
  { title: "Honesty", desc: "A space for the questions you can't ask anywhere else.", icon: MessageCircle },
  { title: "Belonging", desc: "However you identify your journey, you belong here.", icon: Flower2 },
];

function Values() {
  return (
    <section id="values" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">What we stand for</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Built on <span className="text-gradient">four quiet promises.</span></h2>
        </motion.div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-card p-7 shadow-soft transition hover:shadow-glow"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <v.icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-lg font-semibold">{v.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What is Zenher?", a: "Zenher is a women's healthcare community — a private place to share your thoughts, ask questions and connect with other women who get it." },
  { q: "Is it free to join?", a: "Yes. The community is completely free. We've just launched and we're focused on building a kind, supportive space first." },
  { q: "Can I post anonymously?", a: "Absolutely. Every post and comment supports anonymous mode — only you ever see who you really are." },
  { q: "Is my data private?", a: "Threads stay inside the community. We don't sell your data and we don't use your words to train external models." },
  { q: "Who is Zenher for?", a: "Zenher is built for women, at every stage of life. If you're here to listen, share or learn — you're welcome." },
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
        <h2 className="text-4xl text-primary-foreground md:text-5xl">Your space is ready.</h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
          Step inside the Zenher community — share, ask, and feel heard.
        </p>
        <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-medium text-primary shadow-soft transition hover:scale-[1.03]">
          Join Zenher <ArrowRight className="h-4 w-4" />
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
            <img src={logo} alt="Zenher" className="h-9 w-9 rounded-full object-cover ring-2 ring-primary/30" />
            <span className="text-xl font-semibold">Zen<span className="text-gradient">her</span></span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            A women's healthcare community. Made with care for every her.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#community" className="hover:text-foreground">Community</a>
          <a href="#values" className="hover:text-foreground">Values</a>
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
      <Values />
      <Faq />
      <CtaBand />
      <Footer />
    </main>
  );
}
