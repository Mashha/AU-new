import { useState, useEffect } from "react";
import "./facts.css";
import { motion } from "framer-motion";

const DidYouKnowSection = ({ data }) => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const itemLeft = data.facts.items.left;
  const itemsRight = data.facts.items.right;

  return (
    <motion.div
      key={data.facts.title}
      className='did-you-know-section'
      style={{ backgroundImage: `url(${data.images[1].src})` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => setAnimationStarted(true)}
      transition={{ duration: 0.5 }}
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
    </motion.div>
  );
};

export default DidYouKnowSection;
