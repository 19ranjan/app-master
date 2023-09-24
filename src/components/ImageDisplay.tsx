import React from "react";

type Position = "relative" | "absolute";

interface ImageDisplayProps {
  src: string; // Image source
  alt: string; // Alt text for the image
  width?: string; // Optional width
  height?: string; // Optional height
  position?: Position; // Optional position
  top?: string; // Optional top position
  left?: string; // Optional left position
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  src,
  alt,
  width = "500px",
  height = "500px",
  position = "relative",
  top = "0",
  left = "0",
}) => {
  // CSS styles for positioning
  const imageStyles = {
    width,
    height,
    position,
    top,
    left,
  };

  return (
    <div>
      <img src={src} alt={alt} style={imageStyles} />
    </div>
  );
};

export default ImageDisplay;
