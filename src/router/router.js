// 引入界面路由
import followMan from "../view/index/followMan/index.vue"; //随访管理
import reportG from "../view/index/followMan/reportG.vue"; //高血压报告
import reportT from "../view/index/followMan/reportT.vue"; //糖尿病报告
import reportJ from "../view/index/followMan/reportJ.vue"; //精神病报告
import reportF from "../view/index/followMan/reportF.vue"; //肺结核报告

let routes = [
  {
    path:"/followMan/index", //登录
    component: followMan
  },
  {
    path:"/followMan/reportG", //高血压报告
    component: reportG
  },
  {
    path:"/followMan/reportT", //糖尿病报告
    component: reportT
  },
  {
    path:"/followMan/reportJ", //精神病报告
    component: reportJ
  },
  {
    path:"/followMan/reportF", //肺结核报告
    component: reportF
  }
];

export default {
  routes
};
