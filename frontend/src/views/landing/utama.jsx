// src/views/landing/homepage.js
import React from "react";
import Kepala from "../../components/landing/kepala"; // Mengimpor Header
import Header from "../../components/landing/header";

function Utama() {
  return (
    <div>
      <Header />
      <Kepala /> {/* Menampilkan komponen Header */}
      <main>
        <div>
          <p>hello world</p>
        </div>
      </main>
    </div>
  );
}

export default Utama;
