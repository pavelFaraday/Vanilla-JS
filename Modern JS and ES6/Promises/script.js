/* -------------------------------------------------------------------------- */
/*                                   Promise                                  */
/* -------------------------------------------------------------------------- */

// Promise Object is used for deferred and asynchronous computations. And it represents an operation that that hasn't completed yet, but it expected in the future.
// For get a promise we must use 'then'.

// Immediately resolved Promise
let myPromise = Promise.resolve('Foo');

myPromise.then((res) => console.log(res));

/* -------------------------------------------------------------------------- */

var myPromise_2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(4), 10000);
});

myPromise_2.then((res) => {
    res += 3;
    console.log(res);
}); // 10 წამში დამიწერს 4+3 ჯამს (7) 

/* -------------------------------------------------------------------------- */

function getData(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function (data) {
    let todos = JSON.parse(data);
    let output = '';
    for (let todo of todos) {
        output += `
        <li>
          <h3>${todo.title}</h3>
          <p>Completed: ${todo.completed}</p>
        </li>
      `;
    }

    document.getElementById('template').innerHTML = output;
}).catch(function (err) {
    console.log(err);
});