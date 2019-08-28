<template>
<div>
    {{ $route.params.id }}
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            products: [
                {
                    id:0,
                    name: 'sibzamini',
                  
                },
                {
                    id:1,
                    name: 'piaz',
                  
                },{
                    id:2,
                    name: 'gole sanaz',
                  
                }
            ]
        }
    }
}
</script>