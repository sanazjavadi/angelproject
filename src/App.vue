<template>
  <div id="app">
    <master/>
    <div class="main-container container">
    <router-view />
    </div>
 
  </div>
</template>

<script>

import master from './views/master'
export default {
    components:{master},
  name: 'app',
  
}
</script>

<style>
.main-container {
  border:9px solid black;
}
</style>