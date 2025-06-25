import "./mask.css";
import { useTranslation } from "react-i18next";

const MaskSection = () => {
  const { t } = useTranslation();
  return (
    <section className='masked-hero'>
      <div className='mask-content'>
        <p className='main-text'>
          {t("about_us.mask.text1")}
          <span className='highlight'>
            {" "}
            {t("about_us.mask.text2")}
          </span>
        </p>
      </div>
    </section>
  );
};

export default MaskSection;
