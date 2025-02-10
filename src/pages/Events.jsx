import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Events.css';
import { Link } from 'react-router-dom';
import Footer from './footer';
const event = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735380954/cmgsoon_bo9wmm.png';


const Events = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Select all elements with class 'box'
    const boxes = document.querySelectorAll('.box');
    
    // Apply animation to each box
    boxes.forEach(box => {
      gsap.fromTo(box,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div className="events-container">
      <div className="boxp">
        <div className="event">
          <h1>MUSIC</h1>
          <div className="box">
            <div className="left">
              <h2>Beat Battle</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                <Link to="/terms">
                  <button>REGISTER</button></Link>
                </div>
                <div className="dright">
                  <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
          <div className="box">
            <div className="left">
              <h2>Beat Solo</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                <Link to="/terms">
                  <button>REGISTER</button></Link>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
          <div className="box">
            <div className="left">
              <h2>Beat Duet</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
        </div>



        <div className="event">
          <h1>DANCE</h1>
          <div className="box">
            <div className="left">
              <h2>Classical Solo</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
          <div className="box">
            <div className="left">
              <h2>Classical Group</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
          <div className="box">
            <div className="left">
              <h2>Westren Mass Solo</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
          <div className="box">
            <div className="left">
              <h2>Westren Mass Duet</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
          <div className="box">
            <div className="left">
              <h2>Westren Mass Group</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
        </div>




        <div className="event">
          <h1>DRAMA</h1>
          <div className="box">
            <div className="left">
              <h2>Skit</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
          <div className="box">
            <div className="left">
              <h2>Dialouge damaka</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
          <div className="box">
            <div className="left">
              <h2>Abhinayam</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
        </div>


        <div className="event">
          <h1>LITERATURE</h1>
          <div className="box">
            <div className="left">
              <h2>Black out poetry</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
          <div className="box">
            <div className="left">
              <h2>Debate</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
          <div className="box">
            <div className="left">
              <h2>Metaphor mania</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
        </div>



        <div className="event">
          <h1>FASION</h1>
          <div className="box">
            <div className="left">
              <h2>Ramp walk</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
          <div className="box">
            <div className="left">
              <h2>Theamed Makeup</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
        </div>



        <div className="event">
          <h1>PAINTING</h1>
          <div className="box">
            <div className="left">
              <h2>Rangoli</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
          <div className="box">
            <div className="left">
              <h2>Theame Painting</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
        </div>




        <div className="event">
          <h1>FILM</h1>
          <div className="box">
            <div className="left">
              <h2>Shortfilm contest</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
          <div className="box">
            <div className="left">
              <h2>Photography</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dleft">
                  <button>REGISTER</button>
                </div>
                <div className="dright">
                <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events; 