import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
export const ServicesOverview = () => {
  const {
    t
  } = useLanguage();
  return <section id="overview" className="mb-16">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }}>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
          {t("servicespage.overview.title")}
        </h1>

        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
          {t("servicespage.overview.p1")}
        </p>

        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
          {t("servicespage.overview.p2")}
        </p>

        <p className="text-lg text-muted-foreground font-body leading-relaxed">
          {t("servicespage.overview.p3")}
        </p>
      </motion.div>
    </section>;
};