<template>
  <div class="main">
    <div class="head-top">
      <div class="user">
        <div class="icon">
          <img src="../../assets/images/user/admin.jpg" />
        </div>
        <div class="content">
          <p>
            <span class="name">秦时明</span> 皋外医院
          </p>
          <p>
            患者总量：023456
            <span class="today">今日患者 +24</span>
          </p>
        </div>
      </div>
    </div>
    <div class="head-banner">
      <van-swipe @change="onChange" :autoplay="3000">
        <van-swipe-item v-for="(banner,index) in banners" :key="index">
          <img :src="banner.icon" />
        </van-swipe-item>
        <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{banners.length}}</div>
      </van-swipe>
    </div>
    <div class="head-menu">
      <router-link :to="menu.link" class="item" v-for="(menu,index) in menus" :key="index" @click.native="bindClick(menu.link)">
        <img :src="menu.icon" />
        <p>{{menu.name}}</p>
      </router-link>
    </div>
    <div class="head-app">
      <router-link :to="app.link" class="item" v-for="(app,index) in apps" :key="index" @click.native="bindClick(app.link)">
        <img :src="app.icon" />
        <p>{{app.name}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      banners: [
        {
          icon: require("../../assets/images/bannner/b1.jpg")
        },
        {
          icon: require("../../assets/images/bannner/b2.jpg")
        }
      ],
      menus: [
        {
          icon: require("../../assets/images/icon/i1.png"),
          name: "图文咨询",
          link: "#"
        },
        {
          icon: require("../../assets/images/icon/i2.png"),
          name: "电话咨询",
          link: "#"
        },
        {
          icon: require("../../assets/images/icon/i3.png"),
          name: "视频咨询",
          link: "#"
        },
        {
          icon: require("../../assets/images/icon/i4.png"),
          name: "患者管理",
          link: "#"
        },
        {
          icon: require("../../assets/images/icon/i5.png"),
          name: "解读报告",
          link: "#"
        }
      ],
      apps: [
        {
          icon: require("../../assets/images/icon/m1.png"),
          name: "档案管理",
          link: "#"
        },
        {
          icon: require("../../assets/images/icon/m2.png"),
          name: "体检管理",
          link: "#"
        },
        {
          icon: require("../../assets/images/icon/m3.png"),
          name: "高血压随访",
          link: "/followMan/index?followType=G"
        },
        {
          icon: require("../../assets/images/icon/m3.png"),
          name: "糖尿病随访",
          link: "/followMan/index?followType=T"
        },
        {
          icon: require("../../assets/images/icon/m3.png"),
          name: "肺结核随访",
          link: "/followMan/index?followType=F"
        },
        {
          icon: require("../../assets/images/icon/m3.png"),
          name: "精神病随访",
          link: "/followMan/index?followType=J"
        },
        {
          icon: require("../../assets/images/icon/m4.png"),
          name: "查询统计",
          link: "#"
        },
        {
          icon: require("../../assets/images/icon/m5.png"),
          name: "提醒管理",
          link: "#"
        }
      ]
    };
  },
  mounted() {
  },
  methods: {
    //banner 滑动切换
    onChange(index) {
      this.current = index;
    },

    //功能暂未开放
    bindClick(value){
      if(value==='#'){
       this.Toast('功能暂未开放！');
      }
      
    }
  }
};
</script>

<style scoped lang='less'>
@import "../../assets/css/app/index.less";
</style>
