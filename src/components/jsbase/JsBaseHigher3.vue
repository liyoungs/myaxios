<template>
  <div style="position:relative;">
    <h2>Pomise ҈</h2>
    <img :src="keyUrl" alt="Promise preloadImage loadImgAsyc" class="preloadImage" />
    <el-alert type="error" :closable="false" effect="dark">
      <ul slot="title">
        <li>
          ES6 规定，Promise 对象是一个构造函数，用来生成 Promise 实例。Promise 构造函数接受一个
          <i style="color:#303133">函数</i>
          作为参数，该函数的两个参数分别是 resolve 和 reject 。
        </li>
        <li>
          resolve 函数的作用是，将 Promise 对象的状态从“未完成”变为“成功”（即从 pending 变为
          resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
        </li>
        <li>
          reject 函数的作用是 ，将 Promise 对象的状态从“未完成”变为“失败”（即从 pending 变为
          rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
        </li>
        <li>
          Promise 实例生成以后，可以用 then 方法分别指定 resolved 状态和 rejected
          状态的回调函数。promise.then(function(value) { /* success */ }, function(error) { /* failure */ });
        </li>
        <li>
          then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接受Promise对象传出的值作为参数。
        </li>
        <li>
          Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。它的作用是为
          Promise
          实例添加状态改变时的回调函数。前面说过，then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。
          then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。
        </li>
        <li>
          Promise.prototype.catch方法是.then(null, rejection)或.then(undefined,
          rejection)的别名，用于指定发生错误时的回调函数。
        </li>
        <li>
          不管Promise实例最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。
        </li>
      </ul>
    </el-alert>
    <el-card style="width:720px;margin:auto">
      <el-tag slot="header">实例1 ====> 分析</el-tag>
      <el-tag type="danger" class="code-wrap">
        const PROMISE = new Promise((resolve, reject) => {
        <br />
        console.log(1);
        <br />
        resolve(2);
        <br />
        console.log(3);
        <br />
        });
        <br />
        PROMISE.then(value => {
        <br />
        console.log("then" + value);
        <br />
        }).catch(error => {
        <br />
        console.log("error" + error);
        <br />
        });
        <br />
        console.log(4);
      </el-tag>
      <el-tag type="danger" class="code-define" style="width:360px">
        本例新建一个 Promise 实例🍐对象 ==> PROMISE ，用 then 、catch 方法分别指定 resolved 状态和 rejected
        状态的回调函数。运行结果：1,3,4,then2; 这是因为 Promise 是一个容器，里面有 resolve 和 reject
        两个异步事件，在 PROMISE 执行之后，控制台输出1,3,4。resolve执行的结果有then承接为then2。
      </el-tag>
    </el-card>
    <el-card style="width:720px;margin:auto">
      <el-tag slot="header">实例2 ====> 分析</el-tag>
      <el-tag type="danger" class="code-wrap">
        setTimeout(function () {
        <br />
        console.log('three');
        <br />
        }, 0);
        <br />
        <br />
        Promise.resolve().then(function () {
        <br />
        console.log('two');
        <br />
        });
        <br />
        <br />
        console.log('one');
        <br />
        <br />
        // one
        <br />
        // two
        <br />
        // three
      </el-tag>
      <el-tag type="danger" class="code-define">
        代码中， setTimeout(fn, 0) 在下一轮 “事件循环” 开始时执行， Promise.resolve() 在本轮 “事件循环”
        结束时执行，console.log('one') 则是立即执行，因此最先输出。
      </el-tag>
    </el-card>
    <el-card style="width:720px;margin:auto">
      <el-tag slot="header">Generator 函数的解构赋值</el-tag>
      <img :src="yieldUrl" alt="function* yield" style="width:680px;height:216px" />
      <el-tag type="danger" style="white-space: normal;width:680px;height:auto">
        Generator 函数是分段执行的，每次返回遍历器对象，直到遇到一个 yield 表达式（或 return
        语句）为止，遍历器对象自带 next 方法。本例中为 fibs 做一个数组的解构赋值，也就是说，首先为 first
        赋值，执行到 yield a; 为止，first =>a =>0。再为 second 赋值，也就是执行 next 方法。而每次调用 next
        方法， 内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个 yield 表达式（或 return
        语句）为止。 换言之，为 second 赋值先执行 [a, b] = [b, a + b];即 a =>b =>1。 也就是 second=>a
        =>1。以此类推。
      </el-tag>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "JsBaseHigher3",
  data() {
    return {
      keyUrl: require("@/assets/logo.png"),
      yieldUrl: require("@/assets/yield.png")
    };
  },
  methods: {
    loadImgAsyc(url) {
      return new Promise((resolve, reject) => {
        const imgObj = new Image();
        imgObj.onload = resolve;
        imgObj.onerror = reject;
        imgObj.src = url;
      });
    },
    handlePromiseAjax(url) {
      const AJAXOBJ = new Promise((resolve, reject) => {
        const handler = xhr => {
          if (xhr.readyState !== 4) return;
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject(new Error(xhr.statusText));
          }
        };
        const CLIENT = new XMLHttpRequest();
        CLIENT.onreadystatechange = handler;
        CLIENT.open("get", url);
        CLIENT.send(null);
      });
      return AJAXOBJ;
    }
  },
  mounted() {
    this.loadImgAsyc(
      "https://images.sftcdn.net/images/t_app-logo-l,f_auto,dpr_auto/p/449d6486-96d2-11e6-b4e2-00163ec9f5fa/2631397628/microsoft-edge-edge%20icon.png"
    )
      .then(img => {
        console.log(img);
        /* eslint-disable dot-notation */
        this.keyUrl = img.path[0].src;
      })
      .catch(err => {
        console.log(err);
      });
    // this.handlePromiseAjax("https://api.apiopen.top/videoHomeTab")
    //   .then(val => {
    //     console.log(val.message);
    //     return val.result;
    //   })
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    console.log(" /* eslint-disable no-undef, no-unused-expressions */");

    // fetch("https://raw.githubusercontent.com/DaKoala/fetch-example/master/people.json")
    //   .then(res => res.json())
    //   .then(json => {
    //     console.log(json);
    //     json.forEach(item => {
    //       console.log(item);
    //     });
    //   });
  }
};
</script>

<style>
.code-wrap {
  height: auto;
  line-height: 1.5;
  white-space: normal;
}
.code-define {
  height: auto;
  width: 400px;
  white-space: normal;
  vertical-align: top;
  margin-left: 10px;
}
.preloadImage {
  position: absolute;
  left: 24px;
  top: 288px;
}
.yield {
  position: absolute;
  left: 24px;
  top: 290px;
}
</style>
