import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white min-h-[85vh] sm:min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-12 sm:-mt-8 lg:-mt-20">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo with Company Name */}
          <img
            src={logo}
            alt="Lealia Advisory Partners"
            className="w-full max-w-2xl mx-auto"
            style={{ height: "auto" }}
          />

          {/* Services Text */}
          <p className="text-muted-foreground text-sm sm:text-lg md:text-xl uppercase text-center font-cinzel" style={{ letterSpacing: '0.15em' }}>
            {t("hero.services")}
          </p>
        </div>
      </div>

      {/* Contact Information - Positioned at bottom corners */}
      <div className="absolute bottom-16 sm:bottom-20 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-1 sm:gap-0 text-muted-foreground text-sm sm:text-lg md:text-xl font-cinzel">
          <a
            href="mailto:info@lealia.com"
            className="hover:text-foreground transition-colors"
          >
            INFO@LEALIAAP.COM
          </a>
          <a
            href="tel:+351935882323"
            className="hover:text-foreground transition-colors"
          >
            +351 935 882 323
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
