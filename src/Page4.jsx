import React, { useState } from 'react'
import {motion} from 'framer-motion'

const Page4 = () => {
    const projects = [
        {
            id: 1,
            title: "E-commerce website",
            desc: "An E-commerce website with payment integration.",
            text : "React , Node-js , OpenAI API"
        },
        {
            id: 2,
            title: "Office Management System",
            desc: "A complete office management system with user authentication.", 
            text : "React , Node-js"
        },
        {
            id: 4,
            title: "w3School Clone",
            desc: "A clone of w3School with all features.",
            text : "Html , Css , Javascript"
        },
        {
            id: 5,
            title: "Portfolio Website",
            desc: "A portfolio website to showcase my work.",
            text : "React , Node-js , Tailwind CSS"
            
        },
        {
            id: 6,
            title: "Chat Application",
            desc: "A chat application with real-time messaging.",
            text : "React , Node-js , Socket.io"
        },
        {
            id: 7,
            title: "Weather App",
            desc: "A weather app with real-time data.",
            text : "React , Node-js , OpenWeather API"
        },
        
        
    ]
    const [abc , setAbc] = useState(null);
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-black text-green-400 px-6'>
       <motion.h1
               initial={{ opacity: 0, y:70 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: false }}
               className='text-3xl md:text-5xl font-bold text-center mb-10'
             >
                    The Developer's Vault 
        </motion.h1>
        <div className='space-y-6  w-full max-w-2xl'>
            {projects.map((project)=>(
                <motion.div key={project.id}
                onClick={()=> setAbc(abc === project.id ? null : project.id)}
                className='p-4 border border-green-400 rounded-lg shadow-lg cursor-pointer relative'
                >
                    <h2 className='text-xl md:text-2xl font-semibold'>{project.title}</h2>
                    <p>{project.desc}</p>
                   <motion.div
                   className='mt-2 text-gray-303 text-sm md:text-lg'
                   initial={{opacity: 0, y:-10}}
                   animate={{opacity:abc === project.id ? 1 : 0 , y:abc === project.id  ? 0: -10}}
                   transition={{duration:0.5}}
                   >
                   
                    <p className='mt-1 text-green-300'>{project.text}</p>
                   </motion.div>
                   <motion.div
                   animate={{opacity:abc === project.id ? 1:0}}
                   transition={{duration:0.5, repeat:Infinity, repeatType:"reverse"}}
                   className='absolute inset-0 rounded-lg border-4 border-green-400 opacity-30 blur-md'
                   >

                   </motion.div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Page4