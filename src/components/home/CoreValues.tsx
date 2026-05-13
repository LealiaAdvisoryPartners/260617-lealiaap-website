import { motion } from "framer-motion";
import { Puzzle, BookOpen, Network, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildPath } from "@/lib/routing";
import { Magnetic } from "@/components/motion/MagneticButton";

const CoreValues = () => {
  const { t, language } = useLanguage();

  const values = [
    { icon: Puzzle, title: t("values.integrity"), description: t("values.integrity.desc") },
    { icon: BookOpen, title: t("values.excellence"), description: t("values.excellence.desc") },
    { icon: Network, title: t("values.partnership"), description: t("values.partnership.desc") },
    { icon: Users, title: t("values.innovation"), description: t("values.innovation.desc") },
  ];

  return (
    <section className="relative overflow-hidden grain" style={{ background: "var(--gradient-dark)" }}>
      {/* Decorative orbs */}
      <div
        aria-hidden
        className="absolute top-1/3 -left-20 w-96 h-96 rounded-full float-slow"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.18), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.10), transparent 70%)" }}
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-20"
        >
          <span className="eyebrow mb-6">{t("values.title")}</span>
          <h2 className="section-title text-primary-foreground max-w-3xl">
            Principles that <span className="serif-accent text-accent">guide</span> every engagement
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="flex flex-col items-start">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{ background: "hsl(var(--accent) / 0.4)" }}
                    />
                    <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-full border border-accent/30 bg-primary-foreground/5 backdrop-blur-sm group-hover:border-accent/60 transition-colors duration-500">
                      <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-xl text-primary-foreground mb-3 font-heading" style={{ fontWeight: 400 }}>
                    {value.title}
                  </h3>

                  <p className="text-primary-foreground/65 leading-relaxed text-sm" style={{ fontWeight: 300 }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <Magnetic>
            <Link to={buildPath(language, "/about")}>
              <Button className="btn-gold">{t("values.cta")}</Button>
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
