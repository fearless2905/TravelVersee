import React, { useEffect } from "react";
("../../assets/home/css/sectionimg.css");
import "bootstrap/dist/css/bootstrap.min.css";
import Baluran from "../../assets/home/img/baluran.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Section1 = () => {
  return (
    <section className="section" id="next-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4" data-aos="fade-up">
            <p
              className="img-fluid"
              style={{ backgroundImage: `url(${Baluran})` }}
            ></p>
          </div>
          <div className="col-lg-6 pl-lg-5" data-aos="fade-up">
            <h2 className="mb-4">Welcome To TravelVerse</h2>
            <p>
              TravelVerse menghadirkan pengalaman wisata virtual pertama di
              Banyuwangi. Melalui teknologi VR, Anda bisa mengunjungi Kawah
              Ijen, Pantai Pulau Merah, hingga Desa Adat Osing secara imersif
              tanpa harus keluar rumah.
            </p>
            <p className="pt-4">
              <a
                href="https://youtu.be/wGumANS-uXI?si=vRjSNVbgHGSjwoNR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-play d-flex"
              >
                <span className="icon align-self-center mr-3">
                  <span className="fa fa-play"></span>
                </span>
                <span className="text align-self-center">Tonton Video</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
