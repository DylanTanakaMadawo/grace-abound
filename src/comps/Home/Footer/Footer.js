import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  // FaTwitter,
  // FaLinkedin,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-inside-box">
          <div className="address">
            <h2>ADDRESS</h2>
            <p>Main Hall, Country Club</p>
            <p>Marondera</p>
            <p>Zimbabwe</p>
            <p>info@graceabountministries.org</p>
            <p>Call Us : +263 771 234 567</p>
          </div>
          <div className="apostle-footer">
            <h2>LEADERS</h2>
            <p>Apostle E. Chipfupa</p>
            <p>Pastor S. Chipfupa</p>
          </div>
          <div className="follow-us">
            <h2>Follow Us</h2>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
      </div>
      <p className='developer'>site developed by grace abound ministries</p>
    </div>
  );
}

export default Footer;