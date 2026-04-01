// 라우터 설정하기
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Members from "../pages/Members.vue";
import Videos from "../pages/Videos.vue";

// 라우터 객체 생성
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/members", name: "Members", component: Members },
    { path: "/videos", name: "Videos", component: Videos },
  ],
});

export default router;
