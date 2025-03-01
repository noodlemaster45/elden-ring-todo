import { createRouter, createWebHistory } from "vue-router";
import homeView from "@/view/home.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'bosses',
            component: homeView
        }
    ]
})
export default router