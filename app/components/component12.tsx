"use client"
import { motion, Variants } from "framer-motion"
import { useRouter } from "next/navigation"

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
            ease: "easeOut",
            delay:0.2
        }
    }
}

export default function component12() {

    const router = useRouter();

    return (
        <div className="flex flex-col items-center gap-10 pt-20 px-5 pb-10 w-full">

            <h2 className="font-medium text-[40px] leading-[1] tracking-[-0.03em] [font-family:var(--font-radio-canada-big)]">Latest articles</h2>

            <motion.div variants = {item} initial = "hidden" whileInView = "show" viewport ={{once:true}}  className="grid grid-cols-2 pb-30 gap-x-4 gap-y-20 border-box">

                <motion.div onClick={()=>router.push("/article/how-to-build-a-climate-ready-data-stack")} whileHover="hover" transition={{ duration: 0.2, ease: "easeOut" }} className="flex flex-col items-start gap-5 border-box  w-full cursor-pointer">

                    <div className="bg-[url('/x9.avif')] bg-cover bg-center h-[405.73px] w-full"></div>

                    <motion.div className="flex flex-col items-start gap-6 border-box w-full" variants={{ hover: { opacity: 0.6 } }}>

                        <div className="flex flex-col items-start gap-2 border-box">
                            <p className="font-medium text-xl leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">How to Build a Climate-Ready Data Stack</p>
                            <div className="flex items-start gap-2 border-box">
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">Insights</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">.</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">4 min</p>


                            </div>
                        </div>

                        <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] ">A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.</p>

                    </motion.div>

                </motion.div>

                <motion.div onClick={()=>router.push("/article/how-to-build-a-climate-ready-data-stack")} whileHover="hover" transition={{ duration: 0.2, ease: "easeOut" }} className="flex flex-col items-start gap-5 border-box  w-full cursor-pointer">

                    <div className="bg-[url('/x11.avif')] bg-cover bg-center h-[405.73px] w-full"></div>

                    <motion.div className="flex flex-col items-start gap-6 border-box w-full" variants={{ hover: { opacity: 0.6 } }}>

                        <div className="flex flex-col items-start gap-2 border-box">
                            <p className="font-medium text-xl leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">Sustainability Isn’t a Side Project: Making Impact Operational</p>
                            <div className="flex items-start gap-2 border-box">
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">Strategy</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">.</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">7 min</p>


                            </div>
                        </div>

                        <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] ">Why climate goals belong in your core roadmap—not just in the annual ESG report.</p>

                    </motion.div>

                </motion.div>

                <motion.div onClick={()=>router.push("/article/how-to-build-a-climate-ready-data-stack")}  whileHover="hover" transition={{ duration: 0.2, ease: "easeOut" }} className="flex flex-col items-start gap-5 border-box  w-full cursor-pointer">

                    <div className="bg-[url('/x8.avif')] bg-cover bg-center h-[405.73px] w-full"></div>

                    <motion.div className="flex flex-col items-start gap-6 border-box w-full" variants={{ hover: { opacity: 0.6 } }}>

                        <div className="flex flex-col items-start gap-2 border-box">
                            <p className="font-medium text-xl leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">Inside the Aetherfield Model: How We Turn Data Into Action</p>
                            <div className="flex items-start gap-2 border-box">
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">Insights</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">.</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">5 min</p>


                            </div>
                        </div>

                        <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] ">A behind-the-scenes look at our platform logic, system architecture, and sustainability reasoning.</p>

                    </motion.div>

                </motion.div>

                <motion.div onClick={()=>router.push("/article/how-to-build-a-climate-ready-data-stack")}  whileHover="hover" transition={{ duration: 0.2, ease: "easeOut" }} className="flex flex-col items-start gap-5 border-box  w-full cursor-pointer">

                    <div className="bg-[url('/x12.avif')] bg-cover bg-center h-[405.73px] w-full"></div>

                    <motion.div className="flex flex-col items-start gap-6 border-box w-full" variants={{ hover: { opacity: 0.6 } }}>

                        <div className="flex flex-col items-start gap-2 border-box">
                            <p className="font-medium text-xl leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">From Spreadsheets to Systems: The Evolution of Climate Reporting</p>
                            <div className="flex items-start gap-2 border-box">
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">Tooling</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">.</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">6 min</p>


                            </div>
                        </div>

                        <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] ">Why legacy tools aren’t enough—and what the next generation of reporting looks like.</p>

                    </motion.div>

                </motion.div>

                <motion.div onClick={()=>router.push("/article/how-to-build-a-climate-ready-data-stack")}  whileHover="hover" transition={{ duration: 0.2, ease: "easeOut" }} className="flex flex-col items-start gap-5 border-box  w-full cursor-pointer">

                    <div className="bg-[url('/x13.avif')] bg-cover bg-center h-[405.73px] w-full"></div>

                    <motion.div className="flex flex-col items-start gap-6 border-box w-full" variants={{ hover: { opacity: 0.6 } }}>

                        <div className="flex flex-col items-start gap-2 border-box">
                            <p className="font-medium text-xl leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">Carbon Accounting: Myths, Models, and Must-Haves</p>
                            <div className="flex items-start gap-2 border-box">
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">Tooling</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">.</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">6 min</p>


                            </div>
                        </div>

                        <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] ">Debunking common assumptions and offering a framework for getting it right.</p>

                    </motion.div>

                </motion.div>

                <motion.div onClick={()=>router.push("/article/how-to-build-a-climate-ready-data-stack")}  whileHover="hover" transition={{ duration: 0.2, ease: "easeOut" }} className="flex flex-col items-start gap-5 border-box  w-full cursor-pointer">

                    <div className="bg-[url('/x14.avif')] bg-cover bg-center h-[405.73px] w-full"></div>

                    <motion.div className="flex flex-col items-start gap-6 border-box w-full" variants={{ hover: { opacity: 0.6 } }}>

                        <div className="flex flex-col items-start gap-2 border-box">
                            <p className="font-medium text-xl leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">Seeing Clearly: Designing Feedback Loops for Sustainable Growth</p>
                            <div className="flex items-start gap-2 border-box">
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">Strategy</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">.</p>
                                <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] text-[#6C6C6C]">4 min</p>


                            </div>
                        </div>

                        <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] ">Building responsive systems that keep sustainability strategy adaptive and actionable.</p>

                    </motion.div>

                </motion.div>



            </motion.div>

        </div>
    )
}