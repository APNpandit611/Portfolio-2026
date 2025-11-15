import BouncingArrow from "./BouncingArrow";

const HeroSection = () => {
    return (
        <section id="hero" className="bg-grid h-[100vh] overflow-hidden pt-32 bg-background dark:bg-primary dark:text-background">
            <div className="max-w-7xl mx-auto px-6 pt-5 flex flex-col gap-10">
                <span className="uppercase font-mono text-md">
                    software developer
                </span>

                <div className="flex flex-col w-full leading-[1]">
                    <span className="uppercase font-sans font-bold text-[clamp(4rem,15vw,10rem)]">
                        abhishek
                    </span>
                    <span className="uppercase font-sans font-bold text-[clamp(4rem,15vw,10rem)]">
                        pandit
                    </span>
                </div>

                <h2 className="w-full text-4xl font-sans md:w-[70%] leading-[1.3]">
                    Building scalable web applications with modern technologies
                </h2>

                <div className="flex gap-4">
                    <a
                        href={`mailto:${"apnpanditt@gmail.com"}`}
                        className="border border-green bg-green p-4 px-8 uppercase font-mono text-sm hover:bg-green-hover"
                    >
                        get in touch
                    </a>
                    <a
                        href={"https://github.com/APNpandit611"}
                        target="_blank"
                        className="border border-primary dark:border-background p-4 px-8 uppercase font-mono text-sm hover:bg-border_light"
                    >
                        view github
                    </a>
                </div>
                <a href="#about">
                    <BouncingArrow />
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
