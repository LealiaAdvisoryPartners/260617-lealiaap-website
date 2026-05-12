import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowRight,
  Search,
  Compass,
  Calculator,
  ClipboardCheck,
  Handshake,
} from "lucide-react";

export const ServicesBuySide = () => {
  const { t } = useLanguage();

  return (
    <section id="buy-side" className="my-16 bg-secondary rounded-lg px-6 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6">{t("servicespage.buyside.title")}</h2>

        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-12">
          {t("servicespage.buyside.desc")}
        </p>

        <div className="bg-card rounded-lg p-6 shadow-[var(--shadow-elegant)]">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { icon: Compass, label: t("servicespage.buyside.step1") },
              { icon: Search, label: t("servicespage.buyside.step2") },
              { icon: Calculator, label: t("servicespage.buyside.step3") },
              { icon: ClipboardCheck, label: t("servicespage.buyside.step4") },
              { icon: Handshake, label: t("servicespage.buyside.step5") },
            ].map((step, index) => (
              <div key={step.label} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <p className="font-body font-medium text-sm text-foreground">{step.label}</p>
                {index < 4 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground mt-4 rotate-90 md:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
