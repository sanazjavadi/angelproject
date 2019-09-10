import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './Store'

// const products = [
//   {name:'pride', price:2000}
// ]

// const user = [
//   {
//     name: 'sanaz',
//     lastname: 'javadi'
//   }
// ]


// // call filter

// {{ products | sanaz }}
 


// //    define Filter
// Vue.filter('sanaz', function(value) {
//   return 
// })


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
