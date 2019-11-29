import Vue from "vue";
import store from "../store";
import Router from "vue-router";
import TheHome from "@/views/TheHome";
import TheLogin from "@/views/TheLogin";
import NotFound from "@/views/NotFound";
import TheLoading from "@/views/TheLoading";
import JsBase from "@/components/jsbase/JsBase";
import BaseTest from "@/components/mytest/BaseTest";

const HelloWorld = () => import("@/components/HelloWorld");
const TheAbout = () => import("@/views/TheAbout");
// js base
const JsBase1 = () => import("@/components/jsbase/JsBase1");
const JsBase2 = () => import("@/components/jsbase/JsBase2");
const JsBase3 = () => import("@/components/jsbase/JsBase3");
// js higher
const JsBaseHigher1 = () => import("@/components/jsbase/JsBaseHigher1");
const JsBaseHigher2 = () => import("@/components/jsbase/JsBaseHigher2");
// my test
const HelloTest = () => import("@/components/mytest/HelloTest");

Vue.use(Router);

/**
 * 升级vue-router至3.1以后版本
 * 在使用Element UI 的导航组件el-menu时重复点击同一个路由，控制台报错NavigationDuplicated，但不影响使用
 * 解决方法如下：
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

const router = new Router({
  routes: [
    {
      path: "/",
      name: "TheHome",
      component: TheHome
    },
    {
      path: "/login",
      name: "TheLogin",
      component: TheLogin
    },
    {
      path: "/jsBase",
      component: JsBase,
      alias: "/jsBaseh",
      children: [
        {
          path: "jsBase1",
          name: "JsBase1",
          component: JsBase1
        },
        {
          path: "jsBase2",
          name: "JsBase2",
          component: JsBase2
        },
        {
          path: "jsBase3",
          name: "JsBase3",
          component: JsBase3
        }
      ]
    },
    {
      path: "/jsBaseh",
      component: JsBase,
      children: [
        {
          path: "jsBaseHigher1",
          name: "JsBaseHigher1",
          component: JsBaseHigher1
        },
        {
          path: "jsBaseHigher2",
          name: "JsBaseHigher2",
          component: JsBaseHigher2
        }
      ]
    },
    {
      path: "/test",
      component: BaseTest,
      children: [
        {
          path: "test1",
          name: "HelloTest",
          component: HelloTest
        }
      ]
    },
    {
      path: "/about",
      name: "TheAbout",
      component: TheAbout,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: "/hello",
      name: "HelloWorld",
      component: HelloWorld,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: "/loading",
      name: "TheLoading",
      component: TheLoading
    },
    {
      path: "*",
      name: "NotFound",
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
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
