// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-container">
//       {/* Navbar */}
//       <header className="header">
//         <div className="logo">MediCare</div>
//         <div className="auth-buttons">
//           <button className="btn login" onClick={() => navigate('/login')}>Login</button>
//           <button className="btn register" onClick={() => navigate('/register')}>Register</button>
//         </div>
//       </header>

//       {/* Main Section */}
//       <main className="main-section">
//         <div className="intro-text">
//           <h1><strong>Welcome to MediCare</strong></h1>
//           <p><strong>Your trusted health partner for better care and coverage.</strong></p>
//         </div>
//       </main>

//       {/* Features Section */}
//       <footer className="footer">
//   <div className="footer-container">
//     <div className="footer-column">
//       <h3><strong>Quick Links</strong></h3>
//       <ul>
//         <li><strong>Home</strong></li>
//         <li><strong>Login</strong></li>
//         <li><strong>Register</strong></li>
//         <li><strong>Book Appointment</strong></li>
//       </ul>
//     </div>
//     <div className="footer-column">
//       <h3><strong>Patient Services</strong></h3>
//       <ul>
//         <li><strong>Search Doctors</strong></li>
//         <li><strong>Medical History</strong></li>
//         <li><strong>Request Ambulance</strong></li>
//       </ul>
//     </div>
//     <div className="footer-column">
//       <h3><strong>Resources</strong></h3>
//       <ul>
//         <li><strong>Doctor Dashboard</strong></li>
//         <li><strong>Update Medical Report</strong></li>
//         <li><strong>See Patient Reports</strong></li>
//       </ul>
//     </div>
//     <div className="footer-column">
//       <h3><strong>Contact Us</strong></h3>
//       <ul>
//         <li><strong>Email:</strong> contact@medicare.com</li>
//         <li><strong>Phone:</strong> +91-12345-67890</li>
//         <li><strong>Address:</strong> MediCare HQ, Delhi, India</li>
//       </ul>
//     </div>
//   </div>
//   <div className="footer-bottom">
//     <p><strong>© 2025 MediCare. All rights reserved.</strong></p>
//   </div>
// </footer>

//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();

//   const [recordIndex, setRecordIndex] = useState(0);
//   const [testimonialIndex, setTestimonialIndex] = useState(0);

//   // Auto-slide Records
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRecordIndex((prev) => (prev + 1) % 4);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Auto-slide Testimonials
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTestimonialIndex((prev) => (prev + 1) % 3);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="home-container">
//       {/* Navbar */}
//       <header className="header">
//         <div className="logo">MediCare</div>
//         <nav>
//           <a href="#features">Features</a>
//           <a href="#records">Records</a>
//           <a href="#testimonials">Testimonials</a>
//         </nav>
//         <div className="auth-buttons">
//           <button className="btn login" onClick={() => navigate('/login')}>Login</button>
//           <button className="btn register" onClick={() => navigate('/register')}>Register</button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="hero-section">
//         <h1>Welcome to MediCare</h1>
//         <p>Your trusted health partner for better care and coverage.</p>
//       </section>

//       {/* Features Section */}
//       <section className="features-section" id="features">
//         <h2>Our Features</h2>
//         <div className="features-grid">
//           <div className="feature-card">
//             <i className="fas fa-user-md"></i>
//             <h3>Expert Doctors</h3>
//             <p>Consult with top medical professionals online & offline.</p>
//           </div>
//           <div className="feature-card">
//             <i className="fas fa-ambulance"></i>
//             <h3>24/7 Ambulance</h3>
//             <p>Quick ambulance services at your fingertips.</p>
//           </div>
//           <div className="feature-card">
//             <i className="fas fa-notes-medical"></i>
//             <h3>Health Records</h3>
//             <p>Access and manage your health history securely.</p>
//           </div>
//           <div className="feature-card">
//             <i className="fas fa-headset"></i>
//             <h3>Support</h3>
//             <p>Dedicated support for all your medical queries.</p>
//           </div>
//         </div>
//       </section>

