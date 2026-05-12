import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesCTA = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "var(--gradient-dark)" }}
    >
      <div
        className="absolute -top-20 left-1/4 w-[400px] h-[400px] rounded-full float-slow pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.18), transparent 70%)" }}
      />
      <div
        className="absolute -bottom-32 right-0 w-[400px] h-[400px] rounded-full float-slow pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.12), transparent 70%)",
          animationDelay: "4s",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-primary-foreground tracking-tight mb-6 leading-tight">
          {t("servicespage.cta").split(" ").slice(0, -1).join(" ")}{" "}
          <span className="serif-accent text-accent">{t("servicespage.cta").split(" ").slice(-1)}</span>
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/70 font-body font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          {t("servicespage.cta.desc")}
        </p>
        <button
          onClick={() => (window.location.href = "/#contact")}
          className="btn-gold group"
        >
          {t("nav.contact")}
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>
    </section>
  );
};
