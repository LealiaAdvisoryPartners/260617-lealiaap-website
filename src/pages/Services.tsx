import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOHead, { pageMeta } from "@/components/SEOHead";
import logoCircle from "@/assets/Logo_no_text_zoom_704x704.png";
import { ServicesSidebar } from "@/components/services/ServicesSidebar";
import { ServicesOverview } from "@/components/services/ServicesOverview";
import { ServicesBuySide } from "@/components/services/ServicesBuySide";
import { ServicesSellSide } from "@/components/services/ServicesSellSide";
import { ServicesPerformance } from "@/components/services/ServicesPerformance";
import { ServicesModeling } from "@/components/services/ServicesModeling";
import { ServicesCTA } from "@/components/services/ServicesCTA";

const Services = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { t } = useLanguage();

  // Track desktop viewport width
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const sections = [
    { id: "overview", label: t("servicespage.overview") },
    { id: "buy-side", label: t("servicespage.buyside") },
    { id: "sell-side", label: t("servicespage.sellside") },
    { id: "performance", label: t("servicespage.performance") },
    { id: "modeling", label: t("servicespage.modeling") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 100;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    setMobileNavOpen(false);
  };

  return (
    <>
      <SEOHead
        titleKey={pageMeta.services.titleKey}
        descriptionKey={pageMeta.services.descriptionKey}
        path="services"
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

      {/* Page Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="flex gap-8">
          <ServicesSidebar
            sections={sections}
            activeSection={activeSection}
            mobileNavOpen={mobileNavOpen}
            setMobileNavOpen={setMobileNavOpen}
            scrollToSection={scrollToSection}
          />

          <main className="flex-1 max-w-4xl">
            <ServicesOverview />
            <ServicesBuySide />
            <ServicesSellSide />
            <ServicesPerformance />
            <ServicesModeling />
          </main>
        </div>
      </section>

      {/* CTA Section - Full width outside main container */}
      <ServicesCTA />
    </>
  );
};

export default Services;
