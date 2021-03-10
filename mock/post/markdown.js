const md_1 = `
# Date

## 定义

> 使用 **Date** 的构造函数

* 可以使用 **Date.parse()** 和 **Date.UTC()** 来作为参数传入 Date的构造函数中
* parse接受的是特定格式的日期字符串，不同的浏览器、不同的时区格式也不同，若字符串不能表示为日期则返回NaN
* UTC的参数是年、月、日、时等等类推，年月两个参数必须指定，其余不指定则默认为0。**另外，参数月份是从0开始至11**

\`\`\`javascript
var a = new Date();
var b = new Date(Date.parse("May 17,2020"));
var c = new Date(Date.UTC(2020,5,27,17,58,37));
console.log(a);//Sat Jun 27 2020 11:06:27 GMT+0800 (中国标准时间)
console.log(b);//Sun May 17 2020 00:00:00 GMT+0800 (中国标准时间)
console.log(c);//Sun Jun 28 2020 01:58:37 GMT+0800 (中国标准时间)
\`\`\`

> 使用**Date.now()**来简化Date分析代码的时间

\`\`\`javascript
var a = Date.now();
setTimeout(()=>{
  var b = Date.now();
  console.log(b-a);//3001
},3000);
console.log(a);//1593228072462
\`\`\`

## 继承的方法

> **toString()** 和 **toLocalString()** 方法

他们会根据不同浏览器不同时区格式返回表示日期的字符串。

## 日期格式化

常用的几种方式，以实例记忆

* **toDateString()** 周几、年月日
* **toTimeString()** 时分秒、时区
* **toLocaleDateString()** 特定格式的年月日、周几
* **toLocaleTimeString()** 特定格式的时分秒
* **toUTCString()** 特定格式UTC日期

\`\`\`javascript
var a = new Date();
console.log(a.toDateString());//Sat Jun 27 2020
console.log(a.toTimeString());//11:36:51 GMT+0800 (中国标准时间)
console.log(a.toLocaleDateString());//2020/6/27
console.log(a.toLocaleTimeString());//上午11:38:36
console.log(a.toUTCString());//Sat, 27 Jun 2020 03:39:31 GMT
\`\`\`

## 日期、时间常用方法

 * getFullYear() setFullYear() 传入四位数
 * getMonth() setMonth() 传入值大于0，超过11则增减年份
 * getDate() setDate() 传入值1~31，超过则增加月份
 * getHours() setHours() 传入0~23，超过增加天数
 * getMinutes() setMinutes() 传入0~59，超过增加小时数
 * getSeconds() setSeconds() 传入0~59，超过增加分钟数

> **编写一个倒计时**

\`\`\`javascript
var a = new Date("2020/9/1 08:35:37");
var end = a.getTime();
function sumTime() {
  var last = Date.now();
  var days, dayRm, hours, hourRm, mins, minRm, secs;
  days = (end-last)/(3600*1000*24);
  dayRm = (end-last)%(3600*1000*24);
  hours = dayRm/(3600*1000);
  hourRm = dayRm%(3600*1000);
  mins = hourRm/(60*1000);
  minRm = hourRm%(60*1000);
  secs = minRm/(1000);
  console.log(parseInt(days) + ' 天 ' + parseInt(hours) + ' 时 ' + parseInt(mins) + ' 分 ' + parseInt(secs) +' 秒 ');
}
console.log('距开学还有\n');
setInterval(()=> {
  sumTime();
},1000);
\`\`\`

# RegExp

## 定义

> 正则表达式,可使用字面量也可以使用构造函数。不一样的是**字面量始终是共享一个RegExp实例，而构造函数创建的每一个都是新实例，但是当重复进行相同的查找时就会出现问题,所以ES5之后规定，字面量模式也要像构造函数一样创建新的实例**

> **/ pattern / flags**

* pattern 又称为模式，包含字符类、限定符、分组、向前查找及反向应用
* flags 匹配模式

\`\`\`javascript
var reg = /great/g;
var regs = new RegExp("great","g");
\`\`\`
紧跟表达式后的是匹配模式标志

* g -> global全局模式，应用于所有字符串
* i -> case-insensitive模式，忽略大小写
* m -> multiline 模式，搜完一行还会继续下一行

## 实例属性

* global ignoreCase multiline

> 这三个属性可以测试模式 pattern 是否是对应模式 例如**pattern.global**

* lastIndex

> 表示开始搜索的下一个匹配项字符位置，从0开始

## 常用模式的符号

### 元字符

* \d 匹配数字，\D 匹配非数字
* \w 匹配字母、数字、汉字、下划线，\W 前面的非情况
* \s 匹配任意空白符，包括回车、制表、换行，\W 匹配任意非空白符
* . 号匹配空白符以外的所有字符
* [] 匹配方括号中所有字符，[^] 前面的非情况

### 连接符

> 符号 -，在方括号中使用，指定范围，n~m，[n-m]，一般指数字和字母的范围

### 限定符

> 规定指定的字符出现的次数

* + 重复1或者更多次，* 重复0或者更多次，? 重复0或1次
* {n}，重复 n 次，{n,} 重复 n 或者更多次，{n,m} 重复n到m次

### 定位符

* ^ 限定开始字符
* $ 限定结尾字符
* \b 限定边界字符，规定边界以什么分割，比如空格，通常用来匹配单词

### 常用转义字符

> $、(、)、*、+、.、[、]、?、\、/、^、{、}、|

> 这一类字符不转义就会被当做各种限定、连接、定位符处理

### 分组符以及选择符

* (abc) 表示匹配整一个 abc
* [abc] 表示匹配a、b、c中的一个
* | 为选择符，表示或 (yes|no) yes或no

## 实例方法

### exec()

> 接受一个参数，即要搜索匹配的字符串，该方法返回一个Array实例，该实例包括两个属性 index 和 input，index 表示匹配项在字符串中的位置，input 表示正则表达式应用到的字符串。

\`\`\`javascript
var reg = /.+\.(jpg|png|text)/g;
var result = reg.exec("great.png");
console.log(result.index);//0
console.log(result[0])//great.png
console.log(result.lastIndex);//undefined
\`\`\`

### test()

> 接受一个字符串参数，模式与其匹配返回 true，否则为 false

\`\`\`javascript
var reg = /.+\.(jpg|png|text)/g;
var result = reg.test("great.png");
console.log(result);//true
\`\`\`

## RegExp的属性

> **opera不支持 input，lastMatch，lastParen，multiline**
> **Internet Explorer不支持multiline**

## 编写常用的手机号、邮箱号的筛选

\`\`\`javascript
var phone = /1[0-9]{10}/g
console.log(phone.test("13638707775"));//true
console.log(phone.test("23638707775"));//false
console.log(phone.test("1363870"));//false

var email = /[a-zA-Z0-9_]+@[0-9a-zA-Z]+\.(com|net)/g //邮箱登录名支持字母、数字、下划线
console.log(email.test("grea_12tiga@126.com"));//true
console.log(email.test("app@123.net"));//true
console.log(email.test("app%@123.net"));//false
console.log(email.test("app@123.54"));//false
\`\`\`
`;

