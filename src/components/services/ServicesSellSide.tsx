import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, FileText, DollarSign, ClipboardCheck, Handshake } from "lucide-react";

export const ServicesSellSide = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: FileText, label: t("servicespage.sellside.step1") },
    { icon: DollarSign, label: t("servicespage.sellside.step2") },
    { icon: Target, label: t("servicespage.sellside.step3") },
    { icon: ClipboardCheck, label: t("servicespage.sellside.step4") },
    { icon: Handshake, label: t("servicespage.sellside.step5") },
  ];

  return (
    <section id="sell-side" className="my-20 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow mb-6">03 — Sell-side</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-primary tracking-tight mt-6 mb-6 leading-tight">
          {t("servicespage.sellside.title").split(" ").slice(0, -1).join(" ")}{" "}
          <span className="serif-accent text-accent">
            {t("servicespage.sellside.title").split(" ").slice(-1)}
          </span>
        </h2>

        <p className="text-lg text-muted-foreground font-body font-light leading-relaxed mb-12">
          {t("servicespage.sellside.desc")}
        </p>

        <div className="relative">
          <div
            className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.4), transparent)",
            }}
          />
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex md:flex-col items-center md:text-center gap-4 md:gap-3 group"
              >
                <div className="relative w-14 h-14 rounded-full flex items-center justify-center bg-background border border-border group-hover:border-accent/50 transition-colors">
                  <step.icon className="w-6 h-6 text-accent" />
                  <span className="absolute -top-2 -right-2 text-[10px] tracking-widest text-muted-foreground font-medium">
                    0{index + 1}
                  </span>
                </div>
                <p className="font-body font-light text-sm text-foreground">{step.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
