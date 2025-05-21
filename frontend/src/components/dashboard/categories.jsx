import React, { useEffect } from "react";

const Categories = () => {
  return (
    <section class="px-6 py-10">
      <div class="glass rounded-3xl p-8 max-w-6xl mx-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold">Categories</h2>
          <button class="text-white border border-white px-4 py-1 rounded hover:bg-black hover:border-black transition">
            View All
          </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="images/food.png"
              class="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div class="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/40 to-transparent">
              <h3 class="text-md font-bold">Food</h3>
              <p class="text-xs text-white/70">Delicious local cuisine</p>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="images/patung.jpg"
              class="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div class="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/40 to-transparent">
              <h3 class="text-md font-bold">Cultural</h3>
              <p class="text-xs text-white/70">Rich cultural heritage</p>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="images/pantai.jpg"
              class="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div class="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/40 to-transparent">
              <h3 class="text-md font-bold">Beach</h3>
              <p class="text-xs text-white/70">Beautiful sandy beaches</p>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="images/hutan.jpg"
              class="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div class="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/40 to-transparent">
              <h3 class="text-md font-bold">Forest</h3>
              <p class="text-xs text-white/70">Lush green forests</p>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="images/vr.png"
              class="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div class="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/40 to-transparent">
              <h3 class="text-md font-bold">Virtual Tours</h3>
              <p class="text-xs text-white/70">Explore remotely</p>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="images/trust.png"
              class="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div class="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/40 to-transparent">
              <h3 class="text-md font-bold">Trusted Guides</h3>
              <p class="text-xs text-white/70">Experienced and reliable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Categories;
