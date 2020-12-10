/* -------------------------------------------------------------------------- */
/*                                 Memoization                                */
/* -------------------------------------------------------------------------- */

/*
Memoization - save the results of your function to improve performance.

If you are calling functions repeatedly (just not two or three times), but many many times and you are passing in the same values again and again. If that function is something that computationally expensive - if it is something that is going to require a lot of processing power then you should save results of that function. Sp, if you call it with the same arguments again and again you can get better performance.

Memoization is the programmatic practice of making long recursive/iterative functions run much faster.
How, you ask? By caching the values that the function returns after its initial execution.
When we input the same value into our memoized function, it returns the value stored in the cache instead of running the function again, thus boosting performance. No longer does your program have to recalculate every number to get a result.

You can speed up the efficiency of your functions in JavaScript through Memoization. This is the process of caching the results of your functions so the next time they run with the same parameters they will run much faster.
Not to be used on every function but they can be of benefit when you have processor intensive work to do.
 */

const myFunc = (function buildFunc() {
    const memo = {};
  
    const getKey = ([a, b]) => {
      //we are always expecting to get two values
      let key = `${a}-${b}`;
      return key;
    };
  
    return (args) => {
      //this is the function that will be myFunc
      let key = getKey(args);
      if (memo[key]) {
        return memo[key];
      } else {
        let sum = 0;
        for (let i = args[0]; i > 0; i--) {
          sum += args[0] * args[1];
        }
        memo[key] = sum;
        return sum;
      }
    };
  })();
  
  let start = Date.now();
  let result1 = myFunc([9000008, 100001]);
  let result2 = myFunc([9000008, 100001]);
  let result3 = myFunc([9000008, 100001]);
  let result4 = myFunc([9000008, 100001]);
  let result5 = myFunc([9000008, 100001]);
  let result6 = myFunc([9000008, 100001]);
  let result7 = myFunc([9000008, 100001]);
  let end = Date.now();
  console.log(end - start);
  
  start = Date.now();
  result1 = myFunc([9000001, 100001]);
  result2 = myFunc([9000002, 100001]);
  result3 = myFunc([9000003, 100001]);
  result4 = myFunc([9000004, 100001]);
  result5 = myFunc([9000005, 100001]);
  result6 = myFunc([9000006, 100001]);
  result7 = myFunc([9000007, 100001]);
  end = Date.now();
  console.log(end - start);