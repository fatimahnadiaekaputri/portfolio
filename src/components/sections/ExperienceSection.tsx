"use client";

import { motion } from "framer-motion";

const careerData = {
    title: "Career Journey",
    description:  "Currently a final year undergraduate student at Universitas Gadjah Mada. Passionate exploring tech and education fields.",
    experiences: [
        {
            role: "XL Female Future Leader Batch 1 Awardee",
            company: "XL Future Leaders",
            period: "Nov 2024 - Jun 2025",
        },
        {
            role: "Developer Intern",
            company: "PT Indonesia Satu Tujuh",
            period: "Jan 2024 - Mar 2024"
        },
        {
            role: "Peer Learning Staff",
            company: "Schoolfess Indonesia",
            period: "Jan 2023 - Mar 2023"
        },
    ],
    organizations: [
        { name: "Organization 1", logo: "/org1.png" },
        { name: "Organization 2", logo: "/org2.png" },
        { name: "Organization 3", logo: "/org3.png" },
    ],
};

export default function ExperienceSection() {
    const data = careerData;

    return (
        <section id="experience" className="py-32" style={{background: "var(--background)", color: "var(--foreground)" }}>
            <motion.div 
                className="max-w-6xl mx-auto px-5 grid gap-20 lg:grid-cols-2"
                initial={{opacity: 0, y:24}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8}}
            >
                <div>
                    <h2 className="text-5xl font-semibold leading-tight">
                        {data.title.split(" ")[0]} <br />
                        {data.title.split(" ")[1]}
                    </h2>

                    <p className="mt-6 max-w-md text-base leading-relaxed" style={{color: "var(--muted-foreground)"}}>
                        {data.description}
                    </p>
                    
                    <div className="mt-12 h-48 w-48 rounded-3xl" style={{
                        background: "linear-gradient(135deg, var(--accent-soft), transparent)",
                        boxShadow: "var(--shadow-soft)",
                    }}></div>
                </div>

                <div className="space-y-14">
                    <div>
                        <h3 className="text-2xl font-semibold mb-8"></h3>
                        <motion.ul 
                            className="relative space-y-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            variants={{visible: {transition: {staggerChildren: 0.2}}}}
                        >
                            {data.experiences.map((exp, i) => (
                                <motion.li
                                    key={i}
                                    className="relative pl-10"
                                    variants={{hidden: {opacity: 0, x: 20}, visible: {opacity: 1, x: 0}}}
                                >
                                    <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full" style={{background: "var(--accent)", boxShadow: "0 0 12px var(--accent)",}}></span>

                                    <div className="text-sm font-medium">{exp.role}</div>
                                    <div className="text-sm italic opacity-80">{exp.company} ({exp.period})</div>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Organizations</h3>

                        <motion.div
                            className="flex gap-6 items-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            variants={{visible: {transition: {staggerChildren: 0.15}}}}
                        >
                        {data.organizations.map((org, i) => (
                            <motion.div
                                key={i}
                                className="h-12 w-12 rounded-xl flex items-center justify-center"
                                style={{
                                    background: "var(--card)",
                                    border: "1px solid var(--muted)"
                                }}
                                variants={{
                                    hidden: {opacity: 0, scale: 0.8},
                                    visible: {opacity: 1, scale: 1}
                                }}
                            >
                                <span className="text-xs opacity-70">{org.name}</span>    
                            </motion.div>
                        ))}
                        </motion.div>
                    </div>
                </div>                    
            </motion.div>
        </section>
    )
}