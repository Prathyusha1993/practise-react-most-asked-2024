// currying is a functional programming technique that transforms a function with multiple arguments into a sequence of functions
// each taking single argument

const curry = (func) => {
    return function curried(...args) {
        if(args.length >= func.length){
            return func.apply(this, args);
        }
        return function(...args2){
            return curried.apply(this, [...args, ...args2]);
        };
    }
}

function sum(a, b, c){
    return a+ b +c;
}
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6