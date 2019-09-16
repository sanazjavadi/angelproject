<template>
    <div class="containerr">
     
 <transition name="slide-fade">
       <div class="forgotpass" v-if="active">
 <img class="imgf" src="https://tbibank.bg/assets/images/illu_forgotten-password.jpg" alt="">
        <form>
       <p>Enter your email address and we will send you a link to reset your password</p>
        <input type="email" placeholder="Email" v-model="forgotemail"/>
     
       
        <button @click="forgotpass" >send</button>
    </form>
        </div>
  

          <div v-else class="sendpass">
 <img class="imgf" src="https://cdn.dribbble.com/users/879147/screenshots/3630290/forgot_password.jpg" alt="">
        <form>
       <p>Check in your email</p>
       <small>we just email you with instruduction of reset your password</small>
        <p>for any question or problems please email us</p>
        <button>send email us</button>
    </form>
        </div>
       </transition>
    </div>
    
</template>
<script>
import axios from 'axios'
export default {
    data:function(){
        return{
            forgotemail:'',
            active:true,

        }
    },
    methods:{
        
        forgotpass(){
             this.active=false;
             console.log(this.active);
              return axios
              .post('',{})
              .then(res=>
              console.log(res))
              .catch(err =>
              console.log(err));
             
        }
    }
}
</script>










<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.imgf{
    width:100%;
}
.containerr {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    width: 450px;
    max-width: 100%;
    min-height: 550px;
    margin:5% auto;
}

.container:before {
    content: '';
    position: absolute;
    width: 50vw; 
    height:30vw;
    background-color: yellow;
    z-index: -1;

}

form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
}

input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
}
button {
    border-radius: 20px;
    border: 1px solid #FF047B;
    background-color: #FF047B;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}
</style>