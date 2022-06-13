import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "/",
      component: () => import("../views/StudyPlansView.vue"),
    },
    {
      path: "/study-plans",
      name: "study-plans",
      component: () => import("../views/StudyPlansView.vue"),
    },
    {
      path: "/study-plan-wizard",
      name: "study-plan-wizard",
      component: () => import("../views/StudyPlanWizardView.vue"),
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
