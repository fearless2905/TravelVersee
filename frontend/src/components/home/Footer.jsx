import React from "react";
import "../../assets/home/css/footer.css";

const Footer = () => {
  return (
    <footer className="section footer-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-3 mb-5">
            <h3>Quick Link</h3>
            <ul className="list-unstyled link">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <h3>Support</h3>
            <ul className="list-unstyled link">
              <li>
                <a href="#">Our Location</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-5 contact-info">
            <h3>Contact Info</h3>
            <p>
              <span className="d-block">Address:</span>
              <span> IGS Indonesia Groups</span>
            </p>
            <p>
              <span className="d-block">Phone:</span>
              <span> (+62) 888 8888</span>
            </p>
            <p>
              <span className="d-block">Email:</span>
              <span> info@gmailku.com</span>
            </p>
          </div>
          <div className="col-md-3 mb-5">
            <h3>Subscribe</h3>
            <p>Sign up for our newsletter</p>
            <form className="footer-newsletter">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email..."
                />
                <button type="submit" className="btn">
                  <span className="fa fa-paper-plane"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row bordertop text-center pt-5">
          <p className="col-md-12">
            <br />
            Designed &amp; Developed by <a href="#">TravelVerse Team</a>
          </p>
          <p className="col-md-12 social">
            <a href="#">
              <span className="fa fa-facebook"></span>
            </a>
            <a href="#">
              <span className="fa fa-twitter"></span>
            </a>
            <a href="#">
              <span className="fa fa-instagram"></span>
            </a>
            <a href="#">
              <span className="fa fa-linkedin"></span>
            </a>
            <a href="#">
              <span className="fa fa-youtube"></span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
