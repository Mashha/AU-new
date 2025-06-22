import React from "react";
import "./support.css";
import { useTranslation } from "react-i18next";

const Support = () => {
  const { t } = useTranslation();
  return (
    <section className='it-starts-section'>
      <div className='text-content'>
        <p className='intro-text'>{t("homepage.cta.description")}</p>

        <h1 className='main-heading'>{t("homepage.cta.heading")}</h1>

        <div className='action-text'>
          <p>{t("homepage.cta.quote1")}</p>
          <p>{t("homepage.cta.quote2")}</p>
          <p>{t("homepage.cta.quote3")}</p>
        </div>

        <p className='closing-text'>
          {t("homepage.cta.invitation")}
          {t("homepage.cta.line")}
        </p>
      </div>

      <div className='action-panels'>
        <div className='panel veg-panel'>
          <div className='panel-overlay'>
            <button className='action-button'>{t("homepage.cta.vegan")}</button>
          </div>
        </div>

        <div className='panel help-panel'>
          <div className='panel-overlay'>
            <button className='action-button'>{t("homepage.cta.help")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
