import { motion } from "framer-motion";

const ShinyButton = ({ text, link }) => {
  return (
    <a
      href={link} target="_blank"
    >
      <motion.button
        initial={{ "--x": "100%", scale: 1 }}
        animate={{ "--x": "-100%" }}
        whileTap={{ scale: 0.97 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1,
          },
        }}
        className="px-8 py-4 rounded-md relative radial-gradient"

      >
        <span className="text-neutral-100 tracking-wide font-thin h-full w-full block relative linear-mask text-3xl font-sans">
          {text}
        </span>
        <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
      </motion.button>
    </a>
  );
};

export default ShinyButton;