---
## 当前页面内容标题
title: 路飞爬虫(第六期)
## 当前页面图标
icon: code
## 分类
category:
- python
- 路飞学院
## 标签
tag:
- python
- 路飞学院
sticky: false
## 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: true
## 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---
# 第一节,  python基础内容回顾

## 二. 关于爬虫的特殊性

爬虫是一个很蛋疼的东西, 可能今天讲解的案例. 明天就失效了. 所以, 不要死盯着一个网站干.  要学会见招拆招(爬虫的灵魂)
爬虫程序如果编写的不够完善. 访问频率过高. 很有可能会对服务器造成毁灭性打击, 所以, 不要死盯着一个网站干. 请放慢你爬取的速度. 为你好, 也为网站好. 



腾讯, 阿里, 字节的网站, 反爬手段很残忍. 新手不要去挑战这种大厂. 等你有实力了. 慢慢研究(哪个都要研究很久....)



gov的网站, 非必要, 不爬取. 非要爬取. 请一定降低访问频率. 为你好....

不要以为gov的网站好欺负. 那是地方性的网站. 中央的很多重要网站都有非常强力的防护措施(瑞数等...) 这种. 愿意搞的. 自己研究. 樵夫搞不定....



爬虫只能爬 你看得见的东西!!!!!



网站的多变性: 这个是爬虫的魅力. 我们要全方位的去思考. 就像找漏洞一样. 思维逻辑不可能是固定的. 达到目的即可. 不要死磕牛角尖. 要不然, 你会死的很惨.... 要学会见招拆招. 



关于憋代码这个事.  要憋. 一定要憋. 让你憋主要有两个原因. 

1. **简单的语法使用错误. 不憋记不住**
2. **复杂的程序逻辑. 不憋培养不出来独立思考能力.** 



## 三. 必须要掌握的py基础

### 3.1 基础语法相关

 1. if条件判断

    ```python
    if 条件:
        # 事情1
    else:
        # 事情2
    ```

    上面就是if的最基础的语法规则. 含义是, 如果条件为真, 去执行`事情1`, 如果条件不真, 去执行`事情2`. 这东西. 我就不拆开聊了. 关于if. 你要记住的事情是, `它是用来做条件判断的`. 以后你的程序里,  如果需要条件判断了. 就用它....

    举例,

    在写爬虫的时候. 我们会遇到这样的两种情况 

    情况一, 数据里有一些我们并不需要的内容

    ```python
    data = "10,英雄本色,1500万"   # 正常你需要的数据
    data = "11,-,-"  # 你不需要的数据
    
    # 伪代码, 理解含义(思路)
    if data里有你不需要的数据:
    	再见
    else:
     	保留
    
    ```

    

    情况二, 页面结构不统一, 会有两种页面结构

    ```python
    # 伪代码, 理解含义(思路)
    提取器1 = xxxx  #  用来提取页面中内容的
    提取器2 = xxxxxx
    
    # 页面有可能是不规则的。 张飞， 潘长江 
    结果1 = 提取器1.提取(页面)
    if 结果1:
        有结果. 存起来
    else:
        没有结果. 
        结果2 = 提取器2.提取(页面)
    ```

    相信我, 上面的逻辑并不难. 但是, 到了后面很多小伙伴容易踩坑. 我们完全没必要用一个提取器获取所有的数据. 完全没必要.....

    

 2. while循环
    关于循环, 我们必须要知道一个事情. 

    ```python
    while 条件:
        循环体
    ```

    如果条件为真, 就执行循环体, 然后再次判断条件.....直到条件为假. 结束循环. 

    反复的执行一段代码

    

 3. 关于True和False

    True, 是真的意思. 翻译成人话:  对的, OK, 没毛病. 确定

    False, 是假的意思. 翻译成人话: 不对劲, 错误, No. 有瑕疵. 不对劲

    这个应该都能看懂. 

    但是下面这个, 需要各位去记住

    ```python
    # 几乎所有能表示为空的东西. 都可以认为是False
    print(bool(0))
    print(bool(""))
    print(bool([]))
    print(bool({}))
    print(bool(set()))
    print(bool(tuple()))
    print(bool(None))
    # 上面这一坨全是False, 相反的. 都是真. 利用这个特性. 我们可以有以下的一些写法
    
    # 伪代码, 理解逻辑. 
    结果 = 提取器.提取(页面)
    if 结果:
        有结果. 我要保存结果
    else:
        没结果. ......
    ```

    

### 3.2  字符串

​	字符串在`爬虫`里. 必须要知道的几个操作:

  1. 索引和切片
     索引, 就是第几个字符. 它从0开始. 
     切片, 从字符串中提取n个字符. 

     ```python
     s = "我爱黎明,黎明爱我"
     print(s[1])
     print(s[0])
     
     print(s[2:4])  从第2个, 到第4个(取不到4)
     ```

     

  2. strip()

     我们从网页上提取的数据. 很多都是带有一些杂质的(换行, 空格),怎么去掉?

     strip()可以去掉字符串`左右两端`的空白(空格, 换行\n, 回车\r, 制表符\t)

     ```python
     s = "    \t\t\t我的天哪\r\r      \n\n  "  # 够乱的字符串
     s1 = s.strip()
     print(s1)  # 好了 `我的天哪`
     ```

     

  3. split()

     split,  做切割的. 

     ```python
     s = "10,男人本色,100000万"  # 你在网页上提取到这样的一段数据. 现在我需要电影名称
     tmps = s.split(",")
     name = tmps[1]
     print(name)  # 男人本色
     
     id, name, money = s.split(",")  # 切割后. 把三个结果直接怼给三个变量
     print(id)
     print(name)
     print(money)
     ```

     

  4. replace()

     replace, 字符串替换

     ```python
     s = "我      \t\t\n\n爱   黎       明    "   # 这是你从网页上拿到的东西
     s1 = replace(" ", "").replace("\t", "").replace("\n", "")  # 干掉空格, \t, \n
     print(s1)  # 我爱黎明
     ```

     

  5. join()

     join, 将列表拼接为一个完整的字符串

     ```python
     lst = ["我妈", "不喜欢", "黎明"]  # 有时,由于网页结构的不规则, 导致获取的数据是这样的. 
     s1 = "".join(lst)  # 用空字符串把lst中的每一项拼接起来
     print(s1)  # 我妈不喜欢黎明
     
     lst2 = ["\n\r","\n\r","周杰伦\n\r", "\n不认识我\r"] 
     
     
     s2 = "".join(lst2).replace("\n", "").replace("\r", "")
     print(s2)  # 周杰伦不认识我
     
     ```

  6. f-string

     格式化字符串的一种方案

     ```python
     s = "周杰伦"
     s1 = f"我喜欢{s}"  #  它会把一个变量塞入一个字符串
     print(s1)  # 我喜欢周杰伦
     
     k = 10085
     s2 = f"我的电话号是{k+1}" # 它会把计算结果赛入一个字符串
     print(s2)  # 我的电话号是10086
     
     # 综上, f-string的大括号里, 其实是一段表达式.能计算出结果即可
     
     ```

     

