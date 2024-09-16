//a deep clone function creates an ew object that is a deep copy of the original object, ensuring that nested objects are also copied.

const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}

const originalObj = {a:1, b:2, c:3, d: {e:4, f:5, g: {h:6}}};
const clonedObj = deepClone(originalObj);
clonedObj.d.e = 10;
console.log(originalObj.d.e); 