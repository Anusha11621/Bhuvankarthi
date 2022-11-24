import React from "react";
import logo from "../images/threeWheelsLogo.png";
import menu from "../images/Menu.png";
import Home from "./Pages/Home/Home";
import "./TabComponent.css";
const TabComponents = () => {
  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link "
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top pt-4 pb-2 logo">
        <div class="container">
          <div class="d-flex flex-row align-items-center">
            <img src={logo} />
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse ml-5 font-weight-bold"
            id="navbarNavAltMarkup"
          >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Impact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  About Us
                </a>
              </li>
            </ul>
            <div class="navbar-nav ml-auto navigation-bar   ">
              {/* <div class="d-flex flex-row justify-content-center ">
                <a class="nav-link active custom-nav-link ">Home </a>
                <a class="nav-link custom-nav-link">Product</a>
                <a class="nav-link custom-nav-link">Impact</a>
                <a class="nav-link custom-nav-link">About Us</a>
              </div> */}

              <div>
                <button className="carbon-print-button pr-4 pl-4 pt-2 pb-2 ">
                  Check Carbon Footprint
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Home />
    </div>
  );
};

export default TabComponents;
