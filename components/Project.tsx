import ProjectCard from "./ProjectCard";

const Project = () => {
    return (
        <section id="projects" className="py-24 bg-white dark:bg-primary">
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-8">
                <span className="uppercase font-mono text-md dark:text-background">
                    selected work
                </span>
                <h1 className="uppercase font-sans font-bold text-[clamp(3rem,6vw,10rem)] text-primary dark:text-background">
                    projects
                </h1>
                <div className="flex gap-4 flex-wrap">
                    <ProjectCard
                        techstack="Next.js + Postgres"
                        name="SportsSync"
                        description="An application where sport clubs can register and host tournaments, share live scores to the viewers. Built for Football and Cricket. "
                        technologies={[
                            "next.js",
                            "jwt",
                            "prisma",
                            "postgres",
                            "neondb"
                        ]}
                        liveLink="https://sportssync.cc/"
                        githubLink="https://github.com/APNpandit611/sportsync"
                    />

<ProjectCard
                        techstack="Next.js + OpenAI + TypeScript"
                        name="Codiz"
                        description="Codiz is an AI-powered code quiz generator built with Next.js, featuring secure Clerk authentication and dynamic quiz creation based on language and difficulty. It uses OpenAI/OpenRouter models to generate tailored questions, with Supabase and Prisma managing user data and quiz history."
                        technologies={[
                            "next.js",
                            "openrouter ai",
                            "open ai",
                            "clerk auth",
                            "ai model",
                            "prisma",
                            "postgres",
                            "supabase",
                            "typescript"
                        ]}
                        liveLink="https://ai-codiz.vercel.app/"
                        githubLink="https://github.com/APNpandit611/codiz"
                    />

                    <ProjectCard
                        techstack="Mern + GenAI"
                        name="Image.me"
                        description="Image.me is an AI-powered image generation app built with the MERN stack, using OpenAI’s GPT-5 Image Mini model to create high-quality visuals from user prompts. It features a React-based UI, secure Express/Node backend, and Cloudinary integration for efficient image storage and delivery."
                        technologies={[
                            "mongodb",
                            "express.js",
                            "node.js",
                            "react.js",
                            "cloudinary",
                            "openai (gpt-5 image mini)",
                        ]}
                        githubLink="https://github.com/APNpandit611/image-me"
                        liveLink="https://image-me.netlify.app/"
                    />

                    <ProjectCard
                        techstack="Nextjs + Prisma + NeonDB"
                        name="OmaKharcha"
                        description="OmaKharcha is a modern expense-tracking app built with Next.js, featuring secure Clerk authentication and clear budget insights. Spending data is visualized through interactive Recharts pie charts, while Prisma and NeonDB provide reliable, high-performance data management."
                        technologies={[
                            "next.js",
                            "prisma",
                            "node.js",
                            "react.js",
                            "tailwindcss",
                            "neonDB",
                            "recharts",
                            "clerk",
                            "typescript"
                        ]}
                        githubLink="https://github.com/APNpandit611/OmaKharcha"
                        liveLink="http://oma-kharcha.vercel.app/"
                    />

                    <ProjectCard
                        techstack="Nextjs + Prisma"
                        name="Todo Application"
                        description="A simple yet powerful todo app built with Next.js and Prisma, featuring task creation, archiving, restoration, and auto-deletion. The React + Tailwind UI keeps everything fast, minimal, and easy to use."
                        technologies={[
                            "next.js",
                            "prisma",
                            "node.js",
                            "react.js",
                            "tailwindcss",
                            "prismaORM",
                            "typescript"
                        ]}
                        githubLink="https://github.com/APNpandit611/todo"
                        liveLink="https://to-do-port.vercel.app/"
                    />

                    <ProjectCard
                        techstack="Next.js + Open-Mateo API"
                        name="Mausam"
                        description="A responsive weather application build for my mom in my native language (Nepali). Real time data using Open-Mateo weather API with next.js framework. Simple and clean UI for better user experience."
                        technologies={[
                            "next.js",
                            "open-mateo weather api",
                        ]}
                        githubLink="https://github.com/APNpandit611/weather-app-nepali"
                        liveLink="https://meromausam.netlify.app/"
                    />

                    <ProjectCard
                        techstack="Mern stack"
                        name="Feedbook"
                        description="Feedbook is a MERN-stack social platform where users can create posts, react, and manage their feed with ease. It features secure JWT/OAuth authentication, scalable MongoDB storage, Cloudinary media handling, and a responsive React UI powered by Redux Toolkit. The full app showcases smooth CRUD operations and modern API-driven design."
                        technologies={[
                            "MONGODB",
                            "EXPRESS.js",
                            "REACT.JS",
                            "node.js",
                            "jwt",
                            "oauth",
                            "redux-toolkit",
                            "cloudinary",
                            "Rest api",
                        ]}
                        githubLink="https://github.com/APNpandit611/feedbook"
                        liveLink="https://feedbook-48dd.onrender.com/"
                    />
                </div>
            </div>
        </section>
    );
};

export default Project;
