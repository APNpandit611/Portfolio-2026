import React from 'react'
import SkillCard from './SkillCard'
import { Code, Database, Layers, Server, Wrench } from 'lucide-react'

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background dark:bg-primary dark:text-background">
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-8">
                <span className="uppercase font-mono text-md">
                    Technical expertise
                </span>
                <h1 className="uppercase font-sans font-bold text-[clamp(3rem,6vw,10rem)] text-primary dark:text-background">
                    Skills
                </h1>
                <div className="flex gap-4 flex-wrap">
                    <SkillCard title='Languages' content={["javascript (es6+)", "typescript", "python", "C/C++"]} icon={Code}/>
                    <SkillCard title='Frontend' content={["React.js", "next.js", "tailwindcss", "shadcn ui", "material ui", "bootstrap"]} icon={Layers}/>
                    <SkillCard title='backend' content={["node.js", "express.js", "rest api", "jwt", "oauth", "prisma"]} icon={Server}/>
                    <SkillCard title='databases' content={["mongodb", "postgreSql", "mysql"]} icon={Database}/>
                    <SkillCard title='tools & others' content={["Git", "redux toolkit", "cloudinary", "figma", "powertools", "openai", "openrouter"]} icon={Wrench}/>
                </div>
            </div>
        </section>
  )
}

export default Skills
