<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';


export default {
  data() {
    return {
      token: "",
      // 所有產品
      products: {},
      // 分類
      categories: [],
      // 分類產品
      cateProducts: {}
    }
  },
  components: {
    RouterLink
  },
  methods: {
    // 取得產品列表
    getProducts() {
      const conf = {
        method: 'GET',
        url: `${import.meta.env.VITE_APP_URL}v2/api/${import.meta.env.VITE_APP_PATH}/admin/products/all`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${this.token}`,
        }
      }
      axios(conf).then((res) => {
        console.log(res);
        this.products = res.data.products;
        // 篩選狀態為全部
        this.cateProducts = res.data.products;
        console.log(this.products);
        this.getCategories();
      }).catch((err) => {
        console.log(err.response);
      })
    },
    // 取得所有分類
    getCategories() {
      const categoriesArr = new Set();
      Object.keys(this.products).forEach((key) => {
        const value = this.products[key];
        categoriesArr.add(value.category);
      });
      this.categories = categoriesArr;
    },
    // 按下按鈕後，只顯示該分類產品
    getCateProducts(category) {
      console.log(category)
      if (category) {
        // 有要篩選
        const cateProducts = {};
        Object.keys(this.products).forEach(key => {
          const product = this.products[key];
          if (product.category === category) {
            cateProducts[key] = product;
          }
        });
        this.cateProducts = cateProducts;
      } else {
        // 全部
        this.cateProducts = this.products;
      }
    }
  },
  mounted() {

    // 從 cookie 取出 token
    const tokenCookie = document.cookie.split(';').map(cookie => cookie.trim()).find(cookie => cookie.startsWith('token='));
    const token = tokenCookie ? tokenCookie.split('=')[1] : null;


    // 沒 token 就踢出去
    if (!token) {
      this.$router.push("/");
    } else {
      this.token = token;
    }

    this.getProducts();
  }
}
</script>

<template>
  <section>
    <!-- 分類 -->
    <div class="section-line container d-flex justify-content-center">
      <div class="pt-5 pb-3">
        <button type="button" class="btn btn-primary m-2" @click="getCateProducts()">全部</button>
        <button type="button" class="btn btn-primary m-2" v-for="(category, i) in categories" :key="i"
          @click="getCateProducts(category)">
          {{ category }}
        </button>
      </div>
    </div>

    <!-- 菜單 -->
    <div class="py-5 container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="product in cateProducts" :key="product.id">
          <div class="card h-100 border-0">
            <img :src="product.imageUrl" class="rounded-3" :alt="product.title" style="height: 300px;object-fit: cover;">
            <div class="d-flex justify-content-between pt-2">
              <h5>{{ product.title }}</h5>
              <div>NT$ {{ product.price }}</div>
            </div>
            <div class="row d-flex flex-column flex-md-row g-0">
              <div class="col col-md-6 pe-0 pe-md-1">
                <RouterLink :to="'/product/' + product.id">
                  <button type="button" class="btn btn-primary w-100">
                    查看內容
                  </button>
                </RouterLink>
              </div>
              <div class="col col-md-6 ps-0 ps-md-1 pt-1 pt-md-0">
                <button type="button" class="btn btn-primary w-100 px-1">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/all.scss";

.section-line {
  border-bottom: 2px solid $gray-300;
}
</style>