// src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
// import PatientLogin from './components/PatientLogin';  // Ensure this path is correct
// import DashboardPage from './pages/DashboardPage';
// import SearchDoctor from "./components/SearchDoctors"; // ✅ match the exported component
// import BookAppointment from './pages/BookAppointment';
// import SearchBySpecialty from "./components/SearchBySpecialty";




// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/patient-login" element={<PatientLogin />} />  {/* Use `element` instead of `component` */}
//         <Route path="/dashboard" element={<DashboardPage />} />
//         <Route path="/search-doctors" element={<SearchDoctor />} /> 
//         <Route path="/book-appointment/:doctorId" element={<BookAppointment />} />
//         <Route path="/search-by-specialty" element={<SearchBySpecialty />} />

       

      

//         {/* Add other routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import PatientLogin from './components/PatientLogin';
import DoctorRegister from "./pages/Auth/DoctorRegister";
// import DashboardPage from './pages/DashboardPage';
import SearchDoctor from "./components/SearchDoctors";
import BookAppointment from './pages/BookAppointment';
import SearchBySpecialty from "./components/SearchBySpecialty";
import MedicalHistory from "./components/medicalHistory";
import Emergency from "./components/Emergency";
import DoctorDashboard from './components/DoctorDashboard'; // Adjust the path accordingly

import UpdateMedicalReport from "./components/UpdateMedicalReport";
import DoctorSeeReport from "./components/DoctorSeeReport";
import PatientDashboard from "./components/PatientDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        <Route path="/search-doctors" element={<SearchDoctor />} />
        <Route path="/book-appointment/:doctorId" element={<BookAppointment />} />
        <Route path="/search-by-specialty" element={<SearchBySpecialty />} />
        <Route path="/medical-history" element={<MedicalHistory />} />
        <Route path="/request-ambulance" element={<Emergency />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} /> {/* Correct usage */}
       
        <Route path="/update-medical/:appointmentId" element={<UpdateMedicalReport />} />
                <Route path="/doctor/:doctorId/patient/:patientId/medical-history" element={<DoctorSeeReport />} />
                <Route path="/dashboard" element={<PatientDashboard />} />
                <Route path="/doctor/register" element={<DoctorRegister />} />

      </Routes>
    </Router>
  );
}

export default App;

