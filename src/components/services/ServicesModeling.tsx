import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesModeling = () => {
  const { t } = useLanguage();

  const items = [
    { title: t("servicespage.modeling.item1"), desc: t("servicespage.modeling.item1.desc") },
    { title: t("servicespage.modeling.item2"), desc: t("servicespage.modeling.item2.desc") },
    { title: t("servicespage.modeling.item3"), desc: t("servicespage.modeling.item3.desc") },
    { title: t("servicespage.modeling.item4"), desc: t("servicespage.modeling.item4.desc") },
  ];

  return (
    <section id="modeling" className="my-20 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow mb-6">05 — Modeling</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-primary tracking-tight mt-6 mb-6 leading-tight">
          {t("servicespage.modeling.title").split(" ").slice(0, -1).join(" ")}{" "}
          <span className="serif-accent text-accent">
            {t("servicespage.modeling.title").split(" ").slice(-1)}
          </span>
        </h2>

        <p className="text-lg text-muted-foreground font-body font-light leading-relaxed mb-12">
          {t("servicespage.modeling.desc")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="gradient-border p-7 group"
            >
              <div className="flex items-start gap-4">
                <span className="serif-accent text-2xl text-accent shrink-0">0{index + 1}</span>
                <div>
                  <h3 className="font-heading font-light text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
                    {type.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
