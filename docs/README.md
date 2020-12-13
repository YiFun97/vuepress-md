# Button 按钮
常用的操作按钮
## 基础用法
基础的按钮用法
<!-- 两种编写文档的方式
1.不带js的代码可直接在markdown中用vue语法写组件
1.复杂的代码需要在componets目录下写一个vue组件，然后在markdown中引入 -->

### 示例展示
<!-- 第一种方式： -->
<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<!-- 第二种方式 -->
<button-demo /> 



###  示例代码如下
```
<template>
  <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
</template>
```


