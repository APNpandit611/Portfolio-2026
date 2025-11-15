import { GraduationCap } from "lucide-react";
import { FC } from "react";

type EducationCardProps = {
    degree: string;
    university: string;
    location: string;
    graduationDate: number;
    gpa: number;
};

const EducationCard: FC<EducationCardProps> = ({
    degree,
    university,
    location,
    graduationDate,
    gpa,
}) => {
    return (
        <div className="bg-white dark:bg-primary dark:text-white shadow-sm border border-gray-100 rounded-lg p-6 w-full max-w-lg hover:-translate-y-2 hover:shadow-lg transition-all duration-200 leading-[2.5]">
            {/* Header with icon */}
            <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="text-green" />
                <span className="text-sm uppercase tracking-wide text-gray-500 font-mono dark:text-background">
                    Education
                </span>
            </div>

            {/* Degree */}
            <h3 className="text-3xl font-sans font-semibold text-primary dark:text-white mb-1">{degree}</h3>

            {/* University */}
            <p className="text-md text-primary dark:text-white">{university}</p>

            {/* Location & Date */}
            <p className="text-xs text-secondary uppercase mt-1 font-mono dark:text-background">
                {location} . {graduationDate}
            </p>

            {/* Divider */}
            <hr className="my-4 border-gray-200" />

            {/* GPA */}
            <div>
                <p className="text-xs text-background uppercase mb-1">GPA</p>
                <p className="text-lg font-bold">{gpa} / 5</p>
            </div>
        </div>
    );
};

export default EducationCard;
