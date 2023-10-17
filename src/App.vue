<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import WebFooter from './components/WebFooter.vue'

import { mapState } from 'pinia'
import { cartStore } from './stores/counter';

console.log(import.meta.env.VITE_APP_URL);

export default {
  components: {
    RouterLink, RouterView, HelloWorld, WebFooter
  },
  computed: {
    ...mapState(cartStore, ['productList'])
  },
  mounted() {
    // 取得 localStorage 有無暫存列表
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart != null) {
      // 1. 宣告
      const cartStoreFunc = cartStore();
      // 2. 直接呼叫 pinia 函式，並帶參數
      cartStoreFunc.setProductList(storedCart);
    }
  }
}
</script>
<template>
  <!-- 導覽列 -->
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container">
      <RouterLink to="/home"><span class="navbar-brand text-white">吃迷 CHIC MI</span></RouterLink>
      <!-- <a class="navbar-brand text-white" href="#">吃迷 CHIC MI</a> -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/about"><span class="text-white me-3">品牌故事</span></RouterLink>
          <RouterLink to="/products"><span class="text-white me-3">線上點餐</span></RouterLink>
          <RouterLink to="/contact"><span class="text-white me-3">聯絡我們</span></RouterLink>
          <RouterLink to="/cart"><span class="text-white"><i class="bi bi-cart-fill"></i>
              <span>
                {{ productList.length }}
              </span>
            </span></RouterLink>
        </div>
      </div>
    </div>
  </nav>

  <RouterView style="padding-top: 46px;" />

  <WebFooter />
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  box-shadow: 0px 2px 2px #0000004f;
}
</style>