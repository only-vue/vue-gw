<template>
    <section>
        <van-field
            readonly
            clickable
            :value="initValue"
            :placeholder="placeholder"
            @click="openPopup"
        />
        <van-popup v-model="popup" position="bottom">
            <van-datetime-picker
                v-model="time"
                type="date"
                @cancel="onCancel"
                @confirm="onConfirmDate"
            />
        </van-popup>
    </section>
</template>
<script>
export default {
    data() {
        return {
            time: new Date(),
            popup: false
        };
    },
    props: ["initValue", "placeholder"],
    watch: {
        initValue(news, old) {
            if (news) {
                this.time = new Date(news);
            }
        }
    },
    mounted() {
        this.time = new Date(this.initValue);
    },
    methods: {
        //弹出弹出框
        openPopup() {
            this.popup = true;
        },
        //确认
        onConfirmDate(value) {
            this.popup = false;
            this.$emit("confirm",this.FmtDate(value, "date")
            );
        },
        //取消
        onCancel() {
            this.popup = false;
        }
    }
};
</script>




