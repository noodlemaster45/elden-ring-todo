<script setup>
import card from "@/components/Card.vue"
import { defineProps, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
const route = useRoute();
const props = defineProps({
    boss: Object
});   
const scrollY = ref(0);
const setBeaten = async (boss) =>{
try {
    boss.beaten = true;
    await axios.patch(`http://localhost:3000${route.path}/${boss.id}`,boss),{
        headers: { "Content-Type": "application/json" }
    };
    nextTick(() => window.scrollTo(0, scrollY.value));
    console.log('enemy felled')
} catch (error) {
    console.error('error');
}
}
</script>
<template>
    <card :bg = "boss.beaten ?   'bg-green-100': boss.mandatory?'bg-red-100':'bg-yellow-100'">
        <h2 class="text-2xl font-bold">{{ boss.name }}</h2>
        <p class="mt-2 mb-4">
            {{ boss.location }}
        </p>
        <a v-if="!boss.beaten" v-on:click.prevent="setBeaten(boss)" class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 button">
            Felled
        </a>
    </card>
</template>