<template>
    <section>
        <van-field readonly clickable :value="value" :placeholder="placeholder" @click="openPopup" />
        <van-popup v-model="popup" position="bottom">
            <van-picker
                :show-toolbar="true"
                :columns="list"
                @cancel="onCancel"
                @confirm="onConfirm"
            />
        </van-popup>
    </section>
</template>
<script>
export default {
    data() {
        return {
            popup: false,
            list: [],
            value: ""
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
                this.initValue = news;
                this.showValue();
            }
        }
    },
    mounted() {
        this.list = this.columns;
				this.showValue();
    },
    methods: {
        //弹出弹出框
        openPopup() {
            this.popup = true;
        },
        showValue() {
            this.list.forEach(el => {
                if (el.id && el.text) {
                    if (el.id == this.initValue) {
                        this.value = el.text;
                    }
                } else {
                    this.value = this.initValue;
                }
            });
        },
        //确认
        onConfirm(value) {
            this.value = value.text ? value.text : value;
            this.$emit("confirm", value.id ? value.id : value);
            this.popup = false;
        },
        //取消
        onCancel() {
            this.popup = false;
        }
    }
};
</script>





