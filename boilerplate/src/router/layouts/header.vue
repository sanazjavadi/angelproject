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
    }
  },
  computed: {
    isActive() {
      return (index) =>
        this.selected === index ? { color: '#172f66' } : { color: '#696478' }
    },
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
        <ul class="menu">
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
.menu {
  display: flex;
  justify-content: space-between;
  width: 80%;
  font-weight: 900;
  cursor: pointer;
}
</style>
