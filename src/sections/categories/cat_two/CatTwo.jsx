import React from "react";
import "./cat_two.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const CategoriesSectionTwo = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <section className='categories-section-two'>
      <div className='categories-grid-two'>
        {/* Eggs Section - Top Left */}
        <div className='category-item eggs-section'>
          <div className='category-content'>
            <h2 className='category-title'>
              {t("homepage.categoryPreview.eggs.title")}
            </h2>
            <p className='category-text'>
              {t("homepage.categoryPreview.eggs.description")}
            </p>
            <button
              className='category-button'
              onClick={() => navigate("/eggs")}
            >
              {t("homepage.categoryPreview.eggs.button")}
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
            <h2 className='category-title'>
              {t("homepage.categoryPreview.dairy.title")}
            </h2>
            <p className='category-text'>
              {t("homepage.categoryPreview.dairy.description")}
            </p>
            <button
              className='category-button'
              onClick={() => navigate("/dairy")}
            >
              {t("homepage.categoryPreview.dairy.button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSectionTwo;
