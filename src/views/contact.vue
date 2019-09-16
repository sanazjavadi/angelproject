<template>
<div class="container">
 
<label for="name">name</label>
<input  v-model="username" />
 <label for="password">password</label> <input v-model="pass"/> 
  <button @click="sanaz">submit</button>
</div>
  
</template>
<script>

export default {
data : function(){
    return{
        pass:'',
        username: '',
        id :this.$store.state
    }
},
methods: {
    sanaz() {
      const name = 'hamid';
      const pass = '123';
 
      if( this.username == name && this.pass == pass) {
          this.$router.push({ name: 'dashboard' , params: {userid: 800} })
        //   this.$router.go(-1) or 1
          // or
        //   this.$router.push({ path: '/' })
      }
    }
}
}
</script>