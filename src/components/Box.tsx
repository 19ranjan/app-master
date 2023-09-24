import React from "react";
import "./Box.css"; // You can create a CSS file for styling

const Box = ({ image, text, link }) => {
  return (
    <a href={link} className="box-link">
      <div className="box">
        <img src={image} alt="Box" />
        <div className="overlay">
          <p>{text}</p>
          <span className="btn-link">Learn More</span>
        </div>
      </div>
    </a>
  );
};

export default Box;
