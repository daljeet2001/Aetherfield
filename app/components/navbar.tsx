"use client"
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";


export default function Navbar(){
    return(
        <div className="flex items-start justify-between p-5 fixed top-0 left-0 w-full backdrop-blur-lg ">

<a href="/" className="w-[121.99px] h-5 cursor-pointer">
       <div className="w-full h-full">
        <img src="/x18.svg" className="object-cover w-full h-full"/>
            </div>

</a>

<div className="flex items-center gap-5">

    <a href="/"><motion.p className="[font-family:var(--font-radio-canada-big)] text-base font-medium leading-[1.2] cursor-pointer" whileHover={{opacity:0.6}} transition={{duration:0.4,ease:"easeOut"}}>Product</motion.p></a>

        <a href="/journel"><motion.p className="[font-family:var(--font-radio-canada-big)] text-base font-medium leading-[1.2] cursor-pointer " whileHover={{opacity:0.6}} transition={{duration:0.4,ease:"easeOut"}}>Journel</motion.p></a>

            <a href="/about"><motion.p className="[font-family:var(--font-radio-canada-big)] text-base font-medium leading-[1.2] cursor-pointer " whileHover={{opacity:0.6}} transition={{duration:0.4,ease:"easeOut"}}>About</motion.p></a>

                <a href="/careers"><motion.p className="[font-family:var(--font-radio-canada-big)] text-base font-medium leading-[1.2] cursor-pointer" whileHover={{opacity:0.6}} transition={{duration:0.4,ease:"easeOut"}}>Careers</motion.p></a>

                    <motion.a whileHover="hover"  className="flex items-center justify-center gap-1 cursor-pointer"><p className="[font-family:var(--font-radio-canada-big)] text-base font-medium leading-[1.2]">Get started</p><motion.div variants={{hover:{x:3}}} transition={{duration:0.4, ease:"easeOut"}}><FaArrowRight size={12} /></motion.div></motion.a>
</div>
         
        </div>
    )
}