### 3.3  列表

列表, 我们未来遇见的仅次于字符串的一种数据类型. 它主要是能承载大量的数据. 理论上. 你的内存不炸. 它就能一直存

1. 索引, 切片

   列表的索引和切片逻辑与字符串完全一致

   ```python
   lst = ["赵本山", "王大陆", "大嘴猴", "马后炮"]
   item1 = lst[2]  # 大嘴猴
   item2 = lst[1]  # 王大陆
   
   lst2 = lst[2:]
   print(lst2)  # ["大嘴猴", "马后炮"]
   
   # 注意, 如果列表中没有数据. 取0会报错
   lst = []
   print(lst[0])  # 报错, Index out of bounds
   
   # 注意, 如果给出的索引下标超过了列表的最大索引. 依然会报错
   lst = ["123", "456"]
   print(lst[9999])  # 报错, Index out of bounds
   
   ```

   

2. 增加

   给列表添加数据. 

   ```python
   lst = [11,22]
   lst.append(33)
   lst.append(44)
   print(lst)  # [11,22,33,44]
   ```

   

3. 删除

   删除数据(不常用, 好不容易爬到的数据. 为什么要删)

   ```python
   lst.remove("周润发")  #  把周润发删掉
   ```

   

4. 修改

   ```python
   lst = ["赵本山", "王大陆", "大嘴猴", "马后炮"]
   lst[1] = "周杰伦"
   print(lst)  # ["赵本山", "周杰伦", "大嘴猴", "马后炮"]
   ```

   

5. range

   用for循环数数的一个东西

   ```python
   for i in range(10):
       print(i)   # 从0数到9
      
   for i in range(5, 10):
       print(i)  # 从5 数到 9
   ```

6. 查询(必会!!!!)

   ```python
   lst = ["赵本山", "周杰伦", "大嘴猴", "马后炮"]
   print(lst[0])
   print(lst[1])
   print(lst[2])
   print(lst[3])
   
   # 循环列表的索引
   for i in range(len(lst)):
       print(lst[i])
   # 循环列表的内容
   for item in lst:
       print(item)
   ```

   

### 3.4  字典

字典可以成对儿的保存数据. 

1. 增加

   ```python
   dic = {}
   dic['name'] = '樵夫'
   dic['age'] = 18
   
   print(dic)  # {"name": "樵夫", "age": 18}
   
   ```

   

2. 修改

   ```python
   dic = {"name": "樵夫", "age": 18}
   dic['age'] = 19
   print(dic)  # {"name": "樵夫", "age": 19}
   ```

   

3. 删除(不常用)

   ```python
   dic = {"name": "樵夫", "age": 18}
   dic.pop("age")
   print(dic)  # {'name': '樵夫'}
   ```

   

4. 查询(重点)

   ```python
   dic = {"name": "樵夫", "age": 18}
   
   a = dic['name']  # 查询'name'的值
   print(a)  # 樵夫
   
   b = dic['age']  # 拿到dic中age对应的值
   print(b)  # 18
   
   c = dic['哈拉少']   # 没有哈拉少. 报错
   d = dic.get("哈拉少")  # 没有哈拉少, 不报错. 返回None. 它好. 它不报错
   
   ```

   循环

   ```python
   dic = {"name": "樵夫", "age": 18}
   for k in dic:  # 循环出所有的key
       print(k)  
       print(dic[k])  # 获取到所有的value并打印
       
   ```

   嵌套

   ```python
   dic = {
       "name": "王峰",
       "age": 18,
       "wife": {
           "name": "章子怡",
           "age": 19,
       },
       "children": [
           {'name':"胡一菲", "age": 19},
           {'name':"胡二菲", "age": 18},
           {'name':"胡三菲", "age": 17},
       ]
   }
   
   # 王峰的第二个孩子的名字
   print(dic['children'][1]['name'])
   # 王峰所有孩子的名称和年龄
   for item in dic['children']:
       print(item['name'])
       print(item['age'])
   ```

   

### 3.5  字符集和bytes

字符集, 记住两个字符集就够了. 一个是utf-8, 一个是gbk. 都是支持中文的. 但是utf-8的编码数量远大于gbk. 我们平时使用的最多的是utf-8

```python
# 把字符串转化成字节
bs = "我的天哪abcdef".encode("utf-8")
print(bs)  #  b'\xe6\x88\x91\xe7\x9a\x84\xe5\xa4\xa9\xe5\x93\xaaabcdef'
# 一个中文在utf-8里是3个字节. 一个英文是一个字节. 所以英文字母是正常显示的

# 把字节还原回字符串
bs = b'\xe6\x88\x91\xe7\x9a\x84\xe5\xa4\xa9\xe5\x93\xaaabcdef'
s = bs.decode("utf-8")
print(s)

```

记住, bytes不是给人看的. 是给机器看的. 我们遇到的所有文字, 图片, 音频, 视频. 所有所有的东西到了计算机里都是字节. 





### 3.6 文件操作

python中. 想要处理一个文件. 必须用open()先打开一个文件

语法规则

```python
f = open(文件名, mode="模式", encoding='文件编码')
f.read()|f.write()
f.close()
```

