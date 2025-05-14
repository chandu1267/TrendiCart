import React from "react";
import Homepage from "../Components/Homepage";
import Mens from "./Mens";
import Womens from "./Womens";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kids from "./Kids";

const LandingPage = () => {
  return (
    <>
      <Homepage/>
      <Mens />
      <Womens />
      <Kids/>
    </>
  );
};

export default LandingPage;
