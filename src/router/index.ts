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
    redirect: "/editor/data_source"
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
    path: "/editor",
    name: "editor",
    component: () => import("../views/editor/data_model.vue"),
    children:[
      {
        path: "data_source",
        component: () => import("../views/editor/data_source.vue"),
        meta: {
          title: "数据源",
        },
      },
      {
        path: "data_model",
        component: () => import("../views/editor/data_model.vue"),
        meta: {
          title: "数据模型",
        },
      },
      {
        path: "data_calculate",
        component: () => import("../views/editor/data_calculate.vue"),
        meta: {
          title: "计算模型",
        },
      },
      {
        path: "app_model",
        component: () => import("../views/editor/app_model.vue"),
        meta: {
          title: "应用模型",
        },
      }
    ]
  },
]

const router = new VueRouter({
  routes
});

export default router
