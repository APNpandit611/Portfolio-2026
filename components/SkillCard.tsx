import { Code2 } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

type SkillCardProps = {
    title: string;
    content: string[];
    icon: React.ComponentType<{className?: string}>;
};

const SkillCard: FC<SkillCardProps> = ({ title, content, icon:Icon }) => {
    return (
        <div className="bg-white dark:bg-primary dark:text-background shadow-sm border border-gray-100 rounded-lg p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-200 leading-[2.5] w-full sm:w-[48%] lg:w-[31%] flex flex-col gap-3">
            {/* Header with icon */}

            <div className="flex items-center gap-3 mb-2">
                <Icon/>
                <span className="text-sm uppercase tracking-wide font-mono">
                    {title}
                </span>
            </div>

            <div className="flex flex-row gap-4 flex-wrap">
                {content.map((item, index) => (
                    <span
                        key={index}
                         className="
                        p-3 w-full text-xs uppercase font-mono border transition-all duration-200 cursor-pointer
                        // --- Base & Interactive ---
                        hover:translate-x-2

                        // --- Light Mode Styles ---
                        bg-white text-primary border-secondary hover:bg-green-hover odd:bg-border_light 

                        // --- Dark Mode Styles ---
                        dark:bg-primary dark:text-background dark:border-background dark:hover:bg-primary-hover
                    "
                        // className="even:bg-border_light odd:bg-white text-xs text-primary uppercase font-mono p-3 border dark:border-background border-secondary w-full hover:bg-green-hover cursor-pointer hover:translate-x-2 transition-all duration-200 dark:bg-primary dark:text-background"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