const md_2 = `
# 前端小白搭建博客的艰难历程

## 一、创建个人博客的初衷

### 1、偶然的机会入坑前端

作为一名计算机专业的学生，大一大二浑浑噩噩的过去了，专业知识教的很多很杂，每一方面都学得很浅，不知道以后能干什么。

大三开学的一次数据库课程设计，想着能不能将数据更好的展示出来，所以了解后用了web页面这种方式。

就这样第一次知道Html、css、js，当时是java web做的。

后来展示成果的时候，看到同学做的商业级别的前端项目，才发现自己只是刚触碰到前端的冰山一角而已，原来这个方向有这么多东西。

从这以后我便慢慢喜欢上了前端，可能小时候喜欢画画的原因吧，比起后端，能展示丰富内容的前端更能让我提起兴趣，虽然算法，数据结构，AI
也很有趣，不过我觉得前端更适合我一点哈哈。

### 2、学习了Vue

在2020这个寒假里，我根据同学的建议学习了前端框架Vue，之后网上冲浪看到了许多大佬做的博客，突然来了兴趣，又加之这个特殊寒假的原因待在家里，所以闲着也是闲着，做一个自己的专属博客有何不可？刚好将学到的知识应用到实际中。

## 二、选择了自行搭建

### 1、了解到许多方式

> 1. 借助各种博客框架来搭建，比如jekyll,Hexo,Django,Vuepress等等
> 2. 自行搭建，前端代码生成静态文件，甚至还有后端和数据库，然后部署到服务器
> 3. 直接在CSDN、博客园、简书、知乎上发布，当然这不算是搭建了，应该算写博客

### 2、最终选择自行搭建

首先吧，作为一名cs学生，还是做点有难度的吧，所以直接借助博客平台发布还是算了哈哈。

利用博客框架，可以省去开发环境的部署，逻辑代码的编写与测试，以及最后的服务器部署。因为你只要按照博客框架手册配置文件和参数就好了，页面样式也有许多现成的，这样就可以把注意力放在写作上了。我一开始也想这样，但是想想自己也是为了练练Vue，所以就暂时放弃了。

自行搭建需要先在自己电脑上部署开发环境，要选择好前端语言，如果是动态博客则还要选择好后端语言和数据库，之后在本地开发测试，完成之后还要购买服务器、域名、备案，最后部署上线运行无误就算是成功了。

我选择了自行搭建，虽然花费了许多时间，但是功夫不负有心人，部署了本地环境，编写了前后端代码，购买了域名、服务器、还备了案，这些令人头疼的问题最终都解决了。

在浏览器输入自己的域名看到自己的网站，别说有多开心了。

今后我也要继续优化，完善功能，给大家展现一个更好的博客。

![找不到图片了](https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1650073678,493253519&fm=26&gp=0.jpg)

`


module.exports = {
  md_1,
  md_2
}