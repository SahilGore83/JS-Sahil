// arrays

const myArray = [0, 1, 2, 3, 4, 5, 6]

const fruits = ["mango", "chikoo", "pineapple", "apple"]

const myArray2 = new Array(1, 2, 3 ,4)

// console.log(myArray[1]);

// Array methods

// myArray.push(7)
// myArray.push(8)
// myArray.pop()


// myArray.unshift(5)
// myArray.shift()

// console.log(myArray.includes(8));
// console.log(myArray.indexOf(5));

// const newarr = myArray.join()

// console.log(myArray);
// console.log(typeof newarr);

// slice, splice 

console.log("A", myArray);

const myn1 = myArray.slice(1, 3)
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1, 3)
console.log("C", myArray);
console.log(myn2);
