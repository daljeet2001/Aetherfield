"use client"
import { motion } from "framer-motion";

export default function Component8(){
    return(
        <div className="flex flex-col items-center gap-8 border-box py-10 md:py-20 lg:py-30 px-5  bg-[#F6F8FB]">

            <h4 className="font-medium text-2xl md:text-[32px] lg:text-[40px] leading-[1] tracking-[-0.03em] [font-family:var(--font-radio-canada-big)] text-center">Ready to operationalize your sustainability goals?</h4>
                    <motion.button className="flex justify-center items-center gap-[10px] p-4 bg-black cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]" whileHover = "hover">
                        <motion.div variants={{hover:{opacity:0.6}}} transition={{duration:0.2,ease:"easeOut"}} className="w-1 h-1 bg-white"></motion.div>
                        <motion.div variants={{hover:{opacity:0.6}}} transition={{duration:0.2,ease:"easeOut"}} className="text-sm [font-family:var(--font-geist-mono)] text-white">Request a demo</motion.div>

                    </motion.button>

          

        </div>
    )
}