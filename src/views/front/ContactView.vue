<script>
  export default{
    data(){
      return{
        text:"Contact頁",
        titleBg:"https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
      }
    }
  }
</script>

<template>
  <div class="position-relative" style="height: 200px;">
    <div class="titleArea" :style="{'background-image':'url('+titleBg+')'}"></div>
    <div class="fs-2 text-white position-absolute translate-middle start-50 top-50">聯絡我們</div>
  </div>
  <div class="text">{{ text }}</div>
</template>

<style scoped>
  .text{
    color:purple;
  }
  .titleArea{
    height: 100%;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    filter: brightness(0.2);
  }
</style>