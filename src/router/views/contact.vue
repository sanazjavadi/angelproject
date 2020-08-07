<script>
import hero from '@layouts/hero.vue'
// svg
import call from '@components/svg/call-svg.vue'
import location from '@components/svg/location-svg.vue'
import email from '@components/svg/email-svg.vue'

export default {
  page: {
    title: 'Contact',
    meta: [{ name: 'description', content: 'The Contact page.' }],
  },
  components: { hero, call, location, email },
}
</script>

<template>
  <div class="container-fluid">
    <hero>
      تماس با ما
    </hero>
    <section class="section-margin">
      <div class="container-fluid">
        <div class="row justify-content-center ">
          <div
            class="col-lg-6 col-md-8 col-sm-11 col-12 contact-form d-flex flex-column align-items-center"
          >
            <h2 class="text-center">
              ارسال پیام از طریق فرم
            </h2>
            <div class="contact-base-form">
              <baseForm>
                <template v-slot:body>
                  <BaseInput placeholder="نام شما" />
                  <BaseInput placeholder="ایمیل شما" class="mt-2" />
                  <BaseInput placeholder="موضوع" class="mt-2" />
                  <textarea
                    placeholder="پیام"
                    rows="4"
                    class="form-control mt-2"
                  >
                  </textarea>
                </template>
                <template v-slot:footer>
                  <baseButton class="mt-3">
                    ارسال
                  </baseButton>
                </template>
              </baseForm>
            </div>
          </div>
          <div
            class="col-lg-6 col-md-6 col-10 mt-5 mt-lg-0 address d-flex flex-column justify-content-center"
          >
            <div class="d-flex  align-items-center">
              <location />
              <h2 class=" pl-2">آدرس</h2>
            </div>

            <p>
              تهران، میدان توحید، خیابان پرچم، بین رودکی و خوش، کوچه نیکوئی،
              پلاک ۳ شعبه گیلان: رشت، بلوار شهید انصاری، خیابان ارشاد، میدان باب
              الحوائج، ساختمان سبحان
            </p>

            <div class="d-flex  align-items-center">
              <call />
              <h2 class=" pl-2"> تلفن</h2>
            </div>

            <p class="font-weight-bolder">
              <a href="tel:021-1414">
                021-1414
              </a>
            </p>
            <div class="d-flex align-items-center ">
              <email />
              <h2 class=" pl-2">ایمیل</h2>
            </div>

            <p class="font-weight-bolder">
              <a href="mailto:info@angell.com">
                info@angell.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.section-margin {
  margin-top: 250px;
  .contact-form {
    h2 {
      @extend %font-heading;
      color: $dark-blue;
    }
    .contact-base-form {
      width: 80%;
    }
  }
  .address {
    h2 {
      @extend %font-heading;
      color: $dark-blue;
      text-align: right;
      padding-bottom: 0;
      margin: 0;
    }
    p {
      @extend %font-content;
      color: $dark-gray;
      text-align: right;
      font-size: 14px;
    }
  }
}
.form-control {
  padding: $size-input-padding;
  font-size: $input-font-size;
  line-height: $input-line-height;
  color: $input-font-color;
  background-color: #fff;
  border: $size-input-border solid $input-border-color;
  font-weight: $input-font-weight;
  will-change: border-color, box-shadow;
  border-radius: $size-input-border-radius;
  box-shadow: none;
  transition: box-shadow 0.25s cubic-bezier(0.27, 0.01, 0.38, 1.06),
    border 0.25s cubic-bezier(0.27, 0.01, 0.38, 1.06);
  &:focus {
    outline: none;
    appearance: none;
    border: $size-input-border solid darken($input-border-color, 20px);
  }
}
</style>
