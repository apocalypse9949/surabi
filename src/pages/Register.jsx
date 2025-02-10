import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    gender: '',
    referral: '',
    password: '',
    college: '',
    state: '',
    address: '',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-container">
      <h2>Register for Surabhi 2025</h2>
      <p>Join us for the celebration of culture and talent</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Enter your Phone number" value={formData.phone} onChange={handleChange} required />
        <select name="profession" value={formData.profession} onChange={handleChange} required>
          <option value="">Select Profession</option>
          <option value="student">Student</option>
          <option value="professional">Professional</option>
        </select>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="text" name="Collegeid" placeholder="Enter college ID (If available)" value={formData.referral} onChange={handleChange} />
        <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
        <select name="college" value={formData.college} onChange={handleChange} required>
          <option value="">Select College</option>
          <option value="college1">KL University</option>
          <option value="college2">Other</option>
        </select>
        <input type="text" name="state" placeholder="Enter your state" value={formData.state} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} required />
        
        <Link to="/otherspayment">
          <button type="button">Next</button>
        </Link>

      </form>
      <p className="login-link">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Register; 