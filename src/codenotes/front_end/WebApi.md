---
# 当前页面内容标题
title: WebApi
# 当前页面图标
icon: code
# 分类
category:
- WebApi
- 前端
# 标签
tag:
- WebApi
- 前端
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: true
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true



---



## WebApi

这个只作为一个了解就可以了

## Canvas API

### 概述

`<canvas>`元素用于生成图像。它本身就像一个画布，JavaScript 通过操作它的 API，在上面生成图像。它的底层是一个个像素，基本上`<canvas>`是一个可以用 JavaScript 操作的位图（bitmap）。

它与 SVG 图像的区别在于，`<canvas>`是脚本调用各种方法生成图像，SVG 则是一个 XML 文件，通过各种子元素生成图像。

使用 Canvas API 之前，需要在网页里面新建一个`<canvas>`元素。

```html
<canvas id="myCanvas" width="400" height="250">
  您的浏览器不支持 Canvas
</canvas>
```

如果浏览器不支持这个 API，就会显示`<canvas>`标签中间的文字：“您的浏览器不支持 Canvas”。

每个`<canvas>`元素都有一个对应的`CanvasRenderingContext2D`对象（上下文对象）。Canvas API 就定义在这个对象上面。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
```

上面代码中，`<canvas>`元素节点对象的`getContext()`方法，返回的就是`CanvasRenderingContext2D`对象。

注意，Canvas API 需要`getContext`方法指定参数`2d`，表示该`<canvas>`节点生成 2D 的平面图像。如果参数是`webgl`，就表示用于生成 3D 的立体图案，这部分属于 WebGL API。

按照用途，Canvas API 分成两大部分：绘制图形和图像处理。

### Canvas API：绘制图形

Canvas 画布提供了一个作图的平面空间，该空间的每个点都有自己的坐标。原点`(0, 0)`位于图像左上角，`x`轴的正向是原点向右，`y`轴的正向是原点向下。

#### 路径

以下方法和属性用来绘制路径。

- `CanvasRenderingContext2D.beginPath()`：开始绘制路径。
- `CanvasRenderingContext2D.closePath()`：结束路径，返回到当前路径的起始点，会从当前点到起始点绘制一条直线。如果图形已经封闭，或者只有一个点，那么此方法不会产生任何效果。
- `CanvasRenderingContext2D.moveTo()`：设置路径的起点，即将一个新路径的起始点移动到`(x，y)`坐标。
- `CanvasRenderingContext2D.lineTo()`：使用直线从当前点连接到`(x, y)`坐标。
- `CanvasRenderingContext2D.fill()`：在路径内部填充颜色（默认为黑色）。
- `CanvasRenderingContext2D.stroke()`：路径线条着色（默认为黑色）。
- `CanvasRenderingContext2D.fillStyle`：指定路径填充的颜色和样式（默认为黑色）。
- `CanvasRenderingContext2D.strokeStyle`：指定路径线条的颜色和样式（默认为黑色）。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.lineTo(100, 200);
```

上面代码只是确定了路径的形状，画布上还看不出来，因为没有颜色。所以还需要着色。

```javascript
ctx.fill()
// 或者
ctx.stroke()
```

上面代码中，这两个方法都可以使得路径可见。`fill()`在路径内部填充颜色，使之变成一个实心的图形；`stroke()`只对路径线条着色。

这两个方法默认都是使用黑色，可以使用`fillStyle`和`strokeStyle`属性指定其他颜色。

```javascript
ctx.fillStyle = 'red';
ctx.fill();
// 或者
ctx.strokeStyle = 'red';
ctx.stroke();
```

上面代码将填充和线条的颜色指定为红色。

#### 线型

以下的方法和属性控制线条的视觉特征。

- `CanvasRenderingContext2D.lineWidth`：指定线条的宽度，默认为1.0。
- `CanvasRenderingContext2D.lineCap`：指定线条末端的样式，有三个可能的值：`butt`（默认值，末端为矩形）、`round`（末端为圆形）、`square`（末端为突出的矩形，矩形宽度不变，高度为线条宽度的一半）。
- `CanvasRenderingContext2D.lineJoin`：指定线段交点的样式，有三个可能的值：`round`（交点为扇形）、`bevel`（交点为三角形底边）、`miter`（默认值，交点为菱形)。
- `CanvasRenderingContext2D.miterLimit`：指定交点菱形的长度，默认为10。该属性只在`lineJoin`属性的值等于`miter`时有效。
- `CanvasRenderingContext2D.getLineDash()`：返回一个数组，表示虚线里面线段和间距的长度。
- `CanvasRenderingContext2D.setLineDash()`：数组，用于指定虚线里面线段和间距的长度。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.lineTo(100, 200);

ctx.lineWidth = 3;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.setLineDash([15, 5]);
ctx.stroke();
```

上面代码中，线条的宽度为3，线条的末端和交点都改成圆角，并且设置为虚线。

#### 矩形

以下方法用来绘制矩形。

- `CanvasRenderingContext2D.rect()`：绘制矩形路径。
- `CanvasRenderingContext2D.fillRect()`：填充一个矩形。
- `CanvasRenderingContext2D.strokeRect()`：绘制矩形边框。
- `CanvasRenderingContext2D.clearRect()`：指定矩形区域的像素都变成透明。

上面四个方法的格式都一样，都接受四个参数，分别是矩形左上角的横坐标和纵坐标、矩形的宽和高。

`CanvasRenderingContext2D.rect()`方法用于绘制矩形路径。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.rect(10, 10, 100, 100);
ctx.fill();
```

上面代码绘制一个正方形，左上角坐标为`(10, 10)`，宽和高都为100。

`CanvasRenderingContext2D.fillRect()`用来向一个矩形区域填充颜色。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);
```

上面代码绘制一个绿色的正方形，左上角坐标为`(10, 10)`，宽和高都为100。

`CanvasRenderingContext2D.strokeRect()`用来绘制一个矩形区域的边框。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = 'green';
ctx.strokeRect(10, 10, 100, 100);
```

上面代码绘制一个绿色的空心正方形，左上角坐标为`(10, 10)`，宽和高都为100。

`CanvasRenderingContext2D.clearRect()`用于擦除指定矩形区域的像素颜色，等同于把早先的绘制效果都去除。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.fillRect(10, 10, 100, 100);
ctx.clearRect(15, 15, 90, 90);
```

上面代码先绘制一个 100 x 100 的正方形，然后在它的内部擦除 90 x 90 的区域，等同于形成了一个5像素宽度的边框。

#### 弧线

以下方法用于绘制弧形。

- `CanvasRenderingContext2D.arc()`：通过指定圆心和半径绘制弧形。
- `CanvasRenderingContext2D.arcTo()`：通过指定两根切线和半径绘制弧形。

`CanvasRenderingContext2D.arc()`主要用来绘制圆形或扇形。

```javascript
// 格式
ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)

// 实例
ctx.arc(5, 5, 5, 0, 2 * Math.PI, true)
```

`arc()`方法的`x`和`y`参数是圆心坐标，`radius`是半径，`startAngle`和`endAngle`则是扇形的起始角度和终止角度（以弧度表示），`anticlockwise`表示做图时应该逆时针画（`true`）还是顺时针画（`false`），这个参数用来控制扇形的方向（比如上半圆还是下半圆）。

下面是绘制实心圆形的例子。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(60, 60, 50, 0, Math.PI * 2, true); 
ctx.fill();
```

上面代码绘制了一个半径50，起始角度为0，终止角度为 2 * PI 的完整的圆。

绘制空心半圆的例子。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(50, 20);
ctx.arc(100, 20, 50, 0, Math.PI, false);
ctx.stroke();
```

`CanvasRenderingContext2D.arcTo()`方法主要用来绘制圆弧，需要给出两个点的坐标，当前点与第一个点形成一条直线，第一个点与第二个点形成另一条直线，然后画出与这两根直线相切的弧线。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.arcTo(50, 50, 100, 0, 25);
ctx.lineTo(100, 0);
ctx.stroke();
```

上面代码中，`arcTo()`有5个参数，前两个参数是第一个点的坐标，第三个参数和第四个参数是第二个点的坐标，第五个参数是半径。然后，`(0, 0)`与`(50, 50)`形成一条直线，然后`(50, 50)`与`(100, 0)`形成第二条直线。弧线就是与这两根直线相切的部分。

#### 文本

以下方法和属性用于绘制文本。

- `CanvasRenderingContext2D.fillText()`：在指定位置绘制实心字符。
- `CanvasRenderingContext2D.strokeText()`：在指定位置绘制空心字符。
- `CanvasRenderingContext2D.measureText()`：返回一个 TextMetrics 对象。
- `CanvasRenderingContext2D.font`：指定字型大小和字体，默认值为`10px sans-serif`。
- `CanvasRenderingContext2D.textAlign`：文本的对齐方式，默认值为`start`。
- `CanvasRenderingContext2D.direction`：文本的方向，默认值为`inherit`。
- `CanvasRenderingContext2D.textBaseline`：文本的垂直位置，默认值为`alphabetic`。

`fillText()`方法用来在指定位置绘制实心字符。

```javascript
CanvasRenderingContext2D.fillText(text, x, y [, maxWidth])
```

该方法接受四个参数。

- `text`：所要填充的字符串。
- `x`：文字起点的横坐标，单位像素。
- `y`：文字起点的纵坐标，单位像素。
- `maxWidth`：文本的最大像素宽度。该参数可选，如果省略，则表示宽度没有限制。如果文本实际长度超过这个参数指定的值，那么浏览器将尝试用较小的字体填充。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.fillText('Hello world', 50, 50);
```

上面代码在`(50, 50)`位置写入字符串`Hello world`。

注意，`fillText()`方法不支持文本断行，所有文本一定出现在一行内。如果要生成多行文本，只有调用多次`fillText()`方法。

`strokeText()`方法用来添加空心字符，它的参数与`fillText()`一致。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.strokeText('Hello world', 50, 50);
```

上面这两种方法绘制的文本，默认都是`10px`大小、`sans-serif`字体，`font`属性可以改变字体设置。该属性的值是一个字符串，使用 CSS 的`font`属性即可。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.font = 'Bold 20px Arial';
ctx.fillText('Hello world', 50, 50);
```

`textAlign`属性用来指定文本的对齐方式。它可以取以下几个值。

- `left`：左对齐
- `right`：右对齐
- `center`：居中
- `start`：默认值，起点对齐（从左到右的文本为左对齐，从右到左的文本为右对齐）。
- `end`：结尾对齐（从左到右的文本为右对齐，从右到左的文本为左对齐）。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.font = 'Bold 20px Arial';
ctx.textAlign = 'center';
ctx.fillText('Hello world', 50, 50);
```

`direction`属性指定文本的方向，默认值为`inherit`，表示继承`<canvas>`或`document`的设置。其他值包括`ltr`（从左到右）和`rtl`（从右到左）。

`textBaseline`属性指定文本的垂直位置，可以取以下值。

- `top`：上部对齐（字母的基线是整体上移）。
- `hanging`：悬挂对齐（字母的上沿在一根直线上），适用于印度文和藏文。
- `middle`：中部对齐（字母的中线在一根直线上）。
- `alphabetic`：默认值，表示字母位于字母表的正常位置（四线格的第三根线）。
- `ideographic`：下沿对齐（字母的下沿在一根直线上），使用于东亚文字。
- `bottom`：底部对齐（字母的基线下移）。对于英文字母，这个设置与`ideographic`没有差异。

`measureText()`方法接受一个字符串作为参数，返回一个 TextMetrics 对象，可以从这个对象上面获取参数字符串的信息，目前主要是文本渲染后的宽度（`width`）。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var text1 = ctx.measureText('Hello world');
text1.width // 49.46

ctx.font = 'Bold 20px Arial';
var text2 = ctx.measureText('Hello world');
text2.width // 107.78
```

上面代码中，`10px`大小的字符串`Hello world`，渲染后宽度为`49.46`。放大到`20px`以后，宽度为`107.78`。

#### 渐变色和图像填充

以下方法用于设置渐变效果和图像填充效果。

- `CanvasRenderingContext2D.createLinearGradient()`：定义线性渐变样式。
- `CanvasRenderingContext2D.createRadialGradient()`：定义辐射渐变样式。
- `CanvasRenderingContext2D.createPattern()`：定义图像填充样式。

`createLinearGradient()`方法按照给定直线，生成线性渐变的样式。

```javascript
ctx.createLinearGradient(x0, y0, x1, y1)
```

`ctx.createLinearGradient(x0, y0, x1, y1)`方法接受四个参数：`x0`和`y0`是起点的横坐标和纵坐标，`x1`和`y1`是终点的横坐标和纵坐标。通过不同的坐标值，可以生成从上至下、从左到右的渐变等等。

该方法的返回值是一个`CanvasGradient`对象，该对象只有一个`addColorStop()`方向，用来指定渐变点的颜色。`addColorStop()`方法接受两个参数，第一个参数是0到1之间的一个位置量，0表示起点，1表示终点，第二个参数是一个字符串，表示 CSS 颜色。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'green');
gradient.addColorStop(1, 'white');
ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 200, 100);
```

上面代码中，定义了渐变样式`gradient`以后，将这个样式指定给`fillStyle`属性，然后`fillRect()`就会生成以这个样式填充的矩形区域。

`createRadialGradient()`方法定义一个辐射渐变，需要指定两个圆。

```javascript
ctx.createRadialGradient(x0, y0, r0, x1, y1, r1)
```

`createRadialGradient()`方法接受六个参数，`x0`和`y0`是辐射起始的圆的圆心坐标，`r0`是起始圆的半径，`x1`和`y1`是辐射终止的圆的圆心坐标，`r1`是终止圆的半径。

该方法的返回值也是一个`CanvasGradient`对象。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var gradient = ctx.createRadialGradient(100, 100, 50, 100, 100, 100);
gradient.addColorStop(0, 'white');
gradient.addColorStop(1, 'green');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 200, 200);
```

上面代码中，生成辐射样式以后，用这个样式填充一个矩形。

`createPattern()`方法定义一个图像填充样式，在指定方向上不断重复该图像，填充指定的区域。

```javascript
ctx.createPattern(image, repetition)
```

该方法接受两个参数，第一个参数是图像数据，它可以是`<img>`元素，也可以是另一个`<canvas>`元素，或者一个表示图像的 Blob 对象。第二个参数是一个字符串，有四个可能的值，分别是`repeat`（双向重复）、`repeat-x`(水平重复)、`repeat-y`(垂直重复)、`no-repeat`(不重复)。如果第二个参数是空字符串或`null`，则等同于`null`。

该方法的返回值是一个`CanvasPattern`对象。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var img = new Image();
img.src = 'https://example.com/pattern.png';
img.onload = function( ) {
  var pattern = ctx.createPattern(img, 'repeat');
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 400, 400);
};
```

上面代码中，图像加载成功以后，使用`createPattern()`生成图像样式，然后使用这个样式填充指定区域。

#### 阴影

以下属性用于设置阴影。

- `CanvasRenderingContext2D.shadowBlur`：阴影的模糊程度，默认为`0`。
- `CanvasRenderingContext2D.shadowColor`：阴影的颜色，默认为`black`。
- `CanvasRenderingContext2D.shadowOffsetX`：阴影的水平位移，默认为`0`。
- `CanvasRenderingContext2D.shadowOffsetY`：阴影的垂直位移，默认为`0`。

下面是一个例子。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 5;
ctx.shadowColor = 'rgba(0,0,0,0.5)';

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);
```

### Canvas API：图像处理

#### CanvasRenderingContext2D.drawImage()

Canvas API 允许将图像文件写入画布，做法是读取图片后，使用`drawImage()`方法将这张图片放上画布。

`CanvasRenderingContext2D.drawImage()`有三种使用格式。

```javascript
ctx.drawImage(image, dx, dy);
ctx.drawImage(image, dx, dy, dWidth, dHeight);
ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```

各个参数的含义如下。

- image：图像元素
- sx：图像内部的横坐标，用于映射到画布的放置点上。
- sy：图像内部的纵坐标，用于映射到画布的放置点上。
- sWidth：图像在画布上的宽度，会产生缩放效果。如果未指定，则图像不会缩放，按照实际大小占据画布的宽度。
- sHeight：图像在画布上的高度，会产生缩放效果。如果未指定，则图像不会缩放，按照实际大小占据画布的高度。
- dx：画布内部的横坐标，用于放置图像的左上角
- dy：画布内部的纵坐标，用于放置图像的右上角
- dWidth：图像在画布内部的宽度，会产生缩放效果。
- dHeight：图像在画布内部的高度，会产生缩放效果。

下面是最简单的使用场景，将图像放在画布上，两者左上角对齐。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var img = new Image();
img.src = 'image.png';
img.onload = function () {
  ctx.drawImage(img, 0, 0);
};
```

上面代码将一个 PNG 图像放入画布。这时，图像将是原始大小，如果画布小于图像，就会只显示出图像左上角，正好等于画布大小的那一块。

如果要显示完整的图片，可以用图像的宽和高，设置成画布的宽和高。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var image = new Image(60, 45);
image.onload = drawImageActualSize;
image.src = 'https://example.com/image.jpg';

function drawImageActualSize() {
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;
  ctx.drawImage(this, 0, 0, this.naturalWidth, this.naturalHeight);
}
```

上面代码中，`<canvas>`元素的大小设置成图像的本来大小，就能保证完整展示图像。由于图像的本来大小，只有图像加载成功以后才能拿到，因此调整画布的大小，必须放在`image.onload`这个监听函数里面。

#### 像素读写

以下三个方法与像素读写相关。

- `CanvasRenderingContext2D.getImageData()`：将画布读取成一个 ImageData 对象
- `CanvasRenderingContext2D.putImageData()`：将 ImageData 对象写入画布
- `CanvasRenderingContext2D.createImageData()`：生成 ImageData 对象

**（1）getImageData()**

`CanvasRenderingContext2D.getImageData()`方法用来读取`<canvas>`的内容，返回一个 ImageData 对象，包含了每个像素的信息。

```javascript
ctx.getImageData(sx, sy, sw, sh)
```

`getImageData()`方法接受四个参数。`sx`和`sy`是读取区域的左上角坐标，`sw`和`sh`是读取区域的宽度和高度。如果想要读取整个`<canvas>`区域，可以写成下面这样。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
```

`getImageData()`方法返回的是一个`ImageData`对象。该对象有三个属性。

- ImageData.data：一个一维数组。该数组的值，依次是每个像素的红、绿、蓝、alpha 通道值（每个值的范围是 0～255），因此该数组的长度等于`图像的像素宽度 x 图像的像素高度 x 4`。这个数组不仅可读，而且可写，因此通过操作这个数组，就可以达到操作图像的目的。
- ImageData.width：浮点数，表示 ImageData 的像素宽度。
- ImageData.height：浮点数，表示 ImageData 的像素高度。

**（2）putImageData()**

`CanvasRenderingContext2D.putImageData()`方法将`ImageData`对象的像素绘制在`<canvas>`画布上。该方法有两种使用格式。

```javascript
ctx.putImageData(imagedata, dx, dy)
ctx.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)
```

该方法有如下参数。

- imagedata：包含像素信息的 ImageData 对象。
- dx：`<canvas>`元素内部的横坐标，用于放置 ImageData 图像的左上角。
- dy：`<canvas>`元素内部的纵坐标，用于放置 ImageData 图像的左上角。
- dirtyX：ImageData 图像内部的横坐标，用于作为放置到`<canvas>`的矩形区域的左上角的横坐标，默认为0。
- dirtyY：ImageData 图像内部的纵坐标，用于作为放置到`<canvas>`的矩形区域的左上角的纵坐标，默认为0。
- dirtyWidth：放置到`<canvas>`的矩形区域的宽度，默认为 ImageData 图像的宽度。
- dirtyHeight：放置到`<canvas>`的矩形区域的高度，默认为 ImageData 图像的高度。

下面是将 ImageData 对象绘制到`<canvas>`的例子。

```javascript
ctx.putImageData(imageData, 0, 0);
```

**（3）createImageData()**

`CanvasRenderingContext2D.createImageData()`方法用于生成一个空的`ImageData`对象，所有像素都是透明的黑色（即每个值都是`0`）。该方法有两种使用格式。

```javascript
ctx.createImageData(width, height)
ctx.createImageData(imagedata)
```

`createImageData()`方法的参数如下。

- width：ImageData 对象的宽度，单位为像素。
- height：ImageData 对象的高度，单位为像素。
- imagedata：一个现有的 ImageData 对象，返回值将是这个对象的拷贝。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var imageData = ctx.createImageData(100, 100);
```

上面代码中，`imageData`是一个 100 x 100 的像素区域，其中每个像素都是透明的黑色。

#### CanvasRenderingContext2D.save()，CanvasRenderingContext2D.restore()

`CanvasRenderingContext2D.save()`方法用于将画布的当前样式保存到堆栈，相当于在内存之中产生一个样式快照。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.save();
```

上面代码中，`save()`会为画布的默认样式产生一个快照。

`CanvasRenderingContext2D.restore()`方法将画布的样式恢复到上一个保存的快照，如果没有已保存的快照，则不产生任何效果。

上下文环境，restore方法用于恢复到上一次保存的上下文环境。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.save();

ctx.fillStyle = 'green';
ctx.restore();

ctx.fillRect(10, 10, 100, 100);
```

上面代码画一个矩形。矩形的填充色本来设为绿色，但是`restore()`方法撤销了这个设置，将样式恢复上一次保存的状态（即默认样式），所以实际的填充色是黑色（默认颜色）。

#### CanvasRenderingContext2D.canvas

`CanvasRenderingContext2D.canvas`属性指向当前`CanvasRenderingContext2D`对象所在的`<canvas>`元素。该属性只读。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.canvas === canvas // true
```

