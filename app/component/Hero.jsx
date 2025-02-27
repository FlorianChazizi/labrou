"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/images/lux-banner-1.jpg",
  "/images/lux-banner-2.jpg",
  "/images/lux-banner-3.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
    pauseAutoSlide();
  };

  const goToPrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    pauseAutoSlide();
  };

  const pauseAutoSlide = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index]}
            className="absolute w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={images[index]}
              alt="Luxury Interior"
              fill // Automatically scales the image
              sizes="100vw" // Ensures full width on mobile & desktop
              priority // Improves loading speed
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Blurry Bottom Text Box */}
      <div className="absolute bottom-0 left-0 w-full bg-black/30 backdrop-blur-md text-white p-6 text-center">
        <h1 className="text-2xl md:text-6xl font-bold">Custom Luxury Woodwork</h1>
        <p className="mt-2 text-sm md:text-xl">
          Handcrafted Cabinets for Kitchens, Bedrooms & More.
        </p>
      </div>

      {/* Slider Controls */}
      <button onClick={goToPrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full">
        <FaChevronLeft size={24} />
      </button>
      <button onClick={goToNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full">
        <FaChevronRight size={24} />
      </button>
    </section>
  );
}