文件名就不解释了. 

模式: 
	我们需要知道的主要有4个. 分别是: r, w, a, b

1. r  只读模式. 含义是, 当前这一次open的目的是读取数据. 所以, 只能读. 不能写
2. w 只写模式. 含义是, 当前这一次open的目的是写入数据. 所以, 只能写, 不能读
3. a 追加模式. 含义是, 当前这一次open的目的是向后追加. 所以, 只能写, 不能读
4. b 字节模式. 可以和上面三种模式进行混合搭配. 目的是. 写入的内容或读取的内容是字节. 

问: 

1. 如果我想保存一张图片. 应该用哪种模式?
2. 我想读取txt文件, 用哪种模式?
3. 我想复制一个文件. 应该用哪种模式?

encoding: 文件编码. 只有处理的文件是文本的时候才能使用. 并且mode不可以是`b`.   99%的时候我们用的是`utf-8`

另一种写法:

```python
with open(文件名, mode=模式, encoding=编码) as f:
    pass
```

这种写法的好处是, 不需要我们手动去关闭`f`

读取一个文本文件:

```python
with open("躺尸一摆手.txt", mode="r", encoding="utf-8") as f:
    for line in f:  # for循环可以逐行的进行循环文件中的内容
        print(line)
```



### 3.7  关于函数

在代码量很少的时候, 我们并不需要函数. 但是一旦代码量大了. 一次写个几百行代码. 调试起来就很困难. 此时, 建议把程序改写成一个一个具有特定功能的函数. 方便调试. 也方便代码的重用

```python
def 函数名(形式参数):
    # 函数体
    return 返回值
```

上面是编写一个函数的固定逻辑. 但是, 编写好的函数是不会自己运行的. 必须有人调用才可以

```python
函数名(实际参数)
```

写一个试试:

```python
def get_page_source(url):
    print("我要发送请求了. 我要获取到页面源代码啊")
    return "页面源代码"

pg_one = get_page_source("baidu.com")
pg_two = get_page_source("koukou.com")
```

再来一个

```python
def download_image(url, save_path):
    print(f"我要下载图片{url}了", f"保存在{save_path}")

donwload_image("http://www.baidu.com/abc/huyifei.jpg", "胡二飞.jpg")
donwload_image("http://www.baidu.com/aaa/dagedagefeifeifei.jpg", "大哥大哥飞飞飞.jpg")

```

总结, 函数的好处就是, 以后需要该功能. 不用再写重复代码了. 



### 3.8 关于模块

模块是啥? 模块就是已经有人帮我们写好了的一些代码, 这些代码被保存在一个py文件或者一个文件夹里. 我们可以拿来直接用

在python中有三种模块.

第一种, python内置模块

​	不用安装. 直接导入就能用

第二种, 第三方模块

​	需要安装. 安装后. 导入就可以用了

第三种, 自定义模块(新手先别自己定义模块)

​	直接导入就能用

导入模块的语法

```python
import 模块
from 模块 import 功能
from 模块.子模块 import 功能

举例子, 
import os
import sys
from urllib.parse import urljoin
from bs4 import BeautifulSoup
```

搞爬虫.必须要了解的一些python内置模块

1. time模块

   ```python
   import time
   time.time()  # 这个是获取到时间戳
   time.sleep(999)  # 让程序暂停999秒
   ```

   

2. os模块

   ```python
   import os
   # 判断文件是否存在
   os.path.exists()  #  判断文件或者文件夹是否存在
   os.path.join()    # 路径拼接
   os.makedirs()     # 创建文件夹
   
   ```

   

3. json模块(重中之重)

   现在的网站不同于从前了. 习惯性用json来传递数据. 所以, 我们必须要知道json是啥, 以及python如何处理json. 

   json是一种类似字典一样的东西.  对于python而言, json是字符串.  

   例如, 

   ```python
   s = '{"name": "jay", "age": 18}'
   ```

   你看. 这破玩意就是`json`

   如何来转化它. 

   **<span style="background-color:yellow;color:red;">json字符串 => python字典</span>**

   ```python
   import json
   s = '{"name": "jay", "age": 18}'
   dic = json.loads(s)
   print(type(dic))
   ```

   **<span style="background-color:yellow;color:red;">python字典 => json字符串</span>**

   ```python
   import json
   dic = {"name": "jay", "age": 18}
   s = json.dumps(dic)
   print(type(s))
   ```

   

4. random模块

   随机. 没别的用处.生成随机数

   ```python
   import random
   i = random.randint(1, 10)  # 1~10的随机数
   print(i)   # 多跑两次.效果更加
   ```

   

5. 异常处理

   这个是重点. 我们在写爬虫的时候. 非常容易遇到问题. 但这些问题本身并不是我们程序的问题. 

   比如, 你在抓取某网站的时候. 由于网络波动或者他服务器本身压力太大. 导致本次请求失败. 这种现象太常见了. 此时, 我们程序这边就会崩溃. 打印一堆红色的文字. 让你难受的一P.  怎么办?

   我们要清楚一个事情. 我们平时在打开一个网址的时候. 如果长时间没有反应, 或者加载很慢的时候. 我们习惯性的会刷新网页. 对吧. 这个逻辑就像: `程序如果本次请求失败了. 能不能重新来一次`. OK, 我们接下来聊的这个异常处理. 就是干这个事儿的. 

   ```python
   try: # 尝试...
       print("假如, 我是一段爬虫代码, 请求到对方服务器")
       print("我得出事儿啊")
       print(1/0)  # 出事儿了
   except Exception as e:  # 出错了. 我给你兜着
       print(e)  # 怎么兜?  打印一下. 就过去了
       
   print("不论上面是否出错. 我这里, 依然可以执行")
   ```

   看懂了么? 程序执行的时候. 如果`try`中的代码出现错误. 则自动跳到`except`中. 并执行`except`中的代码. 然后程序正常的, 继续执行

   有了这玩意. 我们就可以写出一段很漂亮的代码逻辑:

   ```python
   while 1:
       try:
           我要发送请求了. 我要干美国CIA的总部. 我要上天
           print("我成功了!!")
           break  # 成功了.就跳出循环
       except Exception as e:
           print("失败了")
           print("我不怕失败")
           print("再来")
          
   ```

   改良版:

   ```python
   import time
   for i in range(10):
       try:
           我要发送请求了. 我要干美国CIA的总部. 我要上天
           print("我成功了!!")
           break  # 成功了.就跳出循环
       except Exception as e:
           print("失败了")
           print("我不怕失败")
           print("再来")
           time.sleep(i * 10)
          
   ```

   

