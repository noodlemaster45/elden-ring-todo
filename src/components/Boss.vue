<script setup>
import card from "@/components/Card.vue"
import { defineProps, ref } from "vue";
const props = defineProps({
    boss: Object
});   
const bossData = ref({})
const setBeaten = () =>{
    bossData.beaten = props.boss;
}
</script>
<template>
    <card :bg = "boss.beaten ?   'bg-green-100': boss.mandatory?'bg-red-100':'bg-yellow-100'">
        <h2 class="text-2xl font-bold">{{ boss.name }}</h2>
        <p class="mt-2 mb-4">
            {{ boss.location }}
        </p>
        <a v-if="!boss.beaten" v-on:click="setBeaten" class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 button">
            Felled
        </a>
    </card>
</template>