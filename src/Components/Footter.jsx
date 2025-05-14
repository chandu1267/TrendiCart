import React from "react";
import { Link } from "react-router-dom";

const Footter = () => {
  return (
    <div className="Footer">
      <div className="Footerlinks1">
        <h2>About Us</h2>
        <h6>Home</h6>
        <h6>About Us</h6>
        <h6>Contact Us</h6>
        <h6>Shop</h6>
        <h6>Blog</h6>
      </div>
      <div className="Footerlinks2">
        <h2>More About us</h2>
        <h6>New Arrivals</h6>
        <h6>Carrer</h6>
        <h6>Partners</h6>
        <h6>Location</h6>
        <h6>Mail us</h6>
      </div>
      <div className="Footerlinks3">
        <h2>Get Help</h2>
        <h6>Yours Order</h6>
        <h6>Yours Account</h6>
        <h6>Track Order</h6>
        <h6>Yours Whishlist</h6>
        <h6>Yours Favorites</h6>

      </div>
    </div>
  );
};

export default Footter;
