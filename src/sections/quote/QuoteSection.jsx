import { motion } from "framer-motion";
import "./quote.css";
import quoteImg from "/assets/number.png";
import { useTranslation } from "react-i18next";
import AnimatedImage from "../../components/image/AnimatedImage";

const QuoteSection = () => {
  const { t } = useTranslation();

  return (
    <section className='quote-section'>
      <div className='quote-container'>
        <AnimatedImage animName='slideFromLeft' src={quoteImg} />
        <motion.blockquote
          className='quote-text'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          {t("homepage.quoteSection.quote")}
        </motion.blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
