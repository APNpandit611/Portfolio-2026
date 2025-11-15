import React, { useState } from 'react';
// You can replace this with your preferred icon library
// import { MailIcon, UserIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { Mail, User, ChartArea, MessageCircle } from 'lucide-react';
import { CheckCircle2Icon } from 'lucide-react';

const ContactFormUI = () => {
    // State for demonstration purposes (to show the success message)
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000); // Hide message after 3 seconds
    };

    return (
        <div className="w-full max-w-lg mx-auto p-8 md:p-12 bg-white dark:bg-primary rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
            {!isSubmitted ? (
                <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Get in Touch</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Send a message and I will get back to you as soon as possible.
                        </p>
                    </div>

                    {/* Name Input */}
                    <div className="relative">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="peer w-full px-4 py-3 border-b-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-green-hover transition-colors duration-300"
                            placeholder="Your Name"
                        />
                        <label
                            htmlFor="name"
                            className="font-mono uppercase absolute left-2 -top-3.5 text-xs text-gray-600 dark:text-gray-400  px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-green-hover"
                        >
                            Your Name
                        </label>
                        <User className="absolute right-4 top-3 h-6 w-6 text-gray-400" />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="peer w-full px-4 py-3 pr-12 border-b-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-green-hover transition-colors duration-300"
                            placeholder="Your Email"
                        />
                        <label
                            htmlFor="email"
                            className="font-mono uppercase absolute left-2 -top-3.5 text-sm text-gray-600 dark:text-gray-400 px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-green-hover"
                        >
                            Your Email
                        </label>
                        <Mail className="absolute right-4 top-3 h-6 w-6 text-gray-400" />
                    </div>

                    {/* Message Textarea */}
                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            rows={2}
                            required
                            className="peer w-full px-4 py-3 border-b-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-green-hover transition-colors duration-300 resize-none"
                            placeholder="Your Message"
                        ></textarea>
                        <label
                            htmlFor="message"
                            className="font-mono uppercase absolute left-2 -top-3.5 text-sm text-gray-600 dark:text-gray-40 px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-green-hover"
                        >
                            Your Message
                        </label>
                        <MessageCircle className="absolute right-4 top-3 h-6 w-6 text-gray-400" />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="text-lg font-mono uppercase w-full px-6 py-3 bg-green-hover text-white font-bold rounded-lg shadow-md hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            ) : (
                
                <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 bg-green-100 dark:bg-green-900 rounded-full">
                        <CheckCircle2Icon className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Thank you for your message. I will be in touch with you shortly.
                    </p>
                </div>
            )}
        </div>
    );
};

export default ContactFormUI;
