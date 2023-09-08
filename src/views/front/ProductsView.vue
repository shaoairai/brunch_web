<script>
  import { RouterLink } from 'vue-router';
  import axios from 'axios';

  export default{
    data(){
      return{
        token:"",
        products:[],
      }
    },
    components:{
      RouterLink
    },
    methods:{
      // 取得產品列表
      getProducts(){
        const conf = {
          method:'GET',
          url:`${import.meta.env.VITE_APP_URL}v2/api/${import.meta.env.VITE_APP_PATH}/admin/products/all`,
          headers:{
            'Content-Type': 'application/json',
            Authorization:`${this.token}`,
          }
        }
        axios(conf).then((res)=>{
          console.log(res);
        }).catch((err)=>{
          console.log(err.response);
        })
      }
    },
    mounted(){
      // 從 cookie 取出 token
      const tokenCookie = document.cookie.split(';').map(cookie => cookie.trim()).find(cookie => cookie.startsWith('token='));
      const token = tokenCookie ? tokenCookie.split('=')[1] : null;

      // 沒 token 就踢出去
      if(!token){
        this.$router.push("/");
      }
    }
  }
</script>

<template>
  <section>
    <!-- 分類 -->
    <div class="section-line container d-flex justify-content-center">
      <div class="pt-5 pb-3">
        <button type="button" class="btn btn-primary m-2">全部</button>
        <button type="button" class="btn btn-primary m-2">美味餐盤</button>
        <button type="button" class="btn btn-primary m-2">三明治</button>
        <button type="button" class="btn btn-primary m-2">披薩</button>
        <button type="button" class="btn btn-primary m-2">排餐</button>
        <button type="button" class="btn btn-primary m-2">點心</button>
        <button type="button" class="btn btn-primary m-2">飲料</button>
      </div>
    </div>

    <!-- 菜單 -->
      <div class="py-5 container">
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
                  <RouterLink to="/product/123123">
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
      </div>
    </section>
</template>

<style lang="scss" scoped>
  @import "@/assets/all.scss";
  .section-line{
    border-bottom: 2px solid $gray-300;
  }
</style>