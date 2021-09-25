/* 
A callback function is a function that is passed as an argument to another function, to be “called back” at a later time. A function that accepts other functions as arguments is called a higher-order function, which contains the logic for when the callback function gets executed.
*/

function makeUppercase(value) {
  console.log(value.toUpperCase())
}
// makeUppercase('peter')

function reverseString(value) {
  console.log(value.split('').reverse().join(''))
}

function handleName(name, cb) {
  const fullName = `${name} smith`
  console.log(fullName)
  cb(fullName)
}
handleName('peter', makeUppercase)
// handleName('peter', reverseString)


/* -------------------------------------------------------------------------- */

const btn = document.querySelector('.btn')

btn.addEventListener('click', function () {
  console.log('hello world')
})

// btn.addEventListener('click', sayHello)

// function sayHello() {
//   console.log('hello people')
// }

// array methods, setTimeout etc
