import React, { useEffect } from "react";

const Section = () => {
  return (
    <div>
      <section class="flex-1 flex items-center justify-center px-6">
        <div class="max-w-4xl glass rounded-3xl p-8 text-center">
          <h1 class="text-3xl md:text-5xl font-bold mb-4">
            Explore Banyuwangi with TravelVerse
          </h1>
          <p class="text-sm md:text-lg text-white/80 mb-6">
            Discover breathtaking destinations, unique experiences, and
            unforgettable adventures tailored just for you.
          </p>
          <div class="flex justify-center gap-4">
            <a
              href="/landing/travelverse-dashboard.html"
              class="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              Start Now
            </a>
            <a
              href="#"
              class="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full transition-all"
            >
              View Detail
            </a>
          </div>
        </div>
      </section>

      <section class="px-6 py-10" id="featured-destinations-section">
        <div class="glass rounded-3xl p-8 max-w-6xl mx-auto">
          <h2 class="text-2xl font-semibold mb-6">Featured Destinations</h2>
          <div
            class="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
            id="featured-destinations-grid"
          >
            <div class="relative rounded-2xl overflow-hidden group">
              <img
                src="images/pantai.jpg"
                class="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/40 to-transparent">
                <h3 class="text-lg font-bold">Tropical Paradise Beach</h3>
                <p class="text-sm text-white/70">Banyuwangi, Indonesia</p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden group">
              <img
                src="images/kerbau..jpg"
                class="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/40 to-transparent">
                <h3 class="text-lg font-bold">Mountain Adventure Trails</h3>
                <p class="text-sm text-white/70">Banyuwangi</p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden group">
              <img
                src="images/patung.jpg"
                class="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/40 to-transparent">
                <h3 class="text-lg font-bold">Historic Cityscape</h3>
                <p class="text-sm text-white/70">Banyuwangi</p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden group">
              <img
                src="images/img_1.jpg"
                class="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/40 to-transparent">
                <h3 class="text-lg font-bold">Serene Lake View</h3>
                <p class="text-sm text-white/70">Banyuwangi</p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden group">
              <img
                src="images/img_2.jpg"
                class="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/40 to-transparent">
                <h3 class="text-lg font-bold">Lush Green Forest</h3>
                <p class="text-sm text-white/70">Banyuwangi</p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden group">
              <img
                src="images/img_3.jpg"
                class="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/40 to-transparent">
                <h3 class="text-lg font-bold">Sunset Over Hills</h3>
                <p class="text-sm text-white/70">Banyuwangi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="px-6 py-10 hidden" id="all-tours-section">
        <h2 class="text-2xl font-semibold mb-6">All Tours</h2>
        <div
          id="all-tours-content"
          class="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        ></div>
        <button
          id="back-to-featured"
          class="mt-6 px-4 py-2 bg-green-500 rounded text-white hover:bg-green-600"
        >
          Back to Featured Destinations
        </button>
      </section>
    </div>
  );
};
export default Section;
