import React from 'react';
import './footer.css'; 
import logo from './img/blacklogo.png';


const Footer = () => {
  return (
    <footer className="footer">
        
        <div className="footer-content">
          <div className=''>
            <img src={logo} alt="WhiteLogo" className="logo" />
            <p>Copyright &copy; 2024 Lawnshark. All rights reserved.</p>
          </div>
          <ul className="social-links">
              <h1>Connect With Us</h1>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
          </ul>
          <ul className="footer-nav">
              <h1>Navigation</h1>
              <li><a href="#about">About</a></li>
              <li><a href="#product">Product</a></li>
              <li><a href="#technology">Technology</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#buynow">Buy Now</a></li>
          </ul>
        </div>
    </footer>
  );
}

export default Footer;
