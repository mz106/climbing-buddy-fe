import './CSS/Footer.css';
import { FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BsArrowUpCircle, BsTelephone } from 'react-icons/bs';
import { FaRegAddressBook } from 'react-icons/fa'

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
              <li>Page 1</li>
              <li>Page 2</li>
              <li>Page 3</li>
            </ul>
          </nav>
          <div className="vl"></div>
          <nav>
            <ul>
              <li>Page 4</li>
              <li>Page 5</li>
              <li>Page 6</li>
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
            <BsTelephone /> 019209201290<br></br>
            <AiOutlineMail /> buddy@climb.com<br></br>
            <FaRegAddressBook /> 100 Some Address, Manchester, UK
          </p>
        </div>
        <i>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</i>
        {/* Some legal text and links here */}

        {/* Back to top icon */}
        <BsArrowUpCircle className='back-to-top-icon' size={50}/>
      </section>
    </footer>
  );
};

export default Footer;