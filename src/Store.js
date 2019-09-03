import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    mutations:{
    activeitem(state,payload){

        // console.log('Before')
        // console.log(state.nav);
       
        // const navigation = state.nav;

        

        

        // let selectedItem = navigation.filter(i => {
        //     return i.id == payload.id
        // });

        // let otherItem = navigation.filter(i => {
        //     return i.id !== payload.id
        // })

        // // selectedItem.active = true;

        // const i = selectedItem.concat(otherItem)




        // state.nav =  i

        // console.log('After')
        // console.log(state.nav);

        
       
    
    }
    },
state:{
    nav:[
        {
            name:'home',
            path:'/home',
 
            id:0,
        },
        {
            name:'about',
            path:'/about',
           
            id:1,
        },
        {
            name:'dreams',
            path:'/dreams',
            
            id:2,

        },
        {
            name:'gallery',
            path:'/gallery',
           
            id:3,
        },
        {
            name:'news',
            path:'/news',
            
            id:4,
        },
        {
            name:'contact',
            path:'/contact',
           
            id:5,
        },
    ]

}
})


 