//       {/* Records Carousel */}
//       <section className="records-section" id="records">
//         <h2>Our Achievements</h2>
//         <div className="carousel">
//           {[
//             { title: '5,000+ Successful Consultations', desc: 'Connecting patients with certified doctors across India.' },
//             { title: '24/7 Emergency Support', desc: 'Quick ambulance services & emergency care assistance.' },
//             { title: '95% Patient Satisfaction', desc: 'Our patients trust us for quality and reliability.' },
//             { title: 'Secure Health Records', desc: 'We manage over 50,000 patient medical histories securely.' },
//           ].map((item, index) => (
//             <div key={index} className={`carousel-item ${recordIndex === index ? 'active' : ''}`}>
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials Slider */}
//       <section className="testimonials-section" id="testimonials">
//         <h2>What Our Patients Say</h2>
//         <div className="testimonial-carousel">
//           {[
//             { name: 'Rohit Sharma', review: 'Excellent service, very professional doctors. Highly recommend MediCare!' },
//             { name: 'Anjali Verma', review: 'The ambulance service was super quick. Really saved us in an emergency.' },
//             { name: 'Siddharth Patel', review: 'I can access my health reports anytime. Great platform for patients.' },
//           ].map((t, index) => (
//             <div key={index} className={`testimonial-item ${testimonialIndex === index ? 'active' : ''}`}>
//               <p>"{t.review}"</p>
//               <h4>- {t.name}</h4>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-column">
//             <h3>Quick Links</h3>
//             <ul>
//               <li>Home</li>
//               <li>Login</li>
//               <li>Register</li>
//               <li>Book Appointment</li>
//             </ul>
//           </div>
//           <div className="footer-column">
//             <h3>Contact</h3>
//             <ul>
//               <li>Email: contact@medicare.com</li>
//               <li>Phone: +91-12345-67890</li>
//               <li>Delhi, India</li>
//             </ul>
//           </div>
//           <div className="footer-column">
//             <h3>Follow Us</h3>
//             <div className="social-icons">
//               <i className="fab fa-facebook-f"></i>
//               <i className="fab fa-twitter"></i>
//               <i className="fab fa-instagram"></i>
//               <i className="fab fa-linkedin-in"></i>
//             </div>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>© 2025 MediCare. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();

//   const [recordIndex, setRecordIndex] = useState(0);
//   const [testimonialIndex, setTestimonialIndex] = useState(0);
//   const [openFAQ, setOpenFAQ] = useState(null);  // To manage which FAQ is open

