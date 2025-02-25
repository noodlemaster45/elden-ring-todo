<script setup>
import bossesData from "@/bosses.json"
import Boss from "@/components/Boss.vue"
import { ref } from "vue";
const bosses = ref(bossesData);
</script>
<template>
    <div class="grid grid-cols-3 gap-5 bg-gray-100">
        <Boss v-for="boss in bosses" :key="boss.id" :boss="boss">
        </Boss>
    </div>
</template>