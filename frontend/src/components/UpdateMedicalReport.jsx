// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import './UpdateMedicalReport.css'; // Ensure you have this CSS for styling

// const UpdateMedicalReport = () => {
//   const { appointmentId } = useParams(); // Extract appointmentId from the URL
//   const navigate = useNavigate(); // Navigation hook
//   const token = localStorage.getItem('token'); // JWT token from localStorage

//   const [diagnosis, setDiagnosis] = useState(''); // State to store diagnosis
//   const [prescription, setPrescription] = useState(''); // State to store prescription
//   const [notes, setNotes] = useState(''); // State to store notes
//   const [message, setMessage] = useState(''); // State to store messages (success/error)
//   const [errors, setErrors] = useState({}); // State for form validation errors

//   // Form validation function
//   const validateForm = () => {
//     const newErrors = {};
//     if (!diagnosis.trim()) newErrors.diagnosis = 'Diagnosis is required';
//     if (!prescription.trim()) newErrors.prescription = 'Prescription is required';
//     if (!notes.trim()) newErrors.notes = 'Notes are required';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // If no errors, return true
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission
//     if (!validateForm()) return; // Validate form before submission

//     try {
//       // Sending PUT request to the backend to update the medical record
//       const response = await axios.put(
//         `http://localhost:5173/api/appointments/medical-record/${appointmentId}`, // Use PUT method and correct URL
//         { diagnosis, prescription, notes },
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       setMessage('✅ Medical report updated successfully!');
//       setTimeout(() => navigate('/doctor-dashboard'), 1500); // Redirect to the doctor dashboard after 1.5 seconds
//     } catch (err) {
//       // Error handling
//       setMessage(`❌ ${err.response?.data?.message || 'Update failed.'}`);
//     }
//   };

//   return (
//     <div className="update-medical-report">
//       <h2>Update Medical Report</h2>
//       <form onSubmit={handleSubmit} className="form-container">
//         <div className="form-group">
//           <label>Diagnosis:</label>
//           <input
//             type="text"
//             value={diagnosis}
//             onChange={(e) => setDiagnosis(e.target.value)} // Handle input change
//           />
//           {errors.diagnosis && <span className="error">{errors.diagnosis}</span>}
//         </div>

//         <div className="form-group">
//           <label>Prescription:</label>
//           <input
//             type="text"
//             value={prescription}
//             onChange={(e) => setPrescription(e.target.value)} // Handle input change
//           />
//           {errors.prescription && <span className="error">{errors.prescription}</span>}
//         </div>

//         <div className="form-group">
//           <label>Notes:</label>
//           <textarea
//             rows="4"
//             value={notes}
//             onChange={(e) => setNotes(e.target.value)} // Handle textarea change
//           />
//           {errors.notes && <span className="error">{errors.notes}</span>}
//         </div>

//         <button type="submit" className="submit-btn">Update Report</button>
//       </form>

//       {/* Display message */}
//       {message && <p className="message">{message}</p>}
//     </div>
//   );
// };

// export default UpdateMedicalReport;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import './UpdateMedicalReport.css';

// const UpdateMedicalReport = () => {
//   const { appointmentId } = useParams(); // Extract appointmentId from URL
//   const navigate = useNavigate(); // Navigation hook
//   const token = localStorage.getItem('token'); // JWT token from localStorage

//   const [diagnosis, setDiagnosis] = useState(''); // State to store diagnosis
//   const [prescription, setPrescription] = useState(''); // State to store prescription
//   const [notes, setNotes] = useState(''); // State to store notes
//   const [message, setMessage] = useState(''); // State to store messages (success/error)
//   const [errors, setErrors] = useState({}); // State for form validation errors

//   // Form validation function
//   const validateForm = () => {
//     const newErrors = {};
//     if (!diagnosis.trim()) newErrors.diagnosis = 'Diagnosis is required';
//     if (!prescription.trim()) newErrors.prescription = 'Prescription is required';
//     if (!notes.trim()) newErrors.notes = 'Notes are required';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Return true if no errors
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission
//     if (!validateForm()) return; // Validate form before submission

//     try {
//       // Sending PUT request to update medical record for a specific appointment
//       const response = await axios.put(
//         `http://localhost:5173/api/appointments/medical-record/${appointmentId}`,
//         { diagnosis, prescription, notes },
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       setMessage('✅ Medical report updated successfully!');
//       setTimeout(() => navigate('/doctor-dashboard'), 1500); // Redirect to dashboard after 1.5 seconds
//     } catch (err) {
//       setMessage(`❌ ${err.response?.data?.message || 'Update failed.'}`);
//     }
//   };

