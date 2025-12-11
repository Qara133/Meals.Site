<template>
  <footer class="bg-gradient-to-br from-orange-50 to-white shadow-inner mt-14 border-t">

    <!-- Top Content -->
    <div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

      <!-- Brand -->
      <div class="col-span-1 md:col-span-1">
        <h2 class="text-3xl font-extrabold text-orange-600 mb-3 flex items-center gap-2">
          🍽️ MealsApp
        </h2>
        <p class="text-gray-600 text-sm leading-6">
          Discover new recipes, explore delicious food ideas and learn how to cook
          amazing meals from your own kitchen.
        </p>
      </div>

      <!-- Navigation -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>

        <ul class="space-y-2 text-gray-600">
          <li>
            <router-link to="{ name: 'home' }"
              class="hover:text-orange-600 transition">🏠 Home</router-link>
          </li>
          <li>
            <router-link to="{ name: 'byName' }"
              class="hover:text-orange-600 transition">🔎 Search Meals</router-link>
          </li>
          <li>
            <router-link to="{ name: 'ingredients' }"
              class="hover:text-orange-600 transition">🥗 Meals by Ingredients</router-link>
          </li>
        </ul>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>

        <ul class="space-y-2 text-gray-600">
          <li><a href="/by-name" class="hover:text-orange-600 transition">⭐ Popular Recipes</a></li>
          <li><a href="/ingredients" class="hover:text-orange-600 transition">📘 Cooking Tips</a></li>
          <li><a href="https://web.whatsapp.com" target="_blank" class="hover:text-orange-600 transition">📞 Contact Us</a></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Join Our Newsletter</h3>

        <p class="text-gray-600 text-sm mb-4">
          Get weekly recipes and cooking inspiration sent straight to your inbox.
        </p>

        <div class="flex items-center gap-2">
          <input
            type="email"
            placeholder="Your email"
            class="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <button
            class="px-4 py-2 rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition shadow-sm">
            Join
          </button>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t"></div>

    <!-- Bottom Bar -->
    <div class="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">

      <p>© {{ new Date().getFullYear() }} MealsApp — All rights reserved.</p>

      <div class="flex gap-4 text-2xl mt-3 md:mt-0">

        <a href="https://www.youtube.com" target="_blank"
           class="text-gray-600 hover:text-red-500 transition transform hover:scale-110">
          <i class="fab fa-youtube"></i>
        </a>

        <a href="https://www.facebook.com" target="_blank"
           class="text-gray-600 hover:text-blue-600 transition transform hover:scale-110">
          <i class="fab fa-facebook"></i>
        </a>

        <a href="https://www.instagram.com" target="_blank"
           class="text-gray-600 hover:text-pink-500 transition transform hover:scale-110">
          <i class="fab fa-instagram"></i>
        </a>

      </div>
    </div>
  </footer>
</template>

<style>
</style>
