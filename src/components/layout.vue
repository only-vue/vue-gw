<template>
  <div id="layout" class="main">
     <div class="content">
       <component :is="currentView" ></component>
     </div>
     <Footer v-on:childByValue="clickTab" />
  </div>
</template>
<script>
import Index from '../view/index/index';//首页
import MyPatient from "../view/myPatient/index"; //我的患者
import Cooperate from "../view/cooperate/index"; //医生合作
import User from "../view/user/index"; //我的
import Footer from './footer';//引入底部组件
export default {
  data () {
    return {
      currentView: 'index',
    }
  },
  components: {
    Footer,
    Index,
    MyPatient,
    Cooperate,
    User
  },
  methods:{
    clickTab(value){
      this.currentView=value;
    }
  }
}
</script>
<style scoped lang='less'>
   .main{
     background: #fff;
     width: 375px;
     margin: 0 auto;
   }
   .content{
     height: -webkit-calc(100% - 7px);
   }
</style>
