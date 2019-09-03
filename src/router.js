import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import register from './views/register'
import contact from './views/contact'
import gallery from './views/gallery'

Vue.use(VueRouter)


const router = new VueRouter({
routes:[
{
path:'/',
component:Home
},
{
    path:'/register',
    component:register
},
{
    path:'/contact',
    component:contact
},
{
    path:'/gallery',
    component:gallery
}

  ]
})
export default router