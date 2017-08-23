/**
 * 相对路径调用
 */
const fail = require('./module/export-fail')

fail() // hello world
console.log(fail.world) // undefined

/**
 * 为什么会这样？
 */