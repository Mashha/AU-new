import React from "react";
import "./team.css";
import teamImage from "/assets/team.png";
import heart from "/assets/heart_team.png";
import { useTranslation } from "react-i18next";

const TeamSection = () => {
  const { t } = useTranslation();
  return (
    <section className='team-section'>
      <div className='team-wrapper'>
        <div className='text-area'>
          <div className='title'>
            <h2>
              We don't shout. We don't shame. <br />
              <span className='highlight'>We invite, inform, and inspire.</span>
            </h2>
          </div>
          <img src={teamImage} alt='Team' className='team-image' />
          <div className='overlay-box'>
            <img src={heart} alt='' />
            <p>
              {t("about_us.team.text2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
