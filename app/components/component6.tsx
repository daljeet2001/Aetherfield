"use client"
import { motion, Variants } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Component6() {

    const router = useRouter();

    const container: Variants = {
    hidden: {},
    show: {
        transition: {

            staggerChildren: 0.5
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

        const item2: Variants = {
        hidden: {
            rotate: 395,
            scale:0.96,
            opacity: 0
        },
        show: {
            rotate: 350,
            opacity: 1,
            scale:1,
            transition: {
                duration: 0.45,
                ease: "easeOut",
                delay:0.5
            }
        }
    }
    return (

        <>
            <motion.div variants = {container} initial = "hidden" whileInView = "show" viewport = {{once:true}}  className="relative">

                

                <motion.div  variants={item} className="flex flex-col items-center gap-10 py-5 border-box relative">

                    <h2 className="font-medium text-[40px] leading-[1] tracking-[-0.03em] [font-family:var(--font-radio-canada-big)]">From the journal</h2>



                    <div className="flex flex-col items-center gap-6 border-box">

                        <div className="flex flex-col items-start border-box">

                            <motion.div onClick={() => router.push("/article/how-to-build-a-climate-ready-data-stack")} whileHover="hover" variants={{ hover: { x: 8 } }} transition={{ duration: 0.2, ease: "easeOut" }} className="flex  gap-4 items-start py-6 border-t border-[#DBE0EC] cursor-pointer ">

                                <div className="w-[165px] h-[100px] bg-cover bg-center bg-[url(/x9.avif)]"></div>

                                <motion.div variants={{ hover: { opacity: 0.6 } }} className="flex flex-col items-start border-box gap-2 w-[439px]">

                                    <p className="font-medium text-xl leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">How to build a Climate-Ready Data Stack</p>

                                    <div className="flex items-start border-box gap-2">

                                        <p className="text-sm [font-family:var(--font-geist-mono)] text-[#6C6C6C]">Insights</p>
                                        <p className="text-sm [font-family:var(--font-geist-mono)] text-[#6C6C6C]">.</p>
                                        <p className="text-sm [font-family:var(--font-geist-mono)] text-[#6C6C6C]">4 min</p>


                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div onClick={() => router.push("/article/how-to-build-a-climate-ready-data-stack")} whileHover="hover" variants={{ hover: { x: 8 } }} transition={{ duration: 0.2, ease: "easeOut" }} className="flex gap-4 items-start py-6 border-t border-[#DBE0EC] cursor-pointer">

                                <div className="w-[165px] h-[100px] bg-cover bg-center bg-[url(/x11.avif)]"></div>

                                <motion.div variants={{ hover: { opacity: 0.6 } }} className="flex flex-col items-start border-box gap-2 w-[439px]">

                                    <p className="font-medium text-xl leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">Sustainability Isn’t a Side Project: Making Impact Operational</p>

                                    <div className="flex items-start border-box gap-2">

                                        <p className="text-sm [font-family:var(--font-geist-mono)] text-[#6C6C6C]">Strategy</p>
                                        <p className="text-sm [font-family:var(--font-geist-mono)] text-[#6C6C6C]">.</p>
                                        <p className="text-sm [font-family:var(--font-geist-mono)] text-[#6C6C6C]">7 min</p>


                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div onClick={() => router.push("/article/how-to-build-a-climate-ready-data-stack")} whileHover="hover" variants={{ hover: { x: 8 } }} transition={{ duration: 0.2, ease: "easeOut" }} className="flex gap-4 items-start py-6 border-y border-[#DBE0EC] cursor-pointer ">

                                <div className="w-[165px] h-[100px] bg-cover bg-center bg-[url(/x8.avif)]"></div>

                                <motion.div variants={{ hover: { opacity: 0.6 } }} className="flex flex-col items-start border-box gap-2 w-[439px]">

                                    <p className="font-medium text-xl leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">Inside the Aetherfield Model: How We Turn Data Into Action</p>

                                    <div className="flex items-start border-box gap-2">

                                        <p className="text-sm [font-family:var(--font-geist-mono)] text-[#6C6C6C]">Insights</p>
                                        <p className="text-sm [font-family:var(--font-geist-mono)] text-[#6C6C6C]">.</p>
                                        <p className="text-sm [font-family:var(--font-geist-mono)] text-[#6C6C6C]">5 min</p>


                                    </div>
                                </motion.div>

                            </motion.div>

                        </div>

                        <motion.button onClick={() => router.push("/journal")} className="flex justify-center items-center gap-[10px] p-3 bg-black cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]" whileHover="hover">

                            <motion.div variants={{ hover: { opacity: 0.6 } }} transition={{ duration: 0.2, ease: "easeOut" }} className="text-sm [font-family:var(--font-geist-mono)] text-white">View all articles</motion.div>

                        </motion.button>



                    </div>


                </motion.div>

                <motion.img variants={item2}  className="z-50 absolute top-[-10px] left-[140px] w-[420.66px] h-[221.12px]  object-cover" src="./x5.svg" />


            </motion.div>


        </>

    )
}