# 第二节 正则



## 一、正则基础

### 1、为什么使用正则

- 需求

  判断一个字符串是否是手机号

- 解决

  编写一个函数，给函数一个字符串，如果是手机号则返回True，否则返回False

- 代码

  ```python
  def isPhone(phone):
      # 长度为11
      # 全部都是数字字符
      # 以1开头
      pass
  
  if isPhone("13812345678"):
      print("是手机号")
  else:
      print("不是手机号")
  ```

- 注意

  如果使用正则会让这个问题变得简单

### 2、正则与re模块简介

**概述：** **正则表达式**，又称规则表达式

正则表达式(regular expression)描述了一种字符串匹配的模式（pattern）

正则匹配是一个 模糊的匹配(不是精确匹配)

**re：**python自1.5版本开始增加了re模块，该模块提供了perl风格的正则表达式模式，re模块是python语言拥有了所有正则表达式的功能

- 如下四个方法经常使用
  - match()
  - search()
  - findall()
  - finditer()

## 二、正则表达式

### 1、匹配单个字符与数字

| 匹配         | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| .            | 匹配除换行符以外的任意字符，当flags被设置为re.S时，可以匹配包含换行符以内的所有字符 |
| []           | 里面是字符集合，匹配[]里任意一个字符                         |
| [0123456789] | 匹配任意一个数字字符                                         |
| [0-9]        | 匹配任意一个数字字符                                         |
| [a-z]        | 匹配任意一个小写英文字母字符                                 |
| [A-Z]        | 匹配任意一个大写英文字母字符                                 |
| [A-Za-z]     | 匹配任意一个英文字母字符                                     |
| [A-Za-z0-9]  | 匹配任意一个数字或英文字母字符                               |
| [^lucky]     | []里的^称为脱字符，表示非，匹配不在[]内的任意一个字符        |
| ^[lucky]     | 以[]中内的某一个字符作为开头                                 |
| \d           | 匹配任意一个数字字符，相当于[0-9]                            |
| \D           | 匹配任意一个非数字字符，相当于`[^0-9]`                       |
| \w           | 匹配字母、下划线、数字中的任意一个字符，相当于[0-9A-Za-z_]   |
| \W           | 匹配非字母、下划线、数字中的任意一个字符，相当于`[^0-9A-Za-z_]` |
| \s           | 匹配空白符(空格、换页、换行、回车、制表)，相当于[ \f\n\r\t]  |
| \S           | 匹配非空白符(空格、换页、换行、回车、制表)，相当于`[^ \f\n\r\t]` |

### 2、匹配锚字符

锚字符:用来判定是否按照规定开始或者结尾

| 匹配 | 说明                            |
| ---- | ------------------------------- |
| ^    | 行首匹配，和[]里的^不是一个意思 |
| $    | 行尾匹配                        |

### 3、限定符

限定符用来指定正则表达式的一个给定组件必须要出现多少次才能满足匹配。有 * 或 + 或 ? 或 大括号n大括号 或 {n,} 或 {n,m} 共6种。

| 匹配     | 说明                                                 |
|--------| ---------------------------------------------------- |
| (xyz)  | 匹配括号内的xyz，作为一个整体去匹配  一个单元 子存储 |
| x?     | 匹配0个或者1个x，非贪婪匹配                          |
| x*     | 匹配0个或任意多个x                                   |
| x+     | 匹配至少一个x                                        |
| x n}   | 确定匹配n个x，n是非负数                              |
| x n,}  | 至少匹配n个x                                         |
| x n,m} | 匹配至少n个最多m个x                                  |
| x\     |y   | \|表示或的意思，匹配x或y                             |



## 三、re模块中常用函数

**通用flags（修正符）**

| 值   | 说明                            |
| ---- | ------------------------------- |
| re.I | 是匹配对大小写不敏感            |
| re.S | 使.匹配包括换行符在内的所有字符 |

**通用函数**

+ 获取匹配结果

  + 使用group()方法 获取到匹配的值

  + groups()    返回一个包含所有小组字符串的元组(也就是自存储的值)，从 1 到 所含的小组号。


### 1、match()函数

- 原型

  ```
  def match(pattern, string, flags=0)
  ```

- 功能

  匹配成功返回 匹配的对象  

  匹配失败 返回 None

+ 获取匹配结果

  + 使用group()方法 获取到匹配的值

  + groups()    返回一个包含所有小组字符串的元组，从 1 到 所含的小组号。

+ 注意：从第一位开始匹配  只匹配一次

- 参数

  | 参数    | 说明                                 |
  | ------- | ------------------------------------ |
  | pattern | 匹配的正则表达式(一种字符串的模式)   |
  | string  | 要匹配的字符串                       |
  | flags   | 标识位，用于控制正则表达式的匹配方式 |

- 代码

  ```python
  import re
  
  res = re.match('\d{2}','123')
  print(res.group())
  
  #给当前匹配到的结果起别名
  s = '3G4HFD567'
  re.match("(?P<value>\d+)",s)
  print(x.group(0))
  print(x.group('value'))
  ```

### 2、searce()函数

- 原型

  ```
  def search(pattern, string, flags=0)
  ```

- 功能

  扫描整个字符串string，并返回第一个pattern模式成功的匹配

  匹配失败 返回 None

- 参数

  | 参数    | 说明                                 |
  | ------- | ------------------------------------ |
  | pattern | 匹配的正则表达式(一种字符串的模式)   |
  | string  | 要匹配的字符串                       |
  | flags   | 标识位，用于控制正则表达式的匹配方式 |

- 注意：

  只要字符串包含就可以

  只匹配一次

