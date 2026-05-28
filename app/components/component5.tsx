"use client"

import { motion,Variants } from "framer-motion";

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

export default function Component5(){
    return(
        <motion.div className="flex flex-col items-center border-box py-30 px-5">

            <motion.div variants={item} initial = "hidden" whileInView = "show" viewport = {{once:true}} className="flex items-center gap-10 p-5 bg-[#F6F8FB] rounded-xl">

                <img className="object-cover h-[280px] w-[498px] rounded-lg" src={"./x4.avif"} />

                <div className="flex flex-col items-start gap-8 border-box w-[403px]">

                    <div className="flex flex-col items-start border-box gap-4">

                        <h2 className="font-medium text-xl leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">Why Acme Inc chose Aetherfield</h2>
                        <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">With fragmented data and growing reporting pressure, Acme turned to Aetherfield to streamline their ESG workflows. The result? Faster decisions, fewer spreadsheets, and 34% more coverage.</p>
                    </div>

                               <motion.button className="flex justify-center items-center gap-[10px] p-3 bg-black cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]" whileHover = "hover">
             
                        <motion.div variants={{hover:{opacity:0.6}}} transition={{duration:0.2,ease:"easeOut"}} className="text-sm [font-family:var(--font-geist-mono)] text-white">Read case study</motion.div>

                    </motion.button>

                </div>

            </motion.div>

        </motion.div>
    )
}