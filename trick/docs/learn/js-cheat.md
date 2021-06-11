# JavaScript出招表
文章顺序参考JavaScript高级程序设计，不包含DOM、BOM等浏览器扩展的对象
文章内会将有功能关联的方法/构造函数/对象等放在临近的位置
后续考虑使用索引进行说明

本文代码中会提供部分示例以说明其使用方法，如果有不理解的或更好的优化建议，请在下方评论
## 原始数据类型
### Symbol
```js
Symbol // 符号，表示唯一，Symbol('foo') != Symbol('foo')，typeof检测symbol类型为 'symbol' 
Symbol.for() // let a = Symbol.for('foo') let b = Symbol.for('foo')  =>  a === b
Symbol.keyFor() // let a = Symbol.for('foo') Symbol.keyFor(a) === 'foo'
Symbol.asyncIterator // 该方法返回对象默认的AsyncInterator,由for-await-of使用, 用来实现异步迭代器API的函数
Symbol.hasInstance // 等同于instanceof,只是使用方式略有区别， f instance Foo => Foo[Symbol.instance](f)
Symbol.isConcatSpreadable // 修改concat的行为,Symbol.isConcatSpreadable = false时, 会将concat传入的参数以原始对象的形式添加到数组末尾.
Symbol.iterator // 该方法返回对象默认的迭代器,由for-of使用
Symbol.match // 调用String.prototype.match()会调用Symbol.match为键的方法 [Symbol.match](target) { return target.includes('foo') }
Symbol.replace // 使用方法同上,替换String.prototype.repalace()
Symbol.search // 对应String.prototype.search() 使用方法同上
Symbol.species // 一个函数值，该函数作为创建派生对象的构造函数
Symbol.split // 通match，[Symbol.split](target)
Symbol.toPrimitive // 一个方法，该方法将对象转换为相应的原始值，可以覆盖原始类型转换的表现，[Symbol.toPrimitive](hint) { if (hint === 'number') return hint + 1 }
Symbol.toStringTag // 使用toSting获取对象标识时，会获取Symbol.toStringTag指定的实例标识符 class Bar { this[Symbol.toStringTag] = 'Bar' } let bar = new Bar() bar.toString() -> Bar
```

