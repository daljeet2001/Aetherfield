

"use client"

import { motion } from "framer-motion";


export default function Component15(){
    return(
        <div className="flex items-center gap-4 border-box h-[100vh]">

            <div className="bg-cover bg-center h-full bg-[url('/x15.avif')] w-[50%]"></div>

            <div className="flex flex-col items-start justify-center gap-14 border-box pr-[105px] pl-[64px] h-full w-[50%]">

                <div className="flex flex-col items-start gap-4 border-box w-[500px]">

                    <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] text-[#6C6C6C]">Our mission</p>

                    <h1 className="text-[40px] font-medium leading-[1] tracking-[-0.03em] [font-family:var(--font-radio-canada-big)]">Climate action starts with better information. We help organizations turn complex data into measurable, meaningful change.</h1>

                </div>

                    <motion.button className="flex justify-center items-center gap-[10px] p-4 bg-black cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"  whileHover = "hover" >
                        <motion.div variants={{hover:{opacity:0.6}}} transition={{duration:0.2,ease:"easeOut"}}  className="w-1 h-1 bg-white"></motion.div>
                        <motion.div variants={{hover:{opacity:0.6}}} transition={{duration:0.2,ease:"easeOut"}} className="text-sm [font-family:var(--font-geist-mono)] text-white">Meet the team</motion.div>

                    </motion.button>

            </div>

        </div>
    )
}

