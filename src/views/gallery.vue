<template>
<div>
  
  <h1>{{ name | upcase   }}</h1> 
  <input  v-model="name" />
</div>
  
</template>
<script>
export default {
  props: ['hamid'],
  //  props: {
  //    hamid: string,
  //  },
    data :function(){
      return{
       name: 'sanaz',
       family: '',
      }
    },
    filters:{
      upcase(value){
       return value.toUpperCase();
      }
    },
    computed: {

      sanazName() {
      return `${this.name} javadi`;
      }
    }
  
  

}
</script>