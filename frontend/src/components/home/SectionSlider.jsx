// src/components/SectionSlider.jsx
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";

import AOS from "aos";
import "../../assets/home/css/sectionslider.css";

// Import gambar dari src/assets/home/img
import img1 from "../../assets/home/img/banyuwangi1.jpg";
import img2 from "../../assets/home/img/kerbau.jpg";
import img3 from "../../assets/home/img/pantai.jpg";
import img4 from "../../assets/home/img/patung.jpg";
import img5 from "../../assets/home/img/pulaumerah.jpg";
import img6 from "../../assets/home/img/baluran.jpg";
const SectionSlider = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="section slider-section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8">
            <h2 className="heading" data-aos="fade-up">
              Perjalanan Virtual yang Imersif
            </h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">
              Jelajahi keindahan kota Banyuwangi tanpa harus meninggalkan rumah.
              TravelVerse menghadirkan pengalaman VR 360° yang realistis tentang
              warisan budaya, keajaiban alam, dan cita rasa lokal dalam satu
              platform interaktif. Temukan, rasakan, dan terhubung dengan
              Banyuwangi yang belum pernah ada sebelumnya.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              className="custom-swiper"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="slider-item">
                    <img
                      src={img}
                      alt={`Slide ${idx + 1}`}
                      className="img-fluid"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSlider;
