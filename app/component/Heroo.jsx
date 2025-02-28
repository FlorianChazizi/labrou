"use client"
import React from 'react'
import { useEffect } from 'react';

import '../styles/hero.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const Hero = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can set the duration and other settings
  }, []);


  return (
    <div>
      <section className="hero">
        {/* Blurry overlay */}
        <div className="hero-overlay"></div>

        {/* Hero content */}
        <div className="hero-content " data-aos="fade-up">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 shine-text font-accent" >
          Ξυλουργικές εργασίες πάντως τύπου
          </h2>
          <h3 className="text-lg md:text-xl text-white font-primary" >
          Ξυλουργικές Εργασίες Λάμπρου
          </h3>
          <a href="#contact" className="hero-button font-primary"  >
            Επικοινωνια
          </a>        
        </div>
      </section>
    </div>
  )
}

export default Hero;