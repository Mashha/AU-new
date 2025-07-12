import "./images.css";
import AnimatedImage from "../../../../components/image/AnimatedImage";
import { useTranslation } from "react-i18next";

const ImagesSection = ({data}) => {
  const { t } = useTranslation();
  console.log(data.hiddenSection)
  const imageArray = data.hiddenSection

  return (
    <section className='hidden-section'>
      <div className='hidden-section-container'>
        <h2 className='hidden-section-title'>
          {t("shared.hiddenTruthTitle")}
        </h2>

        <div className='hidden-section__scroll-wrapper'>
          <div className='images-grid'>
            {imageArray.map((image, index) => (
              <AnimatedImage
                key={index}
                src={image.src}
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
