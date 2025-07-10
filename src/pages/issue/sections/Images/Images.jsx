import "./images.css";
import AnimatedImage from "../../../../components/image/AnimatedImage";
import { useTranslation } from "react-i18next";

const ImagesSection = () => {
  const { t } = useTranslation();
  const images = [
    "https://picsum.photos/400/300?random=1",
    "https://picsum.photos/400/300?random=2",
    "https://picsum.photos/400/300?random=3",
    "https://picsum.photos/400/300?random=4",
    "https://picsum.photos/400/300?random=5",
    "https://picsum.photos/400/300?random=6",
    "https://picsum.photos/400/300?random=7",
    "https://picsum.photos/400/300?random=8",
  ];

  return (
    <section className='hidden-section'>
      <div className='hidden-section-container'>
        <h2 className='hidden-section-title'>
          {t("shared.hiddenTruthTitle")}
        </h2>

        <div className='hidden-section__scroll-wrapper'>
          <div className='images-grid'>
            {images.map((image, index) => (
              <AnimatedImage
                key={index}
                src={image}
                alt={`Hidden image ${index + 1}`}
                animName={index % 2 === 0 ? "slideFromLeft" : "slideFromRight"}
                className='grid-image'
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesSection;
