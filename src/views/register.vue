<template>
<div class="row">
    <div class="offset-md-1 col-md-8 mt-5">
<div class="reg d-flex">
<div class="left">
<h2 class="title"> sign in</h2>
<div>
    <img class="social p-1" v-for="sm in social" :src="sm.url" alt="">
   
</div>
 <p>or use your account</p>
 <div v-if="error" class="alert alert-danger"> you have Error</div>
     <form>
           <div class="form-group mx-sm-3 mb-2">
    
    <input @blur="checkinput" v-model="name"  class="form-control" placeholder="Enter name">

  </div>
  <div class="form-group mx-sm-3 mb-2">
    
    <input v-model="email" class="form-control"  placeholder="Enter email">
  
  </div>
  <div class="form-group mx-sm-3 mb-2">
   
    <input v-model="password" type="password" class="form-control" placeholder="Password">
  </div>
  <button @click="signup">sign up</button>
 <!-- <btn class="title" bgcolor="#FF047B" txtcolor="white" @click="signup">sign up </btn>
  -->
</form>
</div>
<div class="right">
<h2 class="title1">hello,friend</h2>
<h4 class="title1">Enter your personal details and start journey with us</h4>
     <div class="title">
 <btn  bgcolor="#ffff" txtcolor="#FF047B">sign in</btn></div>
</div>


    </div>


</div>
</div>
</template>
<script>
import btn from '../components/btn'
import axios from 'axios'
export default {
    components:{btn},
    data: function () {
        return {
           social:[
               {
                   url: 'https://cdn3.iconfinder.com/data/icons/social-media-2247/50/social_media_web_network_logo-02-512.png',
               },
                  {
                   url: 'https://cdn3.iconfinder.com/data/icons/social-media-2247/50/social_media_web_network_logo-20-128.png',
               },
                  {
                   url:  'https://cdn3.iconfinder.com/data/icons/social-media-2247/50/social_media_web_network_logo-08-128.png'
               },
           ],
            name:'',
            email:'',
            password:'',
            error: false,
        }
    },
    methods:{
        signup(){

            if(this.error) {
                return false;
            }
            
         return axios
         .post('http://5.253.27.170:3000/v1/auth/register',{
             name:this.name,
             password :this.password,
             email:this.email
         })
         .then(res =>
          console.log(res))
         .catch(err => {
         if(err.response.data.code == 400) {
           alert('please fill all form');
         }
         console.log(err.response);
         })
        },
        checkinput(){
            this.error = true;
            if(this.name == '' || this.name.length == 0) {
                this.name = 'Please Please';
            }
        } 
    }
   
}
</script>
<style scoped>
.reg{
    width: 820px;
    height:500px;
    
}
.left{
    width: 410px;
    height:500px;
    border-left:2px solid lightgray; 
      border-top:2px solid lightgray;
        border-bottom:2px solid lightgray;
    text-align: center;
}
.right{
    width: 410px;
    height:500px;
   
    background-color:#FF047B;
    color:#fff;
}
.title{
text-align: center;
margin-top: 10%;
font-weight: 300;
}
.title1{
  text-align: center;
margin-top: 15%;
font-weight: 300;
padding:5%;  
}
.social{
    max-width: 100%;
    height: auto;
    width: 12%;
    
}

</style>