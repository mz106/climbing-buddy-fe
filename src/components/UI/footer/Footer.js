import React from 'react';
import { FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='main-footer'>
      <section className='footer-navigation'>
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
      </section>
      <section className='footer-logo'>
        <img src="" alt="Footer-logo" />
      </section>
      <section className='footer-socials'>
        <h2>Follow Us</h2>
          <FiTwitter />
          <FiInstagram />
          <FiYoutube />
          <AiOutlineLinkedin />
      </section>
      <section className="footer-bottom">
        <i>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam perferendis porro ipsa magnam vitae deserunt natus perspiciatis illo eveniet quo quis labore repellat nostrum rem eaque quam, hic unde quibusdam?</i>
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p className='footer-contact-details'>
            phone: 019209201290
            email: bbuddy@climb.com
            adress: 100 Some Address, Manchester, UK
          </p>
        </div>
        {/* Some legal text and links here */}
      </section>
    </footer>
  );
};

export default Footer;