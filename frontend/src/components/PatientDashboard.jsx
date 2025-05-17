// import React, { useEffect, useState } from "react";
// import './PatientDashboard.css';

// const defaultProfile = 'https://via.placeholder.com/150';
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

// const PatientDashboard = () => {
//   const [patientInfo, setPatientInfo] = useState({});
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         if (!token) {
//           throw new Error('No token found');
//         }

//         // Fetch the patient data using the token for authorization
//         const patientRes = await fetch(`${API_BASE_URL}/api/patients/me`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!patientRes.ok) throw new Error("Failed to fetch patient data");
//         const patientData = await patientRes.json();
//         setPatientInfo(patientData);
// localStorage.setItem("patientId", patientData._id);



//         // Fetch the patient's appointments (now including patientId in the URL)
//         const appointRes = await fetch(`${API_BASE_URL}/api/appointments/patient/${patientData._id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!appointRes.ok) throw new Error("Failed to fetch appointments");
//         const appointData = await appointRes.json();

//         // Ensure that the response is an array
//         if (Array.isArray(appointData)) {
//           setAppointments(appointData); // Set the appointments
//         } else {
//           setAppointments([]); // Handle if data isn't an array
//         }
//       } catch (err) {
//         console.error("Error fetching dashboard data", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div className="dashboard-container">Loading...</div>;

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-header">
//         <div>
//           <h2>Welcome, {patientInfo?.fullName}</h2>
//           <p>{patientInfo?.email}</p>
//         </div>
//         <button
//           className="logout-btn"
//           onClick={() => {
//             localStorage.removeItem("token");
//             window.location.href = "/login";
//           }}
//         >
//           Logout
//         </button>
//       </div>

//       <div className="dashboard-section">
//         <h3>📅 Your Appointments</h3>
//         {appointments.length === 0 ? (
//           <p>No appointments booked.</p>
//         ) : (
//           <ul className="appointment-list">
//             {appointments.map((appt) => (
//               <li key={appt._id}>
//                 <strong>Doctor:</strong> {appt.doctor?.name} <br />
//                 <strong>Specialty:</strong> {appt.doctor?.specialty}<br />
//                 <strong>Date:</strong> {appt.date} <br />
//                 <strong>Status:</strong> {appt.status}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div className="dashboard-actions">
//         <button onClick={() => window.location.href = "/search-doctors"}>Search Doctors</button>
//         <button onClick={() => window.location.href = "/search-by-specialty"}>Search for Specialist</button>

//         <button onClick={() => window.location.href = "/medical-history"}>View Medical History</button>
//         <button onClick={() => window.location.href = "/prescriptions"}>View Prescriptions</button>
//         <button onClick={() => window.location.href = "/request-ambulance"}>🚑 Emergency Request</button>
//         <button onClick={() => window.location.href = "/edit-profile"}>⚙️ Edit Profile</button>
//       </div>
//     </div>
//   );
// };

// export default PatientDashboard;
//secomd
// import React, { useEffect, useState } from "react";
// import './PatientDashboard.css';
// import { useNavigate } from "react-router-dom";

// const defaultProfile = 'https://via.placeholder.com/150';
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

// const PatientDashboard = () => {
//   const [patientInfo, setPatientInfo] = useState({});
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         if (!token) throw new Error('No token found');

//         const patientRes = await fetch(`${API_BASE_URL}/api/patients/me`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!patientRes.ok) throw new Error("Failed to fetch patient data");
//         const patientData = await patientRes.json();
//         setPatientInfo(patientData);
//         localStorage.setItem("patientId", patientData._id);

//         const appointRes = await fetch(`${API_BASE_URL}/api/appointments/patient/${patientData._id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!appointRes.ok) throw new Error("Failed to fetch appointments");
//         const appointData = await appointRes.json();
//         setAppointments(Array.isArray(appointData) ? appointData : []);
//       } catch (err) {
//         console.error("Error fetching dashboard data", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleViewPrescription = (appointmentId) => {
//     console.log("Navigating to prescription for appointment:", appointmentId);
//     navigate(`/prescriptions/${appointmentId}`);
//   };

//   if (loading) return <div className="dashboard-container">Loading...</div>;

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-header">
//         <div>
//           <h2>Welcome, {patientInfo?.fullName || "Patient"}</h2>
//           <p>{patientInfo?.email || "No email available"}</p>
//         </div>
//         <button
//           className="logout-btn"
//           onClick={() => {
//             localStorage.removeItem("token");
//             window.location.href = "/login";
//           }}
//         >
//           Logout
//         </button>
//       </div>

//       <div className="dashboard-section">
//         <h3>📅 Your Appointments</h3>
//         {appointments.length === 0 ? (
//           <p>No appointments booked.</p>
//         ) : (
//           <ul className="appointment-list">
//             {appointments.map((appt) => (
//               <li key={appt._id}>
//                 <strong>Doctor:</strong> {appt.doctor?.name || "Doctor not available"} <br />
//                 <strong>Specialty:</strong> {appt.doctor?.specialty || "N/A"} <br />
//                 <strong>Date:</strong> {new Date(appt.appointmentDate).toLocaleString()} <br />
//                 <strong>Status:</strong> {appt.status || "N/A"} <br />
//                 {appt.status === "Completed" && (
//                   <div>
//                     <button onClick={() => handleViewPrescription(appt._id)}>
//                       View Prescription
//                     </button>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div className="dashboard-actions">
//         <button onClick={() => window.location.href = "/search-doctors"}>Search Doctors</button>
//         <button onClick={() => window.location.href = "/search-by-specialty"}>Search for Specialist</button>
//         <button onClick={() => window.location.href = "/medical-history"}>View Medical History</button>
//         <button onClick={() => window.location.href = "/request-ambulance"}>🚑 Emergency Request</button>
//         <button onClick={() => window.location.href = "/edit-profile"}>⚙️ Edit Profile</button>
//       </div>
//     </div>
//   );
// };

// export default PatientDashboard;

//run
// import React, { useEffect, useState } from "react";
// import './PatientDashboard.css';
// import { useNavigate } from "react-router-dom";

// // Fallback to default URL if not defined
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

// const PatientDashboard = () => {
//   const [patientInfo, setPatientInfo] = useState({});
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         if (!token) throw new Error('No token found');

//         const patientRes = await fetch(`${API_BASE_URL}/api/patients/me`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!patientRes.ok) throw new Error("Failed to fetch patient data");
//         const patientData = await patientRes.json();
//         setPatientInfo(patientData);
//         localStorage.setItem("patientId", patientData._id);

//         const appointRes = await fetch(`${API_BASE_URL}/api/appointments/patient/${patientData._id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!appointRes.ok) throw new Error("Failed to fetch appointments");
//         const appointData = await appointRes.json();
//         setAppointments(Array.isArray(appointData) ? appointData : []);
//       } catch (err) {
//         console.error("Error fetching dashboard data", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleViewPrescription = (appointmentId) => {
//     console.log("Navigating to prescription for appointment:", appointmentId);
//     navigate(`/prescriptions/${appointmentId}`);
//   };

//   if (loading) return <div className="dashboard-container">Loading...</div>;

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-header">
//         <div>
//           <h2>Welcome, {patientInfo?.fullName}</h2>
//           <p>{patientInfo?.email}</p>
//         </div>
//         <button
//           className="logout-btn"
//           onClick={() => {
//             localStorage.removeItem("token");
//             window.location.href = "/login";
//           }}
//         >
//           Logout
//         </button>
//       </div>

//       <div className="dashboard-section">
//         <h3>📅 Your Appointments</h3>
//         {appointments.length === 0 ? (
//           <p>No appointments booked.</p>
//         ) : (
//           <ul className="appointment-list">
//             {appointments.map((appt) => (
//               <li key={appt._id}>
//                 <strong>Doctor:</strong> {appt.doctor?.name} <br />
//                 <strong>Specialty:</strong> {appt.doctor?.specialty}<br />
//                 <strong>Date:</strong> {appt.date} <br />
//                 <strong>Status:</strong> {appt.status} <br />
//                 {appt.status === "Completed" && (
//                   <div>
//                     <button onClick={() => handleViewPrescription(appt._id)}>
//                       View Prescription
//                     </button>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div className="dashboard-actions">
//         <button onClick={() => window.location.href = "/search-doctors"}>Search Doctors</button>
//         <button onClick={() => window.location.href = "/search-by-specialty"}>Search for Specialist</button>
//         <button onClick={() => window.location.href = "/medical-history"}>View Medical History</button>
//         <button onClick={() => window.location.href = "/request-ambulance"}>🚑 Emergency Request</button>
//         <button onClick={() => window.location.href = "/edit-profile"}>⚙️ Edit Profile</button>
//       </div>
//     </div>
//   );
// };

// export default PatientDashboard;






// import React, { useEffect, useState } from "react";
// import './PatientDashboard.css';
// import { useNavigate } from "react-router-dom";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

// const PatientDashboard = () => {
//   const [patientInfo, setPatientInfo] = useState({});
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showAppointments, setShowAppointments] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) throw new Error('No token found');

