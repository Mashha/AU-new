import React from "react";
import WhyImage from "/assets/street_activism2.png";
import { useTranslation } from "react-i18next";
import "./whyThisExists.css";

const WhyThisExists = () => {
  const { t } = useTranslation();

  return (
    <section className='why-section'>
      <div className='why-wrapper'>
        <img className='why-image' src={WhyImage} alt='Activists' />
        <div className='why-card'>
          <h2>{t("about_us.whyThisExists.title")}</h2>
          <p>{t("about_us.whyThisExists.text")}</p>
        </div>
      </div>
    </section>
  );
};

export default WhyThisExists;
