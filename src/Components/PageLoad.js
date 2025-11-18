import React from "react";
import { motion } from "framer-motion";

const PageLoad = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden">
      {/* Split panels */}
      <motion.div
        className="absolute top-0 w-full h-1/2 bg-gray-900 dark:bg-gray-800 z-40"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
      />
      <motion.div
        className="absolute bottom-0 w-full h-1/2 bg-gray-900 dark:bg-gray-800 z-40"
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
      />

      {/* Center content */}
      <div className="relative z-50 flex flex-col items-center justify-center">
        {/* Spinner */}
        <motion.div
          className="w-12 h-12 border-4 border-gray-900 dark:border-gray-100 border-t-transparent rounded-full mb-4"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />

        {/* Loading text */}
        <motion.p
          className="text-gray-900 dark:text-gray-100 text-lg tracking-widest font-eighteen font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          From Earth’s Heart to Your Space...
        </motion.p>
      </div>
    </div>
  );
};

export default PageLoad;
