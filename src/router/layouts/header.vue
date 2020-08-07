<script>
import hamburgerMenu from '@layouts/hamburger-menu.vue'
import Basket from '@components/gift-basket.vue'
export default {
  components: { hamburgerMenu, Basket },
  data() {
    return {
      items: [
        {
          title: 'خانه',
          link: 'home',
        },
        {
          title: 'چه کارهایی میکنیم',
          link: 'about',
        },
        {
          title: 'تماس با ما',
          link: 'contact',
        },

        {
          title: 'فروشگاه مهربانی',
          link: 'explore',
        },
        {
          title: 'حمایت شما',
          link: 'your-support',
        },
      ],
      selected: 'home',
      minimizeHeader: false,
      hamburgerMenu: false,
    }
  },
  computed: {
    isActive() {
      return (link) =>
        this.selected === link ? { color: '#172f66' } : { color: '#696478' }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleMinimizeHeader)
    window.addEventListener('resize', this.displayHamburgerMenu)
    this.setRouteParams()
    this.displayHamburgerMenu()
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleMinimizeHeader)
  },
  methods: {
    activeItem(item) {
      this.selected = item
    },
    setRouteParams() {
      const url = window.location.href
      const urlArray = url.split('/')
      const pathName = urlArray[urlArray.length - 1]
      this.activeItem(pathName)
    },
    handleMinimizeHeader() {
      if (Math.round(window.scrollY) > 500) {
        this.minimizeHeader = true
      } else {
        this.minimizeHeader = false
      }
    },
    displayHamburgerMenu() {
      const width = window.innerWidth
      if (width < 680) {
        this.hamburgerMenu = true
      } else {
        this.hamburgerMenu = false
      }
    },
  },
}
</script>

<template>
  <fragment>
    <!-- hamburger menu navigation -->
    <hamburger-menu v-if="hamburgerMenu" />

    <!-- default navigation -->

    <div v-if="!hamburgerMenu" class="container-fluid ">
      <Basket />

      <div class="row justify-content-center pt-3 pb-3">
        <div class="col-lg-4 d-flex justify-content-center">
          <BaseLogo />
        </div>
      </div>

      <div class="row justify-content-center mt-2">
        <div class="col-lg-6 d-flex justify-content-center">
          <ul :class="[{ scrolled: minimizeHeader }, 'header']">
            <div v-if="minimizeHeader" class="minimize-icon">
              <BaseLogo :width="40" :height="40" />
            </div>
            <li
              v-for="(item, index) in items"
              :key="index"
              @click="activeItem(item.link)"
            >
              <router-link
                :to="{ name: `${item.link}` }"
                :style="isActive(item.link)"
              >
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </fragment>
</template>

<style lang="scss" scoped>
@import '@design';
.header {
  display: flex;
  justify-content: space-between;
  width: 80%;
  font-weight: 900;
  cursor: pointer;
}
.scrolled {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  background: white;
  cursor: pointer;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid $light-gray;
  left: 0;
  top: 0;
  right: 0;
  z-index: 12;
  padding: 2rem;
  li {
    padding: 0 1rem;
  }
  .minimize-icon {
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translate(-25px, -50%);
  }
}
</style>
