import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesPerformance = () => {
  const { t } = useLanguage();

  return (
    <section id="performance" className="my-16 bg-secondary rounded-lg px-6 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6">{t("servicespage.performance.title")}</h2>

        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-12">
          {t("servicespage.performance.desc")}
        </p>

        <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-elegant)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: t("servicespage.performance.step1"), desc: t("servicespage.performance.step1.desc") },
              { label: t("servicespage.performance.step2"), desc: t("servicespage.performance.step2.desc") },
              { label: t("servicespage.performance.step3"), desc: t("servicespage.performance.step3.desc") },
              { label: t("servicespage.performance.step4"), desc: t("servicespage.performance.step4.desc") },
            ].map((step, index) => (
              <div key={step.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-semibold text-accent text-lg">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{step.label}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
