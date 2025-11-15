import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <About/>
      <Experience/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
  );
}
