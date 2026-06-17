import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesPerformance = () => {
  const { t } = useLanguage();

  const steps = [
    { label: t("servicespage.performance.step1"), desc: t("servicespage.performance.step1.desc") },
    { label: t("servicespage.performance.step2"), desc: t("servicespage.performance.step2.desc") },
    { label: t("servicespage.performance.step3"), desc: t("servicespage.performance.step3.desc") },
    { label: t("servicespage.performance.step4"), desc: t("servicespage.performance.step4.desc") },
  ];

  return (
    <section id="performance" className="my-20 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow mb-6">03 — Performance</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-primary tracking-tight mt-6 mb-6 leading-tight">
          {t("servicespage.performance.title").split(" ").slice(0, -1).join(" ")}{" "}
          <span className="serif-accent text-accent">
            {t("servicespage.performance.title").split(" ").slice(-1)}
          </span>
        </h2>

        <p className="text-lg text-muted-foreground font-body font-light leading-relaxed mb-12">
          {t("servicespage.performance.desc")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/60 rounded-2xl overflow-hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card p-8 group hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="serif-accent text-3xl text-accent">0{index + 1}</span>
                <h3 className="font-heading font-light text-xl text-primary">{step.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground font-body font-light leading-relaxed pl-12">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