#### 图像变换

以下方法用于图像变换。

- `CanvasRenderingContext2D.rotate()`：图像旋转
- `CanvasRenderingContext2D.scale()`：图像缩放
- `CanvasRenderingContext2D.translate()`：图像平移
- `CanvasRenderingContext2D.transform()`：通过一个变换矩阵完成图像变换
- `CanvasRenderingContext2D.setTransform()`：取消前面的图像变换

**（1）rotate()**

`CanvasRenderingContext2D.rotate()`方法用于图像旋转。它接受一个弧度值作为参数，表示顺时针旋转的度数。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.rotate(45 * Math.PI / 180);
ctx.fillRect(70, 0, 100, 30);
```

上面代码会显示一个顺时针倾斜45度的矩形。注意，`rotate()`方法必须在`fillRect()`方法之前调用，否则是不起作用的。

旋转中心点始终是画布左上角的原点。如果要更改中心点，需要使用`translate()`方法移动画布。

**（2）scale()**

`CanvasRenderingContext2D.scale()`方法用于缩放图像。它接受两个参数，分别是`x`轴方向的缩放因子和`y`轴方向的缩放因子。默认情况下，一个单位就是一个像素，缩放因子可以缩放单位，比如缩放因子`0.5`表示将大小缩小为原来的50%，缩放因子`10`表示放大十倍。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.scale(10, 3);
ctx.fillRect(10, 10, 10, 10);
```

上面代码中，原来的矩形是 10 x 10，缩放后展示出来是 100 x 30。

如果缩放因子为1，就表示图像没有任何缩放。如果为-1，则表示方向翻转。`ctx.scale(-1, 1)`为水平翻转，`ctx.scale(1, -1)`表示垂直翻转。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.scale(1, -2);
ctx.font = "16px serif";
ctx.fillText('Hello world!', 20, -20);
```

上面代码会显示一个水平倒转的、高度放大2倍的`Hello World!`。

注意，负向缩放本质是坐标翻转，所针对的坐标轴就是画布左上角原点的坐标轴。

**（3）translate()**

`CanvasRenderingContext2D.translate()`方法用于平移图像。它接受两个参数，分别是 x 轴和 y 轴移动的距离（单位像素）。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.translate(50, 50);
ctx.fillRect(0, 0, 100, 100);
```

**（4）transform()**

`CanvasRenderingContext2D.transform()`方法接受一个变换矩阵的六个元素作为参数，完成缩放、旋转、移动和倾斜等变形。

它的使用格式如下。

```javascript
ctx.transform(a, b, c, d, e, f);
/*
a:水平缩放(默认值1，单位倍数)
b:水平倾斜(默认值0，单位弧度)
c:垂直倾斜(默认值0，单位弧度)
d:垂直缩放(默认值1，单位倍数)
e:水平位移(默认值0，单位像素)
f:垂直位移(默认值0，单位像素)
*/
```

下面是一个例子。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.transform(2, 0, 0, 1, 50, 50);
ctx.fillRect(0, 0, 100, 100);
```

上面代码中，原始图形是 100 x 100 的矩形，结果缩放成 200 x 100 的矩形，并且左上角从`(0, 0)`移动到`(50, 50)`。

注意，多个`transform()`方法具有叠加效果。

**（5）setTransform()**

`CanvasRenderingContext2D.setTransform()`方法取消前面的图形变换，将画布恢复到该方法指定的状态。该方法的参数与`transform()`方法完全一致。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.translate(50, 50);
ctx.fillRect(0, 0, 100, 100);

ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.fillRect(0, 0, 100, 100);
```

上面代码中，第一个`fillRect()`方法绘制的矩形，左上角从`(0, 0)`平移到`(50, 50)`。`setTransform()`方法取消了这个变换（已绘制的图形不受影响），将画布恢复到默认状态（变换矩形`1, 0, 0, 1, 0, 0`），所以第二个矩形的左上角回到`(0, 0)`。

### `<canvas>` 元素的方法

除了`CanvasRenderingContext2D`对象提供的方法，`<canvas>`元素本身也有自己的方法。

#### HTMLCanvasElement.toDataURL()

`<canvas>`元素的`toDataURL()`方法，可以将 Canvas 数据转为 Data URI 格式的图像。

```javascript
canvas.toDataURL(type, quality)
```

`toDataURL()`方法接受两个参数。

- type：字符串，表示图像的格式。默认为`image/png`，另一个可用的值是`image/jpeg`，Chrome 浏览器还可以使用`image/webp`。
- quality：浮点数，0到1之间，表示 JPEG 和 WebP 图像的质量系数，默认值为0.92。

该方法的返回值是一个 Data URI 格式的字符串。

```javascript
function convertCanvasToImage(canvas) {
  var image = new Image();
  image.src = canvas.toDataURL('image/png');
  return image;
}
```

上面的代码将`<canvas>`元素，转化成PNG Data URI。

```javascript
var fullQuality = canvas.toDataURL('image/jpeg', 0.9);
var mediumQuality = canvas.toDataURL('image/jpeg', 0.6);
var lowQuality = canvas.toDataURL('image/jpeg', 0.3);
```

上面代码将`<canvas>`元素转成高画质、中画质、低画质三种 JPEG 图像。

#### HTMLCanvasElement.toBlob()

`HTMLCanvasElement.toBlob()`方法用于将`<canvas>`图像转成一个 Blob 对象，默认类型是`image/png`。它的使用格式如下。

```javascript
// 格式
canvas.toBlob(callback, mimeType, quality)

// 示例
canvas.toBlob(function (blob) {...}, 'image/jpeg', 0.95)
```

`toBlob()`方法可以接受三个参数。

- callback：回调函数。它接受生成的 Blob 对象作为参数。
- mimeType：字符串，图像的 MIMEType 类型，默认是`image/png`。
- quality：浮点数，0到1之间，表示图像的质量，只对`image/jpeg`和`image/webp`类型的图像有效。

注意，该方法没有返回值。

下面的例子将`<canvas>`图像复制成`<img>`图像。

```javascript
var canvas = document.getElementById('myCanvas');

function blobToImg(blob) {
  var newImg = document.createElement('img');
  var url = URL.createObjectURL(blob);

  newImg.onload = function () {
    // 使用完毕，释放 URL 对象
    URL.revokeObjectURL(url);
  };

  newImg.src = url;
  document.body.appendChild(newImg);
}

canvas.toBlob(blobToImg);
```

### Canvas 使用实例

#### 动画效果

通过改变坐标，很容易在画布 Canvas 元素上产生动画效果。

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var posX = 20;
var posY = 100;

