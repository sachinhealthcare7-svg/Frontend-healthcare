import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaFacebookF, 
  FaInstagram,
  FaWhatsapp,
  FaClock,
  FaUser,
  FaComment,
  FaPaperPlane
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Validation functions
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus({ type: 'error', message: 'Please fix the errors in the form' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'info', message: 'Sending message...' });

    // EmailJS configuration
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_d2wp5xo';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_9x8h1so';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'XuF4Nizzw2aEFaKvR';

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (result.text === 'OK') {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. We will contact you shortly.' 
        });
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or call us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Structured data for ContactPage
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Dr. S.K Sachin Health Care",
    "description": "Get in touch with Dr. S.K Sachin for Ayurvedic consultation",
    "mainEntity": {
      "@type": "MedicalBusiness",
      "name": "Dr. S.K Sachin Health Care",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bhagat Singh Chowk",
        "addressLocality": "Dharuhera",
        "addressRegion": "Haryana",
        "postalCode": "123106",
        "addressCountry": "IN"
      },
      "telephone": "+91-7500009985",
      "email": "sachinhealthcare7@gmail.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Dr. S.K Sachin | Best Sexologist & Ayurvedic Clinic in Dharuhera, Neemrana</title>
        <meta name="description" content="Contact Dr. S.K Sachin (B.A.M.S) for confidential Ayurvedic consultation. Book appointment for sexual health, piles treatment, skin diseases & gupt rog. Call +91 7500009985." />
        <meta name="keywords" content="contact sexologist, book appointment, dr sk sachin contact, ayurvedic clinic dharuhera, sexologist near me, piles doctor contact, skin specialist appointment" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Contact Dr. S.K Sachin - Ayurvedic Sexology Clinic" />
        <meta property="og:description" content="Book your confidential consultation today. Expert in sexual health, piles, and skin diseases." />
        <meta property="og:url" content="https://yourclinicwebsite.com/contact" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourclinicwebsite.com/contact" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(contactStructuredData)}
        </script>
      </Helmet>

      <section className="contact-section" id="contact" aria-label="Contact Us">
        <div className="contact-wrapper">
          
          {/* Section Header */}
          <div className="section-header" data-aos="fade-down">
            <span className="section-badge">📞 GET IN TOUCH</span>
            <h1 className="contact-main-title">
              <span className="blue">Contact</span> <span className="green">Us</span>
            </h1>
            <p className="section-subtitle">
              Book your confidential consultation with Dr. S.K Sachin today
            </p>
          </div>

          <div className="contact-container">
            {/* LEFT SIDE - Contact Information */}
            <div className="contact-info" data-aos="fade-right">
              <div className="info-card">
                <h3 className="info-title">Consultation Hours</h3>
                <div className="hours-block">
                  <div className="hour-item">
                    <FaClock className="hour-icon" />
                    <div>
                      <strong>Dharuhera Clinic</strong>
                      <p>Mon-Fri: 10:00 AM – 09:00 PM</p>
                    </div>
                  </div>
                  <div className="hour-item">
                    <FaClock className="hour-icon" />
                    <div>
                      <strong>Neemrana Clinic</strong>
                      <p>Sat-Sun: 10:00 AM – 07:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3 className="info-title">Contact Information</h3>
                
                <div className="info-block">
                  <div className="info-icon-wrapper">
                    <FaMapMarkerAlt className="info-icon" />
                  </div>
                  <div className="info-content">
                    <strong>Dr. Sachin Kumar (B.A.M.S)</strong>
                    <p>Bhagat Singh Chowk, Dharuhera, Haryana - 123106</p>
                  </div>
                </div>

                <div className="info-block">
                  <div className="info-icon-wrapper">
                    <FaEnvelope className="info-icon" />
                  </div>
                  <div className="info-content">
                    <strong>Email Us</strong>
                    <p>
                      <a href="mailto:sachinhealthcare7@gmail.com" className="info-link">
                        sachinhealthcare7@gmail.com
                      </a>
                    </p>
                    <p className="info-note">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="info-block">
                  <div className="info-icon-wrapper">
                    <FaPhoneAlt className="info-icon" />
                  </div>
                  <div className="info-content">
                    <strong>Call Us</strong>
                    <p>
                      <a href="tel:+917500009985" className="info-link">
                        +91 75000 09985
                      </a>
                    </p>
                    <p className="info-note">Emergency appointments available</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/917500009985?text=Hello%20Dr.%20Sachin%2C%20I%20need%20consultation%20for%20..."
                className="whatsapp-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="whatsapp-icon" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Social Links */}
              <div className="social-section">
                <span className="social-label">Follow Us:</span>
                <div className="social-links">
                  <a 
                    href="https://www.facebook.com/share/1FRM31mBwM/?mibextid=wwXIfr" 
                    className="social-link facebook"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow on Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="https://www.instagram.com/sachinhealthcare?igsh=dzUwNDJsdzE3MnZr" 
                    className="social-link instagram"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow on Instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="trust-badges">
                <div className="trust-badge">
                  <span className="badge-number">8+</span>
                  <span className="badge-text">Years Experience</span>
                </div>
                <div className="trust-badge">
                  <span className="badge-number">10K+</span>
                  <span className="badge-text">Happy Patients</span>
                </div>
                <div className="trust-badge">
                  <span className="badge-number">100%</span>
                  <span className="badge-text">Confidential</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Contact Form */}
            <div className="contact-form-wrapper" data-aos="fade-left">
              <div className="form-card">
                <div className="form-header">
                  <span className="form-badge">BOOK APPOINTMENT</span>
                  <h2 className="form-title">Get In Touch</h2>
                  <p className="form-description">
                    Fill the form below and we'll contact you within 24 hours
                  </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <div className="input-wrapper">
                      <FaUser className="input-icon" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name *"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? 'error' : ''}
                        disabled={isSubmitting}
                      />
                      {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div> 

                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                        disabled={isSubmitting}
                      />
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                  </div> 

                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject (Optional)"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <div className="textarea-wrapper">
                      <FaComment className="textarea-icon" />
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message *"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'error' : ''}
                        disabled={isSubmitting}
                      ></textarea>
                    </div>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message <FaPaperPlane className="send-icon" />
                      </>
                    )}
                  </button>

                  {status.message && (
                    <div className={`status-message ${status.type}`}>
                      {status.message}
                    </div>
                  )}

                  <p className="form-footer">
                    Your information is 100% confidential. We respect your privacy.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="emergency-notice" data-aos="fade-up">
            <FaPhoneAlt className="emergency-icon" />
            <div>
              <strong>For Emergency:</strong> Call us directly at 
              <a href="tel:+917500009985" className="emergency-number"> +91 75000 09985</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;