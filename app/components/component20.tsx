"use client"
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";



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
            delay:0.2
        }
    }
}

    const item3: Variants = {
        hidden: {
            rotate: 53,
            opacity: 0,
            scale:0.96
        },
        show: {
            rotate: 8,
            opacity: 1,
            scale:1,
            transition: {
                duration: 0.45,
                ease: "easeOut",
              
            }
        }
    }


export default function Component20() {

    const router = useRouter();

    return (

        <div className="flex flex-col items-center gap-10 border-box pt-[140px] px-5 pb-30 bg-linear-to-b from-[#A8D3FF]  to-[#FFF4DF]">

            <motion.p variants = {item1} initial = "hidden" whileInView = "show" viewport = {{once:true}} onClick={() => router.push('/careers')} whileHover={{ opacity: 0.6 }} transition={{ duration: 0.2, ease: "easeOut" }} className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)] cursor-pointer">
                ← Back to Careers
            </motion.p>


            <motion.div className="relative">

                <motion.div variants = {item3} initial = "hidden" whileInView = "show" viewport = {{once:true}} className="bg-[url('/x16.svg')] rotate-8 bg-cover bg-center w-[313.69px] h-[182.22px] absolute right-[-85px] bottom-[270px] z-[50]"></motion.div>

                <motion.div variants = {item2} initial = "hidden" whileInView = "show" viewport = {{once:true}} className="flex flex-col items-start gap-12 p-10 border-box rounded-2xl bg-white w-[820px] relative">



                    <div className="flex items-start gap-10 ">

                        <div className="flex flex-col items-start gap-6 border-box w-[600.4px]">

                            <div className="flex flex-col items-start gap-2 border-box">

                                <h2 className="text-[40px] font-medium leading-[1] tracking-[-0.03em] [font-family:var(--font-radio-canada-big)]">Data Scientist</h2>

                                <div className="flex items-start gap-2 border-box">

                                    <p className="text-[#6C6C6C] text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">Full-time</p>
                                    <p className="text-[#6C6C6C] text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">.</p>
                                    <p className="text-[#6C6C6C] text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">Denver, CO</p>


                                </div>
                            </div>

                            <p className="text-xl leading-[1.2] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]">Help build the intelligence layer for climate action. You’ll turn complex sustainability data into clear, actionable insights for enterprise teams.</p>

                        </div>


                        <motion.button onClick={() => router.push("/job-listing/data-scientist")} className="flex justify-center items-center gap-[10px] p-3 bg-black cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]" whileHover="hover">

                            <motion.div variants={{ hover: { opacity: 0.6 } }} transition={{ duration: 0.2, ease: "easeOut" }} className="text-sm [font-family:var(--font-geist-mono)] text-white leading-[1] font-medium">Apply now</motion.div>

                        </motion.button>

                    </div>


                    <div className="border-t border-[#DBE0EC]  w-full"></div>


                    <div>

                        <h5 className="text-xl font-medium leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]"><span>Company description</span></h5>
                        <br />
                        <p className="text-xl leading-[1.4] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]"><span>At Aetherfield, we build software that empowers companies to lead with climate accountability. Our platform helps sustainability and operations teams make sense of complex environmental data—transforming emissions, waste, and energy metrics into measurable, meaningful action. We’re a mission-driven team of technologists, designers, and scientists working to accelerate the shift toward a low-carbon future.</span></p>
                        <br />
                        <br />



                        <h5 className="text-xl font-medium leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]"><span>About the role</span></h5>
                        <br />
                        <p className="text-xl leading-[1.4] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]"><span>As a Data Scientist at Aetherfield, you’ll help shape the analytical engine behind our platform. You’ll collaborate with product and engineering teams to design models that interpret environmental impact, forecast future trends, and uncover actionable insights for our customers. Your work will directly influence how companies plan, report, and act on their sustainability strategies.</span></p>
                        <br />
                        <br />

                        <h5 className="text-xl font-medium leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]"><span>Requirements</span></h5>
                        <br />
                        <p className="text-xl leading-[1.4] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]"><span>3+ years of experience in data science or applied analytics (Python, SQL, etc.)<br />
                            Experience working with climate, sustainability, or supply chain datasets is a plus<br />
                            Strong foundation in statistics and data modeling<br />
                            Ability to communicate complex insights clearly to both technical and non-technical teams<br />
                            Curiosity, clarity, and care in how you approach messy data<br />
                            Passion for solving real-world problems with purpose and precision</span></p>
                        <br />
                        <br />


                        <h5 className="text-xl font-medium leading-[1] tracking-[-0.02em] [font-family:var(--font-radio-canada-big)]"><span>Company benefits</span></h5>
                        <br />
                        <p className="text-xl leading-[1.4] tracking-[-0.04em] [font-family:var(--font-source-serif-4)]"><span>Competitive salary and equity options<br />
                            Flexible, hybrid work environment<br />
                            Generous PTO and paid volunteer days<br />
                            Annual sustainability stipend<br />
                            Team offsites and climate-focused retreats<br />
                            A mission-first culture that values clarity, impact, and integrity</span></p>


                    </div>

                    <div className="border-t border-[#DBE0EC]  w-full"></div>


                    <div className="flex flex-col items-center gap-6 border-box w-full">

                        <h2 className="font-medium text-[40px] leading-[1] tracking-[-0.03em] [font-family:var(--font-radio-canada-big)] text-center">Ready to help build the<br />future of climate intelligence?</h2>

                        <motion.button className="flex justify-center items-center gap-[10px] p-4 bg-black cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]" whileHover="hover" >
                            <motion.div variants={{ hover: { opacity: 0.6 } }} transition={{ duration: 0.2, ease: "easeOut" }} className="w-1 h-1 bg-white"></motion.div>
                            <motion.div variants={{ hover: { opacity: 0.6 } }} transition={{ duration: 0.2, ease: "easeOut" }} className="text-sm [font-family:var(--font-geist-mono)] text-white">Apply now</motion.div>

                        </motion.button>

                    </div>




                </motion.div>

            </motion.div>




        </div>
    )
}