//   // Auto-slide Records
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRecordIndex((prev) => (prev + 1) % 4);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Auto-slide Testimonials
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTestimonialIndex((prev) => (prev + 1) % 3);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const faqData = [
//     {
//       question: "How can I book an appointment?",
//       answer: "You can easily book an appointment through our website by selecting 'Book Appointment' in the navigation menu."
//     },
//     {
//       question: "How do I find doctors?",
//       answer: "Visit the 'Find Doctors' section where you can search for medical professionals based on your preferences."
//     },
//     {
//       question: "What services are available 24/7?",
//       answer: "We offer 24/7 ambulance services and emergency care support for all patients."
//     },
//     {
//       question: "Can I access my health records online?",
//       answer: "Yes, you can securely access and manage your health records anytime through our online platform."
//     },
//     {
//       question: "Is virtual consultation available?",
//       answer: "Yes, you can schedule a virtual consultation with one of our doctors through our website."
//     },
//   ];

//   return (
//     <div className="home-container">
//       {/* Navbar */}
//       <header className="header">
//         <div className="logo">MediCare</div>
//         <nav>
//           <a href="#features">Features</a>
//           <a href="#records">Records</a>
//           <a href="#testimonials">Testimonials</a>
//           <a href="#faq">FAQ</a>
//         </nav>
//         <div className="auth-buttons">
//           <button className="btn login" onClick={() => navigate('/login')}>Login</button>
//           <button className="btn register" onClick={() => navigate('/register')}>Register</button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="hero-section">
//         <h1>Welcome to MediCare</h1>
//         <p>Your trusted health partner for better care and coverage.</p>
//       </section>

//       {/* Features Section */}
//       <section className="features-section" id="features">
//         <h2>Our Features</h2>
//         <div className="features-grid">
//           <div className="feature-card">🗓 Book Appointment</div>
//           <div className="feature-card">🩺 Find Doctors</div>
//           <div className="feature-card">🚑 24/7 Support</div>
         
//           <div className="feature-card">🏥 Health Records</div>
         
//         </div>
//       </section>

//       {/* Records Carousel */}
//       <section className="records-section" id="records">
//         <h2>Our Achievements</h2>
//         <div className="carousel">
//           {[
//             { title: '5,000+ Successful Consultations', desc: 'Connecting patients with certified doctors across India.' },
//             { title: '24/7 Emergency Support', desc: 'Quick ambulance services & emergency care assistance.' },
//             { title: '95% Patient Satisfaction', desc: 'Our patients trust us for quality and reliability.' },
//             { title: 'Secure Health Records', desc: 'We manage over 50,000 patient medical histories securely.' },
//           ].map((item, index) => (
//             <div key={index} className={`carousel-item ${recordIndex === index ? 'active' : ''}`}>
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials Slider */}
//       <section className="testimonials-section" id="testimonials">
//         <h2>What Our Patients Say</h2>
//         <div className="testimonial-carousel">
//           {[
//             { name: 'Rohit Sharma', review: 'Excellent service, very professional doctors. Highly recommend MediCare!' },
//             { name: 'Anjali Verma', review: 'The ambulance service was super quick. Really saved us in an emergency.' },
//             { name: 'Siddharth Patel', review: 'I can access my health reports anytime. Great platform for patients.' },
//           ].map((t, index) => (
//             <div key={index} className={`testimonial-item ${testimonialIndex === index ? 'active' : ''}`}>
//               <p>"{t.review}"</p>
//               <h4>- {t.name}</h4>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="faq-section" id="faq">
//         <h2>Frequently Asked Questions</h2>
//         <div className="faq-list">
//           {faqData.map((faq, index) => (
//             <div key={index} className="faq-item">
//               <div className="faq-question" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
//                 <h3>{faq.question}</h3>
//               </div>
//               {openFAQ === index && (
//                 <div className="faq-answer">
//                   <p>{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-column">
//             <h3>Quick Links</h3>
//             <ul>
//               <li>Home</li>
//               <li>Login</li>
//               <li>Register</li>
//               <li>Book Appointment</li>
//             </ul>
//           </div>
//           <div className="footer-column">
//             <h3>Contact</h3>
//             <ul>
//               <li>Email: contact@medicare.com</li>
//               <li>Phone: +91-12345-67890</li>
//               <li>Delhi, India</li>
//             </ul>
//           </div>
//           <div className="footer-column">
//             <h3>Follow Us</h3>
//             <div className="social-icons">
//               <i className="fab fa-facebook-f"></i>
//               <i className="fab fa-twitter"></i>
//               <i className="fab fa-instagram"></i>
//               <i className="fab fa-linkedin-in"></i>
//             </div>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>© 2025 MediCare. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();

//   const [recordIndex, setRecordIndex] = useState(0);
//   const [testimonialIndex, setTestimonialIndex] = useState(0);

//   // Auto-slide Records
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRecordIndex((prev) => (prev + 1) % 4);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Auto-slide Testimonials
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTestimonialIndex((prev) => (prev + 1) % 3);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="home-container">
//       {/* Navbar */}
//       <header className="header">
//         <div className="logo">MediCare</div>
//         <nav>
//           <a href="#features">Features</a>
//           <a href="#records">Records</a>
//           <a href="#testimonials">Testimonials</a>
//         </nav>
//         <div className="auth-buttons">
//           <button className="btn login" onClick={() => navigate('/login')}>Login</button>
//           <button className="btn register" onClick={() => navigate('/register')}>Register</button>
//         </div>
//       </header>

      

//       {/* Hero Section */}
//       <section className="hero-section">
//         <h1>Welcome to MediCare</h1>
//         <p>Your trusted health partner for better care and coverage.</p>
//       </section>


//       <section className="features-carousel" id="features">
 
//   <div className="carousel-images">
//     {[
//       "https://i.pinimg.com/736x/8a/45/d1/8a45d16a8e8ff9c3d39b460d680f1cb9.jpg",
//       "https://i.pinimg.com/736x/9d/1c/92/9d1c928c942060e410322363d6d252f5.jpg",
//       "https://i.pinimg.com/736x/2d/ea/8d/2dea8ddac121a1eb6362617ec100bc6e.jpg",
//       "https://i.pinimg.com/736x/d3/7b/67/d37b678f7da4b99617a904a5232c3074.jpg"
//     ].map((url, index) => (
//       <img
//         key={index}
//         src={url}
//         alt={`Feature ${index + 1}`}
//         className={recordIndex === index ? 'active' : ''}
//       />
//     ))}
//   </div>
// </section>

