import React, { useState, useEffect } from "react";
import JsonData from "../data/data.json";

import Navbar from "./navbar";
import Header from "./header";

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navbar />
      <Header data={landingPageData.Header} />
    </div>
  );
};

export default LandingPage;
