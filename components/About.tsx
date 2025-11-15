import { MapPin } from "lucide-react";
import React from "react";
import EducationCard from "./EducationCard";

const About = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-primary dark:text-white">
            <div className="max-w-7xl mx-auto px-6 p-5 flex flex-col gap-8">
                <span className="uppercase font-mono text-md">about me</span>
                <h1 className="uppercase font-sans font-bold text-[clamp(3rem,6vw,10rem)] text-primary dark:text-white">
                    Background
                </h1>
                <div className="flex flex-col gap-8 items-start lg:flex-row lg:items-center">
                    <div className="w-full flex flex-col gap-8">
                        <span className="font-sans text-lg leading-[2]">
                            Recent Information Technology graduate with hands on
                            experience building full-stack web applications
                            using JavaScript/TS, Node.js, React and Next.js.
                            Completed a frontend development internship where I
                            delivered production-ready features including secure
                            authentication and REST API integration. Strong
                            problem-solving skills, quick learner and eager to
                            learn and contribute as a developer.
                        </span>
                        <div className="flex items-center gap-3">
                            <span className="text-green">
                                <MapPin />
                            </span>
                            <span className="font-sans text-lg">
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
