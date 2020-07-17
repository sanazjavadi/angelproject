<template>
  <section class="banner-section">
    <div class="row justify-content-center">
      <div
        class="col-lg-6 d-flex flex-column justify-content-center align-items-center"
      >
        <span>
          یک قلب ! یک آرزو
        </span>
        <h2 class="mt-4">می تونی دنیا رو به جای قشنگ تری تبدیل کنی</h2>
        <baseButton class="mt-4">
          می خواهم کمک کنم
        </baseButton>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@design';
.banner-section {
  margin-top: 5rem;
  span,
  h2 {
    text-align: center;
    color: $dark-blue;
  }
  span {
    font-size: 30px;
    font-weight: 400;
  }
  h2 {
    font-size: 45px;
    line-height: 4rem;
    font-weight: 800;
  }
}
</style>
