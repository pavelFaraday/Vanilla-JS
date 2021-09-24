// Array.from - NOT ON PROTOTYPE
// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set !!!  Set/nodeList/string -> array
// https://youtu.be/zg1Bv4xubwo?list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ


const udemy = 'udemy'
console.log(Array.from(udemy)) // ['u', 'd', 'e', 'm', 'y']

const text = document.querySelectorAll('.text')
// console.log(text)

const newText = Array.from(text).find((item) => item.textContent === 'person')
// console.log(newText)

/* --------------- Create Pagination with Array.from() method --------------- */

const items = Array.from({ length: 120 }, (_, index) => {
  return index
})

const itemsPerPage = 14
const pages = Math.ceil(items.length / itemsPerPage)

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage
  const tempItems = items.slice(start, start + itemsPerPage)

  return tempItems
})
console.log(newItems)
