import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesModeling = () => {
  const { t } = useLanguage();

  return (
    <section id="modeling" className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6">{t("servicespage.modeling.title")}</h2>

        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-12">
          {t("servicespage.modeling.desc")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: t("servicespage.modeling.item1"),
              desc: t("servicespage.modeling.item1.desc"),
            },
            {
              title: t("servicespage.modeling.item2"),
              desc: t("servicespage.modeling.item2.desc"),
            },
            {
              title: t("servicespage.modeling.item3"),
              desc: t("servicespage.modeling.item3.desc"),
            },
            {
              title: t("servicespage.modeling.item4"),
              desc: t("servicespage.modeling.item4.desc"),
            },
          ].map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-elegant p-6"
            >
              <h3 className="font-heading font-semibold text-primary mb-2">{type.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{type.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
