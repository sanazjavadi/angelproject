<script>
import modal from '@components/modal.vue'
export default {
  components: { modal },
}
</script>

<template>
  <modal>
    <template v-slot:close>
      <BaseCloseButton />
    </template>
    <section class="mt-5 pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <BaseForm>
              <template v-slot:header>
                عضویت
              </template>
              <template v-slot:body>
                <BaseInput placeholder="نام" class="mb-3" />
                <BaseInput placeholder="نام خانوادگی" class="mb-3" />
                <BaseInput placeholder="آدرس ایمیل" class="mb-3" />
                <BaseInput placeholder="کلمه عبور" class="mb-3" />
                <baseButton class="mb-3" size="block">
                  ایجاد حساب کاربری
                </baseButton>
              </template>

              <template v-slot:footer>
                <div class="footer-form text-center pt-3">
                  قبلا عضو شدی؟
                  <a href="#" class="font-weight-bolder">ورود</a>
                </div>
              </template>
            </BaseForm>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <div class="col-lg-3 d-flex justify-content-around">
            <div class="social-login">
              <img
                src="https://www.ceviz.io/static/google-logo-3f3dbee38e0e229df60c33e98ae0186d.png"
              />
            </div>
            <div class="social-login">
              <img
                src="https://avdivine.co.uk/wp-content/uploads/2019/12/facebook-new.png"
                alt=""
              />
            </div>
            <div class="social-login">
              <img
                src="https://img.icons8.com/clouds/100/000000/linkedin.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </modal>
</template>

<style lang="scss" scoped>
@import '@design';
.footer-form {
  color: $dark-gray;
  span {
    color: $dark-blue;
  }
}
.social-login {
  width: 50px;
  height: 50px;
  background-color: $light-blue;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  text-align: center;

  transition: transform 0.3s linear;
  img {
    width: 50px;
    height: 50px;
  }
  &:hover {
    transform: scale(1.3);
  }
}
</style>
