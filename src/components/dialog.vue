<template>
  <section>
       <van-dialog
            v-model="newShow"
            :title="title?title:'提示'"
						show-cancel-button
						:class="className&&className"
            :show-confirm-button="true"
						:beforeClose="beforeClose"
        >
            <slot name="main"></slot>  
        </van-dialog>
  </section>
</template>
<script>
  export default {
    data() {
        return {
            newShow: this.show
        };
    },
		props: ["title","show","className"],
		watch:{
      show(news,old){
				if(news){
					this.newShow=news;
				}
			},
			
		},
    mounted() {
       
		},
		methods:{
				//关闭弹窗调用
			beforeClose(action, done){
				if(action==='confirm'){
					this.$emit('handleConfirm');
				}else{
          this.$emit('handleCancel');
				}
				done();
			}
		}
}
</script>
<style scoped lang='less'>
  .close{
     width: 34px;
     height: 34px;
     display: flex;
     align-items: center;
     justify-content: center;
     .van-icon{
        font-size: 18px;
        color: rgba(0,0,0,0.3)
     }
  }

</style>



