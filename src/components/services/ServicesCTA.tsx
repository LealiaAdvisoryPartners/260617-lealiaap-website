import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesCTA = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <section className="bg-secondary py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6">
          {t("servicespage.cta")}
        </h2>
        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-12 mx-auto text-center">
          {t("servicespage.cta.desc")}
        </p>
        <Button
          onClick={scrollToContact}
          className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg"
        >
          {t("nav.contact")}
        </Button>
      </motion.div>
    </section>
  );
};
