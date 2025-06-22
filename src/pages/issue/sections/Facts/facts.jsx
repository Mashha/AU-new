import React, { useState, useEffect } from "react";
import "./facts.css";

const DidYouKnowSection = ({ data }) => {
  const [animationStarted, setAnimationStarted] = useState(false);

  const itemLeft = data.facts.items.left;
  const itemsRight = data.facts.items.right;

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className='did-you-know-section'
      style={{ backgroundImage: `url(${data.images[1].src})` }}
    >
      <div className='overlay'></div>
      <h2 className='did-you-know-title'>{data.facts.title}</h2>

      <div className={`zigzag-grid ${animationStarted ? "animate" : ""}`}>
        {/* Row 1: Left fact */}
        <div className='fact-row' style={{ "--row-index": 0 }}>
          <div className='fact-box left'>{itemLeft[0]}</div>
          <div className='line-container'>
            <div className='line'></div>
            <div className='line-fill'></div>
          </div>
          <div className='empty-space'></div>
        </div>

        {/* Row 2: Right fact */}
        <div className='fact-row' style={{ "--row-index": 1 }}>
          <div className='empty-space'></div>
          <div className='line-container'>
            <div className='line'></div>
            <div className='line-fill'></div>
          </div>
          <div className='fact-box right'>{itemsRight[0]}</div>
        </div>

        {/* Row 3: Left fact */}
        <div className='fact-row' style={{ "--row-index": 2 }}>
          <div className='fact-box left'>{itemLeft[1]}</div>
          <div className='line-container'>
            <div className='line'></div>
            <div className='line-fill'></div>
          </div>
          <div className='empty-space'></div>
        </div>

        {/* Row 4: Right fact */}
        <div className='fact-row' style={{ "--row-index": 3 }}>
          <div className='empty-space'></div>
          <div className='line-container'>
            <div className='line'></div>
            <div className='line-fill'></div>
          </div>
          <div className='fact-box right'>{itemsRight[1]}</div>
        </div>

        {/* Row 5: Left fact */}
        <div className='fact-row' style={{ "--row-index": 4 }}>
          <div className='fact-box left'>{itemLeft[2]}</div>
          <div className='line-container'>
            <div className='line'></div>
            <div className='line-fill'></div>
          </div>
          <div className='empty-space'></div>
        </div>
      </div>
    </div>
  );
};

export default DidYouKnowSection;
