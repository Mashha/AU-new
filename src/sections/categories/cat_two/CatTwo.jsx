import React from "react";
import "./cat_two.css";
import { useTranslation } from "react-i18next";

const CategoriesSectionTwo = () => {
  const { t } = useTranslation();
  return (
    <section className='categories-section-two'>
      <div className='categories-grid-two'>
        {/* Eggs Section - Top Left */}
        <div className='category-item eggs-section'>
          <div className='category-content'>
            <h2 className='category-title'>{t("eggsSection.title")}</h2>
            <p className='category-text'>{t("eggsSection.description")}</p>
            <button className='category-button'>
              {t("eggsSection.button")}
            </button>
          </div>
        </div>

        {/* Eggs Image - Top Right */}
        <div className='category-item eggs-image'>
          <img
            src='/api/placeholder/600/400'
            alt='Young lambs in natural farm setting'
            className='category-img'
          />
        </div>

        {/* Dairy Image - Bottom Left */}
        <div className='category-item dairy-image'>
          <img
            src='/api/placeholder/600/400'
            alt='Farm animals in natural environment'
            className='category-img'
          />
        </div>

        {/* Dairy Section - Bottom Right */}
        <div className='category-item dairy-section'>
          <div className='category-content'>
            <h2 className='category-title'>{t("dairySection.title")}</h2>
            <p className='category-text'>
              {t("dairySection.description")}
            </p>
            <button className='category-button'>{t("dairySection.button")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSectionTwo;
