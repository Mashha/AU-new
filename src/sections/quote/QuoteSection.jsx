import "./quote.css";
import quoteImg from "/assets/number.png";
import { useTranslation } from "react-i18next";

const QuoteSection = () => {
  const { t } = useTranslation();
  return (
    <section className='quote-section'>
      <div className='quote-container'>
        <img src={quoteImg} />
        <blockquote className='quote-text'>
          {t("homepage.quoteSection.quote")}
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
