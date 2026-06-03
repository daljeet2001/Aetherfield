"use client"
import { FaArrowRight } from "react-icons/fa6";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";


const container: Variants = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.5
        }
    }
}

const item: Variants = {
    hidden: {
        y: "-100%",
        opacity: 0
    },
    show: {
        y: "0%",
        opacity: 1,
        transition: {
            duration: 0.45,
            ease: "easeOut"
        }
    }

}






export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (

        <motion.div variants={container} viewport={{ once: true }} initial="hidden" whileInView="show" className="fixed top-0 left-0 w-full z-[1000]">

            <motion.div
                variants={item}


                className={`flex items-center md:items-start justify-between p-5  w-full ${open ? "bg-white" : "backdrop-blur-lg"} `}>

                <a href="/" className="w-[122px] md:w-[121.99px] h-5 cursor-pointer">
                    <div className="w-full h-full">
                        <img src="/x18.svg" className="object-cover w-full h-full" />
                    </div>

                </a>


                <button onClick={() => setOpen((prev)=>!prev)} className="block md:hidden">{open ? <AiOutlineMinus size={24} /> : <AiOutlinePlus size={24} />}</button>



                <div className="hidden md:flex items-center gap-5 z-[100]">

                    <a href="/"><motion.p className="[font-family:var(--font-radio-canada-big)] text-base font-medium leading-[1.2] cursor-pointer" whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>Product</motion.p></a>

                    <a href="/journal"><motion.p className="[font-family:var(--font-radio-canada-big)] text-base font-medium leading-[1.2] cursor-pointer " whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>Journel</motion.p></a>

                    <a href="/about"><motion.p className="[font-family:var(--font-radio-canada-big)] text-base font-medium leading-[1.2] cursor-pointer " whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>About</motion.p></a>

                    <a href="/careers"><motion.p className="[font-family:var(--font-radio-canada-big)] text-base font-medium leading-[1.2] cursor-pointer" whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>Careers</motion.p></a>

                    <motion.a whileHover="hover" className="flex items-center justify-center gap-1 cursor-pointer"><p className="[font-family:var(--font-radio-canada-big)] text-base font-medium leading-[1.2]">Get started</p><motion.div variants={{ hover: { x: 3 } }} transition={{ duration: 0.2, ease: "easeOut" }}><FaArrowRight size={12} /></motion.div></motion.a>
                </div>

            </motion.div>

            <AnimatePresence>
                {open && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.45,
            ease: "easeOut"}} className=" md:hidden flex flex-col items-start justify-center gap-6 px-5 pb-5 border-box bg-white w-full z-[100]">

                    <div className="flex flex-col w-full">


                        <a href="/" className="flex items-center border-box gap-[10px] py-6 w-full border-b border-[#DBE0EC]">
                            <motion.p className="text-black [font-family:var(--font-radio-canada-big)] text-2xl font-medium leading-[1.2] cursor-pointer" whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>Product</motion.p>
                        </a>

                        <a href="/journal" className="flex items-center border-box gap-[10px] py-6 w-full  border-b border-[#DBE0EC]">
                            <motion.p className="[font-family:var(--font-radio-canada-big)] text-2xl font-medium leading-[1.2] cursor-pointer " whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>Journel</motion.p>
                        </a>

                        <a href="/about" className="flex items-center border-box gap-[10px] py-6 w-full  border-b border-[#DBE0EC]">
                            <motion.p className="[font-family:var(--font-radio-canada-big)] text-2xl font-medium leading-[1.2] cursor-pointer " whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>About</motion.p>
                        </a>

                        <a href="/careers" className="flex items-center border-box gap-[10px] py-6 w-full  border-b border-[#DBE0EC]">
                            <motion.p className="[font-family:var(--font-radio-canada-big)] text-2xl font-medium leading-[1.2] cursor-pointer" whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>Careers</motion.p>
                        </a>

                    </div>

                    <div className="flex items-center justify-center gap-[10px] p-4 border-box w-full bg-black text-white">
                        <p className="text-xl [font-family:var(--font-geist-mono)] font-medium tracking-[0] leading-[1] text-left">Get started</p>
                    </div>


                </motion.div>}
            </AnimatePresence>



        </motion.div>

    )
}