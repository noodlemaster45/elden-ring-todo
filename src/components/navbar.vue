<script setup>
import logo from "@/assets/eldenRing.jpg"
import { RouterLink, useRoute } from "vue-router";

const isActive = (path) =>{
const route = useRoute();
return route.path === path;
}
</script>

<template>
  <nav class="bg-black border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <a class="flex flex-shrink-0 items-center mr-4" href="index.html">
            <img class="h-10 w-auto" v-bind:src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Elden Ring todo list</span>
          </a>
          <div class="md:ml-auto">
            <div class="flex space-x-2 ">
              <RouterLink to="/bosses"
                :class="[isActive('/bosses')? 'bg-green-900' : 'hover:bg-gray-900' ,'text-white' , 'hover:text-white', 'rounded-md px-3', 'py-2']">Bosses</RouterLink>
              <RouterLink to="/dungeons"
              :class="[isActive('/dungeons')? 'bg-green-900' : 'hover:bg-gray-900' ,'text-white' , 'hover:text-white', 'rounded-md px-3', 'py-2']">Dungeons</RouterLink>

            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>