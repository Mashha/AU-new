import { Trans } from "react-i18next";
import { motion } from "framer-motion";
import "./biggerPicture.css";
import biggerPictureIcons from "../../../../data/biggerPictureIcons";

const BiggerPictureSection = ({ data }) => {
  const entries = Object.entries(data.biggerPicture.items);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger animation between cards
        delayChildren: 0.1,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className='bigger-picture-section white-section'>
      <div className='bg-section-container'>
        <motion.h2
          className='bigger-picture-title'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {data.biggerPicture.title}
        </motion.h2>

        <motion.div
          className='bigger-picture-grid'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {entries.map(([key, item], index) => (
            <motion.div
              key={index}
              className='picture-card'
              variants={cardVariants}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className='icon-container'
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: index * 0.1 + 0.3,
                  duration: 0.5,
                  ease: "backOut",
                }}
                viewport={{ once: true }}
              >
                <img src={biggerPictureIcons[key]} alt={key} />
              </motion.div>

              <motion.div
                className='card-text'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: index * 0.1 + 0.5,
                  duration: 0.4,
                }}
                viewport={{ once: true }}
              >
                <Trans
                  i18nKey={item.text}
                  components={{ strong: <strong /> }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BiggerPictureSection;
