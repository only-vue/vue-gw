<template>
  <section>
    <van-datetime-picker
      v-model="time"
      type="date"
      @cancel="onCancel"
      @confirm="onConfirmDate"
    />
  </section>
</template>
<script>
export default {
  data() {
    return {
      time: new Date()
    };
  },
  props: ["showPicker", "initValue","keyValue"],
  watch: {
    initValue(news, old) {
      if (news) {
        this.time = new Date(news);
      }
    }
  },
  mounted(){
     this.time = new Date(this.initValue);
  },
  methods: {
    //确认时间
     onConfirmDate(value) {
       this.$emit('confirmDate',this.showPicker,this.keyValue,this.FmtDate(value, "date"));
     },
     onCancel(){
       this.$emit('cancelDate',this.showPicker);
     }
  }
};
</script>




