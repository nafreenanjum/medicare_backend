// import React, { useState } from 'react';
// import axios from 'axios';
// import './DoctorRegister.css';

// const DoctorRegister = ({ setError, setSuccess }) => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     password: '',
//     specialty: '',
//     experience: '',
//     consultationFee: '',
//     bio: '',
//     location: '',
//     startTime: '',  // Added start time for working hours
//     endTime: '',    // Added end time for working hours
//     availableDays: '',  // Plain text for available days
//   });

//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [degreeDocs, setDegreeDocs] = useState([]);  // For degree document files

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePhotoChange = (e) => {
//     setProfilePhoto(e.target.files[0]);
//   };

//   const handleDegreeDocsChange = (e) => {
//     setDegreeDocs(e.target.files);  // Handling multiple degree documents
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Format workingHours and availableDays
//     const workingHours = {
//       startTime: formData.startTime,
//       endTime: formData.endTime,
//     };

//     const availableDays = formData.availableDays.split(',').map((day) => day.trim());

//     const form = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       // Don't append startTime and endTime directly, we will append workingHours as an object
//       if (key !== 'startTime' && key !== 'endTime' && key !== 'availableDays') {
//         form.append(key, value);
//       }
//     });

//     // Append workingHours as an object
//     form.append('workingHours', JSON.stringify(workingHours));

//     // Append availableDays as an array
//     form.append('availableDays', JSON.stringify(availableDays));

//     // Attach the profile photo if present
//     if (profilePhoto) {
//       form.append('photo', profilePhoto);  // Changed 'profilePhoto' to 'photo'
//     }

//     // Attach degree documents if any
//     if (degreeDocs.length > 0) {
//       for (let file of degreeDocs) {
//         form.append('degreeDocs', file);
//       }
//     }

//     try {
//       const res = await axios.post('http://localhost:5000/api/doctors/register', form, {
//         headers: {
//           'Content-Type': 'multipart/form-data',  // Ensure correct header for file uploads
//         },
//       });
//       setSuccess(res.data.message);
//       setError('');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//       setSuccess('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} encType="multipart/form-data" className="doctor-register-form">
//       <h2>Doctor Registration</h2>

//       {/* Full Name */}
//       <input
//         type="text"
//         name="fullName"
//         placeholder="Full Name"
//         value={formData.fullName}
//         onChange={handleChange}
//         required
//       />

//       {/* Email */}
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />

//       {/* Phone */}
//       <input
//         type="tel"
//         name="phone"
//         placeholder="Phone"
//         value={formData.phone}
//         onChange={handleChange}
//         required
//       />

//       {/* Password */}
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={handleChange}
//         required
//       />

//       {/* Specialty */}
//       <input
//         type="text"
//         name="specialty"
//         placeholder="Specialty"
//         value={formData.specialty}
//         onChange={handleChange}
//         required
//       />

//       {/* Experience */}
//       <input
//         type="number"
//         name="experience"
//         placeholder="Experience (years)"
//         value={formData.experience}
//         onChange={handleChange}
//         required
//       />

//       {/* Consultation Fee */}
//       <input
//         type="number"
//         name="consultationFee"
//         placeholder="Consultation Fee"
//         value={formData.consultationFee}
//         onChange={handleChange}
//         required
//       />

//       {/* Bio */}
//       <textarea
//         name="bio"
//         placeholder="Bio"
//         value={formData.bio}
//         onChange={handleChange}
//         required
//       ></textarea>

//       {/* Location */}
//       <input
//         type="text"
//         name="location"
//         placeholder="Location"
//         value={formData.location}
//         onChange={handleChange}
//         required
//       />

//       {/* Start Time for Working Hours */}
//       {/* Start Time for Working Hours */}
// <input
//   type="time"
//   name="startTime"
//   placeholder="Start Time (e.g. '09:00')"
//   value={formData.startTime}
//   onChange={handleChange}
//   required
// />

// {/* End Time for Working Hours */}
// <input
//   type="time"
//   name="endTime"
//   placeholder="End Time (e.g. '17:00')"
//   value={formData.endTime}
//   onChange={handleChange}
//   required
// />

//       {/* Available Days */}
//       <input
//         type="text"
//         name="availableDays"
//         placeholder="Available Days (e.g. 'Monday, Tuesday')"
//         value={formData.availableDays}
//         onChange={handleChange}
//         required
//       />

//       {/* Profile Photo */}
//       <input
//         type="file"
//         name="photo"  // Changed 'profilePhoto' to 'photo'
//         onChange={handlePhotoChange}
//       />

//       {/* Degree Documents */}
//       <input
//         type="file"
//         name="degreeDocs"
//         multiple
//         onChange={handleDegreeDocsChange}
//       />

//       {/* Submit Button */}
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default DoctorRegister;



// import React, { useState } from 'react';
// import axios from 'axios';
// import './DoctorRegister.css';
// import { useNavigate } from 'react-router-dom';


// const DoctorRegister = ({ setError, setSuccess }) => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     password: '',
//     specialty: '',
//     experience: '',
//     consultationFee: '',
//     bio: '',
//     location: '',
//     startTime: '',
//     endTime: '',
//     availableDays: [],  // Store selected days as an array
//   });
  


//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [degreeDocs, setDegreeDocs] = useState([]);
//   const [showDays, setShowDays] = useState(false); // Controls the visibility of available days checkboxes

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAvailableDaysChange = (e) => {
//     const { value } = e.target;
//     setFormData((prev) => {
//       const updatedDays = prev.availableDays.includes(value)
//         ? prev.availableDays.filter(day => day !== value)  // Remove if already selected
//         : [...prev.availableDays, value];  // Add if not selected
//       return { ...prev, availableDays: updatedDays };
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const workingHours = {
//       startTime: formData.startTime,
//       endTime: formData.endTime,
      
//     };

//     const form = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (key !== 'startTime' && key !== 'endTime' && key !== 'availableDays') {
//         form.append(key, value);
//       }
//     });

//     form.append('workingHours', JSON.stringify(workingHours));
//     form.append('availableDays', JSON.stringify(formData.availableDays));

//     if (profilePhoto) {
//       form.append('photo', profilePhoto);
//     }

//     if (degreeDocs.length > 0) {
//       for (let file of degreeDocs) {
//         form.append('degreeDocs', file);
//       }
//     }

//     try {
//       const res = await axios.post('http://localhost:5000/api/doctors/register', form, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setSuccess(res.data.message);
//       setError('');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//       setSuccess('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} encType="multipart/form-data" className="doctor-register-form">
      

//       {/* Full Name */}
//       <input
//         type="text"
//         name="fullName"
//         placeholder="Full Name"
//         value={formData.fullName}
//         onChange={handleChange}
//         required
//       />

//       {/* Email */}
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />

//       {/* Phone */}
//       <input
//         type="tel"
//         name="phone"
//         placeholder="Phone"
//         value={formData.phone}
//         onChange={handleChange}
//         required
//       />

//       {/* Password */}
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={handleChange}
//         required
//       />

//       {/* Specialty */}
//       <input
//         type="text"
//         name="specialty"
//         placeholder="Specialty"
//         value={formData.specialty}
//         onChange={handleChange}
//         required
//       />

//       {/* Experience */}
//       <input
//         type="number"
//         name="experience"
//         placeholder="Experience (years)"
//         value={formData.experience}
//         onChange={handleChange}
//         required
//       />

//       {/* Consultation Fee */}
//       <input
//         type="number"
//         name="consultationFee"
//         placeholder="Consultation Fee"
//         value={formData.consultationFee}
//         onChange={handleChange}
//         required
//       />

//       {/* Bio */}
//       <textarea
//         name="bio"
//         placeholder="Bio"
//         value={formData.bio}
//         onChange={handleChange}
//         required
//       ></textarea>

//       {/* Location */}
//       <input
//         type="text"
//         name="location"
//         placeholder="Location"
//         value={formData.location}
//         onChange={handleChange}
//         required
//       />

//       {/* Start Time */}
// <div className="time-icon">
//   <label htmlFor="startTime">Start Time</label>
//   <input
//     type="time"
//     name="startTime"
//     id="startTime"
//     value={formData.startTime}
//     onChange={handleChange}
//     required
//   />
// </div>

// {/* End Time */}
// <div className="time-icon">
//   <label htmlFor="endTime">End Time</label>
//   <input
//     type="time"
//     name="endTime"
//     id="endTime"
//     value={formData.endTime}
//     onChange={handleChange}
//     required
//   />
// </div>

      
//   <div className="form-group">
//   <label>Available Days</label>
//   <div className="custom-multiselect">
//     <div className="selected-values" onClick={() => setShowDays(!showDays)}>
//       {formData.availableDays.length === 0
//         ? 'Select Available Days'
//         : formData.availableDays.join(', ')}
//     </div>

//     {showDays && (
//       <div className="options-list">
//         {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
//           <div key={day} className="option-item">
//             <input
//               type="checkbox"
//               value={day}
//               checked={formData.availableDays.includes(day)}
//               onChange={(e) => {
//                 const { value, checked } = e.target;
//                 const newDays = checked
//                   ? [...formData.availableDays, value]
//                   : formData.availableDays.filter((d) => d !== value);
//                 setFormData((prev) => ({ ...prev, availableDays: newDays }));
//               }}
//             />
//             <label>{day}</label>
//           </div>
//         ))}
//       </div>
//     )}
//   </div>
// </div>




//       {/* Profile Photo */}
//       <div className="file-upload">
//         <label>Upload Profile Photo:</label>
//         <input
//           type="file"
//           name="photo"
//           onChange={(e) => setProfilePhoto(e.target.files[0])}
//           required
//         />
//       </div>

//       {/* Degree Documents */}
//       <div className="file-upload">
//         <label>Upload Degree Documents:</label>
//         <input
//           type="file"
//           name="degreeDocs"
//           multiple
//           onChange={(e) => setDegreeDocs(e.target.files)}
//           required
//         />
//       </div>

//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default DoctorRegister;




// import React, { useState } from 'react';
// import axios from 'axios';
// import './DoctorRegister.css';
// import { useNavigate } from 'react-router-dom';

// const DoctorRegister = ({ setError, setSuccess }) => {
//   const navigate = useNavigate();  // Initialize navigate

//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     password: '',
//     specialty: '',
//     experience: '',
//     consultationFee: '',
//     bio: '',
//     location: '',
//     startTime: '',
//     endTime: '',
//     availableDays: [],  // Store selected days as an array
//   });

//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [degreeDocs, setDegreeDocs] = useState([]);
//   const [showDays, setShowDays] = useState(false); // Controls the visibility of available days checkboxes

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAvailableDaysChange = (e) => {
//     const { value } = e.target;
//     setFormData((prev) => {
//       const updatedDays = prev.availableDays.includes(value)
//         ? prev.availableDays.filter(day => day !== value)  // Remove if already selected
//         : [...prev.availableDays, value];  // Add if not selected
//       return { ...prev, availableDays: updatedDays };
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const workingHours = {
//       startTime: formData.startTime,
//       endTime: formData.endTime,
//     };

//     const form = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (key !== 'startTime' && key !== 'endTime' && key !== 'availableDays') {
//         form.append(key, value);
//       }
//     });

//     form.append('workingHours', JSON.stringify(workingHours));
//     form.append('availableDays', JSON.stringify(formData.availableDays));

//     if (profilePhoto) {
//       form.append('photo', profilePhoto);
//     }

//     if (degreeDocs.length > 0) {
//       for (let file of degreeDocs) {
//         form.append('degreeDocs', file);
//       }
//     }

//     try {
//       const res = await axios.post('http://localhost:5000/api/doctors/register', form, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setSuccess(res.data.message);
//       setError('');
//       navigate('/login');  // Redirect to login page on success
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//       setSuccess('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} encType="multipart/form-data" className="doctor-register-form">

//       {/* Full Name */}
//       <input
//         type="text"
//         name="fullName"
//         placeholder="Full Name"
//         value={formData.fullName}
//         onChange={handleChange}
//         required
//       />

//       {/* Email */}
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />

//       {/* Phone */}
//       <input
//         type="tel"
//         name="phone"
//         placeholder="Phone"
//         value={formData.phone}
//         onChange={handleChange}
//         required
//       />

//       {/* Password */}
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={handleChange}
//         required
//       />

//       {/* Specialty */}
//       <input
//         type="text"
//         name="specialty"
//         placeholder="Specialty"
//         value={formData.specialty}
//         onChange={handleChange}
//         required
//       />

//       {/* Experience */}
//       <input
//         type="number"
//         name="experience"
//         placeholder="Experience (years)"
//         value={formData.experience}
//         onChange={handleChange}
//         required
//       />

//       {/* Consultation Fee */}
//       <input
//         type="number"
//         name="consultationFee"
//         placeholder="Consultation Fee"
//         value={formData.consultationFee}
//         onChange={handleChange}
//         required
//       />

//       {/* Bio */}
//       <textarea
//         name="bio"
//         placeholder="Bio"
//         value={formData.bio}
//         onChange={handleChange}
//         required
//       ></textarea>

//       {/* Location */}
//       <input
//         type="text"
//         name="location"
//         placeholder="Location"
//         value={formData.location}
//         onChange={handleChange}
//         required
//       />

//       {/* Start Time */}
//       <div className="time-icon">
//         <label htmlFor="startTime">Start Time</label>
//         <input
//           type="time"
//           name="startTime"
//           id="startTime"
//           value={formData.startTime}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       {/* End Time */}
//       <div className="time-icon">
//         <label htmlFor="endTime">End Time</label>
//         <input
//           type="time"
//           name="endTime"
//           id="endTime"
//           value={formData.endTime}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       {/* Available Days */}
//       <div className="form-group">
//         <label>Available Days</label>
//         <div className="custom-multiselect">
//           <div className="selected-values" onClick={() => setShowDays(!showDays)}>
//             {formData.availableDays.length === 0
//               ? 'Select Available Days'
//               : formData.availableDays.join(', ')}
//           </div>

//           {showDays && (
//             <div className="options-list">
//               {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
//                 <div key={day} className="option-item">
//                   <input
//                     type="checkbox"
//                     value={day}
//                     checked={formData.availableDays.includes(day)}
//                     onChange={(e) => {
//                       const { value, checked } = e.target;
//                       const newDays = checked
//                         ? [...formData.availableDays, value]
//                         : formData.availableDays.filter((d) => d !== value);
//                       setFormData((prev) => ({ ...prev, availableDays: newDays }));
//                     }}
//                   />
//                   <label>{day}</label>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Profile Photo */}
//       <div className="file-upload">
//         <label>Upload Profile Photo:</label>
//         <input
//           type="file"
//           name="photo"
//           onChange={(e) => setProfilePhoto(e.target.files[0])}
//           required
//         />
//       </div>

//       {/* Degree Documents */}
//       <div className="file-upload">
//         <label>Upload Degree Documents:</label>
//         <input
//           type="file"
//           name="degreeDocs"
//           multiple
//           onChange={(e) => setDegreeDocs(e.target.files)}
//           required
//         />
//       </div>

//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default DoctorRegister;


// DoctorRegister.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './DoctorRegister.css';
import { useNavigate } from 'react-router-dom';

const DoctorRegister = ({ setError, setSuccess }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    specialty: '',
    experience: '',
    consultationFee: '',
    bio: '',
    location: '',
    startTime: '',
    endTime: '',
    availableDays: [],
  });

  const [profilePhoto, setProfilePhoto] = useState(null);
  const [degreeDocs, setDegreeDocs] = useState([]);
  const [showDays, setShowDays] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvailableDaysChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => {
      const updatedDays = prev.availableDays.includes(value)
        ? prev.availableDays.filter(day => day !== value)
        : [...prev.availableDays, value];
      return { ...prev, availableDays: updatedDays };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workingHours = {
      startTime: formData.startTime,
      endTime: formData.endTime,
    };

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'startTime' && key !== 'endTime' && key !== 'availableDays') {
        form.append(key, value);
      }
    });

    form.append('workingHours', JSON.stringify(workingHours));
    form.append('availableDays', JSON.stringify(formData.availableDays));

    if (profilePhoto) {
      form.append('photo', profilePhoto);
    }

    if (degreeDocs.length > 0) {
      for (let file of degreeDocs) {
        form.append('degreeDocs', file);
      }
    }

    try {
      const res = await axios.post('http://localhost:5000/api/doctors/register', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccess(res.data.message);
      setError('');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      setSuccess('');
    }
  };

  // We return JSX fields only (no <form>)
  return (
    <div className="doctor-register-form">
      {/* All your input fields go here... */}

      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <input type="text" name="specialty" placeholder="Specialty" value={formData.specialty} onChange={handleChange} required />
      <input type="number" name="experience" placeholder="Experience (years)" value={formData.experience} onChange={handleChange} required />
      <input type="number" name="consultationFee" placeholder="Consultation Fee" value={formData.consultationFee} onChange={handleChange} required />
      <textarea name="bio" placeholder="Bio" value={formData.bio} onChange={handleChange} required></textarea>
      <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
      
      <div className="time-icon">
        <label htmlFor="startTime">Start Time</label>
        <input type="time" name="startTime" id="startTime" value={formData.startTime} onChange={handleChange} required />
      </div>

      <div className="time-icon">
        <label htmlFor="endTime">End Time</label>
        <input type="time" name="endTime" id="endTime" value={formData.endTime} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Available Days</label>
        <div className="custom-multiselect">
          <div className="selected-values" onClick={() => setShowDays(!showDays)}>
            {formData.availableDays.length === 0 ? 'Select Available Days' : formData.availableDays.join(', ')}
          </div>
          {showDays && (
            <div className="options-list">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                <div key={day} className="option-item">
                  <input type="checkbox" value={day} checked={formData.availableDays.includes(day)} onChange={handleAvailableDaysChange} />
                  <label>{day}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="file-upload">
        <label>Upload Profile Photo:</label>
        <input type="file" name="photo" onChange={(e) => setProfilePhoto(e.target.files[0])} required />
      </div>

      <div className="file-upload">
        <label>Upload Degree Documents:</label>
        <input type="file" name="degreeDocs" multiple onChange={(e) => setDegreeDocs(e.target.files)} required />
      </div>

      {/* Submit button for doctor role (can be conditionally rendered in parent if needed) */}
      <button type="submit" onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default DoctorRegister;
