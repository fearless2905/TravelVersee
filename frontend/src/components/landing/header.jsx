import React from "react";
import "../../assets/landing/css/style.css";

function Header() {
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

            <div className="site-navbar js-site-navbar">
              <nav role="navigation">
                <div className="container">
                  <div className="row full-height align-items-center">
                    <div className="col-md-12 justify-content-center">
                      <ul className="list-unstyled menu">
                        <li className="active">
                          <a href="index.html" className="animsition-link">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="hotel.html" className="animsition-link">
                            Booking
                          </a>
                        </li>
                        <li>
                          <a href="about.html" className="animsition-link">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="gallery.html" className="animsition-link">
                            Virtual Tour
                          </a>
                        </li>
                        <li>
                          <a href="login.html" className="animsition-link">
                            Login
                          </a>
                        </li>
                        <li>
                          <a href="blog.html" className="animsition-link">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="contact.html" className="animsition-link">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
