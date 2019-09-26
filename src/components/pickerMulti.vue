<template>
    <section>
        <van-field readonly clickable :value="value" :placeholder="placeholder" @click="openPopup" />
        <van-popup v-model="popup" position="bottom">
            <div class="van-hairline--top-bottom van-picker__toolbar p-toolbar">
                <div class="van-picker__cancel" @click="onCancel">取消</div>
                <div class="van-picker__confirm" @click="onConfirm">确认</div>
            </div>
            <van-checkbox-group v-model="result" @change="onChange">
                <van-cell-group>
                    <van-cell
                        v-for="(item, index) in list"
                        clickable
                        :key="index"
                        :title="item.text"
                        @click="toggle(index)"
                    >
                        <van-checkbox :name="item.id" ref="checkboxes" slot="right-icon" />
                    </van-cell>
                </van-cell-group>
            </van-checkbox-group>
        </van-popup>
    </section>
</template>
<script>
export default {
    data() {
        return {
            popup: false,
            list: [],
            value:null,
            result: []
        };
    },
    props: ["initValue", "columns", "placeholder"],
    watch: {
        columns(news, old) {
            if (news) {
								this.list = news;
								
            }
        },
        initValue(news, old) {
            if (news) {
                this.result = news;
            }
        }
    },
    mounted() {
				this.list = this.columns;
				this.result=this.initValue;
				this.getResult();
    },
    methods: {
        //弹出弹出框
        openPopup() {
            this.popup = true;
        },
        //点击选中与取消效果
        toggle(index) {
            this.$refs.checkboxes[index].toggle();
        },
        //获取选择复选框值
        onChange(value) {
            this.result = value;
				},
				//重新赋值回显数据
				getResult(){
						let tempText = [];
						this.result.forEach(v => {
								this.list.forEach(k => {
										if (v == k.id) {
												tempText.push(k.text);
										}
								});
						});
						this.value = tempText.join(',');
				},
        //确认
        onConfirm(value) {
					  this.getResult();
            this.$emit("confirm", this.result);
            this.popup = false;
        },
        //取消
        onCancel() {
            this.popup = false;
        }
    }
};
</script>
<style scoped lang="less">
.van-popup {
    overflow: hidden;
}
.van-cell-group {
    padding: 10px 0;
    max-height: 250px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    .van-cell {
        padding: 10px 20px;
    }
}
</style>




