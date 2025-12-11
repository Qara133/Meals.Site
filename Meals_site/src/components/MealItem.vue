<template>
  <div
    class="bg-white shadow rounded-xl hover:scale-105 transition-all"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>

    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        {{ $filters.truncateWords(meal.strInstructions, 20) }}
      </p>

      <div class="flex items-center justify-between gap-2">

        <YouTubeButton :href="meal.strYoutube" />

        <button
          type="button"
          class="px-3 py-2 rounded-xl border transition flex items-center gap-1 text-sm"
          :class="isFavorite 
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300' 
            : 'border-pink-300 text-pink-600 bg-pink-50 hover:bg-pink-500 hover:text-white'"
          :disabled="isFavorite"
          @click.stop="addToFavorites"
        >
          <span>❤️</span>
          <span class="hidden sm:inline">
            {{ isFavorite ? 'Added' : 'Favorite' }}
          </span>
        </button> 
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import YouTubeButton from './YouTubeButton.vue'

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
})

const isFavorite = ref(false)

onMounted(() => {
  const stored = localStorage.getItem('favorites')
  if (stored) {
    try {
      const favorites = JSON.parse(stored)
      isFavorite.value = favorites.some((m) => m.idMeal === meal.idMeal)
    } catch (e) {
      isFavorite.value = false
    }
  }
})

const addToFavorites = () => {
  if (isFavorite.value) return 

  const stored = localStorage.getItem('favorites')
  let favorites = stored ? JSON.parse(stored) : []

  favorites.push(meal)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  isFavorite.value = true 
}
</script>
