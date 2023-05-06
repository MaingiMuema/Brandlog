import React, { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import JsonData from "./data/data.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Components/landingPage";
import About from "./Components/about/about";
import Works from "./Components/works";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route
            exact
            path="/works"
            element={<Works data={landingPageData.Works} />}
          />
          <Route
            exact
            path="/about"
            element={<About data={landingPageData.About} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
