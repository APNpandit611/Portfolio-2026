import { NavbarItem } from "./index";
export const navbarItems:NavbarItem[] = [
    "about",
    "experience",
    "projects",
    "skills",
    "contact",
];

export const profileData = {
  name: "ABHISHEK PANDIT",
  role: "Software Developer",
  location: "Kokkola, Finland",
  tagline: "Building scalable web applications with modern technologies",
  email: "apnpanditt@gmail.com",
  phone: "(+358) 449828209",
  github: "https://github.com/APNpandit611",
  linkedin: "https://www.linkedin.com/in/abhishek-pandit-02544415a",
  summary: "Recent Information Technology graduate with hands on experience building full-stack web applications using JavaScript/TS, Node.js, React and Next.js. Completed a frontend development internship where I delivered production-ready features including secure authentication and REST API integration. Strong problem-solving skills, quick learner and eager to learn and contribute as a developer."
};

export const experienceData = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "Ipark OY",
    location: "Helsinki, Finland",
    duration: "Dec 2024 – Jan 2025",
    type: "Remote",
    responsibilities: [
      "Developed an admin dashboard and EV charging webstore frontend using React.js Tailwind CSS, Shadcn UI and Material UI.",
      "Integrated REST APIs with Node.js/Express.js, MongoDB for data management, and Cloudinary for media storage.",
      "Implemented secure authentication with JWT and optimized state management with Redux Toolkit."
    ]
  },
  {
    id: 2,
    role: "Production Worker",
    company: "Fresh Salad Oy Ab",
    location: "Edsevö, Finland",
    duration: "Jan 2022 - Present",
    type: "Part-time",
    responsibilities: [
      "Part-time working in a high paced food factory."
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Feedbook",
    description: "Social platform where users can create, share, and react to posts. Implemented secure login with JWT and used MongoDB for scalable data storage. Deployed fullstack app showcasing CRUD functionality and interactive UI.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    category: "MERN Stack",
    featured: true
  },
  {
    id: 2,
    title: "Codiz",
    description: "Developed a code quiz generator with clerk authentication in Next.js. Implemented Nemotron Nano model from openrouter to generate quiz.",
    technologies: ["Next.js", "Clerk Auth", "OpenRouter AI", "Nemotron Nano"],
    category: "AI Application",
    featured: true
  },
  {
    id: 3,
    title: "Image.me",
    description: "Image generation application using OpenAI gpt-5 image mini.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary", "OpenAI"],
    category: "MERN + AI",
    featured: true
  }
];

export const skillsData = {
  languages: ["JavaScript (ES6+)", "TypeScript", "Python", "C/C++"],
  frontend: ["React.js", "Next.js", "TailwindCSS", "Shadcn UI", "Material UI", "Bootstrap"],
  backend: ["Node.js", "Express.js", "REST APIs", "JWT/OAuth"],
  databases: ["MongoDB", "PostgreSQL", "MySQL"],
  tools: ["Git", "Redux Toolkit", "Cloudinary", "Figma", "OpenAI", "OpenRouter"]
};

export const educationData = {
  degree: "BE in Information Technology",
  university: "Centria University of Applied Sciences",
  location: "Kokkola, Finland",
  graduation: "June 2024",
  gpa: "3.14 / 5"
};