setInterval(function () {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  posX += 1;
  posY += 0.25;

  ctx.beginPath();
  ctx.fillStyle = 'white';

  ctx.arc(posX, posY, 10, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}, 30);
```

上面代码会产生一个小圆点，每隔30毫秒就向右下方移动的效果。`setInterval()`函数的一开始，之所以要将画布重新渲染黑色底色，是为了抹去上一步的小圆点。

在这个例子的基础上，通过设置圆心坐标，可以产生各种运动轨迹。下面是先上升后下降的例子。

```javascript
var vx = 10;
var vy = -10;
var gravity = 1;

setInterval(function () {
  posX += vx;
  posY += vy;
  vy += gravity;
  // ...
});
```

上面代码中，`x`坐标始终增大，表示持续向右运动。`y`坐标先变小，然后在重力作用下，不断增大，表示先上升后下降。

#### 像素处理

通过`getImageData()`方法和`putImageData()`方法，可以处理每个像素，进而操作图像内容，因此可以改写图像。

下面是图像处理的通用写法。

```javascript
if (canvas.width > 0 && canvas.height > 0) {
  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  filter(imageData);
  context.putImageData(imageData, 0, 0);
}
```

上面代码中，`filter`是一个处理像素的函数。以下是几种常见的`filter`。

**（1）灰度效果**

灰度图（grayscale）就是取红、绿、蓝三个像素值的算术平均值，这实际上将图像转成了黑白形式。

```javascript
grayscale = function (pixels) {
  var d = pixels.data;
  for (var i = 0; i < d.length; i += 4) {
    var r = d[i];
    var g = d[i + 1];
    var b = d[i + 2];
    d[i] = d[i + 1] = d[i + 2] = (r + g + b) / 3;
  }
  return pixels;
};
```

上面代码中，`d[i]`是红色值，`d[i+1]`是绿色值，`d[i+2]`是蓝色值，`d[i+3]`是 alpha 通道值。转成灰度的算法，就是将红、绿、蓝三个值相加后除以3，再将结果写回数组。

**（2）复古效果**

复古效果（sepia）是将红、绿、蓝三种值，分别取这三个值的某种加权平均值，使得图像有一种古旧的效果。

```javascript
sepia = function (pixels) {
    var d = pixels.data;
    for (var i = 0; i < d.length; i += 4) {
      var r = d[i];
      var g = d[i + 1];
      var b = d[i + 2];
      d[i]     = (r * 0.393) + (g * 0.769) + (b * 0.189); // red
      d[i + 1] = (r * 0.349) + (g * 0.686) + (b * 0.168); // green
      d[i + 2] = (r * 0.272) + (g * 0.534) + (b * 0.131); // blue
    }
    return pixels;
};
```

**（3）红色蒙版效果**

红色蒙版指的是，让图像呈现一种偏红的效果。算法是将红色通道设为红、绿、蓝三个值的平均值，而将绿色通道和蓝色通道都设为0。

```javascript
var red = function (pixels) {
  var d = pixels.data;
  for (var i = 0; i < d.length; i += 4) {
    var r = d[i];
    var g = d[i + 1];
    var b = d[i + 2];
    d[i] = (r + g + b)/3;        // 红色通道取平均值
    d[i + 1] = d[i + 2] = 0; // 绿色通道和蓝色通道都设为0
  }
  return pixels;
};
```

**（4）亮度效果**

亮度效果（brightness）是指让图像变得更亮或更暗。算法将红色通道、绿色通道、蓝色通道，同时加上一个正值或负值。

```javascript
var brightness = function (pixels, delta) {
  var d = pixels.data;
  for (var i = 0; i < d.length; i += 4) {
    d[i] += delta;     // red
    d[i + 1] += delta; // green
    d[i + 2] += delta; // blue
  }
  return pixels;
};
```

**（5）反转效果**

反转效果（invert）是指图片呈现一种色彩颠倒的效果。算法为红、绿、蓝通道都取各自的相反值（`255 - 原值`）。

```javascript
invert = function (pixels) {
  var d = pixels.data;
  for (var i = 0; i < d.length; i += 4) {
    d[i] = 255 - d[i];
    d[i + 1] = 255 - d[i + 1];
    d[i + 2] = 255 - d[i + 2];
  }
  return pixels;
};
```

### 参考链接

- David Walsh, [JavaScript Canvas Image Conversion](http://davidwalsh.name/convert-canvas-image)
- Matt West, [Getting Started With The Canvas API](http://blog.teamtreehouse.com/getting-started-with-the-canvas-api)
- John Robinson, [How You Can Do Cool Image Effects Using HTML5 Canvas](http://www.storminthecastle.com/2013/04/06/how-you-can-do-cool-image-effects-using-html5-canvas/)
- Ivaylo Gerchev, [HTML5 Canvas Tutorial: An Introduction](http://www.sitepoint.com/html5-canvas-tutorial-introduction/)
- Donovan Hutchinson, [Particles in canvas](http://hop.ie/blog/particles/)

## 剪贴板操作 Clipboard API 教程

### 简介

浏览器允许 JavaScript 脚本读写剪贴板，自动复制或粘贴内容。

一般来说，脚本不应该改动用户的剪贴板，以免不符合用户的预期。但是，有些时候这样做确实能够带来方便，比如“一键复制”功能，用户点击一下按钮，指定的内容就自动进入剪贴板。

目前，一共有三种方法可以实现剪贴板操作。

- `Document.execCommand()`方法
- 异步的 Clipboard API
- `copy`事件和`paste`事件

本文逐一介绍这三种方法。

### Document.execCommand() 方法

`Document.execCommand()`是操作剪贴板的传统方法，各种浏览器都支持。

它支持复制、剪切和粘贴这三个操作。

- `document.execCommand('copy')`（复制）
- `document.execCommand('cut')`（剪切）
- `document.execCommand('paste')`（粘贴）

（1）复制操作

复制时，先选中文本，然后调用`document.execCommand('copy')`，选中的文本就会进入剪贴板。

```javascript
const inputElement = document.querySelector('##input');
inputElement.select();
document.execCommand('copy');
```

上面示例中，脚本先选中输入框`inputElement`里面的文字（`inputElement.select()`），然后`document.execCommand('copy')`将其复制到剪贴板。

注意，复制操作最好放在事件监听函数里面，由用户触发（比如用户点击按钮）。如果脚本自主执行，某些浏览器可能会报错。

（2）粘贴操作

粘贴时，调用`document.execCommand('paste')`，就会将剪贴板里面的内容，输出到当前的焦点元素中。

```javascript
const pasteText = document.querySelector('##output');
pasteText.focus();
document.execCommand('paste');
```

（3）缺点

`Document.execCommand()`方法虽然方便，但是有一些缺点。

首先，它只能将选中的内容复制到剪贴板，无法向剪贴板任意写入内容。

其次，它是同步操作，如果复制/粘贴大量数据，页面会出现卡顿。有些浏览器还会跳出提示框，要求用户许可，这时在用户做出选择前，页面会失去响应。

为了解决这些问题，浏览器厂商提出了异步的 Clipboard API。

### 异步 Clipboard API

Clipboard API 是下一代的剪贴板操作方法，比传统的`document.execCommand()`方法更强大、更合理。

它的所有操作都是异步的，返回 Promise 对象，不会造成页面卡顿。而且，它可以将任意内容（比如图片）放入剪贴板。

`navigator.clipboard`属性返回 Clipboard 对象，所有操作都通过这个对象进行。

```javascript
const clipboardObj = navigator.clipboard;
```

如果`navigator.clipboard`属性返回`undefined`，就说明当前浏览器不支持这个 API。

由于用户可能把敏感数据（比如密码）放在剪贴板，允许脚本任意读取会产生安全风险，所以这个 API 的安全限制比较多。

首先，Chrome 浏览器规定，只有 HTTPS 协议的页面才能使用这个 API。不过，开发环境（`localhost`）允许使用非加密协议。

其次，调用时需要明确获得用户的许可。权限的具体实现使用了 Permissions API，跟剪贴板相关的有两个权限：`clipboard-write`（写权限）和`clipboard-read`（读权限）。“写权限”自动授予脚本，而“读权限”必须用户明确同意给予。也就是说，写入剪贴板，脚本可以自动完成，但是读取剪贴板时，浏览器会弹出一个对话框，询问用户是否同意读取。

![](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308071415498.jpg)

另外，需要注意的是，脚本读取的总是当前页面的剪贴板。这带来的一个问题是，如果把相关的代码粘贴到开发者工具中直接运行，可能会报错，因为这时的当前页面是开发者工具的窗口，而不是网页页面。

```javascript
(async () => {
  const text = await navigator.clipboard.readText();
  console.log(text);
})();
```

如果你把上面的代码，粘贴到开发者工具里面运行，就会报错。因为代码运行的时候，开发者工具窗口是当前页，这个页面不存在 Clipboard API 依赖的 DOM 接口。一个解决方法就是，相关代码放到`setTimeout()`里面延迟运行，在调用函数之前快速点击浏览器的页面窗口，将其变成当前页。

```javascript
setTimeout(async () => {
  const text = await navigator.clipboard.readText();
  console.log(text);
}, 2000);
```

上面代码粘贴到开发者工具运行后，快速点击一下网页的页面窗口，使其变为当前页，这样就不会报错了。

### Clipboard 对象

Clipboard 对象提供了四个方法，用来读写剪贴板。它们都是异步方法，返回 Promise 对象。

#### Clipboard.readText()

`Clipboard.readText()`方法用于复制剪贴板里面的文本数据。

```javascript
document.body.addEventListener(
  'click',
  async (e) => {
    const text = await navigator.clipboard.readText();
    console.log(text);
  }
)
```

上面示例中，用户点击页面后，就会输出剪贴板里面的文本。注意，浏览器这时会跳出一个对话框，询问用户是否同意脚本读取剪贴板。

如果用户不同意，脚本就会报错。这时，可以使用`try...catch`结构，处理报错。

```javascript
async function getClipboardContents() {
  try {
    const text = await navigator.clipboard.readText();
    console.log('Pasted content: ', text);
  } catch (err) {
    console.error('Failed to read clipboard contents: ', err);
  }
}
```

#### Clipboard.read()

`Clipboard.read()`方法用于复制剪贴板里面的数据，可以是文本数据，也可以是二进制数据（比如图片）。该方法需要用户明确给予许可。

该方法返回一个 Promise 对象。一旦该对象的状态变为 resolved，就可以获得一个数组，每个数组成员都是 ClipboardItem 对象的实例。

```javascript
async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();
    for (const clipboardItem of clipboardItems) {
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        console.log(URL.createObjectURL(blob));
      }
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

ClipboardItem 对象表示一个单独的剪贴项，每个剪贴项都拥有`ClipboardItem.types`属性和`ClipboardItem.getType()`方法。

`ClipboardItem.types`属性返回一个数组，里面的成员是该剪贴项可用的 MIME 类型，比如某个剪贴项可以用 HTML 格式粘贴，也可以用纯文本格式粘贴，那么它就有两个 MIME 类型（`text/html`和`text/plain`）。

`ClipboardItem.getType(type)`方法用于读取剪贴项的数据，返回一个 Promise 对象。该方法接受剪贴项的 MIME 类型作为参数，返回该类型的数据，该参数是必需的，否则会报错。

#### Clipboard.writeText()

`Clipboard.writeText()`方法用于将文本内容写入剪贴板。

```javascript
document.body.addEventListener(
  'click',
  async (e) => {
    await navigator.clipboard.writeText('Yo')
  }
)
```

上面示例是用户在网页点击后，脚本向剪贴板写入文本数据。

该方法不需要用户许可，但是最好也放在`try...catch`里面防止报错。

```javascript
async function copyPageUrl() {
  try {
    await navigator.clipboard.writeText(location.href);
    console.log('Page URL copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
```

#### Clipboard.write()

`Clipboard.write()`方法用于将任意数据写入剪贴板，可以是文本数据，也可以是二进制数据。

该方法接受一个 ClipboardItem 实例作为参数，表示写入剪贴板的数据。

```javascript
try {
  const imgURL = 'https://dummyimage.com/300.png';
  const data = await fetch(imgURL);
  const blob = await data.blob();
  await navigator.clipboard.write([
    new ClipboardItem({
      [blob.type]: blob
    })
  ]);
  console.log('Image copied.');
} catch (err) {
  console.error(err.name, err.message);
}
```

上面示例中，脚本向剪贴板写入了一张图片。注意，Chrome 浏览器目前只支持写入 PNG 格式的图片。

`ClipboardItem()`是浏览器原生提供的构造函数，用来生成`ClipboardItem`实例，它接受一个对象作为参数，该对象的键名是数据的 MIME 类型，键值就是数据本身。

下面的例子是将同一个剪贴项的多种格式的值，写入剪贴板，一种是文本数据，另一种是二进制数据，供不同的场合粘贴使用。

```javascript
function copy() {
  const image = await fetch('kitten.png');
  const text = new Blob(['Cute sleeping kitten'], {type: 'text/plain'});
  const item = new ClipboardItem({
    'text/plain': text,
    'image/png': image
  });
  await navigator.clipboard.write([item]);
}
```

### copy 事件，cut 事件

用户向剪贴板放入数据时，将触发`copy`事件。

下面的示例是将用户放入剪贴板的文本，转为大写。

```javascript
const source = document.querySelector('.source');

source.addEventListener('copy', (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
  event.preventDefault();
});
```

上面示例中，事件对象的`clipboardData`属性包含了剪贴板数据。它是一个对象，有以下属性和方法。

- `Event.clipboardData.setData(type, data)`：修改剪贴板数据，需要指定数据类型。
- `Event.clipboardData.getData(type)`：获取剪贴板数据，需要指定数据类型。
- `Event.clipboardData.clearData([type])`：清除剪贴板数据，可以指定数据类型。如果不指定类型，将清除所有类型的数据。
- `Event.clipboardData.items`：一个类似数组的对象，包含了所有剪贴项，不过通常只有一个剪贴项。

下面的示例是拦截用户的复制操作，将指定内容放入剪贴板。

```javascript
const clipboardItems = [];

document.addEventListener('copy', async (e) => {
  e.preventDefault();
  try {
    let clipboardItems = [];
    for (const item of e.clipboardData.items) {
      if (!item.type.startsWith('image/')) {
        continue;
      }
      clipboardItems.push(
        new ClipboardItem({
          [item.type]: item,
        })
      );
      await navigator.clipboard.write(clipboardItems);
      console.log('Image copied.');
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
});
```

上面示例中，先使用`e.preventDefault()`取消了剪贴板的默认操作，然后由脚本接管复制操作。

`cut`事件则是在用户进行剪切操作时触发，它的处理跟`copy`事件完全一样，也是从`Event.clipboardData`属性拿到剪切的数据。

### paste 事件

用户使用剪贴板数据，进行粘贴操作时，会触发`paste`事件。

下面的示例是拦截粘贴操作，由脚本将剪贴板里面的数据取出来。

```javascript
document.addEventListener('paste', async (e) => {
  e.preventDefault();
  const text = await navigator.clipboard.readText();
  console.log('Pasted text: ', text);
});
```

### 参考链接

- [Unblocking clipboard access](https://web.dev/async-clipboard/)
- [Interact with the clipboard](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
- [Multi-MIME Type Copying with the Async Clipboard API](https://blog.tomayac.com/2020/03/20/multi-mime-type-copying-with-the-async-clipboard-api/)

## Fetch API 教程

`fetch()`是 XMLHttpRequest 的升级版，用于在 JavaScript 脚本里面发出 HTTP 请求。

浏览器原生提供这个对象。本章详细介绍它的用法。

### 基本用法

`fetch()`的功能与 XMLHttpRequest 基本相同，但有三个主要的差异。

（1）`fetch()`使用 Promise，不使用回调函数，因此大大简化了写法，写起来更简洁。

（2）`fetch()`采用模块化设计，API 分散在多个对象上（Response 对象、Request 对象、Headers 对象），更合理一些；相比之下，XMLHttpRequest 的 API 设计并不是很好，输入、输出、状态都在同一个接口管理，容易写出非常混乱的代码。

（3）`fetch()`通过数据流（Stream 对象）处理数据，可以分块读取，有利于提高网站性能表现，减少内存占用，对于请求大文件或者网速慢的场景相当有用。XMLHTTPRequest 对象不支持数据流，所有的数据必须放在缓存里，不支持分块读取，必须等待全部拿到后，再一次性吐出来。

在用法上，`fetch()`接受一个 URL 字符串作为参数，默认向该网址发出 GET 请求，返回一个 Promise 对象。它的基本用法如下。

```javascript
fetch(url)
  .then(...)
  .catch(...)
```

下面是一个例子，从服务器获取 JSON 数据。

```javascript
fetch('https://api.github.com/users/ruanyf')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log('Request Failed', err)); 
```

上面示例中，`fetch()`接收到的`response`是一个 [Stream 对象](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API)，`response.json()`是一个异步操作，取出所有内容，并将其转为 JSON 对象。

Promise 可以使用 await 语法改写，使得语义更清晰。

```javascript
async function getJSON() {
  let url = 'https://api.github.com/users/ruanyf';
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('Request Failed', error);
  }
}
```

上面示例中，`await`语句必须放在`try...catch`里面，这样才能捕捉异步操作中可能发生的错误。

后文都采用`await`的写法，不使用`.then()`的写法。

### Response 对象：处理 HTTP 回应

#### Response 对象的同步属性

`fetch()`请求成功以后，得到的是一个 [Response 对象](https://developer.mozilla.org/en-US/docs/Web/API/Response)。它对应服务器的 HTTP 回应。

```javascript
const response = await fetch(url);
```

前面说过，Response 包含的数据通过 Stream 接口异步读取，但是它还包含一些同步属性，对应 HTTP 回应的标头信息（Headers），可以立即读取。

```javascript
async function fetchText() {
  let response = await fetch('/readme.txt');
  console.log(response.status);
  console.log(response.statusText);
}
```

上面示例中，`response.status`和`response.statusText`就是 Response 的同步属性，可以立即读取。

标头信息属性有下面这些。

**Response.ok**

`Response.ok`属性返回一个布尔值，表示请求是否成功，`true`对应 HTTP 请求的状态码 200 到 299，`false`对应其他的状态码。

**Response.status**

`Response.status`属性返回一个数字，表示 HTTP 回应的状态码（例如200，表示成功请求）。

**Response.statusText**

`Response.statusText`属性返回一个字符串，表示 HTTP 回应的状态信息（例如请求成功以后，服务器返回“OK”）。

**Response.url**

`Response.url`属性返回请求的 URL。如果 URL 存在跳转，该属性返回的是最终 URL。

**Response.type**

`Response.type`属性返回请求的类型。可能的值如下：

- `basic`：普通请求，即同源请求。
- `cors`：跨源请求。
- `error`：网络错误，主要用于 Service Worker。
- `opaque`：如果`fetch()`请求的`type`属性设为`no-cors`，就会返回这个值，详见请求部分。表示发出的是简单的跨源请求，类似`<form>`表单的那种跨源请求。
- `opaqueredirect`：如果`fetch()`请求的`redirect`属性设为`manual`，就会返回这个值，详见请求部分。

**Response.redirected**

`Response.redirected`属性返回一个布尔值，表示请求是否发生过跳转。

#### 判断请求是否成功

`fetch()`发出请求以后，有一个很重要的注意点：只有网络错误，或者无法连接时，`fetch()`才会报错，其他情况都不会报错，而是认为请求成功。

这就是说，即使服务器返回的状态码是 4xx 或 5xx，`fetch()`也不会报错（即 Promise 不会变为 `rejected`状态）。

只有通过`Response.status`属性，得到 HTTP 回应的真实状态码，才能判断请求是否成功。请看下面的例子。

```javascript
async function fetchText() {
  let response = await fetch('/readme.txt');
  if (response.status >= 200 && response.status < 300) {
    return await response.text();
  } else {
    throw new Error(response.statusText);
  }
}
```

上面示例中，`response.status`属性只有等于 2xx （200~299），才能认定请求成功。这里不用考虑网址跳转（状态码为 3xx），因为`fetch()`会将跳转的状态码自动转为 200。

另一种方法是判断`response.ok`是否为`true`。

```javascript
if (response.ok) {
  // 请求成功
} else {
  // 请求失败
}
```

#### Response.headers 属性

Response 对象还有一个`Response.headers`属性，指向一个 [Headers 对象](https://developer.mozilla.org/en-US/docs/Web/API/Headers)，对应 HTTP 回应的所有标头。

Headers 对象可以使用`for...of`循环进行遍历。

```javascript
const response = await fetch(url);

for (let [key, value] of response.headers) {
  console.log(`${key} : ${value}`);
}

// 或者
for (let [key, value] of response.headers.entries()) {
  console.log(`${key} : ${value}`);
}
```

Headers 对象提供了以下方法，用来操作标头。

> - `Headers.get()`：根据指定的键名，返回键值。
> - `Headers.has()`： 返回一个布尔值，表示是否包含某个标头。
> - `Headers.set()`：将指定的键名设置为新的键值，如果该键名不存在则会添加。
> - `Headers.append()`：添加标头。
> - `Headers.delete()`：删除标头。
> - `Headers.keys()`：返回一个遍历器，可以依次遍历所有键名。
> - `Headers.values()`：返回一个遍历器，可以依次遍历所有键值。
> - `Headers.entries()`：返回一个遍历器，可以依次遍历所有键值对（`[key, value]`）。
> - `Headers.forEach()`：依次遍历标头，每个标头都会执行一次参数函数。

上面的有些方法可以修改标头，那是因为继承自 Headers 接口。对于 HTTP 回应来说，修改标头意义不大，况且很多标头是只读的，浏览器不允许修改。

这些方法中，最常用的是`response.headers.get()`，用于读取某个标头的值。

```javascript
let response =  await  fetch(url);
response.headers.get('Content-Type')
// application/json; charset=utf-8
```

`Headers.keys()`和`Headers.values()`方法用来分别遍历标头的键名和键值。

```javascript
// 键名
for(let key of myHeaders.keys()) {
  console.log(key);
}

// 键值
for(let value of myHeaders.values()) {
  console.log(value);
}
```

`Headers.forEach()`方法也可以遍历所有的键值和键名。

```javascript
let response = await fetch(url);
response.headers.forEach(
  (value, key) => console.log(key, ':', value)
);
```

#### 读取内容的方法

`Response`对象根据服务器返回的不同类型的数据，提供了不同的读取方法。

> - `response.text()`：得到文本字符串。
> - `response.json()`：得到 JSON 对象。
> - `response.blob()`：得到二进制 Blob 对象。
> - `response.formData()`：得到 FormData 表单对象。
> - `response.arrayBuffer()`：得到二进制 ArrayBuffer 对象。

上面5个读取方法都是异步的，返回的都是 Promise 对象。必须等到异步操作结束，才能得到服务器返回的完整数据。

**response.text()**

`response.text()`可以用于获取文本数据，比如 HTML 文件。

```javascript
const response = await fetch('/users.html');
const body = await response.text();
document.body.innerHTML = body
```

**response.json()**

`response.json()`主要用于获取服务器返回的 JSON 数据，前面已经举过例子了。

**response.formData()**

`response.formData()`主要用在 Service Worker 里面，拦截用户提交的表单，修改某些数据以后，再提交给服务器。

**response.blob()**

`response.blob()`用于获取二进制文件。

```javascript
const response = await fetch('flower.jpg');
const myBlob = await response.blob();
const objectURL = URL.createObjectURL(myBlob);

const myImage = document.querySelector('img');
myImage.src = objectURL;
```

上面示例读取图片文件`flower.jpg`，显示在网页上。

**response.arrayBuffer()**

`response.arrayBuffer()`主要用于获取流媒体文件。

```javascript
const audioCtx = new window.AudioContext();
const source = audioCtx.createBufferSource();

const response = await fetch('song.ogg');
const buffer = await response.arrayBuffer();

const decodeData = await audioCtx.decodeAudioData(buffer);
source.buffer = buffer;
source.connect(audioCtx.destination);
source.loop = true;
```

上面示例是`response.arrayBuffer()`获取音频文件`song.ogg`，然后在线播放的例子。

#### Response.clone()

Stream 对象只能读取一次，读取完就没了。这意味着，前一节的五个读取方法，只能使用一个，否则会报错。

```javascript
let text =  await response.text();
let json =  await response.json();  // 报错
```

上面示例先使用了`response.text()`，就把 Stream 读完了。后面再调用`response.json()`，就没有内容可读了，所以报错。

Response 对象提供`Response.clone()`方法，创建`Response`对象的副本，实现多次读取。

```javascript
const response1 = await fetch('flowers.jpg');
const response2 = response1.clone();

const myBlob1 = await response1.blob();
const myBlob2 = await response2.blob();

image1.src = URL.createObjectURL(myBlob1);
image2.src = URL.createObjectURL(myBlob2);
```

上面示例中，`response.clone()`复制了一份 Response 对象，然后将同一张图片读取了两次。

Response 对象还有一个`Response.redirect()`方法，用于将 Response 结果重定向到指定的 URL。该方法一般只用在 Service Worker 里面，这里就不介绍了。

#### Response.body 属性

`Response.body`属性是 Response 对象暴露出的底层接口，返回一个 ReadableStream 对象，供用户操作。

它可以用来分块读取内容，应用之一就是显示下载的进度。

```javascript
const response = await fetch('flower.jpg');
const reader = response.body.getReader();

while(true) {
  const {done, value} = await reader.read();

  if (done) {
    break;
  }

  console.log(`Received ${value.length} bytes`)
}
```

上面示例中，`response.body.getReader()`方法返回一个遍历器。这个遍历器的`read()`方法每次返回一个对象，表示本次读取的内容块。

这个对象的`done`属性是一个布尔值，用来判断有没有读完；`value`属性是一个 arrayBuffer 数组，表示内容块的内容，而`value.length`属性是当前块的大小。

### `fetch()`的第二个参数：定制 HTTP 请求

`fetch()`的第一个参数是 URL，还可以接受第二个参数，作为配置对象，定制发出的 HTTP 请求。

```javascript
fetch(url, optionObj)
```

上面命令的`optionObj`就是第二个参数。

HTTP 请求的方法、标头、数据体都在这个对象里面设置。下面是一些示例。

**（1）POST 请求**

```javascript
const response = await fetch(url, {
  method: 'POST',
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
  body: 'foo=bar&lorem=ipsum',
});

const json = await response.json();
```

上面示例中，配置对象用到了三个属性。

> - `method`：HTTP 请求的方法，`POST`、`DELETE`、`PUT`都在这个属性设置。
> - `headers`：一个对象，用来定制 HTTP 请求的标头。
> - `body`：POST 请求的数据体。

注意，有些标头不能通过`headers`属性设置，比如`Content-Length`、`Cookie`、`Host`等等。它们是由浏览器自动生成，无法修改。

**（2）提交 JSON 数据**

```javascript
const user =  { name:  'John', surname:  'Smith'  };
const response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json;charset=utf-8'
  }, 
  body: JSON.stringify(user) 
});
```

上面示例中，标头`Content-Type`要设成`'application/json;charset=utf-8'`。因为默认发送的是纯文本，`Content-Type`的默认值是`'text/plain;charset=UTF-8'`。

**（3）提交表单**

```javascript
const form = document.querySelector('form');

const response = await fetch('/users', {
  method: 'POST',
  body: new FormData(form)
})
```

**（4）文件上传**

如果表单里面有文件选择器，可以用前一个例子的写法，上传的文件包含在整个表单里面，一起提交。

另一种方法是用脚本添加文件，构造出一个表单，进行上传，请看下面的例子。

```javascript
const input = document.querySelector('input[type="file"]');

const data = new FormData();
data.append('file', input.files[0]);
data.append('user', 'foo');

fetch('/avatars', {
  method: 'POST',
  body: data
});
```

上传二进制文件时，不用修改标头的`Content-Type`，浏览器会自动设置。

**（5）直接上传二进制数据**

`fetch()`也可以直接上传二进制数据，将 Blob 或 arrayBuffer 数据放在`body`属性里面。

```javascript
let blob = await new Promise(resolve =>
  canvasElem.toBlob(resolve,  'image/png')
);

let response = await fetch('/article/fetch/post/image', {
  method:  'POST',
  body: blob
});
```

### `fetch()`配置对象的完整 API

`fetch()`第二个参数的完整 API 如下。

```javascript
const response = fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined,
  referrer: "about:client",
  referrerPolicy: "no-referrer-when-downgrade",
  mode: "cors",
  credentials: "same-origin",
  cache: "default",
  redirect: "follow",
  integrity: "",
  keepalive: false,
  signal: undefined
});
```

`fetch()`请求的底层用的是 [Request() 对象](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)的接口，参数完全一样，因此上面的 API 也是`Request()`的 API。

这些属性里面，`headers`、`body`、`method`前面已经给过示例了，下面是其他属性的介绍。

**cache**

`cache`属性指定如何处理缓存。可能的取值如下：

- `default`：默认值，先在缓存里面寻找匹配的请求。
- `no-store`：直接请求远程服务器，并且不更新缓存。
- `reload`：直接请求远程服务器，并且更新缓存。
- `no-cache`：将服务器资源跟本地缓存进行比较，有新的版本才使用服务器资源，否则使用缓存。
- `force-cache`：缓存优先，只有不存在缓存的情况下，才请求远程服务器。
- `only-if-cached`：只检查缓存，如果缓存里面不存在，将返回504错误。

**mode**

`mode`属性指定请求的模式。可能的取值如下：

- `cors`：默认值，允许跨源请求。
- `same-origin`：只允许同源请求。
- `no-cors`：请求方法只限于 GET、POST 和 HEAD，并且只能使用有限的几个简单标头，不能添加跨源的复杂标头，相当于提交表单、`<script>`加载脚本、`<img>`加载图片等传统的跨源请求方法。

**credentials**

`credentials`属性指定是否发送 Cookie。可能的取值如下：

- `same-origin`：默认值，同源请求时发送 Cookie，跨源请求时不发送。
- `include`：不管同源请求，还是跨源请求，一律发送 Cookie。
- `omit`：一律不发送。

跨源请求发送 Cookie，需要将`credentials`属性设为`include`。

```javascript
fetch('http://another.com', {
  credentials: "include"
});
```

**signal**

`signal`属性指定一个 AbortSignal 实例，用于取消`fetch()`请求，详见下一节。

**keepalive**

`keepalive`属性用于页面卸载时，告诉浏览器在后台保持连接，继续发送数据。

一个典型的场景就是，用户离开网页时，脚本向服务器提交一些用户行为的统计信息。这时，如果不用`keepalive`属性，数据可能无法发送，因为浏览器已经把页面卸载了。

```javascript
window.onunload = function() {
  fetch('/analytics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      some: 'data'
    }),
    keepalive: true
  });
};
```

**redirect**

`redirect`属性指定 HTTP 跳转的处理方法。可能的取值如下：

- `follow`：默认值，`fetch()`跟随 HTTP 跳转。
- `error`：如果发生跳转，`fetch()`就报错。
- `manual`：`fetch()`不跟随 HTTP 跳转，但是`response.url`属性会指向新的 URL，`response.redirected`属性会变为`true`，由开发者自己决定后续如何处理跳转。

**integrity**

`integrity`属性指定一个哈希值，用于检查 HTTP 回应传回的数据是否等于这个预先设定的哈希值。

比如，下载文件时，检查文件的 SHA-256 哈希值是否相符，确保没有被篡改。

```javascript
fetch('http://site.com/file', {
  integrity: 'sha256-abcdef'
});
```

**referrer**

`referrer`属性用于设定`fetch()`请求的`referer`标头。

这个属性可以为任意字符串，也可以设为空字符串（即不发送`referer`标头）。

```javascript
fetch('/page', {
  referrer: ''
});
```

**referrerPolicy**

`referrerPolicy`属性用于设定`Referer`标头的规则。可能的取值如下：

- `no-referrer-when-downgrade`：默认值，总是发送`Referer`标头，除非从 HTTPS 页面请求 HTTP 资源时不发送。
- `no-referrer`：不发送`Referer`标头。
- `origin`：`Referer`标头只包含域名，不包含完整的路径。
- `origin-when-cross-origin`：同源请求`Referer`标头包含完整的路径，跨源请求只包含域名。
- `same-origin`：跨源请求不发送`Referer`，同源请求发送。
- `strict-origin`：`Referer`标头只包含域名，HTTPS 页面请求 HTTP 资源时不发送`Referer`标头。
- `strict-origin-when-cross-origin`：同源请求时`Referer`标头包含完整路径，跨源请求时只包含域名，HTTPS 页面请求 HTTP 资源时不发送该标头。
- `unsafe-url`：不管什么情况，总是发送`Referer`标头。

### 取消`fetch()`请求

`fetch()`请求发送以后，如果中途想要取消，需要使用`AbortController`对象。

```javascript
let controller = new AbortController();
let signal = controller.signal;

fetch(url, {
  signal: controller.signal
});

signal.addEventListener('abort',
  () => console.log('abort!')
);

controller.abort(); // 取消

console.log(signal.aborted); // true
```

上面示例中，首先新建 AbortController 实例，然后发送`fetch()`请求，配置对象的`signal`属性必须指定接收 AbortController 实例发送的信号`controller.signal`。

`controller.abort()`方法用于发出取消信号。这时会触发`abort`事件，这个事件可以监听，也可以通过`controller.signal.aborted`属性判断取消信号是否已经发出。

下面是一个1秒后自动取消请求的例子。

```javascript
let controller = new AbortController();
setTimeout(() => controller.abort(), 1000);

try {
  let response = await fetch('/long-operation', {
    signal: controller.signal
  });
} catch(err) {
  if (err.name == 'AbortError') {
    console.log('Aborted!');
  } else {
    throw err;
  }
}
```

### 参考链接

- [Network requests: Fetch](https://javascript.info/fetch)
- [node-fetch](https://github.com/node-fetch/node-fetch)
- [Introduction to fetch()](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
- [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Javascript Fetch API: The XMLHttpRequest evolution](https://developerhowto.com/2019/09/14/javascript-fetch-api/)
- [A Guide to Faster Web App I/O and Data Operations with Streams](https://www.sitepen.com/blog/2017/10/02/a-guide-to-faster-web-app-io-and-data-operations-with-streams/)

## FontFace API

FontFace API 用来控制字体加载。

这个 API 提供一个构造函数`FontFace()`，返回一个字体对象。

```javascript
new FontFace(family, source, descriptors)
```

`FontFace()`构造函数接受三个参数。

- `family`：字符串，表示字体名，写法与 CSS 的`@font-face`的`font-family`属性相同。
- `source`：字体文件的 URL（必须包括 CSS 的`url()`方法），或者是一个字体的 ArrayBuffer 对象。
- `descriptors`：对象，用来定制字体文件。该参数可选。

```javascript
var fontFace = new FontFace(
  'Roboto',
  'url(https://fonts.example.com/roboto.woff2)'
);

fontFace.family // "Roboto"
```

`FontFace()`返回的是一个字体对象，这个对象包含字体信息。注意，这时字体文件还没有开始加载。

字体对象包含以下属性。

- `FontFace.family`：字符串，表示字体的名字，等同于 CSS 的`font-family`属性。
- `FontFace.display`：字符串，指定字体加载期间如何展示，等同于 CSS 的`font-display`属性。它有五个可能的值：`auto`（由浏览器决定）、`block`（字体加载期间，前3秒会显示不出内容，然后只要还没完成加载，就一直显示后备字体）、`fallback`（前100毫秒显示不出内容，后3秒显示后备字体，然后只要字体还没完成加载，就一直显示后备字体）、`optional`（前100毫秒显示不出内容，然后只要字体还没有完成加载，就一直显示后备字体），`swap`（只要字体没有完成加载，就一直显示后备字体）。
- `FontFace.style`：字符串，等同于 CSS 的`font-style`属性。
- `FontFace.weight`：字符串，等同于 CSS 的`font-weight`属性。
- `FontFace.stretch`：字符串，等同于 CSS 的`font-strentch`属性。
- `FontFace.unicodeRange`：字符串，等同于`descriptors`对象的同名属性。
- `FontFace.variant`：字符串，等同于`descriptors`对象的同名属性。
- `FontFace.featureSettings`：字符串，等同于`descriptors`对象的同名属性。
- `FontFace.status`：字符串，表示字体的加载状态，有四个可能的值：`unloaded`、`loading`、`loaded`、`error`。该属性只读。
- `FontFace.loaded`：返回一个 Promise 对象，字体加载成功或失败，会导致该 Promise 状态改变。该属性只读。

字体对象的方法，只有一个`FontFace.load()`，该方法会真正开始加载字体。它返回一个 Promise 对象，状态由字体加载的结果决定。

```javascript
var f = new FontFace('test', 'url(x)');

f.load().then(function () {
  // 网页可以开始使用该字体
});
```

## Geolocation API

Geolocation API 用于获取用户的地理位置。

由于该功能涉及用户隐私，所以浏览器会提示用户，是否同意给出地理位置，用户可能会拒绝。另外，这个 API 只能在 HTTPS 环境使用。

浏览器通过`navigator.geolocation`属性提供该 API。

### Geolocation 对象

`navigator.geolocation`属性返回一个 Geolocation 对象。该对象具有以下三个方法。

- `Geolocation.getCurrentPosition()`：返回一个 Position 对象，表示用户的当前位置。
- `Geolocation.watchPosition()`：指定一个监听函数，每当用户的位置发生变化，就执行该监听函数。
- `Geolocation.clearWatch()`：取消`watchPosition()`方法指定的监听函数。

#### Geolocation.getCurrentPosition()

`Geolocation.getCurrentPosition()`方法用于获取用户的位置。

```javascript
navigator.geolocation.getCurrentPosition(success, error, options)
```

该方法接受三个参数。

- `success`：用户同意给出位置时的回调函数，它的参数是一个 Position 对象。
- `error`：用户拒绝给出位置时的回调函数，它的参数是一个 PositionError 对象。该参数可选。
- `options`：参数对象，该参数可选。

Position 对象有两个属性。

- `Position.coords`：返回一个 Coordinates 对象，表示当前位置的坐标。
- `Position.timestamp`：返回一个对象，代表当前时间戳。

PositionError 对象主要有两个属性。

- `PositionError.code`：整数，表示发生错误的原因。`1`表示无权限，有可能是用户拒绝授权；`2`表示无法获得位置，可能设备有故障；`3`表示超时。
- `PositionError.message`：字符串，表示错误的描述。

参数对象`option`可以指定三个属性。

- `enableHighAccuracy`：布尔值，是否返回高精度结果。如果设为`true`，可能导致响应时间变慢或（移动设备的）功耗增加；反之，如果设为`false`，设备可以更快速地响应。默认值为`false`。
- `timeout`：正整数，表示等待查询的最长时间，单位为毫秒。默认值为`Infinity`。
- `maximumAge`：正整数，表示可接受的缓存最长时间，单位为毫秒。如果设为`0`，表示不返回缓存值，必须查询当前的实际位置；如果设为`Infinity`，必须返回缓存值，不管缓存了多少时间。默认值为`0`。

下面是一个例子。

```javascript
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log(`经度：${crd.latitude}`);
  console.log(`纬度：${crd.longitude}`);
  console.log(`误差：${crd.accuracy} 米`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

#### Geolocation.watchPosition()

`Geolocation.watchPosition()`对象指定一个监听函数，每当用户的位置发生变化，就是自动执行这个函数。

```javascript
navigator.geolocation.watchPosition(success[, error[, options]])
```

该方法接受三个参数。

- `success`：监听成功的回调函数，该函数的参数为一个 Position 对象。
- `error`：该参数可选，表示监听失败的回调函数，该函数的参数是一个 PositionError 对象。
- `options`：该参数可选，表示监听的参数配置对象。

该方法返回一个整数值，表示监听函数的编号。该整数用来供`Geolocation.clearWatch()`方法取消监听。

下面是一个例子。

```javascript
var id;

var target = {
  latitude : 0,
  longitude: 0
};

var options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log('恭喜，你已经到达了指定位置。');
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

id = navigator.geolocation.watchPosition(success, error, options);
```

#### Geolocation.clearWatch()

`Geolocation.clearWatch()`方法用来取消`watchPosition()`方法指定的监听函数。它的参数是`watchPosition()`返回的监听函数的编号。

```javascript
navigator.geolocation.clearWatch(id);
```

使用方法的例子见上一节。

### Coordinates 对象

Coordinates 对象是地理位置的坐标接口，`Position.coords`属性返回的就是这个对象。

它有以下属性，全部为只读属性。

- `Coordinates.latitude`：浮点数，表示纬度。
- `Coordinates.longitude`：浮点数，表示经度。
- `Coordinates.altitude`：浮点数，表示海拔（单位：米）。如果不可得，返回`null`。
- `Coordinates.accuracy`：浮点数，表示经度和纬度的精度（单位：米）。
- `Coordinates.altitudeAccuracy`：浮点数，表示海拔的精度（单位：米）。返回`null`。
- `Coordinates.speed`：浮点数，表示设备的速度（单位：米/秒）。如果不可得，返回`null`。
- `Coordinates.heading`：浮点数，表示设备前进的方向（单位：度）。方向按照顺时针，北方是0度，东方是90度，西方是270度。如果`Coordinates.speed`为0，`heading`属性返回`NaN`。如果设备无法提供方向信息，该属性返回`null`。

下面是一个例子。

```javascript
navigator.geolocation.getCurrentPosition( function (position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  console.log(`纬度：${lat.toFixed(2)}`);
  console.log(`经度：${long.toFixed(2)}`);
});
```

### 参考链接

- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API), by MDN

## IntersectionObserver

网页开发时，常常需要了解某个元素是否进入了“视口”（viewport），即用户能不能看到它。

![](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308071415512.gif)

上图的绿色方块不断滚动，顶部会提示它的可见性。

传统的实现方法是，监听到`scroll`事件后，调用目标元素（绿色方块）的[`getBoundingClientRect()`](https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect)方法，得到它对应于视口左上角的坐标，再判断是否在视口之内。这种方法的缺点是，由于`scroll`事件密集发生，计算量很大，容易造成[性能问题](http://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html)。

[IntersectionObserver API](https://wicg.github.io/IntersectionObserver/)，可以自动“观察”元素是否可见，Chrome 51+ 已经支持。由于可见（visible）的本质是，目标元素与视口产生一个交叉区，所以这个 API 叫做“交叉观察器”（intersection oberserver）。

### 简介

IntersectionObserver API 的用法，简单来说就是两行。

```javascript
var observer = new IntersectionObserver(callback, options);
observer.observe(target);
```

上面代码中，`IntersectionObserver`是浏览器原生提供的构造函数，接受两个参数：`callback`是可见性变化时的回调函数，`option`是配置对象（该参数可选）。

`IntersectionObserver()`的返回值是一个观察器实例。实例的`observe()`方法可以指定观察哪个 DOM 节点。

```javascript
// 开始观察
observer.observe(document.getElementById('example'));

// 停止观察
observer.unobserve(element);

// 关闭观察器
observer.disconnect();
```

上面代码中，`observe()`的参数是一个 DOM 节点对象。如果要观察多个节点，就要多次调用这个方法。

```javascript
observer.observe(elementA);
observer.observe(elementB);
```

注意，IntersectionObserver API 是异步的，不随着目标元素的滚动同步触发。规格写明，`IntersectionObserver`的实现，应该采用`requestIdleCallback()`，即只有线程空闲下来，才会执行观察器。这意味着，这个观察器的优先级非常低，只在其他任务执行完，浏览器有了空闲才会执行。

### IntersectionObserver.observe()

IntersectionObserver 实例的`observe()`方法用来启动对一个 DOM 元素的观察。该方法接受两个参数：回调函数`callback`和配置对象`options`。

#### callback 参数

目标元素的可见性变化时，就会调用观察器的回调函数`callback`。

`callback`会触发两次。一次是目标元素刚刚进入视口（开始可见），另一次是完全离开视口（开始不可见）。

```javascript
var observer = new IntersectionObserver(
  (entries, observer) => {
    console.log(entries);
  }
);
```

上面代码中，回调函数采用的是[箭头函数](http://es6.ruanyifeng.com/##docs/function##箭头函数)的写法。`callback`函数的参数（`entries`）是一个数组，每个成员都是一个[`IntersectionObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)对象（详见下文）。举例来说，如果同时有两个被观察的对象的可见性发生变化，`entries`数组就会有两个成员。

#### IntersectionObserverEntry 对象

`IntersectionObserverEntry`对象提供目标元素的信息，一共有六个属性。

```javascript
{
  time: 3893.92,
  rootBounds: ClientRect {
    bottom: 920,
    height: 1024,
    left: 0,
    right: 1024,
    top: 0,
    width: 920
  },
  boundingClientRect: ClientRect {
     // ...
  },
  intersectionRect: ClientRect {
    // ...
  },
  intersectionRatio: 0.54,
  target: element
}
```

每个属性的含义如下。

> - `time`：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒
> - `target`：被观察的目标元素，是一个 DOM 节点对象
> - `rootBounds`：容器元素的矩形区域的信息，`getBoundingClientRect()`方法的返回值，如果没有容器元素（即直接相对于视口滚动），则返回`null`
> - `boundingClientRect`：目标元素的矩形区域的信息
> - `intersectionRect`：目标元素与视口（或容器元素）的交叉区域的信息
> - `intersectionRatio`：目标元素的可见比例，即`intersectionRect`占`boundingClientRect`的比例，完全可见时为`1`，完全不可见时小于等于`0`

![](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308071415501.png)

上图中，灰色的水平方框代表视口，深红色的区域代表四个被观察的目标元素。它们各自的`intersectionRatio`图中都已经注明。

我写了一个 [Demo](http://jsbin.com/canuze/edit?js,console,output)，演示`IntersectionObserverEntry`对象。注意，这个 Demo 只能在 Chrome 51+ 运行。

#### Option 对象

`IntersectionObserver`构造函数的第二个参数是一个配置对象。它可以设置以下属性。

**（1）threshold 属性**

`threshold`属性决定了什么时候触发回调函数，即元素进入视口（或者容器元素）多少比例时，执行回调函数。它是一个数组，每个成员都是一个门槛值，默认为`[0]`，即交叉比例（`intersectionRatio`）达到`0`时触发回调函数。

如果`threshold`属性是0.5，当元素进入视口50%时，触发回调函数。如果值为`[0.3, 0.6]`，则当元素进入30％和60％是触发回调函数。

```javascript
new IntersectionObserver(
  entries => {/* … */},
  {
    threshold: [0, 0.25, 0.5, 0.75, 1]
  }
);
```

用户可以自定义这个数组。比如，上例的`[0, 0.25, 0.5, 0.75, 1]`就表示当目标元素 0%、25%、50%、75%、100% 可见时，会触发回调函数。

![](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308071415506.gif)

**（2）root 属性，rootMargin 属性**

`IntersectionObserver`不仅可以观察元素相对于视口的可见性，还可以观察元素相对于其所在容器的可见性。容器内滚动也会影响目标元素的可见性，参见本文开始时的那张示意图。

IntersectionObserver API 支持容器内滚动。`root`属性指定目标元素所在的容器节点。注意，容器元素必须是目标元素的祖先节点。

```javascript
var opts = {
  root: document.querySelector('.container'),
  rootMargin: '0px 0px -200px 0px'
};

var observer = new IntersectionObserver(
  callback,
  opts
);
```

上面代码中，除了`root`属性，还有[`rootMargin`](https://wicg.github.io/IntersectionObserver/##dom-intersectionobserverinit-rootmargin)属性。该属性用来扩展或缩小`rootBounds`这个矩形的大小，从而影响`intersectionRect`交叉区域的大小。它的写法类似于 CSS 的`margin`属性，比如`0px 0px 0px 0px`，依次表示 top、right、bottom 和 left 四个方向的值。

上例的`0px 0px -200px 0px`，表示容器的下边缘向上收缩200像素，导致页面向下滚动时，目标元素的顶部进入可视区域200像素以后，才会触发回调函数。

这样设置以后，不管是窗口滚动或者容器内滚动，只要目标元素可见性变化，都会触发观察器。

### 实例

#### 惰性加载（lazy load）

有时，我们希望某些静态资源（比如图片），只有用户向下滚动，它们进入视口时才加载，这样可以节省带宽，提高网页性能。这就叫做“惰性加载”。

有了 IntersectionObserver API，实现起来就很容易了。图像的 HTML 代码可以写成下面这样。

```html
<img src="placeholder.png" data-src="img-1.jpg">
<img src="placeholder.png" data-src="img-2.jpg">
<img src="placeholder.png" data-src="img-3.jpg">
```

上面代码中，图像默认显示一个占位符，`data-src`属性是惰性加载的真正图像。

```javascript
function query(selector) {
  return Array.from(document.querySelectorAll(selector));
}

var observer = new IntersectionObserver(
  function(entries) {
    entries.forEach(function(entry) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    });
  }
);

query('.lazy-loaded').forEach(function (item) {
  observer.observe(item);
});
```

上面代码中，只有图像开始可见时，才会加载真正的图像文件。

#### 无限滚动

无限滚动（infinite scroll）指的是，随着网页滚动到底部，不断加载新的内容到页面，它的实现也很简单。

```javascript
var intersectionObserver = new IntersectionObserver(
  function (entries) {
    // 如果不可见，就返回
    if (entries[0].intersectionRatio <= 0) return;
    loadItems(10);
    console.log('Loaded new items');
  }
);

// 开始观察
intersectionObserver.observe(
  document.querySelector('.scrollerFooter')
);
```

无限滚动时，最好像上例那样，页面底部有一个页尾栏（又称[sentinels](sentinels)，上例是`.scrollerFooter`）。一旦页尾栏可见，就表示用户到达了页面底部，从而加载新的条目放在页尾栏前面。否则就需要每一次页面加入新内容时，都调用`observe()`方法，对新增内容的底部建立观察。

#### 视频自动播放

下面是一个视频元素，希望它完全进入视口的时候自动播放，离开视口的时候自动暂停。

```html
<video src="foo.mp4" controls=""></video>
```

下面是 JS 代码。

```javascript
let video = document.querySelector('video');
let isPaused = false;

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio != 1  && !video.paused) {
      video.pause();
      isPaused = true;
    } else if (isPaused) {
      video.play();
      isPaused=false;
    }
  });
}, {threshold: 1});

observer.observe(video);
```

上面代码中，`IntersectionObserver()`的第二个参数是配置对象，它的`threshold`属性等于`1`，即目标元素完全可见时触发回调函数。

### 参考链接

- [IntersectionObserver’s Coming into View](https://developers.google.com/web/updates/2016/04/intersectionobserver)
- [Intersection Observers Explained](https://github.com/WICG/IntersectionObserver/blob/gh-pages/explainer.md)
- [A Few Functional Uses for Intersection Observer to Know When an Element is in View](https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/), Preethi

## Intl.RelativeTimeFormat

很多日期库支持显示相对时间，比如“昨天”、“五分钟前”、“两个月之前”等等。由于不同的语言，日期显示的格式和相关词语都不同，造成这些库的体积非常大。

现在，浏览器提供内置的 Intl.RelativeTimeFormat API，可以不使用这些库，直接显示相对时间。

### 基本用法

`Intl.RelativeTimeFormat()`是一个构造函数，接受一个语言代码作为参数，返回一个相对时间的实例对象。如果省略参数，则默认传入当前运行时的语言代码。

```javascript
const rtf = new Intl.RelativeTimeFormat('en');

rtf.format(3.14, 'second') // "in 3.14 seconds"
rtf.format(-15, 'minute') // "15 minutes ago"
rtf.format(8, 'hour') // "in 8 hours"
rtf.format(-2, 'day') // "2 days ago"
rtf.format(3, 'week') // "in 3 weeks"
rtf.format(-5, 'month') // "5 months ago"
rtf.format(2, 'quarter') // "in 2 quarters"
rtf.format(-42, 'year') // "42 years ago"
```

上面代码指定使用英语显示相对时间。

下面是使用西班牙语显示相对时间的例子。

```javascript
const rtf = new Intl.RelativeTimeFormat('es');

rtf.format(3.14, 'second') // "dentro de 3,14 segundos"
rtf.format(-15, 'minute') // "hace 15 minutos"
rtf.format(8, 'hour') // "dentro de 8 horas"
rtf.format(-2, 'day') // "hace 2 días"
rtf.format(3, 'week') // "dentro de 3 semanas"
rtf.format(-5, 'month') // "hace 5 meses"
rtf.format(2, 'quarter') // "dentro de 2 trimestres"
rtf.format(-42, 'year') // "hace 42 años"
```

`Intl.RelativeTimeFormat()`还可以接受一个配置对象，作为第二个参数，用来精确指定相对时间实例的行为。配置对象共有下面这些属性。

- options.style：表示返回字符串的风格，可能的值有`long`（默认值，比如“in 1 month”）、`short`（比如“in 1 mo.”）、`narrow`（比如“in 1 mo.”）。对于一部分语言来说，`narrow`风格和`short`风格是类似的。
- options.localeMatcher：表示匹配语言参数的算法，可能的值有`best fit`（默认值）和`lookup`。
- options.numeric：表示返回字符串是数字显示，还是文字显示，可能的值有`always`（默认值，总是文字显示）和`auto`（自动转换）。

```javascript
// 下面的配置对象，传入的都是默认值
const rtf = new Intl.RelativeTimeFormat('en', {
  localeMatcher: 'best fit', // 其他值：'lookup'
  style: 'long', // 其他值：'short' or 'narrow'
  numeric: 'always', // 其他值：'auto'
});

// Now, let’s try some special cases!

rtf.format(-1, 'day') // "1 day ago"
rtf.format(0, 'day') // "in 0 days"
rtf.format(1, 'day') // "in 1 day"
rtf.format(-1, 'week') // "1 week ago"
rtf.format(0, 'week') // "in 0 weeks"
rtf.format(1, 'week') // "in 1 week"
```

上面代码中，显示的是“1 day ago”，而不是“yesterday”；显示的是“in 0 weeks”，而不是“this week”。这是因为默认情况下，相对时间显示的是数值形式，而不是文字形式。

改变这个行为，可以把配置对象的`numeric`属性改成`auto`。

```javascript
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

rtf.format(-1, 'day') // "yesterday"
rtf.format(0, 'day') // "today"
rtf.format(1, 'day') // "tomorrow"
rtf.format(-1, 'week') // "last week"
rtf.format(0, 'week') // "this week"
rtf.format(1, 'week') // "next week"
```

### Intl.RelativeTimeFormat.prototype.format()

相对时间实例对象的`format`方法，接受两个参数，依次为时间间隔的数值和单位。其中，“单位”是一个字符串，可以接受以下八个值。

- year
- quarter
- month
- week
- day
- hour
- minute
- second

```javascript
let rtf = new Intl.RelativeTimeFormat('en');
rtf.format(-1, "day") // "yesterday"
rtf.format(2.15, "day") // "in 2.15 days
```

### Intl.RelativeTimeFormat.prototype.formatToParts()

相对时间实例对象的`formatToParts()`方法的参数跟`format()`方法一样，但是返回的是一个数组，用来精确控制相对时间的每个部分。

```javascript
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

rtf.format(-1, 'day') 
// "yesterday"
rtf.formatToParts(-1, 'day');
// [{ type: "literal", value: "yesterday" }]

rtf.format(3, 'week');
// "in 3 weeks"
rtf.formatToParts(3, 'week');
// [
//   { type: 'literal', value: 'in ' },
//   { type: 'integer', value: '3', unit: 'week' },
//   { type: 'literal', value: ' weeks' }
// ]
```

返回数组的每个成员都是一个对象，拥有两个属性。

- type：字符串，表示输出值的类型。
- value：字符串，表示输出的内容。
- unit：如果输出内容表示一个数值（即`type`属性不是`literal`），那么还会有`unit`属性，表示数值的单位。

### 参考链接

- [The Intl.RelativeTimeFormat API](https://developers.google.com/web/updates/2018/10/intl-relativetimeformat), Mathias Bynens
- [Intl.RelativeTimeFormat API Specification](https://github.com/tc39/proposal-intl-relative-time##api), TC39

## Offline 应用

Web 应用不仅可以在浏览器缓存资源文件（HTML、CSS、JS 脚本、图片等），还可以把应用本身储存到浏览器。

缓存的资源文件必须在线使用，只有先从服务器加载网页，然后才能使用本地缓存；但是，应用一旦储存，就可以离线使用。另外，用户常规性地清除浏览器缓存，并不会清除储存的应用，除非用户显式地卸载或删除它们。

为了开启离线储存，必须创建一个 manifest 文件。该文件列出了所有需要储存的文件。

```html
CACHE MANIFEST
myapp.html
myapp.js
myapp.css
/images/front_end/background.png
```

Manifest 文件的第一行必须是`CACHE MANIFEST`。然后，每一行列出一个需要储存的文件，它们的位置都是相对于 Manifest 文件的位置。空行会被忽略，以`##`开头的行是注释，也会被忽略。

这个文件的后缀名一般是`.appcache`。它的 MIME 类型必须是`text/cache-manifest`，如果服务器将其设为其他类型，就不会被浏览器缓存。

编写完这个文件以后，要将`<html>`元素的`manifest`属性指向它。浏览器加载这个网页的时候，就会读取这个 Manifest 文件，离线储存这个网页和相关的资源。

```html
<!DOCTYPE HTML>
<html manifest="myapp.appcache">
<head>...</head>
<body>...</body>
</html>
```

如果一个 Web 应用有多个网页需要离线储存，那么每个网页都应该将`manifest`属性指向这个文件。一旦被储存，以后加载该网页的时候，就会从缓存里面加载。这时，只有 Manifest 文件里面列出的文件会被加载，其他文件不会。如果这时浏览器在线，浏览器就会去检查 Manifest 文件是否有新版本，如果有新版本，就会重新储存和更新该文件列出的资源。最方便的办法是在 Manifest 文件里面用注释列出版本号。

```html
CACHE MANIFEST
## MyApp version 1
MyApp.html
MyApp.js
```

如果需要删除离线储存，只要删除 Manifest 文件，让其返回 404 状态码即可。

离线储存更新完成，会触发浏览器的`updateready`事件，可以对这个事件指定监听函数。

```javascript
window.applicationCache.onupdateready = function() {
  var reload = confirm('新版本下载完成。是否需要重新加载？');
  if (reload) location.reload();
}
```

脚本可以注册`online`和`offline`事件的监听函数，通过`navigator.onLine`属性，判断浏览器是否在线从而进行数据同步。

每次浏览器加载一个具有`manifest`属性的网页，浏览器就会触发一个`checking`事件，然后去加载 Manifest 文件。

- 如果应用已经储存，并且 Manifest 文件没有变化，那么触发`noupdate`事件。
- 如果应用已经储存，并且 Manifest 文件有变化，那么触发`downloading`事件，浏览器重新下载所有离线资源。下载过程中，触发`progress`事件，下载结束触发`updateready`事件。
- 如果应用没有储存，下载结束将触发`cached`事件。
- 如果离线，无法检查 Manifest 文件，浏览器会触发一个`error`事件。
- 如果浏览器在线，而且应用已经储存，但是 Manifest 文件返回 404，浏览器触发`obsolete`事件，将储存的应用移除。

所有这些事件都是可以取消的。监听函数可以返回`false`，取消这些事件的默认动作。

`applicationCache. status`属性返回离线储存的状态。

- ApplicationCache.UNCACHED (0)
  This application does not have a manifest attribute: it is not cached.
- ApplicationCache.IDLE (1)
  The manifest has been checked and this application is cached and up to date.
- ApplicationCache.CHECKING (2)
  The browser is checking the manifest file.
- ApplicationCache.DOWNLOADING (3)
  The browser is downloading and caching files listed in the manifest.
- ApplicationCache.UPDATEREADY (4)
  A new version of the application has been downloaded and cached.
- ApplicationCache.OBSOLETE (5)
  The manifest no longer exists and the cache will be deleted.

## Page Lifecycle API

Android、iOS 和最新的 Windows 系统可以随时自主地停止后台进程，及时释放系统资源。也就是说，网页可能随时被系统丢弃掉。以前的浏览器 API 完全没有考虑到这种情况，导致开发者根本没有办法监听到系统丢弃页面。

为了解决这个问题，W3C 新制定了一个 Page Lifecycle API，统一了网页从诞生到卸载的行为模式，并且定义了新的事件，允许开发者响应网页状态的各种转换。

有了这个 API，开发者就可以预测网页下一步的状态，从而进行各种针对性的处理。Chrome 68 支持这个 API，对于老式浏览器可以使用谷歌开发的兼容库 [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle)。

### 生命周期阶段

网页的生命周期分成六个阶段，每个时刻只可能处于其中一个阶段。

![](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308071415532.png)

**（1）Active 阶段**

在 Active 阶段，网页处于可见状态，且拥有输入焦点。

**（2）Passive 阶段**

在 Passive 阶段，网页可见，但没有输入焦点，无法接受输入。UI 更新（比如动画）仍然在执行。该阶段只可能发生在桌面同时有多个窗口的情况。

**（3）Hidden 阶段**

在 Hidden 阶段，用户的桌面被其他窗口占据，网页不可见，但尚未冻结。UI 更新不再执行。

**（4）Terminated 阶段**

在 Terminated 阶段，由于用户主动关闭窗口，或者在同一个窗口前往其他页面，导致当前页面开始被浏览器卸载并从内存中清除。注意，这个阶段总是在 Hidden 阶段之后发生，也就是说，用户主动离开当前页面，总是先进入 Hidden 阶段，再进入 Terminated 阶段。

这个阶段会导致网页卸载，任何新任务都不会在这个阶段启动，并且如果运行时间太长，正在进行的任务可能会被终止。

**（5）Frozen 阶段**

如果网页处于 Hidden 阶段的时间过久，用户又不关闭网页，浏览器就有可能冻结网页，使其进入 Frozen 阶段。不过，也有可能，处于可见状态的页面长时间没有操作，也会进入 Frozen 阶段。

这个阶段的特征是，网页不会再被分配 CPU 计算资源。定时器、回调函数、网络请求、DOM 操作都不会执行，不过正在运行的任务会执行完。浏览器可能会允许 Frozen 阶段的页面，周期性复苏一小段时间，短暂变回 Hidden 状态，允许一小部分任务执行。

**（6）Discarded 阶段**

如果网页长时间处于 Frozen 阶段，用户又不唤醒页面，那么就会进入 Discarded 阶段，即浏览器自动卸载网页，清除该网页的内存占用。不过，Passive 阶段的网页如果长时间没有互动，也可能直接进入 Discarded 阶段。

这一般是在用户没有介入的情况下，由系统强制执行。任何类型的新任务或 JavaScript 代码，都不能在此阶段执行，因为这时通常处在资源限制的状况下。

网页被浏览器自动 Discarded 以后，它的 Tab 窗口还是在的。如果用户重新访问这个 Tab 页，浏览器将会重新向服务器发出请求，再一次重新加载网页，回到 Active 阶段。

### 常见场景

以下是几个常见场景的网页生命周期变化。

（1）用户打开网页后，又切换到其他 App，但只过了一会又回到网页。

网页由 Active 变成 Hidden，又变回 Active。

（2）用户打开网页后，又切换到其他 App，并且长时候使用后者，导致系统自动丢弃网页。

网页由 Active 变成 Hidden，再变成 Frozen，最后 Discarded。

（3）用户打开网页后，又切换到其他 App，然后从任务管理器里面将浏览器进程清除。

网页由 Active 变成 Hidden，然后 Terminated。

（4）系统丢弃了某个 Tab 里面的页面后，用户重新打开这个 Tab。

网页由 Discarded 变成 Active。

### 事件

生命周期的各个阶段都有自己的事件，以供开发者指定监听函数。这些事件里面，只有两个是新定义的（`freeze`事件和`resume`事件），其它都是现有的。

注意，网页的生命周期事件是在所有帧（frame）触发，不管是底层的帧，还是内嵌的帧。也就是说，内嵌的`<iframe>`网页跟顶层网页一样，都会同时监听到下面的事件。

#### focus 事件

`focus`事件在页面获得输入焦点时触发，比如网页从 Passive 阶段变为 Active 阶段。

#### blur 事件

`blur`事件在页面失去输入焦点时触发，比如网页从 Active 阶段变为 Passive 阶段。

#### visibilitychange 事件

`visibilitychange`事件在网页可见状态发生变化时触发，一般发生在以下几种场景。

> - 用户隐藏页面（切换 Tab、最小化浏览器），页面由 Active 阶段变成 Hidden 阶段。
> - 用户重新访问隐藏的页面，页面由 Hidden 阶段变成 Active 阶段。
> - 用户关闭页面，页面会先进入 Hidden 阶段，然后进入 Terminated 阶段。

可以通过`document.onvisibilitychange`属性指定这个事件的回调函数。

#### freeze 事件

`freeze`事件在网页进入 Frozen 阶段时触发。

可以通过`document.onfreeze`属性指定在进入 Frozen 阶段时调用的回调函数。

```javascript
function handleFreeze(e) {
    // Handle transition to FROZEN
}
document.addEventListener('freeze', handleFreeze);

## 或者
document.onfreeze = function() { … }
```

这个事件的监听函数，最长只能运行500毫秒。并且只能复用已经打开的网络连接，不能发起新的网络请求。

注意，从 Frozen 阶段进入 Discarded 阶段，不会触发任何事件，无法指定回调函数，只能在进入 Frozen 阶段时指定回调函数。

#### resume 事件

`resume`事件在网页离开 Frozen 阶段，变为 Active / Passive / Hidden 阶段时触发。

`document.onresume`属性指的是页面离开 Frozen 阶段、进入可用状态时调用的回调函数。

```javascript
function handleResume(e) {
    // handle state transition FROZEN -> ACTIVE
}
document.addEventListener("resume", handleResume);

## 或者
document.onresume = function() { … }
```

#### pageshow 事件

`pageshow`事件在用户加载网页时触发。这时，有可能是全新的页面加载，也可能是从缓存中获取的页面。如果是从缓存中获取，则该事件对象的`event.persisted`属性为`true`，否则为`false`。

这个事件的名字有点误导，它跟页面的可见性其实毫无关系，只跟浏览器的 History 记录的变化有关。

#### pagehide 事件

`pagehide`事件在用户离开当前网页、进入另一个网页时触发。它的前提是浏览器的 History 记录必须发生变化，跟网页是否可见无关。

如果浏览器能够将当前页面添加到缓存以供稍后重用，则事件对象的`event.persisted`属性为`true`。 如果为`true`。如果页面添加到了缓存，则页面进入 Frozen 状态，否则进入 Terminatied 状态。

#### beforeunload 事件

`beforeunload`事件在窗口或文档即将卸载时触发。该事件发生时，文档仍然可见，此时卸载仍可取消。经过这个事件，网页进入 Terminated 状态。

#### unload 事件

`unload`事件在页面正在卸载时触发。经过这个事件，网页进入 Terminated 状态。

### 获取当前阶段

如果网页处于 Active、Passive 或 Hidden 阶段，可以通过下面的代码，获得网页当前的状态。

```javascript
const getState = () => {
    if (document.visibilityState === 'hidden') {
        return 'hidden';
    }
    if (document.hasFocus()) {
        return 'active';
    }
    return 'passive';
};
```

如果网页处于 Frozen 和 Terminated 状态，由于定时器代码不会执行，只能通过事件监听判断状态。进入 Frozen 阶段，可以监听`freeze`事件；进入 Terminated 阶段，可以监听`pagehide`事件。

### document.wasDiscarded

如果某个选项卡处于 Frozen 阶段，就随时有可能被系统丢弃，进入 Discarded 阶段。如果后来用户再次点击该选项卡，浏览器会重新加载该页面。

这时，开发者可以通过判断`document.wasDiscarded`属性，了解先前的网页是否被丢弃了。

```javascript
if (document.wasDiscarded) {
    // 该网页已经不是原来的状态了，曾经被浏览器丢弃过
    // 恢复以前的状态
    getPersistedState(self.discardedClientId);
}
```

同时，`window`对象上会新增`window.clientId`和`window.discardedClientId`两个属性，用来恢复丢弃前的状态。

### 参考链接

- [Page Lifecycle API](https://developers.google.com/web/updates/2018/07/page-lifecycle-api), Philip Walton
- [Lifecycle API for Web Pages](https://github.com/WICG/page-lifecycle), W3C
- [Page Lifecycle 1 Editor’s Draft](https://wicg.github.io/page-lifecycle/spec.html), W3C

## Page Visibility API

### 简介

有时候，开发者需要知道，用户正在离开页面。常用的方法是监听下面三个事件。

> - `pagehide`
> - `beforeunload`
> - `unload`

但是，这些事件在手机上可能不会触发，页面就直接关闭了。因为手机系统可以将一个进程直接转入后台，然后杀死。

> - 用户点击了一条系统通知，切换到另一个 App。
> - 用户进入任务切换窗口，切换到另一个 App。
> - 用户点击了 Home 按钮，切换回主屏幕。
> - 操作系统自动切换到另一个 App（比如，收到一个电话）。

上面这些情况，都会导致手机将浏览器进程切换到后台，然后为了节省资源，可能就会杀死浏览器进程。

以前，页面被系统切换，以及系统清除浏览器进程，是无法监听到的。开发者想要指定，任何一种页面卸载情况下都会执行的代码，也是无法做到的。为了解决这个问题，就诞生了 Page Visibility API。不管手机或桌面电脑，所有情况下，这个 API 都会监听到页面的可见性发生变化。

这个新的 API 的意义在于，通过监听网页的可见性，可以预判网页的卸载，还可以用来节省资源，减缓电能的消耗。比如，一旦用户不看网页，下面这些网页行为都是可以暂停的。

> - 对服务器的轮询
> - 网页动画
> - 正在播放的音频或视频

### document.visibilityState

这个 API 主要在`document`对象上，新增了一个`document.visibilityState`属性。该属性返回一个字符串，表示页面当前的可见性状态，共有三个可能的值。

> - `hidden`：页面彻底不可见。
> - `visible`：页面至少一部分可见。
> - `prerender`：页面即将或正在渲染，处于不可见状态。

其中，`hidden`状态和`visible`状态是所有浏览器都必须支持的。`prerender`状态只在支持“预渲染”的浏览器上才会出现，比如 Chrome 浏览器就有预渲染功能，可以在用户不可见的状态下，预先把页面渲染出来，等到用户要浏览的时候，直接展示渲染好的网页。

只要页面可见，哪怕只露出一个角，`document.visibilityState`属性就返回`visible`。只有以下四种情况，才会返回`hidden`。

> - 浏览器最小化。
> - 浏览器没有最小化，但是当前页面切换成了背景页。
> - 浏览器将要卸载（unload）页面。
> - 操作系统触发锁屏屏幕。

可以看到，上面四种场景涵盖了页面可能被卸载的所有情况。也就是说，页面卸载之前，`document.visibilityState`属性一定会变成`hidden`。事实上，这也是设计这个 API 的主要目的。

另外，早期版本的 API，这个属性还有第四个值`unloaded`，表示页面即将卸载，现在已经被废弃了。

注意，`document.visibilityState`属性只针对顶层窗口，内嵌的`<iframe>`页面的`document.visibilityState`属性由顶层窗口决定。使用 CSS 属性隐藏`<iframe>`页面（比如`display: none;`），并不会影响内嵌页面的可见性。

### document.hidden

由于历史原因，这个 API 还定义了`document.hidden`属性。该属性只读，返回一个布尔值，表示当前页面是否可见。

当`document.visibilityState`属性返回`visible`时，`document.hidden`属性返回`false`；其他情况下，都返回`true`。

该属性只是出于历史原因而保留的，只要有可能，都应该使用`document.visibilityState`属性，而不是使用这个属性。

### visibilitychange 事件

只要`document.visibilityState`属性发生变化，就会触发`visibilitychange`事件。因此，可以通过监听这个事件（通过`document.addEventListener()`方法或`document.onvisibilitychange`属性），跟踪页面可见性的变化。

```javascript
document.addEventListener('visibilitychange', function () {
    // 用户离开了当前页面
    if (document.visibilityState === 'hidden') {
        document.title = '页面不可见';
    }

    // 用户打开或回到页面
    if (document.visibilityState === 'visible') {
        document.title = '页面可见';
    }
});
```

上面代码是 Page Visibility API 的最基本用法，可以监听可见性变化。

下面是另一个例子，一旦页面不可见，就暂停视频播放。

```javascript
var vidElem = document.getElementById('video-demo');
document.addEventListener('visibilitychange', startStopVideo);

function startStopVideo() {
    if (document.visibilityState === 'hidden') {
        vidElem.pause();
    } else if (document.visibilityState === 'visible') {
        vidElem.play();
    }
}
```

### 页面卸载

下面专门讨论一下，如何正确监听页面卸载。

页面卸载可以分成三种情况。

> - 页面可见时，用户关闭 Tab 页或浏览器窗口。
> - 页面可见时，用户在当前窗口前往另一个页面。
> - 页面不可见时，用户或系统关闭浏览器窗口。

这三种情况，都会触发`visibilitychange`事件。前两种情况，该事件在用户离开页面时触发；最后一种情况，该事件在页面从可见状态变为不可见状态时触发。

由此可见，`visibilitychange`事件比`pagehide`、`beforeunload`、`unload`事件更可靠，所有情况下都会触发（从`visible`变为`hidden`）。因此，可以只监听这个事件，运行页面卸载时需要运行的代码，不用监听后面那三个事件。

甚至可以这样说，`unload`事件在任何情况下都不必监听，`beforeunload`事件只有一种适用场景，就是用户修改了表单，没有提交就离开当前页面。另一方面，指定了这两个事件的监听函数，浏览器就不会缓存当前页面。

### 参考链接

- [Page Visibility Level 2](https://w3c.github.io/page-visibility/), W3C
- [Page Visibility API](http://davidwalsh.name/page-visibility), David Walsh
- [Using the pageVisbility API](http://www.html5rocks.com/en/tutorials/pagevisibility/intro/), Joe Marini
- [Using PC Hardware more efficiently in HTML5: New Web Performance APIs, Part 2](http://blogs.msdn.com/b/ie/archive/2011/07/08/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-2.aspx), Jatinder Mann
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/), Ilya Grigorik

## Point lock API

不用释放按钮，就锁定鼠标。

https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API

## Server-Sent Events

### 简介

服务器向客户端推送数据，有很多解决方案。除了“轮询” 和 WebSocket，HTML 5 还提供了 Server-Sent Events（以下简称 SSE）。

一般来说，HTTP 协议只能客户端向服务器发起请求，服务器不能主动向客户端推送。但是有一种特殊情况，就是服务器向客户端声明，接下来要发送的是流信息（streaming）。也就是说，发送的不是一次性的数据包，而是一个数据流，会连续不断地发送过来。这时，客户端不会关闭连接，会一直等着服务器发过来的新的数据流。本质上，这种通信就是以流信息的方式，完成一次用时很长的下载。

SSE 就是利用这种机制，使用流信息向浏览器推送信息。它基于 HTTP 协议，目前除了 IE/Edge，其他浏览器都支持。

### 与 WebSocket 的比较

SSE 与 WebSocket 作用相似，都是建立浏览器与服务器之间的通信渠道，然后服务器向浏览器推送信息。

总体来说，WebSocket 更强大和灵活。因为它是全双工通道，可以双向通信；SSE 是单向通道，只能服务器向浏览器发送，因为 streaming 本质上就是下载。如果浏览器向服务器发送信息，就变成了另一次 HTTP 请求。

但是，SSE 也有自己的优点。

- SSE 使用 HTTP 协议，现有的服务器软件都支持。WebSocket 是一个独立协议。
- SSE 属于轻量级，使用简单；WebSocket 协议相对复杂。
- SSE 默认支持断线重连，WebSocket 需要自己实现断线重连。
- SSE 一般只用来传送文本，二进制数据需要编码后传送，WebSocket 默认支持传送二进制数据。
- SSE 支持自定义发送的消息类型。

因此，两者各有特点，适合不同的场合。

### 客户端 API

#### EventSource 对象

SSE 的客户端 API 部署在`EventSource`对象上。下面的代码可以检测浏览器是否支持 SSE。

```javascript
if ('EventSource' in window) {
    // ...
}
```

使用 SSE 时，浏览器首先生成一个`EventSource`实例，向服务器发起连接。

```javascript
var source = new EventSource(url);
```

上面的`url`可以与当前网址同域，也可以跨域。跨域时，可以指定第二个参数，打开`withCredentials`属性，表示是否一起发送 Cookie。

```javascript
var source = new EventSource(url, { withCredentials: true });
```

#### readyState 属性

`EventSource`实例的`readyState`属性，表明连接的当前状态。该属性只读，可以取以下值。

- 0：相当于常量`EventSource.CONNECTING`，表示连接还未建立，或者断线正在重连。
- 1：相当于常量`EventSource.OPEN`，表示连接已经建立，可以接受数据。
- 2：相当于常量`EventSource.CLOSED`，表示连接已断，且不会重连。

```javascript
var source = new EventSource(url);
console.log(source.readyState);
```

#### url 属性

`EventSource`实例的`url`属性返回连接的网址，该属性只读。

#### withCredentials 属性

`EventSource`实例的`withCredentials`属性返回一个布尔值，表示当前实例是否开启 CORS 的`withCredentials`。该属性只读，默认是`false`。

#### onopen 属性

连接一旦建立，就会触发`open`事件，可以在`onopen`属性定义回调函数。

```javascript
source.onopen = function (event) {
    // ...
};

// 另一种写法
source.addEventListener('open', function (event) {
    // ...
}, false);
```

#### onmessage 属性

客户端收到服务器发来的数据，就会触发`message`事件，可以在`onmessage`属性定义回调函数。

```javascript
source.onmessage = function (event) {
    var data = event.data;
    var origin = event.origin;
    var lastEventId = event.lastEventId;
    // handle message
};

// 另一种写法
source.addEventListener('message', function (event) {
    var data = event.data;
    var origin = event.origin;
    var lastEventId = event.lastEventId;
    // handle message
}, false);
```

上面代码中，参数对象`event`有如下属性。

- `data`：服务器端传回的数据（文本格式）。
- `origin`： 服务器 URL 的域名部分，即协议、域名和端口，表示消息的来源。
- `lastEventId`：数据的编号，由服务器端发送。如果没有编号，这个属性为空。

#### onerror 属性

如果发生通信错误（比如连接中断），就会触发`error`事件，可以在`onerror`属性定义回调函数。

```javascript
source.onerror = function (event) {
    // handle error event
};

// 另一种写法
source.addEventListener('error', function (event) {
    // handle error event
}, false);
```

#### 自定义事件

默认情况下，服务器发来的数据，总是触发浏览器`EventSource`实例的`message`事件。开发者还可以自定义 SSE 事件，这种情况下，发送回来的数据不会触发`message`事件。

```javascript
source.addEventListener('foo', function (event) {
    var data = event.data;
    var origin = event.origin;
    var lastEventId = event.lastEventId;
    // handle message
}, false);
```

上面代码中，浏览器对 SSE 的`foo`事件进行监听。如何实现服务器发送`foo`事件，请看下文。

#### close() 方法

`close`方法用于关闭 SSE 连接。

```javascript
source.close();
```

### 服务器实现

#### 数据格式

服务器向浏览器发送的 SSE 数据，必须是 UTF-8 编码的文本，具有如下的 HTTP 头信息。

```html
Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive
```

上面三行之中，第一行的`Content-Type`必须指定 MIME 类型为`event-steam`。

每一次发送的信息，由若干个`message`组成，每个`message`之间用`\n\n`分隔。每个`message`内部由若干行组成，每一行都是如下格式。

```html
[field]: value\n
```

上面的`field`可以取四个值。

- data
- event
- id
- retry

此外，还可以有冒号开头的行，表示注释。通常，服务器每隔一段时间就会向浏览器发送一个注释，保持连接不中断。

```html
: This is a comment
```

下面是一个例子。

```html
: this is a test stream\n\n

data: some text\n\n

data: another message\n
data: with two lines \n\n
```

#### data 字段

数据内容用`data`字段表示。

```html
data:  message\n\n
```

如果数据很长，可以分成多行，最后一行用`\n\n`结尾，前面行都用`\n`结尾。

```html
data: begin message\n
data: continue message\n\n
```

下面是一个发送 JSON 数据的例子。

```html
data: {\n
data: "foo": "bar",\n
data: "baz", 555\n
data: }\n\n
```

#### id 字段

数据标识符用`id`字段表示，相当于每一条数据的编号。

```html
id: msg1\n
data: message\n\n
```

浏览器用`lastEventId`属性读取这个值。一旦连接断线，浏览器会发送一个 HTTP 头，里面包含一个特殊的`Last-Event-ID`头信息，将这个值发送回来，用来帮助服务器端重建连接。因此，这个头信息可以被视为一种同步机制。

#### event 字段

`event`字段表示自定义的事件类型，默认是`message`事件。浏览器可以用`addEventListener()`监听该事件。

```html
event: foo\n
data: a foo event\n\n

data: an unnamed event\n\n

event: bar\n
data: a bar event\n\n
```

上面的代码创造了三条信息。第一条的名字是`foo`，触发浏览器的`foo`事件；第二条未取名，表示默认类型，触发浏览器的`message`事件；第三条是`bar`，触发浏览器的`bar`事件。

下面是另一个例子。

```html
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}

event: userdisconnect
data: {"username": "bobby", "time": "02:34:23"}

event: usermessage
data: {"username": "sean", "time": "02:34:36", "text": "Bye, bobby."}
```

#### retry 字段

服务器可以用`retry`字段，指定浏览器重新发起连接的时间间隔。

```html
retry: 10000\n
```

两种情况会导致浏览器重新发起连接：一种是时间间隔到期，二是由于网络错误等原因，导致连接出错。

### Node 服务器实例

SSE 要求服务器与浏览器保持连接。对于不同的服务器软件来说，所消耗的资源是不一样的。Apache 服务器，每个连接就是一个线程，如果要维持大量连接，势必要消耗大量资源。Node 则是所有连接都使用同一个线程，因此消耗的资源会小得多，但是这要求每个连接不能包含很耗时的操作，比如磁盘的 IO 读写。

下面是 Node 的 SSE 服务器[实例](http://cjihrig.com/blog/server-sent-events-in-node-js/)。

```javascript
var http = require("http");

http.createServer(function (req, res) {
    var fileName = "." + req.url;

    if (fileName === "./stream") {
        res.writeHead(200, {
            "Content-Type":"text/event-stream",
            "Cache-Control":"no-cache",
            "Connection":"keep-alive",
            "Access-Control-Allow-Origin": '*',
        });
        res.write("retry: 10000\n");
        res.write("event: connecttime\n");
        res.write("data: " + (new Date()) + "\n\n");
        res.write("data: " + (new Date()) + "\n\n");

        interval = setInterval(function () {
            res.write("data: " + (new Date()) + "\n\n");
        }, 1000);

        req.connection.addListener("close", function () {
            clearInterval(interval);
        }, false);
    }
}).listen(8844, "127.0.0.1");
```

### 参考链接

- Colin Ihrig, [Implementing Push Technology Using Server-Sent Events](http://jspro.com/apis/implementing-push-technology-using-server-sent-events/)
- Colin Ihrig，[The Server Side of Server-Sent Events](http://cjihrig.com/blog/the-server-side-of-server-sent-events/)
- Eric Bidelman, [Stream Updates with Server-Sent Events](http://www.html5rocks.com/en/tutorials/eventsource/basics/)
- MDN，[Using server-sent events](https://developer.mozilla.org/en-US/docs/Server-sent_events/Using_server-sent_events)
- Segment.io, [Server-Sent Events: The simplest realtime browser spec](https://segment.io/blog/2014-04-03-server-sent-events-the-simplest-realtime-browser-spec/)

## Service Worker

### 含义

Service Worker 首先是一个运行在后台的 Worker 线程，然后它会长期运行，充当一个服务，很适合那些不需要网页或用户互动的功能。它的最常见用途就是拦截和处理网络请求。

Service Worker 是一个后台运行的脚本，充当一个代理服务器，拦截用户发出的网络请求，比如加载脚本和图片。Service Worker 可以修改用户的请求，或者直接向用户发出回应，不用联系服务器，这使得用户可以在离线情况下使用网络应用。它还可以在本地缓存资源文件，直接从缓存加载文件，因此可以加快访问速度。

```javascript
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js');
    });
}
```

上面代码确认浏览器支持 Service Worker 以后，会注册一个 Service Worker。

为了节省内存，Service worker 在不使用的时候是休眠的。它也不会保存数据，所以重新启动的时候，为了拿到数据，最好把数据放在 IndexedDb 里面。

Service Worker 是事件驱动的。

下面是拦截请求的例子。

```javascript
self.addEventListener('fetch', (event) => {
    event.waitUntil(
    if (event.request.url.includes('/product') {
        let productId = event.data.productId
        let productCount = getProductData(productId)
        indexedDB.open('store', 1, (db) => {
            let productStore = db.createObjectStore('products', { keyPath: 'id' })
            productStore.put({ id: productId, count: ++productCount })
        })
    })
)
})
```

Service Worker 不能直接操作 DOM。

### 使用步骤

#### 登记

使用 service worker 的第一步，就是告诉浏览器，需要注册一个 service worker 脚本。

```javascript
navigator.serviceWorker.register('sw.js'.then(() => {
    console.info('注册成功')
}).catch((err) => {
    console.error('注册失败')
})
```

上面代码的`sw.js`就是需要浏览器注册的 service worker 脚本。注意，这个脚本必须与当前网址同域，service worker 不支持跨域脚本。另外，`sw.js`必须是从 HTTPS 协议加载的。

默认情况下，Service worker 只对根目录`/`生效，如果要改变生效范围，可以运行下面的代码。

```javascript
navigator.serviceWorker.register(
    '/service-worker.js',
    { scope: '/products/fashion' }
)
```

#### 安装

一旦登记成功，接下来都是 service worker 脚本的工作。下面的代码都是写在 service worker 脚本里面的。

登记后，就会触发`install`事件。service worker 脚本需要监听这个事件。

```javascript
self.addEventListener('install', event => {

    event.waitUntil(() => console.info('安装完成'))
})
```

`event.waitUntil()`方法为事件完成后指定回调函数。

```javascript
self.addEventListener('install', (event) => {
    let CACHE_NAME = 'xyz-cache'
    let urlsToCache = [
        '/',
        '/styles/main.css',
        '/scripts/bundle.js'
    ]
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then (cache => cache.addAll(urlsToCache))
    )
})
```

#### 激活

安装完成后，service worker 就会等待激活。

```javascript
self.addEventListener('activate', (event) => {
    let cacheWhitelist = ['products-v2']

    event.waitUntil(
        caches.keys().then (cacheNames => {
            return Promise.all(
                cacheNames.map( cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName)
                    }
                })
            )
        })
    )
})
```

### Service Worker 与网页的通信

```javascript
self.addEventListener('activate', (event) => {
    event.waitUntil(
        self.clients.matchAll().then ( (client) => {
            client.postMessage({
                msg: 'Hey, from service worker! I\'m listening to your fetch requests.',
                source: 'service-worker'
            })
        })
    )
})
```

上面代码中，Service Worker 监听`activate`事件，然后向客户端发送一条信息。

客户端需要部署消息监听代码。

```javascript
this.addEventListener('message', (data) => {
    if (data.source == 'service-worker') {
        console.log(data.msg)
    }
})
```

### 参考链接

- [Service Workers](https://frontendian.co/service-workers), by Ryan Miller

## SVG 图像

### 概述

SVG 是一种基于 XML 语法的图像格式，全称是可缩放矢量图（Scalable Vector Graphics）。其他图像格式都是基于像素处理的，SVG 则是属于对图像的形状描述，所以它本质上是文本文件，体积较小，且不管放大多少倍都不会失真。

SVG 文件可以直接插入网页，成为 DOM 的一部分，然后用 JavaScript 和 CSS 进行操作。

```html
<!DOCTYPE html>
<html>
<head></head>
<body>
<svg
        id="mysvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid meet"
>
    <circle id="mycircle" cx="400" cy="300" r="50" />
</svg>
</body>
</html>
```

上面是 SVG 代码直接插入网页的例子。

SVG 代码也可以写在一个独立文件中，然后用`<img>`、`<object>`、`<embed>`、`<iframe>`等标签插入网页。

```html
<img src="circle.svg">
<object id="object" data="circle.svg" type="image/svg+xml"></object>
<embed id="embed" src="icon.svg" type="image/svg+xml">
<iframe id="iframe" src="icon.svg"></iframe>
```

CSS 也可以使用 SVG 文件。

```css
.logo {
    background: url(icon.svg);
}
```

SVG 文件还可以转为 BASE64 编码，然后作为 Data URI 写入网页。

```html
<img src="data:image/svg+xml;base64,[data]">
```

### 语法

#### `<svg>`标签

SVG 代码都放在顶层标签`<svg>`之中。下面是一个例子。

```xml
<svg width="100%" height="100%">
    <circle id="mycircle" cx="50" cy="50" r="50" />
</svg>
```

`<svg>`的`width`属性和`height`属性，指定了 SVG 图像在 HTML 元素中所占据的宽度和高度。除了相对单位，也可以采用绝对单位（单位：像素）。如果不指定这两个属性，SVG 图像的大小默认为300像素（宽）x 150像素（高）。

如果只想展示 SVG 图像的一部分，就要指定`viewBox`属性。

```xml
<svg width="100" height="100" viewBox="50 50 50 50">
    <circle id="mycircle" cx="50" cy="50" r="50" />
</svg>
```

`<viewBox>`属性的值有四个数字，分别是左上角的横坐标和纵坐标、视口的宽度和高度。上面代码中，SVG 图像是100像素宽 x 100像素高，`viewBox`属性指定视口从`(50, 50)`这个点开始。所以，实际看到的是右下角的四分之一圆。

注意，视口必须适配所在的空间。上面代码中，视口的大小是 50 x 50，由于 SVG 图像的大小是 100 x 100，所以视口会放大去适配 SVG 图像的大小，即放大了四倍。

如果不指定`width`属性和`height`属性，只指定`viewBox`属性，则相当于只给定 SVG 图像的长宽比。这时，SVG 图像的大小默认是所在的 HTML 元素的大小。

#### `<circle>`标签

`<circle>`标签代表圆形。

```xml
<svg width="300" height="180">
    <circle cx="30"  cy="50" r="25" />
    <circle cx="90"  cy="50" r="25" class="red" />
    <circle cx="150" cy="50" r="25" class="fancy" />
</svg>
```

上面的代码定义了三个圆。`<circle>`标签的`cx`、`cy`、`r`属性分别为横坐标、纵坐标和半径，单位为像素。坐标都是相对于`<svg>`画布的左上角原点。

`class`属性用来指定对应的 CSS 类。

```css
.red {
    fill: red;
}

.fancy {
    fill: none;
    stroke: black;
    stroke-width: 3pt;
}
```

SVG 的 CSS 属性与网页元素有所不同。

> - fill：填充色
> - stroke：描边色
> - stroke-width：边框宽度

#### `<line>`标签

`<line>`标签用来绘制直线。

```xml
<svg width="300" height="180">
    <line x1="0" y1="0" x2="200" y2="0" style="stroke:rgb(0,0,0);stroke-width:5" />
</svg>
```

上面代码中，`<line>`标签的`x1`属性和`y1`属性，表示线段起点的横坐标和纵坐标；`x2`属性和`y2`属性，表示线段终点的横坐标和纵坐标；`style`属性表示线段的样式。

#### `<polyline>`标签

`<polyline>`标签用于绘制一根折线。

```xml
<svg width="300" height="180">
    <polyline points="3,3 30,28 3,53" fill="none" stroke="black" />
</svg>
```

`<polyline>`的`points`属性指定了每个端点的坐标，横坐标与纵坐标之间与逗号分隔，点与点之间用空格分隔。

#### `<rect>`标签

`<rect>`标签用于绘制矩形。

```xml
<svg width="300" height="180">
    <rect x="0" y="0" height="100" width="200" style="stroke: ##70d5dd; fill: ##dd524b" />
</svg>
```

`<rect>`的`x`属性和`y`属性，指定了矩形左上角端点的横坐标和纵坐标；`width`属性和`height`属性指定了矩形的宽度和高度（单位像素）。

#### `<ellipse>`标签

`<ellipse>`标签用于绘制椭圆。

```xml
<svg width="300" height="180">
    <ellipse cx="60" cy="60" ry="40" rx="20" stroke="black" stroke-width="5" fill="silver"/>
</svg>
```

`<ellipse>`的`cx`属性和`cy`属性，指定了椭圆中心的横坐标和纵坐标（单位像素）；`rx`属性和`ry`属性，指定了椭圆横向轴和纵向轴的半径（单位像素）。

#### `<polygon>`标签

`<polygon>`标签用于绘制多边形。

```xml
<svg width="300" height="180">
    <polygon fill="green" stroke="orange" stroke-width="1" points="0,0 100,0 100,100 0,100 0,0"/>
</svg>
```

`<polygon>`的`points`属性指定了每个端点的坐标，横坐标与纵坐标之间与逗号分隔，点与点之间用空格分隔。

#### `<path>`标签

`<path>`标签用于制路径。

```xml
<svg width="300" height="180">
    <path d="
  M 18,3
  L 46,3
  L 46,40
  L 61,40
  L 32,68
  L 3,40
  L 18,40
  Z
"></path>
</svg>
```

`<path>`的`d`属性表示绘制顺序，它的值是一个长字符串，每个字母表示一个绘制动作，后面跟着坐标。

> - M：移动到（moveto）
> - L：画直线到（lineto）
> - Z：闭合路径

#### `<text>`标签

`<text>`标签用于绘制文本。

```xml
<svg width="300" height="180">
    <text x="50" y="25">Hello World</text>
</svg>
```

`<text>`的`x`属性和`y`属性，表示文本区块基线（baseline）起点的横坐标和纵坐标。文字的样式可以用`class`或`style`属性指定。

#### `<use>`标签

`<use>`标签用于复制一个形状。

```xml
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
    <circle id="myCircle" cx="5" cy="5" r="4"/>

    <use href="##myCircle" x="10" y="0" fill="blue" />
    <use href="##myCircle" x="20" y="0" fill="white" stroke="blue" />
</svg>
```

`<use>`的`href`属性指定所要复制的节点，`x`属性和`y`属性是`<use>`左上角的坐标。另外，还可以指定`width`和`height`坐标。

#### `<g>`标签

`<g>`标签用于将多个形状组成一个组（group），方便复用。

```xml
<svg width="300" height="100">
    <g id="myCircle">
        <text x="25" y="20">圆形</text>
        <circle cx="50" cy="50" r="20"/>
    </g>

    <use href="##myCircle" x="100" y="0" fill="blue" />
    <use href="##myCircle" x="200" y="0" fill="white" stroke="blue" />
</svg>
```

#### `<defs>`标签

`<defs>`标签用于自定义形状，它内部的代码不会显示，仅供引用。

```xml
<svg width="300" height="100">
    <defs>
        <g id="myCircle">
            <text x="25" y="20">圆形</text>
            <circle cx="50" cy="50" r="20"/>
        </g>
    </defs>

    <use href="##myCircle" x="0" y="0" />
    <use href="##myCircle" x="100" y="0" fill="blue" />
    <use href="##myCircle" x="200" y="0" fill="white" stroke="blue" />
</svg>
```

#### `<pattern>`标签

`<pattern>`标签用于自定义一个形状，该形状可以被引用来平铺一个区域。

```xml
<svg width="500" height="500">
    <defs>
        <pattern id="dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle fill="##bee9e8" cx="50" cy="50" r="35" />
        </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(##dots)" />
</svg>
```

上面代码中，`<pattern>`标签将一个圆形定义为`dots`模式。`patternUnits="userSpaceOnUse"`表示`<pattern>`的宽度和长度是实际的像素值。然后，指定这个模式去填充下面的矩形。

#### `<image>`标签

`<image>`标签用于插入图片文件。

```xml
<svg viewBox="0 0 100 100" width="100" height="100">
    <image xlink:href="path/to/image.jpg"
           width="50%" height="50%"/>
</svg>
```

上面代码中，`<image>`的`xlink:href`属性表示图像的来源。

#### `<animate>`标签

`<animate>`标签用于产生动画效果。

```xml
<svg width="500px" height="500px">
    <rect x="0" y="0" width="100" height="100" fill="##feac5e">
        <animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite" />
    </rect>
</svg>
```

上面代码中，矩形会不断移动，产生动画效果。

`<animate>`的属性含义如下。

> - attributeName：发生动画效果的属性名。
> - from：单次动画的初始值。
> - to：单次动画的结束值。
> - dur：单次动画的持续时间。
> - repeatCount：动画的循环模式。

可以在多个属性上面定义动画。

```xml
<animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite" />
<animate attributeName="width" to="500" dur="2s" repeatCount="indefinite" />
```

#### `<animateTransform>`标签

`<animate>`标签对 CSS 的`transform`属性不起作用，如果需要变形，就要使用`<animateTransform>`标签。

```xml
<svg width="500px" height="500px">
    <rect x="250" y="250" width="50" height="50" fill="##4bc0c8">
        <animateTransform attributeName="transform" type="rotate" begin="0s" dur="10s" from="0 200 200" to="360 400 400" repeatCount="indefinite" />
    </rect>
</svg>
```

上面代码中，`<animateTransform>`的效果为旋转（`rotate`），这时`from`和`to`属性值有三个数字，第一个数字是角度值，第二个值和第三个值是旋转中心的坐标。`from="0 200 200"`表示开始时，角度为0，围绕`(200, 200)`开始旋转；`to="360 400 400"`表示结束时，角度为360，围绕`(400, 400)`旋转。

### JavaScript 操作

#### DOM 操作

如果 SVG 代码直接写在 HTML 网页之中，它就成为网页 DOM 的一部分，可以直接用 DOM 操作。

```html
<svg
        id="mysvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid meet"
>
    <circle id="mycircle" cx="400" cy="300" r="50" />
    <svg>
```

上面代码插入网页之后，就可以用 CSS 定制样式。

```css
circle {
    stroke-width: 5;
    stroke: ##f00;
    fill: ##ff0;
}

circle:hover {
    stroke: ##090;
    fill: ##fff;
}
```

然后，可以用 JavaScript 代码操作 SVG。

```javascript
var mycircle = document.getElementById('mycircle');

mycircle.addEventListener('click', function(e) {
    console.log('circle clicked - enlarging');
    mycircle.setAttribute('r', 60);
}, false);
```

上面代码指定，如果点击图形，就改写`circle`元素的`r`属性。

#### 获取 SVG DOM

使用`<object>`、`<iframe>`、`<embed>`标签插入 SVG 文件，可以获取 SVG DOM。

```javascript
var svgObject = document.getElementById('object').contentDocument;
var svgIframe = document.getElementById('iframe').contentDocument;
var svgEmbed = document.getElementById('embed').getSVGDocument();
```

注意，如果使用`<img>`标签插入 SVG 文件，就无法获取 SVG DOM。

#### 读取 SVG 源码

由于 SVG 文件就是一段 XML 文本，因此可以通过读取 XML 代码的方式，读取 SVG 源码。

```html
<div id="svg-container">
    <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xml:space="preserve" width="500" height="440"
    >
    <!-- svg code -->
  </svg>
</div>
```

使用`XMLSerializer`实例的`serializeToString()`方法，获取 SVG 元素的代码。

```javascript
var svgString = new XMLSerializer()
    .serializeToString(document.querySelector('svg'));
```

#### SVG 图像转为 Canvas 图像

首先，需要新建一个`Image`对象，将 SVG 图像指定到该`Image`对象的`src`属性。

```javascript
var img = new Image();
var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});

var DOMURL = self.URL || self.webkitURL || self;
var url = DOMURL.createObjectURL(svg);

img.src = url;
```

然后，当图像加载完成后，再将它绘制到`<canvas>`元素。

```javascript
img.onload = function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
};
```

### 实例：折线图

下面将一张数据表格画成折线图。

```html
Date |Amount
-----|------
2014-01-01 | $10
2014-02-01 | $20
2014-03-01 | $40
2014-04-01 | $80
```

上面的图形，可以画成一个坐标系，`Date`作为横轴，`Amount`作为纵轴，四行数据画成一个数据点。

```xml
<svg width="350" height="160">
    <g class="layer" transform="translate(60,10)">
        <circle r="5" cx="0"   cy="105" />
        <circle r="5" cx="90"  cy="90"  />
        <circle r="5" cx="180" cy="60"  />
        <circle r="5" cx="270" cy="0"   />

        <g class="y axis">
            <line x1="0" y1="0" x2="0" y2="120" />
            <text x="-40" y="105" dy="5">$10</text>
            <text x="-40" y="0"   dy="5">$80</text>
        </g>
        <g class="x axis" transform="translate(0, 120)">
            <line x1="0" y1="0" x2="270" y2="0" />
            <text x="-30"   y="20">January 2014</text>
            <text x="240" y="20">April</text>
        </g>
    </g>
</svg>
```

### 参考链接

- Jon McPartland, [An introduction to SVG animation](http://bigbitecreative.com/introduction-svg-animation/)
- Alexander Goedde, [SVG - Super Vector Graphics](http://tavendo.com/blog/post/super-vector-graphics/)
- Joseph Wegner, [Learning SVG](http://flippinawesome.org/2014/02/03/learning-svg/)
- biovisualize, [Direct svg to canvas to png conversion](http://bl.ocks.org/biovisualize/8187844)
- Tyler Sticka, [Cropping Image Thumbnails with SVG](https://cloudfour.com/thinks/cropping-image-thumbnails-with-svg/)
- Adi Purdila, [How to Create a Loader Icon With SVG Animations](https://webdesign.tutsplus.com/tutorials/how-to-create-a-loader-icon-with-svg-animations--cms-31542)

## Web Share API

### 概述

网页内容如果要分享到其他应用，通常要自己实现分享接口，逐一给出目标应用的连接方式。这样很麻烦，也对网页性能有一定影响。Web Share API 就是为了解决这个问题而提出的，允许网页调用操作系统的分享接口，实质是 Web App 与本机的应用程序交换信息的一种方式。

这个 API 不仅可以改善网页性能，而且不限制分享目标的数量和类型。社交媒体应用、电子邮件、即时消息、以及本地系统安装的、且接受分享的应用，都会出现在系统的分享弹窗，这对手机网页尤其有用。另外，使用这个接口只需要一个分享按钮，而传统的网页分享有多个分享目标，就有多少个分享按钮。

目前，桌面的 Safari 浏览器，手机的安卓 Chrome 浏览器和 iOS Safari 浏览器，支持这个 API。

这个 API 要求网站必须启用 HTTPS 协议，但是本地 Localhost 开发可以使用 HTTP 协议。另外，这个 API 不能直接调用，只能用来响应用户的操作（比如`click`事件）。

### 接口细节

该接口部署在`navigator.share`，可以用下面的代码检查本机是否支持该接口。

```javascript
if (navigator.share) {
    // 支持
} else {
    // 不支持
}
```

`navigator.share`是一个函数方法，接受一个配置对象作为参数。

```javascript
navigator.share({
    title: 'WebShare API Demo',
    url: 'https://codepen.io/ayoisaiah/pen/YbNazJ',
    text: '我正在看《Web Share API》'
})
```

配置对象有三个属性，都是可选的，但至少必须指定一个。

- `title`：分享文档的标题。
- `url`：分享的 URL。
- `text`：分享的内容。

一般来说，`url`是当前网页的网址，`title`是当前网页的标题，可以采用下面的写法获取。

```javascript
const title = document.title;
const url = document.querySelector('link[rel=canonical]') ?
    document.querySelector('link[rel=canonical]').href :
    document.location.href;
```

`navigator.share`的返回值是一个 Promise 对象。这个方法调用之后，会立刻弹出系统的分享弹窗，用户操作完毕之后，Promise 对象就会变为`resolved`状态。

```javascript
navigator.share({
    title: 'WebShare API Demo',
    url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
}).then(() => {
    console.log('Thanks for sharing!');
}).catch((error) => {
    console.error('Sharing error', error);
});
```

由于返回值是 Promise 对象，所以也可以使用`await`命令。

```javascript
shareButton.addEventListener('click', async () => {
    try {
        await navigator.share({ title: 'Example Page', url: '' });
        console.log('Data was shared successfully');
    } catch (err) {
        console.error('Share failed:', err.message);
    }
});
```

### 分享文件

这个 API 还可以分享文件，先使用`navigator.canShare()`方法，判断一下目标文件是否可以分享。因为不是所有文件都允许分享的，目前图像，视频，音频和文本文件可以分享2。

```javascript
if (navigator.canShare && navigator.canShare({ files: filesArray })) {
    // ...
}
```

上面代码中，`navigator.canShare()`方法的参数对象，就是`navigator.share()`方法的参数对象。这里的关键是`files`属性，它的值是一个`FileList`实例对象。

`navigator.canShare()`方法返回一个布尔值，如果为`true`，就可以使用`navigator.share()`方法分享文件了。

```javascript
if (navigator.canShare && navigator.canShare({ files: filesArray })) {
    navigator.share({
        files: filesArray,
        title: 'Vacation Pictures',
        text: 'Photos from September 27 to October 14.',
    })
        .then(() => console.log('Share was successful.'))
        .catch((error) => console.log('Sharing failed', error));
}
```



### 参考链接

- [How to Use the Web Share API](https://css-tricks.com/how-to-use-the-web-share-api/), Ayooluwa Isaiah
- [Web Share API - Level 1](https://wicg.github.io/web-share/), W3C
- [Introducing the Web Share API](https://developers.google.com/web/updates/2016/09/navigator-share), Paul Kinlan, Sam Thorogood
- [Share like a native app with the Web Share API](https://web.dev/web-share/), Joe Medley

## Web Audio API

Web Audio API 用于操作声音。这个 API 可以让网页发出声音。

### 基本用法

浏览器原生提供`AudioContext`对象，该对象用于生成一个声音的上下文，与扬声器相连。

```javascript
const audioContext = new AudioContext();
```

然后，获取音源文件，将其在内存中解码，就可以播放声音了。

```javascript
const context = new AudioContext();

fetch('sound.mp4')
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
        // 播放声音
        const source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(context.destination);
        source.start();
    });
```

### context.createBuffer()

`context.createBuffer()`方法生成一个内存的操作视图，用于存放数据。

```javascript
const buffer = audioContext.createBuffer(channels, signalLength, sampleRate);
```

`createBuffer`方法接受三个参数。

- channels：整数，表示声道。创建单声道的声音，该值为 1。
- signalLength：整数，表示声音数组的长度。
- sampleRate：浮点数，表示取样率，即一秒取样多少次。

`signalLength`和`sampleRate`这两个参数决定了声音的长度。比如，如果取样率是`1/3000`（每秒取样3000次），声音数组长度是6000，那么播放的声音是2秒长度。

接着，使用`buffer.getChannelData`方法取出一个声道。

```javascript
const data = buffer.getChannelData(0)
```

上面代码中，`buffer.getChannelData`的参数`0`表示取出第一个声道。

下一步，将声音数组放入这个声道。

```javascript
const data = buffer.getChannelData(0)

// singal 是一个声音数组
// singalLengal 是该数组的长度
for (let i = 0; i < signalLength; i += 1) {
    data[i] = signal[i]
}
```

最后，使用`context.createBufferSource`方法生成一个声音节点。

```javascript
// 生成一个声音节点
const node = audioContext.createBufferSource();
// 将声音数组的内存对象，放入这个节点
node.buffer = buffer;
// 将声音上下文与节点连接
node.connect(audioContext.destination);
// 开始播放声音
node.start(audioContext.currentTime);
```

默认情况下，播放一次后就将停止播放。如果需要循环播放，可以将节点对象的`looping`属性设为`true`。

```javascript
node.looping = true;
```

### 过滤器

Web Audio API 原生提供了一些过滤器（filter），用来处理声音。

首先，使用`context.createBiquadFilter`方法建立过滤器实例。

```javascript
const filter = audioContext.createBiquadFilter();
```

然后，通过`filter.type`属性指定过滤器的类型。

```javascript
filter.type = 'lowpass';
```

目前，过滤器有以下这些类型。

- lowpass
- highpass
- bandpass
- lowshelf
- highshelf
- peaking
- notch
- allpass

然后指定过滤器的频率（frequency）属性。

```javascript
filter.frequency.value = frequency
```

最后，过滤器实例连接节点实例，就可以生效了。

```javascript
sourceNode.connect(filter);
```

## Web Components

### 概述

各种网站往往需要一些相同的模块，比如日历、调色板等等，这种模块就被称为“组件”（component）。Web Components 就是浏览器原生的组件规范。

采用组件开发，有很多优点。

（1）有利于代码复用。组件是模块化编程思想的体现，可以跨平台、跨框架使用，构建、部署和与其他 UI 元素互动都有统一做法。

（2）使用非常容易。加载或卸载组件，只要添加或删除一行代码就可以了。

（3）开发和定制很方便。组件开发不需要使用框架，只要用原生的语法就可以了。开发好的组件往往留出接口，供使用者设置常见属性，比如上面代码的`heading`属性，就是用来设置对话框的标题。

（4）组件提供了 HTML、CSS、JavaScript 封装的方法，实现了与同一页面上其他代码的隔离。

未来的网站开发，可以像搭积木一样，把组件合在一起，就组成了一个网站。这种前景是非常诱人的。

Web Components 不是单一的规范，而是一系列的技术组成，以下是它的四个构成。

- Custom Elements
- Template
- Shadow DOM
- HTML Import

使用时，并不一定上面四种 API 都要用到。其中，Custom Element 和 Shadow DOM 比较重要，Template 和 HTML Import 只起到辅助作用。

### Custom Element

#### 简介

HTML 标准定义的网页元素，有时并不符合我们的需要，这时浏览器允许用户自定义网页元素，这就叫做 Custom Element。简单说，它就是用户自定义的网页元素，是 Web components 技术的核心。

举例来说，你可以自定义一个叫做`<my-element>`的网页元素。

```html
<my-element></my-element>
```

注意，自定义网页元素的标签名必须含有连字符`-`，一个或多个连字符都可以。这是因为浏览器内置的的 HTML 元素标签名，都不含有连字符，这样可以做到有效区分。

下面的代码先定义一个自定义元素的类。

```javascript
class MyElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( { mode: 'open' } );
        this.shadowRoot.innerHTML = `
      <style>
        /* scoped styles */
      </style>
      <slot></slot>
    `;
    }

    static get observedAttributes() {
        // Return list of attributes to watch.
    }

    attributeChangedCallback( name, oldValue, newValue ) {
        // Run functionality when one of these attributes is changed.
    }

    connectedCallback() {
        // Run functionality when an instance of this element is inserted into the DOM.
    }

    disconnectedCallback() {
        // Run functionality when an instance of this element is removed from the DOM.
    }
}
```

上面代码有几个注意点。

- 自定义元素类的基类是`HTMLElement`。当然也可以根据需要，基于`HTMLElement`的子类，比如`HTMLButtonElement`。
- 构造函数内部定义了 Shadow DOM。所谓`Shadow DOM`指的是，这部分的 HTML 代码和样式，不直接暴露给用户。
- 类可以定义生命周期方法，比如`connectedCallback()`。

然后，`window.customElements.define()`方法，用来登记自定义元素与这个类之间的映射。

```javascript
window.customElements.define('my-element', MyElement);
```

登记以后，页面上的每一个`<my-element>`元素都是一个`MyElement`类的实例。只要浏览器解析到`<my-element>`元素，就会运行`MyElement`的构造函数。

注意，如果没有登记就使用 Custom Element，浏览器会认为这是一个不认识的元素，会当做空的 div 元素处理。

`window.customElements.define()`方法定义了 Custom Element 以后，可以使用`window.customeElements.get()`方法获取该元素的构造方法。这使得除了直接插入 HTML 网页，Custom Element 也能使用脚本插入网页。

```javascript
window.customElements.define(
    'my-element',
    class extends HTMLElement {...}
);
const el = window.customElements.get('my-element');
const myElement = new el();
document.body.appendChild(myElement);
```

如果你想扩展现有的 HTML 元素（比如`<button>`）也是可以的。

```javascript
class GreetingElement extends HTMLButtonElement
```

登记的时候，需要提供扩展的元素。

```javascript
customElements.define('hey-there', GreetingElement, { extends: 'button' });
```

使用的时候，为元素加上`is`属性就可以了。

```html
<button is="hey-there" name="World">Howdy</button>
```

#### 生命周期方法

Custom Element 提供一些生命周期方法。

```javascript
class MyElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // here the element has been inserted into the DOM
    }
}
```

上面代码中，`connectedCallback()`方法就是`MyElement`元素的生命周期方法。每次，该元素插入 DOM，就会自动执行该方法。

- `connectedCallback()`：插入 DOM 时调用。这可能不止一次发生，比如元素被移除后又重新添加。类的设置应该尽量放到这个方法里面执行，因为这时各种属性和子元素都可用。
- `disconnectedCallback()`：移出 DOM 时执行。
- `attributeChangedCallback(attrName, oldVal, newVal)`：添加、删除、更新或替换属性时调用。元素创建或升级时，也会调用。注意：只有加入`observedAttributes`的属性才会执行这个方法。
- `adoptedCallback()`：自定义元素移动到新的 document 时调用，比如执行`document.adoptNode(element)`时。

下面是一个例子。

```javascript
class GreetingElement extends HTMLElement {
    constructor() {
        super();
        this._name = 'Stranger';
    }
    connectedCallback() {
        this.addEventListener('click', e => alert(`Hello, ${this._name}!`));
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === 'name') {
            if (newValue) {
                this._name = newValue;
            } else {
                this._name = 'Stranger';
            }
        }
    }
}
GreetingElement.observedAttributes = ['name'];
customElements.define('hey-there', GreetingElement);
```

上面代码中，`GreetingElement.observedAttributes`属性用来指定白名单里面的属性，上例是`name`属性。只要这个属性的值发生变化，就会自动调用`attributeChangedCallback`方法。

使用上面这个类的方法如下。

```html
<hey-there>Greeting</hey-there>
<hey-there name="Potch">Personalized Greeting</hey-there>
```

`attributeChangedCallback`方法主要用于外部传入的属性，就像上面例子中`name="Potch"`。

生命周期方法调用的顺序如下：`constructor` -> `attributeChangedCallback` -> `connectedCallback`，即`attributeChangedCallback`早于`connectedCallback`执行。这是因为`attributeChangedCallback`相当于调整配置，应该在插入 DOM 之前完成。

下面的例子能够更明显地看出这一点，在插入 DOM 前修改 Custome Element 的颜色。

```javascript
class MyElement extends HTMLElement {
    constructor() {
        this.container = this.shadowRoot.querySelector('##container');
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === 'disabled') {
            if(this.hasAttribute('disabled') {
                this.container.style.background = '##808080';
            } else {
                this.container.style.background = '##ffffff';
            }
        }
    }
}
```

#### 自定义属性和方法

Custom Element 允许自定义属性或方法。

```javascript
class MyElement extends HTMLElement {
...

    doSomething() {
        // do something in this method
    }
}
```

上面代码中，`doSomething()`就是`MyElement`的自定义方法，使用方法如下。

```javascript
const element = document.querySelector('my-element');
element.doSomething();
```

自定义属性可以使用 JavaScript class 的所有语法，因此也可以设置取值器和赋值器。

```javascript
class MyElement extends HTMLElement {
...

    set disabled(isDisabled) {
        if(isDisabled) {
            this.setAttribute('disabled', '');
        }
        else {
            this.removeAttribute('disabled');
        }
    }

    get disabled() {
        return this.hasAttribute('disabled');
    }
}
```

上面代码中的取值器和赋值器，可用于`<my-input name="name" disabled>`这样的用法。

#### window.customElements.whenDefined()

`window.customElements.whenDefined()`方法在一个 Custom Element 被`customElements.define()`方法定义以后执行，用于“升级”一个元素。

```javascript
window.customElements.whenDefined('my-element')
    .then(() => {
        // my-element is now defined
    })
```

如果某个属性值发生变化时，需要做出反应，可以将它放入`observedAttributes`数组。

```javascript
class MyElement extends HTMLElement {
    static get observedAttributes() {
        return ['disabled'];
    }

    constructor() {
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
      <style>
        .disabled {
          opacity: 0.4;
        }
      </style>

      <div id="container"></div>
    `;

        this.container = this.shadowRoot('##container');
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === 'disabled') {
            if(this.disabled) {
                this.container.classList.add('disabled');
            }
            else {
                this.container.classList.remove('disabled')
            }
        }
    }
}
```

#### 回调函数

自定义元素的原型有一些属性，用来指定回调函数，在特定事件发生时触发。

- **createdCallback**：实例生成时触发
- **attachedCallback**：实例插入HTML文档时触发
- **detachedCallback**：实例从HTML文档移除时触发
- **attributeChangedCallback(attrName, oldVal, newVal)**：实例的属性发生改变时（添加、移除、更新）触发

下面是一个例子。

```javascript
var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
    console.log('created');
    this.innerHTML = 'This is a my-demo element!';
};

proto.attachedCallback = function() {
    console.log('attached');
};

var XFoo = document.registerElement('x-foo', {prototype: proto});
```

利用回调函数，可以方便地在自定义元素中插入HTML语句。

```javascript
var XFooProto = Object.create(HTMLElement.prototype);

XFooProto.createdCallback = function() {
    this.innerHTML = "<b>I'm an x-foo-with-markup!</b>";
};

var XFoo = document.registerElement('x-foo-with-markup',
    {prototype: XFooProto});

```

上面代码定义了createdCallback回调函数，生成实例时，该函数运行，插入如下的HTML语句。

```html
<x-foo-with-markup>
    <b>I'm an x-foo-with-markup!</b>
</x-foo-with-markup>
```

#### Custom Element 的子元素

用户使用 Custom Element 时候，可以在内部放置子元素。Custom Element 提供`<slot>`用来引用内部内容。

下面的`<image-gallery>`是一个 Custom Element。用户在里面放置了子元素。

```html
<image-gallery>
    <img src="foo.jpg" slot="image">
    <img src="bar.jpg" slot="image">
</image-gallery>
```

`<image-gallery>`内部的模板如下。

```html
<div id="container">
    <div class="images">
        <slot name="image"></slot>
    </div>
</div>
```

最终合成的代码如下。

```html
<div id="container">
    <div class="images">
        <slot name="image">
            <img src="foo.jpg" slot="image">
            <img src="bar.jpg" slot="image">
        </slot>
    </div>
</div>
```

### `<template>`标签

#### 基本用法

`<template>`标签表示组件的 HTML 代码模板。

```html
<template>
    <h1>This won't display!</h1>
    <script>alert("this won't alert!");</script>
</template>
```

`<template>`内部就是正常的 HTML 代码，浏览器不会将这些代码加入 DOM。

下面的代码会将模板内部的代码插入 DOM。

```javascript
let template = document.querySelector('template');
document.body.appendChild(template.content);
```

注意，模板内部的代码只能插入一次，如果第二次执行上面的代码就会报错。

如果需要多次插入模板，可以复制`<template>`内部代码，然后再插入。

```javascript
document.body.appendChild(template.content.cloneNode(true));
```

上面代码中，`cloneNode()`方法的参数`true`表示复制包含所有子节点。

接受`<template>`插入的元素，叫做宿主元素（host）。在`<template>`之中，可以对宿主元素设置样式。

```html
<template>
    <style>
        :host {
            background: ##f8f8f8;
        }
        :host(:hover) {
            background: ##ccc;
        }
    </style>
</template>
```

#### document.importNode()

document.importNode方法用于克隆外部文档的DOM节点。

```javascript
var iframe = document.getElementsByTagName("iframe")[0];
var oldNode = iframe.contentWindow.document.getElementById("myNode");
var newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

上面例子是将iframe窗口之中的节点oldNode，克隆进入当前文档。

注意，克隆节点之后，还必须用appendChild方法将其加入当前文档，否则不会显示。换个角度说，这意味着插入外部文档节点之前，必须用document.importNode方法先将这个节点准备好。

document.importNode方法接受两个参数，第一个参数是外部文档的DOM节点，第二个参数是一个布尔值，表示是否连同子节点一起克隆，默认为false。大多数情况下，必须显式地将第二个参数设为true。

### Shadow DOM

所谓 Shadow DOM 指的是，浏览器将模板、样式表、属性、JavaScript 码等，封装成一个独立的 DOM 元素。外部的设置无法影响到其内部，而内部的设置也不会影响到外部，与浏览器处理原生网页元素（比如`<video>`元素）的方式很像。

Shadow DOM 最大的好处有两个，一是可以向用户隐藏细节，直接提供组件，二是可以封装内部样式表，不会影响到外部。

Custom Element 内部有一个 Shadow Root。它就是接入外部 DOM 的根元素。

```javascript
// attachShadow() creates a shadow root.
let shadow = div.attachShadow({ mode: 'open' });
let inner = document.createElement('b');
inner.appendChild(document.createTextNode('Hiding in the shadows'));

// shadow root supports the normal appendChild method.
shadow.appendChild(inner);
div.querySelector('b'); // empty
```

上面代码中，`<div>`包含`<b>`，但是 DOM 方法无法看到它，而且页面的样式也影响不到它。

`mode: 'open'`表示开发者工具里面，可以看到 Custom HTML 内部的 DOM，并与之互动。`mode: closed`将不允许 Custom Element 的使用者与内部代码互动。

Shadow root 内部通过指定`innerHTML`属性或使用`<template>`元素，指定 HTML 代码。

Shadow DOM 内部可以通过向根添加`<style>`（或`<link>`）来设置样式。

```javascript
let style = document.createElement('style');
style.innerText = 'b { font-weight: bolder; color: red; }';
shadowRoot.appendChild(style);

let inner = document.createElement('b');
inner.innerHTML = "I'm bolder in the shadows";
shadowRoot.appendChild(inner);
```

上面代码添加的样式，只会影响 Shadow DOM 内的元素。

Custom Element 的 CSS 样式内部，`:root`表示这个根元素。比如，Custom Element 默认是行内元素，下面代码可以改成块级元素。

```css
:host {
    display: block;
}

:host([disabled]) {
    opacity: 0.5;
}
```

注意，外部样式会覆盖掉`:host`的设置，比如下面的样式会覆盖`:host`。

```css
my-element {
    display: inline-block;
}
```

利用 CSS 的自定义属性，可以为 Custom Element 可以被覆盖的默认样式。下面是外部样式，`my-element`是 Custom Element。

```css
my-element {
    --background-color: ##ff0000;
}
```

然后，内部可以指定默认样式，用于用户没有指定颜色的情况。

```css
:host {
    --background-color: ##ffffff;
}

##container {
     background-color: var(--background-color);
 }
```

下面的例子是为 Shadow DOM 加上独立的模板。

```html
<div id="nameTag">张三</div>

<template id="nameTagTemplate">
    <style>
        .outer {
            border: 2px solid brown;
        }
    </style>

    <div class="outer">
        <div class="boilerplate">
            Hi! My name is
        </div>
        <div class="name">
            Bob
        </div>
    </div>
</template>
```

上面代码是一个`div`元素和模板。接下来，就是要把模板应用到`div`元素上。

### HTML Import

#### 基本操作

长久以来，网页可以加载外部的样式表、脚本、图片、多媒体，却无法方便地加载其他网页，iframe和ajax都只能提供部分的解决方案，且有很大的局限。HTML Import就是为了解决加载外部网页这个问题，而提出来的。

下面代码用于测试当前浏览器是否支持HTML Import。

```javascript
function supportsImports() {
    return 'import' in document.createElement('link');
}

if (supportsImports()) {
    // 支持
} else {
    // 不支持
}

```

HTML Import用于将外部的HTML文档加载进当前文档。我们可以将组件的HTML、CSS、JavaScript封装在一个文件里，然后使用下面的代码插入需要使用该组件的网页。

```html
<link rel="import" href="dialog.html">

```

上面代码在网页中插入一个对话框组件，该组建封装在`dialog.html`文件。注意，dialog.html文件中的样式和JavaScript脚本，都对所插入的整个网页有效。

假定A网页通过HTML Import加载了B网页，即B是一个组件，那么B网页的样式表和脚本，对A网页也有效（准确得说，只有style标签中的样式对A网页有效，link标签加载的样式表对A网页无效）。所以可以把多个样式表和脚本，都放在B网页中，都从那里加载。这对大型的框架，是很方便的加载方法。

如果B与A不在同一个域，那么A所在的域必须打开CORS。

```html
<!-- example.com必须打开CORS -->
<link rel="import" href="http://example.com/elements.html">

```

除了用link标签，也可以用JavaScript调用link元素，完成HTML Import。

```javascript
var link = document.createElement('link');
link.rel = 'import';
link.href = 'file.html'
link.onload = function(e) {...};
link.onerror = function(e) {...};
document.head.appendChild(link);

```

HTML Import加载成功时，会在link元素上触发load事件，加载失败时（比如404错误）会触发error事件，可以对这两个事件指定回调函数。

```html
<script async>
    function handleLoad(e) {
        console.log('Loaded import: ' + e.target.href);
    }
    function handleError(e) {
        console.log('Error loading import: ' + e.target.href);
    }
</script>

<link rel="import" href="file.html"
      onload="handleLoad(event)" onerror="handleError(event)">

```

上面代码中，handleLoad和handleError函数的定义，必须在link元素的前面。因为浏览器元素遇到link元素时，立刻解析并加载外部网页（同步操作），如果这时没有对这两个函数定义，就会报错。

HTML Import是同步加载，会阻塞当前网页的渲染，这主要是为了样式表的考虑，因为外部网页的样式表对当前网页也有效。如果想避免这一点，可以为link元素加上async属性。当然，这也意味着，如果外部网页定义了组件，就不能立即使用了，必须等HTML Import完成，才能使用。

```html
<link rel="import" href="/path/to/import_that_takes_5secs.html" async>

```

但是，HTML Import不会阻塞当前网页的解析和脚本执行（即阻塞渲染）。这意味着在加载的同时，主页面的脚本会继续执行。

最后，HTML Import支持多重加载，即被加载的网页同时又加载其他网页。如果这些网页都重复加载同一个外部脚本，浏览器只会抓取并执行一次该脚本。比如，A网页加载了B网页，它们各自都需要加载jQuery，浏览器只会加载一次jQuery。

#### 脚本的执行

外部网页的内容，并不会自动显示在当前网页中，它只是储存在浏览器中，等到被调用的时候才加载进入当前网页。为了加载网页网页，必须用DOM操作获取加载的内容。具体来说，就是使用link元素的import属性，来获取加载的内容。这一点与iframe完全不同。

```javascript
var content = document.querySelector('link[rel="import"]').import;

```

发生以下情况时，link.import属性为null。

- 浏览器不支持HTML Import
- link元素没有声明`rel="import"`
- link元素没有被加入DOM
- link元素已经从DOM中移除
- 对方域名没有打开CORS

下面代码用于从加载的外部网页选取id为template的元素，然后将其克隆后加入当前网页的DOM。

```javascript
var el = linkElement.import.querySelector('##template');

document.body.appendChild(el.cloneNode(true));

```

当前网页可以获取外部网页，反过来也一样，外部网页中的脚本，不仅可以获取本身的DOM，还可以获取link元素所在的当前网页的DOM。

```javascript
// 以下代码位于被加载（import）的外部网页

// importDoc指向被加载的DOM
var importDoc = document.currentScript.ownerDocument;

// mainDoc指向主文档的DOM
var mainDoc = document;

// 将子页面的样式表添加主文档
var styles = importDoc.querySelector('link[rel="stylesheet"]');
mainDoc.head.appendChild(styles.cloneNode(true));

```

上面代码将所加载的外部网页的样式表，添加进当前网页。

被加载的外部网页的脚本是直接在当前网页的上下文执行，因为它的`window.document`指的是当前网页的document，而且它定义的函数可以被当前网页的脚本直接引用。

#### Web Component的封装

对于Web Component来说，HTML Import的一个重要应用是在所加载的网页中，自动登记Custom Element。

```html
<script>
    // 定义并登记<say-hi>
    var proto = Object.create(HTMLElement.prototype);

    proto.createdCallback = function() {
        this.innerHTML = 'Hello, <b>' +
                (this.getAttribute('name') || '?') + '</b>';
    };

    document.registerElement('say-hi', {prototype: proto});
</script>

<template id="t">
    <style>
        ::content > * {
            color: red;
        }
    </style>
    <span>I'm a shadow-element using Shadow DOM!</span>
    <content></content>
</template>

<script>
    (function() {
        var importDoc = document.currentScript.ownerDocument; //指向被加载的网页

        // 定义并登记<shadow-element>
        var proto2 = Object.create(HTMLElement.prototype);

        proto2.createdCallback = function() {
            var template = importDoc.querySelector('##t');
            var clone = document.importNode(template.content, true);
            var root = this.createShadowRoot();
            root.appendChild(clone);
        };

        document.registerElement('shadow-element', {prototype: proto2});
    })();
</script>

```

上面代码定义并登记了两个元素：\<say-hi\>和\<shadow-element\>。在主页面使用这两个元素，非常简单。

```html
<head>
    <link rel="import" href="elements.html">
</head>
<body>
<say-hi name="Eric"></say-hi>
<shadow-element>
    <div>( I'm in the light dom )</div>
</shadow-element>
</body>

```

不难想到，这意味着HTML Import使得Web Component变得可分享了，其他人只要拷贝`elements.html`，就可以在自己的页面中使用了。

### Polymer.js

Web Components是非常新的技术，为了让老式浏览器也能使用，Google推出了一个函数库[Polymer.js](http://www.polymer-project.org/)。这个库不仅可以帮助开发者，定义自己的网页元素，还提供许多预先制作好的组件，可以直接使用。

#### 直接使用的组件

Polymer.js提供的组件，可以直接插入网页，比如下面的google-map。。

```html
<script src="components/platform/platform.js"></script>
<link rel="import" href="google-map.html">
<google-map lat="37.790" long="-122.390"></google-map>

```

再比如，在网页中插入一个时钟，可以直接使用下面的标签。

```html
<polymer-ui-clock></polymer-ui-clock>

```

自定义标签与其他标签的用法完全相同，也可以使用CSS指定它的样式。

```css
polymer-ui-clock {
    width: 320px;
    height: 320px;
    display: inline-block;
    background: url("../assets/glass.png") no-repeat;
    background-size: cover;
    border: 4px solid rgba(32, 32, 32, 0.3);
}

```

#### 安装

如果使用bower安装，至少需要安装platform和core components这两个核心部分。

```bash
bower install --save Polymer/platform
bower install --save Polymer/polymer

```

你还可以安装所有预先定义的界面组件。

```bash
bower install Polymer/core-elements
bower install Polymer/polymer-ui-elements

```

还可以只安装单个组件。

```bash
bower install Polymer/polymer-ui-accordion

```

这时，组件根目录下的bower.json，会指明该组件的依赖的模块，这些模块会被自动安装。

```javascript
{
    "name": "polymer-ui-accordion",
        "private": true,
        "dependencies": {
        "polymer": "Polymer/polymer##0.2.0",
            "polymer-selector": "Polymer/polymer-selector##0.2.0",
            "polymer-ui-collapsible": "Polymer/polymer-ui-collapsible##0.2.0"
    },
    "version": "0.2.0"
}

```

#### 自定义组件

下面是一个最简单的自定义组件的例子。

```html
<link rel="import" href="../bower_components/polymer/polymer.html">

<polymer-element name="lorem-element">
    <template>
        <p>Lorem ipsum</p>
    </template>
</polymer-element>

```

上面代码定义了lorem-element组件。它分成三个部分。

**（1）import命令**

import命令表示载入核心模块

**（2）polymer-element标签**

polymer-element标签定义了组件的名称（注意，组件名称中必须包含连字符）。它还可以使用extends属性，表示组件基于某种网页元素。

```html
<polymer-element name="w3c-disclosure" extends="button">

```

**（3）template标签**

template标签定义了网页元素的模板。

#### 组件的使用方法

在调用组件的网页中，首先加载polymer.js库和组件文件。

```html
<script src="components/platform/platform.js"></script>
<link rel="import" href="w3c-disclosure.html">

```

然后，分成两种情况。如果组件不基于任何现有的HTML网页元素（即定义的时候没有使用extends属性），则可以直接使用组件。

```html
<lorem-element></lorem-element>

```

这时网页上就会显示一行字“Lorem ipsum”。

如果组件是基于（extends）现有的网页元素，则必须在该种元素上使用is属性指定组件。

```
<button is="w3c-disclosure">Expand section 1</button>

```

### 参考链接

- [The Power of Web Components](https://hacks.mozilla.org/2018/11/the-power-of-web-components/), Potch
- Todd Motto, [Web Components and concepts, ShadowDOM, imports, templates, custom elements](http://toddmotto.com/web-components-concepts-shadow-dom-imports-templates-custom-elements/)
- Dominic Cooney, [Shadow DOM 101](http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/)
- Eric Bidelman, [HTML's New Template Tag](http://www.html5rocks.com/en/tutorials/webcomponents/template/)
- Rey Bango, [Using Polymer to Create Web Components](http://code.tutsplus.com/tutorials/using-polymer-to-create-web-components--cms-20475)
- Cédric Trévisan, Building an Accessible Disclosure Button – using Web Components](http://blog.paciellogroup.com/2014/06/accessible-disclosure-button-using-web-components/)
- Eric Bidelman, [Custom Elements: defining new elements in HTML](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/)
- Eric Bidelman, [HTML Imports](http://www.html5rocks.com/en/tutorials/webcomponents/imports/)
- TJ VanToll, [Why Web Components Are Ready For Production](http://developer.telerik.com/featured/web-components-ready-production/)
- Chris Bateman, [A No-Nonsense Guide to Web Components, Part 1: The Specs](http://cbateman.com/blog/a-no-nonsense-guide-to-web-components-part-1-the-specs/)
- [Web Components will replace your frontend framework](https://blog.usejournal.com/web-components-will-replace-your-frontend-framework-3b17a580831c), Danny Moerkerke
- [Custom Elements v1: Reusable Web Components](https://developers.google.com/web/fundamentals/web-components/customelements##extend), Eric Bidelman

## WebSocket

WebSocket 是一种网络通信协议，很多高级功能都需要它。

初次接触 WebSocket 的人，都会问同样的问题：我们已经有了 HTTP 协议，为什么还需要另一个协议？它能带来什么好处？

答案很简单，因为 HTTP 协议有一个缺陷：通信只能由客户端发起。举例来说，我们想了解今天的天气，只能是客户端向服务器发出请求，服务器返回查询结果。HTTP 协议做不到服务器主动向客户端推送信息。HTTP 协议的这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦。我们只能使用“轮询”：每隔一段时候，就发出一个询问，了解服务器有没有新的信息。最典型的场景就是聊天室。

轮询的效率低，非常浪费资源（因为必须不停连接，或者 HTTP 连接始终打开）。因此，工程师们一直在思考，有没有更好的方法。WebSocket 就是这样发明的。

### 简介

WebSocket 协议在2008年诞生，2011年成为国际标准。所有浏览器都已经支持了。

它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。WebSocket 允许服务器端与客户端进行全双工（full-duplex）的通信。举例来说，HTTP 协议有点像发电子邮件，发出后必须等待对方回信；WebSocket 则是像打电话，服务器端和客户端可以同时向对方发送数据，它们之间存着一条持续打开的数据通道。

其他特点包括：

（1）建立在 TCP 协议之上，服务器端的实现比较容易。

（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。

（3）数据格式比较轻量，性能开销小，通信高效。

（4）可以发送文本，也可以发送二进制数据。

（5）没有同源限制，客户端可以与任意服务器通信，完全可以取代 Ajax。

（6）协议标识符是`ws`（如果加密，则为`wss`，对应 HTTPS 协议），服务器网址就是 URL。

```html
ws://example.com:80/some/path
```

### WebSocket 握手

浏览器发出的 WebSocket 握手请求类似于下面的样子：

```http
GET / HTTP/1.1
Connection: Upgrade
Upgrade: websocket
Host: example.com
Origin: null
Sec-WebSocket-Key: sN9cRrP/n9NdMgdcy2VJFQ==
Sec-WebSocket-Version: 13
```

上面的头信息之中，有一个 HTTP 头是`Upgrade`。HTTP1.1 协议规定，`Upgrade`字段表示将通信协议从`HTTP/1.1`转向该字段指定的协议。`Connection`字段表示浏览器通知服务器，如果可以的话，就升级到 WebSocket 协议。`Origin`字段用于提供请求发出的域名，供服务器验证是否许可的范围内（服务器也可以不验证）。`Sec-WebSocket-Key`则是用于握手协议的密钥，是 Base64 编码的16字节随机字符串。

服务器的 WebSocket 回应如下。

```http
HTTP/1.1 101 Switching Protocols
Connection: Upgrade
Upgrade: websocket
Sec-WebSocket-Accept: fFBooB7FAkLlXgRSz0BT3v4hq5s=
Sec-WebSocket-Origin: null
Sec-WebSocket-Location: ws://example.com/
```

上面代码中，服务器同样用`Connection`字段通知浏览器，需要改变协议。`Sec-WebSocket-Accept`字段是服务器在浏览器提供的`Sec-WebSocket-Key`字符串后面，添加 [RFC6456](http://tools.ietf.org/html/rfc6455) 标准规定的“258EAFA5-E914-47DA-95CA-C5AB0DC85B11”字符串，然后再取 SHA-1 的哈希值。浏览器将对这个值进行验证，以证明确实是目标服务器回应了 WebSocket 请求。`Sec-WebSocket-Location`字段表示进行通信的 WebSocket 网址。

完成握手以后，WebSocket 协议就在 TCP 协议之上，开始传送数据。

### 客户端的简单示例

WebSocket 的用法相当简单。

下面是一个网页脚本的例子，基本上一眼就能明白。

```javascript
var ws = new WebSocket('wss://echo.websocket.org');

ws.onopen = function(evt) {
    console.log('Connection open ...');
    ws.send('Hello WebSockets!');
};

ws.onmessage = function(evt) {
    console.log('Received Message: ' + evt.data);
    ws.close();
};

ws.onclose = function(evt) {
    console.log('Connection closed.');
};
```

### 客户端 API

浏览器对 WebSocket 协议的处理，无非就是三件事。

- 建立连接和断开连接
- 发送数据和接收数据
- 处理错误

#### 构造函数 WebSocket

`WebSocket`对象作为一个构造函数，用于新建`WebSocket`实例。

```javascript
var ws = new WebSocket('ws://localhost:8080');
```

执行上面语句之后，客户端就会与服务器进行连接。

#### webSocket.readyState

`readyState`属性返回实例对象的当前状态，共有四种。

- CONNECTING：值为0，表示正在连接。
- OPEN：值为1，表示连接成功，可以通信了。
- CLOSING：值为2，表示连接正在关闭。
- CLOSED：值为3，表示连接已经关闭，或者打开连接失败。

下面是一个示例。

```javascript
switch (ws.readyState) {
    case WebSocket.CONNECTING:
        // do something
        break;
    case WebSocket.OPEN:
        // do something
        break;
    case WebSocket.CLOSING:
        // do something
        break;
    case WebSocket.CLOSED:
        // do something
        break;
    default:
        // this never happens
        break;
}
```

#### webSocket.onopen

实例对象的`onopen`属性，用于指定连接成功后的回调函数。

```javascript
ws.onopen = function () {
    ws.send('Hello Server!');
}
```

如果要指定多个回调函数，可以使用`addEventListener`方法。

```javascript
ws.addEventListener('open', function (event) {
    ws.send('Hello Server!');
});
```

#### webSocket.onclose

实例对象的`onclose`属性，用于指定连接关闭后的回调函数。

```javascript
ws.onclose = function(event) {
    var code = event.code;
    var reason = event.reason;
    var wasClean = event.wasClean;
    // handle close event
};

ws.addEventListener("close", function(event) {
    var code = event.code;
    var reason = event.reason;
    var wasClean = event.wasClean;
    // handle close event
});
```

#### webSocket.onmessage

实例对象的`onmessage`属性，用于指定收到服务器数据后的回调函数。

```javascript
ws.onmessage = function(event) {
    var data = event.data;
    // 处理数据
};

ws.addEventListener("message", function(event) {
    var data = event.data;
    // 处理数据
});
```

注意，服务器数据可能是文本，也可能是二进制数据（`blob`对象或`Arraybuffer`对象）。

```javascript
ws.onmessage = function(event){
    if(typeOf event.data === String) {
        console.log("Received data string");
    }

    if(event.data instanceof ArrayBuffer){
        var buffer = event.data;
        console.log("Received arraybuffer");
    }
}
```

除了动态判断收到的数据类型，也可以使用`binaryType`属性，显式指定收到的二进制数据类型。

```javascript
// 收到的是 blob 数据
ws.binaryType = "blob";
ws.onmessage = function(e) {
    console.log(e.data.size);
};

// 收到的是 ArrayBuffer 数据
ws.binaryType = "arraybuffer";
ws.onmessage = function(e) {
    console.log(e.data.byteLength);
};
```

#### webSocket.send()

实例对象的`send()`方法用于向服务器发送数据。

发送文本的例子。

```javascript
ws.send('your message');
```

发送 Blob 对象的例子。

```javascript
var file = document
    .querySelector('input[type="file"]')
    .files[0];
ws.send(file);
```

发送 ArrayBuffer 对象的例子。

```javascript
// Sending canvas ImageData as ArrayBuffer
var img = canvas_context.getImageData(0, 0, 400, 320);
var binary = new Uint8Array(img.data.length);
for (var i = 0; i < img.data.length; i++) {
    binary[i] = img.data[i];
}
ws.send(binary.buffer);
```

#### webSocket.bufferedAmount

实例对象的`bufferedAmount`属性，表示还有多少字节的二进制数据没有发送出去。它可以用来判断发送是否结束。

```javascript
var data = new ArrayBuffer(10000000);
socket.send(data);

if (socket.bufferedAmount === 0) {
    // 发送完毕
} else {
    // 发送还没结束
}
```

#### webSocket.onerror

实例对象的`onerror`属性，用于指定报错时的回调函数。

```javascript
socket.onerror = function(event) {
    // handle error event
};

socket.addEventListener("error", function(event) {
    // handle error event
});
```

### WebSocket 服务器

WebSocket 协议需要服务器支持。各种服务器的实现，可以查看维基百科的[列表](https://en.wikipedia.org/wiki/Comparison_of_WebSocket_implementations)。

常用的 Node 实现有以下三种。

- [µWebSockets](https://github.com/uWebSockets/uWebSockets)
- [Socket.IO](http://socket.io/)
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node)

具体的用法请查看它们的文档，本教程不详细介绍了。

### 参考链接

- Ryan Stewart, [Real-time data exchange in HTML5 with WebSockets](http://www.adobe.com/devnet/html5/articles/real-time-data-exchange-in-html5-with-websockets.html)
- Malte Ubl & Eiji Kitamura，[Introducing WebSockets: Bringing Sockets to the Web](https://www.html5rocks.com/en/tutorials/websockets/basics/)
- Jack Lawson, [WebSockets: A Guide](http://buildnewgames.com/websockets/)
- Michael W., [Starting with Node and Web Sockets](http://codular.com/node-web-sockets)
- Jesse Cravens, [Introduction to WebSockets](http://tech.pro/tutorial/1167/introduction-to-websockets)
- Matt West, [An Introduction to WebSockets](http://blog.teamtreehouse.com/an-introduction-to-websockets)
- Maciej Sopyło, [Node.js: Better Performance With Socket.IO and doT](http://net.tutsplus.com/tutorials/javascript-ajax/node-js-better-performance-with-socket-io-and-dot/)
- Jos Dirksen, [Capture Canvas and WebGL output as video using websockets](http://www.smartjava.org/content/capture-canvas-and-webgl-output-video-using-websockets)
- Fionn Kellehe, [Understanding Socket.IO](https://nodesource.com/blog/understanding-socketio)
- [How to Use WebSockets](http://cjihrig.com/blog/how-to-use-websockets/)
- [WebSockets - Send & Receive Messages](https://www.tutorialspoint.com/websockets/websockets_send_receive_messages.htm)

