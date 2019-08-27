<template>
  <div class="container">
<menuu :links="myLinks" />
     <div class="row">
     	<div class="col-4 offset-md-4" style=
       "margin-top:10%;">
     		<h3>some text here as hero </h3>
         <h2>some text here as hero </h2>
         <heroimg/>
     	</div>
     </div>
  </div>
</template>

<script>
import heroimg from './img'
import menuu from './menuu'
export default {
  components:{menuu,heroimg},
  data: function() {
    return {
      myLinks: [
    {
      title: 'Home',
      src: '/'
    },
    {
      title: 'Abbout',
      src: '/about'
    },
    {
      title: 'Sign In',
      src: '/signin'
    }
  ]
    }
  }
}

</script>
