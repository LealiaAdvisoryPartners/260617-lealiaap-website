import { useLanguage } from "@/contexts/LanguageContext";
import SEOHead, { pageMeta } from "@/components/SEOHead";

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        titleKey={pageMeta.privacy.titleKey}
        descriptionKey={pageMeta.privacy.descriptionKey}
        path="privacy"
      />
      <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-8">
          {t("privacy.title")}
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <p className="text-lg text-muted-foreground">
            {t("privacy.lastUpdated")}
          </p>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
              {t("privacy.section1.title")}
            </h2>
            <p className="text-foreground/80 mb-4">
              {t("privacy.section1.content")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
              {t("privacy.section2.title")}
            </h2>
            <p className="text-foreground/80 mb-4">
              {t("privacy.section2.content")}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>{t("privacy.section2.item1")}</li>
              <li>{t("privacy.section2.item2")}</li>
              <li>{t("privacy.section2.item3")}</li>
              <li>{t("privacy.section2.item4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
              {t("privacy.section3.title")}
            </h2>
            <p className="text-foreground/80 mb-4">
              {t("privacy.section3.content")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
              {t("privacy.section4.title")}
            </h2>
            <p className="text-foreground/80 mb-4">
              {t("privacy.section4.content")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
              {t("privacy.section5.title")}
            </h2>
            <p className="text-foreground/80 mb-4">
              {t("privacy.section5.content")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
              {t("privacy.section6.title")}
            </h2>
            <p className="text-foreground/80 mb-4">
              {t("privacy.section6.content")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
              {t("privacy.section7.title")}
            </h2>
            <p className="text-foreground/80 mb-4">
              {t("privacy.section7.content")}
            </p>
          </section>
        </div>
      </div>
      </div>
    </>
  );
};

export default Privacy;
