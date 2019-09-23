// 引入界面路由
import followMan from "../view/index/followMan/index.vue"; //随访管理
import reportG from "../view/index/followMan/reportG.vue"; //高血压报告

let routes = [
  {
    path:"/followMan/index", //登录
    component: followMan
  },
  {
    path:"/followMan/reportG", //高血压报告
    component: reportG
  }
];

export default {
  routes
};
