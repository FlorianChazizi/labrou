"use client";

import Image from "next/image";

const services = [
  { title: "Kitchen Cabinets", img: "/images/lux-banner-2.jpg" },
  { title: "Bedroom Wardrobes", img: "/images/lux-banner-2.jpg" },
  { title: "Bathroom", img: "/images/lux-banner-2.jpg" },
  { title: "Office", img: "/images/lux-banner-2.jpg" },
];

export default function Services() {
    return (
      <section className="py-16 bg-gray-100" id="services">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Υπηρεσίες</h2>
  
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
              >
                {/* Service Image */}
                <Image
                  src={service.img}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
  
                {/* Text Overlay with Hover Effect */}
                <div className="absolute bottom-0 w-full bg-black/50 text-white text-lg font-semibold py-3 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:py-6">
                  {service.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }