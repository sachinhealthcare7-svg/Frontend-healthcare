import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom"
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Quick Links */}
        <div className="quick-links">
          <h1>Quick Links</h1>
          <div className="link-columns">
            <ul>
              <li><Link to="/"> Home</Link></li>
              <li>Book Appointment</li>
            </ul>
            <ul>
              <li> <Link to="/About" >About  Doctor </Link></li>
              <li> <Link to="/Contact">Contact us</Link></li>
            </ul>
          </div>
       <ul className="example-2">
  {/* WhatsApp */}
  <li className="icon-content">
    <a
      data-social="whatsapp"
      aria-label="Whatsapp"
      href="https://api.whatsapp.com/send?phone=7500009985&text=Save%20this%20to%20your%20Favorites%20-%20@wilsondesouza"
    >
      <div className="filled"></div>
      <svg
        viewBox="0 0 24 24"
        className="bi bi-whatsapp"
        fill="currentColor"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z"
        />
      </svg>
    </a>
    <div className="tooltip">Whatsapp</div>
  </li>

  {/* Facebook */}
  <li className="icon-content">
    <a
      data-social="facebook"
      aria-label="Facebook"
      href="https://www.facebook.com/share/1FRM31mBwM/?mibextid=wwXIfr"
    >
      <div className="filled"></div>
      <svg
        viewBox="0 0 24 24"
        className="bi bi-facebook"
        fill="currentColor"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
        />
      </svg>
    </a>
    <div className="tooltip">Facebook</div>
  </li>

  {/* Instagram */}
  <li className="icon-content">
    <a
      data-social="instagram"
      aria-label="Instagram"
      href="https://www.instagram.com/sachinhealthcare?igsh=dzUwNDJsdzE3MnZr"
    >
      <div className="filled"></div>
      <svg
        viewBox="0 0 16 16"
        className="bi bi-instagram"
        fill="currentColor"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
        />
      </svg>
    </a>
    <div className="tooltip">Instagram</div>
  </li>
    {/* YouTube */}
  <li className="icon-content">
    <a
      data-social="youtube"
      aria-label="YouTube"
      href="https://youtube.com/@sachinhealthcare-b1c?si=7Laljy_j1X8npmxk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="filled"></div>
      <svg
        viewBox="0 0 24 24"
        className="bi bi-youtube"
        fill="currentColor"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M19.615 3.184A4.376 4.376 0 0 0 16.66 2.63C14.42 2.5 12 2.5 12 2.5s-2.42 0-4.66.13a4.376 4.376 0 0 0-2.955.554A4.411 4.411 0 0 0 2.63 5.54C2.5 7.78 2.5 12 2.5 12s0 4.22.13 6.46a4.376 4.376 0 0 0 .554 2.955 4.411 4.411 0 0 0 1.755 1.755 4.376 4.376 0 0 0 2.955.554C9.58 21.5 12 21.5 12 21.5s2.42 0 4.66-.13a4.376 4.376 0 0 0 2.955-.554 4.411 4.411 0 0 0 1.755-1.755 4.376 4.376 0 0 0 .554-2.955c.13-2.24.13-6.46.13-6.46s0-4.22-.13-6.46a4.376 4.376 0 0 0-.554-2.955 4.411 4.411 0 0 0-1.755-1.755ZM10 15.5v-7l6 3.5-6 3.5Z"
        />
      </svg>
    </a>
    <div className="tooltip">YouTube</div>
  </li>

</ul>


        </div>

        {/* Timing & Contact */}
        <div className="timing-card">
          <div className="icon">📅</div>
          <div className="timings">
            <div className="row">
              <strong> Dr. S.K Clinic Dharuhera</strong>
              <span>10:00 am – 09:00 pm</span>
              <span>Monday – Friday</span>
            </div>
            <div className="row">
              <strong> Dr.  S.K Clinic Neemrana </strong>
              <span>10:00 pm – 07:30 pm</span>
              <span>Saturday – Sunday</span>
            </div>
          </div>
          <a href="#" className="contact-btn">CONTACT IS</a>
        </div>
      </div>

    <div className="map-embeds">
  <h4>Our Locations</h4> <br />
    <div className='map1'>
  <div className="map-item">
    <h2><strong>Dharuhera Clinic</strong></h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.322018953577!2d76.7902!3d28.2104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDEyJzM3LjQiTiA3NsKwNDcnMzIuOCJF!5e0!3m2!1sen!2sin!4v1600000000000"
      width="100%"
      height="150"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>

  <div className="map-item">
   <h2> <strong>Neemrana Clinic</strong></h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.018037491071!2d76.3822!3d27.9881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU5JzE3LjIiTiA3NsKwMjInNTUuOSJF!5e0!3m2!1sen!2sin!4v1600000000000"
      width="100%"
      height="150"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
