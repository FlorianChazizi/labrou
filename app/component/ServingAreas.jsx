"use client";
import { useEffect } from "react";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import '../styles/servingAreas.css';

export default function ServiceAreas() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can set the duration and other settings
  }, []);
  
  const areas = [
    { name: "Αττική", gradient: "from-[#8B5A2B] to-[#D2B48C]" }, // Wood brown
    { name: "Ναύπκατο", gradient: "from-[#2F4F4F] to-[#A9A9A9]" }, // Earthy green-gray
    { name: "Εύβοια", gradient: "from-[#4B3621] to-[#C0A080]" }, // Dark wood to soft beige
  ];

  return (
    <section className="min-h-[500px] py-16 flex items-center justify-center serving" id="area">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-8 text-white"data-aos="fade-down">Εξυπηρετούμε</h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className={`p-6 rounded-xl text-white text-lg font-semibold shadow-lg bg-gradient-to-br ${area.gradient} transition-all duration-300 hover:scale-105`}
            >
              {area.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
