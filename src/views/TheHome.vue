<template>
  <div>
    <h1 id="myh1">{{ msg }}</h1>
    <el-alert
      :closable="false"
      type="error"
      effect="dark"
      title="在 JavaScript 中, null 用于对象, undefined 用于变量，属性和方法。对象只有被定义才有可能为 null，否则为 undefined。"
    ></el-alert>
    <el-collapse accordion @change="handleChange" v-model="activeName">
      <el-collapse-item title="JavaScript 字面量" name="1">
        <el-alert :closable="false" type="error" title="🚦👀JavaScript 对字母大小写是敏感的🚦"></el-alert>
        <el-alert :title="msg1" type="warning" :closable="false" show-icon></el-alert>
        <p>
          <mark>数字（Number）字面量</mark>
          可以是整数或者是小数，或者是科学计数(e)。
        </p>
        <p>
          <mark>字符串（String）字面量</mark>
          可以使用单引号或双引号。
        </p>
        <p>
          <mark>表达式字面量</mark>
          用于计算
        </p>
        <p>
          <mark>数组（Array）字面量</mark>
          定义一个数组。
        </p>
        <p>
          <mark>对象（Object）字面量</mark>
          定义一个对象。
        </p>
        <p>
          <mark>函数（Function）字面量</mark>
          定义一个函数：
        </p>
        <code>function myFunction1(a, b) { return a * b;}</code>
      </el-collapse-item>
      <el-collapse-item name="2" title="JavaScript 变量">
        <el-alert :closable="false" type="error" :title="tip1"></el-alert>
        <p>变量用来存储数据值。变量是用于存储信息的"容器"。</p>
        <p>
          JavaScript使用关键字
          <strong>var</strong>来定义变量使用等号（=）来为变量赋值
        </p>
        <el-alert
          title="JavaScript 中，常见的是驼峰法的命名规则，如 lastName"
          type="warning"
          :closable="false"
          effect="dark"
          show-icon
        ></el-alert>
      </el-collapse-item>
      <el-collapse-item name="3" title="JavaScript 数据类型📌">
        <p>
          <b>值类型(基本类型)：</b>字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol
        </p>
        <p>
          <b>引用数据类型：</b>对象(Object)、数组(Array)、函数(Function)。
        </p>
        <el-alert title="Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。" show-icon :closable="false"></el-alert>
        <p>JavaScript 变量均为对象。当您声明一个变量时，就创建了一个新的对象。</p>
        <el-alert :closable="false" title="测试对象是否存在" show-icon></el-alert>
        <code>if(typeof myObj !== "undefined" && myObj !== null)</code>
      </el-collapse-item>
      <el-collapse-item title="JavaScript 函数" name="4">
        <el-alert title="函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。" :closable="false" show-icon></el-alert>
        <p>变量在es6之前只有全局变量和局部变量，也就是说变量的作用域是全局或者局部（函数内）</p>
        <mark>es6添加了:let,const来声明变量。增加了块级作用域（{}）的概念，类似一个局部的概念</mark>
      </el-collapse-item>
    </el-collapse>
    <div>{{ h2Msg }}🛰</div>
    <button type="button" @click="handleSelect">点击事件</button>
    <input type="checkbox" v-change name id />
    <img
      id="myImg"
      @click="warn('Form cannot be submitted yet.', $event)"
      src="https://www.runoob.com/images/pic_bulboff.gif"
      alt="aa"
    />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld'
export default {
  name: "TheHome",
  data() {
    return {
      activeName: "3",
      msg: "JavaScript 再充电！！！",
      msg1:
        "在编程语言中，一般固定值称为字面量，如 3.14。有数字、字符串、表达式、数组、对象、函数字面量",
      tip1: "🚦👀变量是一个名称，字面量是一个值🚦",
      h2Msg: "这是一个测试🛰   <b>你好</b> 🛰"
    };
  },
  methods: {
    handleSelect(evt) {
      console.log(evt);
      console.log(evt.target.style);
      const myh1 = document.getElementById("myImg");
      console.log(myh1.src);
      console.log(myh1.src.match("bulbon"));
      // if (!myh1.src.match('bulbon')) {
      //     myh1.src = 'https://www.runoob.com/images/pic_bulbon.gif'
      // } else {
      //     myh1.src = 'https://www.runoob.com/images/pic_bulboff.gif'
      // }
      myh1.src = myh1.src.match("bulbon")
        ? "https://www.runoob.com/images/pic_bulboff.gif"
        : "https://www.runoob.com/images/pic_bulbon.gif";
    },
    changeImg() {
      const myh1 = document.getElementById("myImg");
      console.log(myh1);
    },
    warn(msg, event) {
      console.log(event);
      // 现在我们可以访问原生事件对象
      if (event) event.preventDefault();
      alert(msg);
    },
    handleChange(val) {
      console.log(val);
      // },
      // myFunction(val) {
      //     console.log(val);
      //     console.log(9999);
    }
    // },
    // components: {
    //     HelloWorld
  },
  created() {
    console.log("created");
    let x;
    console.log(typeof x);
    x = 5;
    console.log(typeof x);
    x = "ksls";
    console.log(x);

    const str = "D:\\work\\wb\\myvue\\myaxios\\src\\views\\TheHome.vue"; // \\转义 \
    console.log(str.charAt(1));
    console.log(str.concat("ssss"));
    console.log(str.indexOf("work"));
    console.log(str.slice(3, 6)); // 开始结束位置
    console.log(str.substring(3, 6)); // 开始结束位置
    console.log(str.substr(3, 6)); // 开始位置--所需长度
    console.log(str.search("w"));
    console.log(str);
    console.log(str.match("work"));
    console.log(str.match("w")[0]);
    console.log(str);
    console.log(str);
    console.log(str);
    console.log(str);
    console.log(str);

    const obj1 = {
      name: "jim",
      class: "fly",
      face1: "😇",
      face2: "😈",
      "🎯": "🌹"
    };
    console.log(obj1.name);
    // console.log(obj1["name"]);
    const arr = [1, "😇", "😈"];
    console.log(typeof arr);
    console.log(Array.isArray(arr));
    for (const key in obj1) {
      // if (obj1.hasOwnProperty(key)) {
      const element = obj1[key];
      console.log(element);
      // }
    }
    for (var v of [1, 2, 3]) {
      console.log(v);
    }
    const arraySet = [1, "1", 1, "a", "a"];
    console.log(arraySet);
    console.log([...new Set(arraySet)]);
  },
  directives: {
    change: {
      update(el) {
        console.log(el);
      }
    }
  }
  // Vue.directive(id, [definition])
};
</script>

<style scoped></style>
