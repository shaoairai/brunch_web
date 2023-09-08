import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/front/HomeView.vue";
import LoginView from "../views/login/LoginView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/front/AboutView.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/front/ProductsView.vue"),
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../views/front/ProductView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/front/CartView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/front/ContactView.vue"),
    },
  ],
});

export default router;
