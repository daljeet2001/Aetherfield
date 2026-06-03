"use client"

import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

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

export default function Component19() {

    const router = useRouter()

    return (

        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center gap-8 md:gap-10 border-box pt-30 md:pt-[140px] px-5 pb-30 bg-linear-to-b from-[#A8D3FF]  to-[#FFF4DF]">

            <motion.div variants={item} className="flex flex-col items-center box-border pb-2">

                <h1 className="text-4xl md:text-[64px] lg:text-[80px] leading-[1] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">Careers at</h1>
                <h2 className="text-4xl md:text-[64px] lg:text-[80px] leading-[1] tracking-[-0.05em] [font-family:var(--font-radio-canada-big)]">Aetherfield</h2>

            </motion.div>


            <motion.div variants={item} className="flex flex-col items-center gap-4 box-border ">

                <div className="flex flex-col md:flex-row items-start gap-6 p-6 md:p-10 box-border bg-white rounded-2xl w-full lg:w-[820px]">

                    <div className="flex flex-col items-start gap-4 md:gap-6 box-border w-full md:w-[610.4px] lg:w-[616.4px]">

                        <div className="flex flex-col items-start gap-2 border-box">

                            <h2 className="text-lg md:text-xl font-medium leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">UX Designer</h2>

                            <div className="flex items-start gap-2 border-box">

                                <p className="text-[#6C6C6C] text-sm leading-[1] [font-family:var(--font-geist-mono)]">Contract</p>
                                <p className="text-[#6C6C6C] text-sm leading-[1] [font-family:var(--font-geist-mono)]">.</p>
                                <p className="text-[#6C6C6C] text-sm leading-[1] [font-family:var(--font-geist-mono)]">San Francisco, CA</p>


                            </div>
                        </div>

                        <p className="text-lg md:text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">Shape the tools that drive climate intelligence. You’ll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.</p>

                    </div>


                    <motion.button onClick={() => router.push("/job-listing/data-scientist")} className="flex justify-center items-center gap-[10px] p-3 bg-black cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]" whileHover="hover">

                        <motion.div variants={{ hover: { opacity: 0.6 } }} transition={{ duration: 0.2, ease: "easeOut" }} className="text-sm [font-family:var(--font-geist-mono)] text-white leading-[1] font-medium">View role</motion.div>

                    </motion.button>

                </div>

                <div className="flex flex-col md:flex-row items-start gap-6 p-6 md:p-10 border-box bg-white rounded-2xl w-full lg:w-[820px]">

                    <div className="flex flex-col items-start gap-4 md:gap-6 border-box w-full md:w-[610.4px] lg:w-[616.4px]">

                        <div className="flex flex-col items-start gap-2 border-box">

                            <h2 className="text-lg md:text-xl font-medium leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">Data Scientist</h2>

                            <div className="flex items-start gap-2 border-box">

                                <p className="text-[#6C6C6C] text-sm leading-[1] [font-family:var(--font-geist-mono)]">Full-time</p>
                                <p className="text-[#6C6C6C] text-sm leading-[1] [font-family:var(--font-geist-mono)]">.</p>
                                <p className="text-[#6C6C6C] text-sm leading-[1] [font-family:var(--font-geist-mono)]">Denver, CO</p>


                            </div>
                        </div>

                        <p className="text-lg md:text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">Help build the intelligence layer for climate action. You’ll turn complex sustainability data into clear, actionable insights for enterprise teams.</p>

                    </div>


                    <motion.button onClick={() => router.push("/job-listing/data-scientist")} className="flex justify-center items-center gap-[10px] p-3 bg-black cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]" whileHover="hover">

                        <motion.div variants={{ hover: { opacity: 0.6 } }} transition={{ duration: 0.2, ease: "easeOut" }} className="text-sm [font-family:var(--font-geist-mono)] text-white leading-[1] font-medium">View role</motion.div>

                    </motion.button>

                </div>

                <div className="flex flex-col md:flex-row items-start gap-6 p-6 md:p-10 border-box bg-white rounded-2xl w-full lg:w-[820px]">

                    <div className="flex flex-col items-start gap-6 border-box w-full md:w-[610.4px] lg:w-[616.4px]">

                        <div className="flex flex-col items-start gap-2 border-box">

                            <h2 className="text-lg md:text-xl font-medium leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">Product Manager</h2>

                            <div className="flex items-start gap-2 border-box">

                                <p className="text-[#6C6C6C] text-sm leading-[1] [font-family:var(--font-geist-mono)]">Part-time</p>
                                <p className="text-[#6C6C6C] text-sm leading-[1] [font-family:var(--font-geist-mono)]">.</p>
                                <p className="text-[#6C6C6C] text-sm leading-[1] [font-family:var(--font-geist-mono)]">Seattle, WA</p>


                            </div>
                        </div>

                        <p className="text-lg md:text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">Shape the tools that drive climate intelligence. You’ll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.</p>

                    </div>

                    <motion.button onClick={() => router.push("/job-listing/data-scientist")} className="flex justify-center items-center gap-[10px] p-3 bg-black cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]" whileHover="hover">

                        <motion.div variants={{ hover: { opacity: 0.6 } }} transition={{ duration: 0.2, ease: "easeOut" }} className="text-sm [font-family:var(--font-geist-mono)] text-white leading-[1] font-medium">View role</motion.div>

                    </motion.button>

                </div>

                <div className="flex flex-col md:flex-row items-start gap-6 p-6 md:p-10 border-box border border-dashed border-black  rounded-2xl w-full md:w-[820px]">

                    <div className="flex flex-col items-start gap-6 border-box w-full md:w-[610.4px]  lg:w-[616.4px]">

                        <div className="flex flex-col items-start gap-2 border-box">

                            <h2 className="text-lg md:text-xl font-medium leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">Open application</h2>

                            <div className="flex items-start gap-2 border-box">

                                <p className="text-[#6C6C6C] text-sm leading-[1] [font-family:var(--font-geist-mono)]">Full-time</p>
                                <p className="text-[#6C6C6C] text-sm leading-[1] [font-family:var(--font-geist-mono)]">.</p>
                                <p className="text-[#6C6C6C] text-sm leading-[1] [font-family:var(--font-geist-mono)]">Denver, CO</p>


                            </div>
                        </div>

                        <p className="text-lg md:text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">Don’t see your role available? Apply for an open application!</p>

                    </div>



                    <motion.button onClick={() => router.push("/job-listing/data-scientist")} className="flex justify-center items-center gap-[10px] p-3 bg-black cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]" whileHover="hover">

                        <motion.div variants={{ hover: { opacity: 0.6 } }} transition={{ duration: 0.2, ease: "easeOut" }} className="text-sm [font-family:var(--font-geist-mono)] text-white leading-[1] font-medium tracking-[0]">Apply now</motion.div>

                    </motion.button>


                </div>

            </motion.div>





        </motion.div>


    )

}