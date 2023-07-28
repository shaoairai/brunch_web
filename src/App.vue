<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

console.log(import.meta.env.VITE_APP_URL);

export default{
  components:{
    RouterLink, RouterView, HelloWorld
  }
}
</script>
<template>
  <!-- 導覽列 -->
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container">
      <RouterLink to="/"><span class="navbar-brand text-white">吃迷 CHIC MI</span></RouterLink>
      <!-- <a class="navbar-brand text-white" href="#">吃迷 CHIC MI</a> -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/about"><span class="text-white me-3">品牌故事</span></RouterLink>
          <RouterLink to="/products"><span class="text-white me-3">菜單介紹</span></RouterLink>
          <RouterLink to="/contact"><span class="text-white">聯絡我們</span></RouterLink>
        </div>
      </div>
    </div>
  </nav>

  <router-view />

  <!-- 底部列 -->
  <footer class="w-100 py-3 text-center text-bg-secondary text-light">
    <div>© 2023 Copyright: Brunch</div>
  </footer>
</template>
