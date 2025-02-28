<script setup>
import bossesData from "@/bosses.json"
import Boss from "@/components/Boss.vue"
import { ref, onMounted } from "vue";
import axios from "axios";
const bosses = ref([]);
onMounted(async()=>{
    try {
        const response = await axios.get('http://localhost:3000/bosses');
        bosses.value = response.data;
    } catch (error) {
        console.error('you dumb dumb');
    }
})
</script>
<template>
    <div class="grid grid-cols-3 gap-5 bg-gray-100">
        <Boss v-for="boss in bosses" :key="boss.id" :boss="boss">
        </Boss>
    </div>
</template>