// src/components/SectionWelcome.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import { Fancybox } from "@fancyapps/ui";
import "aos/dist/aos.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/home/css/section1.css";
import Baluran from "../../assets/home/img/baluran.jpg";

const SectionWelcome = () => {
  useEffect(() => {
    AOS.init();
    Fancybox.bind("[data-fancybox]", {}); // Inisialisasi Fancybox

    return () => {
      Fancybox.destroy(); // Bersihkan saat komponen unmount
    };
  }, []);

  return (
    <section className="section" id="next-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4" data-aos="fade-up">
            <img src={Baluran} alt="Baluran" className="img-fluid" />
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
                data-fancybox
                className="btn-play d-flex align-items-center"
              >
                <span className="icon me-3">
                  <i className="fa fa-play"></i>
                </span>
                <span className="text">Tonton Video</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWelcome;