### Object
```js
Object.getOwnPropertyNames() // 只返回常规属性数组
Object.getOwnPropertySymbols() // 只返回字符属性数组
Object.getOwnPropertyDescriptors() // 会返回同时包含常规和符号属性描述符的对象

// Object实例默认方法
// 每个Object实例都有如下属性和方法
const obj = new Object()
obj.constructor // 指向构造函数
obj.hasOwnProperty(propertyName) // 用于判断当前对象实例上是否存在给定的属性
obj.isPrototypeof(object) // 用于判断当前对象是否为另一个对象的原型
obj.propertyIsEnumerable(propertyName) // 用于判断当前对象是否可以使用for-in语句枚举
obj.toLocaleString() // 返回对象的字符串表示，该字符串反应对象所在本地化执行环境
obj.toString() // 返回对象的字符串表示
obj.valueOf() // 返回对象对应的字符串、数值、或布尔值表示

// 操作符
(3 ** 2) // 9 , 指数操作符，等同于Math.pow(3, 2)
逗号操作符：let num = (1, 2, 3, 4, 5) // num的值为0，即返回表达式中最后一个值
```
## 基本引用类型
### Date
```js
Date.parse() /**接收一个表示日期的字符串参数
* 月/日/年 如 5/23/2019
* 月名 日， 年 如 May 23, 2019
* 周 月名 日 年 时：分：秒 时区 如：Tue May 23 2019 00:00:00 GMT-0700
* ISO 8061扩展格式 YYYY-MM-DDTHH:mm:ss.sssZ 如 2019-05-23T00:00:00 （只适用于兼容ES5的）
* 如果不符合日期格式，返回NaN
* new Date 会在后台调用Date.parse() 即 Date.parse(5/23/2019) === new Date(5/23/2019)
*/
Date.UTC() /** 等同于Date.parse()，只是参数不同
* 参数：年、零起点月（1月->0）、日（1-31）、时（0-23）、分、秒、毫秒
* 其中只有年月是必须的，即可Date.UTC(2000, 8)，同样new Date()会调用该方法
*/
Date.now() // 返回当前时间
const date = new Date()
date.toLocaleString() // 返回与浏览器运行的本地环境一致的日期和时间
date.toString() // 返回带时区信息的时间
date.valueOf() // 返回日期的毫秒表示
date.toDateString() // 显示日期中的周几、月、日、年
date.toTimeString() // 显示日期中的时、分、秒和时区
date.toLocaleDateString() // 显示日期中的周几、月、日、年，格式特定于实现和地区
date.toLocaleTimeString() // 显示日期中的时、分、秒和时区
date.toUTCString() // 显示完整的UTC日期

Date.prototype.getDate()// 根据本地时间返回指定日期对象的月份中的第几天（1-31）。
Date.prototype.getDay()// 根据本地时间返回指定日期对象的星期中的第几天（0-6）。
Date.prototype.getFullYear() //根据本地时间返回指定日期对象的年份（四位数年份时返回四位数字）。
Date.prototype.getHours() // 根据本地时间返回指定日期对象的小时（0-23）。
Date.prototype.getMilliseconds() // 根据本地时间返回指定日期对象的毫秒（0-999）。
Date.prototype.getMinutes() // 根据本地时间返回指定日期对象的分钟（0-59）。
Date.prototype.getMonth() // 根据本地时间返回指定日期对象的月份（0-11）。
Date.prototype.getSeconds() // 根据本地时间返回指定日期对象的秒数（0-59）。
Date.prototype.getTime() // 返回从1970-1-1 00:00:00 UTC（协调世界时）到该日期经过的毫秒数，对于1970-1-1 00:00:00 UTC之前的时间返回负值。
Date.prototype.getTimezoneOffset() // 返回当前时区的时区偏移。
Date.prototype.getUTCDate() // 根据世界时返回特定日期对象一个月的第几天（1-31）.
Date.prototype.getUTCDay() // 根据世界时返回特定日期对象一个星期的第几天（0-6）.
Date.prototype.getUTCFullYear() // 根据世界时返回特定日期对象所在的年份（4位数）.
Date.prototype.getUTCHours() // 根据世界时返回特定日期对象当前的小时（0-23）.
Date.prototype.getUTCMilliseconds() // 根据世界时返回特定日期对象的毫秒数（0-999）.
Date.prototype.getUTCMinutes() // 根据世界时返回特定日期对象的分钟数（0-59）.
Date.prototype.getUTCMonth() // 根据世界时返回特定日期对象的月份（0-11）.
Date.prototype.getUTCSeconds() // 根据世界时返回特定日期对象的秒数（0-59）.
Date.prototype.getYear() // 根据特定日期返回年份 (通常 2-3 位数). 使用 getFullYear()

Date.prototype.setDate() // 根据本地时间为指定的日期对象设置月份中的第几天。
Date.prototype.setFullYear() // 根据本地时间为指定日期对象设置完整年份（四位数年份是四个数字）。
Date.prototype.setHours() // 根据本地时间为指定日期对象设置小时数。
Date.prototype.setMilliseconds() // 根据本地时间为指定日期对象设置毫秒数。
Date.prototype.setMinutes() // 根据本地时间为指定日期对象设置分钟数。
Date.prototype.setMonth() // 根据本地时间为指定日期对象设置月份。
Date.prototype.setSeconds() // 根据本地时间为指定日期对象设置秒数。
Date.prototype.setTime() // 通过指定从 1970-1-1 00:00:00 UTC 开始经过的毫秒数来设置日期对象的时间，对于早于 1970-1-1 00:00:00 UTC的时间可使用负值。
Date.prototype.setUTCDate() // 根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。
Date.prototype.setUTCFullYear() // 根据世界时设置 Date 对象中的年份（四位数字）。
Date.prototype.setUTCHours() // 根据世界时设置 Date 对象中的小时 (0 ~ 23)。
Date.prototype.setUTCMilliseconds() // 根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。
Date.prototype.setUTCMinutes() // 根据世界时设置 Date 对象中的分钟 (0 ~ 59)。
Date.prototype.setUTCMonth() // 根据世界时设置 Date 对象中的月份 (0 ~ 11)。
Date.prototype.setUTCSeconds() // 根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。
Date.prototype.setYear()  // setYear() 方法用于设置年份。请使用 setFullYear() 方法代替。
```
### RegExp
```js

```
### Number
```js
let num = 99
num.toFixed(2) // 99.00 保留几位小数
num.toExponential(1) // 9e+9 科学计数法
num.toPrecision(3) // 显示几位数字  99.0
Number.isInteger(1.3) //判断一个数值是否是整数 false (ES6)
```
### String
string的每个字符由16个码元组成，charAt返回的就是指定位置的16个码元
```js
let message = 'abcdedf'
message.charAt(3) // d 返回指定位置的字符
message.charCodeAt(2) // 99 返回指定位置的码元值，c的码元值是99 == 0x63(16进制) 
message.charPointAt(2) // 返回指定位置码点
message.slice(start, end) // 返回子字符串，end之前的字符会被提取，所有负值转为对应索引
message.substr(start, count) // 返回子字符串，count提取字符的数量，不传则直到末尾，start负值转为索引，count转为0
message.substring(start, end)// 返回子字符串，end之前的字符会被提取，所有负值都转为0
message.indexOf(d, start) // 3 从头开始查找，第二个参数表示从start向后查找
message.lastIndexOf(d, end) // 5 从后面开始查找，第二个参数表示从end向前查找
message.startWith('abc') // true 判断是否由某字符串开头 (ES6)
message.includes('cde') // true
message.endWith('edf') // true 判断是否由某字符串结尾
message.trim() // 删除头尾空格
message.repeat(3) // 'abcdedfabcdedfabcdedf' 表示将字符串重复多少次
String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65) // 'abcde' 根据UTF-16码元创建字符
String.fromCodePoint() // 根据码点创建字符串

```
以下是一些冷门方法或函数的用法
```js
// Symbol.asyncIterator
class Emitter {
	constructor(max) {
		this.max = max
		this.asyncIdx = 0
	}
	async *[Symbol.asyncIterator] () {
		while(this.asyncIdx < this.max) {
			yield new Promise((resolve) => resolve(this.asyncIdx++))
		}
	}
}
async function asyncCount() {
	let emitter = new Emitter(5)
	for await (const x of emitter) {
		console.log(x)
	}
}
asyncCount() // 0 1 2 3 4
```
## 需要知道
### 内存管理
全局变量要手动解除引用，否则不会回收
```js
let a = new Object()
a = null
```
使用const，let可以更早的进行垃圾回收，因为块作用域的存在。
V8隐藏类，V8会对相同构造函数的实例使用相同的隐藏类，这会帮助你很好的优化你的代码
```js
function Animal(){
	this.name = 'cat'
}
let a1 = new Animal()
let a2 = new Animal()

a1.age = 12 // 这样会导致隐藏类不同，所以尽量不要后添加属性，可以再new时直接添加至实例
a1.name = null // 这样隐藏类也是相同的，所以可以将不用的属性设为null
```
### 内存泄漏
可能会造成内存泄漏的情况
1. 没有声明的全局变量，如下，name会被定义到window，window不被销毁会一直存在，可以用let，const，var声明name解决
```js
function setName () {
	name = 'JAKE'
}
```
2. 定时器，定时器记得不用时要取消掉
3. 闭包，下面的代码，outer会一直保存着name的引用，outer不销毁，引用会一直存在。
```js
let outer = function () {
	let name = 'Jake'
	return funciton () {
		return name
	}
}
```
### 对象池
```js
function addVector(a, b) {
	let resultant = new Vector()
	resultant.x = a.x + b.x
	resultant.y = a.y + b.y
	return resultant
}
```
上面的函数如果频繁被调用，会被浏览器检测到这里对象的更替速度很快，进而频繁触发垃圾回收。
可以使用对象池，管理所有对象，使用时去对象池请求，不用时主动设为null，减少垃圾回收的触发
```js
let a1 = objPool.get()
let a2 = objPool.get()
let a3 = objPool.get()
...
a1 = null
a2 = null
a3 = null
```
上面是对象池一个伪代码，一般objPool的实现是一个数组，保存n个实例，每次使用时去对象池里请求即可，记得用完回收。
