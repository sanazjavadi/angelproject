<template>
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
                 <div class="col-md-3">
                      <a class="navbar-brand" href="#">logo</a>
                 </div>
                 <div class="col-md-6">
                       
              <ul class="navbar-nav mr-auto">
              <li :class="naav.name == selectedItem ? 'navclass' : ''"
               v-for="(naav, index) in nav" 
              :key="naav.id" @click="activeitem(naav.name)">
                  <router-link :to="naav.path" class="nav-link">
                      {{naav.name}}
                      <span class="sr-only">(current)</span>
                      </router-link>
                     
                 </li>
              
    </ul>

                 </div>
<div class="col-md-3">
  <router-link to="/signin"><btn  bgcolor="#ffff" txtcolor="#FF047B">sign in</btn></router-link>
 
</div>
</nav>
</template>
<script>
import btn from './btn'
export default {
    components:{btn},
    data:function(){
        return{
          nav:[],
          selectedItem:"home",
        
        }
    }
,
created() {
  this.nav = this.$store.state.nav;

  const newState = this.nav.map(i => {
      i.active = false;
  });



  

  console.log(this.nav)

},
methods:{
 activeitem(nav){
    
    //  this.$store.commit('activeitem',{
    //    id : nav.id
    //  })
  this.selectedItem = nav;
    
  nav.active = !nav.active;
   

    console.log(nav);
    console.log(this.nav)
   
    
 }
}
}
</script>
<style scoped >
.navclass{
   color:red;
}
</style>