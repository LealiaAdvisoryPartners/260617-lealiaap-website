import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOHeadProps {
  titleKey?: string;
  descriptionKey?: string;
  path?: string;
}

const pageMeta: Record<string, { titleKey: string; descriptionKey: string }> = {
  home: {
    titleKey: "seo.home.title",
    descriptionKey: "seo.home.description",
  },
  about: {
    titleKey: "seo.about.title",
    descriptionKey: "seo.about.description",
  },
  services: {
    titleKey: "seo.services.title",
    descriptionKey: "seo.services.description",
  },
  team: {
    titleKey: "seo.team.title",
    descriptionKey: "seo.team.description",
  },
  privacy: {
    titleKey: "seo.privacy.title",
    descriptionKey: "seo.privacy.description",
  },
};

const SEOHead = ({ titleKey, descriptionKey, path = "" }: SEOHeadProps) => {
  const { t, language } = useLanguage();

  const title = titleKey ? t(titleKey) : "Lealia Advisory Partners | M&A Advisory";
  const description = descriptionKey
    ? t(descriptionKey)
    : t("seo.home.description");

  const baseUrl = "https://www.lealiaap.com";
  const canonicalUrl = `${baseUrl}/${language}${path ? `/${path}` : ""}`;

  const langMap: Record<string, string> = {
    en: "en_US",
    pt: "pt_PT",
    es: "es_ES",
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={langMap[language] || "en_US"} />
      <html lang={language} />
    </Helmet>
  );
};

export { pageMeta };
export default SEOHead;
