import "./whatWeDo.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  const { t } = useTranslation();
  const sections = t("about_us.whatWeDo.sections", { returnObjects: true });

  return (
    <section className='what-we-do-section'>
      <div className='overlay'>
        <motion.div
          className='what-we-do-container'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='what-section-title'>{t("about_us.whatWeDo.title")}</h2>
          <div className='cards'>
            {sections.map((item, index) => (
              <div className='card' key={index}>
                <h3 className='card-title'>{item.title}</h3>
                <p className='card-text'>{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
