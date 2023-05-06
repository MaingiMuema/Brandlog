import React, { useState, useEffect } from "react";
import JsonData from "../data/data.json";

import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navbar />
      <Header data={landingPageData.Header} />
      <Footer />
    </div>
  );
};

export default LandingPage;
