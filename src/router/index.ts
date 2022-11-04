import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location: any) {
  return originalPush.call(this, location).catch((err: any) => err)
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/demo/index.vue"),
    redirect: "/core/chart"
  },
  {
    path: "/core",
    name: "layout",
    component: () => import("../layout/index.vue"),
    children: [
      {
        path: "chart",
        component: () => import("../views/chart/index.vue"),
        meta: {
          title: "我的可视化",
        },
      },
      {
        path: "data",
        component: () => import("../views/data/index.vue"),
        meta: {
          title: "数据源管理",
        },
      },
      {
        path: "dict",
        component: () => import("../views/dict/index.vue"),
        meta: {
          title: "字典管理",
        },
      },
      {
        path: "category",
        component: () => import("../views/category/index.vue"),
        meta: {
          title: "分类管理",
        },
      },
      {
        path: "market",
        component: () => import("../views/market/index.vue"),
        meta: {
          title: "案例市场",
        },
      },
    ],
  },
  {
    path: "/editor/:id",
    name: "editor",
    component: () => import("../views/editor/index.vue"),
  },
]

const router = new VueRouter({
  routes
});

export default router
