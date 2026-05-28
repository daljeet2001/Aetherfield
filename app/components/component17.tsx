
"use client"

import { motion, Variants } from "framer-motion";

    const item: Variants = {
        hidden: {
            y: 60,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.45,
                ease: "easeOut"
            }
        }
    }

        const item2: Variants = {
        hidden: {
            rotate: 397,
            opacity: 0,
            scale:0.96
        },
        show: {
            rotate: 352,
            opacity: 1,
            scale:1,
            transition: {
                duration: 0.45,
                ease: "easeOut",
                delay:0.5
            }
        }
    }

export default function Component17(){
    return(
        <motion.div className="flex items-center gap-4 border-box relative h-[100vh] px-5 pb-30">

         

            <motion.div variants = {item} initial = "hidden" whileInView = "show" viewport={{once:true}} className="bg-[url('/x17.avif')] bg-cover bg-center h-full w-[50%] "></motion.div>

               <motion.div variants = {item2} initial = "hidden" whileInView = "show" viewport={{once:true}} className="bg-[url('/x16.svg')] bg-cover bg-center w-[313.69px] h-[182.22px] absolute left-[-20px] top-[-100px] z-[500]"></motion.div>


            <motion.div variants = {item} initial = "hidden" whileInView = "show" viewport={{once:true}} className="flex flex-col justify-center items-start gap-14 border-box px-[105px] w-[50%]">

                <div className="flex flex-col items-start gap-2 border-box">

                    <p className="text-xl leading-[1.2] tracking-[-0.04em] text-[#6C6C6C] [font-family:var(--font-source-serif-4)]">Founder’s story</p>

                    <h2 className="text-[56px] font-medium leading-[1] tracking-[-0.03em] [font-family:var(--font-radio-canada-big)]">Eunji Park</h2>

                </div>

                <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">Eunji founded Aetherfield with one goal: to help companies take climate action without waiting for a perfect plan. With a background in environmental systems and software design, she’s spent the past decade building tools that turn impact goals into real-world outcomes. She still insists on biking to every investor meeting.</p>
            </motion.div>

        </motion.div>
    )
}