import { motion } from "framer-motion";
import { Handshake, TrendingUp, Building2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildPath } from "@/lib/routing";
import { TiltCard } from "@/components/motion/TiltCard";
import { Magnetic } from "@/components/motion/MagneticButton";

const ServicesOverview = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Handshake,
      number: "01",
      title: t("services.ma"),
      description: t("services.ma.desc"),
      link: buildPath(language, "/services#buy-side"),
    },
    {
      icon: TrendingUp,
      number: "02",
      title: t("services.performance"),
      description: t("services.performance.desc"),
      link: buildPath(language, "/services#performance"),
    },
    {
      icon: Building2,
      number: "03",
      title: t("services.modeling"),
      description: t("services.modeling.desc"),
      link: buildPath(language, "/services#modeling"),
    },
  ];

  return (
    <section className="section-container bg-background relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center mb-20"
      >
        <span className="eyebrow mb-6">{t("services.title")}</span>
        <h2 className="section-title max-w-3xl">
          Advisory <span className="serif-accent text-accent">crafted</span> for ambitious transactions
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="h-full group rounded-[var(--radius)]">
                <Link
                  to={service.link}
                  className="relative block h-full p-8 lg:p-10 rounded-[var(--radius)] bg-card border border-border/60 hover:border-accent/40 transition-all duration-500 overflow-hidden"
                  style={{ boxShadow: "var(--shadow-soft)" }}
                >
                  {/* Hover gradient wash */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background:
                        "radial-gradient(400px circle at 50% 0%, hsl(var(--accent) / 0.10), transparent 70%)",
                    }}
                  />

                  <div className="relative" style={{ transform: "translateZ(40px)" }}>
                    <div className="flex items-start justify-between mb-10">
                      <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary group-hover:bg-accent/10 transition-colors duration-500">
                        <Icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs tracking-[0.25em] text-muted-foreground/60 font-medium">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-heading text-primary mb-4" style={{ fontWeight: 400, letterSpacing: "-0.01em" }}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8" style={{ fontWeight: 300 }}>
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-accent font-medium">
                      <span className="link-underline">{t("services.cta")}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center"
      >
        <Magnetic>
          <Link to={buildPath(language, "/services")}>
            <Button className="btn-gold">{t("services.cta")}</Button>
          </Link>
        </Magnetic>
      </motion.div>
    </section>
  );
};

export default ServicesOverview;
