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
                        techstack="Mern stack"
                        name="Feedbook"
                        description="Social platform where users can create, share, and react to posts. Implemented secure login with JWT and used MongoDB for scalable data storage. Deployed fullstack app showcasing CRUD functionality and interactive UI."
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

                    <ProjectCard
                        techstack="Next + GenAI"
                        name="Codiz"
                        description="Developed a code quiz generator with clerk authentication in Next.js. Implemented AI model to generate code quiz based on the language and difficulty level selected. Supabase backend with prisma to handle the user and quiz history saving."
                        technologies={[
                            "next.js",
                            "openrouter ai",
                            "open ai",
                            "clerk auth",
                            "ai model",
                            "prisma",
                            "postgres",
                            "supabase"
                        ]}
                        liveLink="https://codiz-sigma.vercel.app/"
                        githubLink="https://github.com/APNpandit611/codiz"
                    />

                    <ProjectCard
                        techstack="Mern + GenAI"
                        name="Image.me"
                        description="Image generation application using OpenAI gpt-5 image mini."
                        technologies={[
                            "mongodb",
                            "express.js",
                            "node.js",
                            "react.js",
                            "cloudinary",
                            "openai",
                        ]}
                        githubLink="https://github.com/APNpandit611/image-me"
                        liveLink="https://image-me.netlify.app/"
                    />
                </div>
            </div>
        </section>
    );
};

export default Project;
