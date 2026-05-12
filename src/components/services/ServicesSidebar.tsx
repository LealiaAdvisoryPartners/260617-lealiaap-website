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
        className="lg:hidden fixed top-20 left-4 z-40 p-2 rounded-md bg-muted text-foreground shadow"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* MOBILE NAV DRAWER */}
      {mobileNavOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50">
          <div className="absolute left-0 top-0 w-64 h-full bg-background border-r border-border p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-heading text-lg font-semibold">
                {t("servicespage.nav")}
              </h3>
              <button
                onClick={() => setMobileNavOpen(false)}
                aria-label="Close navigation"
                className="p-1"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <nav className="space-y-2" aria-label="Services navigation">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-md font-body transition-colors ${
                    activeSection === section.id
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex flex-none flex-col w-40 sticky top-28 self-start z-10 pr-4">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <h2 className="font-heading text-xl font-bold text-primary">
            {t("servicespage.nav")}
          </h2>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="relative space-y-1"
          aria-label="Services navigation"
        >
          {sections.map((section) => (
            <div key={section.id} className="relative">
              {activeSection === section.id && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-md" />
              )}

              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left pl-3 pr-2 py-2 ml-1 rounded-md font-body transition ${
                  activeSection === section.id
                    ? "text-accent font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {section.label}
              </button>
            </div>
          ))}
        </motion.nav>
      </aside>
    </>
  );
};
