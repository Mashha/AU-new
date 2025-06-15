import React from 'react';
import './cat_one.css';

const CategoriesSection = () => {
  return (
    <section className="categories-section">
      <div className="categories-grid">
        {/* Meat Section - Top Left */}
        <div className="category-item meat-section">
          <div className="category-content">
            <h2 className="category-title">Meat</h2>
            <p className="category-text">
              We see meat as food, not as someone's body. But every cut comes from a life 
              that wanted to live — just like us.
            </p>
            <button className="category-button">
              Explore the Truth
            </button>
          </div>
        </div>

        {/* Meat Image - Top Right */}
        <div className="category-item meat-image">
          <img 
            src="/api/placeholder/600/400" 
            alt="Young lambs in natural setting"
            className="category-img"
          />
        </div>

        {/* Fish Image - Bottom Left */}
        <div className="category-item fish-image">
          <img 
            src="/api/placeholder/600/400" 
            alt="Fish in natural habitat"
            className="category-img"
          />
        </div>

        {/* Fish Section - Bottom Right */}
        <div className="category-item fish-section">
          <div className="category-content">
            <h2 className="category-title">Fish</h2>
            <p className="category-text">
              Fish feel pain. They struggle, suffocate, and vanish by the billions — unseen, unheard.
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

export default CategoriesSection;