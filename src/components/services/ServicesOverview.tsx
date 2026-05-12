import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesOverview = () => {
  const { t } = useLanguage();
  return (
    <section id="overview" className="mb-20 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow mb-6">01 — Overview</span>
        <div className="space-y-5 mt-6 font-body font-light text-lg text-muted-foreground leading-relaxed">
          <p>{t("servicespage.overview.p1")}</p>
          <p>{t("servicespage.overview.p2")}</p>
          <p>{t("servicespage.overview.p3")}</p>
        </div>
      </motion.div>
    </section>
  );
};
