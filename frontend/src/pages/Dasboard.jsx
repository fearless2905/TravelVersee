import React, { useEffect } from "react";
import "../assets/dashboard/css/style.css";
import IjenImage from "../assets/home/img/IjenBanyuwangi.jpg";
import Section from "../components/dashboard/section";
import Map from "../components/dashboard/map";
import Categories from "../components/dashboard/categories";

const Dashboard = () => {
  useEffect(() => {
    const allToursLink = document.getElementById("all-tours-link");
    const backToFeatured = document.getElementById("back-to-featured");

    if (allToursLink) {
      allToursLink.addEventListener("click", function (event) {
        event.preventDefault();
        document
          .getElementById("featured-destinations-section")
          .classList.add("hidden");
        document.getElementById("all-tours-section").classList.remove("hidden");

        fetch("alltour.html")
          .then((response) => response.text())
          .then((data) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");
            const allToursGrid = doc.querySelector("section.grid");
            const allToursContent =
              document.getElementById("all-tours-content");
            allToursContent.innerHTML = "";
            if (allToursGrid) {
              allToursContent.appendChild(allToursGrid);
            }
          });
      });
    }

    if (backToFeatured) {
      backToFeatured.addEventListener("click", function () {
        document
          .getElementById("featured-destinations-section")
          .classList.remove("hidden");
        document.getElementById("all-tours-section").classList.add("hidden");
        document.getElementById("all-tours-content").innerHTML = "";
      });
    }
  }, []);
  return (
    <div
      className="bg-cover bg-center min-h-screen text-white"
      style={{ backgroundImage: `url(${IjenImage})` }}
    >
      <div className="min-h-screen bg-black bg-opacity-50 flex flex-col">
        <header className="w-full py-6 px-4 md:px-10 flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <a
              href="index.html"
              className="text-2xl font-bold tracking-wide text-white"
            >
              TravelVerse
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <a
              id="all-tours-link"
              href="alltour.html"
              className="hover:underline text-sm text-white"
            >
              All Tours
            </a>
            <a
              href="locations.html"
              className="hover:underline text-sm text-white"
            >
              Locations
            </a>
            <a
              href="/landing/categories.html"
              className="hover:underline text-sm text-white"
            >
              Categories
            </a>
            <button className="hover:rotate-90 transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 4a6 6 0 100 12A6 6 0 0010 4z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7a1 1 0 112 0v3a1 1 0 11-2 0v-3zM9 7a1 1 0 112 0 1 1 0 01-2 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </header>
        <Section />
        <Map />
        <Categories />
      </div>
    </div>
  );
};
export default Dashboard;
