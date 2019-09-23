
import Vue from "vue";
import VueRouter from "vue-router";
import Router from './router';

import layout from "../components/layout.vue"; //主架构
import index from "../view/index/index.vue"; //首页
import login from "../view/user/login.vue"; //登录
Vue.use(VueRouter);

const routes = [
  {
    path:"/layout", //主架构
    component: layout
  },
  {
    path:"/index", //首页
    component: index
  },
  {
    path:"/login", //登录
    component: login
  },
  {
    path: '/',   // 重定向
    redirect: '/layout'
	},
	...Router.routes
]

var router =  new VueRouter({
  routes
})
export default router;