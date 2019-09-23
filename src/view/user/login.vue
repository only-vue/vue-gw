<template>
  <div class="main" ontouchstart="" onmouseover="">
      <div class="header">
          <div class="logo">
             <li class="icon"><img src="../../assets/images/icon/mark.png" /></li>
             <li class="name">智慧公卫</li>
          </div>
        
      </div>
      <div class="welcome">
         <p class="name">您好</p>
         <p class="tips">欢迎来到智慧公卫</p>
      </div>
      <div class="content">
          <div class="item">
             <span :class="states==1?'move-enter':''"></span>
             <input type="number"  @mousedown="getMousedown(1)" @mouseout="getMouseout()"  placeholder="请输入您的账号" />
          </div> 
          <div class="item">
             <li class="info">
               <span :class="states==2?'move-enter':''"></span>
               <input type="password" @mousedown="getMousedown(2)" @mouseout="getMouseout()"  placeholder="请输入您的密码" />
             </li> 
          </div>  
      </div>
      <div class="fromBtn" @click="handleSubmit">
         登录
      </div>
      <div class="login">
        <div  class="title">
           账号和密码登录
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
       states:false, //表单触发状态
       show: true, //当前倒计时状态
       count: '', 
       timer: null, 
       number:60, //倒计时时间
    }
  },
  methods:{
    getBack(){
      this.$router.go(-1);
    },
    handleSubmit(){
      this.$router.push('/layout');
    },
    getMousedown(index){
      this.states=index;
    },
    getMouseout(){
      this.states=false;
    },
    inputFunc(){
    },
    getCode(){ //倒计时
      this.bindCode(this.number,this.show,this.count,this.timer);
    }
  }
}
</script>

<style scoped lang='less'>
  .header{
     height: 50px;
     padding: 0 15px;
     .logo{
       float: left;
       height: 100%;
        display: flex;
         flex-flow: row nowrap;
       li{
          height: 100%;
          display: flex;
          align-items: center;
       }
       .icon{
          width: 40px;
          img{
            width: 27px;
            height: 20px;
          }
       }
       .name{
          width: 100px;
          font-size: 18px;
       }
     }
     .back{
       float: right;
       height: 100%;
       display: flex;
       align-items: center;
       img{
         width:16px;
         height:16px;
       }
     }

  }
  .welcome{
    margin: 84px 24px 0;
    .name{
      font-size: 32px;
    }
    .tips{
      font-size: 16px;
      color: #B5B5B5;
      margin: 5px 0 0 0;
    }
  }
  .content{
    margin: 30px 24px 0;
    .item{
      height: 50px;
      display: flex;
      align-items: center;
      position: relative;
      margin-bottom: 15px;
      border-bottom: 1px solid #f5f5f5;
        .move-enter{
          position: absolute;
          animation: move 1s ease;
          width:100%;
          height: 100%;
          display: block;
          bottom:-1px;
          border-bottom: 1px solid #5BBEF5;
        }
        
        li{
          height: 100%;
          display: flex;
          align-items: center;
        }
        .info{
          width: calc(100% - 100px);
        }
        .btn{
          width: 100px;
          font-size: 16px;
          color: #5BBEF5;
          justify-content: flex-end;
        }
    }
    input{
      width: 100%;
      height: 100%;
      font-size: 14px;
      border: none;
      background: none;
      height: 100%;
    }
    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {  
      font-size:16px; 
    }

  }
  .fromBtn{
    margin: 90px auto 0;
  }
  .login{
    display: flex;
    height: 30px;
    align-items: center;
  
    justify-content: center;
    margin: 20px 0 0 0;
    font-size: 14px;
    .title{
       color: #848484;
    } 

  }
  @keyframes move{
    0%{
      left: 50%;
      width: 0%;   
    }
    100%{
      left: 0;
      width: 100%;
    }
  }
</style>
