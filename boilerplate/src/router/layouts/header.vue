<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'درباره ما',
        },
        {
          title: 'تماس با ما',
        },
        {
          title: 'موسسات',
        },
        {
          title: 'آرشیو',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="borderr col-lg-4 d-flex justify-content-center">
        <BaseLogo />
      </div>
    </div>
    <div class="row justify-content-center mt-2">
      <div class="col-lg-6 d-flex justify-content-center">
        <ul class="menu">
          <li v-for="(item, index) in items" :key="index">
            {{ item.title }}
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
  width: 70%;
  font-weight: 900;
  color: #696478;
  cursor: pointer;
}
</style>
