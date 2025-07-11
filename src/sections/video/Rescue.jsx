import "./rescue.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const StoriesOfHopeSection = () => {
  const { t } = useTranslation();

  return (
    <section className='stories-of-hope-section white-section'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className='rescue-container'
      >
        <div className='rescue-content'>
          <h2 className='rescue-section-title'>
            {t("homepage.stories.title")}
          </h2>
          <p className='section-subtitle'>{t("homepage.stories.sub")}</p>
        </div>
        <div className='video-wrapper'>
          <iframe
            width='100%'
            height='500'
            src='https://www.youtube.com/embed/nuF-eRe7eHs?si=ylxnk_LQoP_Grzv6'
            title='Stories of Hope and Healing'
            allow='web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          />
        </div>
      </motion.div>
    </section>
  );
};

export default StoriesOfHopeSection;
