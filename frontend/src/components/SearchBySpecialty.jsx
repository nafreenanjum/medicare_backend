// import React, { useState, useEffect } from "react";

// const SearchBySpecialty = () => {
//   const [selectedSpecialty, setSelectedSpecialty] = useState("");
//   const [specialists, setSpecialists] = useState([]);
//   const [error, setError] = useState("");

//   const specialties = [
//     "Dermotologist", // Ensure the typo "Dermotologist" is here
//     "Cardiologist",
//     "Neurologist",
//     "Pediatrician",
//     "Orthopedic",
//     // Add more specialties as needed
//   ];

//   useEffect(() => {
//     const fetchSpecialists = async () => {
//       try {
//         const token = localStorage.getItem("token"); // adjust based on where your token is stored
  
//         const response = await fetch(
//           `http://localhost:5000/api/doctors/specialty/${selectedSpecialty}`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`, // send token here
//             },
//           }
//         );
  
//         if (!response.ok) {
//           throw new Error("Failed to load specialists");
//         }
  
//         const data = await response.json();
//         setSpecialists(data);
//         setError("");  // Reset error on success
//       } catch (err) {
//         setError(err.message);  // Set error if any
//         setSpecialists([]);  // Clear specialists list on error
//       }
//     };
  
//     if (selectedSpecialty) {
//       fetchSpecialists();
//     }
//   }, [selectedSpecialty]);  // Runs when selectedSpecialty changes
  
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Search Doctors by Specialty</h2>

//       <select
//         value={selectedSpecialty}
//         onChange={(e) => setSelectedSpecialty(e.target.value)}
//       >
//         <option value="">-- Select Specialty --</option>
//         {specialties.map((specialty) => (
//           <option key={specialty} value={specialty}>
//             {specialty}
//           </option>
//         ))}
//       </select>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {specialists.length > 0 ? (
//         <ul>
//           {specialists.map((doc) => (
//             <li key={doc._id}>
//               <strong>{doc.fullName}</strong> - {doc.specialty} <br />
//               Location: {doc.location} <br />
//               Experience: {doc.experience} years <br />
//               Consultation Fee: ₹{doc.consultationFee} <br />
//               Bio: {doc.bio}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         selectedSpecialty && !error && <p>No doctors found.</p>
//       )}
//     </div>
//   );
// };

// export default SearchBySpecialty;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import './SearchBySpecialty.css';

const SearchBySpecialty = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [specialists, setSpecialists] = useState([]);
  const [error, setError] = useState("");

  const specialties = [
    "Dermatologist", // Ensure the typo "Dermatologist" is here
    "Cardiologist",
    "Neurologist",
    "Pediatrician",
    "Orthopedic",
    // Add more specialties as needed
  ];

  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    const fetchSpecialists = async () => {
      try {
        const token = localStorage.getItem("token"); // adjust based on where your token is stored
  
        const response = await fetch(
          `http://localhost:5000/api/doctors/specialty/${selectedSpecialty}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // send token here
            },
          }
        );
  
        if (!response.ok) {
          throw new Error("Failed to load specialists");
        }
  
        const data = await response.json();
        setSpecialists(data);
        setError("");  // Reset error on success
      } catch (err) {
        setError(err.message);  // Set error if any
        setSpecialists([]);  // Clear specialists list on error
      }
    };
  
    if (selectedSpecialty) {
      fetchSpecialists();
    }
  }, [selectedSpecialty]);  // Runs when selectedSpecialty changes

  const handleBookAppointment = (doctorId, doctor) => {
    // Navigate to the appointment booking page and pass the doctor data
    navigate(`/book-appointment/${doctorId}`, { state: { doctor } });
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
    
    <div style={{ padding: "20px" }}>
      <h2>Search Doctors by Specialty</h2>

      <select
        value={selectedSpecialty}
        onChange={(e) => setSelectedSpecialty(e.target.value)}
      >
        <option value="">-- Select Specialty --</option>
        {specialties.map((specialty) => (
          <option key={specialty} value={specialty}>
            {specialty}
          </option>
        ))}
      </select>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {specialists.length > 0 ? (
        <ul>
          {specialists.map((doc) => (
            <li key={doc._id}>
              <strong>{doc.fullName}</strong> - {doc.specialty} <br />
              Location: {doc.location} <br />
              Experience: {doc.experience} years <br />
              Consultation Fee: ₹{doc.consultationFee} <br />
              Bio: {doc.bio} <br />
              <button onClick={() => handleBookAppointment(doc._id, doc)}>
                Book Appointment
              </button>
            </li>
          ))}
        </ul>
      ) : (
        selectedSpecialty && !error && <p>No doctors found.</p>
      )}
      <button onClick={() => window.history.back()} className="backbtn">
        Back to Dashboard
      </button>
    </div>
    </>
  );
};

export default SearchBySpecialty;
