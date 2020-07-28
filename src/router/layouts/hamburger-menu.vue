<script>
export default {
  methods: {
    toggleMenu() {},
  },
}
</script>

<template>
  <div class="container-fluid">
    <div
      class="mobile-header d-flex justify-content-between align-items-center "
    >
      <div class="hamburger-btn" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="mr-4">
        <BaseLogo :width="50" :height="50" />
      </div>
    </div>

    <!-- <div class="hamburger-menu">
      <ul>
        <li>
          خانه
        </li>
        <li>
          چه کارمی کنیم
        </li>
        <li> تماس با ما </li>
      </ul>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.mobile-header {
  border-bottom: 1px solid $light-gray;
  padding: 0.5rem 1rem;
  position: fixed;
  z-index: 15;
  background-color: #fff;
  width: 100%;
}
.hamburger-btn {
  display: inline-grid;
  cursor: pointer;

  span {
    height: 4px;
    width: 40px;
    background-color: $dark-blue;
    margin: 3px 0;
    border-radius: 2px;
  }
}
.hamburger-menu {
  position: fixes;
  width: 100vw;
  height: 80vh;
  background: #fff;
  z-index: 14;
}
</style>
