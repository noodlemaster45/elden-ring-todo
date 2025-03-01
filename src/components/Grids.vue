<script setup>
import bossesData from "@/bosses.json";
import { useRoute } from "vue-router";
import Boss from "@/components/Boss.vue"
import { ref, onMounted } from "vue";
import axios from "axios";
const bosses = ref([]);
const route = useRoute();
const resetBeaten = async () => {
    try {
        const resetBosses = bosses.value.map(boss => ({ ...boss, beaten: false }));
        await Promise.all(resetBosses.map(boss =>
            axios.put(`http://localhost:3000${route.path}/${boss.id}`, boss)
        ));
        bosses.value = resetBosses;
        console.log("All bosses reset to unbeaten.");
    } catch (error) {
        console.error("Error resetting bosses:", error);
    }
}
onMounted(async () => {
    try {

        const response = await axios.get(`http://localhost:3000${route.path}`, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });
        bosses.value = response.data;
    } catch (error) {
        console.error('you dumb dumb');
    }
}
)
</script>
<template>
    <a v-on:click.prevent="resetBeaten(boss)"
        class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 button">
        Reset
    </a>
    <div class="grid grid-cols-3 gap-5 bg-gray-100">
        <Boss v-for="boss in bosses" :key="boss.id" :boss="boss">
        </Boss>
    </div>
</template>