- 示例

  ```python
  import re
  
  res = re.search('[a-z]', '131A3ab889s')
  print(res)
  print(res.group()
  ```

+ 注意

  与search的区别

  相同点：

  都只匹配一次

  不同点：

  - search是在要匹配的字符串中  包含正则表达式的内容就可以
  - match 必须第一位就开始匹配  否则匹配失败

### 3、findall()函数（返回列表）

- 原型

  ```
  def findall(pattern, string, flags=0)
  ```

- 功能

  扫描整个字符串string，并返回所有匹配的pattern模式结果的字符串列表

- 参数

  | 参数    | 说明                                 |
  | ------- | ------------------------------------ |
  | pattern | 匹配的正则表达式(一种字符串的模式)   |
  | string  | 要匹配的字符串                       |
  | flags   | 标识位，用于控制正则表达式的匹配方式 |

- 示例

  ```python
  myStr = """
  <a href="http://www.baidu.com">百度</a>
  <A href="http://www.taobao.com">淘宝</A>
  <a href="http://www.id97.com">电
  影网站</a>
  <i>我是倾斜1</i>
  <i>我是倾斜2</i>
  <em>我是倾斜2</em>
  """
  # html里是不区分大小写
  # （1）给正则里面匹配的 加上圆括号 会将括号里面的内容进行 单独的返回
  res = re.findall("(<a href=\"http://www\.(.*?)\.com\">(.*?)</a>)",myStr) #[('<a href="http://www.baidu.com">百度</a>', 'baidu', '百度')]
  
  # 括号的区别
  res = re.findall("<a href=\"http://www\..*?\.com\">.*?</a>",myStr) #['<a href="http://www.baidu.com">百度</a>']
  
  #(2) 不区分大小写的匹配
  res = re.findall("<a href=\"http://www\..*?\.com\">.*?</a>",myStr,re.I) #['<a href="http://www.baidu.com">百度</a>', '<A href="http://www.taobao.com">淘宝</A>']
  res = re.findall("<[aA] href=\"http://www\..*?\.com\">.*?</[aA]>",myStr) #['<a href="http://www.baidu.com">百度</a>']
  # (3) 使.支持换行匹配
  res = re.findall("<a href="http://www..?.com">.?</a>",myStr,re.S) #
  # (4) 支持换行 支持不区分大小写匹配
  res = re.findall("<a href="http://www..?.com">.?</a>",myStr,re.S|re.I) #
  print(res)
  ```


### 4、finditer()函数

- 原型

  ```
  def finditer(pattern, string, flags=0)
  ```

- 功能

  与findall()类似，返回一个迭代器

- 参数

  | 参数    | 说明                                 |
  | ------- | ------------------------------------ |
  | pattern | 匹配的正则表达式(一种字符串的模式)   |
  | string  | 要匹配的字符串                       |
  | flags   | 标识位，用于控制正则表达式的匹配方式 |

- 代码

  ```python
  import re
  
  res = re.finditer('\w', '12hsakda1')
  print(res)
  print(next(res))
  
  for i in res:
      print(i)
  ```


### 5、split()函数

+ 作用：切割字符串

+ 原型：

  ```
  def split(patter, string, maxsplit=0, flags=0)
  ```

+ 参数

  pattern   正则表达式

  string      要拆分的字符串

  maxsplit   最大拆分次数  默认拆分全部

  flags          修正符

+ 示例

  ```python
  import re
  myStr = "asdas\rd&a\ts12d\n*a3sd@a_1sd"
  #通过特殊字符 对其进行拆分 成列表
  res = re.split("[^a-z]",myStr)
  res = re.split("\W",myStr)
  ```

### 6、修正符

+ 作用

  对正则进行修正

+ 使用

  search/match/findall/finditer 等函数 flags参数的使用

+ 修正符

  re.I   不区分大小写匹配

  re.S    使.可以匹配换行符   匹配任意字符

+ 使用

  re.I

  ```python
  print(re.findall('[a-z]','AaBb'))
  print(re.findall('[a-z]','AaBb', flags=re.I))
  ```

  re.S

  ```python
  print(re.findall('<b>.*?</b>','<b>b标签</b>'))
  print(re.findall('<b>.*?</b>','<b>b标\n签</b>', flags=re.S))
  ```

## 四、正则高级

### 1、分组&起名称

- 概念

  处理简单的判断是否匹配之外，正则表达式还有提取子串的功能，用()表示的就是要提取的分组

- 代码

  ```python
  #给当前匹配到的结果起别名
  s = '3G4HFD567'
  re.match("(?P<value>\d+)",s)
  print(x.group(0))
  print(x.group('value'))
  ```

- 说明

  - 正则表达式中定义了组，就可以在Match对象上用group()方法提取出子串来
  - group(0)永远是原始字符串，group(1)、group(2)……表示第1、2、……个子串

### 2、编译

- 概念

  当在python中使用正则表达式时，re模块会做两件事，一件是编译正则表达式，如果表达式的字符串本身不合法，会报错。另一件是用编译好的正则表达式提取匹配字符串

- 编译优点

  如果一个正则表达式要使用几千遍，每一次都会编译，出于效率的考虑进行正则表达式的编译，就不需要每次都编译了，节省了编译的时间，从而提升效率

- compile()函数

  - 原型

    ```
    def compile(pattern, flags=0)
    ```

  - 作用

    将pattern模式编译成正则对象

  - 参数

    | 参数    | 说明                                 |
    | ------- | ------------------------------------ |
    | pattern | 匹配的正则表达式(一种字符串的模式)   |
    | flags   | 标识位，用于控制正则表达式的匹配方式 |

  - flags

    | 值   | 说明                            |
    | ---- | ------------------------------- |
    | re.I | 是匹配对大小写不敏感            |
    | re.S | 使.匹配包括换行符在内的所有字符 |

  - 返回值

    编译好的正则对象

  - 示例

    ```python
    import re
    
    re_phone = re.compile(r"(0\d{2,3}-\d{7,8})")
    print(re_phone, type(re_phone))
    ```

