/****************
Array.prototype.map()
======================

map((element, index, array)=> {}) // arrow function
map(callbackFunction, thisArg) {} // callback function
map(function(element, index, array) {}, thisArg) // inline function

Use Cases
==========
1. Reformat the array of object
2. Map a non-array object to array
3. Map generically on a NodeList
4. Map sparse array
5. Map array contains undefined

****************/
const initialArray = [1, 2, 4, 5, 6]
console.log("Map with arrow function")
const multiplyByTwo = initialArray.map(x => x * 2)
console.log("result: ", multiplyByTwo)
console.log("==================================")

const thisArg = {key: 1}
console.log("Map with callback function")
let mapCallback = ((element, index, array)=> {
    console.log("this: ", JSON.stringify(this))
    return element * 2
})
const multiplyByTwoWithCallback = initialArray.map(mapCallback, thisArg)
console.log("result: ", multiplyByTwoWithCallback)
console.log("==================================")

console.log("Map with inline function")
const multiplyByTwoWithInline = initialArray.map(function(element, index, array) {
    console.log("this: ", JSON.stringify(this))
    return element * 2
}, thisArg)
console.log("result: ", multiplyByTwoWithInline)
console.log("==================================")