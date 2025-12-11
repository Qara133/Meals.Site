<template>
  <Navbar />

  <main class="min-h-screen">
    <router-view></router-view>
  </main>

  <Footer />
</template>

<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
</script>
