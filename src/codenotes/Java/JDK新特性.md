---
# 当前页面内容标题
title: JDK9~JDK17新特性
# 当前页面图标
icon: code
# 分类
category:
- java
# 标签
tag:
- java
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: true
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---



### jdk9新特性-模块化开发

我们首先来看1.8以前的一个结构。

![image-20230831205042194](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822784.png)

到了jdk9后，外面又添加了一个结构

![image-20230831205100992](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822889.png)

通过这层，我们可以对包进行配置，例如我们写了一个工具类，jar包。有些类需要暴露出去，有的是需要内部用的，以前很难做到，现在我们通过模块化就可以来实现这个功能。

下面我们来举个例子，例如我们想要在模块b里面引入模块a的Test1.我们可以发现，idea里面有个增加对模块的依赖。然后进行导入就可以了。这个是idea自带的功能，和我们这里说的**没有关系**



![image-20230831211750667](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822432.png)

这个实质就是**在pom里面进行操作了**可以看下面的图，我们可以看到在pom文件中



![image-20230831212035921](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822884.png)

我们来看java9中的模块化是怎么样的

![image-20230831212752310](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822989.png)

我们再Test2中右击创建，可以发现他是自动的创建到了根目录下

![image-20230831212834822](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822782.png)

之后我们再另外一个模块也创建。

![image-20230831212941908](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822323.png)

发现之前可以用的东西已经报错了。

之后我们用idae的自动更正

![image-20230831213003691](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822421.png)

这个时候我们发现**被调用方**：

![image-20230831213035825](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822319.png)

这个对应的就是包路径

之后我们一一用这个方法进行纠错。

我们发现我们的调用方

![image-20230831213147439](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822221.png)

有了这样的。

也就是说目前，被调用方：

```java
module testa {
    exports com.xiaou.testa.test1;
    exports com.xiaou.testa.test2;
}
```

调用方：

```java
module testb {
    requires testa;
}
```

模块话说白了就是这样的。

被调用方可以用exports加包名，把想要被调用的包给exports出去

requires也是一样的。如果你需要不同的模块，就继续进行添加就可以了。下面我们来进行一个总结

- 使用moudule-info.java来声明一个模块，一个模块只能有一个文件，且在顶层包同目录下
- 使用exports来声明可以被外部引用的包可以有多个exports语句
- 使用requires来声明依赖的外部的模块可以有多个requires语句

这个的使用不是很多，我们可以在一些jar包中发现

![image-20230831213921386](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822172.png)

### jdk10新特性-var局部变量推导

- 必须能推导出实际类型
- 只能用于局部变量

例如我们之前要去new一个变量

```java
Test1 test1 = new Test1();
```

我们都是这样写的

```java
var test11 = new Test1();
```

我们使用var就可以这样写，这里注意的是必须要是一个能推导出实际类型的

例如下面的这个初始化就是错误的

![image-20230831214217251](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822627.png)

需要注意的是null也是错误的

![image-20230831214301207](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822239.png)

下面我们来看只能用于局部变量。

![image-20230831214331686](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822549.png)

我们可以发现，这个是无法解析的。

这个就是一个看个人习惯的，我反正不是那么推荐用var

很关键的一点。这个不利于共同的开发性。同时我也认为，强语言性也是java的优秀的特点之一。

### jdk11新特性-单文件程序

例如有这样的一个程序

```java
package com.xiaou.testa;


public class TestB {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

我们平常用命令行要是运行的话，是需要先去javac去编译的。

![image-20230831214809081](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822770.png)

这个也是一个基本上用不到的内容。就不过多的讲解

### jdk11新特性-shebang脚本



- #！符号叫做shebang(shell脚本的开头)
- #!/bin/bash(以此开头的文件，在执行的时实际调用/bin/bash程序来执行)

例如这样，我们复制一下刚才的那个

![image-20230831215119200](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822776.png)

去掉他的.java

把她改成

```java
#!C:\Program Files\Java\jdk-17.0.5\bin\java --source 11

public class TestB {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}

```



这个样子，之后我们来运行这个脚本

因为这个是linux所支持的东西，所以说windows的cmd和powershell是无法运行的，这里用到的是git bash来进行模拟linux上的操作可以看到就执行出来了

![image-20230831222207103](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822773.png)

### jdk14新特性-文本块

平时我们写的字符串都是单行的，文本块就是一个多行的文本快。例如json/html/sql等，都需要用到**多行字符串**。

```json
{
    name:"test"
}
```

例如这样的json。我们再之前。

![image-20230831222520632](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822573.png)

可以发现idae是自动给进行换行等操作的。

在jdk14之后

![image-20230901075631687](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822673.png)

就可以用""" """里面来进行书写了

### jdk14新特性-instanceof增强

一般情况下我们要对一个不确定的类型进行赋值的时候，一般就是这样进行书写。先判断是否属于某个类型，之后再进行强转赋值

```java
public static void main(String[] args) {
    Object a="Hello";
    if (a instanceof  String){
        String b= (String) a;
        System.out.println(b);
    }
}
```

增强之后

```java
if (a instanceof String b){
    System.out.println(b);
}
```

这个就直接相当于把a赋给b

### jdk16新特性-record类

可以看到下面是我们平常写一个dto层的数据的方法

```java
package com.xiaou.testa;

public class TestDto {
    private String name;
    private String password;

    public TestDto(String name, String password) {
        this.name = name;
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
```

![image-20230901080558665](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822184.png)

我们创建一个record类。只要把想要的参数写在括号里面，就可以了。其他的都不用管了、

```java
    TestRecord testRecord = new TestRecord("1", "22");
    //只能获取值，不能获取
    System.out.println(testRecord.name());
    System.out.println(testRecord.password());
}
```

需要注意的就是只能获取值，不能获取。

### jdk17新特性-sealed类

- 痛点：类的继承很难管理，使用sealed可以来显示的管理
- 父类如果是sealed类，则必须至少有一个子类
- sealed类的子类，必须是fina，sealed，non-sealed之一



![image-20230901081208196](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822825.png)

我们看到报错。![image-20230901081224485](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822983.png)

之后我们创建一个新的类

![image-20230901081253325](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822984.png)

之后我们对父类进行一个显示管理

```java
public sealed class Jiawa1 permits jiawa2 {
}
```

之后我们发现jiawa2有一个报错

![image-20230901081320598](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309010822697.png)



```java
public final class jiawa2 extends Jiawa1{
}
```

我们发现这样就可以了

之后如果我们想要jiawa3继续继承jiawa2

```java
public sealed class jiawa2 extends Jiawa1 permits jiawa3 {
}
```

```java
public non-sealed class jiawa3 extends jiawa2{
}
```

这样就可以了

当然也可以写成non-sealed。这样我们的jiawa4去继承jiawa3的时候

```java
public class jiawa4 extends jiawa3 {
}
```

就可以直接普通的进行继承了。

### jdk17新特性-switch增强

> 这个是17的预览版有的，正式的17是没有的

以前我们想要判断类型的时候

```java
 Object a="Hello";
        if (a instanceof String b){
            System.out.println(b);
        }
        if (a instanceof Integer b){
            System.out.println(b);
        }
        if (a instanceof Long b){
            System.out.println(b);
        }
```

需要很多的if

现在有了switch增强后

```java
switch (a){
    case String b -> System.out.println(b);
    case Integer b -> System.out.println(b);
    case Long b -> System.out.println(b);
    default -> throw new IllegalStateException("Unexpected value: " + a);
}
```

这样进行书写就可以了。