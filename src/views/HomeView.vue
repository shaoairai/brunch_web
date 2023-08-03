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
  <div class="content position-relative">
    <!-- banner 背景 -->
    <section class="banner-outer">
      <div class="banner-bg w-100" :style="{backgroundImage: 'url(' + imgUrl + ')'}"></div>
        <div class="banner position-absolute top-0 left-0 w-100" style="height: calc(100vh - 66px)">
          <div class="banner-text row g-0 w-100 align-items-center container my-0 mx-auto">
            <div class="col-6 text-white d-flex flex-column">
              <h2 class="fs-1">吃迷 CHIC MI</h2>
              <h3 class="fs-4">The Best Brunch Ever</h3>
            </div>
          </div>
        </div>
    </section>
    <!-- 關於 -->
    <section class="py-5">
      <div class="container">
        <div class="row py-5 flex-column flex-md-row">
          <div class="col d-flex flex-column justify-content-center">
            <h3 class="text-start pb-3">關於吃迷 | About Us</h3>
            <div>
              <p>在這個繁忙的都市中，我們為您打造一個舒適的用餐環境，讓您在忙碌的生活中找到一片寧靜的角落，享受美味的餐點。</p>
              <p>店內的設計簡潔而舒適，木質的家具和溫暖的燈光營造出輕鬆愉悅的氛圍。無論是與親朋好友相聚，或是獨自一人享受悠閒時光，這裡都是您放鬆心情的絕佳場所。</p>
              <p>來「吃迷」，讓我們為您打造一段美好的用餐時光，讓您愉悅的享受每一口美食的滋味！</p>
            </div>
          </div>
          <div class="col d-flex justify-content-center align-items-center">
            <img src="../assets/img/room.jpg" alt="室內環境" class="room rounded-circle">
          </div>
        </div>
      </div>
    </section>
    <!-- 過場 -->
    <section>
      <div class="sloganArea position-relative">
        <div class="sloganBg"></div>
        <h3 class="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-white fs-2">癡迷美食，享受無比的舌尖饗宴！</h3>
      </div>
    </section>
    <!-- 精選熱銷 -->
    <section class="py-5 container">
      <h3 class="text-start py-5 text-center">精選熱銷 | Featured</h3>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100 border-0">
            <img src="/src/assets/img/beef.jpg" class="rounded-3" alt="...">
            <div class="d-flex justify-content-between pt-2">
              <h5>香煎鮭魚燉蔬菜</h5>
              <div>NT$359</div>
            </div>
            <div class="row d-flex flex-column flex-md-row g-0">
              <div class="col col-md-6 pe-0 pe-md-1">
                <button type="button" class="btn btn-primary w-100">查看內容</button>
              </div>
              <div class="col col-md-6 ps-0 ps-md-1 pt-1 pt-md-0">
                <button type="button" class="btn btn-primary w-100 px-1">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src="/src/assets/img/beef.jpg" class="rounded-3" alt="...">
            <div class="d-flex justify-content-between pt-2">
              <h5>香煎鮭魚燉蔬菜</h5>
              <div>NT$359</div>
            </div>
            <div class="row d-flex flex-column flex-md-row g-0">
              <div class="col col-md-6 pe-0 pe-md-1">
                <button type="button" class="btn btn-primary w-100">查看內容</button>
              </div>
              <div class="col col-md-6 ps-0 ps-md-1 pt-1 pt-md-0">
                <button type="button" class="btn btn-primary w-100 px-1">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src="/src/assets/img/beef.jpg" class="rounded-3" alt="...">
            <div class="d-flex justify-content-between pt-2">
              <h5>香煎鮭魚燉蔬菜</h5>
              <div>NT$359</div>
            </div>
            <div class="row d-flex flex-column flex-md-row g-0">
              <div class="col col-md-6 pe-0 pe-md-1">
                <button type="button" class="btn btn-primary w-100">查看內容</button>
              </div>
              <div class="col col-md-6 ps-0 ps-md-1 pt-1 pt-md-0">
                <button type="button" class="btn btn-primary w-100 px-1">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src="/src/assets/img/beef.jpg" class="rounded-3" alt="...">
            <div class="d-flex justify-content-between pt-2">
              <h5>香煎鮭魚燉蔬菜</h5>
              <div>NT$359</div>
            </div>
            <div class="row d-flex flex-column flex-md-row g-0">
              <div class="col col-md-6 pe-0 pe-md-1">
                <button type="button" class="btn btn-primary w-100">查看內容</button>
              </div>
              <div class="col col-md-6 ps-0 ps-md-1 pt-1 pt-md-0">
                <button type="button" class="btn btn-primary w-100 px-1">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src="/src/assets/img/beef.jpg" class="rounded-3" alt="...">
            <div class="d-flex justify-content-between pt-2">
              <h5>香煎鮭魚燉蔬菜</h5>
              <div>NT$359</div>
            </div>
            <div class="row d-flex flex-column flex-md-row g-0">
              <div class="col col-md-6 pe-0 pe-md-1">
                <button type="button" class="btn btn-primary w-100">查看內容</button>
              </div>
              <div class="col col-md-6 ps-0 ps-md-1 pt-1 pt-md-0">
                <button type="button" class="btn btn-primary w-100 px-1">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src="/src/assets/img/beef.jpg" class="rounded-3" alt="...">
            <div class="d-flex justify-content-between pt-2">
              <h5>香煎鮭魚燉蔬菜</h5>
              <div>NT$359</div>
            </div>
            <div class="row d-flex flex-column flex-md-row g-0">
              <div class="col col-md-6 pe-0 pe-md-1">
                <button type="button" class="btn btn-primary w-100">查看內容</button>
              </div>
              <div class="col col-md-6 ps-0 ps-md-1 pt-1 pt-md-0">
                <button type="button" class="btn btn-primary w-100 px-1">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .content{
    width: 100%;
  }
  .banner-bg{
    height: calc(100vh - 66px);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transform: rotate(180deg);
  }
  .banner-text{
    height: calc(100vh - 66px);
  }
  .room{
    object-fit: cover;
    width: 420px;
    height: 420px;
  }
  .sloganBg{
    height: 200px;
    background-image: url('/src/assets/img/sloganbg.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    filter: brightness(0.2);
  }
</style>