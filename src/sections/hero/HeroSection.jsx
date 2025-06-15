import React from 'react';
import './hero.css';
import bg from "../../assets/hero-bg.jpg"

const HeroSection = () => {
  return (
    <section className="heroSection">
      {/* Background Image */}
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url(${bg})`, // Make sure to import your bg variable
        }}
      ></div>
      
      {/* Overlay */}
      <div className="overlay"></div>
      
      {/* Content - Left Aligned */}
      <div className="content">
        <div className="contentInner">
          <h1 className="title">
            If they could speak,
            <br />
            what would they
            <br />
            <span className="titleAccent">say?</span>
          </h1>
          <p className="subtitle">
            Raising awareness about animal exploitation through street activism and truth-based conversations
          </p>
          <div className="buttonContainer">
            <button className="primaryButton">
              Take Action Now
            </button>
            <button className="secondaryButton">
              Join the Movement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;