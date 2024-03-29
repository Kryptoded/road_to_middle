// function filterNumber(arr) {
//     return arr.filter((value) => typeof value === 'number' && isFinite(value))
// }

// console.log(filterNumber([1,2, '3', 'тест']))


// function accum(inputStr) {
//     function repeatStr(str, count) {
//         let outputStr = str.toLocaleUpperCase()
//         let addedStr = str.toLowerCase()
//         for (let i = 0; i < count-1; i++) {
//             outputStr += addedStr
//         }
//         return outputStr
//     }
//     return Array.from(inputStr).reduce((acc, curr, index) => {
//         if (index != 0) {
//             return acc += '-' + repeatStr(curr, index+1)
//         } else {
//             return acc += repeatStr(curr, index + 1 )
//         }
//     }, '')
// }

// console.log(accum('abCd'))
// console.log(accum('RqaEzty'))
// console.log(accum('cwAt'))


// function computeMoney(products) {
//     return products.reduce((acc, item) => {
//         return acc += item.price * item.quantity
//     }, 0)
// }

// const result = computeMoney([
//     {
//         name:'Футболка', 
//         price:20, 
//         quantity: 2
//     },
//     {
//         name: 'Джинсы',
//         price: 50,
//         quantity: 1
//     },
//     {
//         name: 'Носки',
//         price: 5,
//         quantity: 10
//     },
//     {
//         name: 'Штаны',
//         price: 30,
//         quantity: 1
//     }
// ])

// console.log(result)

// const pr = new Promise((res, rej) => {
//     setTimeout(()=>{  rej(1) }, 5000)
// })

// let abc = pr.catch.bind(pr)


// abc((e)=>{
//     console.log(e * 10)
// })


// pr.catch((e)=>{
//     console.log(e * 10, 'last')
// })

// pr.then(()=>{
//     console.log('then')
//     return Promise.reject(2)
// })

// function hui(){
//     const promise = new Promise((res, rej)=>{
//         setTimeout(()=>{rej(1)}, 3000)
//     })
//     promise.catch((e)=>{
//         console.log(e * 1)
//     })
//     return promise
// }
// async function test(){
//     let response = await hui()
// }
// test()

// const promise = new Promise((res, rej)=>{
//       setTimeout(()=>{rej(1)}, 3000)
// })

// promise.catch((e)=>{
//     console.log(e*1)
// })


// function wordCount(inputStr) {
//     let startIndex = 0
//     const wordsCount = {}
//     const outputStr = ''
//     function addWord(words, word) {
//         if (!words[word]) {
//             words[word] = 1
//         } else {
//             words[word] += 1
//         }
//     }
//     for (let i = 0; i < inputStr.length; i ++) {
//         if (inputStr[i] === ' ') {
//             const word = inputStr.substring(startIndex, i)
//             addWord(wordsCount, word)
//             startIndex = i + 1
//         }
//         if (i === inputStr.length - 1) {
//             const word = inputStr.substring(startIndex, i+1)
//             addWord(wordsCount, word)
//         }
//     }
//     return Object.entries(wordsCount).reduce((acc, [word, count])=>{
//         return acc += `${word} - ${count} \n`
//     }, '')
// }

// console.log(wordCount('apple banana orange apple'))


// function comp(array1, array2){
//     let isComp = true
//     const aa1 = [...array1].sort((a, b) => a > b)
//     console.log(aa1)
//     const aa2 = [...array2].sort((a, b) => a > b)
//     console.log(aa2)
//     aa1.forEach((item, index)=> {
//         console.log(item, aa2[index])
//       if (item*item != aa2[index]) {
//         console.log('hui')
//         isComp = false
//       }
//     })
//     return isComp
//   }
//   let a1 =  [5, 5, 10, 6, 3, 0, 5, 3, 0, 6, 0, 8, 2, 8, 3, 9, 0, 1, 1, 7, 6, 1, 4];
//   let a2 =  [64, 25, 81, 9, 0, 0, 1, 1, 25, 9, 9, 36, 36, 4, 49, 0, 64, 36, 100, 1, 16, 0, 25];
//   console.log(comp(a1, a2));

// const a = [1,2,3,4,5,6]

// a[Symbol.iterator] = function() {
//   return {
//     self: this,
//     current: this.length-1,
//     next() {
//       if (this.current > -1) {
//         return { done: false, value: this.self[this.current--] } 
//       } else {
//         return { done: true }
//       }
//     }
//   }
// }

// for (const i of a) {
//   console.log(i)
// }

const object = {}

{
  let _value = 0
  object.getValue = function() {
    return _value
  }
  object.setValue = function(val) {
    _value = val
  }
}


object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство, а не должны уметь обращаться к нему
// console.log(object.getValue()); // 73

/*
Ожидание
object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство
object.getValue(); // 42
*/
// function canGetCount(n) {
//   let count = n
//   return function() {
//     if (count > 0) {
//       console.log('yes') 
//     } else {
//       console.log('no')
//     }
//     count--
//   }
// }

// const getOne = canGetCount(2);

// getOne()  // yes
// getOne()  // yes
// getOne()  // no

