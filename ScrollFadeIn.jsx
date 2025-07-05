// src/components/ScrollFadeIn.jsx
import { motion } from 'framer-motion';

const ScrollFadeIn = ({ children, direction = "up", duration = 0.8 }) => {
  let initialY = direction === "up" ? 50 : -50;

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
