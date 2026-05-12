import { motion } from "framer-motion";
import { Handshake, TrendingUp, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildPath } from "@/lib/routing";

const ServicesOverview = () => {
  const { t, language } = useLanguage();
  
  const services = [
    {
      icon: Handshake,
      title: t("services.ma"),
      description: t("services.ma.desc"),
      link: buildPath(language, "/services#buy-side"),
    },
    {
      icon: TrendingUp,
      title: t("services.performance"),
      description: t("services.performance.desc"),
      link: buildPath(language, "/services#performance"),
    },
    {
      icon: Building2,
      title: t("services.modeling"),
      description: t("services.modeling.desc"),
      link: buildPath(language, "/services#modeling"),
    },
  ];

  return (
    <section className="section-container bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">{t("services.title")}</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.title}
              to={service.link}
              className="card-elegant p-8 text-center block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body">{service.description}</p>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Single button below the services grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <Link to={buildPath(language, "/services")}>
          <Button className="btn-gold">{t("services.cta")}</Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default ServicesOverview;
