import { useTranslation } from "react-i18next";
import HeroSection from "./sections/CategoryHero/hero";
import HiddenRealitySection from "./sections/HiddenReality/hiddenReality";
import DidYouKnowSection from "./sections/Facts/facts";
import BiggerPictureSection from "./sections/BiggerPicture/biggerPicture";
import ChoiceSection from "./sections/Choice/choice";
import Footer from "../../components/footer/footer";
import Navigation from "../../components/header/Navigation";
import FarmAnimalStoriesSection from "./sections/Sanctuary/sanctuary";
import ImagesSection from "./sections/Images/Images";

const CategoryPage = ({ category }) => {
  const { t } = useTranslation();
  const data = t(`categories.${category}`, { returnObjects: true });
  const choicesData = t("shared.choices", { returnObjects: true });

  return (
    <div key={category}>
      <Navigation />

      {/* Hero Section */}
      <HeroSection data={data} />

      {/* Hidden Reality Section */}
      <HiddenRealitySection data={data} />

      {/* Did You Know Section */}
      <DidYouKnowSection data={data} />

      {/* Bigger Picture */}
      <BiggerPictureSection data={data} />

      {/* Images section */}
      <ImagesSection data={data} />

      {/* Happy story */}
      <FarmAnimalStoriesSection data={data} />

      {/* Choice Section */}
      <ChoiceSection data={choicesData} />

      <Footer />
    </div>
  );
};

export default CategoryPage;
