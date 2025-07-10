import { motion } from "framer-motion";

const anims = {
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
  fadeOut: {
    initial: { opacity: 1 },
    whileInView: { opacity: 0 },
  },
  slideFromLeft: {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  },
  slideFromRight: {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  },
  slideFromBottom: {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  },
};

function AnimatedImage({ animName = "fadeIn", ...rest }) {
  const animProps = anims[animName];

  return (
    <motion.img
      // Set once to false if you're testing out how it works
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      {...animProps}
      {...rest}
    />
  );
}

export default AnimatedImage;
