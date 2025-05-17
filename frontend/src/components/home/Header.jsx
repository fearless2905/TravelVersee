import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/home/css/header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import IjenImage from "../../assets/home/img/IjenBanyuwangi.jpg";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <header className="site-header">
      <div
        className="site-hero overlay"
        style={{
          backgroundImage: `url(${IjenImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 site-logo" data-aos="fade">
              <a href="index.html" className="animsition-link">
                TravelVerse
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