//       {/* Features Section */}
//       <section className="features-section" id="features">
//         <h2>Our Features</h2>
//         <div className="features-grid">
//           <div className="feature-card">🗓 Book Appointment</div>
//           <div className="feature-card">🩺 Find Doctors</div>
//           <div className="feature-card">🚑 24/7 Support</div>
//           <div className="feature-card">🏥 Health Records</div>
//           <div className="feature-card">📜 Medical History</div>
//         </div>
//       </section>

//       {/* Records Carousel */}
//       <section className="records-section" id="records">
//         <h2>Our Achievements</h2>
//         <div className="carousel">
//           {[ 
//             { title: '5,000+ Successful Consultations', desc: 'Connecting patients with certified doctors across India.' },
//             { title: '24/7 Emergency Support', desc: 'Quick ambulance services & emergency care assistance.' },
//             { title: '95% Patient Satisfaction', desc: 'Our patients trust us for quality and reliability.' },
//             { title: 'Secure Health Records', desc: 'We manage over 50,000 patient medical histories securely.' }
//           ].map((item, index) => (
//             <div key={index} className={`carousel-item ${recordIndex === index ? 'active' : ''}`}>
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Features Image Carousel */}

      



//       {/* Testimonials Slider */}
//       <section className="testimonials-section" id="testimonials">
//         <h2>What Our Patients Say</h2>
//         <div className="testimonial-carousel">
//           {[ 
//             { name: 'Rohit Sharma', review: 'Excellent service, very professional doctors. Highly recommend MediCare!' },
//             { name: 'Anjali Verma', review: 'The ambulance service was super quick. Really saved us in an emergency.' },
//             { name: 'Siddharth Patel', review: 'I can access my health reports anytime. Great platform for patients.' }
//           ].map((t, index) => (
//             <div key={index} className={`testimonial-item ${testimonialIndex === index ? 'active' : ''}`}>
//               <p>"{t.review}"</p>
//               <h4>- {t.name}</h4>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-column">
//             <h3>Quick Links</h3>
//             <ul>
//               <li>Home</li>
//               <li>Login</li>
//               <li>Register</li>
//               <li>Book Appointment</li>
//             </ul>
//           </div>
//           <div className="footer-column">
//             <h3>Contact</h3>
//             <ul>
//               <li>Email: contact@medicare.com</li>
//               <li>Phone: +91-12345-67890</li>
//               <li>Delhi, India</li>
//             </ul>
//           </div>
//           <div className="footer-column">
//             <h3>Follow Us</h3>
//             <div className="social-icons">
//               <i className="fab fa-facebook-f">Twitter</i>
//               <br></br>
//               <i className="fab fa-twitter">Facebook</i>
//               <br></br>
//               <i className="fab fa-instagram">Instagram</i>
//               <br></br>
//               <i className="fab fa-linkedin-in">LinkedIn</i>
//             </div>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>© 2025 MediCare. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();

//   const [recordIndex, setRecordIndex] = useState(0);
//   const [testimonialIndex, setTestimonialIndex] = useState(0);
//   const [imageIndex, setImageIndex] = useState(0);

//   // Auto-slide Records
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRecordIndex((prev) => (prev + 1) % 4);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Auto-slide Testimonials
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTestimonialIndex((prev) => (prev + 1) % 3);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   // Auto-slide Images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImageIndex((prev) => (prev + 1) % 4);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="home-container">
//       {/* Navbar */}
//       <header className="header">
//         <div className="logo">MediCare</div>
//         <nav>
//           <a href="#features">Features</a>
//           <a href="#records">Records</a>
//           <a href="#testimonials">Testimonials</a>
//         </nav>
//         <div className="auth-buttons">
//           <button className="btn login" onClick={() => navigate('/login')}>Login</button>
//           <button className="btn register" onClick={() => navigate('/register')}>Register</button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="hero-section">
//         <h1>Welcome to MediCare</h1>
//         <p>Your trusted health partner for better care and coverage.</p>
//       </section>


