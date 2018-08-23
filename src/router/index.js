import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/content/home'], resolve)
    },
    {
      path: '/login',
      component: resolve => require(['@/views/layout/login'], resolve)
    },
    {
      path: '/make',
      component: resolve => require(['@/views/content/make'], resolve)
    },
    {
      path: '/borrow',
      component: resolve => require(['@/views/content/borrow'], resolve)
    },
    {
      path: '/save',
      component: resolve => require(['@/views/content/save'], resolve)
    },
    {
      path: '/banking',
      component: resolve => require(['@/views/content/banking'], resolve)
    }
  ]
})
