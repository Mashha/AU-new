import { motion } from "framer-motion";
import "./choice.css";
import { useTranslation } from "react-i18next";

const ChoiceSection = ({ data }) => {
  const cards = data.buttons;
  const { t } = useTranslation();

  return (
    <motion.section
      className='choice-section'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <p>{data.title}</p>
      <div className='choices-grid'>
        {cards.map((choice, index) => (
          <div key={index} className='choice-card'>
            <a href={choice.link} className='choice-link' target='_blank'>
              <img
                src={choice.image}
                alt={choice.text}
                className='choice-image'
              />
              <h3 className='choice-text'>{choice.text}</h3>
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default ChoiceSection;
