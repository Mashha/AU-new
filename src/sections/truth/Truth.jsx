import React from "react";
import "./truth.css";
import truthImg from "../../assets/join-us.jpg";

const FactoryFarmingProtest = () => {
  return (
    <div className='protest-container'>
      <div className='text-section'>
        <h1 className='protest-heading'>
          If factory farming is normal and humane, why does the industry go to
          such lengths to hide it?
        </h1>
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
