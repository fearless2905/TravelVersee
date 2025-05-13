import React, { useEffect } from "react";
import "../assets/home/css/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import IjenImage from "../assets/home/img/IjenBanyuwangi.jpg";

const Header = () => {
  useEffect(() => {
    const toggle = document.getElementById("menu-toggle");
    const wrapper = document.getElementById("wrapper");

    const handleClick = (e) => {
      e.preventDefault();
      wrapper.classList.toggle("menuDisplayed");
      toggle.classList.toggle("active");
    };

    toggle.addEventListener("click", handleClick);

    return () => {
      toggle.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <div>
        <img src={IjenImage} className="bg-image" alt="Background" />
      </div>
      <div className="brand">Travel Verse</div>
      <div id="menu-toggle" className="center">
        <div></div>
      </div>

      <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Booking</a>
            </li>
            <li>
              <a href="#">About US</a>
            </li>
            <li>
              <a href="#">Virtual Tour</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
