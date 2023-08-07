---
# 当前页面内容标题
title: HTML/CSS收官
# 当前页面图标
icon: code
# 分类
category:
- 渡一大师课
- 前端
# 标签
tag:
- 渡一大师课
- 前端
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: true
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---
## 补充重要知识点

### 防脱发神器

![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230717125748.png)
意思就是加上这个，可以了。
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230717125842.png)
上面一个简单的例子。
只要改成border-box。我们就设置的就是包括边距，总共的了。这样是比较符合我们的自觉地的。

### 颜色的alpha通道

![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230717134149.png)
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230717134158.png)
那么他和这个
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230717134616.png)
opacity有什么区别呢，
其实显而易见，就是opacity是这个item这个盒子里面所的东西，都是透明的，但是rgba只是让这个背景颜色进行了透明。

### 尺寸的百分比

![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230717140757.png)

### 最大最小宽高

![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230717141916.png)

## 表单进阶-HTML

首先要说的第一点就是，在input输入框上，最好加一个div

```html
<form class="container">  
    <h1>用户注册</h1>  
  
    <div class="form-item">  
        <input type="text" />  
    </div>  
</form>
```

像这样一样的。
第二个是提示性文字
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230718183110.png)
叫做placeholder这个属性
以及maxlength="11"，代表最大的长度是11。
之后是验证码区域

```html
<div class="form-item">  
    <input type="text" placeholder="请填写验证码">  
    <button>请输入验证码</button>  
</div>
```

这个按钮用button是 比较好的。而不是用input的submit属性。因为button里面可以写的东西比较多，并且比较宽泛。但是我们会发现，按钮点击后，就直接会清空输入框的所有信息。我们这里不应该是一个提交按钮。
其实很简单
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230718183517.png)
我们把type给他button就可以了，这样她就变成了一个普通的按钮。
之后看下一个区域密码区域。这个是非常的简单的

```html
<div class="form-item">  
    <input type="password" placeholder="请输入密码">  
</div>  
<div class="form-item">  
    <input type="password" placeholder="请确认要输入的密码">  
</div>
```

之后我们来看一个多选的下拉列表框
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230718183932.png)

```html
<div class="form-item">  
    <select multiple="multiple">  
        <option>爱好1</option>  
        <option>爱好2</option>  
        <option>爱好3</option>  
        <option>爱好4</option>  
        <option>爱好5</option>  
        <option>爱好6</option>  
        <option>爱好7</option>  
        <option>爱好8</option>  
        <option>爱好9</option>  
        <option>爱好10</option>  
    </select>  
</div>
```

这个就是一个多选框的一个属性multiple，当然这个不写后面的那个= 也可以直接写一个multiple。就代表布尔属性里面的true
之后是可以选性别的选项

```html
<div class="form-item">  
    <div class="title">性别</div>  
    <div>  
        <input type="radio" name="sex" checked>  
        </input>  
        <span>男</span>  
  
        <input type="radio" name="sex">  
        </input>  
        <span>女</span>  
    </div>  
</div>
```

这里需要说明的就是，只有他们的name属性是同一个的时候，他们才是互斥的，只能选择一个。
之后我们如何设置，点击文字也能选中呢。
这个时候就要用到lable这个标签
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230718184856.png)
首先是可以通过给lable的for 指向id的。
当然还有一个自动关联的做法，就是把他们都放到lable的标签内。
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230718185030.png)
这样
之后看下一个区域。一个多行文本

```html
<div class="form-item">  
    <textarea placeholder="请输入个人简介"></textarea>  
</div>
```

之后下一个区域复选框

```html
<div class="form-item">  
    <lable>  
        <input type="checkbox">  
        <span>同意</span>  
    </lable>  
</div>
```

很简单这里就不说了，最后是俩个按钮

```html
<div class="form-item">  
    <button>立即注册</button>  
    <button type="reset">重置按钮</button>
</div>
```

这里的button都是一个简单的button。
这个重置按钮就是type=reset

## 表单进阶-css

写css第一步

