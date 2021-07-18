import { createRouter, createWebHistory } from "vue-router";
import Search from "../views/Search.vue";
import Result from "../views/Result.vue";

const routes = [
  {
    path: "/",
    name: "Buscar",
    component: Search,
  },
  {
    path: "/resultado",
    name: "Resultado",
    component: Result,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
