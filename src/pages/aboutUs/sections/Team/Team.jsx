import React from "react";
import { motion } from "framer-motion";
import "./team.css";
import teamImage from "/assets/team_img.jpg";
import heart from "/assets/heart_team.png";
import { useTranslation } from "react-i18next";
import AnimatedImage from "../../../../components/image/AnimatedImage";

const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section className='team-section white-section'>
      <div className='team-wrapper'>
        <div className='text-area'>
          <div className='title'>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              {t("about_us.team.text_top-first")}
              <br />
              <span className='highlight'>
                {t("about_us.team.text_top-sec")}
              </span>
            </motion.h2>
          </div>

          <AnimatedImage
            animName='slideFromLeft'
            src={teamImage}
            alt='Team'
            className='team-image'
          />

          <div className='overlay-box'>
            <img src={heart} alt='' />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("about_us.team.text_bottom")}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
