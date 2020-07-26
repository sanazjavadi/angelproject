<template>
  <div class="container-fluid">
    <div
      class="mobile-header d-flex justify-content-between align-items-center "
    >
      <div class="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="mr-4">
        <BaseLogo :width="50" :height="50" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.mobile-header {
  border-bottom: 1px solid $light-gray;
  padding: 0.5rem 1rem;
}
.hamburger-menu {
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
</style>
