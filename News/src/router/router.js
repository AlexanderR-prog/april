
import {createRouter, createWebHistory} from "vue-router";
import NewsPage from "@/pages/NewsPage";
import NewsIdPage from "@/pages/NewsIdPage";

const routes = [
    {
        path: '/',
        component: NewsPage
    },
    {
        path: '/:id',
        component: NewsIdPage
    }
] 

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;