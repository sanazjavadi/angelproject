<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><logo/></a>
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">about</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">dreams</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">gallery</a>
      </li>
             <li class="nav-item">
        <a class="nav-link" href="#">news</a>
      </li>
                   <li class="nav-item">
        <a class="nav-link" href="#">contact</a>
      </li>
    </ul>
  </div>
   <router-link to="/signin"> <signin/></router-link>

</nav>

        </div>
</template>
<script>
import logo from './logo'
import signin from './signin'
export default {
    components:{logo,signin}
}
</script>
<style scoped>
#navbarNav{
  padding-left:20%;
}
</style>