<script>
import hero from '@layouts/hero.vue'
export default {
  page: {
    title: 'Your Support',
    meta: [{ name: 'description', content: 'The Your Support page.' }],
  },
  components: { hero },
}
</script>

<template>
  <div class="container-fluid">
    <hero>
      حمایت شما
    </hero>

    <section class="section-margin"> </section>
  </div>
</template>

<style>
.section-margin {
  margin-top: 250px;
}
</style>
