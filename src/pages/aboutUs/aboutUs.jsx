import { useTranslation } from "react-i18next";
import Footer from "../../components/footer/footer";
import Navigation from "../../components/header/Navigation";
import WhatWeDo from "./sections/What/WhatWeDo";
import AboutHero from "./sections/Hero/Hero";
import WhyThisExists from "./sections/Why/whyThisExists";

const AboutUsPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navigation />

      {/* Hero Section */}
      <AboutHero />

      {/* What We Do */}
      <WhatWeDo />

      {/* Why This Exists */}
      <WhyThisExists />

      {/* Team */}

      {/* Mask */}

      <Footer />
    </div>
  );
};

export default AboutUsPage;
