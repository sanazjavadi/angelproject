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
</style>
