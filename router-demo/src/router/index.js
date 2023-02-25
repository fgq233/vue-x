// src/router/index.js 就是当前项目的路由模块
import Vue from "vue";
import VueRouter from "vue-router";

// 导入需要的组件
import Home from "@/components/Home.vue";
import Movie from "@/components/Movie.vue";
import About from "@/components/About.vue";

import Tab1 from "@/components/tabs/Tab1.vue";
import Tab2 from "@/components/tabs/Tab2.vue";

import Login from "@/components/Login.vue";
import Main from "@/components/Main.vue";

// 把 VueRouter 安装为 Vue 项目的插件
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/movie/:mid", component: Movie, props: true },
  {
    path: "/about",
    component: About,
    children: [
      { path: "", component: Tab1 },
      { path: "tab1", component: Tab1 },
      { path: "tab2", component: Tab2 },
    ],
  },
  { path: "/login", component: Login },
  { path: "/main", component: Main },
];

// 创建路由的实例对象
const router = new VueRouter({
  mode: "history",
  routes,
});

//全局前置守卫
router.beforeEach(function(to, from, next) {
  if (to.path === "/main") {
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
