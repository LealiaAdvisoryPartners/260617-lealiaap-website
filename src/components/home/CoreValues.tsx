import { motion } from "framer-motion";
import { Puzzle, BookOpen, Network, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildPath } from "@/lib/routing";

const CoreValues = () => {
  const { t, language } = useLanguage();
  
  const values = [
    {
      icon: Puzzle,
      title: t("values.integrity"),
      description: t("values.integrity.desc"),
    },
    {
      icon: BookOpen,
      title: t("values.excellence"),
      description: t("values.excellence.desc"),
    },
    {
      icon: Network,
      title: t("values.partnership"),
      description: t("values.partnership.desc"),
    },
    {
      icon: Users,
      title: t("values.innovation"),
      description: t("values.innovation.desc"),
    },
  ];

  return (
    <section className="section-container bg-background py-20 sm:py-24">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">{t("values.title")}</h2>
      </motion.div>

      {/* Core Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="flex justify-center md:justify-start mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
              </div>

              <h3 className="mt-4 text-xl font-heading font-semibold text-primary">
                {value.title}
              </h3>

              <p className="mt-2 text-muted-foreground font-body">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Single Button Below Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link to={buildPath(language, "/about")}>
          <Button className="btn-gold">{t("values.cta")}</Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default CoreValues;
