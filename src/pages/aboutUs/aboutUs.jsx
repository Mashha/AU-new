import Footer from "../../components/footer/footer";
import Navigation from "../../components/header/Navigation";
import WhatWeDo from "./sections/What/WhatWeDo";
import AboutHero from "./sections/Hero/Hero";
import WhyThisExists from "./sections/Why/WhyThisExists";
import TeamSection from "./sections/Team/Team";
import MaskSection from "./sections/Mask/Mask";

const AboutUsPage = () => {
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
      <TeamSection />

      {/* Mask */}
      <MaskSection />

      <Footer />
    </div>
  );
};

export default AboutUsPage;
