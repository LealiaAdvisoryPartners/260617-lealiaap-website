import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ServicesSidebarProps {
  sections: Array<{ id: string; label: string }>;
  activeSection: string;
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export const ServicesSidebar = ({
  sections,
  activeSection,
  mobileNavOpen,
  setMobileNavOpen,
  scrollToSection,
}: ServicesSidebarProps) => {
  const { t } = useLanguage();

  return (
    <>
      {/* MOBILE NAV BUTTON */}
      <button
        onClick={() => setMobileNavOpen(true)}
        aria-label="Open navigation"
        className="lg:hidden fixed top-20 left-4 z-40 p-2.5 rounded-full glass shadow-[var(--shadow-soft)]"
      >
        <Menu className="w-4 h-4 text-primary" />
      </button>

      {/* MOBILE NAV DRAWER */}
      {mobileNavOpen && (
        <div className="fixed inset-0 bg-primary/30 backdrop-blur-md z-50">
          <div className="absolute left-0 top-0 w-72 h-full bg-background/95 backdrop-blur-xl border-r border-border p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <span className="eyebrow">{t("servicespage.nav")}</span>
              <button
                onClick={() => setMobileNavOpen(false)}
                aria-label="Close navigation"
                className="p-1"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <nav className="space-y-1" aria-label="Services navigation">
              {sections.map((section, idx) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-body font-light transition-all flex items-center gap-3 ${
                    activeSection === section.id
                      ? "text-accent bg-accent/5"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="text-xs tracking-widest opacity-60">
                    0{idx + 1}
                  </span>
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex flex-none flex-col w-48 sticky top-28 self-start z-10 pr-4">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="eyebrow">{t("servicespage.nav")}</span>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative space-y-1"
          aria-label="Services navigation"
        >
          {sections.map((section, idx) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group w-full text-left py-2.5 font-body font-light transition-all flex items-center gap-3 ${
                activeSection === section.id
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span
                className={`h-px transition-all duration-500 ${
                  activeSection === section.id
                    ? "w-8 bg-accent"
                    : "w-3 bg-muted-foreground/40 group-hover:w-6 group-hover:bg-foreground"
                }`}
              />
              <span className="text-sm">{section.label}</span>
            </button>
          ))}
        </motion.nav>
      </aside>
    </>
  );
};
