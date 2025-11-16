import { Briefcase,Calendar1, Circle, Dot, MapPin } from "lucide-react";
import React, { FC } from "react";

type ExperienceCardProps = {
    role: string;
    startDate?: string;
    endDate?: string;
    employer: string;
    location: string;
    mode?: string;
    experience: string[];
};

const ExperienceCard: FC<ExperienceCardProps> = ({
    role,
    startDate,
    endDate,
    employer,
    location,
    mode,
    experience,
}) => {
    return (
        <div className="bg-white dark:bg-primary dark:text-background shadow-sm border border-gray-100 rounded-lg p-6 py-8 w-full hover:-translate-y-2 hover:shadow-lg transition-all duration-200">
            {/* Header with icon */}

            <div className="flex flex-col gap-3 justify-between mb-3 md:flex-row md:items-center">
                <h3 className="text-3xl font-sans font-semibold text-primary dark:text-background">
                    {role}
                </h3>
                <div className="flex items-center gap-2 dark:text-background">
                    <Calendar1 className="w-4 h-4 dark:text-background" />
                    <p className="uppercase text-xs text-secondary font-mono dark:text-background">
                        {" "}
                        {startDate} - {endDate ?? "ongoing"}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Briefcase className="text-green w-5 h-5" />
                <span className="text-xs uppercase tracking-wide text-primary font-mono dark:text-background">
                    {employer}
                </span>
                <div className="text-xs uppercase tracking-wide text-primary dark:text-background font-mono flex items-center gap-1">
                    <MapPin className="w-5 h-5" /> {location} . {mode}
                    <p className="text-xs text-secondary uppercase mt-1 font-mono "></p>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-4 border-gray-200" />

            {experience.map((item, index) => (
                <div key={index} className="flex items-center gap-4 mb-2">
                    <Dot className="text-green w-10 h-10 flex-shrink-0" />
                    <p className="text-lg font-sans">{item}</p>
                </div>
            ))}
        </div>
    );
};

export default ExperienceCard;
