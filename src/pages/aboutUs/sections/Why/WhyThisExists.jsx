import React from "react";
import WhyImage from "/assets/street_activism2.png";
import { useTranslation } from "react-i18next";
import "./whyThisExists.css";
import AnimatedImage from "../../../../components/image/AnimatedImage";
import { motion } from "framer-motion";

const WhyThisExists = () => {
  const { t } = useTranslation();

  return (
    <section className='why-section'>
      <div className='why-wrapper'>
        <AnimatedImage
          animName='slideFromLeft'
          className='why-image'
          src={WhyImage}
          alt='Activists'
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className='why-card'
        >
          <h2>{t("about_us.whyThisExists.title")}</h2>
          <div className='card-content'>
            <p>{t("about_us.whyThisExists.text1")}</p>
            <p>{t("about_us.whyThisExists.text2")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyThisExists;
