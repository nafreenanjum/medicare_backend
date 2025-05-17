// import React, { useState } from 'react';
// import './SearchDoctor.css';

// const SearchDoctor = () => {
//   const [filters, setFilters] = useState({
//     name: '',
//     location: '',
//     specialization: '',
//     date: '',
//     time: ''
//   });

//   const [results, setResults] = useState([]);
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({
//       ...filters,
//       [name]: value
//     });
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setResults([]);

//     try {
//       const token = localStorage.getItem('token');

//       if (!token) {
//         setMessage('Please log in to search.');
//         return;
//       }

//       const query = new URLSearchParams(
//         Object.entries(filters).reduce((acc, [key, value]) => {
//           if (value) acc[key] = value;
//           return acc;
//         }, {})
//       ).toString();
      

//       const res = await fetch(`http://localhost:5000/api/doctors/search?${query}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setResults(data);
//         if (data.length === 0) {
//           setMessage('No doctors found for the given filters.');
//         }
//       } else {
//         setMessage(data.message || 'Search failed');
//       }
//     } catch (error) {
//       console.error('Search error:', error);
//       setMessage('Something went wrong while searching.');
//     }
//   };

//   return (
//     <div className="search-container">
//       <h2>Search Doctors</h2>
//       <hr />
//       <form onSubmit={handleSearch} className="search-form">
//         <input type="text" name="name" placeholder="Name" value={filters.name} onChange={handleChange} />
//         <input type="text" name="location" placeholder="Location" value={filters.location} onChange={handleChange} />
//         <input type="text" name="specialization" placeholder="Specialization" value={filters.specialization} onChange={handleChange} />
//         <input type="date" name="date" value={filters.date} onChange={handleChange} />
//         <input type="time" name="time" value={filters.time} onChange={handleChange} />
//         <button type="submit">Search</button>
//       </form>

//       {message && <p style={{ color: 'red' }}>{message}</p>}

//       {results.length > 0 && (
//         <div className="results">
//           <h3>Search Results</h3>
//           <ul>
//             {results.map((doctor) => (
//               <li key={doctor._id}>
//                 <strong>{doctor.name}</strong> - {doctor.specialization}, {doctor.location}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchDoctor;import React, { useState } from 'react';
// import React, { useState } from 'react';
// import './SearchDoctor.css';

// const SearchDoctor = () => {
//   const [filters, setFilters] = useState({
//     name: '',
//     location: '',
//     specialization: '',  // Adjusted to match backend's 'specialty'
//     date: '',  // For doctor availability based on the date
//     time: ''   // For time of consultation
//   });

//   const [results, setResults] = useState([]);
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({
//       ...filters,
//       [name]: value
//     });
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setResults([]);

//     try {
//       const token = localStorage.getItem('token');

//       if (!token) {
//         setMessage('Please log in to search.');
//         return;
//       }

//       // Log the filters for debugging
//       console.log('Filters:', filters);

//       // Build the query string from filters
//       const query = new URLSearchParams(
//         Object.entries(filters).reduce((acc, [key, value]) => {
//           if (value) acc[key] = value;
//           return acc;
//         }, {})
//       ).toString();

//       // Log the full URL
//       const requestUrl = `http://localhost:5000/api/doctors/search?${query}`;
//       console.log('Fetching:', requestUrl);

//       const res = await fetch(requestUrl, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         setMessage(errorData.message || 'Search failed');
//         return;
//       }

//       const data = await res.json();
//       console.log('Search result:', data);

//       if (data.length === 0) {
//         setMessage('No doctors found for the given filters.');
//       } else {
//         setResults(data);
//       }
//     } catch (error) {
//       console.error('Search error:', error);
//       setMessage('Something went wrong while searching.');
//     }
//   };

//   return (
//     <div className="search-container">
//       <h2>Search Doctors</h2>
//       <hr />
//       <form onSubmit={handleSearch} className="search-form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={filters.name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           value={filters.location}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="specialization"
//           placeholder="Specialization"
//           value={filters.specialization}
//           onChange={handleChange}
//         />
//         <input
//           type="date"
//           name="date"
//           value={filters.date}
//           onChange={handleChange}
//         />
//         <input
//           type="time"
//           name="time"
//           value={filters.time}
//           onChange={handleChange}
//         />
//         <button type="submit">Search</button>
//       </form>

//       {message && <p style={{ color: 'red' }}>{message}</p>}

//       {results.length > 0 && (
//         <div className="results">
//           <h3>Search Results</h3>
//           <ul>
//             {results.map((doctor) => (
//               <li key={doctor._id}>
//                 <strong>{doctor.fullName}</strong> - {doctor.specialty}, {doctor.location}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import axios from 'axios';
// import './SearchDoctor.css';

// const SearchDoctor = ({ setResults, setError }) => {
//   const [searchParams, setSearchParams] = useState({
//     name: '',
//     location: '',
//     specialization: '',
//     time: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSearchParams((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.get('http://localhost:5000/api/doctors/search', {
//         params: searchParams
//       });

//       setResults(res.data);
//       setError('');
//     } catch (err) {
//       setResults([]);
//       setError(err.response?.data?.message || 'Doctor search failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSearch} className="search-doctor-form">
//       <h2>Search Doctors</h2>

//       {/* Doctor Name */}
//       <input
//         type="text"
//         name="name"
//         placeholder="Doctor's Name"
//         value={searchParams.name}
//         onChange={handleChange}
//       />

//       {/* Location */}
//       <input
//         type="text"
//         name="location"
//         placeholder="Location"
//         value={searchParams.location}
//         onChange={handleChange}
//       />

//       {/* Specialization */}
//       <input
//         type="text"
//         name="specialization"
//         placeholder="Specialization"
//         value={searchParams.specialization}
//         onChange={handleChange}
//       />

//       {/* Time in 24-hour format */}
//       <input
//         type="time"
//         name="time"
//         value={searchParams.time}
//         onChange={handleChange}
//         required
//       />

//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchDoctor;



// import React, { useState } from 'react';
// import axios from 'axios';
// import './SearchDoctor.css';

// const SearchDoctor = ({ setResults, setError }) => {
//   const [searchParams, setSearchParams] = useState({
//     name: '',
//     location: '',
//     specialization: '',
//     time: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSearchParams((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token'); // Ensure this is stored during login

//       const res = await axios.get('http://localhost:5000/api/doctors/search', {
//         params: searchParams,
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       if (typeof setResults === 'function') setResults(res.data);
//       if (typeof setError === 'function') setError('');
//     } catch (err) {
//       if (typeof setResults === 'function') setResults([]);
//       if (typeof setError === 'function') {
//         setError(err.response?.data?.message || 'Doctor search failed');
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSearch} className="search-doctor-form">
//       <h2>Search Doctors</h2>

//       <input
//         type="text"
//         name="name"
//         placeholder="Doctor's Name"
//         value={searchParams.name}
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         name="location"
//         placeholder="Location"
//         value={searchParams.location}
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         name="specialization"
//         placeholder="Specialization"
//         value={searchParams.specialization}
//         onChange={handleChange}
//       />

//       <input
//         type="time"
//         name="time"
//         value={searchParams.time}
//         onChange={handleChange}
//         required
//       />

//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchDoctor;



// import React, { useState } from 'react';
// import axios from 'axios';
// import './SearchDoctor.css';

// const SearchDoctor = () => {
//   const [searchParams, setSearchParams] = useState({
//     name: '',
//     location: '',
//     specialization: '',
//     time: ''
//   });
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSearchParams((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token'); // Ensure this is stored during login

//       const res = await axios.get('http://localhost:5000/api/doctors/search', {
//         params: searchParams,
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       setResults(res.data); // Set search results
//       setError(''); // Clear any previous errors
//     } catch (err) {
//       setResults([]); // Clear previous results if error occurs
//       setError(err.response?.data?.message || 'Doctor search failed');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch} className="search-doctor-form">
//         <h2>Search Doctors</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Doctor's Name"
//           value={searchParams.name}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           value={searchParams.location}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="specialization"
//           placeholder="Specialization"
//           value={searchParams.specialization}
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={searchParams.time}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Search</button>
//       </form>

//       {/* Display results or error message */}
//       {error && <p className="error">{error}</p>}
      
//       {results.length === 0 ? (
//         !error && <p>No doctors found. Please try another search.</p> // Only show when there’s no error
//       ) : (
//         <div className="doctor-list">
//           {results.map((doctor, index) => (
//             <div key={index} className="doctor-card">
//               <h3>{doctor.name}</h3>
//               <p>{doctor.specialization}</p>
//               <p>{doctor.location}</p>
//               <p>Available at: {doctor.time}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchDoctor;

//working 
// import React, { useState } from 'react';
// import axios from 'axios';
// import './SearchDoctor.css';

// const SearchDoctor = () => {
//   const [searchParams, setSearchParams] = useState({
//     name: '',
//     location: '',
//     specialization: '', // Added specialization here
//     time: ''
//   });
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSearchParams((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token'); // Ensure this is stored during login

//       const res = await axios.get('http://localhost:5000/api/doctors/search', {
//         params: searchParams,
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       console.log(res.data); // Log the API response to check its structure

//       setResults(res.data); // Set search results
//       setError(''); // Clear any previous errors
//     } catch (err) {
//       setResults([]); // Clear previous results if error occurs
//       setError(err.response?.data?.message || 'Doctor search failed');
//     }
//   };

//   return (
//     <div className="search-doctor-container">
//       <form onSubmit={handleSearch} className="search-form">
//         <h2>Search Doctors</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Doctor's Name"
//           value={searchParams.name}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           value={searchParams.location}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="specialization"
//           placeholder="Specialization"
//           value={searchParams.specialization} // Ensure this is bound to the state
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={searchParams.time}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Search</button>
//       </form>

//       {/* Display error or results */}
//       {error && <p className="message">{error}</p>}

//       {results.length === 0 && !error ? (
//         <p>No doctors found. Please try another search.</p>
//       ) : (
//         <div className="doctor-card-container">
//           {results.map((doctor, index) => (
//             <div key={index} className="doctor-card">
//               <h3>{doctor.fullName}</h3>
//               <p><strong>Location:</strong> {doctor.location || 'Not available'}</p>
//               <p><strong>Specialization:</strong> {doctor.specialty || 'Not available'}</p>
//               <p><strong>Available at:</strong> {doctor.workingHours?.startTime && doctor.workingHours?.endTime ? `${doctor.workingHours.startTime} - ${doctor.workingHours.endTime}` : 'Not available'}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchDoctor;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // ✅ import this
// import axios from 'axios';
// import './SearchDoctor.css';

// const SearchDoctor = () => {
//   const [searchParams, setSearchParams] = useState({
//     name: '',
//     location: '',
//     time: ''
//   });
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // ✅

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSearchParams((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       const res = await axios.get('http://localhost:5000/api/doctors/search', {
//         params: searchParams,
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setResults(res.data);
//       setError('');
//     } catch (err) {
//       setResults([]);
//       setError(err.response?.data?.message || 'Doctor search failed');
//     }
//   };

//   const handleBookClick = (doctor) => {
//     navigate(`/book-appointment/${doctor._id}`, { state: { doctor } }); // ✅ pass doctor data via route state
//   };

//   return (
//     <div className="search-doctor-container">
//       <form onSubmit={handleSearch} className="search-form">
//         <h2>Search Doctors</h2>
//         <input type="text" name="name" placeholder="Doctor's Name" value={searchParams.name} onChange={handleChange} />
//         <input type="text" name="location" placeholder="Location" value={searchParams.location} onChange={handleChange} />
//         <input type="time" name="time" value={searchParams.time} onChange={handleChange} required />
//         <button type="submit">Search</button>
//       </form>

//       {error && <p className="message">{error}</p>}

//       {results.length === 0 && !error ? (
//         <p>No doctors found. Please try another search.</p>
//       ) : (
//         <div className="doctor-card-container">
//           {results.map((doctor) => (
//             <div key={doctor._id} className="doctor-card">
//               <h3>{doctor.fullName}</h3>
//               <p><strong>Location:</strong> {doctor.location}</p>
//               <p><strong>Specialization:</strong> {doctor.specialty || 'Not available'}</p>
//               <p><strong>Available at:</strong> {doctor.workingHours?.startTime} - {doctor.workingHours?.endTime}</p>
//               <button onClick={() => handleBookClick(doctor)}>Book Appointment</button> {/* ✅ */}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchDoctor;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import this
import axios from 'axios';
import './searchDoctor.css';

const SearchDoctor = () => {
  const [searchParams, setSearchParams] = useState({
    name: '',
    location: '',
    time: ''
  });
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // ✅

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');

      // Only include parameters that are not empty
      const params = {};
      if (searchParams.name) params.name = searchParams.name;
      if (searchParams.location) params.location = searchParams.location;
      if (searchParams.time) params.time = searchParams.time;

      const res = await axios.get('http://localhost:5000/api/doctors/search', {
        params,
        headers: { Authorization: `Bearer ${token}` }
      });

      setResults(res.data);
      setError('');
    } catch (err) {
      setResults([]);
      setError(err.response?.data?.message || 'Doctor search failed');
    }
  };

  const handleBookClick = (doctor) => {
    navigate(`/book-appointment/${doctor._id}`, { state: { doctor } }); // ✅ pass doctor data via route state
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
    <div className="search-doctor-container">
      <form onSubmit={handleSearch} className="search-form">
        <h2>Search Doctors</h2>
        <input
          type="text"
          name="name"
          placeholder="Doctor's Name"
          value={searchParams.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={searchParams.location}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          value={searchParams.time}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="message">{error}</p>}

      {results.length === 0 && !error ? (
        <p>No doctors found. Please try another search.</p>
      ) : (
        <div className="doctor-card-container">
          {results.map((doctor) => (
            <div key={doctor._id} className="doctor-card">
              <h3>{doctor.fullName}</h3>
              <p><strong>Location:</strong> {doctor.location}</p>
              <p><strong>Specialization:</strong> {doctor.specialty || 'Not available'}</p>
              <p><strong>Available at:</strong> {doctor.workingHours?.startTime} - {doctor.workingHours?.endTime}</p>
              <button onClick={() => handleBookClick(doctor)}>Book Appointment</button>
            </div>
          ))}
        </div>
      )} 
      <button onClick={() => window.history.back()} className="backbtn">
        Back to Dashboard
      </button>
    </div>
    </>
  );
};

export default SearchDoctor;
