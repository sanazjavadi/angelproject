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
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>
