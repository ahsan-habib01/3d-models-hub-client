import { Link, useRouteError } from 'react-router';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white text-center px-4">
      {/* Icon with animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mb-6"
      >
        <AlertTriangle size={80} className="text-red-500 drop-shadow-lg" />
      </motion.div>

      {/* Error Title */}
      <h1 className="text-5xl font-extrabold text-red-400 mb-2 tracking-wide">
        Oops!
      </h1>

      {/* Error Description */}
      <p className="text-lg text-gray-300 mb-4">
        Something went wrong while loading your 3D world.
      </p>

      {/* Error details (only if available) */}
      <p className="text-sm text-gray-500 italic mb-8">
        {error?.statusText || error?.message || 'Unknown error occurred'}
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white font-semibold shadow-md shadow-blue-700/30"
      >
        Back to Home
      </Link>

      {/* Decorative glowing border animation */}
      <motion.div
        className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </div>
  );
};

export default ErrorPage;
