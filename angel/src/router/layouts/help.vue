<template>
  <section class="margin-section">
    <div class="container">
      <div class="row align-items-stretch">
        <div class="col-12  d-flex justify-content-center">
          <img
            src="https://image.flaticon.com/icons/svg/942/942751.svg"
            alt=""
            class="img-fluid mb-4"
            width="200"
          />
        </div>
      </div>

      <h2 class="text-center support-title">سوالی دارین ؟</h2>
      <div class="row align-items-stretch ">
        <div
          class="col-12 col-md-6 d-flex justify-content-lg-end justify-content-center mb-3"
        >
          <BaseButton>
            تماس با ما
          </BaseButton>
        </div>
        <div
          class="col-12 col-md-6 d-flex justify-content-lg-start justify-content-center mb-3"
        >
          <BaseButton theme="lightbtn"> سوال های متداول </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@design';
.margin-section {
  @media (min-width: 991px) {
    padding: 50px;
  }
  padding: 60px;
}
.support-title {
  @extend %font-heading;
  color: $dark-blue;
}
</style>