```css
* {  
    margin: 0;  
    padding: 0;  
    box-sizing: border-box;  
}
```

就是写这些东西。
之后写container区域

```css
.container{  
    background: white;  
    width: 400px;  
    margin: 30px auto;  
    border-radius: 10px;  
    padding: 30px;  
}
```

这里没什么好说的。margin 0 auto就代表着页面居中
![](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308071416765.png)
接下来是h1元素

```css
.container h1{  
    text-align: center;  
}
```

一个简单的文字居中。

之后我们看每一个表单之间，是有一个距离的。

```css
.form-item{  
    margin-bottom: 10px;  
}
```

这个也是很简单的，用一个margin-bottom
之后我们来看文本框等的样式。
我们首先用搜索来对文本框进行统一样式的添加
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230718190553.png)

之后就方便操作了，直接操作txt就可以了。

```css
/*文本框*/  
.txt{  
    /*外边框 点击后的颜色*/  
    outline: none;  
    border: 1px solid ##ccc;  
    width: 100%;  
    height: 40px;  
    border-radius: 5px;  
    font-size: 14px;  
    /*调整文字也可以写成*/  
    /*text-indent: 10px; 这个是首行缩进，不经常用*/  
    padding: 0 10px;  
}
```

![](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308071417872.png)
之后我们来看点击后，也就是聚焦的情况下。

```css
/*聚焦的样式*/  
.txt:focus{  
    border-color:##5f8be8;  
}
```

这个就是用一个伪元素进行聚焦的。
之后我们单独设置这个复选框

```css
/*单独设置特殊情况这里就代表既是txt样式，又是select*/  
select.txt {  
    height: 100px;  
    padding: 10px;  
}
```

之后我们同样的方法设置个人简介

```css
textarea.txt{  
    height: 100px;  
    padding: 10px;  
    /*设置多行文本框是否可以被用户改变尺寸*/  
    resize: none;  
}
```

之后来设置按钮

```css
/*按钮的统一样式*/  
button{  
    height: 40px;  
    width: 150px;  
    border: none;  
    outline: none;  
    background: ##5f8be8;  
    color: ##fff;  
    font-size: 14px;  
    border-radius: 5px;  
    /*鼠标移动上去变成小手*/  
    cursor: pointer;  
}  
button:hover{  
    background: ##759ae9;  
}
```

接着我们要考虑一个情况，就是比如发送验证码，是我们再填了手机号后才能进行提交。怎么样能做到不能点击呢![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230718192008.png)
这个使用disabled。这个是需要js来进行实现的。
但是我们写css的时候，我们需要考虑再禁用状态下的样式的。

```css
/*选中禁用状态的按钮*/  
button:disabled{  
    background: ##9bd7f0;  
    cursor: not-allowed;  
}
```

这个not-allowed就是一个禁止的圆圈。
之后我们来看处理浮动

```css
/*统一处理浮动*/  
.left{  
    float: left;  
}  
.right{  
    float: right;  
}
```

当我们哪一个地方需要浮动的时候，我们进行一个应用就可以了。
之后还有一个处理浮动造成的高度坍塌的。
这个的解决方法有一个overflow:hidden。但是这个不是最完美的解决方案。最完美的解决方案就是在他的后面再添加一个元素，之后给他设置上clear:both

```css
.clearfix:after{  
    content: "";  
    display: block;  
    clear: both;  
}
```

之后我们来看另外一个问题
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230719134242.png)
就是这两个是没有对齐的。
这是两个行级元素。
这个时候随便找一个。用一个vertical-align调像素

```css
.policy span{  
    vertical-align: 2px;  
}
```

之后还有一个就是单选和多选的选中情况。
就是没有选中就淡一些这个效果。
这里介绍一个兄弟元素的选择方法。

```css
lable input~span{  
    }
```

就是这样，如果后面是+那么就是只选择后面满足条件的一个。~就是多个

```css
/*单选多选*/  
  
lable input~span{  
    color: ##aaa;  
}  
  
/*单选或者多选被选中的情况*/  
label input:checked~span{  
    color: ##333;  
}
```

