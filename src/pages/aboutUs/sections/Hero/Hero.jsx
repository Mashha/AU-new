import "./hero.css";
import { useTranslation } from "react-i18next";

const AboutHero = () => {
  const { t } = useTranslation();
  return (
    <section className='category-hero'>
      <div className='hero-overlay'>
        <div className='hero-content'>
          <h1 className='hero-title'>{t("about_us.hero.title")}</h1>
        </div>
      </div>
      {/* {image && (
        <img src={`/images/${image}`} alt={title} className='hero-image' />
      )} */}
    </section>
  );
};
export default AboutHero;
