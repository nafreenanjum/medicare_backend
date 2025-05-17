// import React, { useEffect, useState } from "react";
// import "./DoctorSeeReport.css"; // Make sure you have this updated CSS file for styling

// const API_BASE_URL = "http://localhost:5000"; // Replace with your actual API base URL

// const DoctorSeeReport = () => {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMedicalHistory = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const patientId = "681627878898b44e76bea0d2"; // Replace with dynamic patientId if necessary
//         const doctorId = "681f1f8ca25ed1c0cd7d54f5"; // Replace with dynamic doctorId

//         if (!token || !patientId || !doctorId) {
//           setLoading(false);
//           setError("Missing token, patientId, or doctorId");
//           return;
//         }

//         const res = await fetch(`${API_BASE_URL}/api/doctors/${doctorId}/patients/${patientId}/history`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!res.ok) {
//           throw new Error("Failed to fetch medical history");
//         }

//         const data = await res.json();
//         if (data.history && Array.isArray(data.history)) {
//           setHistory(data.history);
//         } else {
//           setError("No medical history found.");
//         }
//       } catch (err) {
//         setError("Something went wrong while fetching history.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMedicalHistory();
//   }, []);

//   if (loading) return <p>Loading medical history...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div className="doctor-see-report-container">
//       <h2>🩺 Patient's Medical History</h2>
//       {history.length > 0 ? (
//         history.map((entry, index) => {
//           const { appointmentDate, appointmentTime, reason, doctor, medicalHistory } = entry;
//           return (
//             <div className="history-card" key={entry._id || index}>
//               <p><strong>Appointment Date:</strong> {appointmentDate || "N/A"}</p>
//               <p><strong>Appointment Time:</strong> {appointmentTime || "N/A"}</p>
//               <p><strong>Doctor:</strong> {doctor ? doctor.fullName : "N/A"}</p>
//               <p><strong>Reason:</strong> {reason || "N/A"}</p>
//               <div className="medical-history-details">
//                 <p><strong>Diagnosis:</strong> {medicalHistory?.diagnosis || "N/A"}</p>
//                 <p><strong>Prescription:</strong> {medicalHistory?.prescription || "N/A"}</p>
//                 <p><strong>Notes:</strong> {medicalHistory?.notes || "N/A"}</p>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <p>No medical history available.</p>
//       )}
//       <button onClick={() => window.history.back()} className="back-btn">
//         Back to Dashboard
//       </button>
//     </div>
//   );
// };

// export default DoctorSeeReport;



// import React, { useEffect, useState } from "react";
// import "./DoctorSeeReport.css"; // Ensure you have proper styling

// const API_BASE_URL = "http://localhost:5000"; // Replace with your actual API base URL

// const DoctorSeeReport = () => {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//   const fetchMedicalHistory = async () => {
//     try {
//       const token = localStorage.getItem("token"); // Token from local storage for authorization
//       const patientId = localStorage.getItem("patientId"); // Dynamically retrieve the patientId
//       const doctorId = localStorage.getItem("doctorId"); // Dynamically retrieve the doctorId

//       if (!token || !patientId || !doctorId) {
//         setLoading(false);
//         setError("Missing token, patientId, or doctorId");
//         return;
//       }

//       // Fetch medical history data from the API endpoint
//       const res = await fetch(`${API_BASE_URL}/api/doctors/${doctorId}/patients/${patientId}/history`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!res.ok) {
//         const errorDetails = await res.text(); // Log the detailed error message
//         console.error("Error details:", errorDetails);
//         throw new Error("Failed to fetch medical history");
//       }

//       const data = await res.json();
//       if (data.history && Array.isArray(data.history)) {
//         setHistory(data.history);
//       } else {
//         setError("No medical history found.");
//       }
//     } catch (err) {
//       setError(`Something went wrong: ${err.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchMedicalHistory();
// }, []);


//   if (loading) return <p>Loading medical history...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div className="doctor-see-report-container">
//       <h2>🩺 Patient's Medical History</h2>
//       {history.length > 0 ? (
//         history.map((entry, index) => {
//           const { appointmentDate, appointmentTime, reason, doctor, medicalHistory } = entry;
//           return (
//             <div className="history-card" key={entry._id || index}>
//               <p><strong>Appointment Date:</strong> {appointmentDate || "N/A"}</p>
//               <p><strong>Appointment Time:</strong> {appointmentTime || "N/A"}</p>
              
