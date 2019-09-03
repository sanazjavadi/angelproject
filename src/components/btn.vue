<template>
    <div>
        <button class="btn" 
        :style="{color:txtcolor,backgroundColor:bgcolor ? bgcolor :defaultbgcolor}">
        <slot></slot>
        </button>
    </div>
</template>
<script>

export default {
    data:function (){
       return{
           defaultbgcolor:'white',
       }
    },
      props:['bgcolor','txtcolor']
}
</script>
<style scoped>
.btn{
    width:150px;
    height: 50px;
    border-radius:100px;
    border: 4px solid #FF047B;
}
</style>