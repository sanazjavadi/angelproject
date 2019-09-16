<template>

 <div class="container">
  
                   <div class="row">
                           <div class="col-12">
                          
                      </div>
                      </div>
<div class="row">
   
<div class="offset-md-2 col-md-6">
    <div class="hero mt-5 pl-5">
<img src="https://i.pinimg.com/564x/f1/28/9c/f1289c7e92f05759a58906f997179f6a.jpg" alt="">
<div style="margin-left:43%;margin-top:5%;">
   <router-link to="/signin">
<btn bgcolor="#FF047B" txtcolor="white"> 
    Register
          <!-- <span slot="sanaz">this is h1</span> 
          <span slot="hamid">this is h3</span>  -->
      </btn>
    </router-link>
    
</div>

    </div>

</div>
   

</div>

<about />

<child/>
     </div>  
     
</template>
<script>
import about from './about'
import btn from '../components/btn'
import navigation from '../components/nav'
import child from './child'

export default {
   


   components:{navigation,btn,about,child} 
}
</script>
<style >
body{
    overflow-x :hidden;
}
</style>