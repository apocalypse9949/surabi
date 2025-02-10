import React from 'react';
import './Profile.css';
const profile = 'https://res.cloudinary.com/dzcnlhofn/image/upload/v1739110160/jjrunxxuy8okae6flito.png';
const underline = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379751/underline_ra5fgs.png';
const event = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735380954/cmgsoon_bo9wmm.png';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="user-profile">
                <h2>User Profile</h2>
                <img src={profile} alt="" className="" />
                <p>Name: </p>
                <p>Email: </p>
                <p>Phone Number: </p>           
                <p>Profession: </p>
                <p>Gender: </p>
                <p>College ID: </p>
                <p>College Name: </p>
                <p>State: </p>
                <p>Address: </p>
            </div>
        </div>
    );
};

export default Profile;
