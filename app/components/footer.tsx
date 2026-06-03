"use client"

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <div className="flex flex-col items-center gap-4 md:gap-5 px-5 pb-5 pt-10 md:pt-5 box-border bg-[#FFF546]">

            <div className="flex flex-col items-start gap-10 md:gap-0 md:flex-row md:justify-between md:items-center box-border w-full">

                <div className="flex items-start md:items-center  justify-center md:justify-start gap-4 md:gap-5 flex-wrap box-border w-full md:w-auto">

                    <a href="/"><motion.p className="text-lg md:text-xl font-medium  leading-[1] tracking-[-0.02em] text-[#66640F] [font-family:var(--font-radio-canada-big)] cursor-pointer" whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>Product</motion.p></a>

                    <a href="/journal"><motion.p className="text-lg md:text-xl font-medium  leading-[1] tracking-[-0.02em] text-[#66640F] [font-family:var(--font-radio-canada-big)] cursor-pointer" whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>Journal</motion.p></a>

                    <a href="/about"><motion.p className="text-lg md:text-xl font-medium  leading-[1] tracking-[-0.02em] text-[#66640F] [font-family:var(--font-radio-canada-big)] cursor-pointer" whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>About</motion.p></a>

                    <a href="/careers"><motion.p className="text-lg md:text-xl font-medium  leading-[1] tracking-[-0.02em] text-[#66640F] [font-family:var(--font-radio-canada-big)] cursor-pointer" whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>Careers</motion.p></a>

                    <motion.a className="text-lg md:text-xl font-medium  leading-[1] tracking-[-0.02em] text-[#66640F] [font-family:var(--font-radio-canada-big)] cursor-pointer" whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>Get started</motion.a>
                </div>

                <p className="w-full md:w-auto text-lg md:text-xl leading-[1.2] tracking-[-0.04em] text-[#66640F] [font-family:var(--font-source-serif-4)] text-center">© 2025  ·  All rights reserved
                </p>
            </div>

            <div className="bg-[url('/x7.png')] bg-cover bg-center w-full aspect-[4.43] mix-blend-multiply opacity-90"></div>

            <img src="/x23.svg" className="w-full aspect-[6.07] object-cover" />

        </div>
    )
}