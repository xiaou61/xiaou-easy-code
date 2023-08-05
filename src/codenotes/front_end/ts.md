---
# 当前页面内容标题
title: 一文搞懂TypeScript
# 当前页面图标
icon: code
# 分类
category:
- Ts
- 前端
# 标签
tag:
- Ts
- 前端
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: true
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---


## TypeScript学习第一章:TypeScript初识

### 1.1 TypeScript学习初见

**TypeScript**(TS)是由微软Microsoft由2012年推出的**自由**和开源的编程语言, 目前主流的三大框架React 、Vue 和 Angular这三大主流框架再加上最新的鸿蒙3.0都可以用TS进行开发.

可以说 TS 是 JS 的**超集**, 是建立在JavaScript上的语言. TypeScript把其他语言的一些精妙的语法, 带入到JavaScript中, 让JS达到了一个新的高度。

可以在TS中使用JS以外的扩展语法, 同时可以结局TS对面向对象和静态类型的良好支持, 可以让我们编写更健壮、更可维护的**大型项目**。

### 1.2 TypeScript介绍

因为TypeScript是JavaScript的超集, 所以要介绍TS, 不得不提一下JS, JS从在引入编程社区20多年以来, 已经成了有史以来应用最广泛的跨平台语言之一了, 从一开始为网页中添加一些微不足道的、交互性的小型的脚本语言发展到现在各种规模的前端和后端应用程序的首选语言了.

虽然我们用JS语言编写程序的大小、范围和复杂性呈指数级的增长, 但是**JS语言表达不同代码单元之间的关系和能力却很弱**, 使得JS成了一项难以大规模管理的任务, 而且也很难解决程序员经常出现的错误: **类型错误**.

而TS语言可以很好的解决这个错误, 他的目标是成为JS程序的**静态类型检查器**, 可以在代码运行之前进行检查, 也就是静态编译, 并且呢, 可以确保我们程序的类型正确(即进行类型检查).

TS添加了**可选的静态类型**和**基于类的面向对象编程**等等, 是JS的语言扩展, 不是JS的替代品, 会让JS前进的步伐更坚实、更遥远.

### 1.3 JS 、TS 和 ES之间的关系

![image-20220305193623661](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927536.png)

**ES6**又称为**ECMAScript 2015**, TypeScript 是 JS 的超集, 他包含Javascript的所有元素, 能运行Javascript代码, 并扩展了JS语法, 并添加了**静态类型** **类** **模块** **接口** **类型注解**等等方面的功能, 更加易于**大项目**的开发.

这张图表示TS不仅包含了JS和ES的最新内容, 还扩展了新的功能.

总的来说, ECMAScript是JS的标准, TS是JS的超集.

### 1.4 TS的竞争者有哪些?

#### 1. ESLint

![image-20220305195615323](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927596.png)

#### 2. TSlint

![image-20220305201315681](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927724.png)

1 和 2 都是和TypeScript一样来突出代码中可能出现的错误, 至少i没有为检查过程添加新的语法, 但是这两者都不打算最为IDE集成的工具来运行, 这两个的存在可以是TS做更少的检查, 但是这些检查并不适合于所有的代码库。

#### 3. CoffeeScript

![image-20220305204137006](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927791.png)

CoffeeScript是想改进JS语言, 但是现在用的人少了, 因为他又成为了JS的标准, 属于是打不过JS了。

#### 4.Flow

Vue2的源码的类型检查工具就是flow, 不过Vue3已经开始使用TS做类型检查了.

Flow更悲观的判断类型, 而TS更加乐观.

Flow是为了维护Facebook的代码库而建立的, 而TS是作为一种独立的语言而建立的, 其内部有独立的环境, 可以自由**专注于工具的开发**和**整个生态系统的维护**

## TypeScript学习第二章:为什么使用TypeScript?

### 2.1 发现问题

JS中每个值都有一组行为, 我们可以通过运行不同的操作来观察:

```js
// 在 'message' 上访问属性方法 'toLowerCase', 并调用它
message.toLowerCase();
// 调用 'message'
message();
```

我们尝试直接调用message, 但是假设我们不知道message, 我们就无法可靠的说出尝试运行任何的这些代码会得到什么结果, 每个操作的结果完全取决于我们最初给message的赋值. 我们编译代码的时候**真的可以调用message()么**, 也**不一定有toLowerCase()这个方法**, 而且也**不知道他们的返回值是什么.**

通常我们在编写js的时候需要对上面所述的细节牢记在心, 才能编写正确的代码。

假设我们知道了message 是什么，如下所示，但是第三行就会报错。

```js
const message = 'Hello World'
message.toLowerCase(); // 输出hello world
message(); // TypeError: message is not a function
```

如果我们能避免这样的错误, 就完美了, 当我们运行我们的代码的时候, 选择做什么的方式, 是通过确定值的类型, 来确定他具有什么样的行为和功能的, `TypeError` 就暗指字符串是不能作为函数来调用的. 对于某些值, 比如`string`和`number`, 我们可以使用typeof来识别他们的类型.

但是对于像函数之类的其他的东西, 没有相应的运行时机制, 比如下面的代码, 运行是有条件的, 也就是说这个x是必须具有flip这个方法的, js只能在运行一下代码时才能知道这个x是提供了什么的, 我们如果能够使用静态类型系统, 在运行代码之前预测预期的代码,问题就解决了.

```js
function fn(x) {
	return x.flip()
}
```

### 2.2 静态类型检查

```js
const message = 'hello'
message() // TypeError
```

上述这段代码会引起TypeError, 理想的情况下, 我们希望有一个工具可以在我们代码运行之前发现这些错误, TS就可以实现这些功能. 静态类型系统就描述了当前我们运行程序的时候, 值得形状和行为, 像TS这样的类型检查器, 会告诉我们什么时候代码会出现问题.

![image-20220306105518308](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927902.png)

### 2.3 非异常故障

JS 在运行的时候会告诉我们他认为某些东西是没有意义的情况, 因为ECMA规范明确说明了JS在遇到某些意外情况下应该是如何表现得, 比如如下代码:

```js
const user = {
	name: "小千",
	age:26,
};
 
user.location; // 返回undefined, 理应报错, 因为根本没有location这个属性
```

但是静态类型系统要求必须对调用哪些代码做系统的标记, 如果是在TS运行这段代码, 就会出现location未定义的错误, 如下图所示:

![image-20220306112014184](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927141.png)

TS可以在开发过程中捕获很多类似于合法的错误, 比如说错别字, 未调用函数, 基本的逻辑错误等等:

**拼写错误**: 属性toLocaeleLowerCase在String类型中不存在, 你找的是否是toLocaleLowerCase属性?

