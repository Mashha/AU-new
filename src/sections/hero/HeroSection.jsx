import React from "react";
import "./hero.css";
import bg from "../../assets/hero-bg.jpg";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className='heroSection'>
      <div
        className='backgroundImage'
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>

      <div className='overlay'></div>

      <div className='content'>
        <div className='contentInner'>
          <h1 className='title'>
            {t('hero.title')}
          </h1>
          <p className='subtitle'>{t("hero.subtitle")}</p>
          <div className='buttonContainer'>
            <button className='primaryButton'>{t("hero.buttonOne")}</button>
            <button className='secondaryButton'>{t("hero.buttonTwo")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
