<script setup>
import { ref, onMounted } from "vue"
import Meals from "../components/Meals.vue"

const meals = ref([])

onMounted(() => {
  const stored = localStorage.getItem("favorites")
  if (stored) {
    try {
      meals.value = JSON.parse(stored)
    } catch (e) {
      console.error("Cannot parse favorites from localStorage", e)
      meals.value = []
    }
  }
})

const clearFavorites = () => {
  localStorage.removeItem("favorites")
  meals.value = []
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-8">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
          <span>❤️ Favorites</span>
        </h1>
        <p class="text-gray-500 mt-1 text-sm">
          Sevdiyin yeməkləri buradan tez tapa bilərsən.
        </p>
      </div>

      <button
        v-if="meals.length"
        @click="clearFavorites"
        class="px-4 py-2 rounded-xl text-sm font-semibold border border-red-300
               text-red-600 hover:bg-red-50 transition"
      >
        Favoriləri təmizlə
      </button>
    </div>

    <!-- Empty state -->
    <div
      v-if="!meals.length"
      class="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-8 text-center"
    >
      <p class="text-lg font-semibold text-gray-700 mb-2">
        Hələ favorit yeməyin yoxdur. 😅
      </p>
      <p class="text-gray-500 mb-4 text-sm">
        Bəyəndiyin yeməkləri favoritə at, sonra buradan asanlıqla tap.
      </p>

      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
               bg-orange-500 text-white hover:bg-orange-600 transition"
      >
        🔎 Yemək axtar
      </router-link>
    </div>

    <!-- Favorites list -->
    <div v-else>
      <Meals :meals="meals" />
    </div>
  </div>
</template>
