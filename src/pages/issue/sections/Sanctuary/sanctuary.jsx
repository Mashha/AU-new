import { motion } from "framer-motion";
import "./sanctuary.css";

const FarmAnimalStoriesSection = ({ data }) => {
  return (
    <motion.section
      className='stories-of-hope-section white-section'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className='rescue-container'>
        <div className='rescue-content'>
          <h2 className='section-title'>{data.AnimalStories.title}</h2>
        </div>
        <div className='video-wrapper'>
          <iframe
            width='100%'
            height='500'
            src={data.AnimalStories.link}
            title={data.AnimalStories.title}
            allow='web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          />
        </div>
        {data.AnimalStories.sanctuary_link && (
          <div className='sanctuary-support'>
            <a
              href={data.AnimalStories.sanctuary_link}
              target='_blank'
              rel='noopener noreferrer'
              className='sanctuary-link'
            >
              🤍 {data.AnimalStories.support}{" "}
              {data.AnimalStories.sanctuary_name}
            </a>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default FarmAnimalStoriesSection;
