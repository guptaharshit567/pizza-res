import React from "react";
import truck from "../assets/truck.png";
import Insta from "../assets/Insta.png";
import Twitter from "../assets/Twitter.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side with truck icon */}
        <div className="footer-section footer-logo">
          <img id="truck" src={truck} alt="Food Truck" />
        </div>

        {/* Contact section */}
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </p>
          <p>example2020@gmail.com</p>
          <p>(904) 443-0343</p>
        </div>

        {/* More section */}
        <div className="footer-section footer-more">
          <h3>More</h3>
          <ul>
            <li>About Us</li>
            <li>Products</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Social section */}
        <div className="footer-section footer-social">
          <ul>
            <li>
              <img src={Insta} alt="Instagram" />
            </li>
            <li>
              <img id="twitter" src={Twitter} alt="Twitter" />
            </li>
            <li>
              <img src={facebook} alt="Facebook" />
            </li>
          </ul>
          <p>© 2022 Food Truck Example</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
