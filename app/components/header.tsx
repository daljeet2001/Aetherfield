// bg-linear-to-b from-[#A8D3FF] to-[#FFF4DF]
"use client"

import { motion } from "framer-motion";

export default function Header() {
    return (
        <div className="h-[1074px] w-full flex flex-col items-center gap-14 px-5 pt-35 bg-[linear-gradient(to_bottom,#A8D3FF_0%,#FFF4DF_75%,white_75%,white_100%)]">


            <div className="flex flex-col items-center gap-8 ">

                <div className="flex flex-col items-center gap-4">

                    <div className="flex flex-col leading-[1]">
                        <h1 className="text-[80px] [font-family:var(--font-source-serif-4)] tracking-[-0.04em]">Sustainability insights,</h1>
                        <h2 className="text-[80px] [font-family:var(--font-radio-canada-big)] text-center tracking-[-0.05em]">built for business</h2>
                    </div>

                    <p className="text-xl leading-[1.2] [font-family:var(--font-source-serif-4)]">Track impact, reduce emissions, and accelerate progress—with clarity and confidence.</p>

                </div>

                <div className="flex items-center gap-4">

                    <motion.button className="flex justify-center items-center gap-[10px] p-4 bg-black cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"  whileHover = "hover" >
                        <motion.div variants={{hover:{opacity:0.6}}} transition={{duration:0.2,ease:"easeOut"}}  className="w-1 h-1 bg-white"></motion.div>
                        <motion.div variants={{hover:{opacity:0.6}}} transition={{duration:0.2,ease:"easeOut"}} className="text-sm [font-family:var(--font-geist-mono)] text-white">Request a demo</motion.div>

                    </motion.button>

                    <motion.button className="flex justify-center items-center gap-[10px] p-4 bg-black cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]" whileHover = "hover">
                        <motion.div variants={{hover:{opacity:0.6}}} transition={{duration:0.2,ease:"easeOut"}} className="w-1 h-1 bg-white"></motion.div>
                        <motion.div variants={{hover:{opacity:0.6}}} transition={{duration:0.2,ease:"easeOut"}} className="text-sm [font-family:var(--font-geist-mono)] text-white">Explore the platform</motion.div>

                    </motion.button>
                </div>

            </div>


            <div className="rounded-3xl h-[608px] w-[960px] bg-[url('/x2.avif')] bg-cover bg-center border-2 border-black"></div>



        </div>
    )
}