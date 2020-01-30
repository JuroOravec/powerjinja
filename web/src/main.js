import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import doc from './components/doc/doc.vue';
import guide from './components/guide/guide.vue';
import home from './components/home.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [{
    path: '/docs',
    component: doc,
    name: 'docs'
  }, {
    path: '/',
    component: home,
    name: ''
  },
  {
    path: '/how-it-works',
    component: guide,
    name: 'guide'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    //https://router.vuejs.org/guide/advanced/scroll-behavior.html
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')