<template>
  <div class="p-8 pb-0">
    <input 
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray200 w-full mb-5"
      placeholder="Search for meals"
      @input="searchMeals"
    >
  </div>

  <Meals v-if="!keyword && randomMeals.length" :meals="randomMeals" />

  <div v-else-if="keyword && !meals.length" class="text-center text-gray-600 p-4">
    No meals found. Please try a different keyword.
  </div>

  <Meals v-else :meals="meals" />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../store";
import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient.js";

const keyword = ref("");

const meals = computed(() => store.state.searchedMeals);
const randomMeals = ref([]);

async function loadRandomMeals() {
  for (let i = 0; i < 6; i++) {
    const { data } = await axiosClient.get("random.php");
    randomMeals.value.push(data.meals[0]);
  }
}

function searchMeals() {
  if (keyword.value.trim()) {
    store.dispatch("searchMeals", keyword.value.trim());
  } else {
    store.commit("setSearchedMeals", []); 
  } 
}

onMounted(() => {
  loadRandomMeals(); // Random meals
});
</script>
