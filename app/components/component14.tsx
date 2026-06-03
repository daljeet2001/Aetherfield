"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Component14() {

    const router = useRouter();

    return (
        <div className="flex flex-col items-center gap-6 md:gap-5 py-10 md:py-20 lg:py-30 px-5 w-full">

            <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-0 md:justify-between border-box w-full">

                <h2 className="text-[32px] md:text-5xl lg:text-[56px] font-medium leading-[1] tracking-[-0.03em] [font-family:var(--font-radio-canada-big)]">Recent articles</h2>

                <motion.p onClick={() => router.push("/journal")} whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }} className="cursor-pointer text-lg lg:text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] underline">View all articles</motion.p>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-4">

                <motion.div onClick={() => router.push("/article/how-to-build-a-climate-ready-data-stack", { scroll: true })} whileHover="hover" transition={{ duration: 0.2, ease: "easeOut" }} className="flex flex-col items-start gap-5 box-border  w-full cursor-pointer">

                    <div className="bg-[url('/x9.avif')] bg-cover bg-center aspect-[1.71] w-full"></div>

                    <motion.div className="flex flex-col items-start gap-6 box-border w-full" variants={{ hover: { opacity: 0.6 } }}>

                        <div className="flex flex-col items-start gap-2 border-box">
                            <p className="font-medium text-lg md:text-xl leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">How to Build a Climate-Ready Data Stack</p>
                            <div className="flex items-start gap-2 border-box">
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">Insights</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">.</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">4 min</p>


                            </div>
                        </div>

                        <p className="text-lg md:text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] ">A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.</p>

                    </motion.div>

                </motion.div>

                <motion.div onClick={() => router.push("/article/how-to-build-a-climate-ready-data-stack")} whileHover="hover" transition={{ duration: 0.2, ease: "easeOut" }} className="flex flex-col items-start gap-5 box-border  w-full cursor-pointer">

                    <div className="bg-[url('/x11.avif')] bg-cover bg-center aspect-[1.71] w-full"></div>

                    <motion.div className="flex flex-col items-start gap-6 box-border w-full" variants={{ hover: { opacity: 0.6 } }}>

                        <div className="flex flex-col items-start gap-2 box-border">
                            <p className="font-medium text-lg md:text-xl leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">Sustainability Isn’t a Side Project: Making Impact Operational</p>
                            <div className="flex items-start gap-2 border-box">
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">Strategy</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">.</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">7 min</p>


                            </div>
                        </div>

                        <p className="text-lg md:text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] ">Why climate goals belong in your core roadmap—not just in the annual ESG report.</p>

                    </motion.div>

                </motion.div>

                <motion.div onClick={() => router.push("/article/how-to-build-a-climate-ready-data-stack")} whileHover="hover" transition={{ duration: 0.2, ease: "easeOut" }} className="flex flex-col items-start gap-5 box-border  w-full cursor-pointer">

                    <div className="bg-[url('/x8.avif')] bg-cover bg-center aspect-[1.71] w-full"></div>

                    <motion.div className="flex flex-col items-start gap-6 box-border w-full" variants={{ hover: { opacity: 0.6 } }}>

                        <div className="flex flex-col items-start gap-2 border-box">
                            <p className="font-medium text-lg md:text-xl leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">Inside the Aetherfield Model: How We Turn Data Into Action</p>
                            <div className="flex items-start gap-2 border-box">
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">Insights</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">.</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">5 min</p>


                            </div>
                        </div>

                        <p className="text-lg md:text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] ">A behind-the-scenes look at our platform logic, system architecture, and sustainability reasoning.</p>

                    </motion.div>

                </motion.div>

            </div>

        </div>
    )
}