"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        className="text-4xl sm:text-6xl font-bold text-cyan-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hey, I’m Landoh Clansy 👋
      </motion.h1>

      <motion.p
        className="mt-4 text-gray-300 max-w-2xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        A full-stack developer passionate about crafting seamless user experiences,
        building scalable backend systems, and exploring the intersection of AI and web technology.
      </motion.p>

      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="projects"
          className="bg-cyan-500 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="border border-cyan-400 px-5 py-2 rounded-lg hover:bg-cyan-400/10 transition"
        >
          Contact Me
        </a>
      </motion.div>

      <motion.div
        className="mt-10 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p>💻 Building the web, one idea at a time.</p>
      </motion.div>
    </section>
  );
}
