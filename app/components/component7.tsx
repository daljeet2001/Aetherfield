"use client"

import { motion, Variants } from "framer-motion";




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

const item2: Variants = {
    hidden: {
        y: 60,
        opacity:0
    },
    show: {
        y: 0,
        opacity:1,
        transition: {
            duration: 0.45,
            ease: "easeOut",
            delay:0.5
        }
    }
}

export default function Component7(){
    return(
        <motion.div  className="flex justify-center items-center gap-4 py-30 px-5 w-full h-[1048.66px] border-box">

            <motion.div variants = {item} initial = "hidden" whileInView = "show" viewport={{ once:true }} className="bg-[url('/x6.avif')] bg-cover bg-center h-full w-[50%]"></motion.div>

            <motion.div  variants = {item2} initial = "hidden" whileInView = "show" viewport={{ once:true }}className="flex flex-col items-start justify-center border-box gap-14 px-[105px] w-[50%]">

                <img src="./x22.svg" className="w-6 h-5 object-cover"/>

                <h2 className="font-medium text-[40px] leading-[1] tracking-[-0.03em] [font-family:var(--font-radio-canada-big)]">We finally moved past spreadsheets and guesswork. Now we have real data to guide real decisions.</h2>

                <div className="flex flex-col items-start gap-2 border-box">

                    <p className="text-xl font-medium leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]" >Elliot Williams</p>
                    <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] text-[#6C6C6C]">Head of Sustainability, Flux Materials</p>
                </div>

            </motion.div>

         

        </motion.div>
    )
}