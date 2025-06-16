import "./about.css";
import image from "../../assets/street_activism1.jpg";
import { useTranslation, Trans } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();
  const values = t("whatWeBelieve.values", { returnObjects: true });
  return (
    <section className='about-section'>
      <div className='background-split'>
        <div className='left-bg' />
        <div className='right-bg' />
      </div>

      <div className='content-grid'>
        <div className='who-we-are'>
          <h2>{t("whoWeAre.title")}</h2>
          <p>
            <Trans
              i18nKey='whoWeAre.description'
              components={{ strong: <strong /> }}
            />
          </p>
        </div>

        <div className='image-area'>
          <img src={image} alt='Anonymous for the Unheard' />
        </div>

        <div className='values-floating'>
          {values.map((value, index) => (
            <p className='value' key={index}>
              {value.toUpperCase()}
            </p>
          ))}
        </div>

        <div className='what-we-believe'>
          <h2>{t("whatWeBelieve.title")}</h2>
          <p>
            <Trans
              i18nKey='whatWeBelieve.description'
              components={{ strong: <strong /> }}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
