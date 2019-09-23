<template>
  <div class="home">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in items" :key="index">
           <div class="box-sidle">
               <div class="icon"><img v-lazy="item.icon" /></div>
               <div class="title">{{item.title}}</div>
               <div class="house">{{item.area}} ㎡ <span>{{item.shape}} </span></div>
               <div class="price">¥ {{item.minPrice}} - {{item.maxPrice}} 元 </div>
           </div>
        </swiper-slide>   
      </swiper>
  </div>
</template>

<script>
import Vue from 'vue';
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { Lazyload } from 'vant';
Vue.use(Lazyload); //加入懒加载
export default {
  name: "home",
  data() {
    return {
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        speed:500,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 10,
          depth: 60,
          modifier: 1,
          slideShadows: true
        },
        pagination:{
         paginationHide:true
        },
        loop: false
      },
      items:[
         {
           icon:require('../assets/images/house/pic1.jpg'), 
           title:'美栖公寓·深圳后亭店',
           area:'80',
           shape:'三室两厅一卫',
           minPrice:'300',
           maxPrice:'2000'
         },
         {
           icon:require('../assets/images/house/pic1.jpg'), 
           title:'美栖公寓·深圳后亭店',
           area:'80',
           shape:'三室两厅一卫',
           minPrice:'300',
           maxPrice:'2000'
         },
         {
           icon:require('../assets/images/house/pic1.jpg'),  
           title:'美栖公寓·深圳后亭店',
           area:'80',
           shape:'三室两厅一卫',
           minPrice:'300',
           maxPrice:'2000'
         },
         {
           icon:require('../assets/images/house/pic1.jpg'),  
           title:'美栖公寓·深圳后亭店',
           area:'80',
           shape:'三室两厅一卫',
           minPrice:'300',
           maxPrice:'2000'
         }
      ]
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
       swiper() {
        return this.$refs.mySwiper.swiper;
       }
  },
  mounted() {
    this.swiper.slideTo(1);
  }
};
</script>

<style scoped lang='less'>
.box-sidle{
    width: 100%;
    height: 100%;
    display: inline-block;
    padding: 10px 10px 0 10px;
    box-sizing: border-box;
    .title{

      display: flex;
      height: 36px;
      align-items: center;
    }
    .house{
      font-size:12px;
      color: #848484;
    }
    .price{
      display: flex;
      height: 30px;
      align-items: center;
      color: #A93131;
    }
    
  }

.box-sidle .icon img{
   width: 100%;
}
.swiper-inner {
  width: 100%;
  height: 230px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  height: 180px;
  width: 286px;
  box-shadow:0 3px 15px 0 rgba(49,169,158,0.18);
  border-radius:6px;
  margin-top: 30px; 
  .box-sidle{
    .icon{
      width: 260px;
      height: 80px;
      img{
        width: 100%;
        height: 80px;
      }
    }
    .title{
      font-size: 14px;
    }
    .price{
      font-size: 14px;
    }
    
  } 
}
.swiper-slide-active{
  background: #fff;
  height: 230px;
  margin-top: 0;
  .box-sidle{
    .icon{
      width: 260px;
      height: 130px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .title{
      font-size: 16px;
    }
    .price{
      font-size: 16px;
    }
    
  }
  
}

</style>