就是这样的。
至此表单的就算是可以了。下面的全部的源码

```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>用户注册</title>  
    <link rel="stylesheet" href="index.css">  
</head>  
<body>  
<form class="container">  
    <h1>用户注册</h1>  
  
    <div class="form-item">  
        <input class="txt" type="text" maxlength="11" placeholder="请输入11位手机号"/>  
    </div>  
    <div class="form-item clearfix captcha">  
        <input class="txt left" type="text" placeholder="请填写验证码">  
        <button type="button" class="right">请输入验证码</button>  
    </div>  
  
    <div class="form-item">  
        <input class="txt" type="password" placeholder="请输入密码">  
    </div>  
    <div class="form-item">  
        <input class="txt" type="password" placeholder="请确认要输入的密码">  
    </div>  
  
    <div class="form-item">  
        <select multiple="multiple" class="txt">  
            <option>爱好1</option>  
            <option>爱好2</option>  
            <option>爱好3</option>  
            <option>爱好4</option>  
            <option>爱好5</option>  
            <option>爱好6</option>  
            <option>爱好7</option>  
            <option>爱好8</option>  
            <option>爱好9</option>  
            <option>爱好10</option>  
        </select>  
    </div>  
  
  
    <div class="form-item clearfix">  
        <div class="title left">性别</div>  
        <div class="left">  
            <input type="radio" name="sex" checked id="male">  
  
            <label for="male">男</label>  
  
            <label>  
                <input type="radio" name="sex" id="">  
                <span>女</span>  
            </label>  
        </div>  
    </div>  
  
    <div class="form-item">  
        <textarea class="txt" placeholder="请输入个人简介"></textarea>  
    </div>  
  
    <div class="form-item policy">  
        <lable>  
            <input  type="checkbox">  
            <span>同意</span>  
        </lable>  
    </div>  
  
    <div class="form-item">  
        <button disabled>立即注册</button>  
        <button type="reset">重置按钮</button>  
    </div>  
  
  
</form>  
</body>  
</html>
```

```css
* {  
    margin: 0;  
    padding: 0;  
    box-sizing: border-box;  
}  
  
html {  
    background: rgb(30, 31, 34);  
    color: ##333;  
}  
  
.container {  
    background: white;  
    width: 400px;  
    margin: 30px auto;  
    border-radius: 10px;  
    padding: 30px;  
}  
  
.container h1 {  
    text-align: center;  
    margin-bottom: 30px;  
}  
  
.form-item {  
    margin-bottom: 10px;  
}  
  
/*文本框*/  
.txt {  
    /*外边框 点击后的颜色*/  
    outline: none;  
    border: 1px solid ##ccc;  
    width: 100%;  
    height: 40px;  
    border-radius: 5px;  
    font-size: 14px;  
    /*调整文字也可以写成*/  
    /*text-indent: 10px; 这个是首行缩进，不经常用*/  
    padding: 0 10px;  
}  
  
/*聚焦的样式*/  
.txt:focus {  
    border-color: ##5f8be8;  
}  
  
/*单独设置特殊情况这里就代表既是txt样式，又是select*/  
select.txt {  
    height: 100px;  
    padding: 10px;  
}  
textarea.txt{  
    height: 100px;  
    padding: 10px;  
    /*设置多行文本框是否可以被用户改变尺寸*/  
    resize: none;  
}  
  
/*按钮的统一样式*/  
button{  
    height: 40px;  
    width: 150px;  
    border: none;  
    outline: none;  
    background: ##5f8be8;  
    color: ##fff;  
    font-size: 14px;  
    border-radius: 5px;  
    /*鼠标移动上去变成小手*/  
    cursor: pointer;  
}  
button:hover{  
    background: ##759ae9;  
}  
/*选中禁用状态的按钮*/  
button:disabled{  
    background: ##9bd7f0;  
    cursor: not-allowed;  
}  
  
/*统一处理浮动*/  
.left{  
    float: left;  
}  
.right{  
    float: right;  
}  
.clearfix::after{  
    content: "";  
    display: block;  
    clear: both;  
}  
.captcha .txt{  
    width: 170px;  
}  
.title{  
    margin-right: 10px;  
}  
.policy{  
    font-size: 12px;  
}  
.policy span{  
    vertical-align: 2px;  
}  
  
label{  
    cursor: pointer;  
}  
/*单选多选*/  
  
lable input~span{  
    color: ##aaa;  
}  
  
/*单选或者多选被选中的情况*/  
label input:checked~span{  
    color: ##333;  
}  
  
.txt:focus::placeholder{  
    color: red;  
}
```

