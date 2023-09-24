import React, { useRef, useEffect, useState } from "react";

interface CustomIframeProps {
  src: string;
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: number | string;
  transition?: string;
  position?: "static" | "relative" | "absolute";
  top?: number | string; // Top position
  left?: number | string; // Left position
  background?: string; // Background color or image
}

const CustomIframe: React.FC<CustomIframeProps> = ({
  src,
  width = "100%",
  height = "400px",
  border = "none",
  borderRadius = 0,
  transition = "none",
  position = "static",
  top,
  left,
  background, // Add background prop
}) => {
  const iframeStyle = {
    width,
    height,
    border,
    borderRadius,
    transition,
    background, // Apply background to the iframe
  };

  // Store the current scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Function to handle scroll events and update the scroll position
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollPosition(containerRef.current.getBoundingClientRect().top);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const translateY = scrollPosition / 2; // Adjust the division factor as needed

  const containerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position,
    transform: `translateY(${translateY}px)`, // Apply the sliding transition
    transition: "transform 0.3s ease-in-out", // Adjust the duration and timing function as needed
    top,
    left,
  };

  return (
    <div ref={containerRef} style={containerStyle}>
      <iframe src={src} style={iframeStyle} title="Custom Iframe" />
    </div>
  );
};

export default CustomIframe;
