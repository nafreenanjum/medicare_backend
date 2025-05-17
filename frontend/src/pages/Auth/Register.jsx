// import React, { useState } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const navigate = useNavigate();

//   const [role, setRole] = useState('patient');
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     password: '',
//     dateOfBirth: '',
//     gender: '',
//     address: '',
//   });

//   const [profilePhoto, setProfilePhoto] = useState(null); // New photo state
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePhotoChange = (e) => {
//     setProfilePhoto(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const url =
//       role === 'patient'
//         ? 'http://localhost:5000/api/patients/register'
//         : 'http://localhost:5000/api/doctors/register';

//     // Prepare FormData
//     const form = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       form.append(key, value);
//     });
//     if (profilePhoto) {
//       form.append('profilePhoto', profilePhoto); // Attach file
//     }

//     try {
//       const res = await axios.post(url, form, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setSuccess(res.data.message);
//       setError('');
//       setTimeout(() => navigate('/login'), 2000);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Register as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>

//       <div className="role-switcher">
//         <button
//           onClick={() => setRole('patient')}
//           className={role === 'patient' ? 'active' : ''}
//         >
//           Patient
//         </button>
//         <button
//           onClick={() => setRole('doctor')}
//           className={role === 'doctor' ? 'active' : ''}
//         >
//           Doctor
//         </button>
//       </div>

//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="date"
//           name="dateOfBirth"
//           onChange={handleChange}
//           required
//         />

//         <select name="gender" onChange={handleChange} required>
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>

//         <textarea
//           name="address"
//           placeholder="Address"
//           onChange={handleChange}
//           required
//         ></textarea>

//         <input type="file" name="profilePhoto" onChange={handlePhotoChange} />

//         {error && <p className="error">{error}</p>}
//         {success && <p className="success">{success}</p>}

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;



// import React, { useState } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import DoctorRegister from './DoctorRegister'; // Import Doctor Register Form

// const Register = () => {
//   const navigate = useNavigate();

//   const [role, setRole] = useState('patient'); // Default role is 'patient'
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     password: '',
//     dateOfBirth: '',
//     gender: '',
//     address: '',
//   });

//   const [profilePhoto, setProfilePhoto] = useState(null); // New photo state
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePhotoChange = (e) => {
//     setProfilePhoto(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const url =
//       role === 'patient'
//         ? 'http://localhost:5000/api/patients/register'
//         : 'http://localhost:5000/api/doctors/register';

//     // Prepare FormData
//     const form = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       form.append(key, value);
//     });
//     if (profilePhoto) {
//       form.append('profilePhoto', profilePhoto); // Attach file
//     }

//     try {
//       const res = await axios.post(url, form, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setSuccess(res.data.message);
//       setError('');
//       setTimeout(() => navigate('/login'), 2000);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Register as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>

//       <div className="role-switcher">
//         <button
//           onClick={() => setRole('patient')}
//           className={role === 'patient' ? 'active' : ''}
//         >
//           Patient
//         </button>
//         <button
//           onClick={() => setRole('doctor')}
//           className={role === 'doctor' ? 'active' : ''}
//         >
//           Doctor
//         </button>
//       </div>

//       {/* Conditionally render the form based on selected role */}
//       {role === 'patient' ? (
//         <form onSubmit={handleSubmit} encType="multipart/form-data">
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="date"
//             name="dateOfBirth"
//             onChange={handleChange}
//             required
//           />
//           <select name="gender" onChange={handleChange} required>
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//           <textarea
//             name="address"
//             placeholder="Address"
//             onChange={handleChange}
//             required
//           ></textarea>
//           <input type="file" name="profilePhoto" onChange={handlePhotoChange} />
//           <button type="submit">Register</button>
//         </form>
//       ) : (
//         // Render Doctor registration form here when role is 'doctor'
//         <DoctorRegister setError={setError} setSuccess={setSuccess} />
//       )}

//       {error && <p className="error">{error}</p>}
//       {success && <p className="success">{success}</p>}
//     </div>
//   );
// };

// export default Register;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import DoctorRegister from './DoctorRegister'; // Import Doctor Register Form

// const Register = () => {
//   const navigate = useNavigate();

//   const [role, setRole] = useState('patient'); // Default role is 'patient'
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     password: '',
//     dateOfBirth: '',
//     gender: '',
//     address: '',
//   });

//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePhotoChange = (e) => {
//     setProfilePhoto(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const url =
//       role === 'patient'
//         ? 'http://localhost:5000/api/patients/register'
//         : 'http://localhost:5000/api/doctors/register';

//     const form = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       form.append(key, value);
//     });
//     if (profilePhoto) {
//       form.append('profilePhoto', profilePhoto);
//     }

//     try {
//       const res = await axios.post(url, form, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       setSuccess(res.data.message);
//       setError('');
//       setTimeout(() => navigate('/login'), 2000);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Register as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>

//       <div className="role-switcher">
//         <button
//           onClick={() => setRole('patient')}
//           className={role === 'patient' ? 'active' : ''}
//         >
//           Patient
//         </button>
//         <button
//           onClick={() => setRole('doctor')}
//           className={role === 'doctor' ? 'active' : ''}
//         >
//           Doctor
//         </button>
//       </div>

//       {role === 'patient' ? (
//         <form onSubmit={handleSubmit} className="custom-form" encType="multipart/form-data">
//           <div className="form-group">
//             <label>Full Name</label>
//             <input type="text" name="fullName" onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Email</label>
//             <input type="email" name="email" onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Phone</label>
//             <input type="tel" name="phone" onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input type="password" name="password" onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Date of Birth</label>
//             <input type="date" name="dateOfBirth" onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Gender</label>
//             <select name="gender" onChange={handleChange} required>
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Address</label>
//             <textarea name="address" onChange={handleChange} required></textarea>
//           </div>

//           <div className="form-group">
  
//   <input
//     type="file"
//     name="profilePhoto"
//     onChange={handlePhotoChange}
//     id="profilePhotoInput"
//   />
//   <small className="file-note">Please upload your profile photo here</small>
// </div>


//           <button type="submit" className="submit-btn">Register</button>
//         </form>
//       ) : (
//         <DoctorRegister setError={setError} setSuccess={setSuccess} />
//       )}

//       {error && <p className="error">{error}</p>}
//       {success && <p className="success">{success}</p>}
//     </div>
//   );
// };

// export default Register;



// import React, { useState } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import DoctorRegister from './DoctorRegister'; // Import Doctor Register Form

// const Register = () => {
//   const navigate = useNavigate();

//   const [role, setRole] = useState('patient'); // Default role is 'patient'
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     password: '',
//     dateOfBirth: '',
//     gender: '',
//     address: '',
//   });

//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePhotoChange = (e) => {
//     setProfilePhoto(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const url =
//       role === 'patient'
//         ? 'http://localhost:5000/api/patients/register'
//         : 'http://localhost:5000/api/doctors/register';

//     const form = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       form.append(key, value);
//     });
//     if (profilePhoto) {
//       form.append('profilePhoto', profilePhoto);
//     }

//     try {
//       const res = await axios.post(url, form, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       setSuccess(res.data.message);
//       setError('');
//       setTimeout(() => navigate('/login'), 2000);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="auth-container">
//   <form onSubmit={handleSubmit} className="custom-form" encType="multipart/form-data">
//     <div className="form-header">
//       <h2>Register as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>

//       <div className="role-switcher">
//         <button
//           type="button"
//           onClick={() => setRole('patient')}
//           className={role === 'patient' ? 'active' : ''}
//         >
//           Patient
//         </button>
//         <button
//           type="button"
//           onClick={() => setRole('doctor')}
//           className={role === 'doctor' ? 'active' : ''}
//         >
//           Doctor
//         </button>
//       </div>
//     </div>

//     {role === 'patient' && (
//       <>
//         <div className="form-group">
//           <input type="text" name="fullName" onChange={handleChange} placeholder="Full Name" required />
//         </div>

//         <div className="form-group">
//           <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
//         </div>

//         <div className="form-group">
//           <input type="tel" name="phone" onChange={handleChange} placeholder="Phone" required />
//         </div>

//         <div className="form-group">
//           <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
//         </div>

//         <div className="form-group">
//           <input type="date" name="dateOfBirth" onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <select name="gender" onChange={handleChange} required>
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <textarea name="address" onChange={handleChange} placeholder="Address" required />
//         </div>

//         <div className="form-group">
//           <input type="file" name="profilePhoto" onChange={handlePhotoChange} />
//           <small className="file-note">Please upload your profile photo here</small>
//         </div>

//         <button type="submit" className="submit-btn">Register</button>
//       </>
//     )}

//     {role === 'doctor' && <DoctorRegister setError={setError} setSuccess={setSuccess} />}
    
//     {error && <p className="error">{error}</p>}
//     {success && <p className="success">{success}</p>}
//   </form>
// </div>

//   );
// };

// export default Register;


import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import DoctorRegister from './DoctorRegister'; // Import Doctor Register Form

const Register = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState('patient'); // Default role is 'patient'
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    dateOfBirth: '',
    gender: '',
    address: '',
  });

  const [profilePhoto, setProfilePhoto] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      role === 'patient'
        ? 'http://localhost:5000/api/patients/register'
        : 'http://localhost:5000/api/doctors/register';

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });
    if (profilePhoto) {
      form.append('profilePhoto', profilePhoto);
    }

    try {
      const res = await axios.post(url, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setSuccess(res.data.message);
      setError('');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      setSuccess('');
    }
  };

  return (
    <div className="auth-container">
      <div className="login-header">
        <div className="logo" onClick={() => navigate('/')}>
          <img src="/logomedicare.jpg" alt="Logo" />
        </div>
        <button className="home-btn" onClick={() => navigate('/')}>
          Home 
        </button>
      </div>
      <form onSubmit={handleSubmit} className={`custom-form ${role === 'patient' ? 'patient-form' : 'doctor-form'}`} encType="multipart/form-data">
        <div className="form-header">
          <h2>Register as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>

          <div className="role-switcher">
            <button
              type="button"
              onClick={() => setRole('patient')}
              className={role === 'patient' ? 'active' : ''}
            >
              Patient
            </button>
            <button
              type="button"
              onClick={() => setRole('doctor')}
              className={role === 'doctor' ? 'active' : ''}
            >
              Doctor
            </button>
          </div>
        </div>

        {role === 'patient' && (
          <>
            <div className="form-group">
              <input type="text" name="fullName" onChange={handleChange} placeholder="Full Name" required />
            </div>

            <div className="form-group">
              <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
            </div>

            <div className="form-group">
              <input type="tel" name="phone" onChange={handleChange} placeholder="Phone" required />
            </div>

            <div className="form-group">
              <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
            </div>

            <div className="form-group">
              <input type="date" name="dateOfBirth" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <select name="gender" onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <textarea name="address" onChange={handleChange} placeholder="Address" required />
            </div>

            <div className="form-group">
              <input type="file" name="profilePhoto" onChange={handlePhotoChange} />
              <small className="file-note">Please upload your profile photo here</small>
            </div>

            <button type="submit" className="submit-btn">Register</button>
          </>
        )}

        {role === 'doctor' && <DoctorRegister setError={setError} setSuccess={setSuccess} />}

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default Register;
