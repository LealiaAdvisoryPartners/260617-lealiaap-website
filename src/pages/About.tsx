import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildPath } from "@/lib/routing";
import SEOHead, { pageMeta } from "@/components/SEOHead";
import aboutStory from "@/assets/about-story.jpg";
import logoCircle from "@/assets/Logo_no_text_zoom_704x704.png";

const About = () => {
  const { t, language } = useLanguage();

  // State to track if viewport is desktop size
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const whyUsItems = [
    {
      title: t("about.whyus.expertise"),
      content: t("about.whyus.expertise.desc"),
    },
    {
      title: t("about.whyus.tailored"),
      content: t("about.whyus.tailored.desc"),
    },
    {
      title: t("about.whyus.track"),
      content: t("about.whyus.track.desc"),
    },
    {
      title: t("about.whyus.client"),
      content: t("about.whyus.client.desc"),
    },
  ];

  return (
    <>
      <SEOHead
        titleKey={pageMeta.about.titleKey}
        descriptionKey={pageMeta.about.descriptionKey}
        path="about"
      />
      {isDesktop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 0.35, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 right-0 overflow-hidden pointer-events-none z-0 w-[650px] h-[650px]"
        >
          <img
            src={logoCircle}
            alt=""
            className="absolute -top-40 -right-40 w-[650px] h-[650px] opacity-35"
          />
        </motion.div>
      )}

      {/* Introduction Section */}
      <section className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            {t("about.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed">
            {t("about.intro")}
          </p>
        </motion.div>
      </section>

      {/* Why Us Section */}
      <section className="section-container bg-secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-12">{t("about.whyus.title")}</h2>
          <div className="max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              {whyUsItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="card-elegant px-6 border-0">
                    <AccordionTrigger className="text-lg font-heading font-semibold text-primary hover:text-accent">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-body pt-2">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </section>

      {/* How We Were Formed Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-12">{t("about.story.title")}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>{t("about.story.p1")}</p>
              <p>{t("about.story.p2")}</p>
              <p>{t("about.story.p3")}</p>
              {/* <p>{t("about.story.p4")}</p> */}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={aboutStory}
                alt="Lealia Advisory Partners Team"
                className="rounded-lg shadow-[var(--shadow-elegant)] w-full"
              />
            </motion.div>
          </div>

          {/* Take me to Services button below story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href={buildPath(language, "/services")}
              className="inline-flex items-center text-primary font-semibold text-lg hover:text-accent transition-colors"
            >
              {t("about.servicesLink")}
              <svg
                className="ml-2 w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
