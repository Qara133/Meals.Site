<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>

    <img :src="meal.strMealThumb" :alt="meal.strMeal" max-w-100 />

    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong> {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
      </div>
    </div>

    <div class="my-4">{{ meal.strInstructions }}</div>

    <div class="grid grid-cols-1 sm:grid-cols-2 text-lg py-2">
      <div>
        <h2 class="text-2xl mb-3 text-semibold">Ingredients</h2>
        <ul>
          <template v-for="(ingredient, index) in Array.from({ length: 20 })" :key="'ing-' + index">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div>
        <h2 class="text-2xl mb-3 text-semibold">Measures</h2>
        <ul>
          <template v-for="(ingredient, index) in Array.from({ length: 20 })" :key="'meas-' + index">
            <li v-if="meal[`strMeasure${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div class="my-6 flex items-center gap-3">
        <YoutubeButton :href="meal.strYoutube">
          YouTube
        </YoutubeButton>

        <button
          type="button"
          class="px-4 py-3 rounded-xl border flex items-center gap-2 transition-colors"
          :class="isFavorite
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300'
            : 'border-pink-400 text-pink-600 bg-pink-50 hover:bg-pink-500 hover:text-white'"
          :disabled="isFavorite"
          @click="addToFavorites"
        >
          ❤️
          <span class="hidden sm:inline">
            {{ isFavorite ? 'Added' : 'Favorite' }}
          </span>
        </button>
      </div>
      <button>
              <a
                  :href="meal.strSource"
                  target="_blank"
                  class="inline-flex items-center justify-center
                        px-6 py-4 rounded-xl font-medium text-white
                        bg-yellow-500 hover:bg-yellow-600
                        shadow-sm hover:shadow-md transition-all duration-300
                        w-auto max-w-max"
              >
                  View Source
            </a>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';

const route = useRoute();
const router = useRouter();

const meal = ref({});
const isFavorite = ref(false);

const updateIsFavorite = () => {
  const stored = localStorage.getItem('favorites');
  if (!stored || !meal.value.idMeal) {
    isFavorite.value = false;
    return;
  }

  try {
    const favorites = JSON.parse(stored) || [];
    isFavorite.value = favorites.some((m) => m.idMeal === meal.value.idMeal);
  } catch (e) {
    isFavorite.value = false;
  }
};

onMounted(() => {
  axiosClient
    .get(`lookup.php?i=${route.params.id}`)
    .then((response) => {
      const data = response.data;
      meal.value = data.meals?.[0] || {};
      updateIsFavorite(); 
    })
    .catch((error) => {
      console.error('Error fetching meal data:', error);
    });
});

const addToFavorites = () => {
  if (!meal.value || !meal.value.idMeal || isFavorite.value) return;

  const stored = localStorage.getItem('favorites');
  let favorites = [];

  if (stored) {
    try {
      favorites = JSON.parse(stored) || [];
    } catch (e) {
      favorites = [];
    }
  }

  const exists = favorites.some((m) => m.idMeal === meal.value.idMeal);
  if (!exists) {
    favorites.push(meal.value);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  isFavorite.value = true;         
  //router.push({ name: 'favorites' });
};
</script>
