import SEOHead, { pageMeta } from "@/components/SEOHead";
import FluidHome from "@/components/home/FluidHome";

const Index = () => {
  return (
    <>
      <SEOHead
        titleKey={pageMeta.home.titleKey}
        descriptionKey={pageMeta.home.descriptionKey}
      />
      <FluidHome />
    </>
  );
};

export default Index;
