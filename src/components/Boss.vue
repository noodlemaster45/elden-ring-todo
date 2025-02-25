<script setup>
import card from "@/components/Card.vue"
import { defineProps } from "vue";
defineProps({
    boss: Object
});
</script>
<template>
    <card :bg = "boss.mandatory?'bg-red-100':'bg-yellow-100'">
        <h2 class="text-2xl font-bold">{{ boss.name }}</h2>
        <p class="mt-2 mb-4">
            {{ boss.location }}
        </p>
        <a href="" class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
            Felled
        </a>
    </card>
</template>