import React from 'react';
import Calculator from './components/Calculator';
import bannerImage from './assets/banner.jpg';
import './App.css';

function App() {
  return (
    <div className="app">
      <img src={bannerImage} alt="ARK Packers and Movers Banner" className="banner" />

      <div className="contact">
        📞 Phone: <a href="tel:+918867597996">8867597996</a> | 
        📱 WhatsApp: <a href="https://wa.me/919902791440" target="_blank" rel="noopener noreferrer">9902791440</a>
      </div>

      <div className="info-section">
        <div className="services">
          <h2>Our Services</h2>
          <ul>
            <li>✔️ Loading</li>
            <li>✔️ Unloading with Packing</li>
          </ul>
        </div>

        <div className="timing">
          <h2>Working Hours</h2>
          <p>🕒 10:00 AM to 6:00 PM</p>
        </div>
      </div>

      <Calculator />
    </div>
  );
}

export default App;
