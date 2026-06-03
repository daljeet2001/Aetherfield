

"use client"

import { motion,Variants } from "framer-motion";

const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item: Variants = {
    hidden: {
        y: 60,
        opacity:0
    },
    show: {
        y: 0,
        opacity:1,
        transition: {
            duration: 0.45,
            ease: "easeOut"
        }
    }
}
export default function Component15(){
    return(
        <motion.div variants = {container} initial = "hidden" animate = "show" className="flex flex-col lg:flex-row items-center gap-8 md:gap-20 lg:gap-4 border-box w-full">

            <motion.div variants = {item} className="bg-cover bg-center h-full bg-[url('/x15.avif')] aspect-[0.90] w-full lg:w-[50%]"></motion.div>

            <motion.div variants = {item} className="flex flex-col items-start justify-center gap-8 md:gap-14 border-box pr-5 md:pr-[105px] pl-5 md:pl-[64px] h-full w-full lg:w-[50%]">

                <div className="flex flex-col items-start gap-4 border-box w-full md:w-[500px]">

                    <p className="text-lg md:text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] text-[#6C6C6C]">Our mission</p>

                    <h1 className="text-2xl md:text-[32px] lg:text-[40px] font-medium leading-[1] tracking-[-0.03em] [font-family:var(--font-radio-canada-big)]">Climate action starts with better information. We help organizations turn complex data into measurable, meaningful change.</h1>

                </div>

                    <motion.button className="w-full md:w-auto flex justify-center items-center gap-[10px] p-4 bg-black cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"  whileHover = "hover" >
                        <motion.div variants={{hover:{opacity:0.6}}} transition={{duration:0.2,ease:"easeOut"}}  className="w-1 h-1 bg-white"></motion.div>
                        <motion.div variants={{hover:{opacity:0.6}}} transition={{duration:0.2,ease:"easeOut"}} className="text-sm [font-family:var(--font-geist-mono)] text-white">Meet the team</motion.div>

                    </motion.button>

            </motion.div>

        </motion.div>
    )
}

