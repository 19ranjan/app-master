// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Ministry from "./components/Ministry";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ministry" element={<Ministry />} />
      </Routes>
    </Router>
  );
}

export default App;
