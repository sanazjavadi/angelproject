<template>
    <div>
        <button 
          :style="{borderRadius: BorderRadius ? BorderRadius : defaultBorderRadius}" 
          class="btnsignin" >{{ title }}
        </button>
        
        </div>
</template>
<script>
export default {
    props: ['title','BorderRadius', 'width'],
    data: function() {
        return {
            defaultBorderRadius:'20px',
            
        }
    }
    
}
</script>
<style scoped>
.btnsignin{
    width: 150px;
    height: 53px;
    border:6px solid #FF047B;
    color: #FF047B;
    font-weight: 100;
    background-color: white;
    /* border-radius:100px; */
    
}
</style>