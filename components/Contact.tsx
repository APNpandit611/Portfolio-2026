import { profileData } from "../utils/data";
import {
    Mail,
    Github,
    Linkedin,
    PhoneCall,
} from "lucide-react";
import ContactFormUI from "./ContactForm";

const Contact = () => {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: '',
    // });
    // const [isSubmitted, setIsSubmitted] = useState(false);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log('Form submitted:', formData);
    //     setIsSubmitted(true);
    //     setTimeout(() => {
    //         setIsSubmitted(false);
    //         setFormData({ name: '', email: '', message: '' });
    //     }, 3000);
    // };

    return (
        // --- Main Section ---
        <section id="contact" className="py-24 bg-white dark:bg-primary dark:text-background">
            <div className="max-w-7xl mx-auto px-6 p-5 flex flex-col gap-8">
                <span className="uppercase font-mono text-md">
                    get in touch
                </span>
                <h1 className="uppercase font-sans font-bold text-[clamp(3rem,6vw,10rem)] text-primary dark:text-background">
                    Contact
                </h1>
                <div className="flex flex-col gap-8 items-start lg:flex-row lg:items-center">
                    <div className="w-full flex flex-col gap-8">
                        <span className="font-sans text-lg leading-[2] dark:text-background">
                            I am always open to discussing new projects,
                            creative ideas, or opportunities to be part of your
                            vision.
                        </span>

                        
                            <a href={`mailto:${profileData.email}`}className="w-fit font-sans text-lg flex items-center gap-3">
                                <Mail className="text-green" />
                                {profileData.email}
                            </a>
                            <a href={`tel:${profileData.email}`}className="w-fit font-sans text-lg flex items-center gap-3">
                                <PhoneCall className="text-green" />
                                {profileData.phone}
                            </a>
                            <a href={profileData.github} target="_blank" className="w-fit font-sans text-lg flex items-center gap-3">
                                <Github className="text-green" />
                                Github Profile
                            </a>
                            <a href={profileData.linkedin} target="_blank" className="w-fit font-sans text-lg flex items-center gap-3">
                                <Linkedin className="text-green" />
                                LinkedIn Profile
                            </a>
                        
                        
                    </div>
                    <ContactFormUI/>
                </div>
            </div>
        </section>
    );
};

export default Contact;
