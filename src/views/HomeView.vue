<script>
  export default{
    data(){
      return{
        text:"首頁",
        imgUrl:'/src/assets/img/banner.jpg'
      }
    }
  }
</script>

<template>
  <div class="content">
    <div class="banner">
      <img :src="imgUrl" alt="首頁圖片" class="w-100" :style="{backgroundImage: 'url(' + imgUrl + ')'}">
    </div>
  </div>
</template>

<style scoped>
  .content{
    width: 100%;
  }
  .banner{
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transform: rotate(180deg);
  }
</style>