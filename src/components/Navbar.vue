<script setup>
import { ref } from "vue"

const open = ref(false)
</script>

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
      <router-link
        :to="{ name: 'home' }"
        class="text-2xl font-extrabold tracking-wide text-orange-600 hover:text-orange-700 transition"
      >
        🍽️ MealsApp
      </router-link>

      <nav class="hidden md:flex items-center gap-3">
        <router-link
          :to="{ name: 'byName' }"
          class="px-4 py-2 rounded-xl font-medium text-gray-700 hover:bg-orange-500 hover:text-white transition-all duration-300"
        >
          🔎 Search Meals
        </router-link>

        <router-link
          :to="{ name: 'ingredients' }"
          class="px-4 py-2 rounded-xl font-medium text-gray-700 hover:bg-green-500 hover:text-white transition-all duration-300"
        >
          🥗 Meals by Ingredients
        </router-link>

        <!-- Favorites (Desktop) -->
        <router-link
          :to="{ name: 'favorites' }"
          class="px-4 py-2 rounded-xl font-medium text-gray-700 hover:bg-pink-500 hover:text-white transition-all duration-300"
        >
          ❤️ Favorites
        </router-link>
      </nav>

      <button
        class="md:hidden p-2 rounded hover:bg-gray-100 transition"
        @click="open = !open"
      >
        <svg
          v-if="!open"
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <transition name="fade">
      <div
        v-if="open"
        class="md:hidden bg-white shadow-inner px-6 pb-4 space-y-2"
      >
        <router-link
          :to="{ name: 'byName' }"
          class="block px-4 py-3 rounded-lg font-medium text-gray-700 border border-orange-600 hover:bg-orange-500 hover:text-white transition-all"
          @click="open = false"
        >
          🔎 Search Meals
        </router-link>

        <router-link
          :to="{ name: 'ingredients' }"
          class="block px-4 py-3 rounded-lg font-medium text-gray-700 border border-green-600 hover:bg-green-500 hover:text-white transition-all"
          @click="open = false"
        >
          🥗 Meals by Ingredients
        </router-link>

        <!-- Favorites (Mobile) -->
        <router-link
          :to="{ name: 'favorites' }"
          class="block px-4 py-3 rounded-lg font-medium text-gray-700 border border-pink-600 hover:bg-pink-500 hover:text-white transition-all"
          @click="open = false"
        >
          ❤️ Favorites
        </router-link>
      </div>
    </transition>
  </header>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
