import { motion, useScroll, useTransform, useMotionTemplate, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildPath } from "@/lib/routing";
import { Magnetic } from "@/components/motion/MagneticButton";
import ContactForm from "@/components/home/ContactForm";
import logo from "@/assets/logo.png";
import teamMember1 from "@/assets/Ricardo_cut.jpeg";
import teamMember2 from "@/assets/Duarte_cut.jpeg";

/**
 * One continuous, scroll-driven cinematic home.
 * - Global animated backdrop that morphs hue/lightness with scroll
 * - Sticky pinned acts (hero -> manifesto -> horizontal services -> team -> values -> contact)
 * - No boxed "sections"; everything bleeds.
 */

const teamMembers = [
  {
    id: "ricardo-nascimento-ferreira",
    name: "Ricardo Nascimento Ferreira",
    image: teamMember1,
    email: "ricardo.ferreira@lealiaap.com",
    linkedin: "https://www.linkedin.com/in/ricardo-a-n-ferreira/",
  },
  {
    id: "duarte-rocha-pereira",
    name: "Duarte Rocha Pereira",
    image: teamMember2,
    email: "duarte.pereira@lealiaap.com",
    linkedin: "https://www.linkedin.com/in/duarte-rocha-pereira/",
  },
];

/* ---------- Backdrop ---------- */
const FluidBackdrop = ({ progress }: { progress: MotionValue<number> }) => {
  // Morph through palette stops as we scroll
  const bg1 = useTransform(
    progress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#FAF7F2", "#F1ECE4", "#0D1428", "#0A1020", "#FAF7F2"]
  );
  const orbX = useTransform(progress, [0, 1], ["10%", "85%"]);
  const orbY = useTransform(progress, [0, 0.5, 1], ["10%", "70%", "20%"]);
  const orb2X = useTransform(progress, [0, 1], ["80%", "15%"]);
  const orb2Y = useTransform(progress, [0, 0.5, 1], ["80%", "20%", "70%"]);
  const orbScale = useTransform(progress, [0, 0.5, 1], [1, 1.4, 1]);
  const accentOpacity = useTransform(progress, [0, 0.45, 0.55, 1], [0.18, 0.35, 0.35, 0.18]);
  const gridOpacity = useTransform(progress, [0, 0.4, 0.6, 1], [0.05, 0.02, 0.04, 0.06]);
  const gridColor = useTransform(progress, [0, 0.4, 0.6, 1], ["#0D1428", "#0D1428", "#E6C77A", "#0D1428"]);
  const gridMask = useMotionTemplate`linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: bg1 }}
    >
      <motion.div
        className="absolute w-[55vw] h-[55vw] rounded-full will-change-transform"
        style={{
          left: orbX,
          top: orbY,
          x: "-50%",
          y: "-50%",
          scale: orbScale,
          opacity: accentOpacity,
          background: "radial-gradient(circle, hsl(36 70% 58% / 0.75), transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        className="absolute w-[60vw] h-[60vw] rounded-full will-change-transform"
        style={{
          left: orb2X,
          top: orb2Y,
          x: "-50%",
          y: "-50%",
          scale: orbScale,
          opacity: useTransform(progress, [0, 0.5, 1], [0.25, 0.5, 0.25]),
          background: "radial-gradient(circle, hsl(220 60% 22% / 0.55), transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: gridOpacity,
          backgroundImage: gridMask,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* film grain */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </motion.div>
  );
};

/* ---------- Act I: Hero ---------- */
const ActHero = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <section ref={ref} className="relative h-[calc(100vh-4rem)] flex items-center justify-center">
      <motion.div
        style={{ y, opacity, scale, filter }}
        className="relative max-w-5xl mx-auto px-6 w-full flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={logo} alt="Lealia Advisory Partners" className="w-full max-w-2xl mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-xs sm:text-sm md:text-base text-center font-body uppercase mt-8"
          style={{ letterSpacing: "0.4em", fontWeight: 300 }}
        >
          {t("hero.services")}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-32 bg-gradient-to-r from-transparent via-accent to-transparent mt-8 origin-center"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center text-muted-foreground/60"
        style={{ opacity }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ---------- Act II: Big editorial manifesto ---------- */
const parseManifestoWords = (text: string) => {
  const words: { text: string; italic: boolean; gold: boolean }[] = [];
  let remaining = text.trim();
  while (remaining.length > 0) {
    const match = remaining.match(/^(.*?)\{([ia]):([^}]+)\}(.*)$/);
    if (match) {
      const [, before, marker, content, after] = match;
      if (before.trim()) {
        before.trim().split(/\s+/).forEach((w) => {
          if (w) words.push({ text: w, italic: false, gold: false });
        });
      }
      words.push({ text: content, italic: true, gold: marker === "a" });
      remaining = after;
    } else {
      remaining.trim().split(/\s+/).forEach((w) => {
        if (w) words.push({ text: w, italic: false, gold: false });
      });
      break;
    }
  }
  return words;
};

const ActManifesto = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const words = parseManifestoWords(t("home.manifesto.words"));

  return (
    <section ref={ref} className="relative min-h-[60vh] flex items-center justify-center px-6 py-16">
      <motion.div style={{ y, opacity }} className="max-w-5xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="eyebrow mb-6 justify-center"
        >
          {t("home.manifesto.eyebrow")}
        </motion.span>

        <h2
          className="font-heading text-primary leading-[1.05] tracking-tight mt-6"
          style={{ fontSize: "clamp(1.75rem, 4.5vw, 4rem)", fontWeight: 300, letterSpacing: "-0.025em" }}
        >
          {words.map((w, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em] mr-[0.25em]"
            >
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-block ${w.italic ? "serif-accent" : ""} ${w.gold ? "text-accent" : ""}`}
              >
                {w.text}
              </motion.span>
            </span>
          ))}
        </h2>
      </motion.div>
    </section>
  );
};

