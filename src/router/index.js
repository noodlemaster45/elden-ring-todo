import { createRouter, createWebHistory } from "vue-router";
import homeView from "@/view/home.vue";
import AddView from "@/view/AddView.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/bosses',
            name: 'bosses',
            component: homeView
        },
        {
            path: '/dungeons',
            name: 'dungeons',
            component: homeView
        },
        {
            path: '/add',
            name: 'add',
            component: AddView
        }
    ]
})
export default router