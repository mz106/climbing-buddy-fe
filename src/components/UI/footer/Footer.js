import React from 'react';
import './CSS/Footer.css';
import './CSS/footer_mq.css';
import { FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsArrowUpCircle } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='main-footer'>
      <section className="footer-top">
      <div className='footer-logo'>
          <h1>ClimbingBuddy</h1>
        </div>
        <div className='footer-navigation'>
          <nav>
            <ul>
              <li>About</li>
              <li>Events</li>
              <li>News</li>
            </ul>
          </nav>
          <div className="vl"></div>
          <nav>
            <ul>
              <li>Routes</li>
              <li>Community</li>
              <li>Get Started</li>
            </ul>
          </nav> 
        </div>
        <div className='footer-socials'>
          <h2>Follow Us</h2>
            <FiTwitter />
            <FiInstagram />
            <FiYoutube />
            <AiOutlineLinkedin />
        </div>
      </section>
      <section className="footer-bottom">
      <div className="footer-contact">
          <h2>Contact Us</h2>
          <p className='footer-contact-details'>
            phone: 019209201290<br></br>
            email: buddy@climb.com<br></br>
            address: 100 Some Address, Manchester, UK
          </p>
        </div>
        <i>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</i>
        {/* Some legal text and links here */}

        {/* Back to top icon */}
        <BsArrowUpCircle size={50}/>
      </section>
    </footer>
  );
};

export default Footer;