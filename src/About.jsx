import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const Steps = [
    { year: "2021", title: "First line of code", disc: "Started my journey with HTML, CSS, and JavaScript" },
    { year: "2022", title: "Dived into React", disc: "Built my first React application and explored component-based architecture" },
    { year: "2023", title: "1 year Application Developer", disc: "Started my job  journey with Flutter & Dart" },
    { year: "2024", title: "Full-stack-developer", disc: "Built some projects / application and explored component-based architecture" }
  ]
  
  return (
    <div className='min-h-screen bg-black text-green-400 py-20 px-6'>
      <motion.h2
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className='text-3xl md:text-5xl font-bold text-center mb-10'
      >
        The Evolution
      </motion.h2>
      <div className='max-w-3xl mx-auto relative'>
        <div className='absolute left-1/2 transform -transform-x-1/2 w-1 h-full bg-gray-600 opacity-40'> </div>
          {Steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: false }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-col'}`}
            >
              <div className='md:w-1/3 w-full text-green-400 text-lg font-semibold text-center md:text-right'>{step.year}</div>
              <div className='w-6 h-6 bg-yellow-400 rounded-full border-4 border-gray-800 shadow-md md:mx-6 my-4 md:my-0'></div>
              <motion.div
              whileHover={{ scale: 1.05 }}
              className='md:w-1/3 w-full bg-black p-5 rounded-lg shadow-lg text-center border border-green-400'
              >
                <h3 className='text-xl font-bold text-yellow-400'>{step.title}</h3>
                <p className='text-gray-300 mt-2'>{step.disc}</p>
              </motion.div>
            </motion.div>
          ))}
        
      </div>
    </div>
  )
}

export default About