/* ---------- Act III: Stacked services reveal ---------- */
const parseInline = (text: string) => {
  const segments: { text: string; italic: boolean; gold: boolean }[] = [];
  let remaining = text;
  while (remaining.length > 0) {
    const match = remaining.match(/^(.*?)\{([ia]):([^}]+)\}(.*)$/s);
    if (match) {
      const [, before, marker, content, after] = match;
      if (before) segments.push({ text: before, italic: false, gold: false });
      segments.push({ text: content, italic: true, gold: marker === "a" });
      remaining = after;
    } else {
      segments.push({ text: remaining, italic: false, gold: false });
      break;
    }
  }
  return segments;
};

const ServiceRow = ({
  s,
  index,
}: {
  s: { no: string; title: string; desc: string; tag: string; link: string };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={s.link}
        className="group grid grid-cols-12 gap-4 items-baseline py-6 md:py-8 border-t border-primary/10 hover:border-accent/40 transition-colors duration-500"
      >
        <span className="col-span-2 md:col-span-1 serif-accent text-accent text-lg md:text-xl leading-none">
          {s.no}
        </span>
        <div className="col-span-10 md:col-span-5">
          <h4
            className="font-heading text-primary transition-transform duration-700 group-hover:translate-x-2"
            style={{
              fontSize: "clamp(1.25rem, 2.2vw, 1.875rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            {s.title}
          </h4>
          <span className="block mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {s.tag}
          </span>
        </div>
        <p
          className="col-start-3 md:col-start-7 col-span-10 md:col-span-5 text-muted-foreground leading-relaxed text-sm md:text-base"
          style={{ fontWeight: 300 }}
        >
          {s.desc}
        </p>
        <div className="col-start-3 md:col-start-12 md:col-span-1 flex md:justify-end text-accent mt-2 md:mt-0">
          <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </Link>

    </motion.div>
  );
};

const ActServices = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      no: "01",
      title: t("services.ma"),
      desc: t("services.ma.desc"),
      tag: t("home.services.tag.ma"),
      link: buildPath(language, "/services#buy-side"),
    },
    {
      no: "02",
      title: t("services.performance"),
      desc: t("services.performance.desc"),
      tag: t("home.services.tag.performance"),
      link: buildPath(language, "/services#performance"),
    },
    {
      no: "03",
      title: t("services.modeling"),
      desc: t("services.modeling.desc"),
      tag: t("home.services.tag.modeling"),
      link: buildPath(language, "/services#modeling"),
    },
  ];

  return (
    <section className="relative px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14"
        >
          <div>
            <span className="eyebrow mb-3">{t("services.title")}</span>
            <h3
              className="font-heading text-primary mt-3"
              style={{ fontSize: "clamp(1.75rem, 3.8vw, 3rem)", fontWeight: 300, letterSpacing: "-0.025em" }}
            >
              {parseInline(t("home.services.heading")).map((seg, i) => (
                <span
                  key={i}
                  className={`${seg.italic ? "serif-accent" : ""} ${seg.gold ? "text-accent" : ""}`}
                >
                  {seg.text}
                </span>
              ))}
            </h3>
          </div>
          <p
            className="text-muted-foreground max-w-sm text-sm leading-relaxed"
            style={{ fontWeight: 300 }}
          >
            {t("home.services.subheading")}
          </p>
        </motion.div>

        <div className="border-b border-primary/10">
          {services.map((s, i) => (
            <ServiceRow key={s.no} s={s} index={i} />
          ))}
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
          <Magnetic>
            <Link to={buildPath(language, "/services")} className="btn-gold whitespace-nowrap">
              {t("services.cta")}
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>

  );
};


