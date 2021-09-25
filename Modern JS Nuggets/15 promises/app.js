// Javascript Nuggets - Promises
// we use it with Async/await functions

// Pending, Rejected, FulFilled/resolve
// .then - for resolve output - data means data we receive with resolve
// .catch - for reject output - err means error/data we receive with reject

const value = 2

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3)
  console.log(random)
  if (random === value) {
    resolve('you guessed correctly')
  } else {
    reject('wrong number')
  }
})

console.log(promise)

promise
.then((data) => console.log(data))
.catch((err) => console.log(err))
