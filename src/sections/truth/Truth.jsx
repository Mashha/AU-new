import React from "react";
import "./truth.css";
import truthImg from "../../assets/join-us.jpg";
import { useTranslation } from "react-i18next";

const FactoryFarmingProtest = () => {
  const { t } = useTranslation();
  return (
    <div className='protest-container'>
      <div className='text-section'>
        <h1 className='protest-heading'>{t("factoryFarming.question")}</h1>
      </div>

      <div className='image-section'>
        <img
          src={truthImg}
          alt='Protesters in masks holding signs at a demonstration'
          className='protest-image'
        />
      </div>
    </div>
  );
};

export default FactoryFarmingProtest;
