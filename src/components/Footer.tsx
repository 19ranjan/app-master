import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      {/* First Row with Three Columns */}
      <div
        className="footer-row"
        style={{ backgroundColor: "#005271", color: "white" }}
      >
        {/* First Column */}
        <div className="footer-column">
          <h3>Options</h3>
          <ul>
            <li>
              <a href="/" style={{ backgroundColor: "#005271", color: "white" }}>Centres</a>
            </li>
            <li>
              <a href="/" style={{ backgroundColor: "#005271", color: "white" }}>States</a>
            </li>
            <li>
              <a href="/" style={{ backgroundColor: "#005271", color: "white" }}>Patients</a>
            </li>
            {/* Add dropdowns as needed */}
          </ul>
        </div>

        {/* Second Column */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <address>
            <p>123 Example Street</p>
            <p>City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </address>
        </div>

        {/* Third Column */}
        <div className="footer-column">
          <h3>Visitor Count</h3>
          <p>Visitors: 1000</p> {/* Replace with your visitor count */}
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="copyright">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
