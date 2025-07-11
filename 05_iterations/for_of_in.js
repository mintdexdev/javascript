/* for of - direct value: works on iterable object */
let colors = ["crimson", "red", "silver"]
// for (const color of colors) {
//   console.log(color)
// }
// for (const word of "starfall") {
//   console.log(word)
// }


/* Maps - unique values - itrateable */
const map = new Map()
map.set('IN', "India");
map.set('FR', "France");
map.set('JP', "Japan");
map.set('IN', "India");
map.delete('JP');
// for (const [key, value] of map) {
//   console.log(key,':', value)
// }


/* for in - index: works both on iterable and non iterable */
const fruits = { "ap": "apple", "ba": "banana", "ch": "cherry" };
// for (const i in colors) {
//   console.log(i)
// }
// for (const key in fruits) {
//   console.log(key)  // print value
// }
// for (const key in fruits) {
//   console.log(fruits[key]) // print value
// }

/* to directly use of 'in' convert object  to arry first. */
// for (const i of Object.values(fruits)) {
//   console.log(i)
// }

// or
// for (const [key, value] of Object.entries(fruits)) {
//   console.log(key, value)
// }