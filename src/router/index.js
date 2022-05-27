import Vue from "vue";
import VueRouter from "vue-router";
// import Login from "../views/login.vue"

Vue.use(VueRouter);

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
 
const routes = [
  // 登录页面
  { path: "/", component: () => import("../views/login.vue") },
  // layOut页面
  {
    path: "/layOut",
    name: "layOut",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/layOut.vue"),
      children:[{
        path: "/marketing",  name: "marketing",component: () => import("../views/marketing/index.vue")
      },
      {
        path: "/income",  name: "income",component: () => import("../views/reportForms/income.vue")
      },
      {
        path: "/chain",  name: "chain",component: () => import("../views/reportForms/chain.vue")
      },
      {
        path: "/particulars",  name: "particulars",component: () => import("../views/reportForms/particulars.vue")
      },
      {
        path: "/userControl",  name: "userControl",component: () => import("../views/userControl/userControl.vue")
      },
      {
        path: "/role",  name: "role",component: () => import("../views/role/role.vue")
      },
    ]
  },
  // 404页面
  {
    // 会匹配所有路径
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "about" */ "../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
