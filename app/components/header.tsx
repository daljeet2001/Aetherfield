// bg-linear-to-b from-[#A8D3FF] to-[#FFF4DF]
"use client"

import { motion, Variants } from "framer-motion";



const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item1: Variants = {
    hidden: {
        y: 80,
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

const item2: Variants = {
    hidden: {
        scale: 0,
        opacity:0
    },
    show: {
        scale: 1,
        opacity:1,
        transition: {
            duration: 0.45,
            ease: "easeOut"
        }
    }
}

export default function Header() {
    return (

        <>

            <motion.div variants={container} initial="hidden" animate="show" className="h-auto w-full flex flex-col items-center gap-8 md:gap-14 px-5 pt-30 md:pt-35 bg-[linear-gradient(to_bottom,#A8D3FF_0%,#FFF4DF_85%,white_85%,white_100%)] md:bg-[linear-gradient(to_bottom,#A8D3FF_0%,#FFF4DF_80%,white_80%,white_100%)]  ">


                <motion.div variants={item1} className="flex flex-col items-center gap-6 md:gap-8 ">

                    <div className="flex flex-col items-center gap-3 md:gap-4">

                        <div className="flex flex-col leading-[1]">
                            <h1 className="text-4xl md:text-[64px] lg:text-[80px] [font-family:var(--font-source-serif-4)] tracking-[-0.04em] text-center">Sustainability insights,</h1>
                            <h2 className="text-4xl md:text-[64px] lg:text-[80px] [font-family:var(--font-radio-canada-big)] text-center tracking-[-0.05em] text-center">built for business</h2>
                        </div>

                        <p className="text-lg md:text-xl leading-[1.2] [font-family:var(--font-source-serif-4)] text-center">Track impact, reduce emissions, and accelerate progress—with clarity and confidence.</p>

                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">

                        <motion.button className="flex justify-center items-center gap-[10px] p-4 bg-black cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]" whileHover="hover" >
                            <motion.div variants={{ hover: { opacity: 0.6 } }} transition={{ duration: 0.2, ease: "easeOut" }} className="w-1 h-1 bg-white"></motion.div>
                            <motion.div variants={{ hover: { opacity: 0.6 } }} transition={{ duration: 0.2, ease: "easeOut" }} className="text-sm [font-family:var(--font-geist-mono)] text-white">Request a demo</motion.div>

                        </motion.button>

                        <motion.button className="flex justify-center items-center gap-[10px] p-4 bg-black cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]" whileHover="hover">
                            <motion.div variants={{ hover: { opacity: 0.6 } }} transition={{ duration: 0.2, ease: "easeOut" }} className="w-1 h-1 bg-white"></motion.div>
                            <motion.div variants={{ hover: { opacity: 0.6 } }} transition={{ duration: 0.2, ease: "easeOut" }} className="text-sm [font-family:var(--font-geist-mono)] text-white">Explore the platform</motion.div>

                        </motion.button>
                    </div>

                </motion.div>


                <motion.div variants={item2} className="rounded-3xl aspect-[1.57] w-full  lg:w-[960px] bg-[url('/x2.avif')] bg-cover bg-center border-2 border-black"></motion.div>



            </motion.div>

        </>

    )
}