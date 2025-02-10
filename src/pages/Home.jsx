import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
const video1 = 'https://res.cloudinary.com/ds18h1q0k/video/upload/v1735379791/vid1_wltntt.mp4';
const video2 = 'https://res.cloudinary.com/ds18h1q0k/video/upload/v1735379794/surabhi2_ic7skj.mp4';
const y2024i =  'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379758/2024i_b6r9hy.jpg';
const y2023i = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379758/2023i_dp6r0u.jpg';
const y2022i = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735380198/2022i_ihzcmw.jpg';
const blur = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379771/Rectangle_2_satwlt.png';


const underline = '';
const g1 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379767/g1_gth4yu.jpg';
const g2 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379766/g2_nwtfyi.jpg';
const g3 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379765/g3_ccux51.jpg';
const g4 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735380176/g4_be5vwm.jpg';
const g5 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379764/g5_kfp48m.jpg';
const g6 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379762/g6_qeve0t.jpg';
const g7 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379751/g7_sqofuv.jpg';
const g8 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379761/g8_zzrckr.jpg';
const g9 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379751/g9_dyrmfz.jpg';
const g10 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379760/g10_zneydh.jpg';
const g11 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379759/g11_yvh7me.jpg';
const y2024 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379757/2024_blyzpk.png';
const y2023 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379754/2022_r8jbik.png';
const y2022 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379754/2022_r8jbik.png';
const corg = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1736089836/fdvsd_ntnhjg.png';
import Footer from './footer';
import Lenis from '@studio-freight/lenis';

const surabhi = 'https://res.cloudinary.com/dzcnlhofn/image/upload/v1739010890/qrieq0ptxvpqstigkb0e.png'; // Replace with your actual Surabhi logo URL

