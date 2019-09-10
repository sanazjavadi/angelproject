<template>
    <div>
        <div class="container" :class="active == true ? 'right-panel-active' : ''">
 
        <div class="form-container sign-up-container">
    <form >
        <h2>Create Account</h2>
        <div >
            <a href="#" ><img class="social social-container p-1" :src="sm.url" alt="" v-for="sm in social"></a>

        </div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" v-model="name"/>
        <input type="email" placeholder="Email" v-model="email"/>
        <input type="password" placeholder="Password" v-model="password"/>
        <button @click="signup">Sign Up</button>
    </form>
</div>
   
   
<div class="form-container sign-in-container">
    <form>
        <h1>Sign in</h1>
        <div >
            <a href="#" ><img class="social social-container p-1" :src="sm.url" alt="" v-for="sm in social"></a>


        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" v-model="signinemail"/>
        <input type="password" placeholder="Password" v-model="signinpass" />
        <a href="#">Forgot your password?</a>
        <button @click="signin">Sign In</button>
    </form>
</div>
    

        <div class="overlay-container">
    <div class="overlay">
        <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
                To keep connected with us please login with your personal info
            </p>
            <button class="ghost" @click="siginactive">Sign In</button>
        </div>
        <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button class="ghost" @click="siginupactive">Sign Up</button>
        </div>
    </div>
</div>
   
</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data:function(){
        return{
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
           active:false,
           name:'',
           email:'',
           password:'',
           signinemail:'',
           signinpass:'',

        }
    },
    
    methods:{
        siginupactive(){
               this.active = true;
        },
        siginactive(){
               this.active = false;
        },
        signup(){
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
        },
        signin(){
            return axios
            .post('http://5.253.27.170:3000/v1/auth/login',{
                email:this.signinemail,
                password:this.signinpass
            })
            .then(res =>
            console.log(res))
            .catch(err =>
            console.log(err))
        }
    }
}
</script>
<style scoped>
h1 {
    font-weight: bold;
    margin: 0;
}

p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
}

span {
    font-size: 12px;
}

a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
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

button.ghost {
    background-color: transparent;
    border-color: #ffffff;
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

.social-container {
    margin: 20px 0;
}

.social-container a {
    border: 1px solid #dddddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
}
.container {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
}
.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
}

.sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.container.right-panel-active .sign-in-container {
    transform: translateX(100%);
}

.container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
}

@keyframes show {
    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}
.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}

.container.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

.overlay {
    background: #ff416c;
    background: -webkit-linear-gradient(to right, #FF047B, #ff416c);
    background: linear-gradient(to right, #FF047B, #FF047B);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.overlay-left {
    transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
    transform: translateX(0);
}

.overlay-right {
    right: 0;
    transform: translateX(0);
}

.container.right-panel-active .overlay-right {
    transform: translateX(20%);
}
.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}

.container.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

.overlay {
    background: #ff416c;
    background: -webkit-linear-gradient(to right, #FF047B, #ff416c);
    background: linear-gradient(to right, #FF047B, #ff416c);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.overlay-left {
    transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
    transform: translateX(0);
}

.overlay-right {
    right: 0;
    transform: translateX(0);
}

.container.right-panel-active .overlay-right {
    transform: translateX(20%);
}
.social{
    max-width: 100%;
    height: auto;
    width: 12%;
    
}
</style>