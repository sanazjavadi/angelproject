<template>

 <div class="container-fluid">
  
                   <div class="row">
                           <div class="col-12">
                          
                      </div>
                      </div>
<div class="row">
    <div class="col-12">
<div class="offset-md-2 col-md-6">
    <div class="hero mt-5 pl-5">
<img src="https://i.pinimg.com/564x/f1/28/9c/f1289c7e92f05759a58906f997179f6a.jpg" alt="">
<div style="margin-left:45%;margin-top:5%;">
   <router-link to="/signin">
<btn bgcolor="#FF047B" txtcolor="white"> 
          Register 
      </btn>
    </router-link>
    
</div>

    </div>

</div>
    </div>

</div>

     </div>  
     
</template>
<script>
import btn from '../components/btn'
import navigation from '../components/nav'

export default {
   


   components:{navigation,btn} 
}
</script>
<style >
body{
    overflow-x :hidden;
}
</style>