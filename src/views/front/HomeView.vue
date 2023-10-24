<script>
import banner from "/img/banner.jpg";
import axios from "axios";
import { mapActions, mapState } from "pinia";
import { cartStore } from "../../stores/counter";
import { RouterLink } from "vue-router";
import { login } from "../../utils/token/getToken";

export default {
  data() {
    return {
      token: "",
      text: "首頁",
      imgUrl: banner,
    };
  },
  methods: {
    // 取得產品列表
    getProducts() {
      const conf = {
        method: "GET",
        url: `${import.meta.env.VITE_APP_URL}v2/api/${import.meta.env.VITE_APP_PATH
          }/admin/products/all`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${this.token}`,
        },
      };
      axios(conf)
        .then((res) => {
          console.log(res);
          // 存放所有產品
          const saveData = cartStore();
          saveData.saveProducts(res.data.products);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },

    // 存到 pinia
    // 加入購物車
    ...mapActions(cartStore, ['addToCart']),

    // 是否有此產品在購物車了
    hasProduct(id) {
      let bool = false;
      this.productList.forEach((item) => {
        if (item.id === id) {
          console.warn(id)
          bool = true;
        }
      });
      return bool;
    }
  },
  computed: {
    ...mapState(cartStore, ['productList', "products"]),
  },
  components: {
    RouterLink
  },
  async mounted() {

    // 從 cookie 取出 token
    const tokenCookie = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("token="));
    const token = tokenCookie ? tokenCookie.split("=")[1] : null;

    if (!token) {
      // 登入
      await login();
    }

    // 沒 token 就踢出去
    if (!token) {
      this.$router.push("/");
    } else {
      this.token = token;
    }

    this.getProducts();
  },
};
</script>

<template>
  <div class="content position-relative">
    <!-- banner 背景 -->
    <section class="banner-outer">
      <div class="banner-bg w-100" :style="{ backgroundImage: 'url(' + imgUrl + ')' }"></div>
      <div class="banner position-absolute top-0 left-0 w-100">
        <div class="banner-text row g-0 w-100 align-items-center container my-0 mx-auto">
          <div class="col-12 px-3 col-md-6 px-md-0 text-white d-flex flex-column">
            <h2 class="fs-1">吃迷 CHIC MI</h2>
            <h3 class="fs-4">The Best Brunch Ever</h3>
          </div>
        </div>
      </div>
    </section>
    <!-- 關於 -->
    <section>
      <div class="py-5">
        <div class="container">
          <div class="row py-5 flex-column flex-md-row">
            <div class="col d-flex flex-column justify-content-center">
              <h3 class="text-start pb-3">關於吃迷 | About Us</h3>
              <div>
                <p>
                  在這個繁忙的都市中，我們為您打造一個舒適的用餐環境，讓您在忙碌的生活中找到一片寧靜的角落，享受美味的餐點。
                </p>
                <p>
                  店內的設計簡潔而舒適，木質的家具和溫暖的燈光營造出輕鬆愉悅的氛圍。無論是與親朋好友相聚，或是獨自一人享受悠閒時光，這裡都是您放鬆心情的絕佳場所。
                </p>
                <p>
                  來「吃迷」，讓我們為您打造一段美好的用餐時光，讓您愉悅的享受每一口美食的滋味！
                </p>
              </div>
            </div>
            <div class="col d-flex justify-content-center align-items-center">
              <div class="room position-relative rounded-circle w-100 overflow-hidden">
                <img src="/src/assets/img/room.jpg" alt="室內環境" class="position-absolute top-0 start-0 w-100 h-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 過場 -->
    <section>
      <div class="sloganArea position-relative">
        <div class="sloganBg"></div>
        <div class="w-100 h-100 text-center">
          <h3 class="position-absolute translate-middle top-50 start-50 text-white fs-2">
            <span class="lh-base" style="white-space: nowrap;">癡迷美食，</span>
            <span class="lh-base" style="white-space: nowrap;">享受無比的舌尖饗宴！</span>
          </h3>
        </div>
      </div>
    </section>
    <!-- 精選熱銷 -->
    <section>
      <div class="py-5 container">
        <h3 class="text-start py-5 text-center">精選熱銷 | Featured</h3>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <template v-for="(item, key, index) in products" :key="item.id">
            <div class="col" v-if="index > 0 && index < 7">
              <div class="card h-100 border-0">
                <img :src="item.imageUrl" class="rounded-3" alt="..." style="height: 300px; object-fit: cover;" />
                <div class="d-flex justify-content-between pt-2">
                  <h5>{{ item.title }}</h5>
                  <div>NT${{ item.price }}</div>
                </div>
                <div class="row d-flex flex-column flex-md-row g-0">
                  <div class="col col-md-6 pe-0 pe-md-1">
                    <RouterLink :to="'/product/' + item.id">
                      <button type="button" class="btn btn-primary w-100">
                        查看內容
                      </button>
                    </RouterLink>
                  </div>
                  <div class="col col-md-6 ps-0 ps-md-1 pt-1 pt-md-0">
                    <template v-if="hasProduct(item.id)">
                      <button type="button" class="btn btn-secondary w-100 px-1" disabled>已在購物車</button>
                    </template>
                    <template v-else>
                      <button type="button" class="btn btn-primary w-100 px-1" @click="addToCart(item)">加入購物車</button>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
    <!-- 地點 -->
    <section>
      <div class="row g-0">
        <div class="col-12 col-md-8" style="height: 450px">
          <iframe class="w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.449189215327!2d121.60666607507892!3d23.97991017992707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34689fc13b9d5f11%3A0x6eb61ff6cedce033!2zOTcw6Iqx6JOu57ij6Iqx6JOu5biC5LiJ5rCR6KGXNTLomZ8!5e0!3m2!1szh-TW!2stw!4v1691218917951!5m2!1szh-TW!2stw"
            style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="col-12 col-md-4 px-3 py-5 py-md-0 d-flex justify-content-center align-items-center bg-primary">
          <div class="d-flex flex-column text-white">
            <div class="pb-1">
              <i class="bi bi-geo-alt-fill pe-2"></i>地址：970花蓮縣花蓮市三民街52號
            </div>
            <div class="pb-1">
              <i class="bi bi-calendar-week-fill pe-2"></i>營業時間：11:00~20:00(週一公休)
            </div>
            <div class="pb-1">
              <i class="bi bi-telephone-fill pe-2"></i>聯絡電話：(03)831-1131
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
}

.banner-bg {
  height: calc(100vh - 66px);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.banner,
.banner-text {
  height: calc(100vh - 66px);
}


/* 正圓遮罩 */
.circle-mask {
  width: 100%;
  padding-top: 100%;
  background: black;
  border-radius: 100%;
}

.room {
  padding-top: 100%;

  img {
    object-fit: cover;
  }
}

.sloganBg {
  height: 200px;
  background-image: url("/src/assets/img/sloganbg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  filter: brightness(0.2);
}

@media screen and (max-width: 768px) {

  .banner,
  .banner-text,
  .banner-bg {
    height: calc(50vh - 66px);
  }
}
</style>