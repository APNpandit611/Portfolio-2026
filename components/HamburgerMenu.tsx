// components/Navbar.tsx
"use client"; // Add this because we are using useState

import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { navbarItems } from "@/utils/data";
import Switch from "./ToggleButton";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu
    };

    return (
        <div className="relative md:hidden mb-0">
            {/* ICON BUTTON */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative bottom-5 right-5 "
            >
                <MenuIcon
                    className={`absolute inset-0 transition-all duration-300  ${
                        isOpen
                            ? "opacity-0 rotate-90 scale-50"
                            : "opacity-100 rotate-0 scale-100"
                    }`}
                />
                <X
                    className={`absolute inset-0 transition-all duration-300 w-6 h-6 ${
                        isOpen
                            ? "opacity-100 rotate-0 scale-100"
                            : "opacity-0 -rotate-90 scale-50"
                    }`}
                />
            </button>

            {/* DROPDOWN (Animated) */}
            <div
                className={`
                    fixed left-0 w-full bg-white shadow-lg border-b border-gray-300 z-40 mt-[1px]
                    transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                    overflow-hidden dark:bg-primary
                    ${
                        isOpen
                            ? "top-[72px] max-h-96 opacity-100"
                            : "top-[72px] max-h-0 opacity-0"
                    }
                `}
            >
                <div
                    className={`
                        p-4 transition-all duration-300 max-w-7xl mx-auto px-8 mb-1
                        ${isOpen ? "translate-y-0" : "-translate-y-4"}
                    `}
                >
                    {navbarItems.map((item) => (
                        <Link
                            key={item}
                            href={`#${item}`}
                            onClick={handleLinkClick}
                            className="block py-3 font-mono text-gray-800 hover:text-green-500 transition-colors duration-300 dark:text-white"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                    ))}
                    <div className="mt-3">
                        <Switch />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;
