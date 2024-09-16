const debounce = (func, delay) => {
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

const log = debounce(() => console.log('Debounced!'), 2000);
window.addEventListener('resize', log);