- 编译后其他方法的使用

  原型

  ```
  def match(self, string, pos=0, endpos=-1)
  def search(self, string, pos=0, endpos=-1)
  def findall(self, string, pos=0, endpos=-1)
  def finditer(self, string, pos=0, endpos=-1)
  ```

  参数

  | 参数   | 说明                      |
  | ------ | ------------------------- |
  | string | 待匹配的字符串            |
  | pos    | 从string字符串pos下标开始 |
  | endpos | 结束下标                  |

  示例

  ```python
  s1 = "lucky's phone is 010-88888888"
  s2 = "kaige's phone is 010-99999999"
  ret1 = re_phone.search(s1)
  print(ret1, ret1.group(1))
  ret2 = re_phone.search(s2)
  print(ret2, ret2.group(1))
  ```

### 3、贪婪与非贪婪

+ 贪婪模式  

  贪婪概念：匹配尽可能多的字符

  + .+  匹配换行符以外的字符至少一次
  + .*  匹配换行符以外的字符任意次

  实例

  ```python
  res = re.search('<b>.+</b>', '<b></b><b>b标签</b>')
  res = re.search('<b>.*</b>', '<b>b标签</b><b>b标签</b><b>b标签</b><b>b标签</b>')
  ```

+ 非贪婪模式

  非贪婪概念：尽可能少的匹配称为非贪婪匹配，*?、+?即可

+ .+?  匹配换行符以外的字符至少一次  拒绝贪婪

  + .*?   匹配换行符以外的字符任意次      拒绝贪婪

  实例

  ```python
  res = re.search('<b>.+?</b>', '<b>b标签</b><b>b标签</b>')
  res = re.search('<b>.*?</b>', '<b>b标签</b><b>b标签</b><b>b标签</b><b>b标签</b>')
  ```



练习：

1. 中信证券

   ```
   # 将产品名称管理人  风险评级 认购金额 起点公示  信息  全部抓到
   ```

2. 练习抓取股票  每一行数据

3. 豆瓣

   抓取标题和图片img标签

# 第三节 beautifulsoup

## 一、beautifulsoup的简单使用

简单来说，Beautiful Soup是python的一个库，最主要的功能是从网页抓取数据。官方解释如下：

Beautiful Soup提供一些简单的、python式的函数用来处理导航、搜索、修改分析树等功能。
它是一个工具箱，通过解析文档为用户提供需要抓取的数据，因为简单，所以不需要多少代码就可以写出一个完整的应用程序。

### 1、安装

```
pip install beautifulsoup4
```

#### **1.1解析器**

Beautiful Soup支持Python标准库中的HTML解析器,还支持一些第三方的解析器，如果我们不安装它，则 Python 会使用 Python默认的解析器，lxml 解析器更加强大，速度更快，推荐安装。

```python
pip install lxml
```

#### 1.2 解析器对比　

