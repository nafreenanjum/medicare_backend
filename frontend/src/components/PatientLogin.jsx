import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory

const PatientLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();  // Initialize navigate hook here

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/patients/login', { email, password });
      localStorage.setItem('token', response.data.token);  // Store the token
      navigate('/dashboard');  // Use navigate instead of history.push
    } catch (err) {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="login-form">
      <h2>Patient Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default PatientLogin;