//         // Fetch patient info
//         const patientRes = await fetch(`${API_BASE_URL}/api/patients/me`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!patientRes.ok) throw new Error("Failed to fetch patient data");
//         const patientData = await patientRes.json();
//         setPatientInfo(patientData);
//         localStorage.setItem("patientId", patientData._id);

//         // Fetch appointments
//         const appointRes = await fetch(`${API_BASE_URL}/api/appointments/patient/${patientData._id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!appointRes.ok) throw new Error("Failed to fetch appointments");
//         const appointData = await appointRes.json();

//         // Get only accepted upcoming appointments
//         const acceptedAppointments = appointData.upcoming?.filter(a => a.status === "Accepted") || [];
//         setAppointments(acceptedAppointments);
//       } catch (err) {
//         console.error("Error fetching dashboard data", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleViewPrescription = (appointmentId) => {
//     console.log("Navigating to prescription for appointment:", appointmentId);
//     navigate(`/prescriptions/${appointmentId}`);
//   };

//   if (loading) return <div className="dashboard-container">Loading...</div>;

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-header">
//         <div>
//           <h2>Welcome, {patientInfo?.fullName}</h2>
//           <p>{patientInfo?.email}</p>
//         </div>
//         <button
//           className="logout-btn"
//           onClick={() => {
//             localStorage.removeItem("token");
//             window.location.href = "/login";
//           }}
//         >
//           Logout
//         </button>
//       </div>

