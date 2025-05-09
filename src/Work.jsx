import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio site built with React and Tailwind CSS.",
    details: "Built with React, Tailwind, and deployed using Vercel. It includes sections like About, Projects, and Contact.",
    link: "#"
  },
  {
    title: "W3Schools Clone",
    description: "A clone of W3Schools with all core features.",
    details: "Recreated layout, sidebar navigation, code editor using React and localStorage for saving snippets.",
    link: "#"
  },
  {
    title: "Office Management System",
    description: "A complete office system with user roles and auth.",
    details: "Built with Node.js, Express, MongoDB, JWT authentication, and role-based access control.",
    link: "#"
  }
];

const Work = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const toggleDetails = (index) => {
    setSelectedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 relative overflow-hidden">
      
      {/* Background Glow */}
      <motion.div
        className="absolute w-96 h-96 bg-green-500 opacity-10 rounded-full blur-3xl top-20 left-20"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.h1
        className="text-5xl font-extrabold text-center mb-12 relative z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        🚀 My Projects
      </motion.h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-green-900 bg-opacity-10 border border-green-500 rounded-xl p-6 shadow-lg hover:shadow-green-500 transition duration-300"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-green-300 mb-4">{project.description}</p>
            <button
              onClick={() => toggleDetails(index)}
              className="mt-2 px-4 py-2 bg-green-500 text-black font-semibold rounded-full hover:bg-green-400 transition"
            >
              {selectedIndex === index ? "Hide Details" : "View Project"}
            </button>

            <AnimatePresence>
              {selectedIndex === index && (
                <motion.div
                  className="mt-4 bg-green-800 bg-opacity-20 p-4 rounded-md text-green-200"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="mb-2">{project.details}</p>
                  <a
                    href={project.link}
                    className="inline-block mt-2 px-4 py-1 bg-green-400 text-black font-semibold rounded-full hover:bg-green-300 transition"
                  >
                    Visit Site ↗
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
