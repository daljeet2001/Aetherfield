"use client"

import { motion, Variants } from "framer-motion";

export default function Component13() {



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

    const item3: Variants = {
        hidden: {
            y: 40,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.45,
                ease: "easeInOut",
                delay: 0.2
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
                ease: "easeOut"
            }
        }
    }

    return (

        <>
            <motion.div className="flex flex-col items-center">

                <motion.div variants={item1} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col items-center  gap-4 pt-15 md:pt-20 px-5 pb-10 border-box mt-15 w-[80%] text-center">

                    <div className="flex justify-center items-start gap-2 border-box">

                        <p className="text-lg md:text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] text-[#6C6C6C]">Insights</p>
                        <p className="text-lg md:text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] text-[#6C6C6C]">.</p>
                        <p className="text-lg md:text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] text-[#6C6C6C]">4min</p>

                    </div>

                    <h1 className="text-4xl md:text-[64px] lg:text-[80px] leading-[1] tracking-[-0.05em] [font-family:var(--font-radio-canada-big)]">How to Build a Climate-Ready Data Stack</h1>

                </motion.div>

                <motion.div variants={item3} initial="hidden" whileInView="show" viewport={{ once: true }} className="aspect-[2.48] w-full px-5">
                    <img src={"/x24.avif"} className="object-cover w-full h-full" />
                </motion.div>

                <motion.div className="flex flex-col items-center w-full" variants={item2} initial="hidden" whileInView="show" viewport={{ once: true }}>

                    <div className="flex flex-col lg:flex-row gap-8 md:gap-10 items-start lg:justify-between box-border px-5 md:px-20  lg:px-25 pt-10 md:pt-20 w-full">

                        <div className="flex flex-row lg:flex-col items-start  gap-20 lg:gap-10 box-border ">

                            <ul className="flex flex-col items-start gap-1 box-border">

                                <p className="text-lg md:text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] text-[#6C6C6C]">Published</p>
                                <p className="text-xl leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">May 7, 2028</p>
                            </ul>

                            <ul className="flex flex-col items-start gap-1 box-border">

                                <p className="text-lg md:text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] text-[#6C6C6C]">Author</p>
                                <p className="text-xl leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]">Lana Terra</p>
                            </ul>



                        </div>

                        <div className="flex flex-col items-start box-border gap-10 md:gap-12 border-b border-[#DBE0EC] w-full  lg:w-[740px] h-full pb-12">

                            <p className="text-lg md:text-xl leading-[1.4] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]  text-left break-words">Climate action is only as strong as the data that informs it. But most data stacks weren’t designed with emissions, supply chains, or climate modeling in mind. Teams are often stuck retrofitting existing systems or relying on brittle workarounds to generate insights. It’s time to rethink our infrastructure—starting with the foundation.</p>

                        </div>

                    </div>

                    <div className="flex justify-end items-start gap-10 lg:gap-12 pt-10 md:pt-12 px-5 md:px-20 lg:px-25 pb-10 md:pb-20 w-full">

                        <div className="flex  items-center w-full lg:w-[740px]">

                            <div className="">

                                <h5 className="text-lg md:text-xl font-medium leading-[-0.02em] leading-[1] [font-family:var(--font-radio-canada-big)]">Built for Another Era</h5>
                                <p><br /></p>
                                <p className="leading-[1.4] tracking-[-0.04em] text-lg md:text-xl [font-family:var(--font-source-serif-4)]">Most data infrastructures were built to optimize for sales, user growth, or cost—not carbon. This creates friction when sustainability teams try to source emissions data from systems that weren’t designed to capture it. Without foundational visibility, even basic reporting becomes a manual, error-prone task. The result? Delays, duplications, and disconnects.</p>
                                <p><br /></p>
                                <p><br /></p>

                                <h5 className="text-lg md:text-xl font-medium leading-[-0.02em] leading-[1] [font-family:var(--font-radio-canada-big)]">Bridging the Gaps</h5>
                                <p><br /></p>
                                <p className="leading-[1.4] tracking-[-0.04em] text-lg md:text-xl [font-family:var(--font-source-serif-4)]">Emissions data lives everywhere—and nowhere. From procurement software to building sensors, critical signals are often siloed across vendors, formats, or departments. The first step to a climate-ready stack is connection: mapping where relevant data lives, how it’s structured, and where the friction points are in accessing it consistently.</p>
                                <p><br /></p>
                                <p><br /></p>


                                <h5 className="text-lg md:text-xl font-medium leading-[-0.02em] leading-[1] [font-family:var(--font-radio-canada-big)]">Stack With Strategy</h5>
                                <p><br /></p>
                                <p className="leading-[1.4] tracking-[-0.04em] text-lg md:text-xl [font-family:var(--font-source-serif-4)]">A modern climate stack isn’t just a bundle of tools—it’s an integrated system that mirrors how your business actually operates. This means prioritizing interoperability, aligning metrics across platforms, and investing in foundational data governance. Tools alone won’t solve emissions blind spots—strategy will.</p>
                                <p><br /></p>
                                <p><br /></p>


                                <h5 className="text-lg md:text-xl font-medium leading-[-0.02em] leading-[1] [font-family:var(--font-radio-canada-big)]">Bake in Flexibility</h5>
                                <p><br /></p>
                                <p className="leading-[1.4] tracking-[-0.04em] text-lg md:text-xl [font-family:var(--font-source-serif-4)]">Regulatory frameworks, emissions factors, and supplier data are constantly evolving. Your data stack should too. That means designing for modularity, version control, and extensibility. Future-proofing your system is less about predicting what’s next and more about building with change in mind.</p>
                                <p><br /></p>
                                <p><br /></p>


                                <h5 className="text-lg md:text-xl font-medium leading-[-0.02em] leading-[1] [font-family:var(--font-radio-canada-big)]">From Stack to Story</h5>
                                <p><br /></p>
                                <p className="leading-[1.4] tracking-[-0.04em] text-lg md:text-xl [font-family:var(--font-source-serif-4)]">At the end of the day, data infrastructure is only valuable if it drives action. A climate-ready stack enables teams to monitor progress, identify trade-offs, and make informed decisions at speed. With the right foundations in place, sustainability becomes more than a report—it becomes a capability.</p>
                                <p><br /></p>
                                <p><br /></p>

                            </div>




                        </div>

                    </div>
                </motion.div>


            </motion.div>


        </>

    )

}