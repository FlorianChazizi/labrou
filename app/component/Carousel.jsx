"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const images = [
  "/images/lamprou_1.jpg",
  "/images/lux-banner-2.jpg",
  "/images/Lamprou_2.jpg",
];
const leftArrow = "/images/left-arrow.png";
const rightArrow = "/images/right-arrow.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const startTouchX = useRef(0);
  const endTouchX = useRef(0);

  const slideTransition = (newIndex) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(newIndex);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const nextSlide = () => slideTransition((currentIndex + 1) % images.length);
  const prevSlide = () => slideTransition((currentIndex - 1 + images.length) % images.length);
  const setSlide = (index) => slideTransition(index);

  const handleTouchStart = (e) => {
    startTouchX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endTouchX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = startTouchX.current - endTouchX.current;
    if (delta > 50) nextSlide();
    else if (delta < -50) prevSlide();
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto pt-12 pb-12" id="erga">
      {/* Header Text */}
      <h2 className="text-3xl font-semibold text-center mb-6 text-neutral-500">Οι δουλιές μας</h2>

      {/* Carousel Container */}
      <div
        className="carousel relative w-full overflow-hidden rounded-lg"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <div
          className="carousel-inner flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-item w-full flex-shrink-0">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={1200}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <Image
          src={leftArrow}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer hidden md:block"
          height={45}
          width={45}
          alt="left arrow"
          onClick={prevSlide}
        />

        {/* Right Arrow */}
        <Image
          src={rightArrow}
          height={45}
          width={45}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer hidden md:block"
          alt="right arrow"
          onClick={nextSlide}
        />
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${
              currentIndex === index ? "bg-gray-900" : "bg-gray-500"
            }`}
            onClick={() => setSlide(index)}
            aria-label="Μετάβαση στη διαφάνεια"
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
