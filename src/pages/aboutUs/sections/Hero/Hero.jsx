import "./hero.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const AboutHero = () => {
  const { t } = useTranslation();
  return (
    <section className='category-hero'>
      <div className='hero-overlay'>
        <div className='hero-content'>
         <motion.h1 
            key={t("about_us.hero.title")}
            className='hero-title'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("about_us.hero.title")}
          </motion.h1>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;
