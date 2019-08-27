<template>
    <div>
     
        <nav  class="navbar navbar-expand-lg navbar-light bg-light" >
  <a class="navbar-brand" href="#"> <logo/></a>
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li v-for="i in links" class="nav-item active">
        <router-link class="nav-link" :to="i.src"> {{i.title}}</router-link>
      </li>
    </ul>
  </div>
   <router-link to="/signin"> <Button  title="sign in" />  </router-link>

</nav>

        </div>
</template>
<script>
import logo from './logo'
import Button from './../components/Button'
export default {
    components:{logo,Button},
    props: ['links'],
    data: function () {
      return {
        bool: false,
      }
    }
}
</script>
<style scoped>
#navbarNav{
  padding-left:20%;
}

</style>