//       <div className="dashboard-section">
//         <h3>📅 Your Appointments</h3>
//         {!showAppointments ? (
//           <>
//             <p>No appointments visible. Click below to check.</p>
//             <button onClick={() => setShowAppointments(true)}>Show Appointments</button>
//           </>
//         ) : appointments.length === 0 ? (
//           <p>No upcoming accepted appointments.</p>
//         ) : (
//           <ul className="appointment-list">
//             {appointments.map((appt) => (
//               <li key={appt._id}>
//                 <strong>Doctor:</strong> {appt.doctor?.fullName} <br />
//                 <strong>Specialty:</strong> {appt.doctor?.specialty}<br />
//                 <strong>Date:</strong> {new Date(appt.appointmentDate).toLocaleDateString()} <br />
//                 <strong>Time:</strong> {appt.appointmentTime}<br />
//                 <strong>Status:</strong> {appt.status} <br />
//                 {appt.status === "Completed" && (
//                   <div>
//                     <button onClick={() => handleViewPrescription(appt._id)}>
//                       View Prescription
//                     </button>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div className="dashboard-actions">
//         <button onClick={() => window.location.href = "/search-doctors"}>Search Doctors</button>
//         <button onClick={() => window.location.href = "/search-by-specialty"}>Search for Specialist</button>
//         <button onClick={() => window.location.href = "/medical-history"}>View Medical History</button>
//         <button onClick={() => window.location.href = "/request-ambulance"}>🚑 Emergency Request</button>
//         <button onClick={() => window.location.href = "/edit-profile"}>⚙️ Edit Profile</button>
//       </div>
//     </div>
//   );
// };

// export default PatientDashboard;


// import React, { useEffect, useState } from 'react';
// import './PatientDashboard.css';
// import { useNavigate } from 'react-router-dom';

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

// const PatientDashboard = () => {
//   const [patientInfo, setPatientInfo] = useState({});
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showAppointments, setShowAppointments] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) throw new Error('No token found');

//         const patientRes = await fetch(`${API_BASE_URL}/api/patients/me`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!patientRes.ok) throw new Error('Failed to fetch patient data');
//         const patientData = await patientRes.json();
//         setPatientInfo(patientData);
//         localStorage.setItem('patientId', patientData._id);

//         const appointRes = await fetch(`${API_BASE_URL}/api/appointments/patient/${patientData._id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!appointRes.ok) throw new Error('Failed to fetch appointments');
//         const appointData = await appointRes.json();
//         setAppointments(appointData.upcoming || []);
//       } catch (err) {
//         console.error('Error fetching dashboard data', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div className="dashboard-container">Loading...</div>;

//   return (
    
    
//     <div className="dashboard-container">
//       <div className="dashboard-header">
//         <div>
//           <h2>Welcome, {patientInfo?.fullName}</h2>
//           <p>{patientInfo?.email}</p>
//         </div>
//         <button
//           className="logout-btn"
//           onClick={() => {
//             localStorage.removeItem('token');
//             window.location.href = '/login';
//           }}
//         >
//           Logout
//         </button>
//       </div>

