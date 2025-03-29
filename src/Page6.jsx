import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import gsap from 'gsap';

const projects =[
    {command : "show project 1", name:"Portfolio Website", tech:"React Tailwind",link:'#'},
    {command : "show project 2", name:"Dashboard UI", tech:"Javascript ",link:'#'},
    {command : "show project 3", name:"Game Engine", tech:"Html Css WebGL",link:'#'}
]

const Page6 = () => {
    const [inputValue , setInputValue] = useState('');
    const [terminaOutput , setTerminaOutput] = useState(["type 'show projects' to see the list..."])
    const inputRef = useRef()
    const handleCommands = (command) => {

        if(command.toLowerCase()=== "show projects") {
            let newOutPut = [...terminaOutput, "fetching project..."];

            projects.forEach((project,i)=> {
                setTimeout(()=>{
                    setTerminaOutput((prev) => [
                        ...prev,
                        `> ${project.command}`,
                        `${project.name} | ${project.tech}`,
                    ])
                },(i +1) * 1000)
            })
        }else{
            setTerminaOutput([...terminaOutput, `Unknown command : ${command}`])
        }

    }
    useEffect(()=>{
        inputRef.current.focus()
        gsap.fromTo(".terminal",{opacity:0},{opacity:1, duration:1})
    },[])
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-black text-green-400 px-6'>
        <motion.div
        initial={{opacity:0 , scale:0.9}}
        animate={{opacity:1, scale:1}}
        transition={{duration:1}}
        className='w-full max-w-2xl bg-black border border-green-400 rounded-lg terminal'
        >
            <p className='text-lg font-mono mb-3'>Developer Console</p>
            <div className='h-64 overflow-y-auto bg-black p-3 text-green-400 font-mono text-sm border border-green-400'>
                {terminaOutput.map((line,index)=>(

                <p key={index}>{line}</p>
                ))}
            </div>
            <div className='flex items-center mt-3'>
                <span className='text-green-400 font-mono'></span>
                <input
                ref={inputRef}
                className='bg-black text-green-400 font-mono outline-none border-none ml-2 w-full'
                type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} onKeyDown={(e)=> {
                    if(e.key === "Enter") {
                        handleCommands(inputValue)
                        setInputValue("")
                    }
                }}></input>
            </div>
        </motion.div>






    </div>
  )
}

export default Page6