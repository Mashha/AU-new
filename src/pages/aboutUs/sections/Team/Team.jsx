import React from "react";
import "./team.css";
import teamImage from "/assets/team.png";
import heart from "/assets/heart_team.png";

const TeamSection = () => {
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
              With truth, kindness, and empathy, we help people connect their
              values with their choices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
