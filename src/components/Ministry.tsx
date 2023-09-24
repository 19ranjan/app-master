import React from "react";
import CustomIframe from "./Frame";

const Ministry = () => {
  const containerStyle = {
    backgroundColor: "#6dd5ed", // Set the background color here
    padding: "20px", // Adjust padding as needed
  };

  return (
    <div style={containerStyle}>
      <h1>My React Component</h1>
      <CustomIframe
        src="overall_plot.html"
        width="1300px"
        height="600px"
        border="1px solid #ccc"
        borderRadius={50}
        position="relative"
        top={200}
        left={10}
        background="#ffffff"
      />

      <CustomIframe
        src="treatment_plot.html"
        width="600px"
        height="600px"
        border="1px solid #ccc"
        borderRadius={50}
        position="relative"
        top={-50}
        left={10}
        background="#ffffff"
      />

      <CustomIframe
        src="drug_age_plot.html"
        width="600px"
        height="600px"
        border="1px solid #ccc"
        borderRadius={50}
        position="relative"
        top={-500}
        left={800}
        background="#ffffff"
      />

      <CustomIframe
        src="counselling_plot.html"
        width="700px"
        height="600px"
        border="1px solid #ccc"
        borderRadius={50}
        position="relative"
        top={-950}
        left={30}
        background="#ffffff"
      />
    </div>
  );
};

export default Ministry;
