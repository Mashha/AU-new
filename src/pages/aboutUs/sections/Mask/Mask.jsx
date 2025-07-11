import "./mask.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MaskSection = () => {
  const { t } = useTranslation();

  return (
    <section className='masked-hero'>
      <div className='mask-content'>
        <motion.p
          className='main-text'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          {t("about_us.mask.text1")}
          <span className='highlight'> {t("about_us.mask.text2")}</span>
        </motion.p>
      </div>
    </section>
  );
};

export default MaskSection;
