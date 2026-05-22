"use client"

import { motion } from "framer-motion";


export default function Component3() {
    return (
        <div className="flex flex-col items-center gap-10 py-30 px-5">

            <h2 className="text-[40px] font-medium leading-[1] [font-family:var(--font-radio-canada-big)] w-full text-center" >Everything you need to measure,<br /> model, and act on sustainability</h2>

            <div className="flex items-center gap-10 h-[513px] w-full">

                <div className="h-full w-[50%]">
                    <img src={"./x1.avif"} className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col items-start border-box gap-6 w-[50%]">

                    <div className="flex flex-col items-start border-box w-full">

                        <div className="flex flex-col items-start gap-4 py-6 border-t border-[#DBE0EC] border-box w-full">

                            <div className="flex items-start justify-between w-full">
                                <h2 className="font-medium leading-[1] [font-family:var(--font-radio-canada-big)] text-xl">Track</h2>
                                <p className="text-[#6C6C6C] leading-[1] text-sm [font-family:var(--font-geist-mono)]">001</p>
                            </div>

                            <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">
                                Emissions, energy, and waste across your value chain
                            </p>
                        </div>

                        <div className="flex flex-col items-start gap-4 py-6 border-t border-[#DBE0EC] w-full">

                            <div className="flex items-start justify-between w-full">
                                <h2 className="font-medium leading-[1] [font-family:var(--font-radio-canada-big)] text-xl">Model</h2>
                                <p className="text-[#6C6C6C] leading-[1] text-sm [font-family:var(--font-geist-mono)]">002</p>
                            </div>

                            <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">
                                Forecast performance and goal alignment
                            </p>
                        </div>

                        <div className="flex flex-col items-start gap-4 py-6 border-t border-[#DBE0EC] w-full">

                            <div className="flex items-start justify-between w-full">
                                <h2 className="font-medium leading-[1] [font-family:var(--font-radio-canada-big)] text-xl">Report</h2>
                                <p className="text-[#6C6C6C] leading-[1] text-sm [font-family:var(--font-geist-mono)]">003</p>
                            </div>

                            <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">
                                Generate ESG disclosures, automate frameworks
                            </p>
                        </div>

                        <div className="flex flex-col items-start gap-4 py-6 border-y border-[#DBE0EC] w-full">

                            <div className="flex items-start justify-between w-full">
                                <h2 className="font-medium leading-[1] [font-family:var(--font-radio-canada-big)] text-xl">Act</h2>
                                <p className="text-[#6C6C6C] leading-[1] text-sm [font-family:var(--font-geist-mono)]">004</p>
                            </div>

                            <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">
                                Surface insights and operational next steps
                            </p>
                        </div>

                    </div>

                        <motion.button className="flex justify-center items-center gap-[10px] p-4 bg-black cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]" whileHover = "hover">
                        <motion.div variants={{hover:{opacity:0.6}}} transition={{duration:0.2,ease:"easeOut"}} className="w-1 h-1 bg-white"></motion.div>
                        <motion.div variants={{hover:{opacity:0.6}}} transition={{duration:0.2,ease:"easeOut"}} className="text-sm [font-family:var(--font-geist-mono)] text-white">Explore features</motion.div>

                    </motion.button>

                </div>
            </div>


        </div>
    )
}