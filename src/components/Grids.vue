<script setup>
import itemsData from "@/items.json";
import { useRoute } from "vue-router";
import CardGrid from "@/components/CardGrid.vue"
import { ref, onMounted, watch } from "vue";
import axios from "axios";
const data = ref([]);
const route = useRoute();
const resetBeaten = async () => {
    try {
        const resetBosses = data.value.map(boss => ({ ...boss, beaten: false }));
        await Promise.all(resetBosses.map(boss =>
            axios.put(`http://localhost:3000${route.path}/${boss.id}`, boss)
        ));
        data.value = resetBosses;
    } catch (error) {
        console.error("Error resetting bosses:", error);
    }
}
const fetchData = async () => {
    try {

        const response = await axios.get(`http://localhost:3000${route.path}`, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });
        data.value = response.data;
    } catch (error) {
        console.error('you dumb dumb');
    }
}
onMounted(async () => {
    fetchData();
}
)
watch(() => route.path, () => {
    fetchData();
}, { immediate: true });
</script>
<template>
    <a v-on:click.prevent="resetBeaten(boss)"
        class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 button">
        Reset
    </a>
    <RouterLink to="/add"
        class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 button">
        Add
    </RouterLink>
    <div class="grid grid-cols-3 gap-5 bg-gray-100">
        <CardGrid v-for="item in data" :key="item.id" :item="item">
        </CardGrid>
    </div>
</template>