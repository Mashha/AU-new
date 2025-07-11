import { motion } from "framer-motion";
import "./hiddenReality.css";
import { Trans } from "react-i18next";
import AnimatedImage from "../../../../components/image/AnimatedImage";

const HiddenRealitySection = ({ data }) => {
  const hiddenRealityData = data.hiddenReality.content;
  const hiddenRealityImage = data.images[0].src;

  return (
    <section className='hidden-reality-section'>
      <div className='hidden-reality-text'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {data.hiddenReality.title}
        </motion.h2>

        <div className='content-inner'>
          <motion.div
            className='start'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {data.hiddenReality.start}
          </motion.div>

          <div>
            {hiddenRealityData.map((text, i) => {
              return (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <Trans i18nKey={text} components={{ strong: <strong /> }} />
                </motion.p>
              );
            })}
          </div>

          <motion.p
            className='end'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.4 + hiddenRealityData.length * 0.1,
            }}
          >
            {data.hiddenReality.end}
          </motion.p>
        </div>
      </div>

      <div className='hidden-reality-image'>
        <AnimatedImage src={hiddenRealityImage} alt={data.images[0].alt} />
      </div>
    </section>
  );
};

export default HiddenRealitySection;
