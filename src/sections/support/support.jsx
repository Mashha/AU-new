import "./support.css";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";

const Support = () => {
  const { t } = useTranslation();
  return (
    <section className='it-starts-section white-section'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className='text-content'
      >
        <p className='intro-text'>
          <Trans
            i18nKey='homepage.cta.description'
            components={{ strong: <strong /> }}
          />
        </p>
        <h1 className='main-heading'>{t("homepage.cta.heading")}</h1>

        <div className='action-text'>
          <p>
            <Trans
              i18nKey='homepage.cta.quote1'
              components={{ strong: <strong /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey='homepage.cta.quote2'
              components={{ strong: <strong /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey='homepage.cta.quote3'
              components={{ strong: <strong /> }}
            />
          </p>
        </div>

        <div className='closing-div'>
          <p className='closing-text'>{t("homepage.cta.invitation")}</p>
          <p className='closing-text-two'>{t("homepage.cta.line")}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className='action-panels'
      >
        <div className='panel veg-panel'>
          <div className='panel-overlay'>
            <a
              href={t("homepage.cta.vegan-link")}
              className='action-button'
              target='_blank'
              rel='noopener noreferrer'
            >
              {t("homepage.cta.vegan")}
            </a>
          </div>
        </div>

        <div className='panel help-panel'>
          <div className='panel-overlay'>
            <a
              href={t("homepage.cta.resources")}
              className='action-button'
              target='_blank'
              rel='noopener noreferrer'
            >
              {t("homepage.cta.help")}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Support;
