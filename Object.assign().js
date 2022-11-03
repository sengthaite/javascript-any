/***********************
Object.assign()
===============

Object.assign(target, ...sources)

***********************/

const target = { number : 1 }
const source = { number : 3, string: 'some string'}
console.log("target before modify: ", target)
const copy = Object.assign(target, source)
console.log("target after modified: ", target)
console.log("copy: ", copy)