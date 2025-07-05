import "./hero.css";
import bg from "/assets/hero-bg.jpg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleInternalNavigation = () => {
    navigate("/meat");
  };

  const googleForm =
    "https://docs.google.com/forms/d/e/1FAIpQLSfQlRnnPz06qrr-316pQa94KfcV0SKBOKUhqGIOEQACZAkkkA/viewform";

  return (
    <section className='heroSection'>
      <div
        className='backgroundImage'
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>

      <div className='overlay'></div>

      <div className='content'>
        <div className='contentInner'>
          <h1 className='title'>{t("homepage.hero.title")}</h1>
          <p className='subtitle'>{t("homepage.hero.subtitle")}</p>
          <div className='buttonContainer'>
            <button
              className='primaryButton'
              onClick={handleInternalNavigation}
            >
              {t("homepage.hero.buttonOne")}
            </button>
            <a
              href={googleForm}
              target='_blank'
              rel='noopener noreferrer'
              className='secondaryButton'
            >
              {t("homepage.hero.buttonTwo")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
