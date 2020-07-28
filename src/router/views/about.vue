<script>
import timeline from '@layouts/about/timeline.vue'
import hero from '@layouts/hero.vue'
export default {
  page: {
    title: 'About',
    meta: [{ name: 'description', content: 'The About page.' }],
  },
  components: {
    timeline,
    hero,
  },
}
</script>

<template>
  <div class="container-fluid">
    <hero>
      درباره ما
    </hero>
    <timeline />
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
</style>
