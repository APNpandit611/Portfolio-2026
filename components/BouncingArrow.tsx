import React from "react";

const BouncingArrow = () => {
    return (
        <div className="flex flex-col items-center mt-12 animate-bounce cursor-pointer md:mt-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 text-gray-700 dark:text-background"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {/* Vertical tail line */}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v15" />
    {/* Downward arrow head */}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 15l6 6 6-6" />
  </svg>
</div>

    );
};

export default BouncingArrow;
