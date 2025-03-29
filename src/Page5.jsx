import React, { useState } from 'react'
import {hover, motion} from 'framer-motion'

const Page5 = () => {
    const skils =[
        {name: 'HTML' , lavel :'100'},
        {name: 'CSS', lavel: '100'},
        {name: 'JAVASCRIPT', lavel: '90'},
        {name: 'REACT-JS', lavel: '90'},
        {name: 'NODE-JS', lavel: '50'},
        {name: 'MYSQL', lavel: '70'},
        {name: 'MS-SQL', lavel: '60'},
        {name: 'TAILWIND-CSS', lavel: '90'},
        {name: 'FRAMWORK-MOTION', lavel: '100'},
        {name: 'GSAP', lavel: '75'},
    ]
    const [abc , setAbc] = useState(null);
  return (
    <div className='h-screen flex  flex-col justify-center items-center bg-black text-green-400 px-6 relative'>
        <motion.h2
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className='text-3xl md:text-5xl font-bold text-center mb-10'
      >
      Check my skills
      </motion.h2>
      <div className='relative w-full max-w-4xl h-[400px] md:h-[500px]'>
        {skils.map((skill,index) =>{
            const size = skill.lavel / 3+40;
            const randomX = Math.random()* 80 + 10;
            const randomY = Math.random()* 80 + 10;
            return(
                <motion.div
                style={{
                    width:`${size}px`,
                    backgroundColor: abc ===  skill.name ? "#10b91" : "#22c55e",
                    height: `${size}px`,
                    left: `${randomX}%`,
                    top: `${randomY}%`
                }}
                onMouseEnter={()=> setAbc(skill.name)}
                onMouseLeave={() => setAbc(null)}
                
                initial={{opacity:0, scale:0.5}}
        whileInView={{opacity:1, scale:1}}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
               
                className='absolute
                 rounded-full text-center  flex items-center justify-center font-bold text-black cursor-pointer shadow-lg'
                >
                    <h1 className=' text-md'>{skill.name}</h1>
                    <p className='text-sm text-red-500 '>{skill.lavel}%</p>

                </motion.div>
            )
        })}
      </div>
    </div>
  )
}

export default Page5