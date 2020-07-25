<script>
import homeSvg from '@components/svg/support-home-svg.vue'
import humanSvg from '@components/svg/support-human-svg.vue'
export default {
  components: { homeSvg, humanSvg },
}
</script>

<template>
  <section class="section-margin text-center">
    <div class="container">
      <h2 class="title text-center"> حمایت شما </h2>
      <div class="row align-items-stretch">
        <div
          class="col-12 col-md-6 col-sm-10 col-lg-6 home-support__col m-auto"
        >
          <div class="home-support__col__img">
            <human-svg />
          </div>

          <h3 class="home-support__col__title">
            به عنوان یک فرد
          </h3>
          <p class="home-support__col__text">
            شما عزیزان می‌توانید کمک‌های نقدی خود را از طریق پرداخت آنلاین در
            لینک و یا حساب کمپین فرشته در بانک ملت به شماره اهدا کنید.
          </p>
          <div class="row after">
            <div class="col">
              <BaseButton theme="lightbtn">
                اطلاعات بیشتر
              </BaseButton>
            </div>
          </div>
        </div>
        <div
          class="col-12 col-md-6 col-sm-10 col-lg-6 home-support__col m-auto"
        >
          <div class="home-support__col__img">
            <home-svg />
          </div>

          <h3 class="home-support__col__title">
            به عنوان یک سازمان
          </h3>
          <p class="home-support__col__text">
            شما عزیزان می‌توانید کمک‌های نقدی خود را از طریق پرداخت آنلاین در
            لینک و یا حساب کمپین فرشته در بانک ملت به شماره اهدا کنید.
          </p>
          <div class="row">
            <div class="col">
              <BaseButton theme="lightbtn">
                اطلاعات بیشتر
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@design';
.section-margin {
  padding: $section-padding-lg;
  background-color: $dark-blue;
  text-align: center;
  .title {
    @extend %font-heading;
    color: white;
  }
  .home-support__col {
    padding: 40px 50px;
  }
  .home-support__col__img {
    height: 150px;
    padding-bottom: 3.125rem;
    svg {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
    }
  }
  .home-support__col__title {
    @extend %font-heading;
    color: white;
    @media (max-width: 991px) {
      font-size: 1.5rem;
    }
  }
  .home-support__col__text {
    @extend %font-content;
    color: #fff;
    max-width: 90%;
    margin-right: auto;
    margin-left: auto;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
  .after {
    @media (max-width: 768px) {
      position: relative;
    }
    &::before {
      position: absolute;
      content: '';
      left: 0;
      right: auto;
      top: 50px;
      bottom: 50px;
      height: auto;
      width: 2px;
      background: #5d658d;
      @media (max-width: 768px) {
        content: '';
        position: absolute;
        bottom: -10%;
        right: 25px;
        left: 25px;
        background: #5d658d;
        height: 2px;
        width: auto;
      }
    }
  }
}
</style>
