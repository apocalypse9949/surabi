import React from 'react'
import './Needs.css';
const needs = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379751/needs_txrawi.png';
const needsmob = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379755/needsmob_hypuu5.png';

const Needs = () => {
  return (
    <div className="needs-cont">
    <div>
       <img src={needs} alt="" className="" />
    </div>
    <div className="needsmob">
    <img src={needsmob} alt="" className="" />
    </div>
    </div>

  )
}

export default Needs;