/* ---------- Act IV: Team — cinematic dark ---------- */
type TeamMember = (typeof teamMembers)[number];
const TeamCard = ({ member, index, role, href }: { member: TeamMember; index: number; role: string; href: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`group ${index === 1 ? "md:mt-20" : ""}`}
    >
      <Link to={href} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-secondary aspect-[4/5]">
          <motion.img
            src={member.image}
            alt={member.name}
            style={{ y }}
            className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-700" />
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent">{role}</span>
            <h4 className="font-heading text-primary-foreground mt-2" style={{ fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)", fontWeight: 400, letterSpacing: "-0.01em" }}>
              {member.name}
            </h4>
            <div className="flex gap-2 mt-4">
              <a href={`mailto:${member.email}`} onClick={(e) => e.stopPropagation()} className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-500" aria-label="Email">
                <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-500" aria-label="LinkedIn">
                <Linkedin className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </Link>

    </motion.div>
  );
};

const ActTeam = () => {
  const { t, language } = useLanguage();


  return (
    <section className="relative py-14 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-2xl"
        >
          <span className="eyebrow mb-4">{t("team.title")}</span>
          <h3
            className="font-heading text-primary-foreground mt-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)", fontWeight: 300, letterSpacing: "-0.025em" }}
          >
            {parseInline(t("home.team.heading")).map((seg, i) => (
              <span
                key={i}
                className={`${seg.italic ? "serif-accent" : ""} ${seg.gold ? "text-accent" : ""}`}
              >
                {seg.text}
              </span>
            ))}
          </h3>
          <p className="text-primary-foreground/65 mt-5 text-base max-w-xl leading-relaxed" style={{ fontWeight: 300 }}>
            {t("team.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-3xl mx-auto">
          {teamMembers.map((m, i) => (
            <TeamCard key={m.id} member={m} index={i} role={t("teampage.role")} href={`${buildPath(language, "/team")}#${m.id}`} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Magnetic>
            <Link
              to={buildPath(language, "/team")}
              className="group inline-flex items-center gap-3 text-primary-foreground text-xs uppercase tracking-[0.25em]"
            >
              <span className="link-underline">{t("team.cta")}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Magnetic>
        </div>
      </div>

    </section>
  );
};

/* ---------- Act V: Values as scrolling list ---------- */
const ActValues = () => {
  const { t, language } = useLanguage();
  const values = [
    { title: t("values.integrity"), desc: t("values.integrity.desc") },
    { title: t("values.excellence"), desc: t("values.excellence.desc") },
    { title: t("values.partnership"), desc: t("values.partnership.desc") },
    { title: t("values.innovation"), desc: t("values.innovation.desc") },
  ];

  return (
    <section className="relative py-14 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-10"
        >
          <span className="eyebrow mb-4">{t("values.title")}</span>
          <h3
            className="font-heading text-primary-foreground mt-4 max-w-3xl"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)", fontWeight: 300, letterSpacing: "-0.02em" }}
          >
            {parseInline(t("home.values.heading")).map((seg, i) => (
              <span
                key={i}
                className={`${seg.italic ? "serif-accent" : ""} ${seg.gold ? "text-accent" : ""}`}
              >
                {seg.text}
              </span>
            ))}
          </h3>
        </motion.div>

        <div className="border-t border-primary-foreground/10">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-12 gap-4 items-baseline py-6 md:py-8 border-b border-primary-foreground/10 cursor-default"
            >
              <span className="col-span-2 md:col-span-1 text-[10px] tracking-[0.3em] text-accent">
                0{i + 1}
              </span>
              <h4
                className="col-span-10 md:col-span-4 font-heading text-primary-foreground transition-transform duration-700 group-hover:translate-x-2"
                style={{ fontSize: "clamp(1.125rem, 1.8vw, 1.625rem)", fontWeight: 300, letterSpacing: "-0.01em" }}
              >
                {v.title}
              </h4>
              <p
                className="col-start-3 md:col-start-6 col-span-10 md:col-span-7 text-primary-foreground/65 leading-relaxed text-sm md:text-base"
                style={{ fontWeight: 300 }}
              >
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Magnetic>
            <Link to={buildPath(language, "/about")} className="btn-gold">
              {t("values.cta")}
            </Link>
          </Magnetic>
        </div>
      </div>

    </section>
  );
};

/* ---------- Main shell ---------- */
const FluidHome = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });

  return (
    <div ref={ref} className="relative">
      <FluidBackdrop progress={progress} />
      <ActHero />
      <ActManifesto />
      <ActServices />
      <ActTeam />
      <ActValues />
      <div className="relative">
        <ContactForm />
      </div>
    </div>
  );
};

export default FluidHome;
