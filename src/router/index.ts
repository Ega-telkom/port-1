import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Project from "../views/Project.vue";
import NotFound from "../views/NotFound.vue";
import { i18n } from "../i18n";

const routes: RouteRecordRaw[] = [
  {
    path: "/:locale(en|id)?",
    name: "home",
    meta: { title: 'home.title' },
    component: Home,
  },
  {
    path: "/:locale(en|id)?/project",
    name: "project",
    meta: { title: 'project.title' },
    component: Project,
  },
  {
    path: "/:locale(en|id)?/:pathMatch(.*)*",
    name: "not-found",
    meta: { title: '404.title' },
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
  const { t } = i18n.global
  document.title = `Ega—${t(to.meta.title as string)}`
})

export default router;
