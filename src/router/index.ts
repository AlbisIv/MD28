import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/people",
      name: "people",
      component: () => import("../views/PeopleView.vue"),
    },
    {
      path: "/films",
      name: "films",
      component: () => import("../views/FilmView.vue"),
    },
    {
      path: "/planets",
      name: "planets",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PlanetsView.vue"),
    },
    {
      path: "/planets/:id",
      name: "planet",
      props: true,
      component: () => import("../views/PlanetView.vue"),
    },
  ],
});

export default router;