// const object2 = {
//   value: '42',
//   print () {
//     type = () => {
//       return typeof this.value;
//     }
    
//     console.log(`${this.value} is ${type()}`);
//   }
// }

// object2.print(); // Поправьте замыкание

// const obj = { x: 15 };

// function first() {
//    return this.x; // 15
// }

// function second() {
// 		return first.call(obj); // Вернёт undefined, а нужно 15
// }

// console.log(second())



// function plus(n) {
//   return this.valueOf() + n
// }

// function minus(n) {
//   return this.valueOf() - n 
// }

// Object.assign(Number.prototype, {plus, minus})

// console.log((20).plus(3).minus(1)) // 4

// function Book() {
//   this.name = 'foo';
// }

// Book.prototype = {
//   getName: function() {
//       return this.name;
//   },
//   getUpperName() {
//     return this.name.toUpperCase()
//   }
// }

// var book = new Book();

// // В этой строке определить метод getUpperName

// console.log(book.getUpperName()); // 'FOO'

// function makeChatsList(chats) {
//   const ul = document.createElement('ul')
//   chats.forEach(chat => {
//     const li = document.createElement('li')
//     li.textContent = chat.title + chat.lastMessage
//     ul.append(li)
//   })
//   return ul
// }

// const chats = [
//   {
//     title: 'hui', 
//     lastMessage: 'hui2'
//   }, 
//   {
//     title: 'hui3', 
//     lastMessage: 'hui4'
//   }
// ]

// console.log(makeChatsList(chats))

// 'use strict';

// const badResult = () => {
// 	for (var i = 0; i < 10; i++) {
// 	    setTimeout(function() {
// 	        console.log(i);
// 	    }, 10);
// 	}
// };

// const iifeSolution = () => {
// 	for (var i = 0; i < 10; i++) {
// 	    (function(i){
//         setTimeout(function() {
// 	        console.log(i);
// 	    }, 10)
//     })(i);
// 	}
// };

// function es6Solution() {
//   for (let i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 10);
// }
// }

// const arr = [1,2,3,4,5,6,7,8,9,0,99]

// const bindSolution = function () {
//   for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(arr[this.i]);
//     }.bind({i}), 10)
//   }
// };

// iifeSolution()
// es6Solution()
// bindSolution()

// function foo(callback) {
//   setTimeout(function() {
//       callback('A');
//   }, Math.random()*100);
// }

// function bar(callback) {
//   setTimeout(function() {
//       callback('B');
//   }, Math.random()*100);
// }

// function baz(callback) {
//   setTimeout(function() {
//       callback('C');
//   }, Math.random()*100);
// }


// function Promisificate(func) {
//   return new Promise((resolve, reject) => {
//     func(resolve)
//   })
// }

// (async function(){
//   console.log(await Promisificate(foo))
//   console.log(await Promisificate(bar))
//   console.log(await Promisificate(baz))
// })()


// function test2(text) {
//   console.log(text)
//   baz(console.log)
// }

// function test(text) {
//   console.log(text)
//   bar(test2)
// }

// foo(test)

// const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

// const promises = [
//     delay(65).then(() => 10),
//     delay(100).then(() => { throw 'my error'; })
// ];

// async function allSettled(promises) {
//   const newPromises = []
//   const output = []
//   promises.forEach(promise => {
//     const newPromise = promise.then((data)=>{
//       output.push({status: 'resolved', value: data})
//     })
//     .catch((e)=>{
//       output.push({status:'rejected', reason: e})
//     })
//     newPromises.push(newPromise)
//   });
//   await Promise.all(newPromises)
//   return output
// }
// (async function() {
//   console.log(await allSettled(promises))
// })()



// Promise.prototype.finally = function (fn) {
//   const pr = new Promise((res, rej) => {
//     res(fn())
//   })
//   return pr.then(()=>this.then(value => value))
// }

// const resolvedPromise = Promise.resolve('hui').finally(()=>Promise.resolve('huieee')).then((data)=>{console.log(data)})
// const rejectedPromise = Promise.reject('noHUI').finally(()=>{
//   throw 'jhoj'
// }).catch((e) => {console.log(e)})

function memoize(callback) {
  const cache = {}
  function generateKey(args) {
    return args.map(item => `${typeof item}<${item}>`).join(',')
  }
  return function memoizeCallback(...args) {
    let key = generateKey(args)
    if (cache[key] === undefined) {
      return Promise.resolve(callback(...args)).then(data => {
       cache[key] = data;
        return data
      })
    }
    return Promise.resolve(cache[key])
  }
}

function sum(a,b) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(a+b)
    }, 3000)
  })
}

function noAsyncSum(a,b) {
  return a + b
}

const noAsyncMemoSum = memoize(noAsyncSum)

const memoSum = memoize(sum)

noAsyncMemoSum(6,6).then((data) => console.log(data))

memoSum(5,5)
.then((data)=>{
  console.log(data)
  return memoSum(5,5)
}).then((data)=>{
  console.log(data)
  return memoSum(10,10)
})
.then((data)=>{
  console.log(data)
})
.catch((e)=>{
  console.log(e)
  return memoSum(5,5)
})
memoSum(5,5).then((data)=>{console.log(data);})