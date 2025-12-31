export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const hoverScale = {
  whileHover: { scale: 1.1, y: -2 },
  transition: { duration: 0.2 },
};
