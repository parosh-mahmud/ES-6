// console.log('Hello es6')
// console.log('Hello webpack')
// console.log('Hello babel7')

// let user = { 
// 	name: "GFG", 
// 	gfg1:() => { 
// 		console.log("hello " + this.name); // no 'this' binding here 
// 	}, 
// 	gfg2(){	 
// 		console.log("Welcome to " + this.name); // 'this' binding works here 
// 	} 
// }; 
// user.gfg1(); 
// user.gfg2(); 
// function sqr(n=1) {
//     n
//     return n*n
// }
// console.log(sqr())

// function greet(name, msg) {
//     console.log(name.length)
//     console.log(`${name} ! ${msg}`)
// }
// greet('parosh','mahmud')

//  sum(...rest) {
//    return rest.reduce((a,b)=>a+b)
// }
// console.log(sum(1,2,3,4,5))
// let person = {
//     name: 'parosh',
//     email: 'prparosh@gmail.com',
//     address: {
//         city: 'jashore',
//         villege:'faridpur',
//     }
// }
// let { name, email,address} = person


// console.log(name)
// console.log(address.villege)
// let Obj = {
//     a: 29,
//     b:44
// }

// console.log(Object.entries(Obj))

// let Objarr = [
//     ['a', 10],
//     ['b',30]
// ]

// console.log(Object.fromEntries(Objarr))

// let s1 = Symbol()
// let s2 = Symbol('test symbol')

// console.log(s1)
// console.log(s2)

// console.log(s1===s2)

// let toss = {
//     HEAD: Symbol(Head),
//     TAIL: Symbol(Tail)
// }
// console.log(toss.HEAD)
// let arr = [1, 2, 3,]
// for (let i = 0; i <= arr.length; i++){
//     console.log(arr[i])
// }

// function creatIterator(collection) {
//     let i=0
//     return {
//         next() {
//             return {
//                 done: i >= collection.length,
//                 value:collection[i++]
//             }
//         }
//     }
// }
// let iterate = creatIterator(arr)


// console.log(arr[Symbol.iterator])


// let str = 'TEXT'

// for (let v of arr) {
//     console.log(v)
// }
// for (let str of str) {
//     console.log(str)
// }
    
//     let Obj = {
//     a: 29,
//     b:44
// }
// [Symbol.iterator]:function*() {
//     let currentValue = this.start
//     while (currentValue < this.end) {
//         yield currentValue++
//     }
// }
// let iterate=obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// function* generate() {
//     yield 1
//     yield 2
//     yield 3
// }
// let iterate = generate()
// console.log(iterate.next())
// let obj = {
//     start: 1,
//     end: 10,
//     [Symbol.iterator] : function() {
        
//     }
// }
// for (let v of Obj) {
//     console.log(v)
// }
// let set = new Set([1,2,3])
// set.add(5)
// set.add(6)
// console.log(set)
// console.log(set.has(5))
// console.log(set.keys(4))
// let map = new Map([
//     ['a', 10],
//     ['b',44]
// ])

// map.set('d', 4)
// map.delete('a')
// map.get('b')
// console.log(map)
// for (let [k, v] of map) {
//     console.log(v,k)
// }
// console.log(v,k)
// map.forEach((v,k) => {
//     console.log(k,v)
// })
// let a={a:10},b={b:44}
// let set = new Set([a,b])
//     console.log(set)
// let wekset = new WeakSet([a, b])
// wekset=null
// console.log(wekset)
// let WeakMap = new weakMap([[a, 45], [b, 55]])
// WeakMap()
// console.log(weakMap)

//this keywords

// function myFunc() {
//     console.log(this)
// }
// myFunc()

//factory pattern

// let creatRect = function (width,height) {
    
// return  {
//     width:width,
//     height:height,
//     draw: function () {
//         console.log('Hi i am rectangle')
//         this.printProperties()
//     },
//     printProperties: function () {
//         console.log('My width is ' + this.width)
//         console.log('My height is '+this.height)
//     }
// }
// }

// var rect1 = creatRect(10, 8)
// rect1.draw()

// let rect2 = creatRect(44,55)
// rect2.draw()

//Constructor pattern

// var CreatRect = function (width,height) {
//     this.width=width
//     this.height = height
    
//     this.draw = function () {
//         console.log('Hi i am rectangle')
//         this.printProperties()
//     }
//     this.printProperties = function () {
//         console.log('My width is ' + this.width)
//         console.log('My height is '+this.height)
//     }
// }
// var reactangle =new CreatRect(11, 12)
// reactangle.draw()
// reactangle.constructor
// var str = new String('str')
// console.log(str)
// function test() {
//     console.log('something')
// }
// function myFunc() {
//     console.log(this)
//     console.log(this.a+this.b)
// }
// myFunc.call({a:55,b:33})

// var n = 10
// function change(n) {
//     n = n + 100
//     console.log(n)
// }
// change()

// var obj = {
//     a: 20,
//     b:50
// }
// function changeMe(obj) {
//     obj.a = obj.a + 100
//     obj.b = obj.b + 100
//     console.log(obj)
// }
// changeMe(obj)

// var person = {
//     name:'Parosh mahmud'
// }
// var descreptor=Object.getOwnPropertyDescriptor(person,'name')

// console.log(descreptor)

// let baseobject = Object.getPrototypeOf(person)
// let descreptor = Object.getOwnPropertyDescriptor(baseobject),toString
// console.log(descreptor)


// let baseobject = Object.getPrototypeOf(person)

// let descreptor = Object.getOwnPropertyDescriptor(baseobject, 'toString')
// console.log(descreptor)



// Object.defineProperty(person, 'name', {
//     enumerable: false,
//     writable: false,
//     configurable:false
// })


// var keyvalue = Object.keys(person)
// console.log(keyvalue)

// function Person(name) {
//     this.name=name
// }
// var p1 = new Person('Parosh mahmud')
// console.log(Object.getPrototypeOf(p1))
// let arr = []
// Array.prototype.myMethod = function () { }
// console.log(arr)
// function Squre(width) {
//     this.width = width
    
// }
// Squre.prototype = {
//     draw:function () {
//         console.log(Draw)
//     }
// }




// var squre1 = new Squre(44)
// var squre2 = new Squre(54)
// squre1.draw()

function Shape() {
    
}
Shape.prototype = {
    comon: function () {
                console.log('I am a common method')
            }
}
function Squre(width) {
    this.width=width
}
Squre.prototype = {
    draw: function () {
        console.log('Drawing')
    },
    comon: function () {
        console.log('I am a common method')
    }
}
// function circle() {
    
// }
// circle.prototype = {
//     comon: function () {
//         console.log('I am a common method')
//     }
// }

var squre1 = new Squre(45)
var shape = new Shape()
console.log(shape)
console.log(squre1)
function circle() {
    
}

circle.prototype=Object.create(Shape.prototype)