import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Site Name */}
      <div className="site-name">Nasha Mukt Bharat</div>

      {/* Social Media Icons */}
      <div className="social-media-icons"  style={{ display:"flex", marginRight:"10px", marginLeft:"10px" }}>
        <a href="#">
          <img src="facebook.png" alt="Facebook" />
        </a>
        <a href="#">
          <img src="twitter.png" alt="Twitter" />
        </a>
        <a href="#">
          <img src="instagram.png" alt="Instagram" />
        </a>
      </div>

      {/* Second Row for Photos */}
      <div className="photo-row">
        <div className="photo">
          <img src="photo1.png" alt="Photo 1"style={{ height:"100px" }} />
        </div>
        <div className="photo">
          <img src="photo3.png" alt="Photo 2" />
        </div>
        <div className="photo">
          <img src="photo2.png" alt="Photo 3"style={{ height:"70px" , width:"70px"}} />
        </div>
      </div>

      {/* Third Row for Options */}
      <div className="option-row">
        <div className="dropdown">
          <button className="dropbtn">Home</button>
          
        </div>

        <div className="dropdown">
          <button className="dropbtn">About Us</button>
          
        </div>
        <div className="dropdown">
          <button className="dropbtn">Community</button>
          
        </div>
        <div className="dropdown">
          <button className="dropbtn">Reports</button>
          
        </div>

        <div className="dropdown">
          <button className="dropbtn">Services</button>
          <div className="dropdown-content">
            <a href="#">Suboption 1</a>
            <a href="#">Suboption 2</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">FAQs</button>
         
        </div>

        

       

        <div className="dropdown">
          <button className="dropbtn">Contact Us</button>
          <div className="dropdown-content">
            <a href="#">Suboption 1</a>
            <a href="#">Suboption 2</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
