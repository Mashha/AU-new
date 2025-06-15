import React from 'react';
import './cat_two.css';

const CategoriesSectionTwo = () => {
  return (
    <section className="categories-section-two">
      <div className="categories-grid-two">
        {/* Eggs Section - Top Left */}
        <div className="category-item eggs-section">
          <div className="category-content">
            <h2 className="category-title">Eggs</h2>
            <p className="category-text">
              Eggs seem harmless. But behind every carton is a story of suffering, 
              silenced chirps, and discarded lives.
            </p>
            <button className="category-button">
              Explore the Truth
            </button>
          </div>
        </div>

        {/* Eggs Image - Top Right */}
        <div className="category-item eggs-image">
          <img 
            src="/api/placeholder/600/400" 
            alt="Young lambs in natural farm setting"
            className="category-img"
          />
        </div>

        {/* Dairy Image - Bottom Left */}
        <div className="category-item dairy-image">
          <img 
            src="/api/placeholder/600/400" 
            alt="Farm animals in natural environment"
            className="category-img"
          />
        </div>

        {/* Dairy Section - Bottom Right */}
        <div className="category-item dairy-section">
          <div className="category-content">
            <h2 className="category-title">Dairy</h2>
            <p className="category-text">
              Most of us grew up believing dairy was normal, necessary, and natural. 
              We were never shown the reality behind the glass of milk.
            </p>
            <button className="category-button">
              See more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSectionTwo;