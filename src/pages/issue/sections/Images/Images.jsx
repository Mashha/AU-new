import './images.css';

const ImagesSection = () => {
  const images = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
    'https://picsum.photos/400/300?random=5',
    'https://picsum.photos/400/300?random=6',
    'https://picsum.photos/400/300?random=7',
    'https://picsum.photos/400/300?random=8'
  ];

  return (
    <section className="hidden-section">
      <div className="hidden-section__container">
        <h2 className="hidden-section__title">
          What They Don't Want You to See
        </h2>
        
        <div className="hidden-section__scroll-wrapper">
          <div className="hidden-section__scroll-container">
            {/* First set of images */}
            {images.map((img, index) => (
              <div key={`first-${index}`} className="hidden-section__image-card">
                <img 
                  src={img} 
                  alt={`Hidden image ${index + 1}`}
                  className="hidden-section__image"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {images.map((img, index) => (
              <div key={`second-${index}`} className="hidden-section__image-card">
                <img 
                  src={img} 
                  alt={`Hidden image ${index + 1} duplicate`}
                  className="hidden-section__image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesSection;