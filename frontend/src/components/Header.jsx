import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/home/css/header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fancyapps/fancybox/dist/jquery.fancybox.css";
import "animsition/dist/css/animsition.min.css";
import IjenImage from "../../assets/home/img/IjenBanyuwangi.jpg";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const toggleMenu = (e) => {
      e.stopPropagation(); // Cegah event bubbling
      const $this = $(e.currentTarget);
      if ($("body").hasClass("menu-open")) {
        $this.removeClass("open");
        $(".js-site-navbar").fadeOut(400);
        $("body").removeClass("menu-open");
      } else {
        $this.addClass("open");
        $(".js-site-navbar").fadeIn(400);
        $("body").addClass("menu-open");
      }
    };

    // Event handler untuk toggle
    $(".site-menu-toggle").on("click", toggleMenu);

    // Tutup menu jika klik di luar area menu & toggle
    $(document).on("click", function (e) {
      if (
        $("body").hasClass("menu-open") &&
        !$(e.target).closest(".js-site-navbar, .site-menu-toggle").length
      ) {
        $(".site-menu-toggle").removeClass("open");
        $(".js-site-navbar").fadeOut(400);
        $("body").removeClass("menu-open");
      }
    });

    // Bersihkan event saat unmount
    return () => {
      $(".site-menu-toggle").off("click", toggleMenu);
      $(document).off("click");
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 site-logo" data-aos="fade">
              <a href="/" className="animsition-link">
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
                            <a href="/" className="animsition-link">
                              Home
                            </a>
                          </li>
                          <li>
                            <a href="/booking" className="animsition-link">
                              Booking
                            </a>
                          </li>
                          <li>
                            <a href="/about" className="animsition-link">
                              About Us
                            </a>
                          </li>
                          <li>
                            <a
                              href="/travelverse-dashboard"
                              className="animsition-link"
                            >
                              Virtual Tour
                            </a>
                          </li>
                          <li>
                            <a href="/login" className="animsition-link">
                              Login
                            </a>
                          </li>
                          <li>
                            <a href="/blog" className="animsition-link">
                              Blog
                            </a>
                          </li>
                          <li>
                            <a href="/contact" className="animsition-link">
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
                  href="/travelverse-dashboard"
                  className="btn btn-outline-light text-uppercase d-sm-inline d-block py-3"
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
    </>
  );
};

export default Header;
