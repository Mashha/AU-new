import AnimatedImage from "../../components/image/AnimatedImage";
import "./animalLove.css";
import animalImg from "/assets/dog-pig.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const AnimalLove = () => {
  const { t } = useTranslation();
  return (
    <section className='animal-love-section'>
      <div className='content-wrapper'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className='top-left-text'
        >
          <h2 className='question-text'>{t("homepage.interlude.lineOne")}</h2>
        </motion.div>

        <div className='center-image'>
          <AnimatedImage
            src={animalImg}
            alt='Close-up of a pig and dog side by side'
            className='animal-faces'
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className='bottom-right-text'
        >
          <h2 className='question-text'>{t("homepage.interlude.lineTwo")}</h2>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimalLove;
