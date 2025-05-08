import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Coba from "../views/landing/coba";
import Utama from "../views/landing/utama";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/coba" element={<Coba />} />
        <Route path="/utama" element={<Utama />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
