import Vue from 'vue'
import store from "../store";
import Router from 'vue-router'
import TheHome from '@/views/TheHome'
import TheLogin from '@/views/TheLogin'
import NotFound from '@/views/NotFound'
import JsBase from "@/components/jsbase/JsBase";

const HelloWorld = () => import('@/components/HelloWorld');
const TheAbout = () => import("@/views/TheAbout");
// js base
const JsBase1 = () => import("@/components/jsbase/JsBase1");

Vue.use(Router);

// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//   store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: TheHome
    },
    {
      path: '/login',
      name: 'TheLogin',
      component: TheLogin
    },
    {
      path: '/jsBase',
      component: JsBase,
      children: [
        {
          path: '/jsBase1',
          name: 'JsBase1',
          component: JsBase1
        }
      ]
    },
    {
      path: '/about',
      name: 'TheAbout',
      component: TheAbout,
      meta: {
        requireAuth: true// 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requireAuth: true// 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: "*",
      name: 'NotFound',
      component: NotFound
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!store.state.AUTH_TOKEN) {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next();
    }
  } else {
    next()
  }
});
export default router