//       <section className="features-carousel">
//         <div className="carousel-images">
//           {[ 
//             'https://i.pinimg.com/736x/8a/45/d1/8a45d16a8e8ff9c3d39b460d680f1cb9.jpg',
//             'https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.jpg?s=612x612&w=0&k=20&c=ggVR5D9U8IY7irIrgvfqSmlLwA7se4vc2fRSAjV2lSs=',
//             'https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbCUyMHRlYW18ZW58MHx8MHx8fDA%3D',
//             'https://i.pinimg.com/736x/d3/7b/67/d37b678f7da4b99617a904a5232c3074.jpg'
//           ].map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Feature ${index + 1}`}
//               className={imageIndex === index ? 'active' : ''}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="features-section" id="features">
//         <h2>Our Features</h2>
//         <div className="features-grid">
//           <div className="feature-card">🗓 Book Appointment</div>
//           <div className="feature-card">🩺 Find Doctors</div>
//           <div className="feature-card">🚑 24/7 Support</div>
//           <div className="feature-card">🏥 Health Records</div>
//           <div className="feature-card">📜 Medical History</div>
//         </div>
//       </section>

//       {/* Images Carousel */}
      

//       {/* Records Section */}
//       <section className="records-section" id="records">
//         <h2>Our Achievements</h2>
//         <div className="carousel">
//           {[ 
//             { title: '5,000+ Successful Consultations', desc: 'Connecting patients with certified doctors across India.' },
//             { title: '24/7 Emergency Support', desc: 'Quick ambulance services & emergency care assistance.' },
//             { title: '95% Patient Satisfaction', desc: 'Our patients trust us for quality and reliability.' },
//             { title: 'Secure Health Records', desc: 'We manage over 50,000 patient medical histories securely.' }
//           ].map((item, index) => (
//             <div key={index} className={`carousel-item ${recordIndex === index ? 'active' : ''}`}>
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="testimonials-section" id="testimonials">
//         <h2>What Our Patients Say</h2>
//         <div className="testimonial-carousel">
//           {[ 
//             { name: 'Rohit Sharma', review: 'Excellent service, very professional doctors. Highly recommend MediCare!' },
//             { name: 'Anjali Verma', review: 'The ambulance service was super quick. Really saved us in an emergency.' },
//             { name: 'Siddharth Patel', review: 'I can access my health reports anytime. Great platform for patients.' }
//           ].map((t, index) => (
//             <div key={index} className={`testimonial-item ${testimonialIndex === index ? 'active' : ''}`}>
//               <p>"{t.review}"</p>
//               <h4>- {t.name}</h4>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-column">
//             <h3>Quick Links</h3>
//             <ul>
//               <li>Home</li>
//               <li>Login</li>
//               <li>Register</li>
//               <li>Book Appointment</li>
//             </ul>
//           </div>
//           <div className="footer-column">
//             <h3>Contact</h3>
//             <ul>
//               <li>Email: contact@medicare.com</li>
//               <li>Phone: +91-12345-67890</li>
//               <li>Delhi, India</li>
//             </ul>
//           </div>
//           <div className="footer-column">
//             <h3>Follow Us</h3>
//             <div className="social-icons">
//               <i className="fab fa-facebook-f">Twitter</i>
//               <br></br>
//               <i className="fab fa-twitter">Facebook</i>
//               <br></br>
//               <i className="fab fa-instagram">Instagram</i>
//               <br></br>
//               <i className="fab fa-linkedin-in">LinkedIn</i>
//             </div>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>© 2025 MediCare. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();

//   const [recordIndex, setRecordIndex] = useState(0);
//   const [testimonialIndex, setTestimonialIndex] = useState(0);
//   const [imageIndex, setImageIndex] = useState(0);

