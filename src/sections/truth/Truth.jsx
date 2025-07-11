import AnimatedImage from "../../components/image/AnimatedImage";
import "./truth.css";
import truthImg from "/assets/truth.jpg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const FactoryFarmingProtest = () => {
  const { t } = useTranslation();
  return (
    <div className='protest-container'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className='text-section'
      >
        <h1 className='protest-heading'>
          {t("homepage.factoryFarming.question")}
        </h1>
      </motion.div>

      <div className='image-section'>
        <AnimatedImage
          src={truthImg}
          alt='Protesters in masks holding signs at a demonstration'
          className='protest-image'
        />
      </div>
    </div>
  );
};

export default FactoryFarmingProtest;
