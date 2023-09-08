<script>
import { RouterLink } from 'vue-router';
  export default{
    data(){
      return{
        text:"Products頁"
      }
    },
    components:{
      RouterLink
    },
    mounted(){
      console.log("#router",this.$route.params.id)
    }
  }
</script>

<template>
  <section> 
    <!-- 菜單 -->
      <div class="py-5 container">
        <div class="row">
          <div class="col-6">
            <div class="w-100 h-100 border-0">
              <div class="position-relative w-100 overflow-hidden rounded-3" style="padding-top: 100%;">
                <img src="/src/assets/img/beef.jpg" class="position-absolute top-0 start-0 w-100 h-100" style="object-fit: cover;" alt="...">
              </div>
            </div>
          </div>
          <div class="col-6">
            <h5>香煎鮭魚燉蔬菜</h5>
            <div class="section-line border-primary"></div>
            <div class="pt-2">內含：鮭魚、青江菜、紅蘿蔔</div>
            <div class="pt-2 fs-5">NT$359</div>
            <button type="button" class="btn btn-primary w-100 px-1 mt-3">加入購物車</button>
          </div>
        </div>
      </div>
    </section>
</template>

<style lang="scss" scoped>
  @import "@/assets/all.scss";
  .section-line{
    width: 10%;
    border-bottom: 2px solid $gray-300;
  }
</style>