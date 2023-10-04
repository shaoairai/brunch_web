<script>
export default {
  data() {
    return {
      text: "Contact頁",
      titleBg:
        "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    };
  },
};
</script>

<template>
  <div class="position-relative" style="height: 200px">
    <div
      class="titleArea"
      :style="{ 'background-image': 'url(' + titleBg + ')' }"
    ></div>
    <div
      class="fs-2 text-white position-absolute translate-middle start-50 top-50"
    >
      聯絡我們
    </div>
  </div>

  <!-- 表單 -->
  <section>
    <div class="formArea container p-3 my-5">
      <div class="text-center pt-5">
        <h2>聯絡表單</h2>
        <p>請填寫以下表單，我們會在 3 天內以郵件方式回覆你！</p>
      </div>
      <div class="brLine mb-5"></div>

      <form action="#" method="post" class="pe-md-4">

        <div class="form-group row mb-3">
          <label
            for="name"
            class="col-md-2 col-form-label text-md-end text-start"
            >姓名：</label
          >
          <div class="col-md-10">
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              required
            />
          </div>
        </div>

        <div class="form-group row mb-3">
          <label class="col-md-2 col-form-label text-md-end text-start"
            >性別：</label
          >
          <div class="col-md-10 d-flex align-items-center">
            <div class="form-check form-check-inline">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                class="form-check-input"
                checked
              />
              <label for="male" class="form-check-label">先生</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                class="form-check-input"
              />
              <label for="female" class="form-check-label">小姐</label>
            </div>
          </div>
        </div>

        <div class="form-group row mb-3">
          <label
            for="phone"
            class="col-md-2 col-form-label text-md-end text-start"
            >聯絡電話：</label
          >
          <div class="col-md-10">
            <input
              type="tel"
              id="phone"
              name="phone"
              class="form-control"
              required
            />
          </div>
        </div>

        <div class="form-group row mb-3">
          <label
            for="email"
            class="col-md-2 col-form-label text-md-end text-start"
            >Email：</label
          >
          <div class="col-md-10">
            <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              required
            />
          </div>
        </div>

        
        <div class="form-group row mb-3">
          <label
            for="message"
            class="col-md-2 col-form-label text-md-end text-start"
            >留言內容：</label
          >
          <div class="col-md-10">
            <textarea
              type="text"
              id="message"
              name="message"
              class="form-control"
              required
            ></textarea>
          </div>
        </div>

        <div class="form-group row">
          <div class="col-md-2"></div>
          <div class="col-md-10 text-end">
            <input type="reset" value="重設" class="btn btn-secondary me-2" />
            <input type="submit" value="送出" class="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  </section>

  <!-- 地點 -->
  <section>
    <div class="row g-0">
      <div class="col-12 col-md-8" style="height: 450px">
        <iframe
          class="w-100 h-100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.449189215327!2d121.60666607507892!3d23.97991017992707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34689fc13b9d5f11%3A0x6eb61ff6cedce033!2zOTcw6Iqx6JOu57ij6Iqx6JOu5biC5LiJ5rCR6KGXNTLomZ8!5e0!3m2!1szh-TW!2stw!4v1691218917951!5m2!1szh-TW!2stw"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        class="col-12 col-md-4 px-3 py-5 py-md-0 d-flex justify-content-center align-items-center bg-primary"
      >
        <div class="d-flex flex-column text-white">
          <div class="pb-1">
            <i class="bi bi-geo-alt-fill pe-2"></i
            >地址：970花蓮縣花蓮市三民街52號
          </div>
          <div class="pb-1">
            <i class="bi bi-calendar-week-fill pe-2"></i
            >營業時間：11:00~20:00(週一公休)
          </div>
          <div class="pb-1">
            <i class="bi bi-telephone-fill pe-2"></i>聯絡電話：(03)831-1131
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/all.scss";

.text {
  color: purple;
}
.titleArea {
  height: 100%;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  filter: brightness(0.2);
}

.formArea {
  border: 1px solid $gray-400;
  border-radius: 8px;
}
</style>