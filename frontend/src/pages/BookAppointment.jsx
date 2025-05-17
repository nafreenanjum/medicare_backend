// import React, { useState } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import axios from 'axios';
// import "../styles/bookAppointment.css"; // Adjust casing to match your filename exactly



// const BookAppointment = () => {
//   const { doctorId } = useParams();
//   const { state } = useLocation();
//   const doctor = state?.doctor;

//   const [appointmentData, setAppointmentData] = useState({
//     date: '',
//     time: '',
//     reason: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAppointmentData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       const userId = localStorage.getItem('userId');

//       await axios.post('http://localhost:5000/api/appointments/book', {
//         doctor: doctorId,
//         patient: userId,
//         appointmentDate: appointmentData.date,
//         appointmentTime: appointmentData.time,
//         reason: appointmentData.reason
//       }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       alert('Appointment booked successfully!');
//     } catch (err) {
//       alert('Failed to book appointment');
//     }
//   };

//   return (
//     <>
//     <div className="login-header">
//   <div className="navbar-left" onClick={() => navigate('/')}>
//     <img src="/logomedicare.jpg" alt="Logo" className="logo" />
//     <button className="home-btn">Home</button>
//   </div>

//   <button
//     className="logout-btn"
//     onClick={() => {
//       localStorage.removeItem('token');
//       window.location.href = '/login';
//     }}
//   >
//     Logout
//   </button>
// </div>
//     <div className="appointment-container">
//   <h2>Book Appointment with {doctor?.fullName}</h2>
//   <form onSubmit={handleSubmit} className="appointment-form">
//     <input type="date" name="date" value={appointmentData.date} onChange={handleChange} required />
//     <input type="time" name="time" value={appointmentData.time} onChange={handleChange} required />
//     <textarea name="reason" placeholder="Reason for appointment" value={appointmentData.reason} onChange={handleChange} />
//     <button type="submit">Confirm Appointment</button>
//   </form>
// </div>
// </>

//   );
// };

// export default BookAppointment;



import React, { useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/bookAppointment.css";

const BookAppointment = () => {
  const { doctorId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const doctor = state?.doctor;

  const [appointmentData, setAppointmentData] = useState({
    date: '',
    time: '',
    reason: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      await axios.post('http://localhost:5000/api/appointments/book', {
        doctor: doctorId,
        patient: userId,
        appointmentDate: appointmentData.date,
        appointmentTime: appointmentData.time,
        reason: appointmentData.reason
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert('Appointment booked successfully!');
    } catch (err) {
      alert('Failed to book appointment');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
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



      <div className="appointment-container">
        <h2>Book Appointment with {doctor?.fullName}</h2>
        <form onSubmit={handleSubmit} className="appointment-form">
          <input type="date" name="date" value={appointmentData.date} onChange={handleChange} required />
          <input type="time" name="time" value={appointmentData.time} onChange={handleChange} required />
          <textarea name="reason" placeholder="Reason for appointment" value={appointmentData.reason} onChange={handleChange} />
          <button type="submit" className="confirm-btn">Confirm Appointment</button>
        </form>
        <button onClick={() => window.history.back()} className="backbtn">
        Back to Appointments
      </button>
      </div>
    </>
  );
};

export default BookAppointment;
