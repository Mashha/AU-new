import "./quote.css";
import quoteImg from "/assets/number.png";
import { useTranslation } from "react-i18next";
import AnimatedImage from "../../components/image/AnimatedImage";

const QuoteSection = () => {
  const { t } = useTranslation();
  return (
    <section className='quote-section'>
      <div className='quote-container'>
        <AnimatedImage animName="slideFromLeft" src={quoteImg} />
        <blockquote className='quote-text'>
          {t("homepage.quoteSection.quote")}
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
