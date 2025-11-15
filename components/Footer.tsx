import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
    return (
        <section className="bg-primary text-white py-10">
            <div className="max-w-7xl mx-auto px-6 pt-5 flex flex-col gap-8">
                <div className="flex md:flex-row md:items-center md:justify-between flex-col items-start gap-6">
                    <div className="flex flex-col items-start gap-4 w-full">
                        <Logo color="white" />
                        <span className="w-2/3">
                            {" "}
                            Software Developer specializing in modern web
                            technologies
                        </span>
                    </div>

                    <div className="flex items-center flex-row gap-6">
                        <a href="https://github.com/APNpandit611" target="_blank">
                            <Github className="hover:text-green-hover cursor-pointer hover:-translate-y-2 transform-all duration-150" />
                        </a>
                        <a href="https://www.linkedin.com/in/abhishek-pandit-02544415a" target="_blank">
                            <Linkedin className="hover:text-green-hover cursor-pointer hover:-translate-y-2 transform-all duration-150" />
                        </a>
                        <a  href={`mailto:${"apnpanditt@gmail.com"}`} target="_blank">
                            <Mail className="hover:text-green-hover cursor-pointer hover:-translate-y-2 transform-all duration-150" />
                        </a>
                    </div>
                </div>

                <hr className="my-4 border-gray-200 opacity-15" />

                <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wide text-background font-mono opacity-40 w-1/2">
                        © {new Date().getFullYear()} ABHISHEK PANDIT. ALL RIGHTS
                        RESERVED.
                    </span>
                    <span className="text-xs uppercase tracking-wide text-background font-mono opacity-40 ">
                        made with love
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Footer;
