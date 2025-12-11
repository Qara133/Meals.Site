<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold
           text-white bg-red-600 border border-red-700 shadow-md
           hover:bg-red-700 hover:shadow-lg active:scale-95 transition-all"
  >
    <!-- YouTube Icon -->
    <svg
      class="w-6 h-6"
      viewBox="0 0 26 26"
      fill="currentColor"
    >
      <path
        d="M23.5 6.2s-.2-1.7-.9-2.4c-.8-.9-1.7-.9-2.1-1C16.8 2.4 12 2.4 12 2.4h-.1s-4.8 0-8.5.4c-.4.1-1.3.1-2.1 1-.7.8-.9 2.4-.9 2.4S0 8.1 0 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.7.9 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.3.4 7.3.4s4.8 0 8.5-.4c.4-.1 1.3-.1 2.1-1 .7-.8.9-2.4.9-2.4s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.6 14.6V8.5l5.8 3-5.8 3.1z"
      />
    </svg>

    <slot>YouTube</slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
})
</script>
