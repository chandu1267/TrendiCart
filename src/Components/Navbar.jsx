import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary total-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h3>Buy-Now</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/mens">
                  Mens Wear
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/kids">
                  Kids Wear
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/womens">
                  Womens Wear
                </Link>
              </li>
            </ul>
            <div className="icon-container">
              <a className="navbar-brand" href="#">
                <i className="fa-solid fa-globe nav-icons"></i>
                <i className="fa-solid fa-magnifying-glass nav-icons"></i>
                <i className="fa-solid fa-user nav-icons"></i>
                <i className="fa-regular fa-heart nav-icons"></i>
                <button type="button" className="btn btn-danger cart-btn">
                  <i className="fa-solid fa-cart-shopping nav-icons"></i>Cart
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TrendiCart</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/mens">Mens wear</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/womens">Womens wear</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/kids">Kids wear</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
