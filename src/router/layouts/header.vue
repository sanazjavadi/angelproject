<script>
export default {
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
          link: '',
        },
      ],
      selected: 0,
      minimizeHeader: false,
    }
  },
  computed: {
    isActive() {
      return (index) =>
        this.selected === index ? { color: '#172f66' } : { color: '#696478' }
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (Math.round(window.scrollY) > 500) {
        this.minimizeHeader = true
      } else {
        this.minimizeHeader = false
      }
    })
  },
  methods: {
    activeItem(item) {
      this.selected = item
    },
  },
}
</script>

<template>
  <div class="container-fluid ">
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
            @click="activeItem(index)"
          >
            <router-link
              :to="{ name: `${item.link}` }"
              :style="isActive(index)"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
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
