import React from "react";
import "./biggerPicture.css";
import biggerPictureIcons from "../../../../data/biggerPictureIcons";

const BiggerPictureSection = ({ data }) => {
  const entries = Object.entries(data.biggerPicture.items);

  return (
    <section className='bigger-picture-section'>
      <div className='container'>
        <h2 className='bigger-picture-title'>{data.biggerPicture.title}</h2>

        <div className='bigger-picture-grid'>
          {entries.map(([key, item], index) => (
            <div key={index} className='picture-card'>
              <div className='icon-container'>
                <img src={biggerPictureIcons[key]} alt={key} />
              </div>
              <p className='card-text'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BiggerPictureSection;
