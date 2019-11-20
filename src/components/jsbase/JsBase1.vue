<template>
  <div>
    <h1 style="text-algin:center;">JavaScript 代码规范</h1>
    <el-tag>变量名</el-tag>
    <el-alert :closable="false" title="变量名推荐使用小驼峰（camelCase）：🍐=> firstName <=🌰"></el-alert>
    <el-tag>代码缩进</el-tag>
    <el-alert :closable="false" title="通常使用 4或者2 个空格符号来缩进代码块："></el-alert>
    <el-alert
      :closable="false"
      effect="dark"
      type="error"
      title="不推荐使用 TAB 键来缩进，因为不同编辑器 TAB 键的解析不一样。"
    ></el-alert>
    <el-tag>空格与运算符</el-tag>
    <el-alert :closable="false" title="通常运算符 ( = + - * / ) 前后需要添加空格"></el-alert>
    <el-tag>语句规则</el-tag>
    <el-card>
      <el-alert :closable="false" title="简单语句的通用规则:"></el-alert>
      <ul>
        <li>一条语句通常以分号作为结束符。</li>
      </ul>
      <el-alert :closable="false" title="复杂语句的通用规则:"></el-alert>
      <ul>
        <li>将左花括号放在第一行的结尾。</li>
        <li>左花括号前添加一空格。</li>
        <li>将右花括号独立放在一行。</li>
        <li>不要以分号结束一个复杂的声明。</li>
      </ul>
    </el-card>

    <el-tag>对象规则</el-tag>
    <el-card>
      <el-alert :closable="false" title="对象定义的规则:"></el-alert>
      <ul>
        <li>将左花括号与类名放在同一行。</li>
        <li>冒号与属性值间有个空格。</li>
        <li>字符串使用双引号，数字不需要。</li>
        <li>最后一个属性-值对后面不要添加逗号。</li>
        <li>将右花括号独立放在一行，并以分号作为结束符号。</li>
      </ul>
    </el-card>
    <el-tag>语句规则</el-tag>
    <el-alert :closable="false" title="a"></el-alert>
  </div>
</template>

<script>
export default {
  name: "JsBase1"
};
</script>

<style>
</style>
