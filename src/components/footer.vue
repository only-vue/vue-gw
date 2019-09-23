<template>
   <div class="footer">
        <div class="content">
            <div :class="['item',keyIndex == index ? 'on' : '']" v-for='(item,index) in items' :key='index' @click="getTab(index)">
               <p class="icon"><img :src="keyIndex == index?item.selIcon : item.icon" /></p>
               <p class="name">{{item.name}}</p> 
            </div>
        </div>
      
     </div>
</template>
 
<script>
export default {
  data() {
    return {
      keyIndex:0,
      link:['Index','MyPatient','Cooperate','User'],
      items:[
        {
          icon:require('../assets/images/icon/nav1.png'),
          selIcon:require('../assets/images/icon/nav1_on.png'),
          name:'工作站',

        },
        {
          icon:require('../assets/images/icon/nav2.png'),
          selIcon:require('../assets/images/icon/nav2_on.png'),
          name:'我的患者'
        },
        
        {
          icon:require('../assets/images/icon/nav3.png'),
          selIcon:require('../assets/images/icon/nav3_on.png'),
          name:'医生合作'
        },
        {
          icon:require('../assets/images/icon/nav4.png'),
          selIcon:require('../assets/images/icon/nav4_on.png'),
          name:'我的'
        }
      ]
    }
  },
  mounted(){
  },
  methods:{
		//触发父级选择tab
    getTab(key){
     this.keyIndex=key;
     this.$emit('childByValue', this.link[key])
    }
  }
}
</script>
 
<style scoped lang='less'>
  .footer{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 48px;
      background:#f5f5f5;
      background-size:100% 100%; 
			z-index: 99;
			border-top: solid 1px #ddd;
      .content{
        height: 100%;
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        .item{
           display: flex;
           flex-flow: column;
           width: 25%;
           height: 100%;
           justify-content: center;
           align-items: center;
           .name{
             color: #999;
             font-size: 10px;
           }
           .icon{
             width: 22px;
             height: 22px;

           }
        }
        .on{
          .name{
           color: #5BBEF5;
          }
         
        }
      }
      .lock{
        position: absolute;
        left: 50%;
        margin: 0 0 0 -24px;
        width: 46px;
        height: 100%;
        display: flex;
        flex-flow: column;
        
        .icon{
          width: 46px;
          height: 46px;
          margin: 8px 0 0 0;
        }
        .name{
            color: #BAC6C5;
            font-size: 10px;
            display: flex;
            justify-content: center;
        }
      }
      img{
        width: 100%;
        height: 100%;
      }
  }


</style>