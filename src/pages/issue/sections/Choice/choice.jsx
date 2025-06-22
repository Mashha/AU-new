import React from "react";
import "./choice.css";
import { useTranslation } from "react-i18next";

const ChoiceSection = ({ data }) => {
  const cards = data.buttons;
  console.log(data);
  const { t } = useTranslation();
  return (
    <section className='choice-section'>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>
      <div className='choices-grid'>
        {cards.map((choice, index) => (
          <div key={index} className='choice-card'>
            <a href={choice.link} className='choice-link' target='_blank'>
              <img
                src={choice.image}
                alt={choice.text}
                className='choice-image'
              />
              <h3 className='choice-text'>{choice.text}</h3>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChoiceSection;