## 精灵图

这个单词叫做sprite

```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
  <style>  
    .item{  
      width: 85px;  
      height: 60px;  
      outline: 1px solid;  
      background: url("sprite.jpg")  
      no-repeat -280px -240px;  
    ;    }  
  </style>  
</head>  
<body>  
  <div class="item"></div>  
</body>  
</html>
```

看一个案例，大概就是这样的。
我们通过对position来进行设置，让![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230719140630.png)
图像达到一个这样的效果，就可以了。
通过改变div的宽高。来只选择这一张图片。
就是这么的简单的。

## 绝对定位


### 什么时候使用绝对定位

下面三个条件满足任何一个时，使用绝对定位：

1. 元素出现在一个天马行空的位置

2. 元素是否存在，不影响其他元素的排列

3. 单个元素在某个区域内水平垂直居中

### fixed和absolute的区别

fixed是绝对定位的一种特殊情况，它们的参考系不一样

- absolute参考有定位的父元素

- fixed参考视口(viewport)

### 案例1

![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230720140402.png)
把一个图片放到这个中间。
这个我们一般用的方法就是用一个div把这个视口给盖住。这个div就叫做蒙层。之后我们的登录窗口在最中间


```html
<img src="./assets/page.jpg" alt="" class="page">  
  
<div class="model">  
<!--    <img src="./assets/login.jpg" alt="" class="login">-->  
</div>  
</body>
```

```css
.model{  
    position: fixed;  
    background: rgba(0,0,0,.5);  
    left: 0;  
    top: 0;  
    width: 100%;  
    height: 100%;  
}
```

![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230720140742.png)
这样就可以了。
之后我们的登录元素

```css
.login{  
    position: absolute;  
    /*绝对定位居中*/  
    width: 400px;  
    height: 200px;  
    left: 50%;  
    top: 50%;  
    /*跑自身宽度的一半和自身高度的一半*/  
    margin-left: -200px;  
    margin-top: -100px;  
}
```

进行这样的一个设置，就可以了。
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230720141350.png)
可以发现他就是在正中间了。
之后我们来做另外一个

```html
<div class="cat">  
    <img src="./assets/r_code.jpg" alt="">  
</div>
```

```css
.cat{  
    position: fixed;  
    width: 165px;  
    height: 250px;  
    background: url(assets/r_dj.png) no-repeat;  
    right: 0;  
    /*垂直居中*/  
    top: 50%;  
    margin-top: -125px;  
    padding-top: 145px;  
    /*图片靠右*/  
    text-align: right;  
}  
.Rcode{  
    width: 100px;  
    height: 100px;  
}
```

这里用的也是和上一个差不多的思想。之后就是text-aligh这个属性。
最后说一下覆盖的问题![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230720142136.png)
他们俩个谁覆盖谁，就用z-index，就可以了。
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230720142200.png)
就是应对类似这种情况。
这个只对定位元素有用。

### 案例2

![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230720154920.png)
是一个这样的效果。
首先是html的一些基本框架

```html
<div class="item">  
  <a href="">  
    <img src="./assets/cover.png" alt="">  
  </a>  
  <div class="aside">  
    <div class="number">  
      118万  
    </div>  
    <div class="date">  
      2021-11-23  
    </div>  
        <div class="model">  
      <a href="" class="play"></a>  
    </div>  
  </div>  
</div>
```

之后开始书写css代码。

```css
.item{  
    width: 230px;  
    height: 140px;  
    margin: 30px auto;  
}  
.item img{  
    width: 230px;  
    height: 140px;  
}
```

