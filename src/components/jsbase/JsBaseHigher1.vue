<template>
  <div>
    <h1 style="text-algin:center;">对象只是带有属性和方法的特殊数据类型。</h1>
    <el-tag>
      对象只是一种特殊的数据。对象拥有
      <strong>属性</strong>
      和
      <strong>方法</strong>
      。
    </el-tag>
    <el-card>
      <ul>
        <li>把属性添加到 JavaScript 对象。通过为对象赋值，向已有对象添加新属性</li>
        <li>把方法添加到 JavaScript 对象。方法只不过是附加在对象上的函数。</li>
      </ul>
    </el-card>
    <el-alert
      :closable="false"
      effect="dark"
      type="error"
      title="JavaScript 是基于 prototype 的，是面向对象的语言。for...in 语句循环遍历对象的属性。"
    ></el-alert>
    <el-tag>JavaScript prototype（原型对象）</el-tag>
    <el-alert
      title="所有的 JavaScript 对象都会从一个 prototype（原型对象）中继承属性和方法。"
      :closable="false"
      type="error"
    ></el-alert>
    <el-tag>prototype 继承</el-tag>
    <br />
    <el-tag type="danger">所有的 JavaScript 对象都会从一个 prototype（原型对象）中继承属性和方法：</el-tag>
    <el-card>
      <ul>
        <li>Date 对象从 Date.prototype 继承。</li>
        <li>Array 对象从 Array.prototype 继承。</li>
        <li>Person 对象从 Person.prototype 继承。</li>
      </ul>
      <el-tag>所有 JavaScript 中的对象都是位于原型链顶端的 Object 的实例。</el-tag>
      <br />
      <el-tag>Date 对象, Array 对象, 以及 Person 对象从 Object.prototype 继承。</el-tag>
    </el-card>
    <el-tag>JavaScript 字符串（String） 对象</el-tag>
    <el-card>
      <ul>
        <li>使用位置（索引）可以访问字符串中任何的字符,字符串的索引从零开始.</li>
        <li>字符串（String）使用长度属性length来计算字符串的长度</li>
        <li>使用 indexOf() 来定位字符串中某一个指定的字符 首次 出现的位置。如果没找到对应的字符函数返回-1</li>
        <li>match()函数用来查找字符串中特定的字符，并且如果找到的话，则返回这个字符。</li>
        <li>replace() 方法在字符串中用某些字符替换另一些字符。</li>
        <li>字符串大小写转换使用函数 toUpperCase() / toLowerCase()</li>
        <li>字符串使用split()函数转为数组:</li>
      </ul>
    </el-card>
    <el-tag>数组对象的作用是：使用单独的变量名来存储一系列的值。</el-tag>
    <br />
    <el-tag>数组对象是使用单独的变量名来存储一系列的值。</el-tag>
    <el-alert :closable="false" title="JavaScript Window - 浏览器对象模型(BOM)"></el-alert>
    <el-card>
      <el-tag>有三种方法能够确定浏览器窗口的尺寸。</el-tag>
      <el-alert
        :closable="false"
        title="对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari"
      ></el-alert>
      <ol>
        <li>window.innerHeight - 浏览器窗口的内部高度(包括滚动条)</li>
        <li>window.innerWidth - 浏览器窗口的内部宽度(包括滚动条)</li>
      </ol>
      <el-alert :closable="false" title="对于 Internet Explorer 8、7、6、5："></el-alert>
      <ol>
        <li>document.documentElement.clientHeight</li>
        <li>document.documentElement.clientWidth</li>
      </ol>
      <el-alert :closable="false" title="或者"></el-alert>
      <ol>
        <li>document.body.clientHeight</li>
        <li>document.body.clientWidth</li>
      </ol>
      <el-tag type="danger">实用的 JavaScript 方案（涵盖所有浏览器）：</el-tag>
      <br />
      <code>var w=window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;</code>
      <br />
      <code>
        var h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      </code>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "JsBaseHigher1",
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
    console.log(window.location);
  }
};
</script>
