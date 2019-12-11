<template>
  <div>
    <h2>Promise</h2>
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
        <li>Promise 实例生成以后，可以用 then 方法分别指定 resolved 状态和 rejected 状态的回调函数。</li>
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
        console.log(value);
        <br />
        }).catch(error => {
        <br />
        console.log(error);
        <br />
        });
        <br />
        console.log(4);
      </el-tag>
      <el-tag type="danger" class="code-wrap">
        本例新建一个 Promise 实例🍐对象 ==> PROMISE ，而 Promise的然后执行 PROMISE 的 then 和 catch
        运行结果：1,3,4,2;这是因为 Promise 是一个容器，里面有 resolve 和 reject 两个异步事件，在 PROMISE
        执行之后，输出
      </el-tag>
    </el-card>
    <el-card style="width:720px;margin:auto">
      <el-tag slot="header">实例2 ====> 分析</el-tag>
      <el-tag type="danger" class="code-wrap">
        const PROMISE = new Promise((resolve, reject) => {
        <br />
        console.log(1);
        <br />
        reject(4);
        <br />
        resolve(2);
        <br />
        console.log(3);
        <br />
        });
        <br />
        PROMISE.then(value => {
        <br />
        console.log(value);
        <br />
        }).catch(error => {
        <br />
        console.log(error);
        <br />
        });
        <br />
        console.log(5);
      </el-tag>
      <br />
      <el-tag type="danger" style="height:auto">sss</el-tag>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "JsBaseHigher3",
  data() {
    return {
      key: "value"
    };
  },
  created() {}
};
</script>

<style>
.code-wrap {
  height: auto;
  line-height: 1.5;
  white-space: normal;
}
</style>
