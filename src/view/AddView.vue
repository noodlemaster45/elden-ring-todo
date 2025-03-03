<script setup>
import axios from 'axios';
import { reactive } from 'vue';
const form = reactive({
    type: "bosses",
    name: '',
    location:'',
    mandatory: 'true'
})
const addItem = async () =>{
    const newItem = {
        type: form.type,
        name: form.name,
        location: form.location,
        mandatory: form.mandatory
    }
    try {
        const response = await axios.post(`http://localhost:3000/${form.type}`,newItem)
        console.log('added')
    } catch (error) {
        console.log(error)
    }
}
</script>
<template>
    <section class="bg-green-50">
        <div class="container m-auto max-w-2xl py-24">
            <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                <form @submit.prevent="addItem">
                    <h2 class="text-3xl text-center font-semibold mb-6">Add Items</h2>

                    <div class="mb-4">
                        <label for="type" class="block text-gray-700 font-bold mb-2">Type</label>
                        <select v-model="form.type" id="type" name="type" class="border rounded w-full py-2 px-3" required>
                            <option value="bosses">Boss</option>
                            <option value="dungeons">Dungeon</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2">Name</label>
                        <input v-model="form.name" type="text" id="name" name="name" class="border rounded w-full py-2 px-3 mb-2"
                             required />
                    </div>

                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2">Location</label>
                        <input v-model="form.location" type="text" id="location" name="location" class="border rounded w-full py-2 px-3 mb-2"
                             required />
                    </div>
                    <div class="mb-4">
                        <label for="type" class="block text-gray-700 font-bold mb-2">Mandatory?</label>
                        <select v-model="form.mandatory" id="mandatory" name="mandatory" class="border rounded w-full py-2 px-3" required>
                            <option value="true">Yes, beat this to progress</option>
                            <option value="false">No, ignore it if you can</option>
                        </select>
                    </div>


                    <div>
                        <button
                            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                            type="submit">
                            Add Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>