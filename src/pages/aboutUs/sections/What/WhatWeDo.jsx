import "./whatWeDo.css";
import { useTranslation } from "react-i18next";

const WhatWeDo = () => {
  const { t } = useTranslation();
  const sections = t("about_us.whatWeDo.sections", { returnObjects: true });

  return (
    <section className='what-we-do-section'>
      <div className='overlay'>
        <div className='what-we-do-container'>
          <h2 className='section-title'>{t("about_us.whatWeDo.title")}</h2>
          <div className='cards'>
            {sections.map((item, index) => (
              <div className='card' key={index}>
                <h3 className='card-title'>{item.title}</h3>
                <p className='card-text'>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
