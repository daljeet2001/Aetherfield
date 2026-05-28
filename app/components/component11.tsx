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

export default function Component11(){
    return(
       <motion.img variants= {item} initial = "hidden" whileInView = "show" viewport = {{once:true}} src="./x10.avif" className="object-cover w-full mt-15 px-5"/>
    )
}