import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import contact from './views/contact'
import gallery from './views/gallery'
import signin from './views/signin'
import forgotpass from './views/forgotpass'
import dashboard from './dashboard/dashboard'



Vue.use(VueRouter)


const router = new VueRouter({
routes:[
{
path:'/',
component:Home
},

{
    path:'/contact',
    component:contact
},
{
    path:'/gallery',
    component:gallery
},
{
    path:'/dashboard/member/chat',
    component:gallery
},
     {path:'/signin',
     component:signin
    },
    {
        path:'/forgotpass',
        component:forgotpass
    },
    {
        path:'/:userid/dashboard',
        component:dashboard
    }


  ]
})
export default router