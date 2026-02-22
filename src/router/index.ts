import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Project from "../views/Project.vue";
import NotFound from "../views/NotFound.vue";
import { i18n } from "../i18n";

const routes: RouteRecordRaw[] = [
  {
    path: "/:locale(en|id)?",
    name: "home",
    component: Home,
  },
  {
    path: "/:locale(en|id)?/project",
    name: "project",
    component: Project,
  },
  {
    path: "/:locale(en|id)?/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const locale = (to.params.locale as "en" | "id") || "en"
  i18n.global.locale.value = locale
})

export default router;
