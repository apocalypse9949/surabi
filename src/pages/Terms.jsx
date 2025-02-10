import React, { useState } from 'react';
import './Terms.css';

const Terms = () => {
    const [accepted, setAccepted] = useState(false);

    const handleRegister = () => {
        if (accepted) {
            alert("Registered successfully!");
        } else {
            alert("You must accept the terms and conditions to register.");
        }
    };

    return (
        <div className="terms-container">
            <h1 className="terms-title">Terms and Conditions</h1>
            <div className="terms-content">
                <p>
                    By registering for this event, you agree to the following terms and conditions:
                </p>
                <ul className="terms-list">
                    <li>All participants must be at least 18 years old.</li>
                    <li>Registration fees are non-refundable.</li>
                    <li>The event organizers reserve the right to change the event schedule.</li>
                    <li>Participants must adhere to the code of conduct during the event.</li>
                    <li>By attending, you consent to the use of your image in promotional materials.</li>
                    <li>Participants are responsible for their own travel and accommodation arrangements.</li>
                    <li>The organizers are not liable for any injuries or damages incurred during the event.</li>
                    <li>All participants must comply with local laws and regulations.</li>
                    <li>Any disputes will be resolved in accordance with the laws of the jurisdiction where the event is held.</li>
                    <li>Participants may be removed from the event for inappropriate behavior.</li>
                </ul>
            </div>

            <div className="terms-checkbox">
                <input type="checkbox" 
                                    checked={accepted} 
                                    onChange={() => setAccepted(!accepted)}/>
                <p>I accept the terms and conditions</p>
            </div>
            <button 
                onClick={handleRegister} 
                className="register-button"
            >
                Register
            </button>
        </div>
    );
};

export default Terms; 