//       <div className="dashboard-section">
//         <h3>📅 Your Appointments</h3>
//         {!showAppointments ? (
//           <>
//             <p>No appointments visible. Click below to check.</p>
//             <button onClick={() => setShowAppointments(true)}>Show Appointments</button>
//           </>
//         ) : appointments.length === 0 ? (
//           <p>No upcoming appointments.</p>
//         ) : (
//           <ul className="appointment-list">
//             {appointments.map((appt) => (
//               <li key={appt._id}>
//                 <strong>Doctor:</strong> {appt.doctor?.fullName} <br />
//                 <strong>Specialty:</strong> {appt.doctor?.specialty} <br />
//                 <strong>Date:</strong> {new Date(appt.appointmentDate).toLocaleDateString()} <br />
//                 <strong>Time:</strong> {appt.appointmentTime} <br />
//                 <strong>Status:</strong> {appt.status} <br />
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div className="dashboard-actions">
//         <button onClick={() => navigate('/search-doctors')}>Search Doctors</button>
//         <button onClick={() => navigate('/search-by-specialty')}>Search for Specialist</button>
//         <button onClick={() => navigate('/medical-history')}>View Medical History</button>
//         <button onClick={() => navigate('/request-ambulance')}>🚑 Emergency Request</button>
//         <button onClick={() => navigate('/edit-profile')}>⚙️ Edit Profile</button>
//       </div>
//     </div>
//   );
// };

// export default PatientDashboard;



import React, { useEffect, useState } from 'react';
import './PatientDashboard.css';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const PatientDashboard = () => {
  const [patientInfo, setPatientInfo] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAppointments, setShowAppointments] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');

        const patientRes = await fetch(`${API_BASE_URL}/api/patients/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!patientRes.ok) throw new Error('Failed to fetch patient data');
        const patientData = await patientRes.json();
        setPatientInfo(patientData);
        localStorage.setItem('patientId', patientData._id);

        const appointRes = await fetch(`${API_BASE_URL}/api/appointments/patient/${patientData._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!appointRes.ok) throw new Error('Failed to fetch appointments');
        const appointData = await appointRes.json();
        setAppointments(appointData.upcoming || []);
      } catch (err) {
        console.error('Error fetching dashboard data', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="dashboard-container">Loading...</div>;

  return (
    <>
    <div className="login-header">
  {/* LEFT: Logo */}
  <div className="navbar-left" onClick={() => navigate('/dashboard')}>
    <img src="/logomedicare.jpg" alt="Logo" className="logo" />
  </div>

  {/* RIGHT: Home and Logout */}
  <div className="navbar-right">
    <button className="home-btn" onClick={() => navigate('/')}>Home</button>
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



      {/* HEADER END */}

      {/* ADD PADDING TOP to prevent content hidden behind fixed header */}
      <div className="dashboard-container" style={{ paddingTop: '90px' }}>
        <div className="dashboard-header">
          <div>
            <h2>Welcome, {patientInfo?.fullName}</h2>
            <p>{patientInfo?.email}</p>
          </div>
          
        </div>

        <div className="dashboard-section">
          <h3>📅 Your Appointments</h3>
          {!showAppointments ? (
            <>
              <p>No appointments visible. Click below to check.</p>
              <button onClick={() => setShowAppointments(true)}>Show Appointments</button>
            </>
          ) : appointments.length === 0 ? (
            <p>No upcoming appointments.</p>
          ) : (
            <>
              <button onClick={() => setShowAppointments(false)} style={{ marginBottom: '10px' }}>
                Close Appointments
              </button>
              <ul className="appointment-list">
                {appointments.map((appt) => (
                  <li key={appt._id}>
                    <strong>Doctor:</strong> {appt.doctor?.fullName} <br />
                    <strong>Specialty:</strong> {appt.doctor?.specialty} <br />
                    <strong>Date:</strong> {new Date(appt.appointmentDate).toLocaleDateString()} <br />
                    <strong>Time:</strong> {appt.appointmentTime} <br />
                    <strong>Status:</strong> {appt.status} <br />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="dashboard-actions">
          <button onClick={() => navigate('/search-doctors')}>Search Doctors</button>
          <button onClick={() => navigate('/search-by-specialty')}>Search for Specialist</button>
          <button onClick={() => navigate('/medical-history')}>View Medical History</button>
          <button onClick={() => navigate('/request-ambulance')}>🚑 Emergency Request</button>
          <button onClick={() => navigate('/edit-profile')}>⚙️ Edit Profile</button>
        </div>
      </div>
    </>
  );
};

export default PatientDashboard;
