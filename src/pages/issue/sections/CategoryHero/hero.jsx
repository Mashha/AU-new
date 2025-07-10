import "./hero.css";
import { motion } from "framer-motion";

const CategoryHero = ({ data }) => {
  return (
    <section className='category-hero'>
      <div className='hero-overlay'>
        <div className='hero-content'>
          <motion.h1 
            key={data.subtitle}
            className='hero-title'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {data.subtitle}
          </motion.h1>
        </div>
      </div>
    </section>
  );
};
export default CategoryHero;
