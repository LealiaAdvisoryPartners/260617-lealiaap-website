import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { Marquee } from "@/components/motion/Marquee";

const Hero = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden grain"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Floating decorative orbs */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full float-slow"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.18), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-24 w-[32rem] h-[32rem] rounded-full float-slow"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.10), transparent 70%)", animationDelay: "-4s" }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="flex flex-col items-center space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={logo}
              alt="Lealia Advisory Partners"
              className="w-full max-w-2xl mx-auto"
              style={{ height: "auto" }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground text-xs sm:text-sm md:text-base text-center font-body uppercase"
            style={{ letterSpacing: "0.4em", fontWeight: 300 }}
          >
            {t("hero.services")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        </div>
      </motion.div>

      {/* Marquee tagline strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        className="absolute bottom-32 sm:bottom-36 left-0 right-0 z-[1]"
      >
        <Marquee speed={45} className="py-4 text-primary/30">
          {[
            "Mergers & Acquisitions",
            "Buy-side Advisory",
            "Sell-side Advisory",
            "Performance Improvement",
            "Financial Modeling",
            "Strategic Consulting",
          ].flatMap((label) => [
            <span key={label} className="serif-accent text-3xl md:text-5xl tracking-tight">
              {label}
            </span>,
            <Sparkles key={label + "-s"} className="w-4 h-4 text-accent/60" />,
          ])}
        </Marquee>
      </motion.div>

      {/* Bottom contact + scroll cue */}
      <div className="absolute bottom-10 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 text-muted-foreground text-xs sm:text-sm"
            style={{ letterSpacing: "0.18em" }}
          >
            <a href="mailto:geral@lealiaap.com" className="hover:text-accent transition-colors link-underline uppercase">
              GERAL@LEALIAAP.COM
            </a>
            <a href="tel:+351935882323" className="hover:text-accent transition-colors link-underline">
              +351 935 882 323
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="hidden sm:flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="text-muted-foreground/60"
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
