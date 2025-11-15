import { MapPin } from "lucide-react";
import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-background dark:bg-primary dark:text-background">
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-8">
                <span className="uppercase font-mono text-md">
                    work history
                </span>
                <h1 className="uppercase font-sans font-bold text-[clamp(3rem,6vw,10rem)] text-primary dark:text-background">
                    Experience
                </h1>
                <ExperienceCard
                    role="Frontend Developer Intern"
                    location="Helsinki, Finland"
                    employer="ipark Oy"
                    mode="remote"
                    startDate="dec 2024"
                    endDate="jan 2025"
                    experience={[
                        "Developed an admin dashboard and EV charging webstore frontend using React.js Tailwind CSS, Shadcn UI and Material UI.",
                        "Integrated REST APIs with Node.js/Express.js, MongoDB for data management, and Cloudinary for media storage.",
                        "Implemented secure authentication with JWT and optimized state management with Redux Toolkit.",
                    ]}
                />
                <ExperienceCard
                    role="Production Food Worker"
                    location="Edsevo, Finland"
                    employer="Fresh Servant Oy"
                    mode="onsite"
                    startDate="mar 2022"
                    experience={[
                        "Gained excellent team work experiences",
                        "Working under pressure in a high paced environment",
                        "Daily target oriented work",
                        "A part-time job for survival"
                    ]}
                />
                
            </div>
        </section>
    );
};

export default Experience;