//   // Auto-slide Records
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRecordIndex((prev) => (prev + 1) % 4);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Auto-slide Testimonials
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTestimonialIndex((prev) => (prev + 1) % 3);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   // Auto-slide Images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImageIndex((prev) => (prev + 1) % 4);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="home-container">
//       {/* Navbar */}
//       <header className="header">
//         {/* <div className="logo">MediCare</div> */}
//          <img src="/logomedicare.jpg" alt="Logo" />
//         <nav>
//           <a
//             href="#features"
//             className={activeLink === 'features' ? 'active' : ''}
//             onClick={() => handleLinkClick('features')}
//           >
//             Features
//           </a>
//           <a
//             href="#records"
//             className={activeLink === 'records' ? 'active' : ''}
//             onClick={() => handleLinkClick('records')}
//           >
//             Records
//           </a>
//           <a
//             href="#testimonials"
//             className={activeLink === 'testimonials' ? 'active' : ''}
//             onClick={() => handleLinkClick('testimonials')}
//           >
//             Testimonials
//           </a>
//         </nav>
//         <div className="auth-buttons">
//           <button className="btn login" onClick={() => navigate('/login')}>Login</button>
//           <button className="btn register" onClick={() => navigate('/register')}>Register</button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="hero-section">
//         <h1>Welcome to MEDI_CARE</h1>
//         <p>Your trusted health partner for better care and coverage.</p>
//       </section>

//        <section className="features-carousel">
//         <div className="carousel-wrapper">
//           <div className="carousel-box">
//             <div className="carousel-images">
//               {[
//                 'https://i.pinimg.com/736x/8a/45/d1/8a45d16a8e8ff9c3d39b460d680f1cb9.jpg',
//                 'https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.jpg?s=612x612&w=0&k=20&c=ggVR5D9U8IY7irIrgvfqSmlLwA7se4vc2fRSAjV2lSs=',
//                 'https://t3.ftcdn.net/jpg/06/35/83/70/360_F_635837048_8cBhtF8szlLwkvvSuNdDltIaqbltHnzU.jpg',
//                 'https://i.pinimg.com/736x/d3/7b/67/d37b678f7da4b99617a904a5232c3074.jpg'
//               ].map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Feature ${index + 1}`}
//                   className={imageIndex === index ? 'active' : ''}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
      

//       {/* Features Section */}
//       <section className="features-section" id="features">
//         <h2>Our Features</h2>
//         <div className="features-grid">
//           <div className="feature-card">🗓 Book Appointment</div>
//           <div className="feature-card">🩺 Find Doctors</div>
//           <div className="feature-card">🚑 24/7 Support</div>
//           <div className="feature-card">🏥 Health Records</div>
//           <div className="feature-card">📜 Medical History</div>
//         </div>
//       </section>

