"use client";

import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="bg-[#1B2430] text-white py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#A4D037] font-accent">Επικοινωνία</h2>
                <p className="text-lg mt-2 text-gray-300">Είμαστε εδώ για εσάς! Επικοινωνήστε μαζί μας.</p>

                {/* Contact Info */}
                <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
                    {/* Contact Details */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-center space-x-4">
                            <FaEnvelope className="text-[#A4D037] text-2xl" />
                            <a href="mailto:lambrouup@gmail.com
" className="text-lg hover:text-[#8BB52C]">
                                lambrouup@gmail.com

                            </a>
                        </div>

                        <div className="flex items-center justify-center space-x-4">
                            <FaPhone className="text-[#A4D037] text-2xl" />
                            <a href="tel:+306981069495" className="text-lg hover:text-[#8BB52C]">
                                +30 6981069495
                            </a>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d785.7649492829871!2d23.693559056461062!3d38.02238540591823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1a315140be6e3%3A0x9062a19509e53cd8!2sAminta%206%2C%20Peristeri%20121%2035!5e0!3m2!1sen!2sgr!4v1740678285164!5m2!1sen!2sgr"
                            allowFullScreen
                            loading="lazy"
                            className="w-full h-full"

                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
