import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/home/css/section2.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Planet from "../../assets/home/img/planet.svg";
import Food from "../../assets/home/img/food.png";
import Vr from "../../assets/home/img/vr.png";
import Chatboot from "../../assets/home/img/chatbot.png";
import Booking from "../../assets/home/img/booking.png";
import Trust from "../../assets/home/img/trust.png";

const Section2 = () => {
  useEffect(() => {
    // Jika AOS digunakan, pastikan sudah di-import dan diinisialisasi
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);

  return (
    <section className="section bg-light-2">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8">
            <h2 className="heading" data-aos="fade-up">
              Rasakan Pengalaman Baru di Banyuwangi
            </h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">
              Tidak perlu menunggu liburan. Dengan TravelVerse, Anda dapat
              menjelajahi destinasi-destinasi di Banyuwangi secara 360° dan
              real-time. Rasakan atmosfer budaya, alam, dan petualangan yang
              mendalam — seperti berada di sana secara langsung.
            </p>
          </div>
        </div>

        <div className="row">
          {data.map((item, index) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={index}
            >
              <div className="d-block ftco-img-flaticon">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="img-fluid mb-4"
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const data = [
  {
    image: Food,
    alt: "Makanan Tradisional",
    title: "Makanan Tradisional",
    description:
      "Nikmati wisata interaktif ke tempat kuliner tradisional seperti Sego Tempong dan Pecel Pitik melalui pengalaman VR yang imersif.",
  },
  {
    image: Planet,
    alt: "Eksplorasi Alam & Budaya",
    title: "Eksplorasi Alam & Budaya",
    description:
      "Temukan Pantai Pulau Merah, Kawah Ijen, dan Taman Nasional Alas Purwo yang lengkap dengan suara alam asli dan cerita visual.",
  },
  {
    image: Vr,
    alt: "Pengalaman Imersif 360°",
    title: "Pengalaman Imersif 360°",
    description:
      "Kunjungi tempat-tempat ikonik di Banyuwangi dengan tour VR 360° dari pantai hingga pegunungan dan jelajahi seolah-olah Anda benar-benar ada di sana.",
  },
  {
    image: Chatboot,
    alt: "Asisten Perjalanan Cerdas (AI Chatbot)",
    title: "Asisten Perjalanan Cerdas (AI Chatbot)",
    description:
      "Dapatkan rekomendasi instan, kiat perjalanan, dan wawasan budaya melalui chatbot ramah AI kami yang tersedia 24/7 selama perjalanan virtual Anda.",
  },
  {
    image: Booking,
    alt: "Pemesanan Tur yang Mulus",
    title: "Pemesanan Tur yang Mulus",
    description:
      "Suka dengan apa yang Anda lihat? Segera pesan paket perjalanan dunia nyata dan tur berpemandu ke Banyuwangi langsung dari platform.",
  },
  {
    image: Trust,
    alt: "Mitra Tepercaya",
    title: "Mitra Tepercaya",
    description:
      "Kami berkolaborasi dengan para pemangku kepentingan pariwisata paling terkemuka di Banyuwangi [...]",
  },
];

export default Section2;
