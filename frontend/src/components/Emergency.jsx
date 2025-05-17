import React, { useState } from 'react';
import './Emergency.css';

// Fallback to default URL if not defined
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const EmergencyRequestForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    location: '',
    reason: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');

      const response = await fetch(`${API_BASE_URL}/api/emergency/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit emergency request');
      }

      const data = await response.json();
      setSuccess(data.message);
      setFormData({ patientName: '', phone: '', location: '', reason: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     <div className="login-header">
  {/* LEFT: Logo */}
  <div className="navbar-left" onClick={() => navigate('/dashboard')}>
    <img src="/logomedicare.jpg" alt="Logo" className="logo" />
  </div>

  {/* RIGHT: Home and Logout */}
  <div className="navbar-right">
    <button className="home-btn" onClick={() => navigate('/dashboard')}>Home</button>
    <button
      className="logout-btn"
      onClick={() => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }}
    >
      Logout
    </button>
  </div>
</div>
    <div className="emergency-request-form">
      <h3>Emergency Request</h3>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Patient Name:
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Reason:
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Request'}
        </button>
      </form>
      <button onClick={() => window.history.back()} className="backbtn">
        Back to Dashboard
      </button>
    </div>
    </>
  );
};

export default EmergencyRequestForm;

