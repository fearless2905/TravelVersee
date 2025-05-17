import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IjenImage from "../../assets/home/img/IjenBanyuwangi.jpg";

const Konten = () => {
  return (
    <div>
      <img src={IjenImage} className="bg-image" alt="Background" />
      <div>
        {/* Teks Heading dan Subheading */}
        <h1 className="heading mb-4" data-aos="fade-up">
          Jelajahi Banyuwangi dengan Virtual Reality
        </h1>
        <p className="sub-heading mb-5" data-aos="fade-up" data-aos-delay="100">
          Jelajahi tempat eksotis Banyuwangi kapan saja, di mana saja!
        </p>

        {/* Tombol Aksi */}
        <p className="pt-4 explore-btn" data-aos="fade-up" data-aos-delay="100">
          <a
            href="travelverse-dashboard.html"
            className="btn uppercase btn-outline-light d-sm-inline d-block py-3"
          >
            Jelajahi Sekarang
          </a>
        </p>
      </div>
    </div>
  );
};

export default Konten;
