import { Code, Code2, Code2Icon, ExternalLink, Github } from "lucide-react";
import React, { FC } from "react";

type ProjectCardProps = {
    techstack: string;
    name: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
};

const ProjectCard: FC<ProjectCardProps> = ({
    techstack,
    name,
    description,
    technologies,
    githubLink,
    liveLink,
}) => {
    return (
        // <div className=" bg-white shadow-sm border border-gray-100 rounded-lg p-6 hover:shadow-lg transition-all duration-200 leading-[2.5] w-full sm:w-[48%] lg:w-[31%]">
        //     {/* Header with icon */}

        //     <div className="flex items-center gap-2 mb-2">
        //         <Code2 className="text-green" />
        //         <span className="text-sm uppercase tracking-wide font-mono">
        //             {techstack}
        //         </span>
        //     </div>

        //     <h3 className="text-3xl font-sans font-semibold text-primary mb-1">
        //         {name}
        //     </h3>

        //     <p className="text-md text-secondary my-6">{description}</p>

        //     <hr className="my-4 border-gray-200" />

        //     <div className=" flex-col gap-4 mt-auto">
        //         <span className="text-sm uppercase tracking-wide text-secondary font-mono">
        //             technologies
        //         </span>
        //         <div className="flex flex-row gap-2 flex-wrap">
        //             {technologies.map((item, index) => (
        //                 <span
        //                     key={index}
        //                     className="text-xs bg-border_light text-primary uppercase font-mono p-3 border border-secondary w-fit"
        //                 >
        //                     {item}
        //                 </span>
        //             ))}
        //         </div>
        //     </div>
        // </div>

        <div className="bg-white dark:bg-primary dark:text-background shadow-sm border border-gray-100 rounded-lg p-6 hover:-translate-y-2 hover:shadow-lg transition-all duration-200 leading-[2.5] w-full sm:w-[48%] lg:w-[31%] flex flex-col justify-between">
            {/* Header with icon */}
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <Code2 className="text-green" />
                    <span className="text-sm uppercase tracking-wide font-mono ">
                        {techstack}
                    </span>
                </div>

                <h3 className="text-3xl font-sans font-semibold text-primary mb-1 dark:text-background">
                    {name}
                </h3>

                <p className="text-md text-secondary mt-6 mb-2 dark:text-background">
                    {description}
                </p>

                {/* --- BONUS: Added the links section --- */}
                <div className="flex gap-6 items-center">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-md text-primary hover:underline font-mono dark:text-background"
                    >
                        <Github size={18} />
                        Code
                    </a>
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-primary hover:underline dark:text-background"
                    >
                        <ExternalLink size={18} />
                        Live Demo
                    </a>
                </div>
            </div>
            {/* --- 2. Added mt-auto to push this div to the bottom --- */}
            <div>
                <hr className="my-4 border-gray-200 mt-auto" />{" "}
                {/* This hr now pushes the tech section down */}
                <div className="flex flex-col gap-4 mt-auto">
                    <span className="text-sm uppercase tracking-wide text-secondary font-mono dark:text-background">
                        technologies
                    </span>
                    <div className="flex flex-row gap-2 flex-wrap">
                        {technologies.map((item, index) => (
                            <span
                                key={index}
                                className="text-xs bg-border_light dark:bg-primary dark:text-background text-primary uppercase font-mono p-3 border border-secondary dark:border-background w-fit"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
