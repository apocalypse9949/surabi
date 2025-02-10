import React from 'react';
import './Eventslist.css';
const alleve = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379754/allevents_f2vux6.png';
const allevemob = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379750/alleventsmob_cihtcy.png';
const footer = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379767/footer_cvrjgz.png';

const Eventslist = () => {
  return (
    <div className="eventslist-container">
      <div className="alllist">
        <img src={alleve} alt="" className="alleve" />          
      </div>

      <div className="alllistm">
       <img src={allevemob} alt="" className="allevemob" />    
      </div>

      <div className="footer">
        <img src={footer} alt="" className="footer" />
      </div>
    </div>
  );
};

export default Eventslist; 