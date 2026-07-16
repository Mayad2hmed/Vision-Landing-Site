import { motion } from "motion/react";

function Demo() {
  return (
    <section className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Vision AI
        </motion.h1>

        <p className="mt-6 text-gray-400 text-lg leading-8">
          Vision AI is a modern AI-powered web application built using
          React, TypeScript, Vite, Tailwind CSS and Firebase Authentication.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-14">

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-2xl font-bold text-cyan-400">
              Project Features
            </h2>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li>✅ Responsive Design</li>
              <li>✅ Firebase Authentication</li>
              <li>✅ Google Sign In</li>
              <li>✅ Animated UI using Motion</li>
              <li>✅ Modern Dashboard Preview</li>
              <li>✅ Protected User Authentication</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-2xl font-bold text-purple-400">
              Technologies
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Firebase",
                "Tailwind CSS",
                "Motion",
                "Vite",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-14 flex gap-4">

      
      

         
        </div>

      </div>
    </section>
  );
}

export default Demo;