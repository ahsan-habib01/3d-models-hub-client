import { motion } from 'framer-motion';
import { Box } from 'lucide-react';

const Loading = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* 3D Spinning Cube */}
      <motion.div
        className="relative w-20 h-20"
        animate={{ rotateY: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
      >
        <Box size={80} className="text-blue-400 drop-shadow-lg" />
      </motion.div>

      {/* Glow Animation */}
      <motion.div
        className="mt-6 text-lg font-semibold tracking-widest text-blue-300"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Loading 3D Models...
      </motion.div>

      {/* Progress Bar Effect */}
      <motion.div className="w-48 h-1.5 bg-gray-700 rounded-full mt-5 overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
};

export default Loading;