const Home = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-02-28T00:00:00');
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      console.log('Difference:', difference);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      console.log('Days:', days, 'Hours:', hours, 'Minutes:', minutes, 'Seconds:', seconds);

      setCountdown({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      tablet: {
        smooth: true,
        breakpoint: 768
      },
      smartphone: {
        smooth: false
      }
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const recapElements = document.querySelectorAll('.recap');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.1
    });

    recapElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      recapElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="home-container">
      <div className="header">
      <video
          id="videos"
          className="header-video"
          src={video2}
          autoPlay
          muted
          loop
        />
      </div>

      <div className="headline">
        <img src={surabhi} alt="Surabhi" style={{ marginBottom: '0' }} />
      </div>

      <div className="blur" style={{ marginTop: '0' }}>
        <img src={blur} alt="" className="blur" />
      </div>

      <div className="timer" style={{ marginTop: '-20px' }}>
        <div className="countdown-wrapper">
          <div className="countdown-item">
            <div className="countdown-value">
              <span className="number">{countdown.days}</span>
              <div className="countdown-border"></div>
            </div>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">
              <span className="number">{countdown.hours}</span>
              <div className="countdown-border"></div>
            </div>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">
              <span className="number">{countdown.minutes}</span>
              <div className="countdown-border"></div>
            </div>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">
              <span className="number">{countdown.seconds}</span>
              <div className="countdown-border"></div>
            </div>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>

      <div className="what1">
        <h1>SURABHI TEASER</h1>
        <img src={underline} alt="" className="undeline" />
       
      </div>

      <div className="video-container">
       
        <video
          id="videos"
          src={video1}
          autoPlay
          muted
          loop
        />
      </div>
      
      <div className="what1">
        <h1>What is Surabhi?</h1>
        <img src={underline} alt="" className="undeline" />
        <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. With renowned artists and exceptional student talent, this event embodies diversity in a supportive and vibrant environment. This year, we are dedicated to overcoming past challenges to ensure an enriched experience for participants and attendees.</p>
      </div>


      <ParticipationSteps />

      <div className="guests" style={{ marginTop: '-50px' }}>
        <h1>Our Guests</h1>
        <img src={underline} alt="" className="undeline" />
        <div className="imgscroll">
          <img src={g1} alt="" className="guest-img" style={{ width: '300px', height: '300px', transition: 'transform 0.3s ease' }} />
          <img src={g2} alt="" className="guest-img" style={{ width: '300px', height: '300px', transition: 'transform 0.3s ease' }} />
          <img src={g3} alt="" className="guest-img" style={{ width: '300px', height: '300px', transition: 'transform 0.3s ease' }} />
          <img src={g4} alt="" className="guest-img" style={{ width: '300px', height: '300px', transition: 'transform 0.3s ease' }} />
          <img src={g5} alt="" className="guest-img" style={{ width: '300px', height: '300px', transition: 'transform 0.3s ease' }} />
          <img src={g6} alt="" className="guest-img" style={{ width: '300px', height: '300px', transition: 'transform 0.3s ease' }} />
          <img src={g7} alt="" className="guest-img" style={{ width: '300px', height: '300px', transition: 'transform 0.3s ease' }} />
          <img src={g8} alt="" className="guest-img" style={{ width: '300px', height: '300px', transition: 'transform 0.3s ease' }} />
          <img src={g9} alt="" className="guest-img" style={{ width: '300px', height: '300px', transition: 'transform 0.3s ease' }} />
          <img src={g10} alt="" className="guest-img" style={{ width: '300px', height: '300px', transition: 'transform 0.3s ease' }} />
          <img src={g11} alt="" className="guest-img" style={{ width: '300px', height: '300px', transition: 'transform 0.3s ease' }} />
        </div>
        <img src={underline} alt="" className="undeline" />
      </div>

      <div className="what1">
        <h1>Why attend Surabhi?</h1>
        <img src={underline} alt="" className="undeline" />
        <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. With renowned artists and exceptional student talent, this event embodies diversity in a supportive and vibrant environment. This year, we are dedicated to overcoming past challenges to ensure an enriched experience for participants and attendees.</p>
      </div>

      <div className="years">
        <div className="timeline-light"></div>
        <div className="timeline-light"></div>
        <div className="timeline-light"></div>
        
        <h1 className="participation-heading">Our Journey</h1>
        <div className="year-container">
          <div className="year-header">
            <div className="year-number">2024</div>
            <h2>Surabhi</h2>
          </div>
          <div className="year-description">
            <p>A grand celebration of culture and creativity, featuring renowned artists and exceptional performances.</p>
          </div>
          <div className="year-gallery">
            <img src={y2024i} alt="2024 Event Highlight" className="year-image large-image" />
          </div>
        </div>

        <div className="year-container">
          <div className="year-header">
            <div className="year-number">2023</div>
            <h2>Surabhi</h2>
          </div>
          <div className="year-description">
            <p>A milestone year that brought together diverse talents and unforgettable moments.</p>
          </div>
          <div className="year-gallery">
            <img src={y2023i} alt="2023 Event Highlight" className="year-image large-image" />
          </div>
        </div>

        <div className="year-container">
          <div className="year-header">
            <div className="year-number">2022</div>
            <h2>Surabhi</h2>
          </div>
          <div className="year-description">
            <p>The beginning of a legacy, setting new standards in cultural excellence.</p>
          </div>
          <div className="year-gallery">
            <img src={y2022i} alt="2022 Event Highlight" className="year-image large-image" />
          </div>
        </div>
      </div>

      <div className="what1">
        <h1>Associated Partners</h1>
        <img src={underline} alt="" className="head" />
        <div className="comps">
          <div className="comp">
            <img src={corg} alt="" className="" />
          </div>
          <div className="comp">
            <img src={corg} alt="" className="" />
          </div>
         
        </div>  
      </div>

      <div className="recap" style={{ marginTop: '-50px' }}>
        <h1>Event Recap</h1>
        <div className="imgscroll">
          <img 
            src={y2024i} 
            alt="2024 event" 
            className="recap-img" 
            style={{ width: '300px', height: '300px', transition: 'transform 0.3s ease' }} 
          />
          <img 
            src={y2023i} 
            alt="2023 event" 
            className="recap-img" 
            style={{ width: '300px', height: '300px', transition: 'transform 0.3s ease' }} 
          />
          <img 
            src={y2022i} 
            alt="2022 event" 
            className="recap-img" 
            style={{ width: '300px', height: '300px', transition: 'transform 0.3s ease' }} 
          />
        </div>
      </div>

      <div className="map-section">
        <h1>Event Location</h1>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.7959580545244!2d80.62035799999999!3d16.441852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a073957d%3A0xe79d66babc83e470!2sK%20L%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1708101165651!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="KL University Location"
          ></iframe>
          <a href="https://www.google.co.in/maps/place/K+L+UNIVERSITY,+Vaddeswaram,+Andhra+Pradesh+522303/@16.4418519,80.620358,17z/data=!3m1!4b1!4m6!3m5!1s0x3a35f0a2a073957d:0xe79d66babc83e470!8m2!3d16.4415213!4d80.6222849!16s%2Fg%2F1hjh4_l12" 
            target="_blank" 
            rel="noopener noreferrer">
            Open in Google Maps
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const ParticipationSteps = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    document.querySelectorAll('.participation-step').forEach((step) => {
      observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Explore Events",
      description: "Discover our diverse range of cultural events and competitions designed to showcase your unique talents and creativity.",
    },
    {
      number: "02",
      title: "Choose Your Category",
      description: "Select from various categories including dance, music, drama, and art. Pick the perfect platform to express your artistic vision.",
    },
    {
      number: "03",
      title: "Register Online",
      description: "Complete a simple registration process through our user-friendly platform. Secure your spot in your chosen events early.",
    },
    {
      number: "04",
      title: "Review Guidelines",
      description: "Carefully read through event-specific guidelines, rules, and requirements to ensure you're fully prepared for participation.",
    },
    {
      number: "05",
      title: "Mark Your Calendar",
      description: "Note important dates, rehearsal schedules, and performance timings. Plan your Surabhi journey for maximum impact.",
    },
    {
      number: "06",
      title: "Showcase Your Talent",
      description: "Take the stage, express yourself, and be part of this grand celebration of art and culture at KL University.",
    },
  ];

  return (
    <div className="participation-container">
      <h1 className="participation-heading">How to Participate?</h1>
      <div className="participation-grid">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="participation-step"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="step-card">
              <div className="step-number-container">
                <div className="step-number">{step.number}</div>
              </div>
              <div className="step-content">
                <h2 className="step-title">{step.title}</h2>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 