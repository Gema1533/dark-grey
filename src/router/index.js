import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "allSection",
    component: () => import("../views/AllSection.vue")
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
