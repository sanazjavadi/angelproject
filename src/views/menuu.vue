<template>
    <div>
     
        <nav  class="navbar navbar-expand-lg navbar-light bg-light" >
  <a class="navbar-brand" href="#"> <logo/></a>
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li :key="i.title" v-for="i in links" :class="{activeitem: i.title == active}" @mouseover="clickme(i)">
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
        active:'home',
      }
    }
    ,
    methods:{
      clickme (i){
        this.active = i.title
      }
    }
}
</script>
<style scoped>
#navbarNav{
  padding-left:20%;
}
.activeitem{
  background-color:red;
}



</style>