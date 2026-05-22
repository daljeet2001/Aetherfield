"use client"

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <div className="flex flex-col items-center gap-5 p-5 border-box bg-[#FFF546]">

            <div className="flex justify-between items-center border-box w-full">

                <div className="flex items-center gap-5 border-box">

                    <a href="/"><motion.p className="text-xl font-medium  leading-[1] tracking-[-0.02em] text-[#66640F] [font-family:var(--font-radio-canada-big)] cursor-pointer" whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>Product</motion.p></a>

                    <a href="/journal"><motion.p className="text-xl font-medium  leading-[1] tracking-[-0.02em] text-[#66640F] [font-family:var(--font-radio-canada-big)] cursor-pointer" whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>Journal</motion.p></a>

                     <a href="/about"><motion.p className="text-xl font-medium  leading-[1] tracking-[-0.02em] text-[#66640F] [font-family:var(--font-radio-canada-big)] cursor-pointer" whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>About</motion.p></a>

                    <a href="/careers"><motion.p className="text-xl font-medium  leading-[1] tracking-[-0.02em] text-[#66640F] [font-family:var(--font-radio-canada-big)] cursor-pointer" whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>Careers</motion.p></a>

                    <motion.a className="text-xl font-medium  leading-[1] tracking-[-0.02em] text-[#66640F] [font-family:var(--font-radio-canada-big)] cursor-pointer" whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }}>Get started</motion.a>
                </div>

                <p className="text-xl leading-[1.2] tracking-[-0.04em] text-[#66640F] [font-family:var(--font-source-serif-4)]">© 2025  ·  All rights reserved

</p>
            </div>

            <div className="bg-[url('/x7.png')] bg-cover bg-center w-full h-[280px] mix-blend-multiply opacity-90"></div>

            <img src="/x23.svg" className="w-full h-[235.26px] object-cover" />

        </div>
    )
}