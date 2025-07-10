import React from "react";
import WhyImage from "/assets/street_activism2.png";
import { useTranslation } from "react-i18next";
import "./whyThisExists.css";
import AnimatedImage from "../../../../components/image/AnimatedImage";

const WhyThisExists = () => {
  const { t } = useTranslation();

  return (
    <section className="why-section">
      <div className="why-wrapper">
        <AnimatedImage
          animName="slideFromLeft"
          className="why-image"
          src={WhyImage}
          alt="Activists"
        />
        <div className="why-card">
          <h2>{t("about_us.whyThisExists.title")}</h2>
          <div className="card-content">
            <p>{t("about_us.whyThisExists.text1")}</p>
            <p>{t("about_us.whyThisExists.text2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisExists;
