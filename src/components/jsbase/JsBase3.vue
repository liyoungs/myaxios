<template>
  <div>
    <h1 style="text-algin:center;">JavaScript 函数</h1>
    <el-tag>函数定义</el-tag>
    <el-card>
      <ul>
        <li>函数可以通过声明定义，也可以是一个表达式。</li>
      </ul>
    </el-card>
    <el-tag>JavaScript 函数参数</el-tag>
    <el-card>
      <ul>
        <li>JavaScript 函数有个内置的对象 arguments 对象。argument 对象包含了函数调用的参数数组。</li>
        <li>函数显式参数在函数定义时列出。函数隐式参数在函数调用时传递给函数真正的值。</li>
      </ul>
    </el-card>
    <el-tag>闭包</el-tag>
    <el-card>
      <el-alert
        :closable="false"
        effect="dark"
        type="error"
        title="闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。直观的说就是形成一个不销毁的栈环境。"
      ></el-alert>
    </el-card>
    <el-tag>事件传递有两种方式：冒泡与捕获。</el-tag>
    <el-card>
      <el-alert
        title="事件传递定义了元素事件触发的顺序。 如果你将 <p> 元素插入到 <div> 元素中，用户点击 <p> 元素, 哪个元素的 'click' 事件先被触发呢？"
        :closable="false"
        type="error"
      ></el-alert>
      <ul>
        <li>
          在
          <b>冒泡</b>
          中，内部元素的事件会先被触发，然后再触发外部元素，即： p 元素的点击事件先触发，然后会触发 div
          元素的点击事件。
        </li>
        <li>
          在
          <b>捕获</b>
          中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： div 元素的点击事件先触发 ，然后再触发
          p 元素的点击事件。
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "JsBase3",
  methods: {
    myFunc() {
      return this;
    }
  },
  created() {
    console.log("created");
    console.log(this.myFunc());
    const myObject = {
      firstName: "John",
      lastName: "Doe",
      fullName: function() {
        return this;
      }
    };
    console.log(myObject.fullName());
  },
  mounted() {
    console.log("mounted");
  }
};
</script>
