import React from "react";

const ShowFacilities = () => {
  // Define your background image URL
  const backgroundImageUrl = "flag.jpg";

  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", // Adjust as needed
        backgroundPosition: "center center", // Center the background image
        minHeight: "400px", // Adjust the height as needed
        position: "relative", // Enable absolute positioning for buttons
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the buttons
          textAlign: "center", // Center text horizontally
        }}
      >
        {/* First floating button */}
        <button
          style={{
            backgroundColor: "red",
            border: "2px solid black",
            color: "white",
            padding: "10px 20px", // Adjust padding as needed
            margin: "0 10px", // Add margin between buttons
          }}
        >
          Button 1
        </button>

        {/* Second floating button */}
        <button
          style={{
            backgroundColor: "blue",
            border: "2px solid black",
            color: "white",
            padding: "10px 20px", // Adjust padding as needed
            margin: "0 10px", // Add margin between buttons
          }}
        >
          Button 2
        </button>

        {/* Third floating button */}
        <button
          style={{
            backgroundColor: "green",
            border: "2px solid black",
            color: "white",
            padding: "10px 20px", // Adjust padding as needed
            margin: "0 10px", // Add margin between buttons
          }}
        >
          Button 3
        </button>
      </div>
    </section>
  );
};

export default ShowFacilities;
