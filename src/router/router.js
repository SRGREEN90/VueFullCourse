import MainPage from "@/pages/MainPage";
import {createRouter, createWebHistory} from "vue-router";
import UserPage from "@/pages/UserPage";
import About from "@/pages/About";

const routes = [
    {
      path: '/',
        component: MainPage
    },
    {
        path: '/users',
        component: UserPage
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router