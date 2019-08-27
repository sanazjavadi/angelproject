<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->

  <div class="container">
<router-view/>
    </div>
</template>
<script>
import Home from './views/Home'
export default {
  components:{Home}
}
</script>

<style lang="scss">

</style>
