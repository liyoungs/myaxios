import Vue from 'vue'
import Router from 'vue-router'
import TheHome from '@/views/TheHome'

const HelloWorld = () => import('@/components/HelloWorld');
const TheAbout = () => import("@/views/TheAbout");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: TheHome
    },
    {
      path: '/about',
      name: 'TheAbout',
      component: TheAbout
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