首先是图片的一个
之后我们的aside进行绝对定位

```css
.item .aside{  
    position: absolute;  
    background: rgba(0,0,0,.5);  
    width: 100%;  
    height: 20px;  
    font-size: 12px;  
    bottom: 0;  
    left: 0;  
    line-height: 20px;  
    color: white;  
    padding: 0 10px;  
}  
.aside .number{  
    float: left;  
}  
.aside .date{  
    float: right;  
}
```

这个也是很简单的。
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230720155512.png)
之后让他一个左浮动，一个右浮动，就可以让她左右靠拢了。
之后我们做118万旁边的那个按钮

```css
.number::before{  
    content: '';  
    display: inline-block;  
    width: 14px;  
    height: 14px;  
    background: url(assets/icons.png) no-repeat -255px -63px;  
    vertical-align:-3px;  
    margin-right: 3px;  
}
```

这里需要主要的是before元素要变成行内块元素，不然她默认是一个行内元素。
之后中间的按钮

```css
.play{  
    position: absolute;  
    width: 42px;  
    height: 42px;  
    background: url("assets/icons.png") no-repeat -191px -63px;  
    left: 50%;  
    top: 50%;  
    margin-left: -21px;  
    margin-top: -21px;  
}
```

进行简单的调整就可以了。

## 属性值的计算过程

![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230720160740.png)
比如说看这行代码，可以发现他是红色而不是蓝色。
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230720161324.png)
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230720202626.png)
他主要分为四个阶段
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230720202643.png)
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230720205922.png)

比较重要性就是作者写的覆盖浏览器默认
比较特殊性就是看的权重
比较源次序就是代码靠后的覆盖代码靠前的。
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230720210255.png)
![Pasted image 20230721150418.png]
这里需要注意的是可以继承的进行继承，例如这个的背景就是无法进行继承的
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230721150512.png)
这里就进行之前情况的一个解析。
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230721150629.png)
我们来进行一个分析。
p就是一个继承。
之后我们来看a元素。
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230721150904.png)
可以发现他在第一步就已经有颜色了。
所以不需要后面的步骤了。
我们要是不想要这样，让元素和p元素是一个颜色。
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230721150957.png)
那么我们就写一个color:inherit就可以了。
这个就是让他强制继承了。

## 扩展知识

### 伪类选择器

> css伪类选择器大全：
>
> [https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

| 伪类               | 含义                                                         |
| ------------------ | ------------------------------------------------------------ |
| :link              | 选中未访问过的超链接                                         |
| :visited           | 选中已访问过的超链接                                         |
| :hover             | 选中鼠标移入的元素                                           |
| :active            | 选中鼠标按下的元素                                           |
| :focus             | 选中聚焦的表单元素                                           |
| :disabled          | 选中被禁用的表单元素                                         |
| :checked           | 选中被选中的表单元素                                         |
| :first-child       | 选中第一个子元素                                             |
| :last-child        | 选中最后一个子元素                                           |
| :nth-child(an+b)   | 选中第「an+b」个子元素 a和b是常量，n的值会从0开始依次递增    |
| :first-of-type     | 选中第一个指定类型的子元素                                   |
| :last-of-type      | 选中最后一个指定类型的子元素                                 |
| :nth-of-type(an+b) | 选中第「an+b」个指定类型的子元素 a和b是常量，n的值会从0开始依次递增 |

之后我们再做的时候，会出现一些问题
![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Pasted%20image%2020230721153711.png)
我们只要遵循这个，就可以达到一个好的效果。

### contenteditable属性

该属性是一个布尔属性，可以设置到任何元素上，它可以让该元素变为可编辑的状态

在实际开发中，通常用于制作富文本框

![image-20211124171230964](https://cdn.jsdelivr.net/gh/xiaou61/pictures/20211124171231.png)

### table 元素

table元素用于表达一个表格，受CSS3的影响，现在已经很少使用了，基本上只有后台的一些前端在用。因为这个渲染的速度回造成很大的影响。