![image-20220306112736191](https://img2022.cnblogs.com/blog/2550942/202204/2550942-20220403120412179-1118863773.png)

**未调用的函数检查**: 运算符号 < 不能用在一个 '() => number' 和 number数字之间.

![image-20220306113634410](https://img2022.cnblogs.com/blog/2550942/202204/2550942-20220403120411975-1644199148.png)

**逻辑问题**: value !== 'a' 和 value === 'b'逻辑重叠.

![image-20220306114014604](https://img2022.cnblogs.com/blog/2550942/202204/2550942-20220403120411713-788652177.png)

### 2.4 使用工具

1. 安装VSCode
2. 安装Node.js:使用命令 `node -v`来检查nodejs版本
3. 安装TypeScript编译器: `npm i typescript -g`

然后我们要编译我们的TS, 因为TS是不能直接运行的, 我们必须把他编译成JS.

> 在终端中使用cls 或者 clear命令可以清屏

可以使用tsc命令来转换TS 成 JS: 例如 `tsc hello.ts`, 就会生成对应的JS文件.

hello.ts:

```ts
// 你好, 世界
// console.log('Hello World')
 
// 会出现函数实现重复的错误
function greet(person, date) {
    console.log(`Helo ${person}, today is ${date}`)
}
 
greet('xiaoqian','2021/12/04')
 
```

会出现函数实现重复的错误是因为hello.js也有这个greet的函数, 这是跟我们编译环境是矛盾的, 而且还需要我们重新编译ts, 所以我们需要进行优化编译过程.

### 2.5 优化编译

1. 解决TS和JS冲突问题 `tsc --init ## 生成配置文件`
2. 自动编译 `tsc --watch`
3. 发出错误 `tsc --noEmitOnError hello.ts`

TS文件编译成JS文件以后, 当出现函数名或者是变量名相同的时候, 会给我们提示重复定义的问题,可以通过`tsc --init`来生成一个配置文件来解决冲突问题. 先把严格模式strict关闭, 可解决未指定变量类型的问题.

当我们修改TS文件的时候, 我们需要重新的执行编译, 才能拿到最新的结果我们需要自动编译, 可以通过`tsc --watch` 来解决自动编译的问题.

当我们编译完之后, JS还是能正常运行的, 我们可以加一个noEmitOnError的参数来解决, 这样的话如果我们在TS中出现错误就可以让TS不编译成JS文件了.

最终的命令行指令是这样的:

```css
tsc --watch --noEmitOnError
```

### 2.6 显式类型

刚才我们在tsconfig.json里把strict模式关闭了, 如果我们打开, 就会出现未指定变量类型的错误, 如果要解决这个问题, 我们就需要指定显式类型:

什么叫显式类型呢, 就是手工的给变量定义类型, 语法如下:

```tsx
function greet(person: string, date: Date) {
    console.log(`Helo ${person}, today is ${date.toDateString()}.`)
}
```

在TS中, 也不是必须指定变量的数据类型, TS会根据你的变量自动推断数据类型, 如果推断不出来就会报错.

### 2.7 降级编译

我们可以在tsconfig.json 就修改target来更改TS编译目标的代码版本.

```json
{
	"compilerOptions": {
		......
		"target": 'es5',
		......
	}
}
```

默认为es2016, 即es7, 建议以默认值就可以, 目前的浏览器都能兼容

### 2.8 严格模式

不同的用户使用TS在类型检查中希望检查的严格程度是不同的, 有的人喜欢更宽松的验证体验, 从而仅仅验证程序的某些部分, 并且仍然拥有不错的工具.

默认情况下:

```json
{
	"compilerOptions": {
		......,
		"strict": true, /* 严格模式: 启用所有严格的类型检查选项。*/ 
		"noImplicitAny": true, /* 为隐含的'any'类型的表达式和声明启用错误报告。*/
		"strictNullChecks": true, /* 当类型检查时，要考虑'null'和'undefined' */
		......
	}
}
```

一般来说使用TS就是追求的强立即验证, 这些静态检查设置的越严格, 越可能需要更多额外的编程工作, 但是从长远来说是值得的, 它会使代码更加容易维护. 如果可以我们应该始终打开这些类型检查.

启用strictNullChecks可以拦截null 和undefined 的错误, 启用noImplicitAny可以拦截any的错误, 启用strict可以拦截所有的严格类型检查选项, 包括前面两个的.

所以结论就是只需要开启"strict"为true即可, 当我们遇到

## TypeScript学习第三章: 常用类型

### 3.1 基元类型string number 和 boolean

1. string: 字符串, 例子: 'Hello', 'World'.
2. number: 数字, 例子: 42, -100.
3. boolean: 布尔, 例子: true, false.

String Number Boolean 也是合法的, 在TS里专门指一些很少的, 出现在代码里的一些特殊的内置类型, 对于类型我们始终使用小写的string, number 和 boolean.

为了输出方便我们可以在tsconfig.json的rootDir里设置一个目录`"./src"`, 设置outDir为`"./dist"`.

```tsx
let str: string = 'hello typescript'
let num: number = 100
let bool: boolean = true
```

### 3.2 数组

数组的定义方法有两种:

1. type[]
2. Array

Array这种方法又称为泛型, 其中type是任意合法的类型.

```tsx
let arr: number[] = [1, 4, 6 ,8]
// arr = ['a']
let arr2: Array<number> = [1, 2, 3]
arr2 = []
```

值得注意的是, 数组可以被赋值为空数组[], 但是不能被赋值为规定类型以外的数组值.

### 3.3 any

如果**不希望某个特定值导致类型检查错误**, 就可以使用any.

**当一个值是any的时候, 可以访问它的任何属性, 将它分配给任何类型的值, 或者几乎任何其它语法上的东西都是合法的**. 但是运行的时候该报错还是报错, 所以我们不应该经常使用他.

```tsx
let obj: any = {
    x: 0
}
 
obj.foo() // js调用时就会报错
obj()
obj.bar = 100
obj = 'hello'
const n: number = obj
```

### 3.4 变量上的类型解释

```tsx
let myName: string = "Felixlu"
```

采用(冒号:) + (类型string)的方式.

```tsx
let my: string = "Hello World"
// 如果不声明, 会自动推断
let myName = "Bleak" // 将myName推断成string
myName = 100 // 报错, 不能将number分配给string.
```

### 3.5 函数

```tsx
function greet (name: string): void {
	console.log("Hello," + name.toUpperCase() + "!!!")
}
 
const greet2 = (name: string): string =>{
    return "你好," + name
} 
 
greet("Bleak")
console.log(greet2("黯淡"))
```

第一个name: string是参数类型注释, 第二个: void是返回值类型注释.

一般来说不用定义返回值类型, 因为会自动推断.

```tsx
const names = ["xiaoqian", 'xiaoha', 'xiaoxi']
names.forEach(function(s) {
    console.log(s.toUpperCase());
})
 
names.forEach(s => {
    console.log(s.toLowerCase());  
})
```

**匿名函数**与函数声明有点不同, 当一个函数出现在出现在TS可以确定它如何被调用的地方的时候, **这个函数的参数会自动的指定类型**.

### 3.6 对象类型

```tsx
function printCoord(pt: {x: number; y: number}) {
	console.log("坐标的x值是: " + pt.x)
    console.log("坐标的y值是: " + pt.y)
}
 
printCoord({x: 3, y: 7})
```

对于参数类型注释是对象类型的, 对象中属性的分割可以用 **分号;** 或者 **逗号,**

```tsx
function printName(obj: {first: string, last?: string}) {
    if(obj.last === undefined) {
        console.log("名字是:" + obj.first)
    } else {
        console.log("名字是:" + obj.first + obj.last)
    }
    
}
 
printName({
    first: "Mr.",
    last: "Bleak"
})
```

使用?可以指定对象中某个参数可以选择传入或者不传入, 不传入其值就是undefined.

如何在函数体内确定某个带?的参数是否传参了呢?可以使用两种方法

1. ```tsx
   if(obj.last === undefined) {// 未传入时的方法体
           
       } else {// 传入时的方法体
           
       }
   ```

2. ```tsx
   console.log(obj.last?.toUpperCase())
   ```

第二种方式更加优雅, 更推荐使用

### 3.7 联合类型

```tsx
let id: number | string 
```

TS的类型系统允许我们使用多种运算符, 从现有类型中构建新类型union.

联合类型是由两个或多个其他类型组成的类型. 表示可能是这些类型中的任何一种的值, 这些类型中的每一种被称为联合类型的成员.

```tsx
function printId(id: number | string) {
    console.log("当前Id为:" + id)
    // console.log(id.toUpperCase())
    if (typeof id === 'string') {
        console.log(id.toUpperCase())
    } else {
        console.log(id)
    }
}
 
printId(101)
printId('202')
```

如果需要调用一些参数的属性或者方法, 可以使用JS携带的typeof函数来进行判断并分情况执行代码.

```tsx
function welcomePeople(x: string[] | string) {
    if(Array.isArray(x)) { // Array.isArray(x)可以测试x是否是一个数组
        console.log("Hello, " + x.join(' and '))
    } else {
        console.log("Welcome lone traveler " + x)
    }
}
 
 
welcomePeople(["A", "B"])
welcomePeople('A')
```

根据分支来进行操作的函数.

```tsx
// 共享的方法
function getFirstThree(x: number[] | string) {
    return x.slice(0, 3)
}
```

都有的属性和方法, 可以直接使用.

### 3.8 类型别名

```tsx
type Point = {
	x: number
	y: number
} // 对象类型
function printCoord(pt: Point) {
 
}
printCoord({x: 100, y: 200})
 
 
type ID = number | string // 联合类型
function printId(id: ID) {
 
}
 
printId(100)
printId('2333')
 
type UserInputSanitizedString = string // 基元类型
function sanitizedString(str: string): UserInputSanitizedString {
    return str.slice(0, 2)
}
 
let userInput = sanitizedString('hello')
console.log(userInput)
```

type可以用来**定义变量的类型**, 如果是对象, 里面的属性和方法可以用逗号, 分号; 或直接不写来做间隔, 可以用来做一些平时经常会用到的类型来做复用, 其可以用于变量的类型指定上.

### 3.9 接口

```tsx
interface Point {
	x: number;
	y: number;
}
 
function printCoord(pt: Point) {
	console.log("坐标x的值是: " + pt.x)
    console.log("坐标y的值是: " + pt.y);
}
printCoord({ x: 100, y: 100 })
 
```

可以用接口来**定义对象的类型**, 几乎所有可以通过interface来定义的类型都可以用type来定义

类型别名type 和接口interface之间的区别:

1. 扩展接口: 通过extends

```tsx
// 扩展接口
interface Animal {
    name: string
}
 
interface Bear extends Animal {
    honey: boolean
}
 
const bear: Bear = {
    name: 'winie',
    honey: true
}
 
console.log(bear.name, bear.honey)
```

扩展类型别名: 通过 &

```tsx
type Animal  = {
    name: string
}
 
type Bear = Animal & {
    honey: boolean
}
 
const bear: Bear = {
    name: "winie",
    honey: true
}
```

1. 向现有的类型添加新字段

   接口: 定义相同的接口, 其字段会合并.

```tsx
interface MyWindow {
    count: number
}
 
interface MyWindow {
    title: string
}
 
const w: MyWindow = {
    title: 'hello ts',
    count: 10
}
```

类型别名: 类型别名创建的类型创建后是不能添加新字段的

### 3.10 类型断言 as

```tsx
const myCanvas = document.getElementById("main_canvas")  // 返回某种类型的HTMLElement
 
// 可以使用类型断言来指定
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement
const myCanvas = <HTMLCanvasElement>document.getElementById()
```

类型注释与类型断言一样, 类型断言由编译器来删除, 不会影响代码的运行时行为, 也就是因为类型断言在编译时被删除, 所以没有与类型断言相关联的运行时检查.

```tsx
const x = ('hello' as unknown) as number
```

如上代码可以在我们不知道某些代码是什么类型的时候断言为一个差不多的类型.

### 3.11 文字类型

除了一般类型`string` 和`number`, 还可以在类型位置引用特定的字符串和数字.

一种方法是考虑js如何以不同的方式声明变量. `var`和`let`两者都允许更改变量中保存的内容, `const`不允许, 这反映在TS如何为文字创建类型上

```tsx
let testString = "Hello World";
testString = "Olá Mundo";
 
// 'testString'可以表示任何可能的字符串，那TypeScript是如何在类型系统中描述它的
testString;
const constantString = "Hello World";
// 因为'constantString'只能表示1个可能的字符串，所以具有文本类型表示
constantString;
```

就其本身而言, 文字类型不是很有价值

```tsx
let x: "hello"  = "hello";
// 正确
x = "hello"
// 错误
x = "howdy"
```

![image-20220310180605751](https://img2022.cnblogs.com/blog/2550942/202204/2550942-20220403120411495-32076888.png)

拥有一个只能由一个值的变量并没有多大用处!

但是通过将文字组合成联合，你可以表达一个更有用的概念——例如，**只接受一组特定已知值的函数**：

```tsx
function printText(s: string, alignment: "left" | "right" | "center") {
// ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");
```

![image-20220310185517746](https://img2022.cnblogs.com/blog/2550942/202204/2550942-20220403120411299-477523014.png)

数字文字类型的工作方式相同:

```tsx
function compare(a: string, b: string): -1 | 0 | 1 {
	return a === b ? 0 : a > b ? 1 : -1;
}
```

也可以将这些与非文字类型结合使用:

```tsx
interface Options {
	width: number;
}
function configure(x: Options | "auto") {
// ...
}
configure({ width: 100 });
configure("auto");
configure("automatic");
```

![image-20220310190609259](https://img2022.cnblogs.com/blog/2550942/202204/2550942-20220403120411050-1916158135.png)

还有一种文字类型：布尔文字。只有两种布尔文字类型，它们是类型 `true` 和 `false` 。类型 boolean 本身实际上只是联合类型 `union` 的别名 `true | false` 。

#### 文字推理

当你使用对象初始化变量时，TypeScript 假定该对象的属性稍后可能会更改值。例如，如果你写了这样的代码：

```tsx
const obj = { counter: 0};
if(someCondtion) {
	obj.counter = 1
}
```

TypeScript 不假定先前具有的字段值 `0` ，后又分配 `1` 是错误的。另一种说法是 `obj.counter` 必须有 `number` 属性， 而非是 `0` ，因为类型用于确定读取和写入行为。

这同样适合用于字符串:

```tsx
function handleRequest(url: string, method: 'GET' | 'POST' | 'GUESS') {
	// ...
}
const req = { url: 'https://example.com', method: 'GET' };
handleRequest(req.url, req.method);
```

![image-20220310193046700](https://img2022.cnblogs.com/blog/2550942/202204/2550942-20220403120410861-1471067420.png)

在上面的例子 `req.method` 中推断是 `string` ，不是 `"GET"` 。因为代码可以在创建 `req` 和调用之间进行**评估**，TypeScript 认为这段代码有错误。

有两种方法可以解决这个问题:

1. **可以通过在任一位置添加类型断言来更改推理:**

```tsx
// 方案 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// 方案 2
handleRequest(req.url, req.method as "GET");
```

方案1表示“我打算 req.method 始终拥有文字类型`"GET"` ”，从而防止之后可能分配`"GUESS"`给该字段。

方案 2 的意思是“我知道其他原因`req.method`具有`"GET"`值”。

1. **可以使用 `as const` 将整个对象转换为类型文字**

```tsx
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
```

该`as const`后缀就像`const`定义，确保所有属性分配的文本类型，而不是一个更一般的`string`或 `number` 。

### 3.12 `null`和`undefined`

JavaScript 有两个原始值用于表示不存在或未初始化的值： `null` 和 `undefined`.

TypeScript有两个对应的同名类型。这些类型的行为取决于您是否在`tsconfig.json`设置`strictNullChecks`选择。

- `strictNullChecks`关闭

  使用false，**仍然可以正常访问的值，并且可以将值分配给任何类型的属性**。这类似于没有空检查的语言 （例如 C##、Java）的行为方式。缺乏对这些值的检查往往是错误的主要来源；如果在他们的代码库中这样做可行，我们总是建议大家打开。

- `strictNullChecks`开启

  使用true，你需要在对该值使用方法或属性之前测试这些值。就像在使用可选属性之前检查一样，我们可以使用缩小来检查可能的值：

```tsx
function doSomething(x: string | null) {
    if (x === null) {
        // 做一些事
    } else {
        console.log("Hello, " + x.toUpperCase());
	}
}
```

- **非空断言运算符**(`!`后缀)

TypeScript 也有一种特殊的语法 `null` ， `undefined` , 可以在不进行任何显式检查的情况下，从类型中移除和移除类型。 `!` 在任何表达式之后写入实际上是一种类型断言，即该值不是 `null` or `undefined` ：

使用`?`可以指定对象中某个参数可以选择传入或者不传入, 不传入其值就是undefined.

```tsx
function liveDangerously(x?: number | null) {
	// 正确
	console.log(x!.toFixed());
}
```

就像其他类型断言一样，这不会更改代码的运行时行为，因此仅 `!` 当你知道该值不能是 `null` 或 `undefined` 时使用才是重要的。

### 3.13 枚举

枚举是 TypeScript 添加到 JavaScript 的一项功能，它允许描述一个值，该值可能是一组可能的命名常量之一。与大多数 TypeScript 功能不同，这不是JavaScript 的类型级别的添加，而是添加到语言和运行时的内容。因此，你确定你确实需要枚举在做些事情，否则请不要使用。可以在[Enum参考页](https://www.typescriptlang.org/docs/handbook/enums.html)中阅读有关枚举的更多信息。

```tsx
// ts源码
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
console.log(Direction.Up) // 1
// 编译后的js代码
"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
```

![image-20220310202728792](https://img2022.cnblogs.com/blog/2550942/202204/2550942-20220403120410625-1139473086.png)

### 3.14 不太常见的原语

值得一提的是JavaScript中一些较新的原语, 它们在 TypeScript 类型系统中也实现了。我们先简单的看两个例子：

- `bigint`

从 ES2020(ES11) 开始，JavaScript 中有一个用于非常大的整数的原语`BigInt` :

```tsx
// 通过bigint函数创建bigint
const oneHundred: bigint = BigInt(100);
// 通过文本语法创建BigInt
const anotherHundred: bigint = 100n;
```

你可以在[TypeScript 3.2](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html##bigint)发行说明中了解有关 BigInt 的更多信息。

- `symbol`

JavaScript 中有一个原语 `Symbol()` ，用于通过函数创建全局唯一引用：

```tsx
const firstName = Symbol("name");
const secondName = Symbol("name");
if (firstName === secondName) {
	// 这里的代码不可能执行
}
```

![image-20220310203640547](https://img2022.cnblogs.com/blog/2550942/202204/2550942-20220403120410409-785165317.png)

此条件将始终返回 `false` ，因为类型`typeof firstName`和`typeof secondName`没有重叠。

## TypeScript学习第四章: 类型缩小

假设我们有一个名为padLeft的函数:

```tsx
function padLeft(padding: number | string, input: string): string {
	throw new Error("尚未实现!");
}
```

我们来扩充一下功能: 如果`padding`是`number`, 它会将其视为我们将要添加到`input`的空格数; 如果`padding`是`string`, 它只在input上做`padding`. 让我们尝试实现:

```tsx
function padLeft(padding: number | string, input: string): string {
	return new Array(padding + 1).join(" ") + input;
}
```

这样的话, 我们在padding + 1处会遇到错误. TS警告我们, 运算符+不能应用于类型`number | string` 和 `string`, 这个逻辑是对的, 因为我们没有明确检查padding是否为`number`, 也没有处理它是`string`的情况, 所以我们我们这样做:

```tsx
function padLeft(padding: number | string, input: string): string {
	if (typeof padding === "number") {
    	return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
 
}
```

如果这大部分看起来像无趣的JavaScript代码，这也算是重点吧。除了我们设置的注解之外，这段 TypeScript代码看起来就像JavaScript。

我们的想法是，TypeScript的类型系统旨在使编写典型的 JavaScript代码变得尽可能容易，而不需要弯腰去获得类型安全。

虽然看起来不多，但实际上有很多价值在这里。就像TypeScript使用静态类型分析运行时的值一样，它在JavaScript的运行时控制流构造上叠加了类型分析，如if/else、条件三元组、循环、真实性检查等，这些都会影响到这些类型。

在我们的if检查中，TypeScript看到`typeof padding ==="number"`，并将其理解为一种特殊形式的代码，称为**类型保护**。**TypeScript遵循我们的程序可能采取的执行路径，以分析一个值在特定位置的最具体的可能类型**。它查看这些特殊的检查（称为**类型防护**）和赋值，**将类型细化为比声明的更具体的类型的过程被称为类型缩小**。在许多编辑器中，我们可以观察这些类型的变化，我们甚至会在我们的例子中这样做。

TypeScript 可以理解几种不同的缩小结构.

### 4.1 `typeof`类型守卫

正如我们所见, Js支持`typeof`运算符, 它可以提供有关我们在运行时拥有的值类型的非常基本的信息.

TS期望它返回一组特定的字符串:

- `"string"`
- `"number"`
- `"bigint"`
- `"boolean"`
- `"symbol"`
- `"undefined"`
- `"object"`
- `"function"`

就像我们刚才在`padLeft`中看到的那样, 这个运算符经常出现在许多JavaScript库中, TS可以理解为, 它缩小在不同分支中的类型.

在TS中, 检查`typeof`的返回值是一种类型保护. 因为TS对`typeof`操作进行编码, 从而返回不同的值, 所以它知道对JS做了什么. 例如, 请注意上面的列表中, `typeof` 不返回`null`.

```tsx
function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
        for (const s of strs) {
        	console.log(s);
    	}
    } else if (typeof strs === "string") {
    	console.log(strs);
    } else {
    	// 做点事
    }
}
```

![image-20220311230619295](https://img2022.cnblogs.com/blog/2550942/202204/2550942-20220403120410187-617755105.png)

在 `printAll` 函数中，我们尝试检查 `strs` 是否为对象，来代替检查它是否为数组类型（现在可能是强调数组是 JavaScript 中的对象类型的好时机）。但事实证明，在 JavaScript 中，`typeof null` 实际上也是 `"object"` ! 这是历史上的不幸事故之一。

有足够经验的用户可能不会感到惊讶，但并不是每个人都在 JavaScript 中遇到过这种情况；幸运的是， ts 让我们知道， `strs` 只缩小到 `string[] | null` ，而不仅仅是 string[].

这可能是我们所谓的“真实性”检查的一个很好的过渡。

### 4.2 真值缩小

真值检查是我们在JS中经常做的一件事. 在JS中, 我们可以在条件 `&&` `||` `if`语句布尔否定(!)等中使用任何表达式.

例如, `if`语句不希望它们的条件总是具有类型`boolean`

```tsx
function getUserOnlineMessage(numUserOnline: number) {
    if(numUserOnline) {
        return `现在共有 ${numUserOnline} 人在线!`
    }
    return "现在没有人在线:("
}
```

在JS总, if条件语句, 首先把他们的条件强制转化为boolean以使其有意义, 然后根据结果是true还是false来选择他们的分支. 像下面这些值都强制转换为false:

- 0
- NaN
- "" (空字符串)
- On (bigint 0的版本)
- null
- undefined

其他值被强制转化为`true`. 你始终可以在`Boolean`函数中运行值获得`boolean`, 或使用较短的双布尔否定将值强制转换为`boolean`.(后者的优点是ts推断出一个狭窄的文字布尔类型true, 而将第一个推断为`boolean`类型)

```tsx
// 这两个结果都返回 true
Boolean("hello"); // type: boolean, value: true
!!"world"; // type: true, value: true
```

利用这个特性, 我们可以防范诸如`null`或`undefined`之类的值时. 例如, 让我们尝试将它用于我们的`printAll`函数.

```tsx
function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
    	console.log(strs);
    }
}
```

我们通过检查`strs`是否为真, 消除了上述错误. 这可以防止我们在运行代码的时候出现一些错误, 例如:

```tsx
TypeError: null is not iterable
```

但请记住, 对原语的真值检查通常容易出错. 例如, 考虑改写`printAll`:

```tsx
function printAll(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    // 别这样!
    // 原因在下边
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
        	console.log(strs);
        }
    }
}
```

我们将整个函数体包裹在一个真值检查中, 但是这有一个小小的缺点: 我们可能不再正确处理`空字符串`的情况.

TS在这里根本不会报错, 如果你不熟悉JS, 这是值得注意的. TS通常可以帮你及早发现错误, 但是如果你选择对某个值不做任何处理, 那么它可以做的就只有这么多, 而不会考虑过多逻辑方面的问题, 如果需要, 你可以确保linter(程序规范性)处理此类情况.

关于通过真实性缩小范围的最后一点，是通过布尔否定 `!` 把逻辑从否定分支中过滤掉。

```tsx
function multiplyAll( 
    values: number[] | undefined,
    factor: number
 ): number[] | undefined {
    if (!values) {
    	return values;
    } else {
    	return values.map((x) => x * factor);
    }
}
```

### 4.3 等值缩小

ts也使用分支语句做`===` `!==` `==`和 `!=` 等值检查, 来实现类型缩小. 例如:

```tsx
function example(x: string | number, y: string | boolean) {
    if (x === y) {
        // 现在可以在x,y上调用字符串类型的方法了
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x);
        console.log(y);
    }
}
```

当我们在上面的示例中检查 x 和 y 是否相等时，TypeScript知道它们的类型也必须相等。由于 string 是 x 和 y 都可以采用的唯一常见类型，因此TypeScript 知道 x 、 y 如果都是 `string` ，则程序走第一个分支中 。

检查特定的字面量值（而不是变量）也有效。在我们关于真值缩小的部分中，我们编写了一个 printAll 容易出错的函数，因为它没有正确处理空字符串。相反，我们可以做一个特定的检查来阻止 null ，并且 TypeScript 仍然正确地从 strs 里移除 null 。

```tsx
function printAll(strs: string | string[] | null) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
```

JavaScript 更宽松的相等性检查 `==` 和 `!=` ，也能被正确缩小。如果你不熟悉，如何检查某个变量是否 `== null` ，因为有时不仅要检查它是否是特定的值 `null` ，还要检查它是否可能是 `undefined` 。这同样适用 于 `== undefined` ：**它检查一个值是否为 null 或 undefined** 。现在你只需要这个 `==` 和 `!=` 就可以搞定了。

```tsx
interface Container {
	value: number | null | undefined;
}
function multiplyValue(container: Container, factor: number) {
    // 从类型中排除了undefined 和 null
    if (container.value != null) {
        console.log(container.value);
        // 现在我们可以安全地乘以“container.value”了
        container.value *= factor;
    }
}
    
 
console.log(multiplyValue({value: 5}, 5))
console.log(multiplyValue({value: null}, 5))
console.log(multiplyValue({value: undefined}, 5))
console.log(multiplyValue({value: '5'}, 5))
```

![image-20220312115410324](https://img2022.cnblogs.com/blog/2550942/202204/2550942-20220403120409938-1420488579.png)

### 4.4 `in`操作符缩小

JavaScript 有一个运算符，用于确定对象是否具有某个名称的属性： `in` 运算符。TypeScript 考虑到了这 一点，以此来缩小潜在类型的范围。 例如，使用代码： `"value" in x` 。这里的 `"value"` 是**字符串string**， `x` 是联合类型。值为“true”的分支缩小，需要 x 具有可选或必需属性的类型的值；值为 `“false”` 的分支缩小，**需要具有可选或缺失属性的类型的值**。

```tsx
type Fish = { swim: () => void };
type Bird = { fly: () => void };
function move(animal: Fish | Bird) {
    if ("swim" in animal) {
    	return animal.swim();
    }
    return animal.fly();
}
```

另外，可选属性还将存在于缩小的两侧，例如，人类可以游泳和飞行（使用正确的设备），因此应该出 现在 `in` 检查的两侧：

```tsx
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
 
function move(animal: Fish | Bird | Human) {
    if ("swim" in animal) {
    	// animal: Fish | Human
    	animal;
    } else {
    	// animal: Bird | Human
    	animal;
    }
}
```

### 4.5 `instanceof`操作符缩小

JS有一个运算符`instanceof`检查一个值是否是另一个值的“实例”。更具体地，在JavaScript 中 `x instanceof Foo` 检查 `x` 的原型链是否含有 `Foo.prototype` 。虽然我们不会在这里深入探讨，当 我们进入 `类(class)` 学习时，你会看到更多这样的内容，它们大多数可以使用 `new` 关键字实例化。 正如你可能已经猜到的那样， `instanceof` 也是一个类型保护，TypeScript 在由 `instanceof` 保护的分支中实现缩小。

```tsx
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}
logValue(new Date()) // Mon, 15 Nov 2021 22:34:37 GMT
logValue('hello ts') // HELLO TS
```

### 4.6 分配缩小

正如我们之前所提到的, 当我们为任何变量赋值时, TS会检查赋值的右侧并适当缩小左侧.

```tsx
// let x: string | number
let x = Math.random() < 0.5 ? 10 : "hello world!";
x = 1;
 
// let x: number
console.log(x);
x = "goodbye!";
// let x: string
console.log(x);
```

请注意，这些分配中的每一个都是有效的。即使在我们第一次赋值后观察到的类型 x 更改为 `number` ， 我们仍然可以将 `string` 赋值给 x 。这是因为**声明类型 x 开始是 `string | number`** 。

如果我们分配了一个 `boolean` 给 x ，我们就会看到一个错误，因为它不是声明类型的一部分。

```tsx
let x = Math.random() < 0.5 ? 10 : "hello world!";
// let x: string | number
x = 1;
 
// let x: number
console.log(x);
 
// 出错了~! 
x = true
 
// let x: string | number
console.log(x);
```

![image-20220312123406176](https://img2022.cnblogs.com/blog/2550942/202204/2550942-20220403120409694-308293469.png)

### 4.7 控制流分析

到目前为止, 我们已经通过一些基本实例来说明TS如何在特定分支中缩小范围. 但是除了从每个变量中走出来, 并在`if`、`while` 条件等中寻找类型保护之外, 还有更多的事情要做, 比如:

```tsx
function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
    	return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
}
```

padLeft从其第一个if块中返回. TS能够分析这段代码,并看到在padding是数字的情况下, 主体的其余部分（ `return padding + input;` ）是不可达的。因此，它能够将数字从 `padding` 的类型中移除（从string|number缩小到string），用于该函数的其余部分。

这种基于可达性的代码分析被称为控制流分析，TypeScript使用这种流分析来缩小类型，因为它遇到了 类型守卫和赋值。当一个变量被分析时，控制流可以一次又一次地分裂和重新合并，该变量可以被观察到在每个点上有不同的类型.

```tsx
function example() {
    let x: string | number | boolean;
    
    x = Math.random() < 0.5;
    
    // let x: boolean
    console.log(x);
    if (Math.random() < 0.5) {
        x = "hello";
        // let x: string
        console.log(x);
    } else {
        x = 100;
        // let x: number
        console.log(x);
    }
    // let x: string | number
    return x;
}
let x = example()
x = 'hello'
x = 100
x = true // error
```

![image-20220312180252869](https://img2022.cnblogs.com/blog/2550942/202204/2550942-20220403120409410-141228654.png)

### 4.8 使用类型谓词

到目前为止，我们已经用现有的JavaScript结构来处理窄化问题，然而有时你想更直接地控制整个代码中的类型变化。

为了定义一个用户定义的类型保护，我们只需要定义一个函数，其返回类型是一个类型谓词.

```tsx
type Fish = {
    name: string
    swim: () => void
}
 
type Bird = {
    name: string
    fly: () => void
}
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}
```

在这个例子中， `pet is Fish` 是我们的类型谓词。谓词的形式是 `parameterName is Type` ，其中 parameterName 必须是**当前函数签名中的参数名称**, 返回一个boolean, 代表是不是该`Type`

任何时候 `isFish` 被调用时，如果原始类型是兼容的，TypeScript将把该变量缩小到该特定类型。

```tsx
function getSmallPet(): Fish | Bird {
    let fish: Fish = {
        name: 'gold fish',
        swim: () => {
            console.log('fish is swimming.')
    	}
    }
    let bird: Bird = {
        name: 'sparrow',
        fly: () => {
            console.log('bird is flying.')
        }
    }
    return Math.random() < 0.5 ? bird : fish
}
// 这里 pet 的 swim 和 fly 都可以访问了
let pet = getSmallPet() // 
console.log(pet)
if (isFish(pet)) {
    pet.swim()
} else {
    pet.fly() 
}
```

注意，TypeScript不仅知道 `pet` 在 `if` 分支中是一条鱼；它还知道在 `else` 分支中，你没有一条 `Fish` ，所以你一定有一只 `Bird` 。

你可以使用类型守卫 `isFish` 来过滤 `Fish | Bird` 的数组，获得 `Fish` 的数组。

```tsx
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()]
const underWater1: Fish[] = zoo.filter(isFish)
console.log(underWater1)
// 或者，等同于
const underWater2: Fish[] = zoo.filter(isFish) as Fish[]
console.log(underWater2)
 
// 对于更复杂的例子，该谓词可能需要重复使用
const underWatch3: Fish[] = zoo.filter((pet): pet is Fish => {
    if (pet.name === 'frog') {
    	return false
    }
    return isFish(pet)
})
```

### 4.9 受歧视的`unions`

到目前为止，我们所看的大多数例子都是围绕着用简单的类型（如 `string` 、 `boolean` 和 `number` ）来缩小单个变量。虽然这很常见，但在JavaScript中，大多数时候我们要处理的是稍微复杂的结构。

为了激发灵感，让我们想象一下，我们正试图对圆形和方形等形状进行编码。圆记录了它们的半径，方记录了它们的边长。我们将使用一个叫做 `kind` 的字段来告诉我们正在处理的是哪种形状。这里是定义 Shape 的第一个尝试。

```tsx
interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}
```

注意，我们使用的是字符串字面类型的联合。 `"circle"` 和 `"square"` 分别告诉我们应该把这个形状 当作一个圆形还是方形。通过使用 `"circle" | "square "` 而不是`string` ，我们可以避免拼写错误的问题。

```tsx
function handleShape(shape: Shape) {
    // oops!
    if (shape.kind === "rect") {
    	// ...
    }
}
```

![image-20220312213533490](https://img2022.cnblogs.com/blog/2550942/202204/2550942-20220403120409151-1775049510.png)

我们可以编写一个 `getArea` 函数，根据它处理的是圆形还是方形来应用正确的逻辑。我们首先尝试处理圆形。

```tsx
function getArea(shape: Shape) {
	return Math.PI * shape.radius ** 2;
}
```

![image-20220312214029711](https://img2022.cnblogs.com/blog/2550942/202204/2550942-20220403120408934-478698697.png)

在`strictNullChecks`下，这给了我们一个错误——这是很恰当的，因为`radius`可能没有被定义。 但是如果我们对`kind`属性进行适当的检查呢？

```tsx
function getArea(shape: Shape) {
    if (shape.kind === "circle") {
    	return Math.PI * shape.radius ** 2;
    }
}
```

嗯, TypeScript 仍然不知道该怎么做。我们遇到了一个问题，即我们对我们的值比类型检查器知道的更多。我们可以尝试使用一个非空的断言 ( `radius` 后面的那个叹号 `!` ) 来说明 `radius` 肯定存在。

```tsx
function getArea(shape: Shape) {
    if (shape.kind === "circle") {
    	return Math.PI * shape.radius! ** 2;
    }
}
```

但这感觉并不理想。我们不得不用那些非空的断言对类型检查器声明一个叹号（`!`），以说服它相信 `shape.radius` 是被定义的，但是如果我们开始移动代码，这些断言就容易出错。此外，在 `strictNullChecks` 之外，我们也可以意外地访问这些字段（因为在读取这些字段时，可选属性被认为总是存在的)。我们绝对可以做得更好.

Shape 的这种编码的问题是，类型检查器没有办法根据种类属性知道 `radius` 或 `sideLength` 是否存在。我们需要把我们知道的东西传达给类型检查器。考虑到这一点，让我们再来定义一下`Shape`.

```tsx
interface Circle {
    kind: "circle";
    radius: number;
}
 
interface Square {
    kind: "square";
    sideLength: number;
}
type Shape = Circle | Square;
```

在这里，我们正确地将 Shape 分成了两种类型，为 `kind` 属性设置了不同的值，但是 `radius` 和 `sideLength` 在它们各自的类型中被声明为必需的属性。

让我们看看当我们试图访问 `Shape` 的半径时会发生什么。

```tsx
function getArea(shape: Shape) {
	return Math.PI * shape.radius ** 2;
}
```

![image-20220312215150736](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927947.png)

就像我们对 Shape 的第一个定义一样，这仍然是一个错误。当半径是可选的时候，我们得到了一个错误（仅在 `strictNullChecks` 中），因为 TypeScript 无法判断该属性是否存在。现在 Shape 是一个联合体，TypeScript 告诉我们 `shape` 可能是一个 `Square` ，而Square并没有定义半径 `radius` 。 这两种解释都是正确的，但只有我们对 Shape 的新编码仍然在 `strictNullChecks` 之外导致错误.

但是, 如果我们在此尝试检查kind属性呢?

```tsx
function getArea(shape: Shape) {
    if (shape.kind === "circle") {
        // shape: Circle
        return Math.PI * shape.radius ** 2;
    }
}
```

这就摆脱了错误! 当 `union` 中的每个类型都包含一个与字面类型相同的属性时，TypeScript 认为这是一 个有区别的 `union` ，并且可以缩小 `union` 的成员。

在这种情况下， `kind` 就是那个共同属性（这就是 Shape 的判别属性）。检查 `kind` 属性是否为 `"circle"` ，就可以剔除 `Shape` 中所有没有 `"circle"` 类型属性的类型。这就把 `Shape` 的范围缩小到 了 `Circle` 这个类型。

同样的检查方法也适用于 `switch` 语句。现在我们可以试着编写完整的 `getArea` ，而不需要任何讨厌 的叹号 `!` 非空的断言。

```tsx
function getArea(shape: Shape) {
    switch (shape.kind) {
        // shape: Circle
        case "circle":
            return Math.PI * shape.radius ** 2;
        // shape: Square
        case "square":
            return shape.sideLength ** 2;
    }
}
```

这里最重要的是 `Shape` 的编码。向 TypeScript 传达正确的信息是至关重要的，这个信息就是 `Circle` 和 `Square` 实际上是具有特定种类字段的两个独立类型。这样做让我们写出类型安全的TypeScript代码， 看起来与我们本来要写的JavaScript没有区别。从那里，类型系统能够做 "正确 "的事情，并找出我们 `switch` 语句的每个分支中的类型.

辨证的联合体不仅仅适用于谈论圆形和方形。它们适合于在JavaScript中表示任何类型的消息传递方案， 比如在网络上发送消息（ `client/server` 通信），或者在状态管理框架中编码突变.

### 4.10 `never`类型与穷尽性检查

在缩小范围时，你可以将一个联合体的选项减少到你已经删除了所有的可能性并且什么都不剩的程度。 在这些情况下，TypeScript将使用一个 `never` 类型来代表一个不应该存在的状态。

`never` 类型可以分配给每个类型；但是，没有任何类型可以分配给`never`（除了never本身）。这意味着你可以使用缩小并依靠 `never` 的出现在 `switch` 语句中做详尽的检查。

例如，在我们的 `getArea` 函数中添加一个默认值，试图将形状分配给 `never` ，当每个可能的情况都没有被处理时，就会引发。

```tsx
type Shape = Circle | Square;
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
        	return Math.PI * shape.radius ** 2;
        case "square":
        	return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
```

在 `Shape` 联盟中添加一个新成员，将导致TypeScript错误

```tsx
interface Triangle {
    kind: "triangle";
    sideLength: number;
}
type Shape = Circle | Square | Triangle;
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
        	return Math.PI * shape.radius ** 2;
        case "square":
        	return shape.sideLength ** 2;
        default:
        	const _exhaustiveCheck: never = shape;
        	return _exhaustiveCheck;
    }
}
```

![image-20220312220623399](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927962.png)

## TypeScript学习第五章: 函数

函数是任何**应用程序**的**基本构件**，无论它们是本地函数，从另一个模块导入，还是一个类上的方法。它们也是值，就像其他值一样，TypeScript有很多方法来描述如何调用函数。让我们来学习一下如何编写描述函数的类型。

### 5.1 函数类型表达式

描述一个函数的最简单是用一个函数类型表达式. 这些类型在语法上类似于箭头函数.

```tsx
function greeter(fn: (a: string) => void) {
	fn("Hello, World");
}
function printToConsole(s: string) {
	console.log(s);
}
greeter(printToConsole);
```

语法 `(a: string) => void` 意味着**有一个参数的函数**，名为 `a` ，类型为**字符串**，**没有返回值**"。就像函数声明一样，如果没有指定参数类型，它就隐含为 `any` 类型。

当然, 我们可以用一个类型别名来命名一个函数类型.

```tsx
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
    // ...
}
```

### 5.2 调用签名: 属性签名

在JavaScript中，除了可调用之外，**函数**还**可以有属性**。然而，函数类型表达式的语法不允许声明属性。 如果我们想用属性来描述可调用的东西，我们可以在一个**类型别名**中写一个**调用签名**。

值得注意的是, 类型别名中缩写的函数类型表达式返回值是用冒号:而不是箭头函数=>, 且实际应用时所传入函数返回值必须与此函数类型表达式声明的相同(fn1和fn2), 如果函数体内没有操作参数的行为, 可以不传参数(比如fn3).

```tsx
type DescribableFunction = { // 对象类型
    description: string // 函数的属性签名
    (someArg: number): boolean // 函数类型表达式, 不能用=> 而是用:
}
 
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6))
}
 
// 传入正常参数使用且正常返回值
function fn1(n: number) {
    console.log(n)
    return true
}
fn1.description = "hello"
 
// 不传入参数且不正常返回值
function fn2() {
    console.log("lalala")
}
fn2.description = "heihei"
 
// 不传入参数且正常返回值
function fn3() {
    return false
}
fn3.description = "hehehe"
 
 
doSomething(fn1) // 正常
doSomething(fn2) // 报错
doSomething(fn3) // 正常
```

![img](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927979.png)

### 5.3 构造签名 new (params, ...): Ctor

JS函数也可以用`new`操作符来调用. TS将这些成为构造函数, 因为它们通常会创建一个新的对象。你可以通过**在调用签名前面添加 `new` 关键字来写一个构造签名**, **返回的是一个类或者构造函数.**

```tsx
class Ctor {
    s: string
    constructor(s: string) {
    	this.s = s
    }
}
 
type SomeConstructor = { // 在调用签名前加new就是构造签名
	new (s: string): Ctor // 返回的是一个构造函数或者类
}
function fn(ctor: SomeConstructor) { // SomeConstructor可以理解为构造函数
	return new ctor("hello")
}
 
const f = fn(Ctor)
console.log(f.s)
```

有些对象，如 JavaScript 的 `Date` 对象，可以在有 `new` 或没有 `new` 的情况下被调用。你可以在同一类型中任意地结合调用和构造签名.

```tsx
interface CallOrConstruct {
    new (s: string): Date 
    (): string
}
 
function fn(date: CallOrConstruct) {
    let d = new date('2021-11-20')
    let n = date() // 因为Date可以在不使用new的情况下调用所以代码正常
    console.log(d)
    console.log(n)
}
 
fn(Date)
```

下一个实例

```tsx
// clock构造函数的接口, 是一个构造签名, 返回一个ClockInterface类的构造函数
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
 
// Clock类的接口, 里面有一个tick()函数
interface ClockInterface {
    tick(): void;
}
 
// 创建Clock类的函数
function createClock( 
    ctor: ClockConstructor,
    hour: number,
    minute: number
 ): ClockInterface {
    return new ctor(hour, minute);
}
 
// 具体的类来实现ClockInterface, 必须要有tick函数
class DigitalClock implements ClockInterface {
    h: number
    m: number
    constructor(h: number, m: number) {
        this.h = h
        this.m = m
    }
    tick() {
        console.log("beep beep");
    }
}
 
// 具体的类来实现ClockInterface, 必须要有tick函数
class AnalogClock implements ClockInterface {
    h: number
    m: number
    constructor(h: number, m: number) {
        this.h = h
        this.m = m
    }
    tick() {
        console.log("tick tock");
    }
}
 
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
console.log(digital)
analog.tick()
```

### 5.4 泛型函数`<Type>`

在写一个函数时, 输入的类型与输出的类型有关, 或者两个输入的类型以某种方式相关, 这是常见的. 让我们考虑一下一个返回数组种第一个元素的函数.

```tsx
function firstElement(arr: any[]) {
	return arr[0]
}
```

这个函数完成了它的工作，但不幸的是它的返回类型是 `any` 。如果该函数返回数组元素的类型会更好。

在TypeScript中，当我们想描述两个值之间的对应关系时，会使用泛型。我们通过在函数签名中声明一个类型参数来做到这一点:

```tsx
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0]
}
```

通过给这个函数添加一个类型参数 `Type` ，并在两个地方使用它，我们已经在函数的输入（数组）和输出（返回值）之间建立了一个联系。现在当我们调用它时，一个更具体的类型就出来了：

```tsx
// s 是 'string' 类型
const s = firstElement(["a", "b", "c"]);
// n 是 'number' 类型
const n = firstElement([1, 2, 3]);
// u 是 undefined 类型
const u = firstElement([]);
```

#### 5.4.1 类型推断

请注意, 在这个例子中, 我们没有必要指定类型. 类型是由TS推断出来的------自动选择.

我们也可以使用多个类型参数. 例如, 一个独立版本的map看起来可能是这样的:

```tsx
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func)
}
 
// 参数'n'是'字符串'类型。
// 'parsed'是'number[]'类型。
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
```

请注意，在这个例子中，TypeScript可以推断出输入类型参数的类型（从给定的字符串数组string），以及基于函数表达式的返回值（数字number）的输出类型参数。

#### 5.4.2 限制条件

我们i经写了一些通用函数, 可以对任何类型的值进行操作. 有时我们想把两个值联系起来, 但只能对某个值的子集进行操作. 这种在这种情况下，我们可以使用一个**约束条件**来**限制一个类型参数可以接受的类型**。

让我们写一个函数，返回两个值中较长的值。要做到这一点，我们需要一个长度属性，是一个数字。我们通过写一个扩展子句将类型参数限制在这个类型上.

```tsx
function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
    	return a;
    } else {
    	return b;
	}
}
// longerArray 的类型是 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString 是 'alice'|'bob' 的类型。
const longerString = longest("alice", "bob");
// 错误! 数字没有'长度'属性
const notOK = longest(10, 100);
```

在这个例子中，有一些有趣的事情需要注意。我们允许TypeScript推断 `longest` 的返回类型。返回类型推断也适用于通用函数。

因为我们将 Type 约束为 `{ length: number }` ，所以我们被允许访问 a 和 b 参数的 `.length` 属 性。如果没有类型约束，我们就不能访问这些属性，因为这些值可能是一些没有长度属性的其他类型。

longerArray 和 longerString 的类型是根据参数推断出来的。记住，**泛型就是把两个或多个具有相同类型的值联系起来**。 最后，正如我们所希望的，对 longest(10, 100) 的调用被拒绝了，因为数字类型没有一个 `.length` 属性

#### 5.4.3 使用受限值

这里有一个使用通用约束条件时的常见错误。

```tsx
function minimumLength<Type extends { length: number }>(
    obj: Type,
    minimum: number
): Type {
    if (obj.length >= minimum) {
    	return obj
    } else {
    	return { length: minimum }
    }
}
```

看起来这个函数没有问题--Type被限制为`{ length: number }`，而且这个函数要么返回Type，要么返回一 个与该限制相匹配的值。问题是，该函数**承诺返回与传入的对象相同的类型**，**而不仅仅是与约束条件相匹配的一些对象**。如果这段代码是合法的，你可以写出肯定无法工作的代码。

![image-20220315123636487](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927383.png)

```tsx
// 'arr' 获得值： { length: 6 }
const arr = minimumLength([1, 2, 3], 6);
//在此崩溃，因为数组有一个'切片'方法，但没有返回对象!
console.log(arr.slice(0));
```

#### 5.4.4 指定类型参数

TypeScript 通常可以推断出通用调用中的预期类型参数，但并非总是如此。例如，假设你写了一个函数来合并两个数组：

```tsx
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2)
}
```

通常情况下，用不匹配的数组调用这个函数是一个错误：

```tsx
const arr = combine([1, 2, 3], ["hello"]);
```

然而，如果你打算这样做，你在调用函数时可以手动指定类型:

```tsx
const arr = combine<string | number>([1, 2, 3], ["hello"])
```

#### 5.4.5 编写优秀通用函数的准则

编写泛型函数很有趣，而且很容易被类型参数所迷惑。有太多的类型参数或在不需要的地方使用约束，会使推理不那么成功，使你的函数的调用者感到沮丧。

- **类型参数下推**

下面是两种看似的函数写法:

```tsx
function firstElement1<Type>(arr: Type[]) {
	return arr[0];
}
function firstElement2<Type extends any[]>(arr: Type) {
	return arr[0];
}
// a: number (推荐)
const a = firstElement1([1, 2, 3]);
// b: any (不推荐)
const b = firstElement2([1, 2, 3]);
```

乍一看，这些可能是相同的，但 `firstElement1` 是写这个函数的一个更好的方法。它的推断返回类型是`Type`，但 `firstElement2` 的推断返回类型是 `any` ，因为TypeScript必须使用约束类型来解析`arr[0]` 表达式，而不是在调用期间 "等待 "解析该元素。

> **规则**: 在可能的情况下, 使用类型参数本身, 而不是对其进行约束

- **使用更少的类型参数**

下面是另一对类似的函数:

```tsx
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
	return arr.filter(func);
}
function filter2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
): Type[] {
	return arr.filter(func);
}
```

我们已经创建了一个类型参数 `Func` ，它并不涉及两个值。这总是一个值得标记的坏习惯，因为它意味着想要指定类型参数的调用者必须无缘无故地手动指定一个额外的类型参数。 Func 除了使函数更难阅读和推理外，什么也没做。

> **规则:** 总是尽可能少的使用类型参数

- **类型参数应该出现两次及以上**

有时候我们会忘记, 一个函数可能不需要是通用的:

```tsx
function greet<Str extends string>(s: Str) {
console.log("Hello, " + s);
}
greet("world");
```

我们完全可以写一个更简单的版本:

```tsx
function greet(s: string) {
	console.log("Hello, " + s);
}
```

记住，类型参数是用来关联多个值的类型的。如果一个类型参数在函数签名中只使用一次，那么它就没有任何关系。

> **规则:** 如果一个类型的参数只出现在一个地方, 请重新考虑你是否真的需要它

### 5.5 可选参数 ?

JavaScript中的函数经常需要一个可变数量的参数。例如，`number`的 `toFixed` 方法需要一个可选的数字计数。

```tsx
function f(n: number) {
	console.log(n.toFixed()); // 0 个参数
	console.log(n.toFixed(3)); // 1 个参数
}
```

我们可以在TypeScript中通过将参数用 `?` 标记：

```tsx
function f(x?: number) {
// ...
}
f(); // 正确
f(10); // 正确
 
```

虽然参数被指定为 number 类型，但 `x` 参数实际上将具有 `number | undefined` 类型，因为在 JavaScript中未指定的参数会得到 `undefined` 的值。

你也可以提供一个参数默认值

```tsx
function f(x = 10) {
 //...
}
```

现在在 `f` 的主体中， x 将具有 `number` 类型，因为任何 `undefined` 的参数将被替换为10 。请注意，当一个参数是可选的，调用者总是可以传递未定义的参数，因为这只是模拟一个 "丢失 "的参数：

```tsx
declare function f(x?: number): void;
 
// 以下调用都是正确的
f();
f(10);
f(undefined);
```

#### 5.5.1 回调中的可选参数

一旦你了解了可选参数和函数类型表达式, 在编写调用回调的函数时就很容易犯以下错误:

```tsx
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
    	callback(arr[i], i);
    }
}
```

我们在写`index?`作为一个可选参数时, 通常是想让这些调用都是合法的:

```tsx
myForEach([1, 2, 3], (a) => console.log(a))
myForEach([1, 2, 3], (a, i) => console.log(a, i))
```

这实际上意味着回调可能会被调用，只有一个参数。换句话说，该函数定义说，实现可能是这样的：

```tsx
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        // 我现在不想提供索引
        callback(arr[i]);
    }
}
```

反过来，TypeScript会强制执行这个意思，并发出实际上不可能的错误：

```tsx
myForEach([1, 2, 3], (a, i) => {
	console.log(i.toFixed())
})
```

![image-20220315173641328](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927563.png)

在JavaScript中，如果你**调用一个形参多于实参的函数**，**额外的参数会被简单地忽略**。TypeScript的行为也是如此。

**参数较少的函数**（相同的类型）总是可以取代参数较多的函数的位置。

> 当为回调写一个函数类型时, 永远不要写一个可选参数, 除非你打算在不传递该参数的情况下调用函数.

### 5.6 函数重载: 重载签名

一些 JavaScript 函数可以在不同的参数数量和类型中被调用。例如，你可能会写一个函数来产生一个 `Date`，它需要一个时间戳（一个参数）或一个月/日/年规格（三个参数）。

在TypeScript中，我们可以通过编写**重载签名**来指定一个可以以不同方式调用的函数。要做到这一点， **要写一些数量的函数签名（通常是两个或更多），然后是函数的主体**：

```tsx
function makeDate(timestamp: number): Date // 重载签名
function makeDate(m: number, d: number, y: number): Date // 重载签名
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if(d !== undefined && y !== undefined) {
		return new Date(y, mOrTimestamp, d)
    } else {
        return new Date(mOrTimestamp)
    }
}
 
const d1 = makeDate(12345678)
const d2 = makeDate(5,5,5)
const d3 = makeDate(1, 3)
```

![image-20220315211022165](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927645.png)

在这个例子中，我们写了两个重载：一个接受一个参数，另一个接受三个参数。这前两个签名被称为**重载签名**。

然后，我们写了一个**具有兼容签名的函数实现**。函数有一个实现签名，但这个签名不能被直接调用。即使我们写了一个在所需参数之后有两个可选参数的函数，它也不能以两个参数被调用

#### 5.6.1 重载签名和实现签名

这是一个常简的混乱的来源. 通常我们会写这样的代码, 却不明白为什么会出现错误:

```tsx
function fn(x: string): void
function fn() {
    // ...
}
// 期望能够以零参调用
fn()
```

![image-20220315231331099](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927711.png)

同样, 用于编写函数体的签名不能从外面"看到":

> 实现的签名从外面是看不到的. **在编写重载函数时, 你应该总是在函数的实现上面有两个或多个签名.**

**实现签名也必须与重载签名兼容**. 例如, 这些函数有错误, 因为实现签名没有以正确的方式匹配重载:

```tsx
function fn(x: boolean): void;
// 参数类型不正确
function fn(x: string): void;
function fn(x: boolean) {}
```

![image-20220315232556054](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927777.png)

```tsx
function fn(x: string): string
// 返回类型不正确
function fn(x: number): boolean
function fn(x: string | number) {
  return "oops";
}
```

![image-20220315232701448](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927872.png)

#### 5.6.2 编写好的重载

和泛型一样，在使用函数重载时，有一些准则是你应该遵循的。遵循这些原则将使你的函数更容易调用，更容易理解，更容易实现。

让我们考虑一个返回字符串或数组长度的函数：

```tsx
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}
```

这个函数是好的；我们可以用字符串或数组来调用它。然而，我们不能用一个可能是字符串或数组的值来调用它，因为TypeScript只能将一个函数调用解析为一个重载：

```tsx
len(""); // OK
len([0]); // OK
len(Math.random() > 0.5 ? "hello" : [0]);
```

![image-20220315233748639](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927939.png)

因为两个重载都有相同的参数数量和相同的返回类型，我们可以改写一个非重载版本的函数：

```tsx
function len(x: any[] | string) {
	return x.length;
}
len(""); // OK
len([0]); // OK
len(Math.random() > 0.5 ? "hello" : [0]); // OK
```

这就好得多了! 调用者可以用任何一种值来调用它，而且作为额外的奖励，我们不需要找出一个正确的实现签名。

> 在可能的情况下，总是倾向于使用联合类型的参数而不是重载参数

#### 5.6.3 函数内`This`的声明

TS会通过代码分析来推断函数中`this`应该是什么, 比如下面的例子:

```tsx
const user = {
	id: 123,
	admin: false,
	becomeAdmin: function () {
		this.admin = true;
	},
};
```

TS理解函数`user.becomeAdmin`有一个对应的`this`, 它是外部对象`user`. 这个对于很多情况来说已经足够了, 但是有很多情况下你需要更多的控制`this`代表什么对象/

JavaScript规范规定， 你不能有一个叫 `this` 的参数，所以TypeScript使用这个语法空间，让你在函数体中声明 `this` 的类型。

```tsx
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function(this: Deck) {
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);
 
          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}
 
console.log(deck.createCardPicker()())
```

### 5.7 需要了解的其他类型

有一些额外的类型你会想要认识，它们在处理函数类型时经常出现。像所有的类型一样，你可以在任何地方使用它们，但这些类型在函数的上下文中特别相关.

#### 5.7.1 `void`

`void`表示没有返回值的函数的返回值. 当一个函数没有任何返回语句, 或者没有从这些返回语句中返回任何明确的值时, 它都是推断出来`void`类型.

```tsx
// 推断出的返回类型是void
function noop() {
	return;
}
```

在JavaScript中，一个不返回任何值的函数将隐含地返回 `undefinded` 的值。然而，在TypeScript中， void 和 `undefined` 是不一样的。在本章末尾有进一步的细节。

> void 和 undefined是不一样的

#### 5.7.2 `object`

特殊类型`object`指的是任何不是基元的值（ `string` 、 `number` 、 `bigint` 、 `boolean` 、 `symbol` 、 `null` 或 `undefined` ）。这与空对象类型 { } 不同，也与全局类型 `Object` 不同。你很可能永远不会使用 `Object` 。

> `object` 不是 `Object` 。始终使用 `object` !

请注意，在JavaScript中，**函数值是对象**。它们有属性，在它们的原型链中有 **Object.prototype** ，是 **Object** 的实例，你可以对它们调用 **Object.key** ，等等。由于这个原因，函数类型在TypeScript中被 认为是 **object** 。

#### 5.7.3 `unknown`

`unknown`类型代表任何值. 这与`any`类型相似, 但更安全, 因为对未知`unknown`值做任何事情都是不合法的.

```tsx
function f1(a: any) {
	a.b(); // 正确
}
function f2(a: unknown) {
	a.b();
}
```

![image-20220316114327682](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927287.png)

这在描述函数类型时很有用，因为你可以描述接受任何值的函数，而不需要在函数体中有 any 值。 反之，你可以描述一个返回未知类型的值的函数:

```tsx
function safeParse(s: string): unknown {
	return JSON.parse(s);
}
 
// 需要小心对待'obj'!
const obj = safeParse(someRandomString);
```

#### 5.7.4 `never`

有些函数永远不会返回一个值：

```tsx
function fail(msg: string): never {
	throw new Error(msg);
}
```

`never` 类型标识永远不会被观察到的值. 载一个返回类型中, 这意味着函数抛出了一个异常或终止程序的执行.

never 也出现在TypeScript确定一个 `union` 中没有任何东西的时候。

```tsx
function fn(x: string | number) {
if (typeof x === "string") {
	// 做一些事
} else if (typeof x === "number") {
	// 再做一些事
} else {
	x; // 'never'!
}
```

#### 5.7.5 `Function`

全局性的 `Function` 类型描述了诸如 `bind` 、 `call` 、 `apply` 和其他存在于JavaScript中所有函数值的属性。它还有一个特殊的属性，即 `Function` 类型的值总是可以被调用；这些调用返回 `any` 。

```tsx
function doSomething(f: Function) {
	return f(1, 2, 3);
}
```

这是一个无类型的函数调用，一般来说最好避免，因为 any 返回类型都不安全。 如果你需要接受一个任意的函数，但不打算调用它，一般来说， `() => void` 的类型比较安全。

### 5.8 函数展开运算符

#### 5.8.1 形参展开(Rest Parameters)

除了使用可选参数或重载来制作可以接受各种固定参数数量的函数之外，我们还可以使用**休止参数**来定义接受无限制数量的参数的函数。

`rest` 参数出现在所有其他参数之后，并使用 `...` 的语法：

```tsx
function multiply(n: number, ...m: number[]) {
	return m.map((x) => n * x);
}
// 'a' 获得的值 [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
```

在TypeScript中，这些参数的类型注解是隐含的 `any[]` ，而不是 `any` ，任何给出的类型注解必须是 `Array` 或 `T[]` 的形式，或一个元组类型(我们将在后面学习).

#### 5.8.2 实参展开(Rest Arguments)

反之, 我们可以使用`spread`语法从数组中提供可变数量的参数. 例如数组的`push`方法需要任意数量的参数.

```tsx
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
console.log(arr1) //[ 1, 2, 3, 4, 5, 6 ]
```

请注意，一般来说，TypeScript并不假定数组是不可变的。这可能会导致一些令人惊讶的行为。

```tsx
// 推断的类型是 number[] -- "一个有零或多个数字的数组"。
// 不专指两个数字
const args = [8, 5];
const angle = Math.atan2(...args);
```

![image-20220316151519852](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927419.png)

这种情况的最佳解决方案取决于你的代码，但一般来说， `const context` 是最直接的解决方案

```tsx
// 推断为2个长度的元组
const args = [8, 5] as const;
// 正确
const angle = Math.atan2(...args);
```

### 5.9 参数解构

可以使用**参数重构**来方便地将作为参数提供的对象，解压到函数主体的**一个或多个局部变量**中。在 JavaScript中，它看起来像这样：

```tsx
function sum({ a, b, c }) {
	console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
```

对象的类型注解在结构的语法之后:

```tsx
function sum( { a, b, c }: { a: number, b: number, c: number }) {
	console.log(a + b + c)
}
```

这看起来有点啰嗦，但你也可以在这里使用一个命名的类型：

```tsx
// 与之前的例子相同
type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
	console.log(a + b + c);
}
```

### 5.10 函数的可分配性: 返回`void`类型

函数的 `void` 返回类型可以产生一些不寻常的，但却是预期的行为。

返回类型为 `void` 的上下文类型并不强迫函数不返回东西。另一种说法是，一个具有 `void` 返回类型的上下文函数类型（ `type vf = () => void` ），在实现时，可以返回任何其他的值，但它会被忽略。

因此，以下 `() => void` 类型的实现是有效的：

```tsx
type voidFunc = () => void
const f1: voidFunc = () => {
	return true
}
const f2: voidFunc = () => true
const f3: voidFunc = function () {
	return true
}
```

而当这些函数之一的返回值被分配给另一个变量时，它将保留 `void` 的类型

```tsx
const v1 = f1();
const v2 = f2();
const v3 = f3();
console.log(v1) // true
console.log(v2) // true
console.log(v3) // true
```

这种行为的存在使得下面的代码是有效的，即使 `Array.prototype.push` 返回一个数字，而`Array.prototype.forEach` 方法期望一个返回类型为 `void` 的函数：

```tsx
const src = [1, 2, 3];
const dst = [0];
src.forEach((el) => dst.push(el));
```

还有一个需要注意的特殊情况，当一个字面的函数定义有一个 `void` 的返回类型时，该函数**必须不返回任何东西**。

```tsx
function f2(): void {
	return true;
}
const f3 = function (): void {
	return true;
}
```

![image-20220316161210582](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927486.png)

## TypeScript学习第六章: 对象类型

在JavaScript中，我们**分组**和**传递数据**的基本方式是通过对象。在TypeScript中，我们通过对象类型来表示这些对象。

正如我们所见，它们可以是**匿名**的：

```tsx
function greet(person: { name: string; age: number }) { // 匿名对象{ name: string; age: number }
	return "Hello " + person.name;
}
```

或者可以通过使用一个**接口**来命名它们：

```tsx
interface Person { // 接口中定义了一个对象类型,包含name和age
    name: string
    age: number
}
 
function greet(person: Person) {
    return 'Hello ' + person.name
}
```

或者**类型别名**

```tsx
type Person = { // 类型别名种定义了一个对象类型, 其包含name和age
    name: string;
    age: number;
};
function greet(person: Person) {
	return "Hello " + person.name;
}
```

在上面的三个例子中，我们写了一些函数，这些函数接收包含属性 `name` （必须是一个 `string` ）和 `age` （必须是一个 `number` ）的对象.

### 6.1 属性修改器

对象类型中的每个属性都可以指定几件事：**类型**、**属性是否是可选**的，以及属**性是否可以被写入**。

### 6.2 可选属性

很多时候，我们会发现自己处理的对象可能有一个属性设置。在这些情况下，我们可以在这些属性的名 字后面加上一个问号（`?`），把它们标记为可选的

```tsx
type Shape = {}
 
interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}
 
function paintShape(opts: PaintOptions) {
	// ...
}
 
const shape: Shape = {}
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
```

在这个例子中， `xPos` 和 `yPos` 都被认为是可选的。我们可以选择提供它们中的任何一个，所以上面对 `paintShape` 的每个调用都是有效的。所有的可选性实际上是说，如果属性被设置，它最好有一个特定 的类型。

我们也可以从这些属性中读取，但当我们在 strictNullChecks 下读取时，TypeScript会告诉我们它们可能是未定义的。**因为未赋值时值为`undefined`**.

```tsx
function paintShape(opts: PaintOptions) {
    let xPos = opts.xPos;
    let yPos = opts.yPos;
    // ...
}
```

在JavaScript中，即使该属性从未被设置过，我们仍然可以访问它--它只是会给我们未定义的值。我们可以专门处理未定义。

```tsx
function paintShape(opts: PaintOptions) {
	let xPos = opts.xPos === undefined ? 0 : opts.xPos;
	let yPos = opts.yPos === undefined ? 0 : opts.yPos;
	// ...
}
```

请注意，这种为未指定的值设置默认值的模式非常普遍，以至于JavaScript有语法来支持它。

```tsx
function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {// 注意, 此时用了解构的语法, 将PaintOptions里的参数结构出来, 并给xPos和yPos设置了默认值
    console.log("x coordinate at", xPos);
    console.log("y coordinate at", yPos);
    // ...
}
```

在这里，我们为 paintShape 的参数使用了一个解构模式，并为 `xPos` 和 `yPos` 提供了默认值。现在 `xPos` 和 `yPos` 都肯定存在于 `paintShape` 的主体中，但对于 paintShape 的任何调用者来说是可选 的。

> 请注意，目前还**没有办法将类型注释放在解构模式**中。这是因为下面的语法在JavaScript中已经有了不同的含义。

```tsx
function redner(args: Shape | number) {}
function draw({ shape: Shape, xPos: number = 100 /*...*/ }) {
    render(shape);
    render(xPos);
}
```

![image-20220318114416875](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927661.png)

在一个对象解构模式中， `shape: Shape` 意味着 "获取属性 `shape` ，并在本地重新定义为一个名为 `Shape` 的变量。同样， `xPos: number` 创建一个名为`number`的变量，其值基于参数的 `xPos` 。

### 6.3 只读属性

对于TypeScript，属性也可以被标记为只读。虽然它不会在运行时改变任何行为，但在类型检查期间， 可以在一个属性前加`readonly`一个标记为只读的属性不能被写入.

```tsx
interface SomeType {
	readonly prop: string;
}
function doSomething(obj: SomeType) {
    // 可以读取 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
    // 但不能重新设置值
    obj.prop = "hello";
}
```

![image-20220318120302281](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927799.png)

使用 `readonly` 修饰符并不一定意味着一个值是完全不可改变的。或者换句话说，它的内部内容不能被 改变，它只是意味着**该属性本身不能被重新写入**。

```tsx
interface Home {
	readonly resident: { name: string; age: number };
}
function visitForBirthday(home: Home) {
    // 我们可以从'home.resident'读取和更新属性。
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
}
function evict(home: Home) {
    // 但是我们不能写到'home'上的'resident'属性本身。
    home.resident = {
    	name: "Victor the Evictor",
    	age: 42,
    };
}
```

![image-20220318121511267](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927937.png)

管理对 `readonly` 含义的预期是很重要的。在TypeScript的开发过程中，对于一个对象应该如何被使用 的问题，它是有用的信号。TypeScript在检查两个类型的属性是否兼容时，并不考虑这些类型的属性是 否是 `readonly` ，**所以 `readony` 属性也可以通过别名来改变**.

```tsx
interface Person {
    name: string;
    age: number;
}
interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}
let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
};
// 正常工作
let readonlyPerson: ReadonlyPerson = writablePerson;
console.log(readonlyPerson.age); // 打印 '42'
writablePerson.age++;
console.log(readonlyPerson.age); // 打印 '43'
```

### 6.4 索引签名

有时你并不提前知道一个类型的所有属性名称，但你知道值的类型。

在这些情况下，你可以使用一个**索引签名**来描述可能的值的类型，比如说：

```tsx
interface StringArray {
	[index: number]: string;
}
const myArray: StringArray = ['a', 'b'];
const secondItem = myArray[1];
```

上面，我们有一个 `StringArray` 接口，它有一个索引签名。这个索引签名指出，当一个 `StringArray` 被数字索引时，它将返回一个字符串。

索引签名的属性类型必须是 `string` 或 `number` 。

支持两种类型的索引器是可能的，但是从数字索引器返回的类型必须是字符串索引器返回的类型的子类型。这是因为当用 "数字 "进行索引时，JavaScript实际上在索引到一个对象之前将其转换为 "字符串"。这意味着用 100 （一个数字）进行索引和用 "100" （一个字符串）进行索引是一样的，所以两者需要一致。

```tsx
interface Animal {
	name: string;
}
interface Dog extends Animal {
    breed: string;
}
interface NotOkay {
	[x: number]: Animal;
	[x: string]: Dog;
}
```

![image-20220318122304718](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927052.png)

虽然字符串索引签名是描述 "字典 "模式的一种强大方式，但它也强制要求所有的属性与它们的返回类型相匹配。这是因为字符串索引声明 `obj.property` 也可以作为 `obj["property"]` 。在下面的例子中， `name` 的类型与字符串索引的类型不匹配，类型检查器会给出一个错误：

```tsx
interface NumberDictionary {
    [index: string]: number;
    length: number; // ok
    name: string; // error
}
```

![image-20220318122351693](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927104.png)

然而，如果索引签名是属性类型的联合，不同类型的属性是可以接受的:

```tsx
interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // 正确, length 是 number 类型
    name: string; // 正确, name 是 string 类型
}
```

最后，你可以使索引签名为只读，以防止对其索引的赋值：

```tsx
interface ReadonlyStringArray {
	readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = getReadOnlyStringArray();
myArray[2] = "Mallory";
```

你不能设置 `myArray[2]` ，因为这个索引签名是只读的。

### 6.5 扩展类型

有一些类型可能是其他类型的更具体的版本，这是很常见的。例如，我们可能有一个 BasicAddress 类 型，描述发送信件和包裹所需的字段。

```tsx
interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}
```

在某些情况下，这就足够了，但是如果一个地址的小区内有多个单元，那么地址往往有一个单元号与之 相关。我们就可以描述一个`AddressWithUnit` ：

```tsx
interface AddressWithUnit {
    name?: string;
    unit: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}
```

这就完成了工作，但这里的缺点是，当我们的变化是纯粹的加法时，我们不得不重复 BasicAddress 的 所有其他字段。相反，我们可以扩展原始的 BasicAddress 类型，只需添加 AddressWithUnit 特有的 新字段：

```tsx
interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}
 
interface AddressWithUnit extends BasicAddress {
	unit: string;
}
```

接口上的 `extends` 关键字，允许我们**有效地从其他命名的类型中复制成员**，并**添加我们想要的任何新成员**。这对于减少我们不得不写的类型声明模板，以及表明同一属性的几个不同声明可能是**相关**的意图来说，是非常有用的。例如， AddressWithUnit 不需要重复 street 属性，而且因为 street 源于 BasicAddress ，我们会知道这两种类型在某种程度上是相关的。

接口也可以从多个类型中扩展。

```tsx
interface Colorful {
	color: string;
}
interface Circle {
	radius: number;
}
interface ColorfulCircle extends Colorful, Circle {}
 
const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
}
```

### 6.6 交叉类型

接口允许我们通过扩展其他类型建立起新的类型。TypeScript提供了另一种结构，称为**交叉类型**，主要用于**组合现有的对象类型**。

交叉类型是用 `&` 操作符定义的.

```tsx
interface Colorful {
	color: string;
}
interface Circle {
	radius: number;
}
type ColorfulCircle = Colorful & Circle;
 
const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
}
```

在这里，我们将 `Colorful` 和 `Circle` 相交，产生了一个新的类型，它拥有 `Colorful` 和 `Circle` 的 所有成员。

```tsx
function draw(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
    }
// 正确
draw({ color: "blue", radius: 42 });
// 错误
draw({ color: "red", raidus: 42 });
```

![image-20220318154900691](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927362.png)

### 6.7 接口与交叉类型

我们刚刚看了两种组合类型的方法，它们很相似，但实际上有细微的不同。对于接口，我们可以使用 `extends` 子句来扩展其他类型，而对于交叉类型，我们也可以做类似的事情，并用类型别名来命名结 果。两者之间的主要区别在于如何处理冲突，这种区别通常是你在接口和交叉类型的类型别名之间选择 一个的主要原因之一。

接口可以定义多次, 多次的声明会自动合并

```tsx
interface Sister {
    name: string
}
 
interface Sister {
    age: number
}
const sisterAn: Sister = {
    name: "sisterAn"
}
const sisterRan: Sister = {
    name: "sisterRan",
    age: 12
}
```

![image-20220318172349457](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927406.png)

但是类型别名如果定义多次，会报错：

```tsx
type Sister = {
	name: string;
}
type Sister = {
	age: number;
}
```

![image-20220318172503903](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927538.png)

### 6.8 泛型对象类型

让我们想象一下，一个可以包含任何数值的盒子类型：字符串、数字、长颈鹿，等等.

```tsx
interface Box {
	contents: any;
}
```

现在，内容属性的类型是任意，这很有效，但会导致下一步的意外。

我们可以使用 `unknown` ，但这意味着在我们已经知道内容类型的情况下，我们需要做预防性检查，或者使用容易出错的类型断言。

```tsx
interface Box {
	contents: unknown;
}
 
let x: Box = {
	contents: "hello world",
};
 
// 我们需要检查 'x.contents'
if (typeof x.contents === "string") {
	console.log(x.contents.toLowerCase());
}
 
// 或者用类型断言
console.log((x.contents as string).toLowerCase());
```

一种安全的方法是为每一种类型的内容搭建不同的盒子类型:

```tsx
interface NumberBox {
	contents: number;
}
 
interface StringBox {
	contents: string;
}
 
interface BooleanBox {
	contents: boolean;
}
```

但这意味着我们必须创建不同的函数，或函数的重载，以对这些类型进行操作：

```tsx
function setContents(box: StringBox, newContents: string): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: { contents: any }, newContents: any) {
	box.contents = newContents;
}
```

那是一个很大的模板。此外，我们以后可能需要引入新的类型和重载。这是令人沮丧的，因为我们的盒 子类型和重载实际上都是一样的.

相反, 我们可以做一个通用的`Box`类型, 声明一个参数类型:

```tsx
interface Box<Type> {
    contents: Type
}
```

你可以把这句话理解为："一个类型的盒子，是它的内容具有类型的东西"。以后，当我们引用 `Box` 时， 我们必须给一个类型参数来代替 `Type` 。

```tsx
let box: Box<string>
```

把 `Box` 想象成一个真实类型的模板，其中 `Type` 是一个占位符，会被替换成其他类型。当 TypeScript看到 `Box<string>`时，它将用字符串替换 `Box<Type>` 中的每个 `Type` 实例，并最终以 `{ contents: string }` 这样的方式工作。换句话说， `Box` 和我们之前的 `StringBox` 工作起来是一样的。

```tsx
interface Box<Type> {
	contents: Type;
}
interface StringBox {
	contents: string;
}
let boxA: Box<string> = { contents: "hello" };
boxA.contents;
 
let boxB: StringBox = { contents: "world" };
boxB.contents;
 
```

**盒子是可重用的，因为Type可以用任何东西来代替**。这意味着当我们需要一个新类型的盒子时，我们根 本不需要声明一个新的盒子类型（尽管如果我们想的话，我们当然可以）。

```tsx
interface Box<Type> {
	contents: Type;
}
 
interface Apple {
	// ....
}
 
// 等价于 '{ contents: Apple }'.
type AppleBox = Box<Apple>;
```

这也意味着我们可以完全避免重载，而是使用通用函数。

```tsx
function setContents<Type>(box: Box<Type>, newContents: Type) {
	box.contents = newContents;
}
```

通过使用一个类型别名来代替：

```tsx
type Box<Type> = {
	contents: Type;
}
```

由于类型别名与接口不同，它不仅可以描述对象类型，我们还可以用它来编写**其他类型的通用辅助类 型**。

```tsx
type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
```

我们将在稍后回到类型别名。

通用**对象类型通常是某种容器类型**，**它的工作与它们所包含的元素类型无关**。**数据结构以这种方式工作是很理想的，这样它们就可以在不同的数据类型中重复使用**。

### 6.9 数组类型

我们一直在使用这样一种类型：**数组类型**。每当我们写出 `number[]` 或 `string[]` 这样的类型时，这 实际上只是 `Array<number>` 和 `Array<string>` 的缩写:

```tsx
function doSomething(value: Array<string>) {
	// ...
}
 
let myArray: string[] = ["hello", "world"];
 
// 这两样都能用
doSomething(myArray);
doSomething(new Array("hello", "world")); 
```

和上面的 Box 类型一样， `Array` 本身也是一个通用类型。

```tsx
interface Array<Type> {
    /**
    * 获取或设置数组的长度。
    */
    length: number;
    
    /**
    * 移除数组中的最后一个元素并返回。
    */
    pop(): Type | undefined;
    
    /**
    * 向一个数组添加新元素，并返回数组的新长度。
    */
    push(...items: Type[]): number;
    // ...
}
```

现代JavaScript还提供了其他通用的数据结构，比如 `Map<K, V>` , `Set<T>` , 和 `Promise<T>` 。这实际上意味着，由于 `Map` 、 `Set` 和 `Promise` 的行为方式，它们可以与任何类型的集合一起工作。

### 6.10 只读数组类型

`ReadonlyArray` 是一个特殊的类型，描述了不应该被改变的数组。

```tsx
function doStuff(values: ReadonlyArray<string>) {
    // 我们可以从 'values' 读数据...
    const copy = values.slice();
    console.log(`第一个值是 ${values[0]}`);
    // ...但我们不能改变 'vulues' 的值。
    values.push("hello!");
}
```

![image-20220318182849048](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927705.png)

和属性的 `readonly` 修饰符一样，它主要是一个**我们可以用来了解意图的工具**。当我们看到一个返回`ReadonlyArrays` 的函数时，它**告诉我们我们根本不打算改变其内容**，而当我们看到一个消耗`ReadonlyArrays` 的函数时，它告诉我们可以将任何数组传入该函数，而不用担心它会改变其内容。

与 Array 不同，没有一个我们可以使用的 `ReadonlyArray` 构造函数。

```tsx
new ReadonlyArray("red", "green", "blue");
```

![image-20220318183634902](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927776.png)

相反，我们可以将普通的 `Array` 分配给 `ReadonlyArray` 。

```tsx
const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
```

正如 TypeScript为 `Array<Type>` 提供了 `Type[]` 的速记语法一样，它也为 `ReadonlyArray<Type>`提 供了只读 `Type[]` 的速记语法。

最后要注意的是，与 readony 属性修改器不同，可分配性在普通 Array 和 ReadonlyArray 之间不是 双向的。

```tsx
let x: readonly string[] = [];
let y: string[] = [];
 
x = y;
y = x;
```

![image-20220318184952440](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927848.png)

### 6.11 元组类型

Tuple 类型是另一种 Array 类型，它确切地知道包含多少个元素，以及它在特定位置包含哪些类型。

```tsx
type StringNumberPair = [string, number];
```

这里， `StringNumberPair` 是一个 `string` 和 `number` 的元组类型。像 `ReadonlyArray` 一样，它在运行时没有表示，但对TypeScript来说是重要的。对于类型系统来说， `StringNumberPair` 描述了其 索引 0 包含字符串和 索引1 包含数字的数组。

```tsx
function doSomething(pair: [string, number]) {
    const a = pair[0];
    const b = pair[1];
    // ...
}
doSomething(["hello", 42])
```

如果我们试图索引超过元素的数量，我们会得到一个错误：

```tsx
function doSomething(pair: [string, number]) {
	const c = pair[2];
}
```

![image-20220318201702970](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927026.png)

我们还可以使用JavaScript的数组析构来对元组进行解构。

```tsx
function doSomething(stringHash: [string, number]) {
    const [inputString, hash] = stringHash;
    console.log(inputString);
    console.log(hash);
    }
```

除了这些长度检查，像这样的简单元组类型等同于 Array 的版本，它为特定的索引声明属性，并且用数字字面类型声明长度。

```tsx
interface StringNumberPair {
    // 专有属性
    length: 2;
    0: string;
    1: number;
    // 其他 'Array<string | number>' 成员...
    slice(start?: number, end?: number): Array<string | number>;
}
```

另一件你可能感兴趣的事情是，元组可以通过在元素的类型后面写出问号（`?`）—— 可选的元组，元素 只能出现在末尾，而且还影响到长度的类型。

```tsx
type Either2dOr3d = [number, number, number?];
function setCoordinate(coord: Either2dOr3d) {
    const [x, y, z] = coord;
    console.log(`提供的坐标有 ${coord.length} 个维度`);
}
```

图元也可以有其余元素，这些元素必须是 `array`/`tuple` 类型.

```tsx
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];
```

- `StringNumberBooleans` 描述了一个元组，其前两个元素分别是字符串和数字，但后面可以有任意数量的布尔。
- `StringBooleansNumber` 描述了一个元组，其第一个元素是字符串，然后是任意数量的布尔运算，最后是一个数字。
- `BooleansStringNumber` 描述了一个元组，其起始元素是任意数量的布尔运算，最后是一个字符 串，然后是一个数字。

一个有其余元素的元组没有集合的 "长度"——它只有一组不同位置的知名元素。

```tsx
function readButtonInput(...args: [string, number, ...boolean[]]) {
    const [name, version, ...input] = args;
    console.log(name)
    console.log(version)
    console.log(input)
 
    // ...
}
 
const data: boolean[] = [true, false, true]
const args:[string, number, ...boolean[]] = ["Hello world", 100, ...data]
console.log(args)
readButtonInput(...args)
// [ 'Hello world', 100, true, false, true ]
// Hello world
// 100
// [ true, false, true ]
```

基本上等同于:

```tsx
function readButtonInput(name: string, version: number, ...input: boolean[]) {
	// ...
}
```

当你想用一个其余(rest)参数接受可变数量的参数，并且你需要一个最小的元素数量，但你不想引入中间变量时，这很方便。

### 6.12 只读元组类型

关于 `tuple` 类型的最后一点说明： `tuple` 类型有只读特性，可以通过在它们前面粘贴一个 `readonly` 修饰符来指定——就像数组的速记语法一样.

```tsx
function doSomething(pair: readonly [string, number]) {
	// ...
}
```

正如你所期望的，在TypeScript中不允许向只读元组的任何属性写入:

```tsx
function doSomething(pair: readonly [string, number]) {
	pair[0] = "hello!";
}
```

在大多数代码中，元组往往被创建并不被修改，所以在可能的情况下，将类型注释为只读元组是一个很 好的默认。这一点也很重要，因为带有 `const` 断言的数组字面量将被推断为只读元组类型.

```tsx
let point = [3, 4] as const;
function distanceFromOrigin([x, y]: [number, number]) {
	return Math.sqrt(x ** 2 + y ** 2);
}
distanceFromOrigin(point);
```

在这里， `distanceFromOrigin` 从未修改过它的元素，而是期望一个可变的元组。由于 `point` 的类型被推断为只读的 `[3, 4]` ，它与 `[number, number]` 不兼容，因为该类型不能保证 `point` 的元素不被修改。

## TypeScript学习第七章: 类型操纵

### 7.0 从类型中创建类型

TS的类型系统非常强大, 因为它允许使用其他类型的术语来表达类型.

这个想法的最简单的形式是**泛型**, 我们实际上有各种各样的类型操作符可以使用. 也可以用我们已经有的值来表达类型.

通过结合各种类型操作符，我们可以用一种简洁、可维护的方式来表达复杂的操作和值. 在本节中，我们将介绍用现有的类型或值来表达一个新类型的方法.

- 泛型型 - 带参数的类型
- Keyof 类型操作符- `keyof` 操作符创建新类型
- Typeof 类型操作符 - 使用 `typeof` 操作符来创建新的类型
- 索引访问类型 - 使用 `Type['a']` 语法来访问一个类型的子集
- 条件类型 - 在类型系统中像`if`语句一样行事的类型
- 映射类型 - 通过映射现有类型中的每个属性来创建类型
- 模板字面量类型 - 通过模板字面字符串改变属性的映射类型

### 7.1 泛型

软件工程的一个主要部分是建立组件，这些组件不仅有定义明确和一致的API，而且还可以**重复使用**。能够处理今天的数据和明天的数据的组件将为你建立大型软件系统提供最灵活的能力。

泛型能够创建一个在各种类型上工作的组件，而不是单一的类型。这使得用户可以消费这些组件并使用他们自己的类型。

#### 7.1.1 Hello World

首先, 让我们做一下泛型的"Hello World": 身份函数. **身份函数使用个函数, 他将返回传入的任何内容**. 你一用类似于echo命令的方式来考虑它.

如果没有泛型, 我们将不得不给身份函数一个特定的类型.

```tsx
function echo(arg: number): number {
    return arg
}
```

或者，我们可以用任意类型来描述身份函数:

```tsx
function echo(arg: any): any {
	return arg
}
```

使用 `any` 当然是通用的，因为它将使函数接受 `arg` 类型的任何和所有的类型，但实际上**我们在函数返回时失去了关于该类型的信息**。如果我们传入一个数字，我们唯一的信息就是任何类型都可以被返回。

相反，我们需要一种方法来捕获参数的类型，以便我们也可以用它来表示返回的内容。在这里，我们将使用一个类型变量，这是一种特殊的变量，对类型而不是数值起作用。

```tsx
function echo<Type>(arg: Type): Type {
	return arg
}
```

我们现在已经在身份函数中添加了一个类型变量 `Type` 。这个 `Type` 允许我们捕获用户提供的类型（例如数字），这样我们就可以在以后使用这些信息。这里，我们再次使用`Type`作为返回类型。经过检查， 我们现在可以看到参数和返回类型使用的是相同的类型。这使得我们可以将类型信息从函数的一侧输入，然后从另一侧输出。

我们说这个版本的身份函数是通用的，因为它在一系列的类型上工作。与使用任何类型不同的是，它也和第一个使用数字作为参数和返回类型的身份函数一样精确（即，它不会丢失任何信息）。

一旦我们写好了通用身份函数，我们就可以用两种方式之一来调用它。第一种方式是将所有的参数，包括类型参数，都传递给函数：

```tsx
let output = echo<string>("myString")
```

这里我们明确地将 `Type` 设置为 `string` ，作为函数调用的参数之一，用参数周围的 `<>` 而不是 `()` 来表示。

第二种方式可能也是最常见的。这里我们使用类型参数推理——也就是说，我们希望编译器根据我们传入的参数的类型，自动为我们设置 `Type` 的值。

```tsx
let output = echo("myString")
```

注意，我们不必在角括号（`<>`）中明确地传递类型；编译器只是查看了 `"myString "`这个值，并将`Type`设置为其类型。虽然类型参数推断是一个有用的工具，可以使代码更短、更易读，但当编译器不能推断出类型时，你可能需要像我们在前面的例子中那样明确地传入类型参数，这在更复杂的例子中可能发生。

#### 7.1.2 使用通用类型变量

当你开始使用泛型时，你会注意到，当你创建像`echo` 这样的泛型函数时，编译器会强制要求你在函数主体中正确使用任何泛型参数。也就是说，你实际上是把这些参数当作是任何和所有的类型。

让我们来看看我们前面的`echo`函数。

```tsx
function echo<Type>(arg: Type): Type {
	return arg
}
```

如果我们想在每次调用时将参数`arg`的长度记录到控制台，该怎么办？我们可能很想这样写：

```tsx
function loggingIdentity<Type>(arg: Type): Type {
    console.log(arg.length);
    return arg;
}
```

![image-20220319155123528](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927125.png)

当我们这样做时，编译器会给我们一个错误，说我们在使用 `arg` 的 `.length` 成员，但我们没有说`arg` 有这个成员。记住，我们在前面说过，这些类型的变量可以代表任何和所有的类型，所以使用这个函数的人可以传入一个 `number`类型的数字 ，而这个数字没有一个 `.length` 成员。

比方说，我们实际上是想让这个函数在 `Type` 的数组上工作，而不是直接在 `Type` 上工作。既然我们在 处理数组，那么 `.length` 成员应该是可用的。我们可以像创建其他类型的数组那样来描述它。

```tsx
function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
}	
```

你可以把 `loggingIdentity` 的类型理解为 "通用函数 `loggingIdentity` 接收一个类型参数 `Type` 和一个参数`arg` ， `arg` 是一个 Type 数组，并返回一个 `Type` 数组。" 如果我们传入一个数字数组，我们会得到一个数字数组，因为`Type`会绑定到数字。这允许我们使用我们的通用类型变量 `Type` 作为我们正在处理的类型的一部分，而不是整个类型，给我们更大的灵活性。

我们也可以这样来写这个例子:

```tsx
function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length); // 数组有一个.length，所以不会再出错了
    return arg;
}
```

你可能已经从其他语言中熟悉了这种类型的风格。在下一节中，我们将介绍如何创建你自己的通用类型，如 `Array<Type>`.

#### 7.1.3 泛型接口

在前几节中，我们创建了在一系列类型上工作的通用身份函数。在这一节中，我们将探讨函数本身的类型以及如何创建通用接口。

泛型函数的类型与非泛型函数的类型一样，类型参数列在前面，与函数声明类似：

```tsx
function identity<Type>(arg: Type): Type {
	return arg
}
let myIdentity: <Type>(arg: Type) => Type = identity
```

我们也可以为类型中的通用类型参数使用一个不同的名字，只要类型变量的数量和类型变量的使用方式一致。

```tsx
function identity<Type>(arg: Type): Type {
	return arg
}
let myIdentity: <Input>(arg: Input) => Input = identity
```

我们也可以把泛型写成一个**对象字面类型的调用签名**。

```tsx
function identity<Type>(arg: Type): Type {
	return arg
}
let myIdentity: { <Type>(arg: Type): Type } = identity
```

这让我们开始编写我们的第一个泛型接口。让我们把前面例子中的对象字面类型移到一个接口中。

```tsx
interface GenericIdentityFn {
	<Type>(arg: Type): Type
}
 
function identity<Type>(arg: Type): Type {
	return arg;
}
let myIdentity: GenericIdentityFn = identity
```

在一个类似的例子中，我们**可能想把通用参数移到整个接口的参数上**。**这可以让我们看到我们的泛型是什么类型**（例如， `Dictionary<string>` 而不是仅仅 `Dictionary` ）。这使得类型参数对接口的所有其他成员可见。

```tsx
interface GenericIdentityFn<Type> {
	(arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
	return arg;
}
let myIdentity: GenericIdentityFn<number> = identity
```

请注意，我们的例子已经改变了，变成了稍微不同的东西。我们现在没有描述一个泛型函数，而是有一个**非泛型的函数签名**，它是**泛型类型的一部分**。当我们使用 `GenericIdentityFn` 时，我们现在还**需要指定相应的类型参数**（这里是：number），有效地锁定了底层调用签名将使用什么。了解什么时候把类型参数直接放在调用签名上，什么时候把它放在接口本身，将有助于描述一个类型的哪些方面是通用的。

除了**泛型接口**之外，我们还可以创建**泛型类**。注意，不可能创建泛型枚举和命名空间。

#### 7.1.4 泛型类

一个泛型类的形状与泛型接口相似。泛型类在类的名字后面有一个角括号（`<>`）中的泛型参数列表.

```tsx
class GenericNumber<NumType> {
	zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType 
    constructor(zeroValue:NumType, fn: (x: NumType, y: NumType) => NumType ) {
        this.zeroValue = zeroValue
        this.add = fn
    }
}
 
let myGenericNumber = new GenericNumber<number>(0, function (x, y) {
	return x + y;
});
 
console.log(myGenericNumber.zeroValue) // 0
console.log(myGenericNumber.add(100, 200)) // 300
```

这是对 `GenericNumber` 类相当直白的使用，但你可能已经注意到，没有任何东西限制它只能使用数字类型。我们本可以使用字符串或更复杂的对象。

就像接口一样，把类型参数放在类本身，可以让我们确保类的所有属性都与相同的类型一起工作。

正如我们在关于类的章节中提到的，一个类的类型有两个方面：**静态方面**和**实例方面**。通用类只在其实例侧而非静态侧具有通用性，所以在使用类时，静态成员不能使用类的类型参数。

#### 7.1.5 泛型约束

如果你还记得前面的例子，你有时可能想写一个通用函数，在一组类型上工作，而你对这组类型会有什么能力有一定的了解。在我们的 `loggingIdentity` 例子中，我们希望能够访问 `arg.length` 属性，但是编译器无法证明每个类型都有一个 `.length` 属性，所以它警告我们不能做这个假设:

```tsx
function loggingIdentity<Type>(arg: Type): Type {
    console.log(arg.length);
    return arg;
}
```

我们希望限制这个函数与 `any` 和所有类型一起工作，而不是与 `any` 和所有同时具有 `.length` 属性的类型一起工作。只要这个类型有这个成员，我们就允许它，但它必须至少有这个成员。要做到这一点，我们必须把我们的要求作为一个约束条件列在 `Type` 可以是什么。

为了做到这一点，我们将创建一个接口来描述我们的约束。在这里，我们将创建一个接口，它有一个单一的 `.length`属性，然后我们将使用这个结合 `extends` 关键字来表示我们的约束条件。

```tsx
interface Lengthwise { //接口声明了一个具有number的对象
	length: number;
}
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // 现在我们知道它有一个 .length 属性，所以不再有错误了
    return arg;
}
```

因为泛型函数现在被限制了，它将不再对 `any` 和`所有的类型`起作用。

```tsx
loggingIdentity(3)
```

![image-20220319163625405](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927347.png)

相反，我们需要传入其类型具有所有所需属性的值。

```tsx
loggingIdentity({ length: 10, value: 3 });
loggingIdentity(["sdas",'sdasd'])
```

#### 7.1.6 在泛型约束中使用类型参数

你可以声明一个受另一个类型参数约束的类型参数。例如，在这里我们想**从一个给定名称的对象中获取一个属性**。我们想确保我们不会意外地获取一个不存在于 `obj` 上的属性，所以我们要在这两种类型之间放置一个约束条件。

```tsx
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
	return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
getProperty(x, "m");
```

![image-20220319164046297](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927399.png)

#### 7.1.7 在泛型中使用类类型

在TS中使用泛型创建工厂时，有必要通过其构造函数来引用类的类型。比如说：

```tsx
function create<Type>(c: { new (): Type }): Type {
	return new c();
}
```

一个更高级的例子，使用**原型属性**来推断和约束类类型的构造函数和实例方之间的关系。

```tsx
class BeeKeeper {
	hasMask: boolean = true;
}
 
class ZooKeeper {
	nametag: string = "Mikle";
}
 
class Animal {
	numLegs: number = 4;
}
 
class Bee extends Animal {
	keeper: BeeKeeper = new BeeKeeper();
}
class Lion extends Animal {
	keeper: ZooKeeper = new ZooKeeper();
}
function createInstance<A extends Animal>(c: new () => A): A {
	return new c();
}
 
const lionNametag:string = createInstance(Lion).keeper.nametag;
const BeeMask:boolean = createInstance(Bee).keeper.hasMask;
console.log(lionNametag, BeeMask) // Mikle true
```

### 7.2 `keyOf`类型操作符

`keyof` 运算符**接收一个对象类型**，并**产生其键的字符串或数字字面联合**。下面的类型`P`与 `"x"|"y "`是同一类型。

```tsx
type Point = { x: number; y: number };
type P = keyof Point;
const p1:P = 'x'
const p2:P = 'y'
```

如果该类型有一个字符串或数字索引签名， `keyof` 将返回这些类型。

```tsx
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish; // number
const a:A = 0
 
type Mapish = { [k: string]: boolean };
type M = keyof Mapish; // string|number
const m:M = 'a'
const m2:M = 10
```

注意，在这个例子中， `M`是 `string|number` ——这是因为**JavaScript对象的键总是被强制为字符串，所以 `obj[0]`总是与`obj["0"]`相同.**

`keyof`类型在与映射类型结合时变得特别有用，我们将在后面进一步了解。

### 7.3 `typeof`类型操作符

JavaScript已经有一个 `typeof` 操作符，你可以在表达式上下文中使用。

```tsx
// 输出 "string"
console.log(typeof "Hello world");
```

TypeScript添加了一个 `typeof` 操作符，你可以在类型上下文中使用它来引用一个变量或属性的类型

```tsx
let s = "hello";
let n: typeof s;
n = 'world'
n= 100
```

![image-20220319171226789](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927531.png)

这对基本类型来说不是很有用，但结合其他类型操作符，你可以使用`typeof`来方便地表达许多模式。举一个例子，让我们先看看预定义的类型 `ReturnType<T>` 。它接收一个**函数类型并产生其返回类型**：

```tsx
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
```

如果我们试图在一个函数名上使用 `ReturnType` ，我们会看到一个指示性的错误。

```tsx
function f() {
	return { x: 10, y: 3 };
}
type P = ReturnType<f>
```

![image-20220319171912944](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927675.png)

请记住，值和类型并不是一回事。为了指代值`f`的类型，我们使用 `typeof` 。

```tsx
function f() {
	return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>
```

TypeScript 故意限制了你可以使用 `typeof` 的表达式种类。

具体来说，只有在标识符（即变量名）或其属性上使用`typeof`是合法的。这有助于避免混乱的陷阱，即编写你认为是在执行的代码，但其实不是。

```tsx
// 我们认为使用 = ReturnType<typeof msgbox>
let shouldContinue: typeof msgbox("Are you sure you want to continue?");
```

![image-20220319173349705](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927738.png)

### 7.4 索引访问类型

我们可以使用一个索引访问类型来查询另一个类型上的特定属性:

```tsx
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
let age1: Age = 100
let age2: Age = "1100"
```

![image-20220319173757408](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927809.png)

索引类型本身就是一个类型，所以我们可以完全使用 `unions`、 `keyof` 或者其他类型。

```tsx
interface Person {
    name: string
    age: number
    alive: boolean
}
 
// type I1 = string | number
type I1 = Person["age" | "name"];
const i11:I1 = 100
const i12:I1 = ''
 
// type I2 = string | number | boolean
type I2 = Person[keyof Person];
const i21:I2 = ''
const i22:I2 = 100
const i23:I2 = false
 
// type I3 = Person[AliveOrName];
type AliveOrName = "alive" | "name";
const aon1:AliveOrName = 'alive'
const aon2:AliveOrName = 'name'
```

如果你试图索引一个不存在的属性，你甚至会看到一个错误：

```tsx
type I1 = Person["alve"]
```

![image-20220319174550622](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927919.png)

另一个使用任意类型进行索引的例子是使用 `number` 来获取一个数组元素的类型。我们可以把它和`typeof` 结合起来，方便地获取一个数组字面的元素类型。

```tsx
const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
    ];
/* type Person = {
    name: string;
    age: number;
} */
type Person = typeof MyArray[number];
const p:Person = {
    name: 'xiaoqian',
    age: 11
}
// type Age = number
type Age = typeof MyArray[number]["age"];
const age:Age = 11
 
// 或者
// type Age2 = number
type Age2 = Person["age"];
const age2:Age2 = 11
```

你只能在索引时使用类型，这意味着你不能使用 `const` 来做一个变量引用:

```tsx
const key = "age";
type Age = Person[key];
```

![image-20220319181153794](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927035.png)

然而，你可以使用类型别名来实现类似的重构风格：

```tsx
type key = "age";
type Age = Person[key];
```

### 7.5 条件类型

在大多数有用的程序的核心，我们必须根据输入来做决定。`JavaScript`程序也不例外，但鉴于数值可以很容易地被内省，这些决定也是基于输入的类型。条件类型有助于描述输入和输出的类型之间的关系。

```tsx
interface Animal {
	live(): void;
}
interface Dog extends Animal {
	woof(): void;
}
// type Example1 = number
type Example1 = Dog extends Animal ? number : string;
// type Example2 = string
type Example2 = RegExp extends Animal ? number : string;
```

条件类型的形式看起来有点像JavaScript中的条件表达式（ `condition? trueExpression : falseExpression`)

```tsx
SomeType extends OtherType ? TrueType : FalseType;
```

当 **extends 左边的类型可以赋值给右边的类型时，那么你将得到第一个分支中的类型（"真 "分支）； 否则你将得到后一个分支中的类型（"假 "分支）**。

**子类可以赋值给父类!!!**

从上面的例子来看，条件类型可能并不立即显得有用——我们可以告诉自己是否 `Dog extends Animal` ，并选择 `number` 或 `string` ！

但条件类型的威力来自于它所带来的好处。条件类型的力量来自于将它们与泛型一起使用。

例如，让我们来看看下面这个 `createLabel` 函数：

```tsx
interface IdLabel {
	id: number /* 一些字段 */;
}
interface NameLabel {
	name: string /* 另一些字段 */;
}
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
	throw "unimplemented";
}
```

`createLabel`的这些重载描述了一个单一的JavaScript函数，该函数根据其输入的类型做出选择。注意 一些事情：

- 如果一个库必须在其API中反复做出同样的选择，这就会变得很麻烦。
- 我们必须创建三个重载：一个用于确定类型的情况（一个用于 `string` ，一个用于 `number` ），一个用于最一般的情况（取一个 `string | number` ）。对于 `createLabel` 所能处理的每一种新类型，重载的数量都会呈指数级增长。

相反，我们可以在一个条件类型中对该逻辑进行编码：

```tsx
type NameOrId<T extends number | string> = T extends number
? IdLabel
: NameLabel;
```

然后我们可以使用该条件类型，将我们的重载简化为一个没有重载的单一函数。

```tsx
interface IdLabel {
	id: number /* some fields */;
}
interface NameLabel {
	name: string /* other fields */;
}
type NameOrId<T extends number | string> = T extends number? IdLabel: NameLabel;
 
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
	throw "unimplemented";
}
 
// let a: NameLabel
let a = createLabel("typescript");
 
// let b: IdLabel
let b = createLabel(2.8);
 
// let c: NameLabel | IdLabel
let c = createLabel(Math.random() ? "hello" : 42);
```

#### 7.5.1 条件类型约束

通常，条件类型中的检查会给我们提供一些新的信息。就像用类型守卫缩小范围可以给我们一个更具体的类型一样，条件类型的真正分支将通过我们检查的类型进一步约束泛型。

例如, 让我们来看下面的例子:

```tsx
type Message<T> = T["message"]
```

![image-20220319215006086](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927248.png)

在这个例子中，TypeScript出错是因为 `T` 不知道有一个叫做 `message` 的属性。我们可以对 `T` 进行约束，TypeScript就不会再抱怨。

```tsx
type MessageOf<T extends { message: unknown }> = T["message"];
interface Email {
	message: string;
}
type EmailMessageContents = MessageOf<Email>;
```

然而，如果我们想让 `MessageOf` 接受任何类型，并在消息属性不可用的情况下，默认为 `never` 类型 呢？我们可以通过将约束条件移出，并引入一个条件类型来做到这一点。

```tsx
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
 
interface Email {
	message: string;
}
 
interface Dog {
	bark(): void;
}
 
// type EmailMessageContents = string
type EmailMessageContents = MessageOf<Email>;
const emc:EmailMessageContents = 'balabala...'
// type DogMessageContents = never
type DogMessageContents = MessageOf<Dog>;
const dmc:DogMessageContents = 'error' as never
```

在真正的分支中，TypeScript知道 `T` 会有一个消息属性。

作为另一个例子，我们也可以写一个叫做 `Flatten` 的类型，**将数组类型平铺到它们的元素类型上**，但在其他方面则不做处理.

```tsx
type Flatten<T> = T extends any[] ? T[number] : T;
 
// 提取出元素类型
// type Str = string
type Str = Flatten<string[]>
 
 
// 单独一个类型。
// type Num = number
type Num = Flatten<number>
```

当 `Flatten` 被赋予一个数组类型时，它使用一个带有数字的索引访问来获取 `string[]` 的元素类型。 否则，它只是返回它被赋予的类型。

#### 7.5.2 在条件类型内进行推理

我们只是发现自己使用条件类型来应用约束条件，然后提取出类型。这最终成为一种常见的操作，而条件类型使它变得更容易。

条件类型为我们提供了一种方法来推断我们在真实分支中使用 `infer` 关键字进行对比的类型。例如, 我们可以在 `Flatten` 中推断出元素类型，而不是用索引访问类型 "手动 "提取出来。

```tsx
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type
```

在这里，我们使用 `infer` 关键字来声明性地引入一个名为 `Item` 的新的通用类型变量，而不是指定如何在真实分支中检索 `Type` 的元素类型。这使我们不必考虑如何挖掘和探测我们感兴趣的类型的结构。

我们可以使用 `infer` 关键字编写一些有用的辅助类型别名。例如，对于简单的情况，我们可以从函数类型中提取出返回类型。

```tsx
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return? Return : never;
 
// type Num = number
type Num = GetReturnType<() => number>;
// type Str = string
type Str = GetReturnType<(x: string) => string>;
// type Bools = boolean[]
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
// 给泛型传入 string 类型，条件类型会返回 never
type Never = GetReturnType<string>
const nev:Never = 'error' as never
```

当从一个具有多个调用签名的类型（如重载函数的类型）进行推断时，从最后一个签名进行推断（据推测，这是最容许的万能情况）。不可能根据参数类型的列表来执行重载解析。

```tsx
declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;
 
// type T1 = string | number
type T1 = ReturnType<typeof stringOrNum>;
```

#### 7.5.3 分布式条件类型

当条件类型作用于一个通用类型时，当给定一个联合类型时，它们就变成了分布式的。例如，以下面的例子为例：

```tsx
type ToArray<Type> = Type extends any? Type[] : never;
```

如果我们将一个联合类型插入`ToArray`，那么条件类型将被应用于该联合的每个成员。

```tsx
type ToArray<Type> = Type extends any ? Type[] : never;
// type StrArrOrNumArr = string[] | number[]
type StrArrOrNumArr = ToArray<string | number>;
```

这里发生的情况是，`StrArrOrNumArr`分布在：

```tsx
string | number;
```

并对联合的每个成员类型进行映射，以达到有效的目的：

```tsx
ToArray<string> | ToArray<number>;
```

这给我们留下了：

```tsx
string[] | number[];`

```

通常情况下，分布性是需要的行为。为了避免这种行为，你可以用**方括号包围 `extends` 关键字的每一边**。

```tsx
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
 
// 'StrArrOrNumArr'不再是一个联合类型
// type StrArrOrNumArr = (string | number)[]
type StrArrOrNumArr = ToArrayNonDist<string | number>;
```

### 7.6 映射类型

当你不想重复定义类型，一个类型可以以另一个类型为基础创建新类型。

映射类型建立在索引签名的语法上，**索引签名用于声明没有被提前声明的属性类型**。

```tsx
type OnlyBoolsAndHorses = {
	[key: string]: boolean | Horse
}
 
const confroms: OnlyBoolsAndHorses = {
	del: true,
    rodney: false
}
```

映射类型是一种通用类型，它使用 `Property in keyof Type` 的联合（经常通过 `keyof` 创建）迭代键来创建一个类型。

```tsx
type OptionsFlags<Type> = {
	[Property in keyof Type]: boolean;
};
```

在这个例子中， `OptionsFlags` 将从 `Type` 类型中获取所有属性，并将它们的值改为布尔值。

```tsx
type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
};
 
/*
type FeatureOptions = {
    darkMode: boolean;
    newUserProfile: boolean;
}
*/
type FeatureOptions = OptionsFlags<FeatureFlags>;
```

#### 7.6.1 映射修改器

在映射过程中，有两个额外的修饰符可以应用： `readonly` 和 `?` ，它们分别影响**可变性**和**可选性**。

你可以通过用 `-` 或 `+` 作为前缀来删除或添加这些修饰语。**如果你不加前缀，那么就假定是 `+`** 。

```tsx
type CreateMutable<Type> = {
    // 从一个类型的属性中删除 "readonly"属性
    -readonly [Property in keyof Type]: Type[Property];
};
 
type LockedAccount = {
    readonly id: string;
    readonly name: string;
};
 
/*
type UnlockedAccount = {
    id: string;
    name: string;
}
*/
 
type UnlockedAccount = CreateMutable<LockedAccount>
// 从一个类型的属性中删除 "可选" 属性
type Concrete<Type> = {
	[Property in keyof Type]-?: Type[Property];
};
type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
};
/*
type User = {
    id: string;
    name: string;
    age: number;
}
*/
type User = Concrete<MaybeUser>;
```

#### 7.6.2 通过 `as` 做`key`重映射

在TypeScript 4.1及以后的版本中，你可以通过映射类型中的`as`子句重新映射映射类型中的键。

```tsx
type MappedTypeWithNewProperties<Type> = {
	[Properties in keyof Type as NewKeyType]: Type[Properties]
}
```

你可以利用`模板字面类型`等功能，从先前的属性名称中创建新的属性名称。

`Capitalize<string & Property>`来是string首字母大写

```tsx
type Getters<Type> = {
	[Property in keyof Type as `get${Capitalize<string & Property>}`]: () =>Type[Property]
};
 
 
interface Person {
    name: string;
    age: number;
    location: string;
}
/*
type LazyPerson = {
    getName: () => string;
    getAge: () => number;
    getLocation: () => string;
}
*/
type LazyPerson = Getters<Person>;
```

你可以通过条件类型产生 `never` 滤掉的键。

`Exclude<Property, "kind">` 过滤掉key为"kind"的键

```tsx
// 删除 "kind"属性
type RemoveKindField<Type> = {
	[Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};
 
/*
type KindlessCircle = {
	radius: number;
}
*/
 
interface Circle {
    kind: "circle";
    radius: number;
}
 
type KindlessCircle = RemoveKindField<Circle>;
```

你可以映射任意的联合体，不仅仅是 `string | number | symbol` 的联合体，还有任何类型的联合体.

```tsx
type EventConfig<Events extends { kind: string }> = {
	[E in Events as E["kind"]]: (event: E) => void;
}
 
type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };
/*
type Config = {
    square: (event: SquareEvent) => void;
    circle: (event: CircleEvent) => void;
}
*/
 
type Config = EventConfig<SquareEvent | CircleEvent>
```

#### 7.6.3 进一步探索

映射类型与本类型操作部分的其他功能配合得很好，例如，这里有一个使用条件类型的映射类型 ，它根据一个对象的属性 `pii` 是否被设置为字面意义上的 `true` ，返回 `true` 或 `false` .

```tsx
type ExtractPII<Type> = {
	[Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};
/*
type ObjectsNeedingGDPRDeletion = {
    id: false;
    name: true;
}
*/
type DBFields = {
    id: { format: "incrementing" };
    name: { type: string; pii: true };
};
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>
```

## TypeScript学习第八章: 类

TS提供了对ES2015(ES6)中引入的`class`关键词的完全支持.

与其他的JS语言一样,TS增加了类型注释和其他语法, 允许你表达类和其他类型之间的关系.

### 8.1 类成员

这里有一个最基本的类------一个空的类

```tsx
class Point {}
```

这个类还不是很有用, 所以我们开始添加一些成员.

#### 8.1.1 类属性

在一个类上声明字段, 创建一个公共的可写属性: 映射类型是一种泛型类型，它使用`PropertyKey` (通常通过`key of`创建)的联合来迭代键来创建类型:

```tsx
class Point {
    x: number
    y: number
}
 
const pt = new Point()
pt.x = 0
pt.y = 0
```

与其他位置一样，类型注解是可选的，但如果不指定，将是一个隐含的 `any` 类型。

字段也可以有初始化器；这些初始化器将在类被实例化时自动运行。

```tsx
class Point {
	x = 0
	y = 0
}
 
const pt = new Point()
// Prints 0, 0
console.log(`${pt.x}, ${pt.y}`)
```

就像 `const` 、 `let` 和 `var` 一样，一个类属性的初始化器将被用来推断其类型。

```tsx
const pt = new Point();
pt.x = "0";
```

![image-20220320211743010](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927446.png)

- `--strictPropertyInitialization`

`strictPropertyInitialization`设置控制是否需要在构造函数中初始化类字段。

```tsx
class GoodGreeter {
    name: string;
    constructor() {
    	this.name = "hello";
    }
}
```

请注意，该字段需要在构造函数本身中初始化。TypeScript不会分析你从构造函数中调用的方法来检测初始化，因为派生类可能会覆盖这些方法而无法初始化成员。

**如果你打算通过构造函数以外的方式来确定初始化一个字段（例如，也许一个外部库为你填充了你的类的一部分），你可以使用确定的赋值断言操作符 `!` 。**

```tsx
class OKGreeter {
    // 没有初始化, 但没报错
    name!: string
}
```

#### 8.1.2 `readonly`

字段的前缀可以是`readonly`修饰符。这可以防止在构造函数之外对该字段进行赋值。

```tsx
class Greeter {
    readonly name: string = "world";
    constructor(otherName?: string) {
    	if (otherName !== undefined) {
    		this.name = otherName;
		}
	}
    err() {
    	this.name = "not ok";
    }
}
 
const g = new Greeter();
g.name = "also not ok";
```

![image-20220320231821746](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927552.png)

#### 8.1.3 构造器

类构造函数与函数非常相似。你可以添加带有类型注释的参数、默认值和重载:

```tsx
class Point {
	x: number
	y: number
	
	// 带默认值的正常签名
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
class Point {
    x: number;
    y: string;
    
	// 重载
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
    	if(y !== undefinded) {
            this.x = xs
            this.y = y
        } else {
            this.y = xs
        }
    }
}
```

类的构造函数签名和函数签名之间只有一些区别：

- 构造函数不能有类型参数--这属于外层类的声明，我们将在后面学习。
- 构造函数不能有返回类型注释——类的实例类型总是被返回的.

##### Super 调用

就像在JavaScript中一样，如果你有一个基类，**在使用任何 `this.` 成员之前，你需要在构造器主体中调用 `super();`** .

```tsx
class Base {
	k = 4;
}
class Derived extends Base {
    constructor() {
        // 在ES5中打印一个错误的值；在ES6中抛出异常。
        console.log(this.k);
        super();
	}
}
```

![image-20220321100612315](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927617.png)

在JavaScript中，忘记调用 `super` 是一个很容易犯的错误，但TypeScript会在必要时告诉你。

#### 8.1.4 方法

一个类上的函数属性被称为方法。方法可以使用与函数和构造函数相同的所有类型注释。

```tsx
class Point {
    x = 10;
    y = 10;
    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    }
}
```

除了标准的类型注解，TypeScript并没有为方法添加其他新的东西。

请注意，在一个方法体中，仍然必须通过 this 访问字段和其他方法。方法体中的非限定名称将总是指代包围范围内的东西。

```tsx
let x: number = 0;
class C {
    x: string = "hello";
    m() {
        // 这是在试图修改第1行的'x'，而不是类属性。
        x = "world";
    }
}
```

#### 8.1.5 Getters/ Setters

类也可以有访问器:

```tsx
class C {
	_length = 0
    get length() {
        return this._length
    }
    set length(value) {
        this._length = value
    }
}
```

> 请注意，一个没有额外逻辑的字段支持的 get/set 对在JavaScript中很少有用。如果你不需要在 get/set 操作中添加额外的逻辑，暴露公共字段也是可以的.

TypeScript对访问器有一些特殊的推理规则:

- 如果存在 `get` ，但没有 `set` ，则该属性自动是只读的.
- 如果没有指定`setter`参数的类型，它将从`getter`的返回类型中推断出来.
- 访问器和设置器必须有相同的成员可见性.

从TS4.3开始, 可以有不同类型的访问器用于获取和设置.

```tsx
class Thing {
    _size = 0;
    
    get size(): number {
        return this._size;
    }
    
    set size(value: string | number | boolean) {
        let num = Number(value);
 
        // 不允许NaN、Infinity等
        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }
        
        this._size = num;
    }
}
```

#### 8.1.6 索引签名

类可以声明索引签名；这些签名的作用与其他对象类型的索引签名相同。

```tsx
class MyClass {
    [s: string]: boolean | ((s: string) => boolean);
    check(s: string) {
    	return this[s] as boolean;
    }
}
```

因为索引签名类型需要同时捕获方法的类型，所以要有用地使用这些类型并不容易。一般来说，**最好将索引数据存储在另一个地方，而不是在类实例本身**。

### 8.2 类继承

像其他具有面向对象特性的语言一样，JavaScript中的类可以继承自基类。

#### 8.2.1 `implements`子句

你可以使用一个 `implements` 子句来检查一个类，是否满足了一个特定的接口。如果一个类不能正确地实现它，就会发出一个错误。

```tsx
interface Pingable {
	ping(): void;
}
class Sonar implements Pingable {
    ping() {
    	console.log("ping!");
    }
}
class Ball implements Pingable {
    pong() {
    	console.log("pong!");
    }
}
```

![image-20220321110136536](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927723.png)

类也可以实现多个接口, 例如`class C implements A, B {}`

##### 注意事项

重要的是要明白, `implements`子句只是检查类是否可以被当作接口类型来对待. 它根本不会改变类的类型或方法. 一个常见的错误来源于是认为`implements`子句会改变类的类型, 实际上它不会.

```tsx
interface Checkable {
    check(name:string): boolean
}
 
class NameChecker implements Checkable {
    check(s) {
        // any: 注意这里没有错误
        return s.toLowercse() === 'ok'
    }
}
```

![image-20220321112155234](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927793.png)

在这个例子中，我们也许期望 s 的类型会受到 `check` 的 `name: string` 参数的影响。事实并非如此--实现子句并没有改变类主体的检查方式或其类型的推断。

同样地，实现一个带有可选属性的接口并不能创建该属性。

```tsx
interface A {
    x: number;
    y?: number;
}
 
class C implements A {
	x = 0;
}
 
const c = new C();
c.y = 10;
```

![image-20220321113416176](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927956.png)

#### 8.2.2 `extends`子句

类可以从基类中扩展出来。**派生类**拥有其**基类的所有属性和方法**，**也可以定义额外的成员**。

```tsx
class Animal {
    move() {
    	console.log("Moving along!");
    }
}
 
 
class Dog extends Animal {
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}
const d = new Dog();
 
// 基类的类方法
d.move();
 
// 派生的类方法
d.woof(3);
```

#### 8.2.3 重写方法(遵守基类契约)

派生类也可以覆盖基类的一个字段或属性. 你可以使用`super.`语法来访问基类方法. 注意，因为JavaScript类是一个简单的查找对象，没有 "超级字段 "的概念.

TypeScript强制要求派生类总是其基类的一个子类型.

例如，这里有一个合法的方法来覆盖一个方法.

```tsx
class Base {
    greet() {
    	console.log("Hello, world!");
    }
}
class Derived extends Base {
    greet(name?: string) {
        if (name === undefined) {
        	super.greet();
        } else {
        	console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}
const d = new Derived();
d.greet();
d.greet("reader");
```

**派生类遵循其基类契约是很重要的**。请记住，**通过基类引用来引用派生类实例**是非常常见的（而且总是合法的！）。

```tsx
// 通过基类引用对派生实例进行取别名
const b: Base = d;
// 没问题
b.greet();
```

如果`Derived`没有遵守`Base`的约定怎么办？

```tsx
class Base {
    greet() {
    	console.log("Hello, world!");
    }
}
class Derived extends Base {
    // 使这个参数成为必需的
    greet(name: string) {
    	console.log(`Hello, ${name.toUpperCase()}`);
    }
}
```

![image-20220321132941006](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927166.png)

如果我们不顾错误编译这段代码，这个样本就会崩溃：

```tsx
const b: Base = new Derived();
// 崩溃，因为 "名称 "将是 undefined。
b.greet();
```

![image-20220321135711089](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927221.png)

#### 8.2.4 初始化顺序

在某些情况下，JavaScript类的初始化顺序可能会令人惊讶。让我们考虑一下这段代码：

```tsx
class Base {
    name = "base";
    constructor() {
    	console.log("My name is " + this.name);
    }
}
 
class Derived extends Base {
	name = "derived";
}
// 打印 "base", 而不是 "derived"
const d = new Derived();
```

这里发生了什么？

按照JavaScript的定义，类初始化的顺序是：

- 基类的字段被初始化
- 基类构造函数运行
- 派生类的字段被初始化
- 派生类构造函数运行

这意味着基类构造函数在自己的构造函数中看到了自己的`name`值，因为派生类的字段初始化还没有运行.

#### 8.2.5 继承内置类型

> 注意: 如果你不打算继承Array、Error、Map等内置类型，或者你的编译目标明确设置为 ES6/ES2015或以上，你可以跳过本节.

在ES2015中，返回对象的构造函数隐含地替代了 `super(...)` 的任何调用者的 `this` 的值。生成的构造函数代码有必要捕获 `super(...)` 的任何潜在返回值并将其替换为 `this` 。

因此，子类化 `Error` 、 `Array` 等可能不再像预期那样工作。这是由于 `Error` 、 `Array`等的构造函数使用ECMAScript 6的 `new.target` 来调整原型链；然而，在ECMAScript 5中调用构造函数时，没有办法确保 `new.target` 的值。其他的下级编译器一般默认有同样的限制。

对于一个像下面这样的子类:

```tsx
class MsgError extends Error {
    
    constructor(m: string) {
    	super(m);
    }
    
    sayHello() {
    	return "hello " + this.message;
    }
}
```

你可能会发现：

- 方法在构造这些子类所返回的对象上可能是未定义的，所以调用 `sayHello` 会导致错误。
- `instanceof`将在子类的实例和它们的实例之间被打破，所以 `(new MsgError()) instanceof MsgError` 将返回 `false` 。

作为建议, 你可以在任何`super(...)`调用后立即手动调整原型.

```tsx
class MsgError extends Error {
    constructor(m: string) {
    	super(m);
    	// 明确地设置原型。
    	Object.setPrototypeOf(this, MsgError.prototype);
    }
    sayHello() {
    	return "hello " + this.message;
    }
}
```

然而， `MsgError` 的任何子类也必须手动设置原型。对于不支持 `Object.setPrototypeOf` 的运行时， 你可以使用`__proto__` 来代替。

不幸的是，这些变通方法在IE10 和更早的版本上不起作用。我们可以手动将原型中的方法复制到实例本身（例如 M`sgError.prototype` 到 `this` ），但是原型链本身不能被修复。

### 8.3 成员的可见性

你可以使用TypeScript来控制某些方法或属性对类外的代码是否可见.

#### 8.3.1 `public`

类成员的默认可见性是公共( `public` )的。一个公共( `public` )成员可以在任何地方被访问.

```tsx
class Greeter {
    public greet() {
    	console.log("hi!");
    }
}
 
const g = new Greeter();
g.greet();
```

因为 `public` 已经是默认的可见性修饰符，所以你永远不需要在类成员上写它，但为了风格/可读性的原因，可能会选择这样做。

#### 8.3.2 `protected`

受保护的( `protected` )成员只对它们所声明的类的子类可见.

```tsx
class Greeter {
    public greet() {
    	console.log("Hello, " + this.getName());
    }
    protected getName() {
    	return "hi";
    }
}
 
class SpecialGreeter extends Greeter {
    public howdy() {
        // 在此可以访问受保护的成员
        console.log("Howdy, " + this.getName());
    }
}
const g = new SpecialGreeter();
g.greet(); // 没有问题
g.getName(); // 无权访问
```

![image-20220321150131541](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308051927485.png)

- 受保护成员的暴露

派生类需要遵循它们的基类契约，但可以选择公开具有更多能力的基类的子类型。这包括将受保护的成员变成公开。

```tsx
class Base {
	protected m = 10;
}
 
class Derived extends Base {
    // 没有修饰符，所以默认为'公共'('public')
    m = 15;
}
 
const d = new Derived();
console.log(d.m); // OK
```

#### 8.2.3 `private`

`private`和`protected`一样, 但不允许从子类中访问该成员.

```tsx
class Base {
	private x = 0;
}
 
const b = new Base();
// 不能从类外访问
console.log(b.x);
class Base {
    private x = 0;
}
 
const b = new Base();
 
class Derived extends Base {
    showX() {
        // 不能在子类中访问: 属性"x"为私有属性, 只能在类
        console.log(this.x);
    }
}
```

因为私有( `private` )成员对派生类是不可见的，所以派生类不能增加其可见性.

- 跨实例的私有访问

不同的OOP语言对同一个类的不同实例，是否可以访问对方的私有成员，有不同的处理方法。虽然像 Java、C##、C++、Swift和PHP等语言允许这样做，但Ruby不允许。

TypeScript确实允许跨实例的私有访问:

```tsx
class A {
    private x = 10;
    
    public sameAs(other: A) {
        // 可以访问
        return other.x === this.x;
    }
}
```

- 注意事项

像TypeScript类型系统的其他方面一样， `private` 和 `protected` 只在类型检查中被强制执行。

这意味着JavaScript的运行时解构，如`in`或简单的属性查询，仍然可以访问一个私有或保护的成员。

```tsx
class MySafe {
    private secretKey = 12345;
}
 
// 在JS环境中...
const s = new MySafe();
// 将打印 12345
console.log(s.secretKey);
```

`private` 也允许在类型检查时使用括号符号进行访问。这使得私有声明的字段可能更容易被单元测试之类的东西所访问，缺点是这些字段是软性私有的，不能严格执行私有特性。

```tsx
class MySafe {
    private secretKey = 12345;
}
const s = new MySafe();
// 在类型检查期间不允许
console.log(s.secretKey);
// 正确
console.log(s["secretKey"]);
```

与TypeScript的 `private` 不同，JavaScript的 `private` 字段(##)在编译后仍然是 `private` 的，并且不提供前面提到的像括号符号访问那样的转义窗口，使其成为硬 `private`.

```tsx
class Dog {
    ##barkAmount = 0;
    personality = "happy";
    
    constructor() {
        // 0
        console.log(this.##barkAmount)
	}
}
 
const dog = new Dog()
// undefined
console.log(dog.barkAmount)
```

当编译到ES2021或更少时，TypeScript将使用`WeakMaps`来代替 `##` 。

```tsx
"use strict";
var _Dog_barkAmount;
 
class Dog {
    constructor() {
        _Dog_barkAmount.set(this, 0);
        this.personality = "happy";
    }
}
 
_Dog_barkAmount = new WeakMap();
```

如果你需要保护你的类中的值免受恶意行为的影响，你应该使用提供硬运行时隐私的机制，如**闭包**、 `WeakMaps` 或**私有字段**。请注意，这些在运行时增加的隐私检查可能会影响性能。

### 8.4 静态成员

类可以有静态成员。这些成员并不与类的特定实例相关联。它们**可以通过类的构造函数对象本身来访问。**

```tsx
class MyClass {
    static x = 0;
    static printX() {
    	console.log(MyClass.x);
	}
}
console.log(MyClass.x);
MyClass.printX();
```

静态成员也可以使用相同的 `public` 、 `protected` 和 `private` 可见性修饰符

```tsx
class MyClass {
	private static x = 0;
}
console.log(MyClass.x);
```

静态成员也会被继承

```tsx
class Base {
    static getGreeting() {
    	return "Hello world";
    }
}
 
class Derived extends Base {
	myGreeting = Derived.getGreeting();
}
```

#### 8.4.1 特殊静态名称

一般来说，从函数原型覆盖属性是不安全的/不可能的。因为类本身就是可以用 `new` 调用的函数，所以某些静态名称不能使用。像 `name` 、 `length`和`call`这样的函数属性，定义为静态成员是无效的。

```tsx
class S {
	static name = "S!"
}
```

#### 8.4.2 为什么没有静态类？

TypeScript（和JavaScript）没有像C##和Java那样有一个叫做静态类的结构。

这些结构体的存在，只是因为这些语言强制所有的数据和函数都在一个类里面；因为这个限制在TypeScript中不存在，所以不需要它们。**一个只有一个实例的类，在JavaScript/TypeScript中通常只是表示为一个普通的对象。**

例如，我们不需要TypeScript中的 "静态类 "语法，因为一个普通的对象（甚至是顶级函数）也可以完成这个工作。

```tsx
// 不需要 "static" class
class MyStaticClass {
	static doSomething() {}
}
 
// 首选 (备选 1)
function doSomething() {}
 
// 首选 (备选 2)
const MyHelperObject = {
	dosomething() {},
};
```

### 8.5 类里的`static`区块

静态块允许你写一串有自己作用域的语句，可以访问包含类中的私有字段。这意味着我们可以用写语句的所有能力来写初始化代码，不泄露变量，并能完全访问我们类的内部结构。

```tsx
class Foo {
    static ##count = 0;
 
    get count() {
    	return Foo.##count;
    }
 
    static {
        try {
            const lastInstances = {
                length: 100
            };
            Foo.##count += lastInstances.length;
        }
        catch {}
    }
}
```

### 8.6 泛型类

类，和接口一样，可以是泛型的。当一个泛型类用`new`实例化时，其类型参数的推断方式与函数调用的方式相同。

```tsx
class Box<Type> {
    contents: Type
    constructor(value: Type) {
        this.contents = value
    }
}
 
// const b: Box<string>
const b = new Box("hello")
```

类可以像接口一样使用通用约束和默认值.

- 静态成员中的类型参数

这段代码事不合法的， 可能不太明显， 为什么呢？

```tsx
class Box<Type> {
    // 静态成员不能引用类的类型参数。
    static defaultValue: Type;
}
 
// Box<string>.defaultValue = 'hello'
// console.log(Box<number>.defaultValue)
```

请记住，类型总是被完全擦除的! 在运行时，只有一个`Box.defaultValue`属性。这意味着设置`Box.defaultValue`（如果有可能的话）也会改变`Box.defaultValue`，这可不是什么好事。

**一个泛型类的静态成员永远不能引用该类的类型参数.**

### 8.7 类运行时的`this`

重要的是要记住，TS并没有改变JS的运行时行为，而JavaScript的运行时行为偶尔很奇特。

比如，JavaScript对这一点的处理确实是不寻常的：

```tsx
class MyClass {
    name = "MyClass";
    getName() {
    	return this.name;
    }
}
const c = new MyClass();
 
const obj = {
    name: "obj",
    getName: c.getName,
};
 
// 输出 "obj", 而不是 "MyClass"
console.log(obj.getName())
```

长话短说，默认情况下，函数内this的值取决于函数的调用方式。在这个例子中，因为函数是通过obj引用调用的，所以它的this值是obj而不是类实例。

这很少是你希望发生的事情! TypeScript提供了一些方法来减轻或防止这种错误.

#### 1. 箭头函数

如果你有一个经常会被调用的函数，失去了它的 `this` 上下文，那么使用一个箭头函数而不是方法定义是有意义的。

```tsx
class MyClass {
    name = "MyClass";
    getName = () => {
    	return this.name;
    };
}
 
const c = new MyClass();
const g = c.getName;
// 输出 "MyClass"
console.log(g());
```

这有一些权衡：

- this 值保证在运行时是正确的，即使是没有经过TypeScript检查的代码也是如此。
- 这将使用更多的内存，因为每个类实例将有它自己的副本，每个函数都是这样定义的。
- 你不能在派生类中使用 `super.getName` ，因为在原型链中没有入口可以获取基类方法。

#### 2. `this`参数

在方法或函数定义中，一个名为 `this` 的初始参数在TypeScript中具有特殊的意义。这些参数在编译过程中会被删除。

```tsx
// 带有 "this" 参数的 TypeScript 输入
function fn(this: SomeType, x: number) {
	/* ... */
}
// 编译后的JavaScript结果
function fn(x) {
	/* ... */
}
```

TypeScript检查调用带有 `this` 参数的函数，是否在正确的上下文中进行。我们可以不使用箭头函数，而是在方法定义中添加一个 `this` 参数，以静态地确保方法被正确调用.

```tsx
class MyClass {
    name = "MyClass";
    getName(this: MyClass) {
    	return this.name;
    }
}
 
const c = new MyClass();
// 正确
c.getName();
 
// 错误
const g = c.getName;
console.log(g());
```

这种方法做出了与箭头函数方法相反的取舍：

- JavaScript调用者仍然可能在不知不觉中错误地使用类方法
- 每个类定义只有一个函数被分配，而不是每个类实例一个函数
- 基类方法定义仍然可以通过 super 调用。

### 8.8 `this`类型

在类中，一个叫做 `this` 的特殊类型动态地指向当前类的类型。让我们来看看这有什么用：

```tsx
class Box {
    contents: string = "";
    // (method) Box.set(value: string): this
    set(value: string) {
        this.contents = value;
        return this;
    }
}
```

在这里，TypeScript推断出 `set` 的返回类型是 `this` ，而不是 `Box` 。现在让我们做一个`Box`的子类：

```tsx
class ClearableBox extends Box {
    clear() {
    	this.contents = "";
    }
}
const a = new ClearableBox();
 
// const b: ClearableBox
const b = a.set("hello");
console.log(b)
```

你也可以在参数类型注释中使用 `this` :

```tsx
class Box {
    content: string = "";
    sameAs(other: this) {
    	return other.content === this.content;
    }
}
const box = new Box()
console.log(box.sameAs(box))
```

这与其他写法不同：Box，如果你有一个派生类，它的`sameAs`方法现在只接受该同一派生类的其他实例。

```tsx
class Box {
    content: string = "";
    sameAs(other: this) {
    	return other.content === this.content;
    }
}
class DerivedBox extends Box {
	otherContent: string = "?";
}
const base = new Box();
const derived = new DerivedBox();
derived.sameAs(base);  // 报错 类型 "Box" 中缺少属性 "otherContent"，但类型 "DerivedBox" 中需要该属性。
```

### 8.9 基于类型守卫的`this`（**？？？不太会）**

你可以在类和接口的方法的返回位置使用 `this is Type` 。当与类型缩小混合时（例如`if`语句），目标对象的类型将被缩小到指定的Type。

```tsx
class FileSystemObject {
    isFile(): this is FileRep {
        return this instanceof FileRep;
    }
    
    isDirectory(): this is Directory {
        return this instanceof Directory;
    }
    
    isNetworked(): this is Networked & this {
        return this.networked;
    }
 
	constructor(public path: string, private networked: boolean) {
	}
 
}
class FileRep extends FileSystemObject {
    constructor(path: string, public content: string) {
        super(path, false);
    }
}
class Directory extends FileSystemObject {
    children: FileSystemObject[];
}
interface Networked {
    host: string;
}
const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");
if (fso.isFile()) {
    // const fso: FileRep
    fso.content;
} else if (fso.isDirectory()) {
    // const fso: Directory
    fso.children;
} else if (fso.isNetworked()) {
    // const fso: Networked & FileSystemObject
    fso.host;
}
```

基于 `this` 的类型保护的一个常见用例，是允许对一个特定字段进行懒惰验证。例如，这种情况下，当hasValue 被验证为真时，就会从框内持有的值中删除一个未定义值。

```tsx
class Box <T> {
    value?: T;
    hasValue(): this is { value: T} {
        return this.value !== undefined;
    }
}
 
const box = new Box();
box.value = "Gameboy";
 
// (property) Box<unknown>.value?: unknownbox.value;
if (box.hasValue()) {
    // (property) value: unknown
    box.value;
}   
```

### 8.10 参数属性，构造函数参数转类属性

TypeScript提供了特殊的语法，可以将构造函数参数变成具有相同名称和值的类属性。这些被称为参数属性，通过在构造函数参数前加上可见性修饰符 `public` 、 `private` 、 `protected` 或 `readonly` 中的一个来创建。由此产生的字段会得到这些修饰符.

```tsx
class Params {
    constructor(public readonly x: number, protected y: number, private z: number)
    {
        // No body necessary
    }
}
const a = new Params(1, 2, 3);
// (property) Params.x: number
console.log(a.x);
console.log(a.z);
```

### 8.11 类表达式

类表达式与类声明非常相似。唯一真正的区别是，类表达式不需要一个名字，尽管我们可以通过它们最终绑定的任何标识符来引用它们。

```tsx
const someClass = class<Type> {
    content: Type;
    constructor(value: Type) {
        this.content = value;
    }
};
// const m: someClass<string>
const m = new someClass("Hello, world");
```

### 8.12 抽象类和成员

TypeScript中的类、方法和字段可以是抽象的。

一个抽象的方法或抽象的字段是一个没有提供实现的方法或字段。这些成员必须存在于一个抽象类中， 不能直接实例化。

抽象类的作用是作为子类的基类，实现所有的抽象成员。当一个类没有任何抽象成员时，我们就说它是具体的。

让我们看一个例子：

```tsx
abstract class Base {
    abstract getName(): string;
    printName() {
        console.log("Hello, " + this.getName());
    }
}
const b = new Base();
```

我们不能用 `new` 来实例化 `Base` ，因为它是抽象的。相反，我们需要创建一个派生类并实现抽象成员.

```tsx
class Derived extends Base {
    getName() {
        return "world";
    }
}
const d = new Derived();
d.printName();
```

- 抽象构造签名

有时你想接受一些类的构造函数，产生一个从某些抽象类派生出来的类的实例。

例如，你可能想写这样的代码：

```tsx
function greet(ctor: typeof Base) {
    const instance = new ctor();
    instance.printName();
}
```

TypeScript正确地告诉你，你正试图实例化一个抽象类。毕竟，鉴于greet的定义，写这段代码是完全合 法的，它最终会构造一个抽象类.

```tsx
// 槽糕
greet(Base);
```

相反，你想写一个函数，接受具有结构化签名的东西：

```tsx
function greet(ctor: new() => Base) {
    const instance = new ctor();
    instance.printName();
}
greet(Derived);
greet(Base);
```

现在TypeScript正确地告诉你哪些类的构造函数可以被调用:`Derived` 可以，因为它是具体的，但`Base`不能。

### 8.13 类之间的关系

在大多数情况下，TypeScript中的类在结构上与其他类型相同，是可以比较的。

例如，这两个类可以互相替代使用，因为它们是相同的：

```tsx
class Point1 {
    x = 0;
    y = 0;
}
class Point2 {
    x = 0;
    y = 0;
}
// 正确
const p: Point1 = new Point2()
```

同样地，即使没有明确的继承，类之间的子类型关系也是存在的：

```tsx
class Person {
    name: string;
    age: number;
}
class Employee {
    name: string;
    age: number;
    salary: number;
}
// 正确
const p: Person = new Employee();
```

这听起来很简单，但有几种情况似乎比其他情况更奇怪。

空的类没有成员。在一个结构化类型系统中，一个没有成员的类型通常是其他任何东西的超类型。所以如果你写了一个空类（不要！），任何东西都可以用来代替它。

```tsx
class Empty {
}
function fn(x: Empty) {
    // 不能用'x'做任何事
}
 
// 以下调用均可
!fn(window);
fn({});
fn(fn);
```

## TypeScript学习第九章：模块

JavaScript有很长的历史，有不同的方式来**处理模块化的代码**。TypeScript从2012年开始出现，已经实现了对许多这些格式的支持，但随着时间的推移，社区和JavaScript规范已经趋向于一种名为ES模块 （或**ES6模块**）的格式。你可能知道它是 import/export 语法。

**ES Modules**在2015年被加入到JavaScript规范中，到2020年，在**大多数网络浏览器和JavaScript运行时中都有广泛的支持**。

为了突出重点，本手册将涵盖ES Modules及其流行的前驱CommonJS `module.exports =` 语法。

### 9.1 如何定义JavaScript模块

在TypeScript中，就像在ECMAScript 2015中一样，任何包含顶级`import`或`export`的文件都被认为是 一个模块。

相反，**一个没有任何顶级导入或导出声明的文件被视为一个脚本**，**其内容可在全局范围内使用（因此也可用于模块）**。

**模块在自己的范围内执行，而不是在全局范围内**。这意味着在模块中声明的变量、函数、类等在模块外是不可见的，除非它们被明确地用某种导出形式导出。相反，要使用从不同模块导出的变量、函数、类、接口等，必须使用导入的形式将其导入。

### 9.2 非模块

在我们开始之前，重要的是要了解TypeScript认为什么才是模块。JavaScript规范声明，任何没有`export` 或顶层 await(top-level await)的JavaScript文件都应该被认为是一个脚本而不是一个模块。

顶层await该特性可以让 ES 模块对外表现为一个 `async` 函数，允许 ES 模块去 `await` 数据并阻塞其它导入这些数据的模块。只有在数据确定并准备好的时候，导入数据的模块才可以执行相应的代码。

在一个脚本文件中，变量和类型被声明为在共享的全局范围内，并且假定你会使用`outFile`编译器选项将多个输入文件加入一个输出文件，或者在你的HTML中使用多个 `<script>`标签来加载这些文件（顺序正确!）。

如果你有一个目前没有任何导入或导出的文件，但你希望被当作一个模块来处理，请添加这一行：

```tsx
export {}
```

这将改变该文件，使其成为一个什么都不输出的模块。无论你的模块目标是什么，这个语法都有效。

### 9.3 TypeScript中的模块

在TypeScript中编写基于模块的代码时，有三个主要方面需要考虑：

- **语法**：我想用什么语法来导入和导出东西？
- **模块解析**：模块名称（或路径）和磁盘上的文件之间是什么关系？
- **模块输出目标**：我编译出来的JavaScript模块应该是什么样子的？

#### 9.3.1 ES模块语法

一个文件可以通过 `export default` 声明一个主要出口：

```tsx
// @filename: hello.ts
export default function helloWorld() {
	console.log("Hello, world!");
}
```

然后通过以下方式导入：

```tsx
import hello from "./hello.js";
hello();
```

除了默认的导出，你还可以通过省略 `default` 的 `export` ，实现有一个以上的变量和函数的导出。

```tsx
// @filename: maths.ts
export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;
export class RandomNumberGenerator {}
export function absolute(num: number) {
    if (num < 0) return num * -1;
    	return num;
}
```

这些可以通过 `import` 语法在另一个文件中使用:

```tsx
import { pi, phi, absolute } from "./maths.js";
console.log(pi);
 
// const absPhi: number
const absPhi = absolute(phi);
```

#### 9.3.2 额外的导入语法

可以使用 `import {old as new}` 这样的格式来重命名一个导入:

```tsx
import { pi as π } from "./maths.js";
// (alias)
var π: number
// import π
console.log(π);
```

你可以将上述语法混合并匹配到一个单一的`import`中:

```tsx
// @filename: maths.ts
export const pi = 3.14;
export default class RandomNumberGenerator {}
 
// @filename: app.ts
import RNGen, { pi as π } from "./maths.js";
 
// (alias) class RNGen
// import RNGen
RNGen;
 
// (alias) const π: 3.14
// import π
console.log(π);
```

你可以把所有导出的对象，用 `* as name` ，把它们放到一个命名空间：

```tsx
// @filename: app.ts
import * as math from "./maths.js";
 
console.log(math.pi);
// const positivePhi: number
const positivePhi = math.absolute(math.phi);
```

你可以通过 `import "./file "` 导入一个文件，而不把任何变量纳入你的当前模块:

```tsx
// @filename: app.ts
import "./maths.js";
 
console.log("3.14");
```

在这种情况下， `import` 没有任何作用。然而， `maths.ts` 中的所有代码都被解析了，这可能引发影响其他对象的副作用。

#### 9.3.3 TypeScript特定的ES模块语法

类型可以使用与JavaScript值相同的语法进行导出和导入。

```tsx
// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };
export interface Dog {
    breeds: string[];
    yearOfBirth: number;	
}
// @filename: app.ts
import { Cat, Dog } from "./animal.js";
type Animals = Cat | Dog;
```

TypeScript用两个概念扩展了 import 语法，用于声明一个类型的导入。

- `import type`

这是一个导入语句，只能导入类型：

```tsx
// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };
export type Dog = { breeds: string[]; yearOfBirth: number };
export const createCatName = () => "fluffy";
 
// @filename: valid.ts
import type { Cat, Dog } from "./animal.js";
export type Animals = Cat | Dog;
 
// @filename: app.ts
import type { createCatName } from "./animal.js";
const name = createCatName();
```

- 内联类型导入

TypeScript 4.5还允许以type为前缀的单个导入，以表明导入的引用是一个类型：

```tsx
// @filename: app.ts
import { createCatName, type Cat, type Dog } from "./animal.js";
 
export type Animals = Cat | Dog;
const name = createCatName();
```

#### 9.3.4 ES模块语法与CommonJS行为

TypeScript有ES Module语法，它直接与CommonJS和AMD的 `require` 相关联。使用ES Module的`import` 在大多数情况下与这些环境的 `require` 相同，但这种语法确保你在TypeScript文件中与CommonJS的输出有1对1的匹配：

```tsx
import fs = require("fs")
const code = fs.readFileSync("hello.ts", "utf8")
```

### 9.4 CommonJS 语法

CommonJS是npm上大多数模块的交付格式。即使你使用上面的ES模块语法进行编写，对CommonJS语法的工作方式有一个简单的了解也会帮助你更容易地进行调试。

#### 9.4.1 导出

标识符是通过在一个全局调用的 `module` 上设置 `exports` 属性来导出的。

```tsx
function absolute(num: number) {
    if (num < 0) return num * -1;
    	return num;
}
module.exports = {
    pi: 3.14,
    squareTwo: 1.41,
    phi: 1.61,
    absolute,
};
 
```

然后这些文件可以通过 `require` 语句导入：

```tsx
const maths = require("maths");
// pi: any
maths.pi;
```

或者你可以使用JavaScript中的析构功能来简化一下：

```tsx
const { squareTwo } = require("maths");
// const squareTwo: any
squareTwo;
```

#### 9.4.2 CommonJS和ES模块的互操作性

关于默认导入和模块命名空间对象导入之间的区别，CommonJS和ES Modules之间存在着功能上的不匹配。

这个后面章节会详细介绍。

#### 9.5 TypeScript的模块解析选项

模块解析是指从 `import` 或 `require` 语句中获取一个字符串，并确定该字符串所指的文件的过程。

TypeScript包括两种解析策略。经典和Node。当编译器选项 `module` 不是 `commonjs` 时，经典策略是默认的，是为了向后兼容。Node策略复制了Node.js在CommonJS模式下的工作方式，对 .ts 和 .d.ts 有额外的检查。

在TypeScript中，有许多TSConfig标志影响模块策略：`moduleResolution` , `baseUrl` , `paths` , `rootDirs` 。

关于这些策略如何工作的全部细节，你可以参考《[模块解析](https://www.typescriptlang.org/docs/handbook/module-resolution.html)》。

### 9.6 TypeScript的模块输出选项

有两个选项会影响JavaScript输出：

- `target`, 它决定了哪些JS功能被降级（转换为在旧的JavaScript运行时运行），哪些保持不变
- `module`, 它决定了哪些代码用于模块之间的相互作用。

你使用的 `target` 是由你期望运行TypeScript代码的JavaScript运行时中的可用功能决定的。这可能是：你支持的最古老的网络浏览器，你期望运行的最低版本的Node.js，或者可能来自于你的运行时的独特约束——比如`Electron`.

所有模块之间的通信都是通过模块加载器进行的，编译器选项 `module` 决定使用哪一个。在运行时，模块加载器负责在执行一个模块之前定位和执行该模块的所有依赖项.

例如，这里是一个使用ES模块语法的TypeScript文件，展示了 `module` 的一些不同选项:

```tsx
import { valueOfPi } from "./constants.js"
export const twoPi = valueOfPi * 2
```

- ES2020

```tsx
import { valueOfPi } from "./constants.js"
export const twoPi = valueOfPi * 2
```

- CommonJS

```tsx
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoPi = void 0;
const constants_js_1 = require("./constants.js");
exports.twoPi = constants_js_1.valueOfPi * 2;
```

- UMD

```tsx
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
	}
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./constants.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.twoPi = void 0;
    const constants_js_1 = require("./constants.js");
	exports.twoPi = constants_js_1.valueOfPi * 2;
});
```

> 请注意，ES2020实际上与原来的index.ts相同。

你可以在TSConfig 模块参考中看到所有可用的选项以及它们发出的JavaScript代码是什么样子。

### 9.7 TypeScript 命名空间

TypeScript有自己的模块格式，称为 `命名空间(namespaces)` ，这比ES模块标准要早。这种语法对于创建复杂的定义文件有很多有用的功能，并且在 DefinitelyTyped中仍然被积极使用。虽然没有被废弃，但命名空间中的大部分功能都存在于ES Modules中，我们建议你使用它来与JavaScript的方向保持一致。 你可以在`namespaces参考页`中了解更多关于命名空间的信息。
