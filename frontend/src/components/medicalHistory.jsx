// import React, { useEffect, useState } from "react";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

// const MedicalHistory = () => {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMedicalHistory = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const patientId = localStorage.getItem("patientId"); // or get from context/state
  
//         if (!token || !patientId) {
//           console.log("Missing token or patientId");
//           return;
//         }
  
//         const res = await fetch(`http://localhost:5000/api/medical-history/${patientId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
  
//         if (!res.ok) {
//           throw new Error("Failed to fetch medical history");
//         }
  
//         const data = await res.json();
//         console.log("Fetched medical history:", data); // ✅ log here
//         setHistory(data);
//       } catch (err) {
//         console.error("Error fetching medical history", err);
//       }
//     };
  
//     fetchMedicalHistory();
//   }, []);
  
//   if (loading) return <p>Loading medical history...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>🩺 Your Medical History</h2>
//       {history.length === 0 ? (
//         <p>No medical history found.</p>
//       ) : (
//         <ul>
//           {history.map((entry) => (
//             <li key={entry._id}>
//               <p><strong>Diagnosis:</strong> {entry.medicalHistory?.diagnosis}</p>
//               <p><strong>Prescription:</strong> {entry.medicalHistory?.prescription}</p>
//               <p><strong>Notes:</strong> {entry.medicalHistory?.notes}</p>
//               <p><strong>Date:</strong> {entry.appointmentDate}</p>
//               <p><strong>Status:</strong> {entry.status}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MedicalHistory;



//working
// import React, { useEffect, useState } from "react";
// import "./MedicalHistory.css";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

// const MedicalHistory = () => {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMedicalHistory = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const patientId = localStorage.getItem("patientId");

//         if (!token || !patientId) {
//           console.log("Missing token or patientId");
//           setLoading(false);
//           setError("Missing token or patientId");
//           return;
//         }

//         const res = await fetch(`${API_BASE_URL}/api/medical-history/${patientId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!res.ok) {
//           throw new Error("Failed to fetch medical history");
//         }

//         const data = await res.json();
//         console.log("Fetched medical history:", data);

//         if (data.history && Array.isArray(data.history)) {
//           setHistory(data.history);
//         } else if (data.history) {
//           setHistory([data.history]);
//         } else {
//           setError("No medical history found.");
//         }
//       } catch (err) {
//         console.error("Error fetching medical history:", err);
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
//     <div className="medical-history-container">
//       <h2>🩺 Your Medical History</h2>
//       {history.length > 0 ? (
//         history.map((entry, index) => {
//           const { appointmentDate, appointmentTime, reason, doctor, medicalHistory } = entry;
//           return (
//             <div className="history-card" key={entry._id || index}>
//               <p><strong>Appointment Date:</strong> {appointmentDate || "N/A"}</p>
//               <p><strong>Appointment Time:</strong> {appointmentTime || "N/A"}</p>
//               <p><strong>Doctor:</strong> {doctor || "N/A"}</p>
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
//         Back to Appointments
//       </button>
//     </div>
//   );
// };

// export default MedicalHistory;




import React, { useEffect, useState } from "react";
import "./MedicalHistory.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const MedicalHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMedicalHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        const patientId = localStorage.getItem("patientId");

        if (!token || !patientId) {
          console.log("Missing token or patientId");
          setLoading(false);
          setError("Missing token or patientId");
          return;
        }

        const res = await fetch(`${API_BASE_URL}/api/medical-history/${patientId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch medical history");
        }

        const data = await res.json();
        console.log("Fetched medical history:", data);

        if (data.history && Array.isArray(data.history)) {
          setHistory(data.history);
        } else if (data.history) {
          setHistory([data.history]);
        } else {
          setError("No medical history found.");
        }
      } catch (err) {
        console.error("Error fetching medical history:", err);
        setError("Something went wrong while fetching history.");
      } finally {
        setLoading(false);
      }
    };

    fetchMedicalHistory();
  }, []);

  if (loading) return <p>Loading medical history...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="medical-history-container">
      <h2>🩺 Your Medical History</h2>
      {history.length > 0 ? (
        history.map((entry, index) => {
          const { appointmentDate, appointmentTime, reason, doctor, medicalHistory } = entry;
          return (
            <div className="history-card" key={entry._id || index}>
              <p><strong>Appointment Date:</strong> {appointmentDate || "N/A"}</p>
              <p><strong>Appointment Time:</strong> {appointmentTime || "N/A"}</p>
              {/* Make sure you render a specific property like fullName */}
              <p><strong>Doctor:</strong> {doctor && doctor.fullName ? doctor.fullName : "N/A"}</p>
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
        Back to Appointments
      </button>
    </div>
  );
};

export default MedicalHistory;