//               <p><strong>Reason:</strong> {reason || "N/A"}</p>
//               <div className="medical-history-details">
//                 <p><strong>Diagnosis:</strong> {medicalHistory?.diagnosis || "N/A"}</p>
//                 <p><strong>Prescription:</strong> {medicalHistory?.prescription || "N/A"}</p>
//                 <p><strong>Notes:</strong> {medicalHistory?.notes || "N/A"}</p>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <p>No medical history available.</p>
//       )}
//       <button onClick={() => window.history.back()} className="back-btn">
//         Back to Dashboard
//       </button>
//     </div>
//   );
// };

// export default DoctorSeeReport;



// import React, { useEffect, useState } from "react";
// import "./DoctorSeeReport.css"; // Ensure you have proper styling

// const API_BASE_URL = "http://localhost:5000"; // Replace with your actual API base URL

// const DoctorSeeReport = () => {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Dynamically get the patientId and doctorId from localStorage or context
//   const patientId = localStorage.getItem("patientId");
//   const doctorId = localStorage.getItem("doctorId");
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchMedicalHistory = async () => {
//       try {
//         if (!token || !patientId || !doctorId) {
//           setLoading(false);
//           setError("Missing token, patientId, or doctorId");
//           return;
//         }

//         // Fetch the medical history for the specific patient and doctor
//         const res = await fetch(`${API_BASE_URL}/api/doctors/${doctorId}/patients/${patientId}/history`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!res.ok) {
//           throw new Error("Failed to fetch medical history");
//         }

//         const data = await res.json();
        
//         // Log the data for debugging (to inspect the structure)
//         console.log("Fetched History Data:", data);

//         if (data.history && Array.isArray(data.history)) {
//           setHistory(data.history); // Only set the history for the current patient
//         } else {
//           setError("No medical history found.");
//         }
//       } catch (err) {
//         setError(`Something went wrong: ${err.message}`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMedicalHistory();
//   }, [patientId, doctorId, token]); // Trigger re-fetch if any of these values change

//   if (loading) return <p>Loading medical history...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div className="doctor-see-report-container">
//       <h2>🩺 Patient's Medical History</h2>
//       {history.length > 0 ? (
//         history.map((entry, index) => {
//           const { appointmentDate, appointmentTime, reason, doctor, medicalHistory } = entry;

//           // Ensure we are accessing the doctor's full name safely
//           const doctorName = doctor ? doctor.fullName : "Doctor's name not available";

//           return (
//             <div className="history-card" key={entry._id || index}>
//               <p><strong>Appointment Date:</strong> {appointmentDate || "N/A"}</p>
//               <p><strong>Appointment Time:</strong> {appointmentTime || "N/A"}</p>
//               <p><strong>Doctor:</strong> {doctorName}</p>
//               <p><strong>Reason:</strong> {reason || "N/A"}</p>
//               <div className="medical-history-details">
//                 <p><strong>Diagnosis:</strong> {medicalHistory?.diagnosis || "N/A"}</p>
//                 <p><strong>Prescription:</strong> {medicalHistory?.prescription || "N/A"}</p>
//                 <p><strong>Notes:</strong> {medicalHistory?.notes || "N/A"}</p>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <p>No medical history available.</p>
//       )}
//       <button onClick={() => window.history.back()} className="back-btn">
//         Back to Dashboard
//       </button>
//     </div>
//   );
// };

// export default DoctorSeeReport;



// import React, { useEffect, useState } from "react";
// import "./DoctorSeeReport.css"; // Ensure you have proper styling

// const API_BASE_URL = "http://localhost:5000"; // Replace with your actual API base URL

// const DoctorSeeReport = () => {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [patientId, setPatientId] = useState(localStorage.getItem("patientId")); // Track the patientId in state
//   const [doctorId, setDoctorId] = useState(localStorage.getItem("doctorId"));
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchMedicalHistory = async () => {
//       try {
//         if (!token || !patientId || !doctorId) {
//           setLoading(false);
//           setError("Missing token, patientId, or doctorId");
//           return;
//         }

//         const url = `${API_BASE_URL}/api/doctors/${doctorId}/patients/${patientId}/history`;
//         console.log("Request URL:", url); // Log the request URL

//         const res = await fetch(url, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await res.json();
//         console.log("Fetched Data:", data); // Log the fetched data to inspect it

//         if (res.ok && data.history && Array.isArray(data.history)) {
//           setHistory(data.history);
//         } else {
//           setError("No medical history found.");
//         }
//       } catch (err) {
//         setError("Something went wrong while fetching history.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMedicalHistory();
//   }, [patientId, doctorId, token]); // Re-run fetch if patientId, doctorId, or token changes

//   useEffect(() => {
//     // Listen to changes in localStorage (only works on reload)
//     const handleStorageChange = () => {
//       const newPatientId = localStorage.getItem("patientId");
//       setPatientId(newPatientId);
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   if (loading) return <p>Loading medical history...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div className="doctor-see-report-container">
//       <h2>🩺 Patient's Medical History</h2>
//       {history.length > 0 ? (
//         history.map((entry, index) => {
//           const { appointmentDate, appointmentTime, reason, doctor, medicalHistory } = entry;

//           const doctorName = doctor ? doctor.fullName : "Doctor's name not available";

//           return (
//             <div className="history-card" key={entry._id || index}>
//               <p><strong>Appointment Date:</strong> {appointmentDate || "N/A"}</p>
//               <p><strong>Appointment Time:</strong> {appointmentTime || "N/A"}</p>
//               <p><strong>Doctor:</strong> {doctorName}</p>
//               <p><strong>Reason:</strong> {reason || "N/A"}</p>
//               <div className="medical-history-details">
//                 <p><strong>Diagnosis:</strong> {medicalHistory?.diagnosis || "N/A"}</p>
//                 <p><strong>Prescription:</strong> {medicalHistory?.prescription || "N/A"}</p>
//                 <p><strong>Notes:</strong> {medicalHistory?.notes || "N/A"}</p>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <p>No medical history available.</p>
//       )}
//       <button onClick={() => window.history.back()} className="back-btn">
//         Back to Dashboard
//       </button>
//     </div>
//   );
// };

// export default DoctorSeeReport;



// import React, { useEffect, useState } from "react";
// import "./DoctorSeeReport.css"; // Ensure you have proper styling

// const API_BASE_URL = "http://localhost:5000"; // Replace with your actual API base URL

// const DoctorSeeReport = () => {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMedicalHistory = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Token from local storage for authorization
//         const patientId = localStorage.getItem("patientId"); // Dynamically retrieve the patientId
//         const doctorId = localStorage.getItem("doctorId"); // Dynamically retrieve the doctorId

//         if (!token || !patientId || !doctorId) {
//           setLoading(false);
//           setError("Missing token, patientId, or doctorId");
//           return;
//         }

//         // Fetch medical history data from the API endpoint
//         const res = await fetch(`${API_BASE_URL}/api/doctors/${doctorId}/patients/${patientId}/history`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!res.ok) {
//           throw new Error("Failed to fetch medical history");
//         }

//         const data = await res.json();

//         if (data && data.history && Array.isArray(data.history)) {
//           setHistory(data.history);
//         } else {
//           setError("No medical history found.");
//         }
//       } catch (err) {
//         setError(`Something went wrong: ${err.message || 'Unknown error'}`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMedicalHistory();
//   }, []);

//   if (loading) return <p>Loading medical history...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div className="doctor-see-report-container">
//       <h2>🩺 Patient's Medical History</h2>
//       {history.length > 0 ? (
//         history.map((entry, index) => {
//           const { appointmentDate, appointmentTime, reason, doctor, medicalHistory } = entry;
//           return (
//             <div className="history-card" key={entry._id || index}>
//               <p><strong>Appointment Date:</strong> {appointmentDate || "N/A"}</p>
//               <p><strong>Appointment Time:</strong> {appointmentTime || "N/A"}</p>
//               <p><strong>Doctor's Specialty:</strong> {doctor ? doctor.specialty : "N/A"}</p>
//               <p><strong>Reason:</strong> {reason || "N/A"}</p>
//               <div className="medical-history-details">
//                 <p><strong>Diagnosis:</strong> {medicalHistory?.diagnosis || "N/A"}</p>
//                 <p><strong>Prescription:</strong> {medicalHistory?.prescription || "N/A"}</p>
//                 <p><strong>Notes:</strong> {medicalHistory?.notes || "N/A"}</p>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <p>No medical history available.</p>
//       )}
//       <button onClick={() => window.history.back()} className="back-btn">
//         Back to Dashboard
//       </button>
//     </div>
//   );
// };

// export default DoctorSeeReport;




// import React, { useEffect, useState } from "react";
// import "./DoctorSeeReport.css"; // Ensure you have proper styling

// const API_BASE_URL = "http://localhost:5000"; // Replace with your actual API base URL

// const DoctorSeeReport = () => {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMedicalHistory = async () => {
//       const token = localStorage.getItem("token"); // Token from local storage for authorization
//       let patientId = localStorage.getItem("patientId"); // Dynamically retrieve the logged-in patientId
//       const doctorId = localStorage.getItem("doctorId"); // Dynamically retrieve the doctorId

//       console.log("Patient ID:", patientId);
//       console.log("Doctor ID:", doctorId);

//       if (!token || !patientId || !doctorId) {
//         setLoading(false);
//         setError("Missing token, patientId, or doctorId");
//         return;
//       }

//       // Fetch medical history data for the correct patient using their patientId
//       const res = await fetch(`${API_BASE_URL}/api/doctors/${doctorId}/patients/${patientId}/history`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!res.ok) {
//         throw new Error("Failed to fetch medical history");
//       }

//       const data = await res.json();

//       console.log("API Response:", data);

//       if (data.history && Array.isArray(data.history)) {
//         setHistory(data.history);
//       } else {
//         setError("No medical history found.");
//       }

//       setLoading(false);
//     };

//     fetchMedicalHistory();
//   }, []); // Empty dependency array ensures this effect runs once when the component mounts

//   if (loading) return <p>Loading medical history...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div className="doctor-see-report-container">
//       <h2>🩺 Patient's Medical History</h2>
//       {history.length > 0 ? (
//         history.map((entry, index) => {
//           const { appointmentDate, appointmentTime, reason, doctor, medicalHistory } = entry;
//           return (
//             <div className="history-card" key={entry._id || index}>
//               <p><strong>Appointment Date:</strong> {appointmentDate || "N/A"}</p>
//               <p><strong>Appointment Time:</strong> {appointmentTime || "N/A"}</p>
//               <p><strong>Doctor's Specialty:</strong> {doctor ? doctor.specialty : "N/A"}</p>
//               <p><strong>Reason:</strong> {reason || "N/A"}</p>
//               <div className="medical-history-details">
//                 <p><strong>Diagnosis:</strong> {medicalHistory?.diagnosis || "N/A"}</p>
//                 <p><strong>Prescription:</strong> {medicalHistory?.prescription || "N/A"}</p>
//                 <p><strong>Notes:</strong> {medicalHistory?.notes || "N/A"}</p>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <p>No medical history available.</p>
//       )}
//       <button onClick={() => window.history.back()} className="back-btn">
//         Back to Dashboard
//       </button>
//     </div>
//   );
// };

// export default DoctorSeeReport;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get URL params
import "./DoctorSeeReport.css"; // Ensure you have proper styling

const API_BASE_URL = "http://localhost:5000"; // Replace with your actual API base URL

const DoctorSeeReport = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { doctorId, patientId } = useParams(); // Extract doctorId and patientId from URL

  useEffect(() => {
    const fetchMedicalHistory = async () => {
      const token = localStorage.getItem("token"); // Token from local storage for authorization

      console.log("Patient ID:", patientId); // Log the patient ID
      console.log("Doctor ID:", doctorId); // Log the doctor ID

      if (!token || !patientId || !doctorId) {
        setLoading(false);
        setError("Missing token, patientId, or doctorId");
        return;
      }

      try {
        // Fetch medical history data for the correct patient using their patientId
        const res = await fetch(`${API_BASE_URL}/api/doctors/${doctorId}/patients/${patientId}/history`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch medical history");
        }

        const data = await res.json();

        console.log("API Response:", data);

        if (data.history && Array.isArray(data.history)) {
          setHistory(data.history);
        } else {
          setError("No medical history found.");
        }
      } catch (err) {
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchMedicalHistory();
  }, [doctorId, patientId]); // Trigger re-fetch when doctorId or patientId changes

  if (loading) return <p>Loading medical history...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

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
    <div className="doctor-see-report-container">
      <h2>🩺 Patient's Medical History</h2>
      {history.length > 0 ? (
        history.map((entry, index) => {
          const { appointmentDate, appointmentTime, reason, doctor, medicalHistory } = entry;
          return (
            <div className="history-card" key={entry._id || index}>
              <p><strong>Appointment Date:</strong> {appointmentDate || "N/A"}</p>
              <p><strong>Appointment Time:</strong> {appointmentTime || "N/A"}</p>
              <p><strong>Doctor's Specialty:</strong> {doctor ? doctor.specialty : "N/A"}</p>
              <p><strong>Reason:</strong> {reason || "N/A"}</p>
              <div className="medical-history-details">
                <p><strong>Diagnosis:</strong> {medicalHistory?.diagnosis || "N/A"}</p>
                <p><strong>Prescription:</strong> {medicalHistory?.prescription || "N/A"}</p>
                <p><strong>Notes:</strong> {medicalHistory?.notes || "N/A"}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p>No medical history available.</p>
      )}
      <button onClick={() => window.history.back()} className="back-btn">
        Back to Dashboard
      </button>
    </div>
    </>
  );
};

export default DoctorSeeReport;