//   // Fetch the current medical report (optional) when component mounts
//   useEffect(() => {
//     const fetchMedicalHistory = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5173/api/appointments/medical-record/${appointmentId}`,
//           {
//             headers: {
//               'Authorization': `Bearer ${token}`,
//             },
//           }
//         );
//         const { diagnosis, prescription, notes } = response.data;
//         setDiagnosis(diagnosis || '');
//         setPrescription(prescription || '');
//         setNotes(notes || '');
//       } catch (err) {
//         setMessage('❌ Failed to fetch medical history');
//       }
//     };

//     fetchMedicalHistory();
//   }, [appointmentId, token]);

//   return (
//     <div className="update-medical-report">
//       <h2>Update Medical Report</h2>
//       <form onSubmit={handleSubmit} className="form-container">
//         <div className="form-group">
//           <label>Diagnosis:</label>
//           <input
//             type="text"
//             value={diagnosis}
//             onChange={(e) => setDiagnosis(e.target.value)} // Handle input change
//           />
//           {errors.diagnosis && <span className="error">{errors.diagnosis}</span>}
//         </div>

//         <div className="form-group">
//           <label>Prescription:</label>
//           <input
//             type="text"
//             value={prescription}
//             onChange={(e) => setPrescription(e.target.value)} // Handle input change
//           />
//           {errors.prescription && <span className="error">{errors.prescription}</span>}
//         </div>

//         <div className="form-group">
//           <label>Notes:</label>
//           <textarea
//             rows="4"
//             value={notes}
//             onChange={(e) => setNotes(e.target.value)} // Handle textarea change
//           />
//           {errors.notes && <span className="error">{errors.notes}</span>}
//         </div>

//         <button type="submit" className="submit-btn">Update Report</button>
//       </form>

//       {/* Display message */}
//       {message && <p className="message">{message}</p>}
//     </div>
//   );
// };

// export default UpdateMedicalReport;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateMedicalReport.css';

const UpdateMedicalReport = () => {
  const { appointmentId } = useParams(); // Extract appointmentId from URL
  const navigate = useNavigate(); // Navigation hook
  const token = localStorage.getItem('token'); // JWT token from localStorage

  const [diagnosis, setDiagnosis] = useState(''); // State to store diagnosis
  const [prescription, setPrescription] = useState(''); // State to store prescription
  const [notes, setNotes] = useState(''); // State to store notes
  const [message, setMessage] = useState(''); // State to store messages (success/error)
  const [errors, setErrors] = useState({}); // State for form validation errors

  // Form validation function
  const validateForm = () => {
    const newErrors = {};
    if (!diagnosis.trim()) newErrors.diagnosis = 'Diagnosis is required';
    if (!prescription.trim()) newErrors.prescription = 'Prescription is required';
    if (!notes.trim()) newErrors.notes = 'Notes are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Log appointmentId for debugging
  useEffect(() => {
    console.log('appointmentId from URL:', appointmentId); // This will verify the appointmentId
  }, [appointmentId]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!validateForm()) return; // Validate form before submission

    try {
      // Sending PUT request to update medical record for a specific appointment
      const response = await axios.put(
        `http://localhost:5173/api/appointments/medical-record/${appointmentId}`,
        { diagnosis, prescription, notes },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setMessage('✅ Medical report updated successfully!');
      setTimeout(() => navigate('/doctor-dashboard'), 1500); // Redirect to dashboard after 1.5 seconds
    } catch (err) {
      setMessage(`❌ ${err.response?.data?.message || 'Update failed.'}`);
    }
  };

  // Fetch the current medical report (optional) when component mounts
  useEffect(() => {
    const fetchMedicalHistory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5173/api/appointments/medical-record/${appointmentId}`,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          }
        );
        const { diagnosis, prescription, notes } = response.data;
        setDiagnosis(diagnosis || '');
        setPrescription(prescription || '');
        setNotes(notes || '');
      } catch (err) {
        setMessage('fetch medical history');
      }
    };

    fetchMedicalHistory();
  }, [appointmentId, token]);

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
    <div className="update-medical-report">
      <h2>Update Medical Report</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>Diagnosis:</label>
          <input
            type="text"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)} // Handle input change
          />
          {errors.diagnosis && <span className="error">{errors.diagnosis}</span>}
        </div>

        <div className="form-group">
          <label>Prescription:</label>
          <input
            type="text"
            value={prescription}
            onChange={(e) => setPrescription(e.target.value)} // Handle input change
          />
          {errors.prescription && <span className="error">{errors.prescription}</span>}
        </div>

        <div className="form-group">
          <label>Notes:</label>
          <textarea
            rows="4"
            value={notes}
            onChange={(e) => setNotes(e.target.value)} // Handle textarea change
          />
          {errors.notes && <span className="error">{errors.notes}</span>}
        </div>

        <button type="submit" className="submit-btn">Update Report</button>
      </form>

      {/* Display message */}
      {message && <p className="message">{message}</p>}
      
    </div>
    
    </>
  );
};

export default UpdateMedicalReport;