//       {/* Records Section */}
//       <section className="records-section" id="records">
//         <h2>Our Achievements</h2>
//         <div className="carousel">
//           {[
//             { title: '5,000+ Successful Consultations', desc: 'Connecting patients with certified doctors across India.' },
//             { title: '24/7 Emergency Support', desc: 'Quick ambulance services & emergency care assistance.' },
//             { title: '95% Patient Satisfaction', desc: 'Our patients trust us for quality and reliability.' },
//             { title: 'Secure Health Records', desc: 'We manage over 50,000 patient medical histories securely.' }
//           ].map((item, index) => (
//             <div key={index} className={`carousel-item ${recordIndex === index ? 'active' : ''}`}>
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="testimonials-section" id="testimonials">
//         <h2>What Our Patients Say</h2>
//         <div className="testimonial-carousel">
//           {[
//             { name: 'Rohit Sharma', review: 'Excellent service, very professional doctors. Highly recommend MediCare!' },
//             { name: 'Anjali Verma', review: 'The ambulance service was super quick. Really saved us in an emergency.' },
//             { name: 'Siddharth Patel', review: 'I can access my health reports anytime. Great platform for patients.' }
//           ].map((t, index) => (
//             <div key={index} className={`testimonial-item ${testimonialIndex === index ? 'active' : ''}`}>
//               <p>"{t.review}"</p>
//               <h4>- {t.name}</h4>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-column">
//             <h3>Quick Links</h3>
//             <ul>
//               <li>Home</li>
//               <li>Login</li>
//               <li>Register</li>
//               <li>Book Appointment</li>
//             </ul>
//           </div>
//           <div className="footer-column">
//             <h3>Contact</h3>
//             <ul>
//               <li>Email: contact@medicare.com</li>
//               <li>Phone: +91-12345-67890</li>
//               <li>Delhi, India</li>
//             </ul>
//           </div>
//           <div className="footer-column">
//             <h3>Follow Us</h3>
//             <div className="social-icons">
//               <ul className="fab fa-facebook-f">Twitter</ul>
//               <ul className="fab fa-twitter">Facebook</ul>
//               <ul className="fab fa-instagram">Instagram</ul>
//               <ul className="fab fa-linkedin-in">LinkedIn</ul>
//             </div>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>© 2025 MediCare. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [recordIndex, setRecordIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [activeLink, setActiveLink] = useState('');

  // Auto-slide Records
  useEffect(() => {
    const interval = setInterval(() => {
      setRecordIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-slide Testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-slide Images
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <header className="header">
        <img src="/logomedicare.jpg" alt="Logo" />
        <nav>
          <a
            href="#features"
            className={activeLink === 'features' ? 'active' : ''}
            onClick={() => handleLinkClick('features')}
          >
            Features
          </a>
          <a
            href="#records"
            className={activeLink === 'records' ? 'active' : ''}
            onClick={() => handleLinkClick('records')}
          >
            Records
          </a>
          <a
            href="#testimonials"
            className={activeLink === 'testimonials' ? 'active' : ''}
            onClick={() => handleLinkClick('testimonials')}
          >
            Testimonials
          </a>
        </nav>
        <div className="auth-buttons">
          <button className="btn login" onClick={() => navigate('/login')}>Login</button>
          <button className="btn register" onClick={() => navigate('/register')}>Register</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to MEDI_CARE</h1>
        <p>Your trusted health partner for better care and coverage.</p>
      </section>

      {/* Features Section */}
      <section className="features-carousel">
        <div className="carousel-wrapper">
          <div className="carousel-box">
            <div className="carousel-images">
              {[
                'https://i.pinimg.com/736x/8a/45/d1/8a45d16a8e8ff9c3d39b460d680f1cb9.jpg',
                'https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.jpg?s=612x612&w=0&k=20&c=ggVR5D9U8IY7irIrgvfqSmlLwA7se4vc2fRSAjV2lSs=',
                'https://t3.ftcdn.net/jpg/06/35/83/70/360_F_635837048_8cBhtF8szlLwkvvSuNdDltIaqbltHnzU.jpg',
                'https://i.pinimg.com/736x/d3/7b/67/d37b678f7da4b99617a904a5232c3074.jpg'
              ].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Feature ${index + 1}`}
                  className={imageIndex === index ? 'active' : ''}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">🗓 Book Appointment</div>
          <div className="feature-card">🩺 Find Doctors</div>
          <div className="feature-card">🚑 24/7 Support</div>
          <div className="feature-card">🏥 Health Records</div>
          <div className="feature-card">📜 Medical History</div>
        </div>
      </section>

      {/* Records Section */}
      <section className="records-section" id="records">
        <h2>Our Achievements</h2>
        <div className="carousel">
          {[
            { title: '5,000+ Successful Consultations', desc: 'Connecting patients with certified doctors across India.' },
            { title: '24/7 Emergency Support', desc: 'Quick ambulance services & emergency care assistance.' },
            { title: '95% Patient Satisfaction', desc: 'Our patients trust us for quality and reliability.' },
            { title: 'Secure Health Records', desc: 'We manage over 50,000 patient medical histories securely.' }
          ].map((item, index) => (
            <div key={index} className={`carousel-item ${recordIndex === index ? 'active' : ''}`}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <h2>What Our Patients Say</h2>
        <div className="testimonial-carousel">
          {[
            { name: 'Rohit Sharma', review: 'Excellent service, very professional doctors. Highly recommend MediCare!' },
            { name: 'Anjali Verma', review: 'The ambulance service was super quick. Really saved us in an emergency.' },
            { name: 'Siddharth Patel', review: 'I can access my health reports anytime. Great platform for patients.' }
          ].map((t, index) => (
            <div key={index} className={`testimonial-item ${testimonialIndex === index ? 'active' : ''}`}>
              <p>"{t.review}"</p>
              <h4>- {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Book Appointment</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>Email: contact@medicare.com</li>
            <li>Phone: 987654321</li>
            <li>Delhi, India</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
         <div className="footer-column">
 
  <ul className="social-icons">
    <li>
      <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
    </li>
    <li>
      <a href="#"><i className="fab fa-facebook-f"></i> Facebook</a>
    </li>
    <li>
      <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
    </li>
    <li>
      <a href="#"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
    </li>
  </ul>
</div>


        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 MediCare. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Home;
