import React, { useEffect } from "react";

const Map = () => {
  return (
    <section class="px-6 py-10">
      <div class="glass rounded-3xl p-8 max-w-6xl mx-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold">Map Locations</h2>
          <button class="text-white border border-white px-4 py-1 rounded hover:bg-black hover:border-black transition">
            View All
          </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="images/img_4.jpg"
              class="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div class="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/40 to-transparent">
              <h3 class="text-md font-bold">Coastal Cliffside</h3>
              <p class="text-xs text-white/70">Banyuwangi</p>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="images/img_5.jpg"
              class="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div class="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/40 to-transparent">
              <h3 class="text-md font-bold">Hidden Waterfall</h3>
              <p class="text-xs text-white/70">Banyuwangi</p>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="images/img_6.jpg"
              class="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div class="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/40 to-transparent">
              <h3 class="text-md font-bold">Ancient Ruins</h3>
              <p class="text-xs text-white/70">Banyuwangi</p>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="images/img_7.jpg"
              class="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div class="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/40 to-transparent">
              <h3 class="text-md font-bold">Serene Riverbank</h3>
              <p class="text-xs text-white/70">Banyuwangi</p>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="images/img_8.jpg"
              class="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div class="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/40 to-transparent">
              <h3 class="text-md font-bold">Sunlit Meadow</h3>
              <p class="text-xs text-white/70">Banyuwangi</p>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="images/img_9.jpg"
              class="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div class="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/40 to-transparent">
              <h3 class="text-md font-bold">Rocky Outcrop</h3>
              <p class="text-xs text-white/70">Banyuwangi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Map;
