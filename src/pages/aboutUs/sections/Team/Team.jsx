import React from "react";
import "./team.css";
import teamImage from "/assets/team.png";
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
            <h2>
              {t("about_us.team.text_top-first")}
              <br />
              <span className='highlight'>
                {t("about_us.team.text_top-sec")}
              </span>
            </h2>
          </div>
          <AnimatedImage
            animName="slideFromLeft"
            src={teamImage}
            alt="Team"
            className="team-image"
          />
          <div className="overlay-box">
            <img src={heart} alt="" />
            <p>{t("about_us.team.text_bottom")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
