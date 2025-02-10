import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check for admin credentials
    if (formData.email === 'saiprudhviraja006@gmail.com' && 
        formData.password === 'Bluelock_006') {
      // Set admin login status in localStorage
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin-dashboard');
    } else {
      // Handle regular user login here
      localStorage.setItem('isUserLoggedIn', 'true');
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Login</button>
        
        <p className="register-link">
          Do not have an account? <a href="/register">Register here</a>
        </p>
        <p className="forgot-password-link">
          <a href="/forgot-password" className="forgot-password-text">Forgot Password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login; 