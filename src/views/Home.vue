<template>
  <div class="container">
     
<!-- header menu -->
     <div class="row">
     	<div class="col-12">
     		<headermenu />
     	</div>
     </div>


<!-- sanaz jooonam bia ghesmat haye dige ro inja bezar -->
<!-- masalan hero ro -->
<!-- harchizi ro khasti bezari , tag haye row ya col ro mitoni inja bezari -->
<!-- daghighan mesle hamin mesal <headermenu /> ke bala dorost kardam -->

<!-- 

<div class="row">
  <div class="col-12" >

   // your component, for example <Hero /> placed here sanaz jooonam
   <component />

  </div>
</div>



 -->




  </div>
</template>

<script>

	import headermenu from './../components/headermenu';


export default {
  name: 'home',
  components: {
  	headermenu,
  }
}
</script>
