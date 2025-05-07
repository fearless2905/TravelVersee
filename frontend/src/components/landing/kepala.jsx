// src/components/landing/header.jsx
import React from "react";

function Kepala() {
  return (
    <header className="site-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 site-logo" data-aos="fade">
            <a href="index.html" className="animsition-link">
              TravelVerse
            </a>
          </div>
          <div className="col-8">
            <div
              className="site-menu-toggle js-site-menu-toggle"
              data-aos="fade"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Kepala;
