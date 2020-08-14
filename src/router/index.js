import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "todos",
    component: () => import("../views/todos"),
  },
  {
    path: "/addtodo",
    name: "addtodo",
    component: () => import("../views/addtodo"),
  },
  {
    path: "/item/:id",
    name: "item",
    component: () => import("../views/item"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
