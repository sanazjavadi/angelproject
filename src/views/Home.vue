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
     <div class="row">
      
       <div class="col-4 offset-md-5">
          <router-link to="/register">
          <registerr/>
       </router-link>
       </div>
      
       </div>
  </div>
</template>

<script>
import heroimg from './img'
import menuu from './menuu'
import registerr from './registerr'
export default {
  components:{menuu,heroimg,registerr},
  data: function() {
    return {
      myLinks: [
    {
      title: 'home',
      src: '/',
      active: false,
    },
    {
      title: 'about',
      src: '/about',
      active: true,
    },
    {
      title: 'dreams',
      src: '/dreams',
      active: false,
    },
      {
      title: 'gallery',
      src: '/gallery',
      active: false,
    },
      {
      title: 'news',
      src: '/news',
      active: false,
    },
      {
      title: 'contact',
      src: '/contact',
      active: false,
    },

  ]
    }
  }
}

</script>
