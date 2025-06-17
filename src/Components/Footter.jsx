import React from "react";
import { Link } from "react-router-dom";

const Footter = () => {
  return (
    <div className="Footer">
      <div className="Footerlinks1">
        <h2 className="text-start">About Us</h2>
        <h6 className="text-start">Home</h6>
        <h6 className="text-start">About Us</h6>
        <h6 className="text-start">Contact Us</h6>
        <h6 className="text-start">Shop</h6>
        <h6 className="text-start">Blog</h6>
      </div>
      <div className="Footerlinks2">
        <h2 className="text-start">More About us</h2>
        <h6 className="text-start">New Arrivals</h6>
        <h6 className="text-start">Carrer</h6>
        <h6 className="text-start">Partners</h6>
        <h6 className="text-start">Location</h6>
        <h6 className="text-start">Mail us</h6>
      </div>
    </div>
  );
};

export default Footter;
