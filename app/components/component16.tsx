"use client"

import { motion, Variants } from "framer-motion"

const item1: Variants = {
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
        y: 60,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.45,
            ease: "easeOut",
            delay: 0.5
        },
    }
}


export default function Component16() {
    return (
        <div className="flex flex-col items-center gap-10 border-box pt-30 px-5 pb-40">

            <motion.h2 variants = {item1} initial = "hidden" whileInView = "show" viewport = {{once:true}}  className="text-[40px] pb-2 font-medium leading-[1] tracking-[-0.03em] [font-family:var(--font-radio-canada-big)]">Our values</motion.h2>

            <motion.div variants = {item2} initial = "hidden" whileInView = "show" viewport = {{once:true}}  className="flex items-start gap-4 border-box">

                <div className="flex flex-col items-start gap-6 p-10 bg-[#F6F8FB] rounded-xl">

                    <img className="w-[42px] h-[42px] object-cover" src="./x21.svg" />

                    <div className="flex flex-col items-start gap-2">

                        <h2 className="text-xl font-medium leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">Clarity drives action</h2>
                        <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">We believe better decisions start with better data—measured, visible, and trusted.</p>
                    </div>

                </div>

                <div className="flex flex-col items-start gap-6 p-10 bg-[#F6F8FB] rounded-xl">

                    <img className="w-[42px] h-[42px] object-cover" src="./x19.svg" />

                    <div className="flex flex-col items-start gap-2">

                        <h2 className="text-xl font-medium leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">Sustainability is a systems problem</h2>
                        <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">We build tools that help teams connect the dots between operations, impact, and accountability.</p>
                    </div>

                </div>

                <div className="flex flex-col items-start gap-6 p-10 bg-[#F6F8FB] rounded-xl">

                    <img className="w-[42px] h-[42px] object-cover" src="./x20.svg" />

                    <div className="flex flex-col items-start gap-2">

                        <h2 className="text-xl font-medium leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">Progress over perfection</h2>
                        <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">We support real-world momentum—helping organizations move from ambition to measurable change.</p>
                    </div>

                </div>

            </motion.div>



        </div>
    )
}