import React from "react";
import "./Square.css"; // Import your CSS file

type Position = "relative" | "absolute";

interface SquareProps {
  color: string;
  border: string;
  text: string;
  additionalText?: string; // Optional prop for additional text
  borderRadius?: string; // Optional prop for border radius
  width?: string; // Optional prop for width
  height?: string; // Optional prop for height
  padding?: string; // Optional prop for padding
  position?: Position; // Optional prop for positioning ("absolute" or "relative")
  top?: string; // Optional prop for top position
  left?: string; // Optional prop for left position
  bottom?: string; // Optional prop for bottom position
  right?: string; // Optional prop for right position
  opacity?: number; // Optional prop for opacity (0 to 1)
  textColor?: string; // Optional prop for text color
  fontSize?: string; // Optional prop for font size
  fontWeight?: string; // Optional prop for font weight
  fontFamily?: string; // Optional prop for fontFamily
  link?: string; // Optional prop for the link URL
}

const Square: React.FC<SquareProps> = ({
  color,
  border,
  text,
  additionalText,
  borderRadius = "100px",
  width = "100px", // Default width
  height = "100px", // Default height
  padding = "10px", // Default padding
  position = "relative", // Default position is relative
  top = "0", // Default top position
  left = "0", // Default left position
  bottom = "auto", // Default bottom position
  right = "auto", // Default right position
  opacity = 1, // Default opacity (fully opaque)
  textColor = "black", // Default text color
  fontSize = "16px", // Default font size
  fontWeight = "normal", // Default font weight
  fontFamily = "Arial, sans-serif", // Default fontFamily
  link = "#", // Default link URL (can be changed to the desired URL)
}) => {
  const squareStyle = {
    backgroundColor: color,
    border: border,
    borderRadius: borderRadius,
    width: width,
    height: height,
    padding: padding, // Apply padding
    position: position, // Apply positioning
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    opacity: opacity, // Apply opacity
    transition: "transform 0.3s ease", // Add transition for zoom effect
    cursor: "pointer", // Add pointer cursor for click
  };

  const textStyle = {
    color: textColor, // Apply text color
    fontSize: fontSize, // Apply font size
    fontWeight: fontWeight, // Apply font weight
    maxWidth: "100%", // Limit text width to square's width
    overflow: "hidden", // Hide text overflow
    textOverflow: "ellipsis", // Show ellipsis for overflowing text
    fontFamily: fontFamily, // Apply fontFamily
  };

  const linkStyle = {
    textDecoration: "none", // Remove text underline
  };

  return (
    <a href={link} className="square-link" style={linkStyle}>
      {" "}
      {/* Apply linkStyle */}
      <div className="square" style={squareStyle}>
        <div className="text" style={textStyle}>
          {text}
        </div>
        {additionalText && (
          <div className="additional-text" style={textStyle}>
            {additionalText}
          </div>
        )}
      </div>
    </a>
  );
};

export default Square;
