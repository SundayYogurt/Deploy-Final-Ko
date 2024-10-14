import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/user/HomeView.vue";
import About from "@/views/user/About.vue";
import login from "@/views/user/Login.vue";
import Signup from "@/views/user/Signup.vue";
import Chat from '@/views/user/Chat.vue'; // ใช้ @ สำหรับระบุเส้นทางเริ่มต้น src
import Profile from "@/views/user/Profile.vue";
import Contact from "@/views/user/Contact.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});

export default router;
