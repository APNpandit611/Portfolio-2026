import { MapPin } from "lucide-react";
import React from "react";
import EducationCard from "./EducationCard";

const About = () => {
    return (
        <section
            id="about"
            className="py-24 bg-white dark:bg-primary dark:text-white"
        >
            <div className="max-w-7xl mx-auto px-6 p-5 flex flex-col gap-8">
                <span className="uppercase font-mono text-md">about me</span>
                <h1 className="uppercase font-sans font-bold text-[clamp(3rem,6vw,10rem)] text-primary dark:text-white">
                    Background
                </h1>
                <div className="flex flex-col gap-8 items-start lg:flex-row lg:items-center">
                    <div className="w-full flex flex-col gap-8">
                        <span className="font-sans text-md text-secondary dark:text-background leading-loose">
                            Full Stack Developer with hands-on experience
                            creating scalable, responsive web applications using
                            Next.js, Prisma, Supabase, and the MERN stack.
                            Proficient in building and integrating RESTful APIs,
                            leveraging server components, and following Agile
                            and DevOps practices. Experienced in deploying
                            applications via GitHub, Vercel, and Render.
                            Motivated to deliver intuitive, user-centric
                            solutions while continuously learning and adopting
                            new technologies.
                        </span>
                        <div className="flex items-center gap-3">
                            <span className="text-green">
                                <MapPin />
                            </span>
                            <span className="font-sans text-lg text-secondary dark:text-background">
                                Kokkola, Finland
                            </span>
                        </div>
                    </div>
                    <EducationCard
                        degree="BE in Information Technology"
                        university="Centria University of Applied Sciences"
                        location="Kokkola, Finland"
                        graduationDate={2024}
                        gpa={3.14}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
