<script>
import timeline from '@layouts/about/timeline.vue'
export default {
  page: {
    title: 'About',
    meta: [{ name: 'description', content: 'The About page.' }],
  },
  components: {
    timeline,
  },
}
</script>

<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <h2 class="text-center about-title">درباره ما</h2>
    </div>
    <div id="clouds1" class="clouds"></div>
    <div id="clouds2" class="clouds"></div>
    <timeline />
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.about-title {
  margin-top: 5rem;
  @extend %font-heading;
  color: $dark-blue;
}
.clouds {
  position: absolute;
  width: 100%;
  height: 120px;
  left: 0px;
  top: 400px;
}
#clouds1 {
  margin-top: -14px;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  background-image: url('https://www.typingclub.com/m/tpmedia/img/clouds1.png');
}
#clouds2 {
  margin-top: 20px;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  background-image: url('https://www.typingclub.com/m/tpmedia/img/clouds2.png');
  border-bottom: 10px solid white;
  top: 400px;
}
</style>
