import { motion } from "motion/react";
import { Link } from "react-router-dom";

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
    },
  },
};

function Hero() {
  return (
<section id="home" className="min-h-screen bg-black text-white pt-28 lg:pt-32 overflow-hidden">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <motion.div
          className="w-full lg:w-3/5 text-center lg:text-left"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
        >
         <div className="flex justify-center">
  <span className="inline-block px-8 py-3 rounded-full border-2 border-cyan-400 text-cyan-400 text-lg sm:text-xl font-semibold">
    AI Powered Platform
  </span>
</div>
<h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl xl:text-5xl font-bold leading-tight lg:whitespace-nowrap bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text text-transparent">            Architecting the Digital Future
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-7 sm:leading-8">
            Build modern animated interfaces with React, Vite and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">


 <div className="w-full flex justify-center mt-8">
  <Link to="/demo">
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="w-65 py-5 rounded-full border-2 border-cyan-400 text-xl font-bold text-white hover:bg-cyan-400 hover:text-black transition-all duration-300"
    >
      Watch Demo
    </motion.button>
  </Link>
</div>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full flex justify-center lg:justify-end"
          variants={fadeRight}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute -inset-6 bg-cyan-500/20 rounded-full blur-3xl"></div>

          <motion.div
            className="relative w-full max-w-[320px] sm:max-w-[400px] h-[420px] sm:h-[450px] rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-5 sm:p-6"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="h-32 sm:h-40 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600" />

            <h3 className="mt-6 text-lg sm:text-xl font-bold">
              Growth Analytics
            </h3>

            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              AI Performance Overview
            </p>

            <div className="mt-8 h-24 sm:h-28 rounded-2xl bg-white/5 border border-white/10 flex items-end gap-2 sm:gap-3 p-4">
              <div className="w-6 sm:w-8 h-12 rounded-t-lg bg-cyan-400"></div>
              <div className="w-6 sm:w-8 h-20 rounded-t-lg bg-purple-500"></div>
              <div className="w-6 sm:w-8 h-16 rounded-t-lg bg-cyan-400"></div>
              <div className="w-6 sm:w-8 h-24 rounded-t-lg bg-purple-500"></div>
              <div className="w-6 sm:w-8 h-14 rounded-t-lg bg-cyan-400"></div>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <span className="text-cyan-400 text-xl sm:text-2xl font-bold">
                +240%
              </span>

              <span className="text-purple-400 text-sm sm:text-base font-semibold">
                AI Score
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;