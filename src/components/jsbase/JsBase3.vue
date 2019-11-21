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
