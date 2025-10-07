import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
   const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('https://dr-s-k-healthcare.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      } else {
        setStatus(result.error || 'Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message.');
    }
  };
  return (
    <div className="contact-section">
      <h1 className="contact-title" style={{fontSize:"42px"}}>  Contact Us</h1>
      <div className="contact-container">
        {/* LEFT SIDE - Contact Info */}
        <div className="contact-info">
          <h3>Contact Us!</h3>
          <p>Book an Appointment by visiting or a call!</p>
          <div className="info-block">
            <FaMapMarkerAlt className="icon" />
            <div>
              <strong>Dr. Sachin Kumar (B.A.M.S)</strong>
              <p>Bhagat Singh Chowk Dharuhera,Haryana,Pincode-123106,</p>
            </div>
          </div>
          <div className="info-block">
            <FaEnvelope className="icon" />
            <div>
              <strong>sachinhealthcare7@gmail.com</strong>
              <p>Need support? Drop us an email</p>
            </div>
          </div>
          <div className="info-block">
            <FaPhoneAlt className="icon" />
            <div>
              <strong>+91 7500009985</strong>
              <p>Have a question? Call us now</p>
            </div>
          </div>

          <div className="social-icons">
  <span>Follow Us</span>
  <div className="social-links">
    <a href="https://www.facebook.com/YOUR_PROFILE" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
    <a href="https://www.twitter.com/YOUR_PROFILE" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
    <a href="https://www.instagram.com/sachinhealthcare?igsh=dzUwNDJsdzE3MnZr" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
  </div>
</div>

        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div className="contact-form">
          <p className="form-label">YOU CAN REACH US</p>
          <h3>Get In Touch</h3>
              <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Cell Phone" value={formData.phone} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
            <textarea name="message" rows="4" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
            <button type="submit">SEND MESSAGE</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

