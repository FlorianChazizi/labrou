"use client"
import React from 'react'
import { useEffect } from 'react';

import '../styles/hero.css';

const Hero = () => {



  return (
    <div>
      <section className="hero">
        {/* Blurry overlay */}
        <div className="hero-overlay"></div>

        {/* Hero content */}
        <div className="hero-content ">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 shine-text" >
          Ξυλουργικές εργασίες πάντως τύπου
          </h2>
          <h3 className="text-lg md:text-xl text-white" >
          Ξυλουργικές Εργασίες Λάμπρου
          </h3>
          <a href="#contact" className="hero-button"  >
            Επικοινωνια
          </a>        
        </div>
      </section>
    </div>
  )
}

export default Hero;