import React, { useEffect, useState } from 'react';
import './Header.css'; 
import WhiteLogo from './img/whitelawnshark.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <a href="#home" className="logo-link">
          <img src={WhiteLogo} alt="WhiteLogo" className="logo" />
        </a>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#about">ABOUT</a></li>
            <li className="separator">|</li>
            <li><a href="#product">PRODUCT</a></li>
            <li className="separator">|</li>
            <li><a href="#technology">TECHNOLOGY</a></li>
            <li className="separator">|</li>
            <li><a href="#services">SERVICES</a></li>
            <li className="separator">|</li>
            <li><a href="#buynow">BUY NOW</a></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
