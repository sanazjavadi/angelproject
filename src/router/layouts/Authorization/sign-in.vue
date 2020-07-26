<script>
import modal from '@components/modal.vue'
export default {
  components: { modal },
}
</script>

<template>
  <modal>
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
</style>
