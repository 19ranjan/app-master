import React from "react";
import "./JoinUs.css"; // Create a CSS file for styling

const JoinUs = () => {
  return (
    <section className="join-us">
      <div className="join-us-content">
        <h2>Why Join Us?</h2>
        <p>Discover the benefits of joining our De-Addiction Network.</p>
        <div className="features">
          <div className="feature">
            <img src="patient.png" alt="Feature 1" />
            <br />
            <br />
            <br />
            <h3>Expert Care</h3>
            <p>Receive personalized care from experienced professionals.</p>
          </div>
          <div className="feature">
            <img src="medicine.png" alt="Feature 2" />
            <h3>Community Support</h3>
            <p>Connect with a supportive community on the path to recovery.</p>
          </div>
          <div className="feature">
            <img src="happy.png" alt="Feature 3" />
            <h3>Holistic Approach</h3>
            <p>Experience a holistic approach to addiction recovery.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
