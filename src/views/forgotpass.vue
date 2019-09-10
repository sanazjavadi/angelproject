<template>
    <div class="container">
        <div class="forgotpass">
 <img class="imgf" src="https://cdn.dribbble.com/users/879147/screenshots/3630290/forgot_password.jpg" alt="">
        <form>
       <p>Enter your email address and we will send you a link to reset your password</p>
        <input type="email" placeholder="Email" v-model="forgotemail"/>
     
       
        <button @click="forgotpass" >send</button>
    </form>
        </div>
          <div class="sendpass">
 <img class="imgf" src="https://cdn.dribbble.com/users/879147/screenshots/3630290/forgot_password.jpg" alt="">
        <form>
       <p>Enter your email address and we will send you a link to reset your password</p>
        <input type="email" placeholder="Email" v-model="forgotemail"/>
     
       
        <button @click="forgotpass" >send</button>
    </form>
        </div>
       
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data:function(){
        return{
            forgotemail:'',
        }
    },
    methods:{
        forgotpass(){
              return axios
              .post('',{})
              .then(res=>
              console.log(res))
              .catch(err =>
              console.log(err))
        }
    }
}
</script>
<style scoped>
.sendpass{
    display: none;
}
.imgf{
    width:100%;
}
.container {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 450px;
    max-width: 100%;
    min-height: 550px;
    margin-top: 10%;
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