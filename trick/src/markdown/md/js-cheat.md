### 本文意在记录JS中的语法，可以理解为拳皇的出招表
	文章顺序参考JavaScript高级程序设计，不包含DOM、BOM等浏览器扩展的对象
	文章内会将有功能关联的方法/构造函数/对象等放在临近的位置
	后续考虑使用索引进行说明
本文代码中会提供部分示例以说明其使用方法，如果有不理解的或更好的优化建议，请在下方评论，下面开始使用JS出招表：
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
let num = (1, 2, 3, 4, 5) // 逗号操作符，num的值为0，即返回表达式中最后一个值
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
