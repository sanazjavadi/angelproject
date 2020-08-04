<script>
import hero from '@layouts/hero.vue'
export default {
  page: {
    title: 'Contact',
    meta: [{ name: 'description', content: 'The Contact page.' }],
  },
  components: { hero },
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
            class="col-lg-6 contact-form d-flex flex-column align-items-center"
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
            class="col-lg-6 address d-flex flex-column justify-content-center"
          >
            <h2>آدرس</h2>
            <p>
              تهران، میدان توحید، خیابان پرچم، بین رودکی و خوش، کوچه نیکوئی،
              پلاک ۳ شعبه گیلان: رشت، بلوار شهید انصاری، خیابان ارشاد، میدان باب
              الحوائج، ساختمان سبحان
            </p>
            <h2>تلفن</h2>
            <p>
              61604 – 021 شماره بازرسی: 09199167212 شعبه گیلان: 34244-013
            </p>
            <h2>ایمیل</h2>
            <p>
              info@angell.com
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
      text-align: center;
    }
    p {
      @extend %font-content;
      color: $dark-gray;
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>
