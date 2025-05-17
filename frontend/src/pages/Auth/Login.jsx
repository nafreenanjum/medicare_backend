// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const loginData = {
//       email,
//       password,
//     };

//     try {
//       // Make sure the URL is correct and points to your backend server (e.g., localhost:5000)
//       const response = await axios.post("http://localhost:5000/api/patients/login", loginData);

//       if (response.status === 200) {
//         // Store the token in localStorage
//         localStorage.setItem("token", response.data.token);
//         // Redirect to dashboard or another page after successful login
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const loginData = { email, password };

//     try {
//       // Make sure the URL is correct and points to your backend server (e.g., localhost:5000)
//       const response = await axios.post("http://localhost:5000/api/patients/login", loginData);

//       if (response.status === 200) {
//         // Store the token in localStorage
//         localStorage.setItem("token", response.data.token);
        
//         // Optionally handle redirection with state (e.g., redirect to the page the user tried to access)
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       // Improved error handling
//       setErrorMessage(error.response?.data?.message || "Invalid credentials. Please try again.");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>

//         {/* Show error message if any */}
//         {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return regex.test(email);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setErrorMessage("Please enter a valid email address.");
//       return;
//     }

//     const loginData = { email, password };

//     try {
//       // Ensure correct API endpoint
//       const response = await axios.post("http://localhost:5000/api/patients/login", loginData);

//       if (response.status === 200) {
//         // Store token in localStorage
//         localStorage.setItem("token", response.data.token);

//         // Redirect to dashboard after successful login
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       const message = error.response?.data?.message || error.message || "Invalid credentials. Please try again.";
//       setErrorMessage(message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>

//         {/* Show error message if any */}
//         {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return regex.test(email);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setErrorMessage("Please enter a valid email address.");
//       return;
//     }

//     const loginData = { email, password };

//     try {
//       const response = await axios.post("http://localhost:5000/api/patients/login", loginData);

//       if (response.status === 200) {
//         // Save token and user ID to localStorage
//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("userId", response.data.patient._id); // ✅ fixed line

//         // Redirect to dashboard after successful login
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       const message = error.response?.data?.message || error.message || "Invalid credentials. Please try again.";
//       setErrorMessage(message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>

//         {/* Show error message if any */}
//         {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("patient"); // "patient" or "doctor"
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return regex.test(email);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setErrorMessage("Please enter a valid email address.");
//       return;
//     }

//     const loginData = { email, password };
//     const endpoint =
//       role === "doctor"
//         ? "http://localhost:5000/api/doctors/login" // Use doctor login API
//         : "http://localhost:5000/api/patients/login"; // Use patient login API

//     try {
//       const response = await axios.post(endpoint, loginData);

//       if (response.status === 200) {
//         const token = response.data.token;
//         localStorage.setItem("token", token); // Save token in localStorage

//         if (role === "doctor") {
//           localStorage.setItem("doctorId", response.data.doctor._id); // Save doctor details
//           navigate("/doctor-dashboard"); // Redirect to doctor dashboard
//         } else {
//           localStorage.setItem("userId", response.data.patient._id); // Save patient details
//           navigate("/dashboard"); // Redirect to patient dashboard
//         }
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       const message =
//         error.response?.data?.message ||
//         error.message ||
//         "Invalid credentials. Please try again.";
//       setErrorMessage(message); // Display error message
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="login-form">
//         <h2>Login</h2>

//         <div className="role-switcher">
//           <label>
//             <input
//               type="radio"
//               value="patient"
//               checked={role === "patient"}
//               onChange={() => setRole("patient")}
//             />
//             Patient
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="doctor"
//               checked={role === "doctor"}
//               onChange={() => setRole("doctor")}
//             />
//             Doctor
//           </label>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>

//         {errorMessage && (
//           <p className="error-message" style={{ color: "red" }}>
//             {errorMessage}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;import React, { useState } from "react";
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import './Login.css';


// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("patient"); // "patient" or "doctor"
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return regex.test(email);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setErrorMessage("Please enter a valid email address.");
//       return;
//     }

//     const loginData = { email, password };
//     const endpoint =
//       role === "doctor"
//         ? "http://localhost:5000/api/doctors/login"
//         : "http://localhost:5000/api/patients/login";

//     try {
//       const response = await axios.post(endpoint, loginData);

//       if (response.status === 200) {
//         const token = response.data.token;
//         localStorage.setItem("token", token);

//         if (role === "doctor") {
//           localStorage.setItem("doctorId", response.data.doctor._id);
//           navigate("/doctor-dashboard");
//         } else {
//           localStorage.setItem("userId", response.data.patient._id);
//           navigate("/dashboard");
//         }
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       const message =
//         error.response?.data?.message ||
//         error.message ||
//         "Invalid credentials. Please try again.";
//       setErrorMessage(message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="login-form">
//         <h2>Login</h2>

//         <div className="role-buttons">
//           <button
//             type="button"
//             className={`patient-btn ${role === "patient" ? "active" : ""}`}
//             onClick={() => setRole("patient")}
//           >
//             Patient
//           </button>
//           <button
//             type="button"
//             className={`doctor-btn ${role === "doctor" ? "active" : ""}`}
//             onClick={() => setRole("doctor")}
//           >
//             Doctor
//           </button>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="submit-btn">Login</button>
//         </form>

//         {errorMessage && (
//           <p className="error-message" style={{ color: "red" }}>
//             {errorMessage}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient"); // "patient" or "doctor"
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const loginData = { email, password };
    const endpoint =
      role === "doctor"
        ? "http://localhost:5000/api/doctors/login"
        : "http://localhost:5000/api/patients/login";

    try {
      const response = await axios.post(endpoint, loginData);

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);

        if (role === "doctor") {
          localStorage.setItem("doctorId", response.data.doctor._id);
          navigate("/doctor-dashboard");
        } else {
          localStorage.setItem("userId", response.data.patient._id);
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      const message =
        error.response?.data?.message ||
        error.message ||
        "Invalid credentials. Please try again.";
      setErrorMessage(message);
    }
  };

  return (
    <div className="auth-container">
      {/* Header with logo and home button */}
      <div className="login-header">
        <div className="logo" onClick={() => navigate('/')}>
          <img src="/logomedicare.jpg" alt="Logo" />
        </div>
        <button className="home-btn" onClick={() => navigate('/')}>
          Home
        </button>
      </div>

      <div className="login-form">
        <h2>Login</h2>

        <div className="role-buttons">
          <button
            type="button"
            className={`patient-btn ${role === "patient" ? "active" : ""}`}
            onClick={() => setRole("patient")}
          >
            Patient
          </button>
          <button
            type="button"
            className={`doctor-btn ${role === "doctor" ? "active" : ""}`}
            onClick={() => setRole("doctor")}
          >
            Doctor
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>

        {errorMessage && (
          <p className="error-message" style={{ color: "red" }}>
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