[官网文档](http://beautifulsoup.readthedocs.io/zh_CN/latest/)

### 2、快速开始

下面的一段HTML代码将作为例子被多次用到.这是 *爱丽丝梦游仙境的* 的一段内容(以后内容中简称为 *爱丽丝* 的文档):

```python
html_doc = """
<html><head><title>The Dormouse's story</title></head>
<body>
<p class="title"><b>The Dormouse's story</b></p>

<p class="story">Once upon a time there were three little sisters; and their names were
<a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>,
<a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
<a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
and they lived at the bottom of a well.</p>

<p class="story">...</p>
"""
```

使用BeautifulSoup解析这段代码,能够得到一个 `BeautifulSoup` 的对象,并能按照标准的缩进格式的结构输出:

```python
from bs4 import BeautifulSoup
soup = BeautifulSoup(html_doc, 'lxml')
# html进行美化
print(soup.prettify())
```

匹配代码

```python
<html>
 <head>
  <title>
   The Dormouse's story
  </title>
 </head>
 <body>
  <p class="title">
   <b>
    The Dormouse's story
   </b>
  </p>
  <p class="story">
   Once upon a time there were three little sisters; and their names were
   <a class="sister" href="http://example.com/elsie" id="link1">
    Elsie
   </a>
   ,
   <a class="sister" href="http://example.com/lacie" id="link2">
    Lacie
   </a>
   and
   <a class="sister" href="http://example.com/tillie" id="link3">
    Tillie
   </a>
   ;
and they lived at the bottom of a well.
  </p>
  <p class="story">
   ...
  </p>
 </body>
</html>
```

几个简单的浏览结构化数据的方法:

```python
soup.title  # 获取标签title
# <title>The Dormouse's story</title>

soup.title.name   # 获取标签名称
# 'title'

soup.title.string   # 获取标签title内的内容
# 'The Dormouse's story'

soup.title.parent  # 获取父级标签

soup.title.parent.name  # 获取父级标签名称
# 'head'

soup.p
# <p class="title"><b>The Dormouse's story</b></p>

soup.p['class']  # 获取p的class属性值
# 'title'

soup.a
# <a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>

soup.find_all('a')
# [<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
#  <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>,
#  <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>]

soup.find(id="link3")  # 获取id为link3的标签
# <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>
```

从文档中找到所有\<a>标签的链接:

```python
for link in soup.find_all('a'):
    print(link.get('href'))
    # http://example.com/elsie
    # http://example.com/lacie
    # http://example.com/tillie
```

从文档中获取所有文字内容:

```python
print(soup.get_text())
```

### 3、如何使用

将一段文档传入BeautifulSoup 的构造方法,就能得到一个文档的对象, 可以传入一段字符串或一个文件句柄.

```python
from bs4 import BeautifulSoup

soup = BeautifulSoup(open("index.html"))

soup = BeautifulSoup("<html>data</html>", 'lxml')
```

然后,Beautiful Soup选择最合适的解析器来解析这段文档,如果手动指定解析器那么Beautiful Soup会选择指定的解析器来解析文档。

## 二、beautifulsoup的遍历文档树

还拿”爱丽丝梦游仙境”的文档来做例子:

```python
html_doc = """
<html><head><title>The Dormouse's story</title></head>
    <body>
<p class="title"><b>The Dormouse's story</b></p>

<p class="story">Once upon a time there were three little sisters; and their names were
<a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>,
<a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
<a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
and they lived at the bottom of a well.</p>

<p class="story">...</p>
"""

from bs4 import BeautifulSoup
# lxml和html.parser解析的有时候会根据html是否完整而有解析不同的问题，需要注意
soup = BeautifulSoup(html_doc, 'html.parser')
```

通过这段例子来演示怎样从文档的一段内容找到另一段内容

### 1、子节点

一个Tag可能包含多个字符串或其它的Tag,这些都是这个Tag的子节点.Beautiful Soup提供了许多操作和遍历子节点的属性.

注意: Beautiful Soup中字符串节点不支持这些属性,因为字符串没有子节点。

#### 1.1 .contents

tag的 `.contents` 属性可以将tag的子节点以列表的方式输出:

```python
head_tag = soup.head
head_tag
# <head><title>The Dormouse's story</title></head>

head_tag.contents
[<title>The Dormouse's story</title>]

title_tag = head_tag.contents[0]
title_tag
# <title>The Dormouse's story</title>
title_tag.contents
# [u'The Dormouse's story']
```

字符串没有 `.contents` 属性,因为字符串没有子节点:

```python
text = title_tag.contents[0]
text.contents
# AttributeError: 'NavigableString' object has no attribute 'contents'
```



### 2、 节点内容

#### 2.1 .string

如果tag只有一个 `NavigableString` 类型子节点,那么这个tag可以使用 `.string` 得到子节点。如果一个tag仅有一个子节点,那么这个tag也可以使用 `.string` 方法,输出结果与当前唯一子节点的 `.string` 结果相同。

通俗点说就是：如果一个标签里面没有标签了，那么 .string 就会返回标签里面的内容。如果标签里面只有唯一的一个标签了，那么 .string 也会返回最里面的内容。例如：

```python
print (soup.head.string)
#The Dormouse's story
# <title><b>The Dormouse's story</b></title>
print (soup.title.string)
#The Dormouse's story
```

如果tag包含了多个子节点,tag就无法确定，string 方法应该调用哪个子节点的内容, .string 的输出结果是 None

```python
print (soup.html.string)
#None
```

#### 2.2 .text

如果tag包含了多个子节点, text则会返回内部所有文本内容

```
print (soup.html.text)
```

**注意：**

strings和text都可以返回所有文本内容  

区别：text返回内容为字符串类型  strings为生成器generator

### 3、 **多个内容**

```
.strings .stripped_strings 属性
```

#### 3.1**.strings**

获取多个内容，不过需要遍历获取，比如下面的例子：

```python
for string in soup.strings:
    print(repr(string))
    
    
'''
  '\n'
"The Dormouse's story"
'\n'
'\n'
"The Dormouse's story"
'\n'
'Once upon a time there were three little sisters; and their names were\n'
'Elsie'
',\n'
'Lacie'
' and\n'
'Tillie'
';\nand they lived at the bottom of a well.'
'\n'
'...'
'\n'  
    
'''    
```

#### 3.2 **.stripped_strings** 

输出的字符串中可能包含了很多空格或空行,使用 `.stripped_strings` 可以去除多余空白内容

```python
for string in soup.stripped_strings:
    print(repr(string))


'''

"The Dormouse's story"
"The Dormouse's story"
'Once upon a time there were three little sisters; and their names were'
'Elsie'
','
'Lacie'
'and'
'Tillie'
';\nand they lived at the bottom of a well.'
'...'

'''
```

### 4、 父节点

继续分析文档树,每个tag或字符串都有父节点:被包含在某个tag中

#### 4.1 .parent

通过 `.parent` 属性来获取某个元素的父节点.在例子“爱丽丝”的文档中,\<head>标签是\<title>标签的父节点:

```python
title_tag = soup.title
title_tag
# <title>The Dormouse's story</title>
title_tag.parent
# <head><title>The Dormouse's story</title></head>
```

文档的顶层节点比如\<html>的父节点是 `BeautifulSoup` 对象:

```python
html_tag = soup.html
type(html_tag.parent)
# <class 'bs4.BeautifulSoup'>
```



## 三、beautifulsoup的搜索文档树

### 1、find_all

```python
find_all( name , attrs , recursive , string , **kwargs )
```

`find_all()` 方法搜索当前tag的所有tag子节点,并判断是否符合过滤器的条件:

```python
soup.find_all("title")
# [<title>The Dormouse's story</title>]

soup.find_all("p", "title")
# [<p class="title"><b>The Dormouse's story</b></p>]

soup.find_all("a")
# [<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
#  <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>,
#  <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>]

soup.find_all(id="link2")
# [<a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>]

import re
# 模糊查询 包含sisters的就可以
soup.find(string=re.compile("sisters"))
# 'Once upon a time there were three little sisters; and their names were\n'
``` 

有几个方法很相似,还有几个方法是新的,参数中的 `string` 和 `id` 是什么含义? 为什么 `find_all("p", "title")` 返回的是CSS Class为”title”的\<p>标签? 我们来仔细看一下 `find_all()` 的参数.

#### 1.1 name 参数

`name` 参数可以查找所有名字为 `name` 的tag,字符串对象会被自动忽略掉.

简单的用法如下:

```python
soup.find_all("title")
# [<title>The Dormouse's story</title>]
```

搜索 `name` 参数的值可以使任一类型的 过滤器 ,字符串,正则表达式,列表,方法或是 `True` .

**<1> 传字符串**

最简单的过滤器是字符串.在搜索方法中传入一个字符串参数,Beautiful Soup会查找与字符串完整匹配的内容,下面的例子用于查找文档中所有的`<b>`标签

```python
soup.find_all('b')
# [<b>The Dormouse's story</b>]
```

**<2> 传正则表达式**

如果传入正则表达式作为参数,Beautiful Soup会通过正则表达式的 `match()` 来匹配内容.下面例子中找出所有以b开头的标签,这表示\<body>和\<b>标签都应该被找到

```python
import re
for tag in soup.find_all(re.compile("^b")):
    print(tag.name)
# body
# b
```

**<3> 传列表**

如果传入列表参数,Beautiful Soup会将与列表中任一元素匹配的内容返回.下面代码找到文档中所有\<a>标签和\<b>标签

```python
soup.find_all(["a", "b"])
# [<b>The Dormouse's story</b>,
#  <a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
#  <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>,
#  <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>]
```



#### 1.2 **keyword 参数**

如果一个指定名字的参数不是搜索内置的参数名,搜索时会把该参数当作指定名字tag的属性来搜索,如果包含一个名字为 `id` 的参数,Beautiful Soup会搜索每个tag的”id”属性.

```python
soup.find_all(id='link2')
# [<a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>]

import re
# 超链接包含elsie标签
print(soup.find_all(href=re.compile("elsie")))
# [<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>]
# 以The作为开头的字符串
print(soup.find_all(text=re.compile("^The"))) 
# ["The Dormouse's story", "The Dormouse's story"]
# class选择器包含st的节点
print(soup.find_all(class_=re.compile("st")))
```

搜索指定名字的属性时可以使用的参数值包括 字符串 , 正则表达式 , 列表, True .

下面的例子在文档树中查找所有包含 `id` 属性的tag,无论 `id` 的值是什么:

```python
soup.find_all(id=True)
# [<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
#  <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>,
#  <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>]
```

使用多个指定名字的参数可以同时过滤tag的多个属性:

```python
soup.find_all(href=re.compile("elsie"), id='link1')
# [<a class="sister" href="http://example.com/elsie" id="link1">three</a>]
```

在这里我们想用 class 过滤，不过 class 是 python 的关键词，这怎么办？加个下划线就可以

```python
print(soup.find_all("a", class_="sister"))

'''
[<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
<a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>,
<a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>
]

'''
```

通过 `find_all()` 方法的 `attrs` 参数定义一个字典参数来搜索包含特殊属性的tag:

```python
data_soup.find_all(attrs={"data-foo": "value"})
# [<div data-foo="value">foo!</div>]
```

注意：如何查看条件id和class同时存在时的写法

```python
print(soup.find_all('b', class_="story", id="x"))
print(soup.find_all('b', attrs={"class":"story", "id":"x"}))
```

#### 1.3  **text 参数**

通过 `text` 参数可以搜搜文档中的字符串内容.与 `name` 参数的可选值一样, `text` 参数接受 字符串 , 正则表达式 , 列表, True

```python
import re

print(soup.find_all(text="Elsie"))
# ['Elsie']

print(soup.find_all(text=["Tillie", "Elsie", "Lacie"]))
# ['Elsie', 'Lacie', 'Tillie']

# 只要包含Dormouse就可以
print(soup.find_all(text=re.compile("Dormouse")))
# ["The Dormouse's story", "The Dormouse's story"]
```

#### 1.4 **limit 参数**

`find_all()` 方法返回全部的搜索结构,如果文档树很大那么搜索会很慢.如果我们不需要全部结果,可以使用 `limit` 参数限制返回结果的数量.效果与SQL中的limit关键字类似,当搜索到的结果数量达到 `limit` 的限制时,就停止搜索返回结果.

```python
print(soup.find_all("a",limit=2))
print(soup.find_all("a")[0:2])

'''
[<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>, 
<a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>]
'''
```

### 2、find()

```python
find( name , attrs , recursive , string , **kwargs )
```

`find_all()` 方法将返回文档中符合条件的所有tag,尽管有时候我们只想得到一个结果.比如文档中只有一个\<body>标签,那么使用 `find_all()` 方法来查找\<body>标签就不太合适, 使用 `find_all` 方法并设置 `limit=1` 参数不如直接使用 `find()` 方法.下面两行代码是等价的:

```python
soup.find_all('title', limit=1)
# [<title>The Dormouse's story</title>]

soup.find('title')
# <title>The Dormouse's story</title>
```

唯一的区别是 `find_all()` 方法的返回结果是值包含一个元素的列表,而 `find()` 方法直接返回结果.

`find_all()` 方法没有找到目标是返回空列表, `find()` 方法找不到目标时,返回 `None` .

```python
print(soup.find("nosuchtag"))
# None
```

`soup.head.title` 是 tag的名字 方法的简写.这个简写的原理就是多次调用当前tag的 `find()` 方法:

```python
soup.head.title
# <title>The Dormouse's story</title>

soup.find("head").find("title")
# <title>The Dormouse's story</title>
```



## 四、beautifulsoup的css选择器

我们在写 CSS 时，标签名不加任何修饰，类名前加点，id名前加 #，在这里我们也可以利用类似的方法来筛选元素，用到的方法是 **soup.select()，**返回类型是 **list**

### 1、通过标签名查找

```python
print(soup.select("title"))  #[<title>The Dormouse's story</title>]
print(soup.select("b"))      #[<b>The Dormouse's story</b>]
```

### 2、通过类名查找

```python
print(soup.select(".sister")) 

'''
[<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>, 
<a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>, 
<a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>]

'''
```

### 3、id名查找

```python
print(soup.select("#link1"))
# [<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>]
```

### 4、组合查找

组合查找即和写 class 文件时，标签名与类名、id名进行的组合原理是一样的，例如查找 p 标签中，id 等于 link1的内容，二者需要用空格分开

```python
print(soup.select("p #link2"))

#[<a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>]
```

直接子标签查找

```python
print(soup.select("p > #link2"))
# [<a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>]
```

查找既有class也有id选择器的标签

```
a_string = soup.select(".story#test")
```

查找有多个class选择器的标签

```
a_string = soup.select(".story.test")
```

查找有多个class选择器和一个id选择器的标签

```
a_string = soup.select(".story.test#book")
```

### 5、属性查找

查找时还可以加入属性元素，属性需要用中括号括起来，注意属性和标签属于同一节点，所以中间不能加空格，否则会无法匹配到。

```python
print(soup.select("a[href='http://example.com/tillie']"))
#[<a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>]
```

select 方法返回的结果都是列表形式，可以遍历形式输出，然后用 get_text() 方法来获取它的内容：

```python
for title in soup.select('a'):
    print (title.get_text())

'''
Elsie
Lacie
Tillie
'''
```



