import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* Triangle Shape */}
      <motion.div
        initial={{ x: "10vw", y: "20vh", rotate: 0 }}
        animate={{ 
          y: ["20vh", "25vh", "20vh"],
          x: ["10vw", "12vw", "10vw"],
          rotate: [0, 90, 180, 270, 360] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute opacity-[0.03]"
      >
        <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5L95 85H5L50 5Z" stroke="var(--primary)" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Square Shape */}
      <motion.div
        initial={{ x: "85vw", y: "15vh", rotate: 45 }}
        animate={{ 
          y: ["15vh", "10vh", "15vh"],
          x: ["85vw", "83vw", "85vw"],
          rotate: [45, 135, 225, 315, 405] 
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute opacity-[0.02]"
      >
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="80" stroke="var(--primary)" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Circle Ring */}
      <motion.div
        initial={{ x: "75vw", y: "75vh" }}
        animate={{ 
          y: ["75vh", "80vh", "75vh"],
          x: ["75vw", "70vw", "75vw"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute opacity-[0.04]"
      >
        <div className="w-32 h-32 rounded-full border-[0.5px] border-primary/40" />
      </motion.div>

      {/* Hexagon */}
      <motion.div
        initial={{ x: "5vw", y: "80vh", rotate: 0 }}
        animate={{ 
          y: ["80vh", "75vh", "80vh"],
          rotate: [0, -360] 
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute opacity-[0.02]"
      >
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5L89 27.5V72.5L50 95L11 72.5V27.5L50 5Z" stroke="var(--primary)" strokeWidth="0.5" />
        </svg>
      </motion.div>
    </div>
  );
};

export default FloatingShapes;
