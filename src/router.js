import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
// import signin from './views/signin'
import signup from './views/signup'


Vue.use(Router);


// create this View (route) in ./src/view folder
// home + about + singIn + signUp


export default new Router({
	routes: [
	{
       	path: '/',
       	name: 'home',
       	component: Home,
       },
       {
              path:'/about',
              name: 'about',
              component: About,
       },
       // {
       //        path:'/signin',
       //        name:'signin',
       //        component:signin,
       // },
       {
              path:'signup',
              name:'signup',
              component:signup,
       }
	] 
})


