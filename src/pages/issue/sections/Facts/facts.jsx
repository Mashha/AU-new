import { useState, useEffect } from "react";
import "./facts.css";

const DidYouKnowSection = ({ data }) => {
  const [animationStarted, setAnimationStarted] = useState(false);

  const itemLeft = data.facts.items.left;
  const itemsRight = data.facts.items.right;

  useEffect(() => {
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
        <div className='fact-row' style={{ "--row-index": 0 }}>
          <div className='fact-box left'>{itemLeft[0]}</div>
          <div className='line-container'>
            <div className='line'></div>
            <div className='line-fill'></div>
          </div>
          <div className='empty-space'></div>
        </div>

        <div className='fact-row' style={{ "--row-index": 1 }}>
          <div className='empty-space'></div>
          <div className='line-container'>
            <div className='line'></div>
            <div className='line-fill'></div>
          </div>
          <div className='fact-box right'>{itemsRight[0]}</div>
        </div>

        <div className='fact-row' style={{ "--row-index": 2 }}>
          <div className='fact-box left'>{itemLeft[1]}</div>
          <div className='line-container'>
            <div className='line'></div>
            <div className='line-fill'></div>
          </div>
          <div className='empty-space'></div>
        </div>

        <div className='fact-row' style={{ "--row-index": 3 }}>
          <div className='empty-space'></div>
          <div className='line-container'>
            <div className='line'></div>
            <div className='line-fill'></div>
          </div>
          <div className='fact-box right'>{itemsRight[1]}</div>
        </div>

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
