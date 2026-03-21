// Import bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; // animation styles
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
// Create root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);