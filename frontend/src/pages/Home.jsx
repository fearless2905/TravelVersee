// src/pages/Home.jsx
import React from "react";
import Header from "../components/home/Header";
import Sectionimg from "../components/home/Sectionimg";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/section2";
import SectionSlider from "../components/home/SectionSlider";
// import Section1 from "../components/home/Section1";
// import Konten from "../components/home/Konten";
const Home = () => {
  return (
    <div>
      <Header />
      {/* <Sectionimg /> */}
      <Section1 />
      <Section2 />
      <SectionSlider />
      {/* <Konten />
      <Section1 /> */}
    </div>
  );
};

export default Home;
