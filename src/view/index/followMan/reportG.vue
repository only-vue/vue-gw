<template>
  <div class="main report top">
    <Header title="高血压随访" />
   
  </div>
</template>

<script>
import Header from "../../../components/header"; //首页
export default {
  components: {
    Header
  },
  data() {
    return {
      list: [
        {
          icon: require("../../../assets/images/user/admin.jpg"),
          name: "雷付民",
          sex: "男",
          age: "38",
          idCard: "132124195407082125",
          filesId: "20190522072622",
          address: "邱县古城乡巴旦村辖组"
        },
        {
          icon: require("../../../assets/images/user/admin2.jpg"),
          name: "聂少梅",
          sex: "女",
          age: "27",
          idCard: "132124195407082125",
          filesId: "20190522072622",
          address: "邱县古城乡巴旦村辖组"
        },
        {
          icon: require("../../../assets/images/user/admin3.jpg"),
          name: "刘秀兰",
          sex: "女",
          age: "32",
          idCard: "132124195407082125",
          filesId: "20190522072622",
          address: "邱县古城乡巴旦村辖组"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang='less'>
@import "../../../assets/css/app/followMan/index.less";
</style>
