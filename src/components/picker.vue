<template>
  <section>
    <van-picker
      :show-toolbar="true"
      :columns="list"
      @cancel="onCancel"
      @confirm="onConfirm"
    />
  </section>
</template>
<script>
export default {
  data() {
    return {
      list:[]
    };
  },
  props: ["showPicker", "columns","keyValue"],
  watch: {
    columns(news, old) {
      if (news) {
        this.list = news;
      }
    }
  },
  mounted(){
     this.list = this.columns;
  },
  methods: {
    //确认时间
     onConfirm(value) {
       this.$emit('confirmPicker',this.showPicker,this.keyValue,value);
     },
     onCancel(){
       this.$emit('cancelPicker',this.showPicker);
     }
  }
};
</script>





