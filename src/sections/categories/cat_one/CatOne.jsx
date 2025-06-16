import React from "react";
import "./cat_one.css";
import { useTranslation } from "react-i18next";

const CategoriesSection = () => {
  const { t } = useTranslation();
  return (
    <section className='categories-section'>
      <div className='categories-grid'>
        {/* Meat Section - Top Left */}
        <div className='category-item meat-section'>
          <div className='category-content'>
            <h2 className='category-title'>{t("meatSection.title")}</h2>
            <p className='category-text'>{t("meatSection.description")}</p>
            <button className='category-button'>
              {t("meatSection.button")}
            </button>
          </div>
        </div>

        {/* Meat Image - Top Right */}
        <div className='category-item meat-image'>
          <img
            src='/api/placeholder/600/400'
            alt='Young lambs in natural setting'
            className='category-img'
          />
        </div>

        {/* Fish Image - Bottom Left */}
        <div className='category-item fish-image'>
          <img
            src='/api/placeholder/600/400'
            alt='Fish in natural habitat'
            className='category-img'
          />
        </div>

        {/* Fish Section - Bottom Right */}
        <div className='category-item fish-section'>
          <div className='category-content'>
            <h2 className='category-title'>{t("fishSection.title")}</h2>
            <p className='category-text'>{t("fishSection.description")}</p>
            <button className='category-button'>
              {t("fishSection.button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
