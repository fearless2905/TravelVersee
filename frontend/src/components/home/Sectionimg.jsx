import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/home/css/sectionimg.css";
import AOS from "aos";
import "aos/dist/aos.css";
import IjenImage from "../../assets/home/img/IjenBanyuwangi.jpg";

const Sectionimg = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="site-hero overlay"
      style={{ backgroundImage: `url(${IjenImage})` }}
    >
      <div className="container">
        <div className="row site-hero-inner justify-content-center align-items-center">
          <div className="col-md-10 text-center">
            <h1 className="heading mb-4" data-aos="fade-up">
              Jelajahi Banyuwangi dengan Virtual Reality
            </h1>
            <p
              className="sub-heading mb-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Jelajahi tempat eksotis Banyuwangi kapan saja, di mana saja!
            </p>
            <p className="pt-4" data-aos="fade-up" data-aos-delay="100">
              <a
                href="travelverse-dashboard.html"
                className="btn uppercase btn-outline-light d-sm-inline d-block py-3"
              >
                Jelajahi Sekarang
              </a>
            </p>
          </div>
        </div>
        <p data-aos="fade-up" data-aos-offset="-500">
          <a href="#next-section" className="scroll-down smoothscroll">
            <span className="fa fa-play"></span> Gulir ke bawah
          </a>
        </p>
      </div>
    </section>
  );
};

export default Sectionimg;
