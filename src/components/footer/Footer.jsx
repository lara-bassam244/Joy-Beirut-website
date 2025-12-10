import { Instagram, Phone } from "lucide-react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col footer-logo">
          <img src="/joybeirut.png" alt="Joy Beirut logo" />
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p><strong>Call :</strong><br />+961 03 996 589</p>
          <p><strong>Email :</strong><br />joybeirut@gmail.com</p>
        </div>

        <div className="footer-col">
          <h4>About Us</h4>
          <ul>
            <li>Joy’s story</li>
            <li>Meet the owners</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Menu</h4>
          <ul>
            <li>Coffee</li>
            <li>Drinks</li>
            <li>Sandwiches</li>
            <li>Deserts</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Bundles</h4>
          <ul>
            <li>Bundle of Joy</li>
            <li>Surprise Bundle</li>
          </ul>
        </div>

        <div className="footer-col footer-social">
          <h4>Follow Us</h4>
          <div className="footer-icons">
            <a href="#"><Phone size={24} /></a>
            <a href="#"><Instagram size={24} /></a>
            <FontAwesomeIcon icon={faTiktok} style={{ fontSize: "25px" }} />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        All Rights Reserved
      </div>
    </footer>
  );
}
