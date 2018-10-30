import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '@/components/home'
import list from '@/components/list'
import shopping from '@/components/shopping'
import myfile from '@/components/myfile'



export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/myfile',
      name: 'myfile',
      component: myfile
    }
  ]
})
