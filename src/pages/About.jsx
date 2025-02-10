import React from 'react';
import './About.css';
import Footer from './footer';
const underline = '';
const event = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735380954/cmgsoon_bo9wmm.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="head">
        <h1>About Surabhi</h1>
        <img src={underline} alt="" className="head" />
        <p>Surabhi 2025 is a two-day national cultural festival at KL University, designed to spotlight the immense talent, creativity, and passion of students from across the country. This grand event is a harmonious blend of tradition and modernity, bringing to life the magic of music, the grace of dance, the depth of drama, and the beauty of artistic expressions in an atmosphere of unparalleled vibrancy.

          With captivating performances by nationally renowned artists and awe-inspiring acts by students, Surabhi 2025 transcends mere entertainment, offering a unique space for cultural exchange and creative exploration. Attendees will experience an array of events, including live concerts, theatrical performances, art exhibitions, and interactive workshops, each crafted to ignite imagination and celebrate diversity.

          Surabhi 2025 isn't just a fest; it's a journey into the heart of culture, where ideas meet inspiration, and every participant contributes to the colorful tapestry of a shared creative spirit. Prepare for two unforgettable days of excitement, collaboration, and memories that will last a lifetime.</p>
      </div>

      <div className="team">
        <h1>Team Surabhi 2025</h1>
        <img src={underline} alt="" className="head" />
        <div className="teammem">
          <img src={event} alt="Team Surabhi 2025" className="group-photo" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About; 