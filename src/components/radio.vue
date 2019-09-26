<template>
    <section>
       <van-radio-group v-model="radio" @change="onChange">
				 <van-radio :name="item" v-for="(item,index) in list" :key="index">{{item}}</van-radio>
			</van-radio-group>
    </section>
</template>
<script>
export default {
    data() {
        return {
					  
						popup:false, 
						radio:'',
            list: []
        };
    },
    props: ["initValue","columns"],
    watch: {
        columns(news, old) {
            if (news) {
                this.list = news;
            }
				},
				initValue(news, old){
					if (news) {
                this.radio = news;
            }
				}
    },
    mounted() {
				this.list = this.columns;
				this.radio = this.initValue;
    },
    methods: {
			//触发选中事件
			onChange(value){
					this.$emit("confirm",value);
			}
    }
};
</script>





