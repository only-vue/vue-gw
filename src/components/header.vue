<template>
  <div id="header">
    <!-- header -->
    <header class="header">
      <a href="javascript:history.go(-1)" class="black"></a>
      <h1 class="title">{{title}}</h1>
			<slot name="main"></slot>
    </header>
  </div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {};
  }
};
</script>
<style scoped lang='less'>
.header {
  width: 100%;
  height: 48px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .title {
    font-size: 16px;
  }
  .black {
    position: absolute;
    width: 48px;
    height: 48px;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      content: "";
      border: solid black;
      border-width: 0 1px 1px 0;
      display: inline-block;
      padding: 5px;
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }
  }
}
</style>

