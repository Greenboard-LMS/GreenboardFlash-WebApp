import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "/",
      component: () => import("../views/StudyPlanView.vue"),
    },
    {
      path: "/study-plan",
      name: "study-plan",
      component: () => import("../views/StudyPlanView.vue"),
    },
    {
      path: "/flashcards",
      name: "flashcards",
      component: () => import("../views/CardsetListView.vue"),
    },
    {
      path: "/explore",
      name: "explore",
      component: () => import("../views/ExploreView.vue"),
    }
  ],
});

export default router;
