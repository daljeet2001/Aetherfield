"use client"

import { motion, Variants } from "framer-motion";

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

export default function Component18() {
    return (
        <div className="flex flex-col items-center box-border gap-8 md:gap-[64px] py-10 md:py-20 lg:py-30 px-5 w-full bg-[#F6F8FB] w-full">

            <h2 className="flex w-full items-center justify-start font-medium text-[32px] md:text-5xl lg:text-[56px] leading-[1] tracking-[-0.03em] [font-family:var(--font-radio-canada-big)]">Meet the team</h2>

            <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col items-start md:gap-[10px] border-box w-full">

                <div className="hidden md:grid grid-cols-3 w-full">

                    <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] w-full">Name</p>
                    <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] w-full">Title</p>
                    <p className="text-sm leading-[1] [font-family:var(--font-geist-mono)] w-full flex items-center justify-end">Contact</p>
                </div>

                <div className="flex flex-col items-start border-box w-full">

                    <div className="border-[#DBE0EC] grid grid-cols-1 md:grid-cols-3 md:py-4 w-full border-t gap-4 md:gap-0  py-6">

                        <p className="text-xl font-medium leading-[1] tracking-[-0.02em]  [font-family:var(--font-radio-canada-big)] w-full">Eunji Park</p>
                        <p className="text-xl w-full  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">Founder</p>
                        <p className="text-xl text-start md:text-end w-full  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">e.park@aetherfield.com</p>

                    </div>

                    <div className="border-[#DBE0EC] grid grid-cols-1 md:grid-cols-3 md:py-4 w-full border-t gap-4 md:gap-0  py-6">

                        <p className="text-xl  font-medium leading-[1] tracking-[-0.02em]  [font-family:var(--font-radio-canada-big)] w-full">Al Gorithm</p>
                        <p className="text-xl w-full  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">Senior Systems Architect</p>
                        <p className="text-xl  w-full text-start md:text-end leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">a.gorithm@aetherfield.com</p>

                    </div>


                    <div className="border-[#DBE0EC] grid grid-cols-1 md:grid-cols-3 md:py-4 w-full border-t gap-4 md:gap-0  py-6">

                        <p className="text-xl font-medium leading-[1] tracking-[-0.02em]  [font-family:var(--font-radio-canada-big)] w-full">Cassandra Query</p>
                        <p className="text-xl w-full  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">Head of Data Platforms</p>
                        <p className="text-xl w-full text-start md:text-end  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">c.query@aetherfield.com</p>

                    </div>


                    <div className="border-[#DBE0EC] grid grid-cols-1 md:grid-cols-3 md:py-4 w-full border-t gap-4 md:gap-0  py-6">

                        <p className="text-xl font-medium leading-[1] tracking-[-0.02em]  [font-family:var(--font-radio-canada-big)] w-full">Sue Logic</p>
                        <p className="text-xl w-full  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">Principal Software Engineer</p>
                        <p className="text-xl w-full text-start md:text-end  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">s.logic@aetherfield.com</p>

                    </div>

                    <div className="border-[#DBE0EC] grid grid-cols-1 md:grid-cols-3 md:py-4 w-full border-t gap-4 md:gap-0  py-6">

                        <p className="text-xl font-medium leading-[1] tracking-[-0.02em]  [font-family:var(--font-radio-canada-big)] w-full">Dash Bordman</p>
                        <p className="w-full text-xl  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">Product Manager</p>
                        <p className="w-full text-xl  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)] text-start md:text-end">d.bordman@aetherfield.com</p>

                    </div>

                    <div className="border-[#DBE0EC] grid grid-cols-1 md:grid-cols-3 md:py-4 w-full border-t gap-4 md:gap-0  py-6">

                        <p className="text-xl w-full font-medium leading-[1] tracking-[-0.02em]  [font-family:var(--font-radio-canada-big)] ">Eunji Park</p>
                        <p className="text-xl w-full  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">Founder</p>
                        <p className="text-xl text-start md:text-end  w-full leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">e.park@aetherfield.com</p>

                    </div>

                    <div className="border-[#DBE0EC] grid grid-cols-1 md:grid-cols-3 md:py-4 w-full border-t gap-4 md:gap-0  py-6">

                        <p className="text-xl font-medium leading-[1] tracking-[-0.02em]  [font-family:var(--font-radio-canada-big)] w-full">Al Gorithm</p>
                        <p className="text-xl w-full  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">Senior Systems Architect</p>
                        <p className="text-xl  w-full text-start md:text-end leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">a.gorithm@aetherfield.com</p>

                    </div>


                    <div className="border-[#DBE0EC] grid grid-cols-1 md:grid-cols-3 md:py-4 w-full border-t gap-4 md:gap-0  py-6">

                        <p className="text-xl font-medium leading-[1] tracking-[-0.02em]  [font-family:var(--font-radio-canada-big)] w-full">Cassandra Query</p>
                        <p className="text-xl w-full  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">Head of Data Platforms</p>
                        <p className="text-xl w-full text-start md:text-end  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">c.query@aetherfield.com</p>

                    </div>


                    <div className="border-[#DBE0EC] grid grid-cols-1 md:grid-cols-3 md:py-4 w-full border-t gap-4 md:gap-0  py-6">

                        <p className="text-xl font-medium leading-[1] tracking-[-0.02em]  [font-family:var(--font-radio-canada-big)] w-full">Sue Logic</p>
                        <p className="text-xl w-full  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">Principal Software Engineer</p>
                        <p className="text-xl w-full text-start md:text-end  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">s.logic@aetherfield.com</p>

                    </div>

                    <div className="border-[#DBE0EC] grid grid-cols-1 md:grid-cols-3 md:py-4 w-full border-t gap-4 md:gap-0  py-6">

                        <p className="text-xl font-medium leading-[1] tracking-[-0.02em]  [font-family:var(--font-radio-canada-big)] w-full">Dash Bordman</p>
                        <p className="w-full text-xl  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">Product Manager</p>
                        <p className="w-full text-xl  leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)] text-start md:text-end">d.bordman@aetherfield.com</p>

                    </div>

                    <div className="border-[#DBE0EC] grid grid-cols-1 md:grid-cols-3 md:py-4 w-full border-y gap-4 md:gap-0  py-6">

                        <p className="text-xl font-medium leading-[1] tracking-[-0.02em]  [font-family:var(--font-radio-canada-big)] w-full">Eunji Park</p>
                        <p className="text-xl   leading-[1.15] tracking-[-0.04em] w-full [font-family:var(--font-source-serif-4)]">Founder</p>
                        <p className="text-xl text-start md:text-end  w-full leading-[1.15] tracking-[-0.04em]  [font-family:var(--font-source-serif-4)]">e.park@aetherfield.com</p>

                    </div>

                </div>
            </motion.div>

        </div>
    )
}