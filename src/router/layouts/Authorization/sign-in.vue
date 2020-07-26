<script>
import { utilityMutations } from '@state/helpers.js'
export default {
  data() {
    return {}
  },
  methods: {
    ...utilityMutations,
    _triggerComponent() {
      this.triggerComponent()
    },
  },
}
</script>

<template>
  <section class="mt-5 pt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-6 col-sm-8 col-10">
          <BaseForm>
            <template v-slot:header>
              ورود
            </template>
            <template v-slot:body>
              <BaseInput placeholder=" شماره موبایل" class="mb-3" />
              <BaseInput placeholder="کلمه عبور" class="mb-3" />
              <baseButton class="mb-3" size="block">
                ورود
              </baseButton>
            </template>

            <template v-slot:footer>
              <div class="footer-form text-center pt-3">
                هنوز عضو نشدی؟
                <a
                  href="#"
                  class="font-weight-bolder"
                  @click="_triggerComponent"
                  >ثبت نام</a
                >
              </div>
            </template>
          </BaseForm>
        </div>
      </div>
    </div>
  </section>
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
