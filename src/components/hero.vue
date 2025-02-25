<script setup>
import { defineProps } from 'vue';
defineProps({
    subTitle: {
        type: String,
        default: 'Become Elden Lord (or not)',
    }
})
</script>
<template>
     <section class="bg-black py-20 mb-4">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div class="text-center">
          <h1
            class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            Elden Ring todo list
          </h1>
          <p class="my-4 text-xl text-white">
            {{ subTitle }}
        </p>
        </div>
      </div>
    </section>
</template>