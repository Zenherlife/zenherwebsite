import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Heart, MessageCircle, Shield, Sparkles, Flower2, Users, BadgeCheck,
  ChevronDown, Instagram, Twitter, Facebook, ArrowRight, Lock, Stethoscope,
  Baby, Moon, Salad, Brain, Activity, Apple, Play, Smartphone, Star,
} from "lucide-react";
import logo from "@/assets/zenher-logo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zenher — A Women Healthcare Community" },
      { name: "description", content: "Zenher is a women healthcare community — a private place to share, ask and connect with verified health experts." },
      { property: "og:title", content: "Zenher — Women Healthcare Community" },
      { property: "og:description", content: "Join Zenher, a safe space for women to share, ask and connect with verified health experts." },
    ],
  }),
  component: Landing,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.6, ease: "easeOut" as const } }),
};

function Hero() {
  return (
    <section id="join" className="relative overflow-hidden px-6 pt-24 pb-32">
      <div className="absolute inset-0 grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/70 px-4 py-1.5 text-xs font-medium text-primary shadow-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Welcome to Zenher
          </span>
        </motion.div>

        {/* Logo + name centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center gap-5 [perspective:1200px]"
        >
          <motion.div
            animate={{ rotateY: [0, 12, -12, 0], y: [0, -6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative [transform-style:preserve-3d]"
          >
            <div className="absolute -inset-6 rounded-full bg-gradient-primary opacity-40 blur-2xl" />
            <img
              src={logo}
              alt="Zenher logo"
              className="relative h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-glow"
            />
          </motion.div>
          <h1 className="text-6xl leading-[1] md:text-8xl">
            Zen<span className="text-gradient italic">her</span>
          </h1>
          <p className="text-base font-medium uppercase tracking-[0.32em] text-primary md:text-sm">
            A Women Healthcare Community
          </p>
        </motion.div>

        <motion.p
          initial="hidden" animate="show" custom={2} variants={fadeUp}
          className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          A safe space to share your thoughts, ask the questions you've always wondered,
          and connect with women and verified health experts who truly understand.
        </motion.p>

        <motion.div
          initial="hidden" animate="show" custom={3} variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#community" className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-medium text-primary-foreground shadow-glow transition hover:scale-[1.04]">
            Join our Community <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#expert" className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/80 px-7 py-3.5 font-medium text-primary shadow-soft backdrop-blur transition hover:bg-white">
            <Stethoscope className="h-4 w-4" /> Join as Expert
          </a>
        </motion.div>

        {/* Floating chips around the center */}
        <div className="pointer-events-none relative mt-16 h-20 w-full max-w-3xl">
          {[
            { Icon: Heart, label: "Kindness", style: "left-2 top-0" },
            { Icon: Lock, label: "Private", style: "left-1/4 top-10" },
            { Icon: BadgeCheck, label: "Verified", style: "left-1/2 top-2 -translate-x-1/2" },
            { Icon: Users, label: "Belong", style: "right-1/4 top-10" },
            { Icon: Flower2, label: "Wellness", style: "right-2 top-0" },
          ].map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
              className={`absolute ${c.style}`}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-foreground shadow-soft ring-1 ring-primary/10 backdrop-blur"
              >
                <c.Icon className="h-3.5 w-3.5 text-primary" /> {c.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: BadgeCheck, title: "Verified Health Experts", desc: "Every expert is vetted and badged — guidance you can trust.", featured: true },
  { icon: MessageCircle, title: "Share Your Thoughts", desc: "Open up freely in a space that listens without judgement." },
  { icon: Sparkles, title: "Ask Anything", desc: "No question is too small. From everyday to deeply personal." },
  { icon: Lock, title: "Stay Anonymous", desc: "Post with a soft pseudonym — your identity is yours alone." },
  { icon: Shield, title: "Private & Secure", desc: "Threads stay inside the community. Your words protected." },
  { icon: Heart, title: "Kindness First", desc: "Empathy is our first community guideline. Always." },
];

function Features() {
  return (
    <section id="community" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">What makes Zenher</p>
          <h2 className="mt-3 text-4xl md:text-5xl">A soft place to land, <span className="text-gradient">built around her.</span></h2>
        </motion.div>

        {/* Bento grid */}
        <div className="mt-16 grid auto-rows-[200px] gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl p-7 shadow-soft transition hover:shadow-glow ${
                f.featured
                  ? "md:col-span-2 md:row-span-2 bg-gradient-primary text-primary-foreground"
                  : "bg-card"
              }`}
            >
              <div className={`grid h-12 w-12 place-items-center rounded-2xl ${
                f.featured ? "bg-white/20 text-white" : "bg-gradient-primary text-primary-foreground shadow-glow"
              }`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className={`mt-5 ${f.featured ? "text-3xl md:text-4xl text-primary-foreground" : "text-xl font-semibold"}`}>
                {f.title}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${f.featured ? "text-primary-foreground/85 max-w-md" : "text-muted-foreground"}`}>
                {f.desc}
              </p>

              {f.featured && (
                <>
                  <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
                  <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                    <BadgeCheck className="h-3.5 w-3.5" /> Expert badge
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const groups = [
  { icon: Flower2, name: "Cycle & Hormones", members: "Open circle" },
  { icon: Baby, name: "Motherhood Journey", members: "Open circle" },
  { icon: Moon, name: "Sleep & Rest", members: "Open circle" },
  { icon: Brain, name: "Mind & Emotions", members: "Open circle" },
  { icon: Salad, name: "Nutrition & Body", members: "Open circle" },
  { icon: Activity, name: "Movement & Fitness", members: "Open circle" },
  { icon: Heart, name: "Heart Health", members: "Open circle" },
  { icon: Sparkles, name: "Self-Care Rituals", members: "Open circle" },
];

function Groups() {
  return (
    <section id="groups" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">Circles inside Zenher</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Find <span className="text-gradient">your people.</span></h2>
            <p className="mt-4 text-muted-foreground">
              Smaller circles around the topics that matter most. Join the ones that feel like home.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.name}
              custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              whileHover={{ y: -6, rotate: -1 }}
              className="group relative rounded-2xl border border-primary/10 bg-card p-5 shadow-soft transition hover:shadow-glow"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                  <g.icon className="h-5 w-5" />
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <p className="mt-5 font-semibold">{g.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{g.members}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertJoin() {
  const perks = [
    "Verified expert badge on every reply",
    "Lead AMAs and dedicated circles",
    "Reach women actively seeking guidance",
    "Flexible — answer when you can",
  ];
  return (
    <section id="expert" className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 overflow-hidden rounded-[2.5rem] bg-gradient-purple p-10 text-primary-foreground shadow-glow md:grid-cols-2 md:p-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
            <Stethoscope className="h-3.5 w-3.5" /> For health experts
          </span>
          <h2 className="mt-5 text-4xl text-primary-foreground md:text-5xl">
            Are you a health expert? <span className="italic opacity-90">Join Zenher.</span>
          </h2>
          <p className="mt-4 max-w-md text-primary-foreground/85">
            Doctors, therapists, nutritionists, midwives, coaches — bring your expertise
            to a community of women who are ready to listen and learn.
          </p>
          <ul className="mt-6 space-y-2.5">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-primary-foreground/90">
                <BadgeCheck className="h-4 w-4 shrink-0" /> {p}
              </li>
            ))}
          </ul>
          <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-primary shadow-soft transition hover:scale-[1.03]">
            Apply as Expert <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative h-[420px] [perspective:1200px]"
        >
          <motion.div
            animate={{ rotateX: [6, -4, 6], rotateY: [-8, 8, -8] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 [transform-style:preserve-3d]"
          >
            <div className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-6 text-foreground shadow-glow"
                 style={{ transform: "translateZ(80px) translate(-50%,-50%)" }}>
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-primary text-primary-foreground">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Expert profile</p>
                  <p className="flex items-center gap-1 text-xs text-primary"><BadgeCheck className="h-3 w-3" /> Verified by Zenher</p>
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <div className="h-2 w-3/4 rounded-full bg-primary/15" />
                <div className="h-2 w-full rounded-full bg-primary/10" />
                <div className="h-2 w-2/3 rounded-full bg-primary/10" />
              </div>
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-secondary p-3 text-xs">
                <span className="font-medium text-secondary-foreground">Hosting an AMA</span>
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-2 top-6 rounded-2xl bg-white px-4 py-3 text-foreground shadow-glow"
              style={{ transform: "translateZ(130px)" }}
            >
              <div className="flex items-center gap-2 text-xs">
                <BadgeCheck className="h-4 w-4 text-primary" /> <span className="font-semibold">Verified</span>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 left-2 rounded-2xl bg-white px-4 py-3 text-foreground shadow-soft"
              style={{ transform: "translateZ(110px)" }}
            >
              <div className="flex items-center gap-2 text-xs">
                <Heart className="h-4 w-4 text-primary" /> <span className="font-semibold">Trusted answers</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function DownloadApp() {
  return (
    <section id="download" className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative order-2 flex justify-center md:order-1"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-20 blur-3xl" />
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[520px] w-[260px] rounded-[3rem] border-8 border-foreground/90 bg-foreground p-2 shadow-glow"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2.3rem] bg-gradient-to-b from-secondary to-white">
              <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground" />
              <div className="px-4 pt-12">
                <div className="flex items-center gap-2">
                  <img src={logo} alt="Zenher" className="h-8 w-8 rounded-full ring-2 ring-primary/30" />
                  <p className="text-sm font-semibold">Zenher</p>
                </div>
                <p className="mt-5 font-display text-2xl leading-tight">Good morning, her ✨</p>

                <div className="mt-4 space-y-3">
                  {[
                    { icon: Flower2, t: "Cycle & Hormones", s: "New post from Dr. M." },
                    { icon: Brain, t: "Mind & Emotions", s: "AMA starting in 1h" },
                    { icon: Heart, t: "Daily check-in", s: "How are you today?" },
                  ].map((c) => (
                    <div key={c.t} className="flex items-center gap-3 rounded-2xl bg-white/90 p-3 shadow-soft backdrop-blur">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                        <c.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold">{c.t}</p>
                        <p className="text-[10px] text-muted-foreground">{c.s}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="order-1 md:order-2"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Smartphone className="h-3.5 w-3.5" /> Zenher app
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Carry your community <span className="text-gradient italic">in your pocket.</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Join circles, ask experts, and check in on yourself — wherever you are.
            Download Zenher and step inside your safe space.
          </p>

          <div className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground">
            {[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
            <span className="ml-2">Loved by her, everywhere.</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="group inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background transition hover:scale-[1.03]">
              <Apple className="h-7 w-7" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider opacity-70">Download on the</p>
                <p className="text-base font-semibold leading-tight">App Store</p>
              </div>
            </a>
            <a href="#" className="group inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background transition hover:scale-[1.03]">
              <Play className="h-6 w-6 fill-current" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider opacity-70">Get it on</p>
                <p className="text-base font-semibold leading-tight">Google Play</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What is Zenher?", a: "Zenher is a women healthcare community — a private space to share your thoughts, ask questions and connect with verified health experts." },
  { q: "Is it free to join?", a: "Yes. The community is completely free. We've just launched and we're focused on building a kind, supportive space first." },
  { q: "Can I post anonymously?", a: "Absolutely. Every post and comment supports anonymous mode — only you ever see who you really are." },
  { q: "How are health experts verified?", a: "Every expert applies, shares their credentials, and is reviewed by the Zenher team before receiving a verified badge." },
  { q: "Is my data private?", a: "Threads stay inside the community. We don't sell your data and we don't use your words to train external models." },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">FAQ</p>
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

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-purple px-6 pt-20 pb-10 text-primary-foreground">
      <div className="absolute -top-24 left-1/2 h-72 w-[80%] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Zenher" className="h-11 w-11 rounded-full object-cover ring-2 ring-white/40" />
              <span className="font-display text-3xl">Zenher</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/80">
              A women healthcare community. Made with care for every her.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-primary-foreground transition hover:bg-white/20">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">Community</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#community" className="text-primary-foreground/85 transition hover:text-white">Features</a></li>
              <li><a href="#groups" className="text-primary-foreground/85 transition hover:text-white">Circles</a></li>
              <li><a href="#expert" className="text-primary-foreground/85 transition hover:text-white">For Experts</a></li>
              <li><a href="#download" className="text-primary-foreground/85 transition hover:text-white">Download App</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">Zenher</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#faq" className="text-primary-foreground/85 transition hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-primary-foreground/85 transition hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-primary-foreground/85 transition hover:text-white">Guidelines</a></li>
              <li><a href="#" className="text-primary-foreground/85 transition hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-6 text-xs text-primary-foreground/70 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Zenher. All rights reserved.</p>
          <p>Made with care for every her.</p>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Groups />
      <ExpertJoin />
      <DownloadApp />
      <Faq />
      <Footer />
    </main>
  );
}
