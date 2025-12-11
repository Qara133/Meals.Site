import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';

import Home from '../Views/Home.vue';
import MealsByIngredient from '../Views/MealsByIngredient.vue';
import MealsByName from '../Views/MealsByName.vue';
import MealDetails from '../Views/MealDetails.vue';
import Ingredients from '../Views/Ingredients.vue';
import Favorites from '../Views/Favorites.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails
      },
      {
        path: '/favorites',
        name: 'favorites',
        component: Favorites,   
      },
    ]
  },
  {
    path: '/guest',
    component: GuestLayout
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
