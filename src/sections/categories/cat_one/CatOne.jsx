import React from "react";
import "./cat_one.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const CategoriesSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <section className='categories-section'>
      <div className='categories-grid'>
        {/* Meat Section - Top Left */}
        <div className='category-item meat-section'>
          <div className='category-content'>
            <h2 className='category-title'>
              {t("homepage.categoryPreview.meat.title")}
            </h2>
            <p className='category-text'>
              {t("homepage.categoryPreview.meat.description")}
            </p>
            <button
              className='category-button'
              onClick={() => navigate("/meat")}
            >
              {t("homepage.categoryPreview.meat.button")}
            </button>
          </div>
        </div>

        {/* Meat Image - Top Right */}
        <div className='category-item meat-image'>
          <img
            src='https://images.pexels.com/photos/2127919/pexels-photo-2127919.jpeg'
            alt='Young lambs in natural setting'
            className='category-img'
          />
        </div>

        {/* Fish Image - Bottom Left */}
        <div className='category-item fish-image'>
          <img
            src='https://images.pexels.com/photos/2553549/pexels-photo-2553549.jpeg'
            alt='Fish in natural habitat'
            className='category-img'
          />
        </div>

        {/* Fish Section - Bottom Right */}
        <div className='category-item fish-section'>
          <div className='category-content'>
            <h2 className='category-title'>
              {t("homepage.categoryPreview.fish.title")}
            </h2>
            <p className='category-text'>
              {t("homepage.categoryPreview.fish.description")}
            </p>
            <button
              className='category-button'
              onClick={() => navigate("/fish")}
            >
              {t("homepage.categoryPreview.fish.button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
