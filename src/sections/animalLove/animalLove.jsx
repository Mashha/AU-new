import React from "react";
import "./animalLove.css";
import animalImg from "../../assets/dog-pig.png";
import { useTranslation } from "react-i18next";

const AnimalLove = () => {
  const { t } = useTranslation();
  return (
    <section className='animal-love-section'>
      <div className='content-wrapper'>
        <div className='top-left-text'>
          <h2 className='question-text'>{t("interlude.lineOne")}</h2>
        </div>

        <div className='center-image'>
          <img
            src={animalImg}
            alt='Close-up of a pig and dog side by side'
            className='animal-faces'
          />
        </div>

        <div className='bottom-right-text'>
          <h2 className='question-text'>{t("interlude.lineTwo")}</h2>
        </div>
      </div>
    </section>
  );
};

export default AnimalLove;
