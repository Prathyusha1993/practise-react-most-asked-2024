// Memoization is an optimization technique that stores the result of an expensive calculations and returns 
//the cached result when the same input occurs again

const memoize = (func) => {
    const cache = {};
    return function(...args){
        const key = JSON.stringify(args);
        if(cache[key]) {
            return cache[key];
        }
        const result = func.apply(this, args);
        cache[key] = result;
        return result;
    };
}

const fibonacci = memoizze( n=> (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)));    
console.log(fibonacci(40)); 