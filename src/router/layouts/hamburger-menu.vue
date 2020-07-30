<script>
export default {
  data() {
    return {
      displayMobileMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      this.displayMobileMenu = true
    },
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

    <div v-if="displayMobileMenu" class="hamburger-menu">
      <ul @click="displayMobileMenu = false">
        <li>
          <router-link to="/">
            خانه
          </router-link>
        </li>
        <li>
          <router-link to="about">
            چه کار می کنیم
          </router-link>
        </li>
        <li>
          <router-link to="contact">
            تماس با ما
          </router-link>
        </li>
        <li>
          <router-link to="explore">
            فروشگاه مهربانی
          </router-link>
        </li>
        <li>
          <router-link to="support">
            حمایت شما
          </router-link>
        </li>
      </ul>
    </div>
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
  position: fixed;
  width: 100%;
  height: 80vh;
  background: $light-blue;
  z-index: 14;

  ul {
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    height: 100%;
    li {
      padding: 1.5rem 0;
      text-align: center;
      width: 100%;
      font-weight: 900;
      font-size: 1rem;
      color: $dark-blue;
      &:nth-child(odd) {
      }
    }
  }
}
</style>
